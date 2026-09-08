const TEXT = {
  uk: ['Підписка', 'Оформити підписку', 'Керувати оплатою', 'Оновити статус', 'Перевіряємо підписку…', 'Не вдалося перевірити підписку. Спробуйте ще раз.', 'Ви повернулися з оплати. Очікуємо статус підписки від сервера.', 'Оплату скасовано. Статус підписки наведено нижче.', 'Ви повернулися з платіжного порталу. Статус оновлено.', 'Немає підписки', 'Активна', 'Пробний період', 'Прострочений платіж', 'Скасована', 'Очікується', 'Безкоштовний доступ', 'Скасування заплановано', 'Не вдалося відкрити оплату. Спробуйте ще раз.'],
  lv: ['Abonements', 'Abonēt', 'Pārvaldīt maksājumus', 'Atjaunināt statusu', 'Pārbaudām abonementu…', 'Neizdevās pārbaudīt abonementu. Mēģini vēlreiz.', 'Atgriezies no maksājuma lapas. Gaidām abonementa statusu no servera.', 'Maksājums atcelts. Abonementa statuss redzams zemāk.', 'Atgriezies no maksājumu portāla. Statuss atjaunināts.', 'Nav abonementa', 'Aktīvs', 'Izmēģinājuma periods', 'Kavēts maksājums', 'Atcelts', 'Gaida', 'Bezmaksas piekļuve', 'Atcelšana ieplānota', 'Neizdevās atvērt maksājumu. Mēģini vēlreiz.'],
  es: ['Suscripción', 'Suscribirse', 'Gestionar pagos', 'Actualizar estado', 'Comprobando suscripción…', 'No se pudo comprobar la suscripción. Inténtalo de nuevo.', 'Has vuelto del pago. Esperamos el estado de la suscripción del servidor.', 'Pago cancelado. El estado de tu suscripción aparece debajo.', 'Has vuelto del portal de pagos. El estado se ha actualizado.', 'Sin suscripción', 'Activa', 'Periodo de prueba', 'Pago pendiente', 'Cancelada', 'Pendiente', 'Acceso gratuito', 'Cancelación programada', 'No se pudo abrir el pago. Inténtalo de nuevo.'],
  bg: ['Абонамент', 'Абонирай се', 'Управление на плащанията', 'Обнови статуса', 'Проверяваме абонамента…', 'Не успяхме да проверим абонамента. Опитай отново.', 'Върна се от плащането. Изчакваме статуса на абонамента от сървъра.', 'Плащането е отменено. Статусът на абонамента е показан по-долу.', 'Върна се от портала за плащания. Статусът е обновен.', 'Няма абонамент', 'Активен', 'Пробен период', 'Просрочено плащане', 'Отменен', 'В изчакване', 'Безплатен достъп', 'Планирано отменяне', 'Не успяхме да отворим плащането. Опитай отново.'],
  en: ['Subscription', 'Subscribe', 'Manage billing', 'Refresh status', 'Checking subscription…', 'Unable to check your subscription. Try again.', 'Returned from Checkout. Waiting for the subscription status from the server.', 'Checkout cancelled. Your subscription status is shown below.', 'Returned from the billing portal. Your status has been refreshed.', 'No subscription', 'Active', 'Trial', 'Payment overdue', 'Cancelled', 'Pending', 'Free access', 'Cancellation scheduled', 'Could not open payments. Please try again.'],
  pl: ['Subskrypcja', 'Subskrybuj', 'Zarządzaj płatnościami', 'Odśwież status', 'Sprawdzamy subskrypcję…', 'Nie udało się sprawdzić subskrypcji. Spróbuj ponownie.', 'Powrót z płatności. Czekamy na status subskrypcji z serwera.', 'Płatność anulowana. Status subskrypcji widzisz poniżej.', 'Powrót z panelu płatności. Status został odświeżony.', 'Brak subskrypcji', 'Aktywna', 'Okres próbny', 'Zaległa płatność', 'Anulowana', 'Oczekująca', 'Bezpłatny dostęp', 'Zaplanowano anulowanie', 'Nie udało się otworzyć płatności. Spróbuj ponownie.'],
  ro: ['Abonament', 'Abonează-te', 'Gestionează plățile', 'Actualizează starea', 'Verificăm abonamentul…', 'Nu am putut verifica abonamentul. Încearcă din nou.', 'Ai revenit de la plată. Așteptăm starea abonamentului de la server.', 'Plata a fost anulată. Starea abonamentului apare mai jos.', 'Ai revenit din portalul de plăți. Starea a fost actualizată.', 'Fără abonament', 'Activ', 'Perioadă de probă', 'Plată restantă', 'Anulat', 'În așteptare', 'Acces gratuit', 'Anulare programată', 'Nu am putut deschide plata. Încearcă din nou.'],
  lt: ['Prenumerata', 'Prenumeruoti', 'Tvarkyti mokėjimus', 'Atnaujinti būseną', 'Tikrinama prenumerata…', 'Nepavyko patikrinti prenumeratos. Bandyk dar kartą.', 'Grįžai iš mokėjimo puslapio. Laukiame prenumeratos būsenos iš serverio.', 'Mokėjimas atšauktas. Prenumeratos būsena pateikta žemiau.', 'Grįžai iš mokėjimų portalo. Būsena atnaujinta.', 'Prenumeratos nėra', 'Aktyvi', 'Bandomasis laikotarpis', 'Pradelstas mokėjimas', 'Atšaukta', 'Laukiama', 'Nemokama prieiga', 'Suplanuotas atšaukimas', 'Nepavyko atidaryti mokėjimo. Bandyk dar kartą.']
};

