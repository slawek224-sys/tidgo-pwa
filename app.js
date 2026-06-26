const API_BASE = "https://donezo-api-53t9.onrender.com";
const FEEDBACK_EMAIL = "outpost.hub.signal@gmail.com";
const CURRENCIES = ["GBP", "EUR", "USD", "PLN", "RON", "UAH", "BGN", "CZK", "HUF"];
const CATEGORIES = ["food", "fuel", "tools", "transport", "other"];
const LANGUAGES = {
  en: "English",
  pl: "Polski",
  ro: "Română",
  uk: "Українська",
  lt: "Lietuvių",
  lv: "Latviešu",
  es: "Español",
  bg: "Български"
};

const COPY = {
  en: {
    intro: "Receipts in. Tidy records out. Ready for your accountant.",
    chooseLanguage: "Choose language",
    firstName: "First name",
    trade: "Trade or job",
    email: "Recovery email",
    emailHint: "Use email if you want to recover the same bag of receipts later.",
    start: "Start TidGo",
    haveAccount: "I already have an account",
    recover: "Recover account",
    sendCode: "Send code",
    code: "Email code",
    restore: "Restore",
    hello: "Hello",
    summary: "Monthly summary",
    addExpense: "Add expense",
    addIncome: "Add income",
    photoDone: "Photo done",
    amountNote: "Amount and note",
    paidForClient: "Paid for client",
    settings: "Settings",
    income: "Income",
    expenses: "Expenses",
    client: "To get back",
    unknown: "Unknown",
    empty: "No receipts yet. Take the first photo and future you can relax.",
    amount: "Amount",
    currency: "Currency",
    merchant: "Shop",
    category: "Category",
    description: "Description",
    date: "Date",
    save: "Save",
    saved: "Saved.",
    delete: "Delete",
    edit: "Edit",
    close: "Close",
    cancel: "Cancel",
    photoReady: "Photo ready. Sending it to the bag.",
    subtle: "Light",
    dry: "Dry",
    serious: "Serious",
    humour: "Comment style",
    profile: "Profile",
    deleteAccount: "Delete account and all data",
    deleteWarning: "This permanently deletes profile, receipts, receipt photos and income.",
    printPdf: "Save PDF",
    emailPdf: "Send summary PDF",
    submissionHint: "On the public HTTPS app this creates a PDF and opens your phone sharing options: email, WhatsApp, Drive, Messages and more.",
    secureShareRequired: "Phone sharing with a PDF needs the public HTTPS version. Local testing over http can only use Save PDF.",
    emailBody: "TidGo monthly summary PDF",
    noEntries: "No entries",
    note: "A tidy monthly bag. Tax and clever bits stay with the real accountant.",
    backendDown: "Cannot reach TidGo API right now. Render may be waking up; try again in a moment.",
    installHint: "On iPhone: Share, then Add to Home Screen.",
    seeAll: "See all",
    showLess: "Show less",
    food: "Food",
    fuel: "Fuel",
    tools: "Tools",
    transport: "Transport",
    other: "Other"
  },
  pl: {
    intro: "Paragony wchodza. Porzadne rekordy wychodza. Gotowe dla ksiegowego.",
    chooseLanguage: "Wybierz jezyk",
    firstName: "Imie",
    trade: "Zawod",
    email: "Email do odzyskania",
    emailHint: "Email pozwala odzyskac te same paragony pozniej.",
    start: "Start",
    haveAccount: "Mam juz konto",
    recover: "Odzyskaj konto",
    sendCode: "Wyslij kod",
    code: "Kod z emaila",
    restore: "Odzyskaj",
    hello: "Czesc",
    summary: "Podsumowanie miesiaca",
    addExpense: "Dodaj wydatek",
    addIncome: "Dodaj przychod",
    photoDone: "Zdjecie gotowe",
    amountNote: "Kwota i opis",
    paidForClient: "Zaplacone za klienta",
    settings: "Ustawienia",
    income: "Przychody",
    expenses: "Wydatki",
    client: "Do odzyskania",
    unknown: "Nieznane",
    empty: "Brak paragonow. Zrob pierwsza fotke i przyszly ty ma spokojniej.",
    amount: "Kwota",
    currency: "Waluta",
    merchant: "Sklep",
    category: "Kategoria",
    description: "Opis",
    date: "Data",
    save: "Zapisz",
    saved: "Zapisane.",
    delete: "Usun",
    edit: "Edytuj",
    close: "Zamknij",
    cancel: "Anuluj",
    photoReady: "Fotka gotowa. Wysylam do reklamowki.",
    subtle: "Lekki",
    dry: "Suchy",
    serious: "Powazny",
    humour: "Styl komentarza",
    profile: "Profil",
    deleteAccount: "Usun konto i wszystkie dane",
    deleteWarning: "To trwale usunie profil, paragony, zdjecia paragonow i przychody.",
    printPdf: "Zapisz PDF",
    emailPdf: "Wyslij summary PDF",
    submissionHint: "W publicznej wersji HTTPS tworzy PDF i otwiera opcje telefonu: email, WhatsApp, Drive, SMS i inne.",
    secureShareRequired: "Wysylanie PDF przez opcje telefonu wymaga publicznej wersji HTTPS. Lokalnie przez http dziala tylko Zapisz PDF.",
    emailBody: "Miesieczne podsumowanie TidGo PDF",
    noEntries: "Brak wpisow",
    note: "Porzadna miesieczna reklamowka. Podatki i madre sztuczki zostaja dla prawdziwego ksiegowego.",
    backendDown: "Nie moge teraz polaczyc sie z API TidGo. Render moze sie budzic; sprobuj za moment.",
    installHint: "Na iPhonie: Udostepnij, potem Dodaj do ekranu poczatkowego.",
    seeAll: "Pokaz wszystkie",
    showLess: "Pokaz mniej",
    food: "Jedzenie",
    fuel: "Paliwo",
    tools: "Narzedzia",
    transport: "Transport",
    other: "Inne"
  }
};

