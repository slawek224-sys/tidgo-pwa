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
  const raw = data.subscription_current_period_end || data.trial_ends_at;
  if (!raw) return '';
  const date = new Date(raw);
  if (!Number.isFinite(date.getTime())) return '';
  const copy = DATE_TEXT[language] || DATE_TEXT.en;
  const formatted = new Intl.DateTimeFormat(copy.locale, {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'}).format(date);
  const template = data.cancel_at_period_end === true ? copy.access : data.subscription_status === 'trialing' ? copy.trial : '';
  return template ? template.replace('{date}', formatted) : '';
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
  return {mount, stop, wantsSettings: () => pending};
}