const DATE_TEXT = {
  en: {locale: 'en-GB', trial: 'Trial ends {date}.', access: 'Access ends {date}.'},
  pl: {locale: 'pl-PL', trial: 'Okres próbny kończy się {date}.', access: 'Dostęp kończy się {date}.'},
  ro: {locale: 'ro-RO', trial: 'Perioada de probă se încheie la {date}.', access: 'Accesul se încheie la {date}.'},
  uk: {locale: 'uk-UA', trial: 'Пробний період закінчується {date}.', access: 'Доступ закінчується {date}.'},
  lt: {locale: 'lt-LT', trial: 'Bandomasis laikotarpis baigiasi {date}.', access: 'Prieiga baigiasi {date}.'},
  lv: {locale: 'lv-LV', trial: 'Izmēģinājuma periods beidzas {date}.', access: 'Piekļuve beidzas {date}.'},
  es: {locale: 'es-ES', trial: 'El periodo de prueba termina el {date}.', access: 'El acceso termina el {date}.'},
  bg: {locale: 'bg-BG', trial: 'Пробният период приключва на {date}.', access: 'Достъпът приключва на {date}.'}
};

const COMPACT_TEXT = {
  en: {active: 'Active', trial: 'Trial', trialTo: 'Trial to {date}', renews: 'Renews {date}', ends: 'Ends {date}', issue: 'Payment issue', start: 'Start free trial'},
  pl: {active: 'Aktywna', trial: 'Okres próbny', trialTo: 'Próba do {date}', renews: 'Odnowienie {date}', ends: 'Wygasa {date}', issue: 'Problem z płatnością', start: 'Rozpocznij trial'},
  ro: {active: 'Activ', trial: 'Perioadă de probă', trialTo: 'Probă până la {date}', renews: 'Reînnoire {date}', ends: 'Expiră {date}', issue: 'Problemă de plată', start: 'Începe perioada gratuită'},
  uk: {active: 'Активна', trial: 'Пробний період', trialTo: 'Пробний до {date}', renews: 'Поновлення {date}', ends: 'До {date}', issue: 'Проблема з оплатою', start: 'Почати пробний період'},
  lt: {active: 'Aktyvi', trial: 'Bandomoji', trialTo: 'Bandomoji iki {date}', renews: 'Atnaujinama {date}', ends: 'Baigiasi {date}', issue: 'Mokėjimo problema', start: 'Pradėti nemokamai'},
  lv: {active: 'Aktīvs', trial: 'Izmēģinājums', trialTo: 'Izmēģinājums līdz {date}', renews: 'Atjaunošana {date}', ends: 'Beidzas {date}', issue: 'Maksājuma problēma', start: 'Sākt bez maksas'},
  es: {active: 'Activa', trial: 'Prueba', trialTo: 'Prueba hasta {date}', renews: 'Renueva {date}', ends: 'Termina {date}', issue: 'Problema de pago', start: 'Empezar prueba'},
  bg: {active: 'Активен', trial: 'Пробен период', trialTo: 'Пробен до {date}', renews: 'Подновяване {date}', ends: 'Изтича {date}', issue: 'Проблем с плащането', start: 'Започнете пробен период'}
};