Object.assign(COPY, {
  ro: {
    ...COPY.en,
    intro: "Fotografia bonului intra, rezumatul lunii iese. Fara haos contabil.",
    chooseLanguage: "Alege limba",
    firstName: "Prenume",
    trade: "Meserie",
    email: "Email de recuperare",
    emailHint: "Emailul te ajuta sa recuperezi aceleasi bonuri mai tarziu.",
    start: "Porneste TidGo",
    haveAccount: "Am deja cont",
    recover: "Recupereaza contul",
    sendCode: "Trimite codul",
    code: "Cod email",
    restore: "Recupereaza",
    hello: "Salut",
    summary: "Rezumat lunar",
    addExpense: "Adauga cheltuiala",
    addIncome: "Adauga venit",
    photoDone: "Poza gata",
    amountNote: "Suma si nota",
    paidForClient: "Platit pentru client",
    settings: "Setari",
    income: "Venituri",
    expenses: "Cheltuieli",
    client: "De recuperat",
    unknown: "Necunoscut",
    empty: "Inca nu sunt bonuri. Fa prima poza si gata.",
    amount: "Suma",
    currency: "Moneda",
    merchant: "Magazin",
    category: "Categorie",
    description: "Descriere",
    date: "Data",
    save: "Salveaza",
    saved: "Salvat.",
    delete: "Sterge",
    cancel: "Anuleaza",
    photoReady: "Poza e gata. O trimit in aplicatie.",
    subtle: "Lejer",
    dry: "Sec",
    serious: "Serios",
    humour: "Stil comentariu",
    profile: "Profil",
    deleteAccount: "Sterge contul si toate datele",
    deleteWarning: "Sterge definitiv profilul, bonurile, pozele si veniturile.",
    printPdf: "Salveaza PDF",
    emailPdf: "Trimite summary PDF",
    submissionHint: "In versiunea publica HTTPS creeaza PDF si deschide optiunile telefonului: email, WhatsApp, Drive, mesaje si altele.",
    secureShareRequired: "Trimiterea PDF-ului cere versiunea publica HTTPS. Local prin http merge doar Salveaza PDF.",
    emailBody: "Rezumat lunar TidGo PDF",
    noEntries: "Fara intrari",
    note: "Un rezumat lunar ordonat. Taxele si partea desteapta raman la contabil.",
    installHint: "Pe iPhone: Share, apoi Add to Home Screen.",
    seeAll: "Vezi toate",
    showLess: "Arata mai putin",
    food: "Mancare",
    fuel: "Combustibil",
    tools: "Unelte",
    transport: "Transport",
    other: "Altele"
  },
  uk: {
    ...COPY.en,
    intro: "Фото чека всередину, місячний підсумок назовні. Без бухгалтерського хаосу.",
    chooseLanguage: "Оберіть мову",
    firstName: "Ім'я",
    trade: "Професія",
    email: "Email для відновлення",
    emailHint: "Email допоможе відновити ті самі чеки пізніше.",
    start: "Запустити TidGo",
    haveAccount: "У мене вже є акаунт",
    recover: "Відновити акаунт",
    sendCode: "Надіслати код",
    code: "Код з email",
    restore: "Відновити",
    hello: "Привіт",
    summary: "Підсумок місяця",
    addExpense: "Додати витрату",
    addIncome: "Додати дохід",
    photoDone: "Фото готове",
    amountNote: "Сума і опис",
    paidForClient: "Сплачено за клієнта",
    settings: "Налаштування",
    income: "Доходи",
    expenses: "Витрати",
    client: "До повернення",
    unknown: "Невідомо",
    empty: "Чеків ще немає. Зробіть перше фото.",
    amount: "Сума",
    currency: "Валюта",
    merchant: "Магазин",
    category: "Категорія",
    description: "Опис",
    date: "Дата",
    save: "Зберегти",
    saved: "Збережено.",
    delete: "Видалити",
    cancel: "Скасувати",
    photoReady: "Фото готове. Надсилаю в застосунок.",
    subtle: "Легкий",
    dry: "Сухий",
    serious: "Серйозний",
    humour: "Стиль коментаря",
    profile: "Профіль",
    deleteAccount: "Видалити акаунт і всі дані",
    deleteWarning: "Назавжди видалить профіль, чеки, фото і доходи.",
    printPdf: "Зберегти PDF",
    emailPdf: "Надіслати summary PDF",
    submissionHint: "У публічній HTTPS-версії створює PDF і відкриває варіанти телефону: email, WhatsApp, Drive, повідомлення тощо.",
    secureShareRequired: "Надсилання PDF потребує публічної HTTPS-версії. Локально через http працює лише Зберегти PDF.",
    emailBody: "Місячний підсумок TidGo PDF",
    noEntries: "Немає записів",
    note: "Акуратний місячний підсумок. Податки залишаємо справжньому бухгалтеру.",
    installHint: "На iPhone: Share, потім Add to Home Screen.",
    seeAll: "Показати всі",
    showLess: "Показати менше",
    food: "Їжа",
    fuel: "Пальне",
    tools: "Інструменти",
    transport: "Транспорт",
    other: "Інше"
  },
  lt: {
    ...COPY.en,
    intro: "Kvito nuotrauka įeina, mėnesio suvestinė išeina. Be buhalterinio chaoso.",
    chooseLanguage: "Pasirinkite kalbą",
    firstName: "Vardas",
    trade: "Profesija",
    email: "Atkūrimo el. paštas",
    emailHint: "El. paštas padės vėliau atkurti tuos pačius kvitus.",
    start: "Pradėti TidGo",
    haveAccount: "Jau turiu paskyrą",
    recover: "Atkurti paskyrą",
    sendCode: "Siųsti kodą",
    code: "Kodas iš el. pašto",
    restore: "Atkurti",
    hello: "Sveiki",
    summary: "Mėnesio suvestinė",
    addExpense: "Pridėti išlaidą",
    addIncome: "Pridėti pajamas",
    photoDone: "Nuotrauka paruošta",
    amountNote: "Suma ir aprašas",
    paidForClient: "Sumokėta už klientą",
    settings: "Nustatymai",
    income: "Pajamos",
    expenses: "Išlaidos",
    client: "Susigrąžinti",
    unknown: "Nežinoma",
    empty: "Kvitų dar nėra. Padarykite pirmą nuotrauką.",
    amount: "Suma",
    currency: "Valiuta",
    merchant: "Parduotuvė",
    category: "Kategorija",
    description: "Aprašas",
    date: "Data",
    save: "Išsaugoti",
    saved: "Išsaugota.",
    delete: "Ištrinti",
    cancel: "Atšaukti",
    photoReady: "Nuotrauka paruošta. Siunčiu į programą.",
    subtle: "Lengvas",
    dry: "Sausas",
    serious: "Rimtas",
    humour: "Komentaro stilius",
    profile: "Profilis",
    deleteAccount: "Ištrinti paskyrą ir visus duomenis",
    deleteWarning: "Visam laikui ištrina profilį, kvitus, nuotraukas ir pajamas.",
    printPdf: "Išsaugoti PDF",
    emailPdf: "Siųsti summary PDF",
    submissionHint: "Viešoje HTTPS versijoje sukuria PDF ir atidaro telefono bendrinimą: email, WhatsApp, Drive, žinutės ir kt.",
    secureShareRequired: "PDF bendrinimui reikia viešos HTTPS versijos. Lokaliai per http veikia tik Išsaugoti PDF.",
    emailBody: "TidGo mėnesio suvestinė PDF",
    noEntries: "Įrašų nėra",
    note: "Tvarkinga mėnesio suvestinė. Mokesčius paliekame tikram buhalteriui.",
    installHint: "iPhone: Share, tada Add to Home Screen.",
    seeAll: "Rodyti visus",
    showLess: "Rodyti mažiau",
    food: "Maistas",
    fuel: "Kuras",
    tools: "Įrankiai",
    transport: "Transportas",
    other: "Kita"
  },
  lv: {
    ...COPY.en,
    intro: "Čeka foto iekšā, mēneša kopsavilkums ārā. Bez grāmatvedības haosa.",
    chooseLanguage: "Izvēlieties valodu",
    firstName: "Vārds",
    trade: "Profesija",
    email: "Atjaunošanas e-pasts",
    emailHint: "E-pasts palīdzēs vēlāk atjaunot tos pašus čekus.",
    start: "Sākt TidGo",
    haveAccount: "Man jau ir konts",
    recover: "Atjaunot kontu",
    sendCode: "Sūtīt kodu",
    code: "E-pasta kods",
    restore: "Atjaunot",
    hello: "Sveiki",
    summary: "Mēneša kopsavilkums",
    addExpense: "Pievienot izdevumu",
    addIncome: "Pievienot ienākumu",
    photoDone: "Foto gatavs",
    amountNote: "Summa un piezīme",
    paidForClient: "Samaksāts par klientu",
    settings: "Iestatījumi",
    income: "Ienākumi",
    expenses: "Izdevumi",
    client: "Jāatgūst",
    unknown: "Nezināms",
    empty: "Čeku vēl nav. Uzņemiet pirmo foto.",
    amount: "Summa",
    currency: "Valūta",
    merchant: "Veikals",
    category: "Kategorija",
    description: "Apraksts",
    date: "Datums",
    save: "Saglabāt",
    saved: "Saglabāts.",
    delete: "Dzēst",
    cancel: "Atcelt",
    photoReady: "Foto gatavs. Sūtu uz lietotni.",
    subtle: "Viegls",
    dry: "Sauss",
    serious: "Nopietns",
    humour: "Komentāra stils",
    profile: "Profils",
    deleteAccount: "Dzēst kontu un visus datus",
    deleteWarning: "Neatgriezeniski dzēš profilu, čekus, foto un ienākumus.",
    printPdf: "Saglabāt PDF",
    emailPdf: "Sūtīt summary PDF",
    submissionHint: "Publiskajā HTTPS versijā izveido PDF un atver tālruņa kopīgošanu: email, WhatsApp, Drive, ziņas u.c.",
    secureShareRequired: "PDF kopīgošanai vajag publisko HTTPS versiju. Lokāli caur http darbojas tikai Saglabāt PDF.",
    emailBody: "TidGo mēneša kopsavilkums PDF",
    noEntries: "Nav ierakstu",
    note: "Kārtīgs mēneša kopsavilkums. Nodokļus atstājam īstam grāmatvedim.",
    installHint: "iPhone: Share, tad Add to Home Screen.",
    seeAll: "Rādīt visus",
    showLess: "Rādīt mazāk",
    food: "Pārtika",
    fuel: "Degviela",
    tools: "Instrumenti",
    transport: "Transports",
    other: "Cits"
  },
  es: {
    ...COPY.en,
    intro: "Foto del recibo dentro, resumen mensual fuera. Sin caos contable.",
    chooseLanguage: "Elige idioma",
    firstName: "Nombre",
    trade: "Oficio",
    email: "Email de recuperación",
    emailHint: "El email te permite recuperar los mismos recibos después.",
    start: "Empezar TidGo",
    haveAccount: "Ya tengo cuenta",
    recover: "Recuperar cuenta",
    sendCode: "Enviar código",
    code: "Código de email",
    restore: "Recuperar",
    hello: "Hola",
    summary: "Resumen mensual",
    addExpense: "Añadir gasto",
    addIncome: "Añadir ingreso",
    photoDone: "Foto lista",
    amountNote: "Importe y nota",
    paidForClient: "Pagado por cliente",
    settings: "Ajustes",
    income: "Ingresos",
    expenses: "Gastos",
    client: "Por recuperar",
    unknown: "Desconocido",
    empty: "Todavía no hay recibos. Haz la primera foto.",
    amount: "Importe",
    currency: "Moneda",
    merchant: "Tienda",
    category: "Categoría",
    description: "Descripción",
    date: "Fecha",
    save: "Guardar",
    saved: "Guardado.",
    delete: "Eliminar",
    cancel: "Cancelar",
    photoReady: "Foto lista. Enviando a la app.",
    subtle: "Ligero",
    dry: "Seco",
    serious: "Serio",
    humour: "Estilo de comentario",
    profile: "Perfil",
    deleteAccount: "Eliminar cuenta y todos los datos",
    deleteWarning: "Elimina permanentemente perfil, recibos, fotos e ingresos.",
    printPdf: "Guardar PDF",
    emailPdf: "Enviar summary PDF",
    submissionHint: "En la versión pública HTTPS crea un PDF y abre las opciones del teléfono: email, WhatsApp, Drive, mensajes y más.",
    secureShareRequired: "Compartir PDF necesita la versión pública HTTPS. En local por http solo funciona Guardar PDF.",
    emailBody: "Resumen mensual TidGo PDF",
    noEntries: "Sin entradas",
    note: "Un resumen mensual ordenado. Los impuestos se quedan con el contable real.",
    installHint: "En iPhone: Share, luego Add to Home Screen.",
    seeAll: "Ver todo",
    showLess: "Ver menos",
    food: "Comida",
    fuel: "Combustible",
    tools: "Herramientas",
    transport: "Transporte",
    other: "Otros"
  },
  bg: {
    ...COPY.en,
    intro: "Снимка на бележката влиза, месечното обобщение излиза. Без счетоводен хаос.",
    chooseLanguage: "Изберете език",
    firstName: "Име",
    trade: "Професия",
    email: "Email за възстановяване",
    emailHint: "Email помага да възстановите същите бележки по-късно.",
    start: "Стартирай TidGo",
    haveAccount: "Вече имам акаунт",
    recover: "Възстанови акаунт",
    sendCode: "Изпрати код",
    code: "Код от email",
    restore: "Възстанови",
    hello: "Здравейте",
    summary: "Месечно обобщение",
    addExpense: "Добави разход",
    addIncome: "Добави приход",
    photoDone: "Снимката е готова",
    amountNote: "Сума и бележка",
    paidForClient: "Платено за клиент",
    settings: "Настройки",
    income: "Приходи",
    expenses: "Разходи",
    client: "За връщане",
    unknown: "Неизвестно",
    empty: "Още няма бележки. Направете първата снимка.",
    amount: "Сума",
    currency: "Валута",
    merchant: "Магазин",
    category: "Категория",
    description: "Описание",
    date: "Дата",
    save: "Запази",
    saved: "Запазено.",
    delete: "Изтрий",
    cancel: "Отказ",
    photoReady: "Снимката е готова. Изпращам към приложението.",
    subtle: "Лек",
    dry: "Сух",
    serious: "Сериозен",
    humour: "Стил на коментара",
    profile: "Профил",
    deleteAccount: "Изтрий акаунта и всички данни",
    deleteWarning: "Изтрива завинаги профила, бележките, снимките и приходите.",
    printPdf: "Запази PDF",
    emailPdf: "Изпрати summary PDF",
    submissionHint: "В публичната HTTPS версия създава PDF и отваря опциите на телефона: email, WhatsApp, Drive, съобщения и други.",
    secureShareRequired: "Споделянето на PDF изисква публичната HTTPS версия. Локално през http работи само Запази PDF.",
    emailBody: "Месечно обобщение TidGo PDF",
    noEntries: "Няма записи",
    note: "Подредено месечно обобщение. Данъците остават за истинския счетоводител.",
    installHint: "На iPhone: Share, после Add to Home Screen.",
    seeAll: "Покажи всички",
    showLess: "Покажи по-малко",
    food: "Храна",
    fuel: "Гориво",
    tools: "Инструменти",
    transport: "Транспорт",
    other: "Друго"
  }
});

