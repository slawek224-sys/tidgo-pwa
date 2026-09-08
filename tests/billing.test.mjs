import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const source = fs.readFileSync(new URL('../billing.js', import.meta.url), 'utf8');
const {createBilling, stripeDestination, subscriptionDateDetail, compactSubscriptionStatus} = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
function fixture(kind = '', status = {allowed:true, subscription_status:null}) {
  const panel = {isConnected:true, innerHTML:''};
  const badge = {isConnected:true, hidden:true, dataset:{}, textContent:''};
  const onboarding = {isConnected:true, innerHTML:'', querySelectorAll:()=>[], querySelector:()=>null};
  const storage = new Map(), calls = [], events = {}, timers = new Map();
  let timerId = 0;
  let account = {id:'test-user'}, destination = '', fail = false;
  const localStorage = new Map();
  const win = {location:{pathname:'/settings/',search:`?billing=${kind}`,href:`https://tidgo.co.uk/settings/?billing=${kind}`,assign:url=>{destination=url;}},history:{state:{},replaceState(){}},sessionStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},localStorage:{getItem:k=>localStorage.get(k),setItem:(k,v)=>localStorage.set(k,v)},addEventListener:(name,fn)=>events[name]=fn};
  const billing = createBilling({win,doc:{getElementById:id=>({billingPanel:panel,billingStatusBadge:badge,billingOnboardingHost:onboarding})[id] || null},setTimer:fn=>{timers.set(++timerId,fn);return timerId;},clearTimer:id=>timers.delete(id),user:()=>account,language:()=> 'en',escape:String,api:async(path, options)=>{
    calls.push({path, options});
    if (fail) throw Error('offline');
    return options ? {checkout_url:'https://checkout.stripe.com/c/pay/test',portal_url:'https://billing.stripe.com/p/session/test'} : status;
  }});
  return {billing,panel,badge,onboarding,calls,events,storage,localStorage,timers,logout:()=>account=null,login:()=>account={id:'test-user'},fail:()=>fail=true,destination:()=>destination,click:action=>panel.onclick({target:{closest:()=>({dataset:{billing:action}})}}),clickOnboarding:action=>onboarding.onclick({target:{closest:()=>({dataset:{trialOnboarding:action}})}})};
}
test('success URL never grants active status or offers another checkout', async()=>{
  const f=fixture('success'); f.logout(); f.billing.mount();
  assert.equal(f.calls.length,0); assert.equal(f.billing.wantsSettings(),true);
  f.login(); f.billing.mount(); await tick();
  assert.equal(f.billing.wantsSettings(),false);
  assert.match(f.panel.innerHTML,/Waiting for the subscription/);
  assert.match(f.panel.innerHTML,/No subscription/);
  await f.click('checkout'); assert.equal(f.calls.length,1);
  f.billing.stop();
});
test('checkout uses backend URL and blocks repeat clicks',async()=>{
  const f=fixture('cancelled'); f.billing.mount(); await tick();
  assert.match(f.panel.innerHTML,/Checkout cancelled/);
  await f.click('checkout'); await f.click('checkout');
  assert.equal(f.calls.filter(c=>c.options).length,1);
  assert.equal(f.calls[1].path,'/api/billing/create-checkout-session');
  assert.deepEqual(JSON.parse(f.calls[1].options.body),{user_id:'test-user'});
  assert.match(f.destination(),/^https:\/\/checkout.stripe.com\//);
  f.events.pageshow({persisted:true}); await tick();
  assert.equal(f.calls.filter(c=>!c.options).length,2);
  f.billing.stop();
});
test('active subscription uses portal; errors remain visible',async()=>{
  const f=fixture('portal',{allowed:true,subscription_status:'active',stripe_subscription_id:'sub_test',stripe_customer_id:'cus_test'});
  f.billing.mount(); await tick();
  assert.match(f.panel.innerHTML,/>Active</); assert.doesNotMatch(f.panel.innerHTML,/data-billing="checkout"/);
  await f.click('portal'); assert.equal(f.calls[1].path,'/api/billing/create-portal-session');
  assert.match(f.destination(),/^https:\/\/billing.stripe.com\//);
  f.billing.stop();
  const bad=fixture(); bad.fail(); bad.billing.mount(); await tick();
  assert.match(bad.panel.innerHTML,/Unable to check/); assert.doesNotMatch(bad.panel.innerHTML,/data-billing="checkout"/);
  bad.billing.stop();
});
test('only expected HTTPS Stripe hosts are accepted',()=>{
  for (const url of ['https://evil.example','http://checkout.stripe.com','https://checkout.stripe.com.evil.example','https://checkout.stripe.com:444','https://user@checkout.stripe.com']) assert.throws(()=>stripeDestination(url,'checkout'));
  assert.equal(stripeDestination('https://billing.stripe.com/p/test','portal'),'https://billing.stripe.com/p/test');
});

test('portal cancellation is shown from backend flag, with no polling or remount refetch', async()=>{
  const status={allowed:true,subscription_status:'trialing',stripe_subscription_id:'sub_test',stripe_customer_id:'cus_test',cancel_at_period_end:true};
  const f=fixture('portal',status); f.billing.mount(); await tick();
  assert.match(f.panel.innerHTML,/Trial · Cancellation scheduled/);
  assert.equal(f.timers.size,0);
  f.billing.mount(); await tick();
  assert.equal(f.calls.length,1);
  assert.doesNotMatch(f.panel.innerHTML,/Checking subscription/);
  status.cancel_at_period_end=false;
  await f.click('refresh');
  assert.equal(f.calls.length,2);
  assert.doesNotMatch(f.panel.innerHTML,/Cancellation scheduled/);
  assert.equal(f.timers.size,0);
  f.billing.stop();
});

test('only success retries pending webhook and stops on confirmation', async()=>{
  const status={allowed:true,subscription_status:'trialing'};
  const f=fixture('success',status); f.billing.mount(); await tick();
  assert.equal(f.timers.size,1);
  status.stripe_subscription_id='sub_test';
  await [...f.timers.values()][0]();
  assert.equal(f.calls.length,2);
  assert.equal(f.timers.size,0);
  assert.doesNotMatch(f.panel.innerHTML,/Waiting for the subscription/);
  f.billing.stop();
});

test('trial and scheduled cancellation show a real end date', async()=>{
  const end='2026-09-22T00:00:00Z';
  assert.equal(subscriptionDateDetail({subscription_status:'trialing',subscription_current_period_end:end},'en'),'Trial ends 22 September 2026.');
  assert.equal(subscriptionDateDetail({subscription_status:'trialing',subscription_current_period_end:end,cancel_at_period_end:true},'pl'),'Dostęp kończy się 22 września 2026.');
  assert.equal(subscriptionDateDetail({subscription_status:'trialing',trial_ends_at:end},'ro'),'Perioada de probă se încheie la 22 septembrie 2026.');
  assert.equal(subscriptionDateDetail({subscription_status:'trialing',subscription_current_period_end:'invalid'},'en'),'');
  const f=fixture('portal',{allowed:true,subscription_status:'trialing',stripe_subscription_id:'sub_test',stripe_customer_id:'cus_test',subscription_current_period_end:end,cancel_at_period_end:true});
  f.billing.mount(); await tick();
  assert.match(f.panel.innerHTML,/Trial · Cancellation scheduled/);
  assert.match(f.panel.innerHTML,/Access ends 22 September 2026/);
  f.billing.stop();
});

test('compact status gives a subtle, dated home-screen summary', ()=>{
  const end='2026-09-22T00:00:00Z';
  const unixEnd=Date.parse(end) / 1000;
  assert.deepEqual(compactSubscriptionStatus({subscription_status:'trialing',subscription_current_period_end:end},'en'),{text:'Trial to 22 Sept',tone:'trial'});
  assert.deepEqual(compactSubscriptionStatus({subscription_status:'trialing',trial_end:unixEnd,cancel_at_period_end:true},'en'),{text:'Ends 22 Sept',tone:'ending'});
  assert.deepEqual(compactSubscriptionStatus({subscription_status:'past_due'},'pl'),{text:'Problem z płatnością',tone:'issue'});
});

test('no-subscription user sees a dismissible, non-blocking trial offer once', async()=>{
  const status={allowed:false,reason:'no_subscription',subscription_status:null};
  const f=fixture('',status);
  f.billing.mountCompact(); await tick();
  assert.match(f.onboarding.innerHTML,/Start your 14-day free trial/);
  assert.match(f.onboarding.innerHTML,/No card required/);
  await f.clickOnboarding('later');
  assert.equal(f.onboarding.innerHTML,'');
  assert.equal(f.localStorage.get('tidgo_trial_onboarding_dismissed:test-user'),'true');
  f.billing.stop();
});

test('trial onboarding starts the existing Stripe Checkout flow', async()=>{
  const f=fixture('',{allowed:false,reason:'no_subscription',subscription_status:null});
  f.billing.mountCompact(); await tick();
  await f.clickOnboarding('start');
  assert.equal(f.calls[1].path,'/api/billing/create-checkout-session');
  assert.deepEqual(JSON.parse(f.calls[1].options.body),{user_id:'test-user'});
  assert.match(f.destination(),/^https:\/\/checkout\.stripe\.com\//);
  f.billing.stop();
});