const ONBOARDING_TEXT = {
  en: {title: 'Start your 14-day free trial', text: 'No card required. Keep using TidGo and decide later whether it works for you.', start: 'Start free trial', later: 'Not now', error: 'Could not start the trial. Try again from Settings.'},
  pl: {title: 'Rozpocznij 14-dniowy bezpłatny okres próbny', text: 'Karta nie jest wymagana. Korzystaj z TidGo i później zdecyduj, czy Ci odpowiada.', start: 'Rozpocznij bezpłatny trial', later: 'Nie teraz', error: 'Nie udało się rozpocząć okresu próbnego. Spróbuj ponownie w Ustawieniach.'},
  ro: {title: 'Începe perioada de probă gratuită de 14 zile', text: 'Nu este necesar un card. Folosește TidGo și decide mai târziu dacă ți se potrivește.', start: 'Începe perioada gratuită', later: 'Nu acum', error: 'Perioada de probă nu a putut fi pornită. Încearcă din Setări.'},
  uk: {title: 'Почніть безкоштовний 14-денний пробний період', text: 'Картка не потрібна. Користуйтеся TidGo й пізніше вирішіть, чи він вам підходить.', start: 'Почати безкоштовний період', later: 'Не зараз', error: 'Не вдалося почати пробний період. Спробуйте в Налаштуваннях.'},
  lt: {title: 'Pradėkite nemokamą 14 dienų bandomąjį laikotarpį', text: 'Kortelės nereikia. Naudokitės TidGo ir vėliau nuspręskite, ar jis jums tinka.', start: 'Pradėti nemokamą laikotarpį', later: 'Ne dabar', error: 'Nepavyko pradėti bandomojo laikotarpio. Bandykite Nustatymuose.'},
  lv: {title: 'Sāciet bezmaksas 14 dienu izmēģinājumu', text: 'Karte nav nepieciešama. Lietojiet TidGo un vēlāk izlemiet, vai tas jums der.', start: 'Sākt bezmaksas izmēģinājumu', later: 'Ne tagad', error: 'Neizdevās sākt izmēģinājumu. Mēģiniet sadaļā Iestatījumi.'},
  es: {title: 'Empieza tu prueba gratuita de 14 días', text: 'No necesitas tarjeta. Usa TidGo y decide más adelante si te sirve.', start: 'Empezar prueba gratuita', later: 'Ahora no', error: 'No se pudo iniciar la prueba. Inténtalo desde Ajustes.'},
  bg: {title: 'Започнете безплатен 14-дневен пробен период', text: 'Не е необходима карта. Използвайте TidGo и решете по-късно дали ви е подходящ.', start: 'Започнете безплатния период', later: 'Не сега', error: 'Пробният период не можа да започне. Опитайте от Настройки.'}
};

function billingEndDate(data) {
  const raw = data?.subscription_current_period_end ?? data?.trial_ends_at ?? data?.current_period_end ?? data?.trial_end;
  if (raw === null || raw === undefined || raw === '') return null;
  const normalized = typeof raw === 'number' && raw < 100000000000 ? raw * 1000 : raw;
  const date = new Date(normalized);
  return Number.isFinite(date.getTime()) ? date : null;
}