Object.assign(COPY.en, {
  privacyTitle: "Privacy Policy",
  termsTitle: "Terms",
  legalShort: "Short version",
  legalFull: "Plain details",
  legalBack: "Back to settings",
    feedbackTitle: "Send feedback",
    feedbackHint: "Found something weird? Send a quick message to:",
    copyEmail: "Copy email",
    emailCopied: "Email copied.",
    openEmailApp: "Open email app",
    feedbackSubject: "TidGo feedback",
    feedbackBody: "Hi, I tested TidGo and noticed:",
    recordsTitle: "Check my records",
    recordsHint: "See what looks ready for your accountant and what may need a proof or a second look.",
    signOutDevice: "Sign out on this device",
    signOutHint: "Use this only when you want to test recovery or move to another account. It does not delete your receipts.",
    accountantAccess: "Accountant access",
    accountantEmail: "Accountant email",
    accountantHint: "Accountant portal is coming later. For now, check your records before sending them on.",
    saveAccountant: "Save accountant",
    inviteAccountant: "Invite accountant",
    previewAccountant: "Check my records",
    revokeAccess: "Revoke access",
    accountantView: "What your accountant sees",
    readOnly: "Read-only",
    lastReceipt: "Last receipt",
    status: "Status",
    ok: "OK",
    chase: "Chase",
    downloadCsv: "Download CSV",
    accountantInviteSubject: "TidGo accountant access",
    accountantInviteBody: "Hi, I use TidGo to keep receipts and income tidy. I would like to connect my records with you when accountant access is ready.",
    accountantHeroToast: "Hero mode unlocked. The records are tidy and the plastic bag can retire.",
    missingMonths: "Missing months",
    needsReview: "Needs review",
    chaseClient: "Chase client",
    accountantPack: "Download accountant pack",
    noRecords: "No records",
    missingMerchant: "Missing shop",
    missingCategory: "Missing category",
    possibleDuplicate: "Possible duplicate",
    incomeWithoutProof: "Income proof missing",
    chaseSubject: "Missing TidGo records",
    chaseBody: "Hi, please add your missing receipts and income proof in TidGo when you can. It helps me prepare your records without the last-minute panic.",
    accountantPackToast: "Accountant pack started. CSV today, calmer January tomorrow.",
    addClient: "Add client",
    importClientEmails: "Import client emails",
    inviteClients: "Invite clients",
    clientEmails: "Client emails",
    accountantDemoHint: "Accountant demo: paste one or many client emails, then invite them to TidGo.",
    attachProof: "Attach proof",
    proofAttached: "Proof attached",
    viewProof: "View proof",
    takePhoto: "Take photo",
    uploadFile: "Upload file",
    proofHint: "Add a payslip, CIS statement, remittance note or screenshot. Amount stays manual."
});

Object.assign(COPY.pl, {
  privacyTitle: "Polityka prywatnosci",
  termsTitle: "Regulamin",
  legalShort: "Krotko",
  legalFull: "Proste szczegoly",
  legalBack: "Wroc do ustawien",
    feedbackTitle: "Wyslij feedback",
    feedbackHint: "Cos wyglada dziwnie? Wyslij szybka wiadomosc na:",
    copyEmail: "Kopiuj email",
    emailCopied: "Email skopiowany.",
    openEmailApp: "Otworz email",
    feedbackSubject: "TidGo feedback",
    feedbackBody: "Czesc, testowalem TidGo i zauwazylem:",
    recordsTitle: "Sprawdz moje rekordy",
    recordsHint: "Zobacz, co wyglada gotowe dla ksiegowego, a gdzie moze brakowac dowodu albo drugiego spojrzenia.",
    signOutDevice: "Wyloguj na tym urzadzeniu",
    signOutHint: "Uzyj tylko, gdy chcesz przetestowac odzyskiwanie albo przejsc na inne konto. To nie usuwa paragonow.",
    accountantAccess: "Dostep dla ksiegowego",
    accountantEmail: "Email ksiegowego",
    accountantHint: "Portal ksiegowego bedzie pozniej. Na razie sprawdz rekordy przed wyslaniem dalej.",
    saveAccountant: "Zapisz ksiegowego",
    inviteAccountant: "Zapros ksiegowego",
    previewAccountant: "Sprawdz moje rekordy",
    revokeAccess: "Cofnij dostep",
    accountantView: "Co zobaczy ksiegowy",
    readOnly: "Tylko do odczytu",
    lastReceipt: "Ostatni paragon",
    status: "Status",
    ok: "OK",
    chase: "Pogonic",
    downloadCsv: "Pobierz CSV",
    accountantInviteSubject: "Dostep ksiegowego TidGo",
    accountantInviteBody: "Czesc, uzywam TidGo do porzadkowania paragonow i przychodow. Chcialbym polaczyc moje rekordy z Toba, kiedy dostep dla ksiegowego bedzie gotowy.",
    accountantHeroToast: "Tryb bohatera odblokowany. Rekordy sa w porzadku, reklamowka moze isc na emeryture.",
    missingMonths: "Brakujace miesiace",
    needsReview: "Do sprawdzenia",
    chaseClient: "Pogon klienta",
    accountantPack: "Pobierz paczke ksiegowego",
    noRecords: "Brak rekordow",
    missingMerchant: "Brakuje sklepu",
    missingCategory: "Brakuje kategorii",
    possibleDuplicate: "Mozliwy duplikat",
    incomeWithoutProof: "Brakuje dowodu przychodu",
    chaseSubject: "Brakujace rekordy TidGo",
    chaseBody: "Czesc, dodaj prosze brakujace paragony i dowody przychodu w TidGo, kiedy mozesz. To pomoze przygotowac rekordy bez paniki na ostatnia chwile.",
    accountantPackToast: "Paczka ksiegowego ruszyla. CSV dzisiaj, spokojniejszy styczen jutro.",
    addClient: "Dodaj klienta",
    importClientEmails: "Importuj emaile klientow",
    inviteClients: "Zapros klientow",
    clientEmails: "Emaile klientow",
    accountantDemoHint: "Demo ksiegowego: wklej jeden lub wiele emaili klientow, potem zapros ich do TidGo.",
    attachProof: "Dodaj dowod",
    proofAttached: "Dowod dodany",
    viewProof: "Zobacz dowod",
    takePhoto: "Zrob zdjecie",
    uploadFile: "Wgraj plik",
    proofHint: "Dodaj payslip, CIS statement, remittance note albo screenshot. Kwote wpisujesz recznie."
});

Object.assign(COPY.ro, {
  privacyTitle: "Politica de confidentialitate",
  termsTitle: "Termeni",
  legalShort: "Pe scurt",
  legalFull: "Detalii simple",
  legalBack: "Inapoi la setari",
  feedbackTitle: "Trimite feedback",
  feedbackHint: "Ai gasit ceva ciudat? Trimite un mesaj scurt.",
  feedbackSubject: "TidGo feedback",
  feedbackBody: "Salut, am testat TidGo si am observat:"
});

Object.assign(COPY.uk, {
  privacyTitle: "\u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0456",
  termsTitle: "\u0423\u043c\u043e\u0432\u0438",
  legalShort: "\u041a\u043e\u0440\u043e\u0442\u043a\u043e",
  legalFull: "\u041f\u0440\u043e\u0441\u0442\u0456 \u0434\u0435\u0442\u0430\u043b\u0456",
  legalBack: "\u041d\u0430\u0437\u0430\u0434 \u0434\u043e \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c",
  feedbackTitle: "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 feedback",
  feedbackHint: "\u0429\u043e\u0441\u044c \u0432\u0438\u0433\u043b\u044f\u0434\u0430\u0454 \u0434\u0438\u0432\u043d\u043e? \u041d\u0430\u0434\u0456\u0448\u043b\u0456\u0442\u044c \u043a\u043e\u0440\u043e\u0442\u043a\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f.",
  feedbackSubject: "TidGo feedback",
  feedbackBody: "\u041f\u0440\u0438\u0432\u0456\u0442, \u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 TidGo \u0456 \u043f\u043e\u043c\u0456\u0442\u0438\u0432:"
});

Object.assign(COPY.lt, {
  privacyTitle: "Privatumo politika",
  termsTitle: "Salygos",
  legalShort: "Trumpai",
  legalFull: "Paprasta informacija",
  legalBack: "Atgal i nustatymus",
  feedbackTitle: "Siusti feedback",
  feedbackHint: "Kazkas atrodo keistai? Atsiuskite trumpa zinute.",
  feedbackSubject: "TidGo feedback",
  feedbackBody: "Sveiki, isbandziau TidGo ir pastebejau:"
});

Object.assign(COPY.lv, {
  privacyTitle: "Privatuma politika",
  termsTitle: "Noteikumi",
  legalShort: "Isuma",
  legalFull: "Vienkarsas detalas",
  legalBack: "Atpakal uz iestatijumiem",
  feedbackTitle: "Sutit feedback",
  feedbackHint: "Kaut kas izskatas divaini? Atsutiet isu zinu.",
  feedbackSubject: "TidGo feedback",
  feedbackBody: "Sveiki, es testēju TidGo un pamaniju:"
});

Object.assign(COPY.es, {
  privacyTitle: "Privacidad",
  termsTitle: "Terminos",
  legalShort: "Version corta",
  legalFull: "Detalles simples",
  legalBack: "Volver a ajustes",
  feedbackTitle: "Enviar feedback",
  feedbackHint: "Algo raro? Envia un mensaje corto.",
  feedbackSubject: "TidGo feedback",
  feedbackBody: "Hola, he probado TidGo y he notado:"
});

Object.assign(COPY.bg, {
  privacyTitle: "\u041f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442",
  termsTitle: "\u0423\u0441\u043b\u043e\u0432\u0438\u044f",
  legalShort: "\u041d\u0430\u043a\u0440\u0430\u0442\u043a\u043e",
  legalFull: "\u041f\u0440\u043e\u0441\u0442\u0438 \u0434\u0435\u0442\u0430\u0439\u043b\u0438",
  legalBack: "\u041d\u0430\u0437\u0430\u0434 \u043a\u044a\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",
  feedbackTitle: "\u0418\u0437\u043f\u0440\u0430\u0442\u0438 feedback",
  feedbackHint: "\u041d\u0435\u0449\u043e \u0438\u0437\u0433\u043b\u0435\u0436\u0434\u0430 \u0441\u0442\u0440\u0430\u043d\u043d\u043e? \u0418\u0437\u043f\u0440\u0430\u0442\u0435\u0442\u0435 \u043a\u0440\u0430\u0442\u043a\u043e \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438\u0435.",
  feedbackSubject: "TidGo feedback",
  feedbackBody: "\u0417\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435, \u0442\u0435\u0441\u0442\u0432\u0430\u0445 TidGo \u0438 \u0437\u0430\u0431\u0435\u043b\u044f\u0437\u0430\u0445:"
});

const LEGAL_TEXT = {
  en: {
    privacy: {
      short: "TidGo keeps only the data needed to save your income, expenses and monthly summary. Receipt photos and account details are used to run the app, not to sell ads or profile you.",
      details: "We store your profile, recovery email, receipt photos, receipt details, income entries and settings. The app uses the TidGo API, MongoDB Atlas, Render, OpenAI for receipt reading, Resend for recovery emails and Google Analytics to understand app usage. You can delete your account and data in Settings."
    },
    terms: {
      short: "TidGo helps organise receipts and prepare a monthly summary for your accountant. It is not accounting, tax, payroll or legal advice.",
      details: "You are responsible for checking entries before sending them on. Keep originals where your accountant or local rules require it. TidGo is a simple record helper and should not replace a qualified accountant."
    }
  },
  pl: {
    privacy: {
      short: "TidGo przechowuje tylko dane potrzebne do zapisania Twoich przychodow, wydatkow i miesiecznego podsumowania. Zdjecia paragonow i dane konta sa uzywane do dzialania aplikacji, nie do reklam ani profilowania.",
      details: "Przechowujemy profil, email do odzyskania, zdjecia paragonow, dane paragonow, przychody i ustawienia. Aplikacja uzywa API TidGo, MongoDB Atlas, Render, OpenAI do czytania paragonow, Resend do emaili odzyskiwania i Google Analytics do zrozumienia uzycia aplikacji. Konto i dane mozesz usunac w Ustawieniach."
    },
    terms: {
      short: "TidGo pomaga uporzadkowac paragony i przygotowac miesieczne podsumowanie dla ksiegowego. To nie jest ksiegowosc, doradztwo podatkowe, payroll ani porada prawna.",
      details: "Przed wyslaniem podsumowania sprawdz wpisy. Oryginaly dokumentow trzymaj tam, gdzie wymaga tego ksiegowy albo lokalne przepisy. TidGo jest prostym pomocnikiem do porzadkowania danych i nie zastepuje prawdziwego ksiegowego."
    }
  },
  ro: {
    privacy: {
      short: "TidGo pastreaza doar datele necesare pentru venituri, cheltuieli si rezumatul lunar. Pozele bonurilor si datele contului sunt folosite pentru aplicatie, nu pentru reclame sau profilare.",
      details: "Stocam profilul, emailul de recuperare, pozele bonurilor, detaliile bonurilor, veniturile si setarile. Aplicatia foloseste API-ul TidGo, MongoDB Atlas, Render, OpenAI pentru citirea bonurilor, Resend pentru emailuri de recuperare si Google Analytics pentru a intelege folosirea aplicatiei. Iti poti sterge contul si datele din Setari."
    },
    terms: {
      short: "TidGo te ajuta sa organizezi bonuri si sa pregatesti un rezumat lunar pentru contabil. Nu este contabilitate, consultanta fiscala, payroll sau consultanta juridica.",
      details: "Verifica intrarile inainte sa le trimiti. Pastreaza originalele daca iti cere contabilul sau legea locala. TidGo este un ajutor simplu pentru organizare si nu inlocuieste un contabil calificat."
    }
  },
  uk: {
    privacy: {
      short: "TidGo zberihaye lyshe dani, potribni dlya dokhodiv, vytrat i misyachnoho pidsumku. Foto chekiv i dani akauntu vykorystovuyutsya dlya roboty dodatka, ne dlya reklamy abo profilyuvannya.",
      details: "My zberihayemo profil, email dlya vidnovlennya, foto chekiv, dani chekiv, dokhody ta nalashtuvannya. Dodatok vykorystovuye API TidGo, MongoDB Atlas, Render, OpenAI dlya chytannya chekiv, Resend dlya emailiv vidnovlennya i Google Analytics dlya rozuminnya vykorystannya dodatka. Akaunt i dani mozhna vydalyty v Nalashtuvannyakh."
    },
    terms: {
      short: "TidGo dopomahaye vporiadkuvaty cheky i pidhotuvaty misyachnyi pidsumok dlya bukhhaltera. Tse ne bukhhalteriya, podatkova, payroll abo yurydychna porada.",
      details: "Perevirte zapysy pered nadsyllannyam. Zberihayte oryhinaly, yakshcho tse potribno bukhhalteru abo mistsevym pravyłam. TidGo ye prostym pomichnykom i ne zaminyuye kvalifikovanoho bukhhaltera."
    }
  },
  lt: {
    privacy: {
      short: "TidGo saugo tik duomenis, reikalingus pajamoms, islaidoms ir menesio suvestinei. Kvituku nuotraukos ir paskyros duomenys naudojami programai veikti, ne reklamoms ar profiliavimui.",
      details: "Saugome profili, atkurimo el. pasta, kvituku nuotraukas, kvituku duomenis, pajamas ir nustatymus. Programa naudoja TidGo API, MongoDB Atlas, Render, OpenAI kvitukams nuskaityti, Resend atkurimo el. laiskams ir Google Analytics programos naudojimui suprasti. Paskyra ir duomenis galima istrinti Nustatymuose."
    },
    terms: {
      short: "TidGo padeda tvarkyti kvitukus ir paruosti menesio suvestine buhalteriui. Tai nera buhalterija, mokescio, payroll ar teisine konsultacija.",
      details: "Patikrinkite irasus pries siusdami. Originalus laikykite, jei to praso buhalteris ar vietines taisykles. TidGo yra paprastas tvarkymo pagalbininkas ir nepakeicia kvalifikuoto buhalterio."
    }
  },
  lv: {
    privacy: {
      short: "TidGo glaba tikai datus, kas vajadzigi ienakumiem, izdevumiem un menesa kopsavilkumam. Ceku foto un konta dati tiek lietoti lietotnei, ne reklamai vai profilesanai.",
      details: "Mes glabajam profilu, atjaunosanas e-pastu, ceku foto, ceku datus, ienakumus un iestatijumus. Lietotne izmanto TidGo API, MongoDB Atlas, Render, OpenAI ceku nolasisanai, Resend atjaunosanas e-pastiem un Google Analytics lietotnes izmantosanas saprasanai. Kontu un datus var dzest Iestatijumos."
    },
    terms: {
      short: "TidGo palidz sakartot cekus un sagatavot menesa kopsavilkumu gramatvedim. Ta nav gramatvediba, nodoklu, payroll vai juridiska konsultacija.",
      details: "Parbaudiet ierakstus pirms sutisanas. Originalus glabajiet, ja to prasa gramatvedis vai vietejie noteikumi. TidGo ir vienkarss paligs un neaizstaj kvalificetu gramatvedi."
    }
  },
  es: {
    privacy: {
      short: "TidGo guarda solo los datos necesarios para ingresos, gastos y resumen mensual. Las fotos de recibos y datos de cuenta se usan para la app, no para vender anuncios ni perfilarte.",
      details: "Guardamos perfil, email de recuperacion, fotos de recibos, detalles de recibos, ingresos y ajustes. La app usa la API de TidGo, MongoDB Atlas, Render, OpenAI para leer recibos, Resend para emails de recuperacion y Google Analytics para entender el uso de la app. Puedes borrar tu cuenta y datos en Ajustes."
    },
    terms: {
      short: "TidGo ayuda a ordenar recibos y preparar un resumen mensual para tu contable. No es contabilidad, asesoria fiscal, payroll ni consejo legal.",
      details: "Revisa las entradas antes de enviarlas. Guarda originales cuando tu contable o las normas locales lo pidan. TidGo es una ayuda simple de organizacion y no sustituye a un contable cualificado."
    }
  },
  bg: {
    privacy: {
      short: "TidGo pazhi samo dannite, nuzhni za prihodite, razhodite i mesechnoto obobshtenie. Snimkite na belezhki i dannite za akaunta se polzvat za rabota na prilozhenieto, ne za reklami ili profilirane.",
      details: "Sahranyavame profil, email za vazstanovyavane, snimki na belezhki, danni za belezhki, prihodi i nastroiki. Prilozhenieto polzva TidGo API, MongoDB Atlas, Render, OpenAI za chetene na belezhki, Resend za emaili za vazstanovyavane i Google Analytics za razbirane na upotrebata. Mozhete da iztriete akaunta i dannite v Nastroiki."
    },
    terms: {
      short: "TidGo pomaga da podredite belezhki i da podgotvite mesechno obobshtenie za schetovoditel. Tova ne e schetovodstvo, danachna, payroll ili pravna konsultatsiya.",
      details: "Proverete zapisite predi izprashtane. Pazete originalite, kogato schetovoditel ili mestni pravila go iziskvat. TidGo e prost pomoshtnik za red i ne zamestva kvalifitsiran schetovoditel."
    }
  }
};

const state = {
  user: read("rb_user", null),
  language: read("rb_language", "en"),
  humour: read("rb_humour", "funny"),
  accountantEmail: read("rb_accountant_email", ""),
  incomeProofs: read("rb_income_proofs", {}),
  screen: "boot",
  receipts: [],
  income: [],
  selected: null,
  summaryDate: new Date(),
  showAllTransactions: false,
  loading: false
};

const app = document.querySelector("#app");
const expensePicker = document.querySelector("#expensePicker");
const clientPicker = document.querySelector("#clientPicker");

function showSplash() {
  app.innerHTML = `
    <main class="splash">
      <div class="splash-inner">
        <img class="splash-logo" src="./icon-512.png" alt="TidGo">
        <h1 class="splash-title">TidGo</h1>
        <div class="splash-note">Loading...</div>
      </div>
    </main>
  `;
}