export function stripeDestination(raw, kind) {
  const url = new URL(raw);
  const host = kind === 'checkout' ? 'checkout.stripe.com' : 'billing.stripe.com';
  if (url.protocol !== 'https:' || url.hostname !== host || url.port || url.username || url.password) throw new Error('Invalid payment destination');
  return url.href;
}

export function subscriptionLabel(data, words) {
  if (data.lifetime_free) return words[15];
  const labels = {active: 10, trialing: 11, past_due: 12, unpaid: 12, canceled: 13, incomplete: 14, incomplete_expired: 13, paused: 14};
  const label = words[labels[data.subscription_status] ?? 9];
  return data.cancel_at_period_end === true ? `${label} · ${words[16]}` : label;
}

export function subscriptionDateDetail(data, language = 'en') {
  if (!data || data.lifetime_free) return '';
  const date = billingEndDate(data);
  if (!date) return '';
  const copy = DATE_TEXT[language] || DATE_TEXT.en;
  const formatted = new Intl.DateTimeFormat(copy.locale, {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'}).format(date);
  const template = data.cancel_at_period_end === true ? copy.access : data.subscription_status === 'trialing' ? copy.trial : '';
  return template ? template.replace('{date}', formatted) : '';
}

export function compactSubscriptionStatus(data, language = 'en') {
  if (!data || data.lifetime_free) return null;
  const copy = COMPACT_TEXT[language] || COMPACT_TEXT.en;
  const status = String(data.subscription_status || '').toLowerCase();
  const date = billingEndDate(data);
  const dateText = date
    ? new Intl.DateTimeFormat((DATE_TEXT[language] || DATE_TEXT.en).locale, {day: 'numeric', month: 'short', timeZone: 'UTC'}).format(date)
    : '';
  if (data.reason === 'no_subscription') return {text: copy.start, tone: 'start'};
  if (data.cancel_at_period_end === true) return {text: dateText ? copy.ends.replace('{date}', dateText) : copy.ends.replace(' {date}', ''), tone: 'ending'};
  if (['past_due', 'unpaid', 'incomplete', 'paused'].includes(status)) return {text: copy.issue, tone: 'issue'};
  if (status === 'trialing') return {text: dateText ? copy.trialTo.replace('{date}', dateText) : copy.trial, tone: 'trial'};
  if (['active', 'paid'].includes(status)) return {text: dateText ? copy.renews.replace('{date}', dateText) : copy.active, tone: 'active'};
  return null;
}

export function createBilling({api, user, language, escape, win = window, doc = document, setTimer = setTimeout, clearTimer = clearTimeout}) {
  const key = 'tidgo_billing_return';
  let pending = false, returnKind = '', timer, busy = false, leaving = false, version = 0;
  let snapshot = null, attempts = 0;
  const query = new URLSearchParams(win.location.search).get('billing');
  const settingsRoute = win.location.pathname.replace(/\/+$/, '') === '/settings';
  try {
    const saved = JSON.parse(win.sessionStorage.getItem(key) || 'null');
    if (saved && Date.now() - saved.time < 3600000) { pending = true; returnKind = saved.kind; }
  } catch { /* Session storage may be unavailable in private browsing. */ }
  if (settingsRoute) {
    pending = true;
    returnKind = ['success', 'cancelled', 'portal'].includes(query) ? query : '';
    try { win.sessionStorage.setItem(key, JSON.stringify({kind: returnKind, time: Date.now()})); } catch {}
  }
  function clearPending() {
    pending = false;
    try { win.sessionStorage.removeItem(key); } catch {}
    const url = new URL(win.location.href);
    url.searchParams.delete('billing');
    win.history.replaceState(win.history.state, '', url.pathname + url.search + url.hash);
  }
  function stop() { version++; clearTimer(timer); }
  const trialDismissalKey = id => `tidgo_trial_onboarding_dismissed:${id}`;
  function recordCreationBlockReason() {
    const data = snapshot?.data;
    return data?.allowed === false ? data.reason || 'payment_required' : '';
  }
  function showTrialOffer() {
    const id = user()?.id;
    if (!id) return;
    try { win.localStorage.removeItem(trialDismissalKey(id)); } catch {}
    mountCompact();
  }
  function mountCompact() {
    const target = doc.getElementById('billingStatusBadge');
    const onboarding = doc.getElementById('billingOnboardingHost');
    const id = user()?.id;
    if ((!target && !onboarding) || !id) return;
    const current = version;
    const valid = () => current === version && (!target || target.isConnected) && (!onboarding || onboarding.isConnected) && user()?.id === id;
    const dismissalKey = trialDismissalKey(id);
    const dismissed = () => {
      try { return win.localStorage.getItem(dismissalKey) === 'true'; } catch { return false; }
    };
    const dismiss = () => {
      try { win.localStorage.setItem(dismissalKey, 'true'); } catch {}
      if (onboarding) onboarding.innerHTML = '';
    };
    const drawOnboarding = data => {
      if (!onboarding || !valid()) return;
      if (data?.reason !== 'no_subscription' || dismissed()) {
        onboarding.innerHTML = '';
        return;
      }
      const copy = ONBOARDING_TEXT[language()] || ONBOARDING_TEXT.en;
      onboarding.innerHTML = `<div class="trial-onboarding-backdrop"><section class="trial-onboarding" role="dialog" aria-modal="true" aria-labelledby="trialOnboardingTitle"><span class="trial-onboarding-mark" aria-hidden="true">14</span><h2 id="trialOnboardingTitle">${escape(copy.title)}</h2><p>${escape(copy.text)}</p><p class="trial-onboarding-error" role="status" aria-live="polite"></p><div class="trial-onboarding-actions"><button type="button" class="primary" data-trial-onboarding="start">${escape(copy.start)}</button><button type="button" class="quiet" data-trial-onboarding="later">${escape(copy.later)}</button></div></section></div>`;
      onboarding.onclick = async event => {
        const action = event.target.closest('[data-trial-onboarding]')?.dataset.trialOnboarding;
        if (action === 'later') return dismiss();
        if (action !== 'start' || leaving) return;
        leaving = true;
        onboarding.querySelectorAll('button').forEach(button => { button.disabled = true; });
        try {
          const result = await api('/api/billing/create-checkout-session', {method: 'POST', body: JSON.stringify({user_id: id})});
          if (!valid()) return;
          const destination = stripeDestination(result.checkout_url, 'checkout');
          dismiss();
          win.location.assign(destination);
        } catch {
          leaving = false;
          onboarding.querySelectorAll('button').forEach(button => { button.disabled = false; });
          const error = onboarding.querySelector('.trial-onboarding-error');
          if (error) error.textContent = copy.error;
        }
      };
    };
    const draw = data => {
      if (!valid()) return;
      doc.querySelectorAll?.('[data-requires-active-plan]').forEach(control => {
        const locked = data?.allowed === false;
        control.dataset.planLocked = locked ? 'true' : 'false';
        control.setAttribute('aria-disabled', locked ? 'true' : 'false');
      });
      const compact = compactSubscriptionStatus(data, language());
      if (target) {
        target.hidden = !compact;
        if (compact) {
          target.dataset.tone = compact.tone;
          target.textContent = compact.text;
        }
      }
      drawOnboarding(data);
    };
    if (snapshot?.id === id && Date.now() - snapshot.time < 15000) {
      draw(snapshot.data);
      return;
    }
    api(`/api/billing/status?user_id=${encodeURIComponent(id)}`)
      .then(data => {
        if (!valid() || !data || typeof data !== 'object' || typeof data.allowed !== 'boolean') return;
        snapshot = {id, data, time: Date.now(), message: ''};
        draw(data);
      })
      .catch(() => {});
  }
  function mount() {
    stop();
    const target = doc.getElementById('billingPanel');
    const id = user()?.id;
    if (!id) snapshot = null;
    if (!target || !id) return;
    if (pending) clearPending();
    const current = version;
    const words = TEXT[language()] || TEXT.en;
    let data = snapshot?.id === id ? snapshot.data : null;
    const valid = () => current === version && target.isConnected && user()?.id === id;
    const button = (action, text, disabled = false) => `<button type="button" class="secondary" data-billing="${action}" ${disabled ? 'disabled' : ''}>${escape(text)}</button>`;
    function draw(message = '', loading = false, error = false) {
      if (!valid()) return;
      const subscribed = data?.stripe_subscription_id && !['canceled', 'incomplete_expired'].includes(data.subscription_status);
      const dateDetail = subscriptionDateDetail(data, language());
      target.innerHTML = `<h2>${escape(words[0])}</h2><p role="status" aria-live="polite">${escape(message)}</p>${data ? `<p><strong>${escape(subscriptionLabel(data, words))}</strong></p>${dateDetail ? `<p class="billing-date-detail">${escape(dateDetail)}</p>` : ''}` : ''}<div class="billing-actions">${data && !subscribed && !data.lifetime_free ? button('checkout', words[1], busy || leaving || loading || error || returnKind === 'success') : ''}${data?.stripe_customer_id ? button('portal', words[2], busy || leaving || loading || error) : ''}${button('refresh', words[3], busy || leaving || loading)}</div>`;
    }
    async function refresh() {
      clearTimer(timer);
      draw(words[4], true);
      try {
        const response = await api(`/api/billing/status?user_id=${encodeURIComponent(id)}`);
        if (!valid()) return;
        if (!response || typeof response !== 'object' || typeof response.allowed !== 'boolean') throw Error('Invalid status');
        data = response;
        const confirmed = data.stripe_subscription_id && ['active', 'trialing'].includes(data.subscription_status);
        const message = returnKind === 'success' && !confirmed ? words[6] : returnKind === 'cancelled' ? words[7] : returnKind === 'portal' ? words[8] : '';
        snapshot = {id, data, time: Date.now(), message};
        draw(message);
        if (returnKind === 'success' && !confirmed && attempts++ < 4) timer = setTimer(refresh, 2500);
      } catch { snapshot = null; draw(words[5], false, true); }
    }
    target.onclick = async event => {
      const control = event.target.closest('[data-billing]');
      const action = control?.dataset.billing;
      if (!['refresh', 'checkout', 'portal'].includes(action) || control.disabled || busy || leaving || !valid()) return;
      if (action === 'checkout' && returnKind === 'success') return;
      if (action === 'refresh') { attempts = 0; return refresh(); }
      busy = true;
      clearTimer(timer);
      snapshot = null;
      draw(words[4]);
      try {
        const result = await api(`/api/billing/create-${action === 'checkout' ? 'checkout' : 'portal'}-session`, {method: 'POST', body: JSON.stringify({user_id: id})});
        if (!valid()) return;
        const destination = stripeDestination(result[action === 'checkout' ? 'checkout_url' : 'portal_url'], action);
        leaving = true;
        win.location.assign(destination);
      } catch { leaving = false; if (valid()) { busy = false; draw(words[17], false, true); } }
      finally { busy = false; }
    };
    const waiting = returnKind === 'success' && !(data?.stripe_subscription_id && ['active', 'trialing'].includes(data.subscription_status));
    // Routine app renders should not repeat a recently completed status request.
    if (snapshot?.id === id && Date.now() - snapshot.time < 15000 && !waiting) draw(snapshot.message);
    else refresh();
  }
  win.addEventListener?.('pageshow', event => { if (event.persisted) { snapshot = null; leaving = false; busy = false; mount(); } });
  return {mount, mountCompact, recordCreationBlockReason, showTrialOffer, stop, wantsSettings: () => pending};
}