function t(key) {
  return (COPY[state.language] || COPY.en)[key] || COPY.en[key] || key;
}

function read(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function forget(key) {
  localStorage.removeItem(key);
}

function deviceStore() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) return resolve(null);
    const request = indexedDB.open("tidgo_device", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("session");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function deviceGet(key, fallback = null) {
  try {
    const db = await deviceStore();
    if (!db) return fallback;
    return await new Promise((resolve, reject) => {
      const request = db.transaction("session", "readonly").objectStore("session").get(key);
      request.onsuccess = () => resolve(request.result ?? fallback);
      request.onerror = () => reject(request.error);
    });
  } catch {
    return fallback;
  }
}

async function deviceSet(key, value) {
  write(key, value);
  try {
    const db = await deviceStore();
    if (!db) return;
    await new Promise((resolve, reject) => {
      const request = db.transaction("session", "readwrite").objectStore("session").put(value, key);
      request.onsuccess = resolve;
      request.onerror = () => reject(request.error);
    });
  } catch {
    // localStorage is the primary path; IndexedDB is an extra belt for PWAs.
  }
}

async function deviceForget(key) {
  forget(key);
  try {
    const db = await deviceStore();
    if (!db) return;
    await new Promise((resolve, reject) => {
      const request = db.transaction("session", "readwrite").objectStore("session").delete(key);
      request.onsuccess = resolve;
      request.onerror = () => reject(request.error);
    });
  } catch {
    // Nothing else to do.
  }
}

async function rememberUser(user) {
  state.user = user;
  await deviceSet("rb_user", user);
  await deviceSet("rb_last_user", {
    id: user.id,
    first_name: user.first_name,
    email: user.email || "",
    language: user.language || state.language
  });
}

async function restoreDeviceUser() {
  if (state.user?.id) return;
  const user = await deviceGet("rb_user", null);
  if (user?.id) {
    state.user = user;
    write("rb_user", user);
    if (user.language) state.language = user.language;
  }
}

function money(amount, currency = "GBP") {
  return `${Number(amount || 0).toFixed(2)} ${currency || "GBP"}`;
}

function day(value) {
  return new Date(value).toLocaleDateString(undefined, { day: "2-digit", month: "short" });
}

function monthLabel(date = state.summaryDate) {
  return date.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

function normalizeAmount(value) {
  const amount = Number(String(value || "").replace(",", ".").trim());
  return Number.isFinite(amount) ? amount : NaN;
}

function proofForIncome(id) {
  return state.incomeProofs?.[id] || null;
}

function attachIncomeProofs(items) {
  return (items || []).map((item) => {
    const proof = proofForIncome(item.id);
    return proof ? { ...item, proof_name: proof.name, proof_type: proof.type, proof_base64: proof.data } : item;
  });
}

function routeState() {
  return {
    screen: state.screen === "boot" ? "home" : state.screen,
    selected: state.selected,
  };
}

function applyRoute(route) {
  if (!route) return;
  state.screen = route.screen || "home";
  state.selected = route.selected || null;
  render();
}

function navigate(screen, extra = {}) {
  state.screen = screen;
  if ("selected" in extra) {
    state.selected = extra.selected;
  }
  history.pushState(routeState(), "", location.pathname + location.search);
  render();
}

function shell(content) {
  app.innerHTML = `<main class="shell">${content}</main><section id="printRoot" class="print-root"></section>`;
}

function topbar(title, back = false) {
  return `
    <div class="topbar">
      ${back ? `<button class="icon-btn" data-action="back" aria-label="Back">←</button>` : `<div class="brand"><img src="./icon-192.png" alt=""><span>TidGo</span></div>`}
      <strong>${title || ""}</strong>
      ${state.user && !back ? `<button class="icon-btn" data-action="settings" aria-label="${t("settings")}">⚙</button>` : `<span style="width:44px"></span>`}
    </div>
  `;
}

function setBusy(flag) {
  state.loading = flag;
  document.querySelectorAll("button").forEach((button) => {
    if (button.dataset.keepEnabled !== "true") button.disabled = flag;
  });
}

function toast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  window.setTimeout(() => node.remove(), 4200);
}

async function api(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    let detail = `HTTP ${response.status}`;
    try {
      const body = await response.json();
      detail = typeof body.detail === "string" ? body.detail : detail;
    } catch {}
    throw new Error(detail);
  }
  return response.status === 204 ? null : response.json();
}

async function refresh() {
  if (!state.user?.id) return;
  try {
    const [receipts, income] = await Promise.all([
      api(`/api/receipts/${state.user.id}`),
      api(`/api/income/${state.user.id}`)
    ]);
    state.receipts = receipts || [];
    state.income = attachIncomeProofs(income);
  } catch (error) {
    toast(error.message || t("backendDown"));
  }
}

function render() {
  if (!state.user) {
    state.screen = state.screen === "recover" ? "recover" : "onboarding";
  }
  if (state.screen === "boot") state.screen = "home";
  const routes = {
    onboarding,
    recover,
    home,
    receipt,
    incomeDetail,
    incomeForm,
    summary,
    settings,
    accountantPortal,
    privacy,
    terms
  };
  routes[state.screen]();
}

function onboarding() {
  shell(`
    <section class="screen">
      ${topbar("")}
      <h1 class="title">TidGo</h1>
      <p class="subtitle">${t("intro")}</p>
      <form class="stack" id="onboardingForm">
        <label class="field"><span>${t("chooseLanguage")}</span>${languageSelect()}</label>
        <label class="field"><span>${t("firstName")}</span><input class="input" name="first_name" autocomplete="given-name" required></label>
        <label class="field"><span>${t("trade")}</span><input class="input" name="trade" autocomplete="organization-title"></label>
        <label class="field"><span>${t("email")}</span><input class="input" name="email" type="email" autocomplete="email"></label>
        <p class="hint">${t("emailHint")}</p>
        <button class="primary" type="submit">${t("start")}</button>
      </form>
      <button class="link-btn" data-action="recover">${t("haveAccount")}</button>
      <p class="hint">${t("installHint")}</p>
    </section>
  `);
}

function recover() {
  shell(`
    <section class="screen">
      ${topbar(t("recover"), true)}
      <form class="stack" id="recoveryForm">
        <label class="field"><span>${t("email")}</span><input class="input" name="email" type="email" required autocomplete="email"></label>
        <button class="primary" name="step" value="request">${t("sendCode")}</button>
        <label class="field"><span>${t("code")}</span><input class="input" name="code" inputmode="numeric" maxlength="6"></label>
        <button class="secondary" name="step" value="verify">${t("restore")}</button>
      </form>
    </section>
  `);
}

function home() {
  const items = transactions();
  const visibleItems = state.showAllTransactions ? items : items.slice(0, 4);
  shell(`
    <section class="screen">
      ${topbar("")}
      <h1 class="title">${t("hello")}, ${escapeHtml(state.user.first_name)}.</h1>
      <button class="nav-row" data-action="summary">
        <span><span class="summary-icon" aria-hidden="true"></span> ${t("summary")}</span><strong>›</strong>
      </button>
      <div class="grid-2" style="margin-top:14px">
        <button class="action blue" data-action="pickExpense"><span>${t("addExpense")}</span><small>${t("photoDone")}</small></button>
        <button class="action green" data-action="incomeForm"><span>${t("addIncome")}</span><small>${t("amountNote")}</small></button>
      </div>
      <button class="action client" style="width:100%;margin-top:10px" data-action="pickClient"><span>${t("paidForClient")}</span></button>
      <div class="list">
        ${items.length ? visibleItems.map(itemRow).join("") : `<div class="empty">${t("empty")}</div>`}
        ${items.length > 4 ? `<button class="link-btn see-all-btn" data-action="toggleTransactions">${state.showAllTransactions ? t("showLess") : t("seeAll")}</button>` : ""}
      </div>
    </section>
  `);
}

function receipt() {
  const receipt = state.receipts.find((item) => item.id === state.selected);
  if (!receipt) return go("home");
  shell(`
    <section class="screen">
      ${topbar(t("expenses"), true)}
      <img class="receipt-preview" src="${receipt.image_base64}" alt="Receipt photo">
      <form class="stack" id="receiptForm" style="margin-top:14px">
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" value="${receipt.amount || 0}"></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency" disabled>${currencyOptions(receipt.currency || "GBP")}</select></label>
        <label class="field"><span>${t("merchant")}</span><input class="input" name="merchant" value="${escapeAttr(receipt.merchant || "")}"></label>
        <label class="field"><span>${t("category")}</span><div class="chip-row">${categoryChips(receipt.category)}</div></label>
        ${receipt.ai_comment ? `<div class="card muted">${escapeHtml(receipt.ai_comment)}</div>` : ""}
        <button class="primary" type="submit">${t("save")}</button>
      </form>
      <button class="danger" style="width:100%;margin-top:12px" data-action="deleteReceipt">${t("delete")}</button>
    </section>
  `);
}

function incomeForm() {
  shell(`
    <section class="screen">
      ${topbar(t("addIncome"), true)}
      <form class="stack" id="incomeCreateForm">
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" required></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency">${currencyOptions("GBP")}</select></label>
        <label class="field"><span>${t("description")}</span><textarea class="textarea" name="description"></textarea></label>
        <label class="field"><span>${t("date")}</span><input class="input" type="date" name="date" value="${new Date().toISOString().slice(0, 10)}"></label>
        <div class="field">
          <span>${t("attachProof")}</span>
          <div class="proof-actions">
            <button class="secondary" type="button" data-action="pickIncomeProofPhoto">${t("takePhoto")}</button>
            <button class="secondary" type="button" data-action="pickIncomeProofFile">${t("uploadFile")}</button>
          </div>
          <span class="hint">${t("proofHint")}</span>
          <input class="hidden" type="file" name="proof_photo" accept="image/*" capture="environment">
          <input class="hidden" type="file" name="proof_file" accept="image/*,.pdf">
        </div>
        <button class="primary" type="submit">${t("save")}</button>
      </form>
    </section>
  `);
}

function incomeDetail() {
  const entry = state.income.find((item) => item.id === state.selected);
  if (!entry) return go("home");
  shell(`
    <section class="screen">
      ${topbar(t("income"), true)}
      <form class="stack" id="incomeEditForm">
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" value="${entry.amount || 0}"></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency">${currencyOptions(entry.currency || "GBP")}</select></label>
        <label class="field"><span>${t("description")}</span><textarea class="textarea" name="description">${escapeHtml(entry.description || "")}</textarea></label>
        <div class="field">
          <span>${t("attachProof")}</span>
          <div class="proof-actions">
            <button class="secondary" type="button" data-action="pickIncomeProofPhoto">${t("takePhoto")}</button>
            <button class="secondary" type="button" data-action="pickIncomeProofFile">${t("uploadFile")}</button>
          </div>
          <span class="hint">${t("proofHint")}</span>
          <input class="hidden" type="file" name="proof_photo" accept="image/*" capture="environment">
          <input class="hidden" type="file" name="proof_file" accept="image/*,.pdf">
        </div>
        ${entry.proof_name ? `<div class="card muted">${t("proofAttached")}: ${escapeHtml(entry.proof_name)}</div>` : ""}
        ${entry.proof_base64 ? `<button class="secondary" type="button" data-action="viewIncomeProof">${t("viewProof")}</button>` : ""}
        <button class="primary" type="submit">${t("save")}</button>
      </form>
      <button class="danger" style="width:100%;margin-top:12px" data-action="deleteIncome">${t("delete")}</button>
    </section>
  `);
}

function summary() {
  const { receipts, income } = monthEntries();
  const normal = receipts.filter((item) => !item.is_client_expense);
  const client = receipts.filter((item) => item.is_client_expense);
  shell(`
    <section class="screen">
      ${topbar(t("summary"), true)}
      <div class="month-switcher">
        <button class="icon-btn" data-action="prevMonth">‹</button>
        <span>${monthLabel()}</span>
        <button class="icon-btn" data-action="nextMonth">›</button>
      </div>
      <div class="total-box">
        <div class="total-row"><span>${t("income")}</span><strong>${formatTotals(income)}</strong></div>
        <div class="total-row"><span>${t("expenses")}</span><strong>${formatTotals(normal)}</strong></div>
        <div class="total-row"><span>${t("client")}</span><strong>${formatTotals(client)}</strong></div>
      </div>
      <p class="subtitle">${t("note")}</p>
      <div class="card muted" style="margin-bottom:12px">${t("submissionHint")}</div>
      <button class="primary" data-action="sharePdf">${t("emailPdf")}</button>
      <button class="secondary" style="width:100%;margin-top:10px" data-action="printPdf">${t("printPdf")}</button>
      <div class="list">${[...income.map(incomeSummaryRow), ...receipts.map(receiptSummaryRow)].join("") || `<div class="empty">${t("noEntries")}</div>`}</div>
    </section>
  `);
}

function settings() {
  shell(`
    <section class="screen">
      ${topbar(t("settings"), true)}
      <form class="stack" id="settingsForm">
        <label class="field"><span>${t("chooseLanguage")}</span>${languageSelect()}</label>
        <label class="field"><span>${t("firstName")}</span><input class="input" name="first_name" value="${escapeAttr(state.user.first_name)}" required></label>
        <label class="field"><span>${t("trade")}</span><input class="input" name="trade" value="${escapeAttr(state.user.trade || "")}"></label>
        <label class="field"><span>${t("email")}</span><input class="input" name="email" type="email" value="${escapeAttr(state.user.email || "")}"></label>
        <label class="field"><span>${t("humour")}</span><select class="select" name="humour">
          <option value="funny"${state.humour === "funny" ? " selected" : ""}>${t("subtle")}</option>
          <option value="sarcastic"${state.humour === "sarcastic" ? " selected" : ""}>${t("dry")}</option>
          <option value="serious"${state.humour === "serious" ? " selected" : ""}>${t("serious")}</option>
        </select></label>
        <button class="primary" type="submit">${t("save")}</button>
      </form>
      <div class="card stack" style="margin-top:18px">
        <strong>${t("recordsTitle")}</strong>
        <span class="hint">${t("recordsHint")}</span>
        <button class="secondary" type="button" data-action="accountantPortal">${t("previewAccountant")}</button>
      </div>
      <div class="card stack" style="margin-top:18px">
        <strong>${t("feedbackTitle")}</strong>
        <span class="hint">${t("feedbackHint")}</span>
        <div class="email-line">${FEEDBACK_EMAIL}</div>
        <div class="grid-2">
          <button class="secondary" type="button" data-action="copyFeedbackEmail">${t("copyEmail")}</button>
          <button class="secondary" type="button" data-action="feedback">${t("openEmailApp")}</button>
        </div>
      </div>
      <div class="card stack" style="margin-top:18px">
        <button class="secondary" type="button" data-action="privacy">${t("privacyTitle")}</button>
        <button class="secondary" type="button" data-action="terms">${t("termsTitle")}</button>
      </div>
      <div class="card stack" style="margin-top:18px">
        <strong>${t("signOutDevice")}</strong>
        <span class="hint">${t("signOutHint")}</span>
        <button class="secondary" type="button" data-action="signOutDevice">${t("signOutDevice")}</button>
      </div>
      <div class="card stack" style="margin-top:18px">
        <strong>${t("deleteAccount")}</strong>
        <span class="hint">${t("deleteWarning")}</span>
        <button class="danger" data-action="deleteAccount">${t("deleteAccount")}</button>
      </div>
    </section>
  `);
}

function accountantPortal() {
  const { receipts, income } = monthEntries();
  const normal = receipts.filter((item) => !item.is_client_expense);
  const client = receipts.filter((item) => item.is_client_expense);
  const last = transactions()[0];
  const lastDate = last ? day(last.timestamp) : t("unknown");
  const needsChase = !last || daysSince(last.timestamp) > 21;
  const monthStats = recentMonthStats();
  const missing = monthStats.filter((item) => item.total === 0);
  const flags = reviewFlags();
  shell(`
    <section class="screen">
      ${topbar(t("accountantView"), true)}
      <div class="card stack">
        <div class="portal-head">
          <span>
            <strong>${escapeHtml(state.user.first_name || "Client")}</strong>
            <small>${escapeHtml(state.user.email || "")}</small>
          </span>
          <span class="pill">${t("readOnly")}</span>
        </div>
        <div class="total-row"><span>${t("lastReceipt")}</span><strong>${lastDate}</strong></div>
        <div class="total-row"><span>${t("status")}</span><strong class="${needsChase ? "status-warn" : "status-ok"}">${needsChase ? t("chase") : t("ok")}</strong></div>
      </div>
      <div class="insight-grid">
        <div class="insight-card"><span>${t("missingMonths")}</span><strong>${missing.length}</strong></div>
        <div class="insight-card"><span>${t("needsReview")}</span><strong>${flags.length}</strong></div>
      </div>
      <div class="card stack">
        <strong>${t("missingMonths")}</strong>
        <div class="month-health">
          ${monthStats.map((item) => `<span class="${item.total ? "health-ok" : "health-missing"}">${escapeHtml(item.label)}: ${item.total ? item.total : t("noRecords")}</span>`).join("")}
        </div>
      </div>
      <div class="card stack">
        <strong>${t("needsReview")}</strong>
        ${flags.length ? `<div class="flag-list">${flags.slice(0, 6).map((flag) => `<span>${escapeHtml(flag)}</span>`).join("")}</div>` : `<span class="hint">${t("ok")}</span>`}
      </div>
      <div class="month-switcher">
        <button class="icon-btn" data-action="prevMonth">&#8249;</button>
        <span>${monthLabel()}</span>
        <button class="icon-btn" data-action="nextMonth">&#8250;</button>
      </div>
      <div class="total-box">
        <div class="total-row"><span>${t("income")}</span><strong>${formatTotals(income)}</strong></div>
        <div class="total-row"><span>${t("expenses")}</span><strong>${formatTotals(normal)}</strong></div>
        <div class="total-row"><span>${t("client")}</span><strong>${formatTotals(client)}</strong></div>
      </div>
      <div class="list">${[...income.map(incomeSummaryRow), ...receipts.map(receiptSummaryRow)].join("") || `<div class="empty">${t("noEntries")}</div>`}</div>
    </section>
  `);
}

function legalCopy(kind) {
  return (LEGAL_TEXT[state.language] || LEGAL_TEXT.en)[kind] || LEGAL_TEXT.en[kind];
}

function legalPage(kind) {
  const title = kind === "privacy" ? t("privacyTitle") : t("termsTitle");
  const copy = legalCopy(kind);
  shell(`
    <section class="screen">
      ${topbar(title, true)}
      <div class="card legal-card">
        <span class="eyebrow">${t("legalShort")}</span>
        <p>${escapeHtml(copy.short)}</p>
        <span class="eyebrow">${t("legalFull")}</span>
        <p>${escapeHtml(copy.details)}</p>
      </div>
      <button class="secondary" style="width:100%;margin-top:12px" data-action="settings">${t("legalBack")}</button>
    </section>
  `);
}

function privacy() {
  legalPage("privacy");
}

function terms() {
  legalPage("terms");
}

function languageSelect() {
  return `<select class="select" name="language">${Object.entries(LANGUAGES).map(([code, name]) => `<option value="${code}"${state.language === code ? " selected" : ""}>${name}</option>`).join("")}</select>`;
}

function currencyOptions(active) {
  return CURRENCIES.map((currency) => `<option value="${currency}"${active === currency ? " selected" : ""}>${currency}</option>`).join("");
}

function categoryChips(active = "other") {
  return CATEGORIES.map((category) => `<button class="chip ${active === category ? "active" : ""}" type="button" data-category="${category}">${t(category)}</button>`).join("");
}

function transactions() {
  return [
    ...state.receipts.map((item) => ({ type: "receipt", timestamp: item.timestamp, item })),
    ...state.income.map((item) => ({ type: "income", timestamp: item.timestamp, item }))
  ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

function itemRow(row) {
  if (row.type === "income") {
    const item = row.item;
    return `<button class="list-item" data-open-income="${item.id}">
      <span class="list-main"><span class="list-title">${escapeHtml(item.description || t("income"))}</span><span class="list-meta">${day(item.timestamp)}</span></span>
      <span class="amount income">${money(item.amount, item.currency)}</span>
    </button>`;
  }
  const item = row.item;
  return `<button class="list-item" data-open-receipt="${item.id}">
    <span class="list-main"><span class="list-title">${escapeHtml(item.merchant || t("unknown"))}</span><span class="list-meta">${item.is_client_expense ? t("client") : t(item.category)} · ${day(item.timestamp)}</span></span>
    <span class="amount ${item.is_client_expense ? "client" : "expense"}">${money(item.amount, item.currency)}</span>
  </button>`;
}

function monthEntries() {
  const y = state.summaryDate.getFullYear();
  const m = state.summaryDate.getMonth();
  const inMonth = (item) => {
    const date = new Date(item.timestamp);
    return date.getFullYear() === y && date.getMonth() === m;
  };
  return {
    receipts: state.receipts.filter(inMonth),
    income: state.income.filter(inMonth)
  };
}

function daysSince(value) {
  if (!value) return Infinity;
  return Math.floor((Date.now() - new Date(value).getTime()) / 86400000);
}

function monthKey(date) {
  const value = new Date(date);
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}`;
}

function shortMonthLabel(date) {
  return new Date(date).toLocaleDateString(undefined, { month: "short", year: "numeric" });
}

function recentMonthStats(count = 6) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() - (count - 1 - index));
    const key = monthKey(date);
    const receiptCount = state.receipts.filter((item) => monthKey(item.timestamp) === key).length;
    const incomeCount = state.income.filter((item) => monthKey(item.timestamp) === key).length;
    return { key, label: shortMonthLabel(date), receiptCount, incomeCount, total: receiptCount + incomeCount };
  });
}

function reviewFlags() {
  const { receipts, income } = monthEntries();
  const flags = [];
  receipts.forEach((item) => {
    if (!item.merchant) flags.push(t("missingMerchant"));
    if (!item.category || item.category === "other") flags.push(t("missingCategory"));
  });
  income.forEach((item) => {
    if (!item.proof_base64 && !item.proof_name) flags.push(t("incomeWithoutProof"));
  });
  const seen = new Set();
  receipts.forEach((item) => {
    const key = [new Date(item.timestamp).toISOString().slice(0, 10), item.amount, item.currency, item.merchant || ""].join("|");
    if (seen.has(key)) flags.push(t("possibleDuplicate"));
    seen.add(key);
  });
  return flags;
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function accountantCsv() {
  const { receipts, income } = monthEntries();
  const rows = [
    ["type", "date", "amount", "currency", "merchant_or_description", "tidgo_category", "paid_for_client", "proof_available", "needs_review", "accountant_category", "accountant_notes", "approved"],
    ...income.map((item) => [
      "income",
      new Date(item.timestamp).toISOString().slice(0, 10),
      Number(item.amount || 0).toFixed(2),
      item.currency || "GBP",
      item.description || "",
      "",
      "no",
      item.proof_base64 || item.proof_name ? "yes" : "no",
      item.proof_base64 || item.proof_name ? "" : t("incomeWithoutProof"),
      "",
      "",
      ""
    ]),
    ...receipts.map((item) => [
      item.is_client_expense ? "paid_for_client" : "expense",
      new Date(item.timestamp).toISOString().slice(0, 10),
      Number(item.amount || 0).toFixed(2),
      item.currency || "GBP",
      item.merchant || "",
      item.category || "",
      item.is_client_expense ? "yes" : "no",
      item.image_base64 ? "yes" : "no",
      [!item.merchant ? t("missingMerchant") : "", (!item.category || item.category === "other") ? t("missingCategory") : ""].filter(Boolean).join("; "),
      "",
      "",
      ""
    ])
  ];
  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

function downloadFile(name, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function totals(items) {
  return items.reduce((acc, item) => {
    const currency = (item.currency || "GBP").toUpperCase();
    acc[currency] = (acc[currency] || 0) + Number(item.amount || 0);
    return acc;
  }, {});
}

function formatTotals(items) {
  const entries = Object.entries(totals(items)).filter(([, value]) => Math.abs(value) > 0.001);
  return entries.length ? entries.map(([currency, value]) => money(value, currency)).join("\n") : "-";
}

function incomeSummaryRow(item) {
  return `<div class="list-item"><span><strong>${t("income")}</strong><br><span class="list-meta">${day(item.timestamp)} · ${escapeHtml(item.description || "")}</span></span><span class="amount income">${money(item.amount, item.currency)}</span></div>`;
}

function receiptSummaryRow(item) {
  return `<div class="list-item"><span><strong>${item.is_client_expense ? t("client") : t("expenses")}</strong><br><span class="list-meta">${day(item.timestamp)} · ${escapeHtml(item.merchant || t(item.category))}</span></span><span class="amount ${item.is_client_expense ? "client" : "expense"}">${money(item.amount, item.currency)}</span></div>`;
}

function go(screen) {
  navigate(screen);
}

async function uploadReceipt(file, isClientExpense) {
  if (!file || !state.user?.id) return;
  setBusy(true);
  toast(t("photoReady"));
  try {
    const image_base64 = await fileToDataUrl(file);
    const receipt = await api("/api/receipts", {
      method: "POST",
      body: JSON.stringify({
        user_id: state.user.id,
        image_base64,
        is_client_expense: isClientExpense,
        humour_style: state.humour,
        language: state.language
      })
    });
    await refresh();
    state.selected = receipt.id;
    state.screen = "receipt";
    render();
    toast(receipt.ai_comment || t("saved"));
  } catch (error) {
    toast(error.message || t("backendDown"));
  } finally {
    setBusy(false);
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function incomeProofFile(form) {
  return form.elements.proof_photo?.files?.[0] || form.elements.proof_file?.files?.[0] || null;
}

function buildPrintHtml() {
  const { receipts, income } = monthEntries();
  const rows = [
    ...income.map((item) => ({ date: day(item.timestamp), type: t("income"), label: item.description || t("income"), amount: money(item.amount, item.currency) })),
    ...receipts.map((item) => ({ date: day(item.timestamp), type: item.is_client_expense ? t("client") : t("expenses"), label: item.merchant || t(item.category), amount: money(item.amount, item.currency) }))
  ];
  const tableRows = rows.length
    ? rows.map((row) => `<tr><td>${escapeHtml(row.date)}</td><td>${escapeHtml(row.type)}</td><td>${escapeHtml(row.label)}</td><td class="print-money">${escapeHtml(row.amount)}</td></tr>`).join("")
    : `<tr><td colspan="4">${t("noEntries")}</td></tr>`;
  const photos = receipts.map((item) => `<section class="photo-page"><div class="photo-caption">${escapeHtml(item.merchant || t(item.category))} | ${escapeHtml(money(item.amount, item.currency))}</div><img src="${item.image_base64}" alt=""></section>`).join("");
  return `
    <h1>TidGo - ${escapeHtml(monthLabel())}</h1>
    <p>${escapeHtml(state.user?.first_name || "")} ${state.user?.trade ? " · " + escapeHtml(state.user.trade) : ""}</p>
    <p>${escapeHtml(t("note"))}</p>
    <table><thead><tr><th>Date</th><th>Type</th><th>Description</th><th class="print-money">Amount</th></tr></thead><tbody>${tableRows}</tbody></table>
    ${photos}
  `;
}

async function createSummaryPdfFile() {
  const jsPdf = window.jspdf?.jsPDF;
  if (!jsPdf) {
    throw new Error("PDF tool is still loading. Try again in a few seconds.");
  }

  const doc = new jsPdf({ unit: "pt", format: "a4" });
  const { receipts, income } = monthEntries();
  const normal = receipts.filter((item) => !item.is_client_expense);
  const client = receipts.filter((item) => item.is_client_expense);
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 42;
  let y = 48;

  const line = (text, size = 11, weight = "normal") => {
    doc.setFont("helvetica", weight);
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(String(text || ""), pageWidth - margin * 2);
    doc.text(lines, margin, y);
    y += lines.length * (size + 5);
  };

  doc.setTextColor(23, 32, 51);
  line("TidGo - " + monthLabel(), 22, "bold");
  line([state.user?.first_name, state.user?.trade].filter(Boolean).join(" | "), 11);
  y += 8;
  line(t("income") + ": " + formatTotals(income), 12, "bold");
  line(t("expenses") + ": " + formatTotals(normal), 12, "bold");
  line(t("client") + ": " + formatTotals(client), 12, "bold");
  y += 12;
  line(t("note"), 10);
  y += 14;

  const rows = [
    ...income.map((item) => [day(item.timestamp), t("income"), item.description || t("income"), money(item.amount, item.currency)]),
    ...normal.map((item) => [day(item.timestamp), t("expenses"), item.merchant || t(item.category), money(item.amount, item.currency)]),
    ...client.map((item) => [day(item.timestamp), t("client"), item.merchant || t(item.category), money(item.amount, item.currency)])
  ];

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Date", margin, y);
  doc.text("Type", margin + 68, y);
  doc.text("Description", margin + 165, y);
  doc.text("Amount", pageWidth - margin - 88, y);
  y += 14;
  doc.setDrawColor(216, 222, 232);
  doc.line(margin, y, pageWidth - margin, y);
  y += 14;
  doc.setFont("helvetica", "normal");

  if (!rows.length) {
    line(t("noEntries"), 11);
  }

  for (const row of rows) {
    if (y > pageHeight - 60) {
      doc.addPage();
      y = 48;
    }
    doc.text(String(row[0]), margin, y);
    doc.text(String(row[1]), margin + 68, y);
    doc.text(doc.splitTextToSize(String(row[2]), 185), margin + 165, y);
    doc.text(String(row[3]), pageWidth - margin - 88, y);
    y += 22;
  }

  for (const receipt of receipts) {
    if (!receipt.image_base64) continue;
    doc.addPage();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(`${receipt.merchant || t(receipt.category)} - ${money(receipt.amount, receipt.currency)}`, margin, 36);
    try {
      const props = doc.getImageProperties(receipt.image_base64);
      const maxW = pageWidth - margin * 2;
      const maxH = pageHeight - 90;
      const scale = Math.min(maxW / props.width, maxH / props.height);
      const w = props.width * scale;
      const h = props.height * scale;
      doc.addImage(receipt.image_base64, props.fileType || "JPEG", (pageWidth - w) / 2, 58, w, h);
    } catch {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("Receipt photo could not be added to this PDF.", margin, 70);
    }
  }

  const blob = doc.output("blob");
  const fileName = `TidGo-${state.summaryDate.getFullYear()}-${String(state.summaryDate.getMonth() + 1).padStart(2, "0")}.pdf`;
  return new File([blob], fileName, { type: "application/pdf" });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button, [data-open-receipt], [data-open-income]");
  if (!target) return;

  if (target.dataset.category) {
    document.querySelectorAll("[data-category]").forEach((item) => item.classList.remove("active"));
    target.classList.add("active");
    return;
  }
  if (target.dataset.openReceipt) {
    return navigate("receipt", { selected: target.dataset.openReceipt });
  }
  if (target.dataset.openIncome) {
    return navigate("incomeDetail", { selected: target.dataset.openIncome });
  }

  const action = target.dataset.action;
  if (!action) return;
  if (action === "back") {
    if (history.length > 1) {
      history.back();
    } else {
      navigate("home");
    }
    return;
  }
  if (action === "home") return go("home");
  if (action === "recover") return go("recover");
  if (action === "settings") return go("settings");
  if (action === "accountantPortal") return go("accountantPortal");
  if (action === "inviteAccountant") {
    if (!state.accountantEmail) {
      toast(t("accountantEmail"));
      return;
    }
    const subject = encodeURIComponent(t("accountantInviteSubject"));
    const body = encodeURIComponent(`${t("accountantInviteBody")}\n\n${location.origin}`);
    location.href = `mailto:${state.accountantEmail}?subject=${subject}&body=${body}`;
    return;
  }
  if (action === "revokeAccountant") {
    state.accountantEmail = "";
    forget("rb_accountant_email");
    toast(t("saved"));
    return render();
  }
  if (action === "feedback") {
    const subject = encodeURIComponent(t("feedbackSubject"));
    const body = encodeURIComponent(`${t("feedbackBody")}\n\n`);
    location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
    return;
  }
  if (action === "copyFeedbackEmail") {
    try {
      await navigator.clipboard.writeText(FEEDBACK_EMAIL);
      toast(t("emailCopied"));
    } catch {
      toast(FEEDBACK_EMAIL);
    }
    return;
  }
  if (action === "privacy") return go("privacy");
  if (action === "terms") return go("terms");
  if (action === "summary") return go("summary");
  if (action === "incomeForm") return go("incomeForm");
  if (action === "pickIncomeProofPhoto" || action === "pickIncomeProofFile") {
    const form = target.closest("form");
    const field = action === "pickIncomeProofPhoto" ? "proof_photo" : "proof_file";
    form?.elements[field]?.click();
    return;
  }
  if (action === "viewIncomeProof") {
    const entry = state.income.find((item) => item.id === state.selected);
    if (entry?.proof_base64) window.open(entry.proof_base64, "_blank", "noopener");
    return;
  }
  if (action === "toggleTransactions") {
    state.showAllTransactions = !state.showAllTransactions;
    return render();
  }
  if (action === "pickExpense") return expensePicker.click();
  if (action === "pickClient") return clientPicker.click();
  if (action === "prevMonth" || action === "nextMonth") {
    state.summaryDate.setMonth(state.summaryDate.getMonth() + (action === "prevMonth" ? -1 : 1));
    return render();
  }
  if (action === "printPdf") {
    document.querySelector("#printRoot").innerHTML = buildPrintHtml();
    window.print();
    return;
  }
  if (action === "downloadAccountantCsv") {
    const fileName = `TidGo-${state.user.first_name || "client"}-${state.summaryDate.getFullYear()}-${String(state.summaryDate.getMonth() + 1).padStart(2, "0")}.csv`;
    downloadFile(fileName, accountantCsv(), "text/csv");
    toast(t("accountantHeroToast"));
    return;
  }
  if (action === "downloadAccountantPack") {
    const fileName = `TidGo-accountant-pack-${state.user.first_name || "client"}-${state.summaryDate.getFullYear()}-${String(state.summaryDate.getMonth() + 1).padStart(2, "0")}.csv`;
    downloadFile(fileName, accountantCsv(), "text/csv");
    document.querySelector("#printRoot").innerHTML = buildPrintHtml();
    toast(t("accountantPackToast"));
    return;
  }
  if (action === "chaseClient") {
    if (!state.user.email) {
      toast(t("email"));
      return;
    }
    const subject = encodeURIComponent(t("chaseSubject"));
    const body = encodeURIComponent(`${t("chaseBody")}\n\n${location.origin}`);
    location.href = `mailto:${state.user.email}?subject=${subject}&body=${body}`;
    return;
  }
  if (action === "inviteClients") {
    const raw = document.querySelector("[name='demo_client_emails']")?.value || "";
    const emails = raw.split(/[\s,;]+/).map((item) => item.trim()).filter((item) => item.includes("@"));
    if (!emails.length) {
      toast(t("clientEmails"));
      return;
    }
    const subject = encodeURIComponent("Try TidGo for your receipts");
    const body = encodeURIComponent(`Hi,\n\nI would like you to try TidGo for keeping receipt and income records tidy through the year.\n\nOpen: ${location.origin}\n\nIt helps me see what is missing before everything turns into a last-minute plastic bag situation.\n`);
    location.href = `mailto:${emails.join(",")}?subject=${subject}&body=${body}`;
    return;
  }
  if (action === "sharePdf") {
    try {
      if (!window.isSecureContext) {
        toast(t("secureShareRequired"));
        return;
      }
      setBusy(true);
      const file = await createSummaryPdfFile();
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: `TidGo ${monthLabel()}`,
          text: t("emailBody"),
          files: [file]
        });
      } else {
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(url);
        toast("PDF saved. Your browser cannot open phone sharing for files.");
      }
    } catch (error) {
      toast(error.message || "Could not create PDF.");
    } finally {
      setBusy(false);
    }
    return;
  }
  if (action === "emailPdf") {
    const subject = encodeURIComponent(`TidGo ${monthLabel()}`);
    const body = encodeURIComponent(t("emailBody"));
    location.href = `mailto:?subject=${subject}&body=${body}`;
    return;
  }
  if (action === "deleteReceipt" && confirm(t("deleteWarning"))) {
    await api(`/api/receipts/${state.selected}`, { method: "DELETE" });
    await refresh();
    return go("home");
  }
  if (action === "deleteIncome" && confirm(t("deleteWarning"))) {
    await api(`/api/income/${state.selected}`, { method: "DELETE" });
    await refresh();
    return go("home");
  }
  if (action === "deleteAccount" && confirm(t("deleteWarning"))) {
    await api(`/api/users/${state.user.id}`, { method: "DELETE" });
    await deviceForget("rb_user");
    await deviceForget("rb_last_user");
    state.user = null;
    return go("onboarding");
  }
  if (action === "signOutDevice") {
    await deviceForget("rb_user");
    state.user = null;
    state.receipts = [];
    state.income = [];
    return go("recover");
  }
});

document.addEventListener("change", (event) => {
  if (event.target.name === "language") {
    state.language = event.target.value;
    write("rb_language", state.language);
    render();
  }
});

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form).entries());
  setBusy(true);
  try {
    if (form.id === "onboardingForm") {
      state.language = data.language || state.language;
      const user = await api("/api/users", {
        method: "POST",
        body: JSON.stringify({
          first_name: data.first_name,
          trade: data.trade || null,
          email: data.email || null,
          language: state.language
        })
      });
      await rememberUser(user);
      write("rb_language", state.language);
      await refresh();
      return go("home");
    }
    if (form.id === "recoveryForm") {
      const submitter = event.submitter?.value;
      if (submitter === "request") {
        await api("/api/auth/recovery/request", { method: "POST", body: JSON.stringify({ email: data.email }) });
        return toast("Code sent if this email exists.");
      }
      const user = await api("/api/auth/recovery/verify", { method: "POST", body: JSON.stringify({ email: data.email, code: data.code }) });
      state.language = user.language || state.language;
      await rememberUser(user);
      write("rb_language", state.language);
      await refresh();
      return go("home");
    }
    if (form.id === "receiptForm") {
      const category = document.querySelector("[data-category].active")?.dataset.category || "other";
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount < 0) throw new Error("Enter a valid amount.");
      await api(`/api/receipts/${state.selected}`, {
        method: "PATCH",
        body: JSON.stringify({ amount, merchant: data.merchant || null, category })
      });
      await refresh();
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "incomeCreateForm") {
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount <= 0) throw new Error("Enter a valid amount.");
      const created = await api("/api/income", {
        method: "POST",
        body: JSON.stringify({
          user_id: state.user.id,
          amount,
          currency: data.currency,
          description: data.description || null,
          date: data.date ? new Date(`${data.date}T12:00:00`).toISOString() : null
        })
      });
      const proof = incomeProofFile(form);
      if (proof && created?.id) {
        state.incomeProofs[created.id] = { name: proof.name, type: proof.type, data: await fileToDataUrl(proof) };
        write("rb_income_proofs", state.incomeProofs);
      }
      await refresh();
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "incomeEditForm") {
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount <= 0) throw new Error("Enter a valid amount.");
      await api(`/api/income/${state.selected}`, {
        method: "PATCH",
        body: JSON.stringify({ amount, currency: data.currency, description: data.description || null })
      });
      const proof = incomeProofFile(form);
      if (proof && state.selected) {
        state.incomeProofs[state.selected] = { name: proof.name, type: proof.type, data: await fileToDataUrl(proof) };
        write("rb_income_proofs", state.incomeProofs);
      }
      await refresh();
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "accountantForm") {
      state.accountantEmail = (data.accountant_email || "").trim();
      write("rb_accountant_email", state.accountantEmail);
      toast(t("saved"));
      return render();
    }
    if (form.id === "settingsForm") {
      state.language = data.language;
      state.humour = data.humour;
      const user = await api(`/api/users/${state.user.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          first_name: data.first_name,
          trade: data.trade || null,
          email: data.email || null,
          language: state.language
        })
      });
      await rememberUser(user);
      write("rb_language", state.language);
      write("rb_humour", state.humour);
      toast(t("saved"));
      return go("home");
    }
  } catch (error) {
    toast(error.message || t("backendDown"));
  } finally {
    setBusy(false);
  }
});

expensePicker.addEventListener("change", (event) => uploadReceipt(event.target.files?.[0], false));
clientPicker.addEventListener("change", (event) => uploadReceipt(event.target.files?.[0], true));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

window.addEventListener("popstate", (event) => {
  applyRoute(event.state || { screen: state.user ? "home" : "onboarding" });
});

(async function boot() {
  showSplash();
  await restoreDeviceUser();
  if (state.user?.id) await refresh();
  if (state.screen === "boot") {
    state.screen = state.user ? "home" : "onboarding";
  }
  history.replaceState(routeState(), "", location.pathname + location.search);
  setTimeout(render, 450);
})();
