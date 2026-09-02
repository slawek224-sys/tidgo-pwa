const API_BASE = "https://donezo-api-53t9.onrender.com";
const TIDGO_WHATSAPP_NUMBER = "447466382511";
const FEEDBACK_EMAIL = "hello@tidgo.co.uk";
const GA_MEASUREMENT_ID = "G-FTS1ZS0PF5";
const CURRENCIES = ["GBP", "EUR", "USD", "PLN", "RON", "UAH", "BGN", "CZK", "HUF"];
const CATEGORIES = ["food", "fuel", "tools", "transport", "other"];
const UI_LOCALES = {
  en: "en-GB",
  pl: "pl-PL",
  ro: "ro-RO",
  uk: "uk-UA",
  lt: "lt-LT",
  lv: "lv-LV",
  es: "es-ES",
  bg: "bg-BG"
};
const LANGUAGES = {
  en: "English",
  pl: "Polski",
  ro: "RomÃ¢nÄƒ",
  uk: "Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°",
  lt: "LietuviÅ³",
  lv: "LatvieÅ¡u",
  es: "EspaÃ±ol",
  bg: "Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸"
};

const LANGUAGE_FLAGS = {
  en: "gb",
  pl: "pl",
  ro: "ro",
  uk: "ua",
  lt: "lt",
  lv: "lv",
  es: "es",
  bg: "bg"
};

const MARKETING_LANGUAGES = {
  en: { country: "gb", label: "English" },
  pl: { country: "pl", label: "Polski" },
  ro: { country: "ro", label: "Romana" },
  lt: { country: "lt", label: "Lietuviu" }
};

const MARKETING_COPY = {
  en: {
    navHow: "How it works", navWho: "Who is it for?", navStory: "Our Story", navIntake: "How intake works", navFindAccountant: "Find an accountant", navAccountantPack: "For accountants", navPricing: "Launch & pricing", navFaq: "FAQ", navMtd: "MTD Knowledge Base", navContact: "Contact",
    heroEyebrow: "Receipts in. Tidy records out.", heroTitle: "One simple place for receipts.", heroText: "Snap it on WhatsApp. TidGo keeps receipts, income proof and MTD records tidy for self-employed people, CIS workers, landlords and their accountants.",
    stepSnap: "Snap receipts", stepTidy: "Keep records tidy", stepPack: "Send a clean pack",
    trustSimple: "No complicated registration. Just email sign-in.",
    trustControl: "Your records stay under your control.",
    trustEarly: "Free during early access.",
    earlyTitle: "Early access:", earlyText: "TidGo is live for a small group of early users. It is free while we collect feedback, improve the app and add clearer guides for self-employed people and accountants.",
    pricingTitle: "Launch & pricing:", pricingText: "Official launch date: to be announced after early-access testing. TidGo is free during early access. If paid plans are introduced, users will be told clearly in advance and will always be able to export or delete their records.",
    mtdTitle: "MTD records without the accounting chaos", mtdLead: "The first step in Making Tax Digital is not sending receipt photos to HMRC. It is keeping your income, expenses and proof in digital form.", mtdText: "TidGo does not replace your accountant and does not submit your tax returns. It helps you collect receipt photos through WhatsApp, keep income proof and MTD records tidy, and prepare cleaner summaries for your accountant before quarterly pressure arrives.", faqTitle: "FAQ:", faqText: "More answers are coming soon. For now, try the app, open the accountant portal, or send a message below.",
    contactTitle: "Want to try it or ask a question?", contactText: "Send a quick message. No sales maze, just a human reply.", yourEmail: "Your email", roleSelf: "I work for myself", roleAccountant: "I am an accountant", roleCurious: "Just curious", message: "Message", sendMessage: "Send message", messageSent: "Message sent. Thank you.", messagePending: "Automatic contact is being connected. Please try again after the next API deploy.",
    selfLabel: "I work for myself", selfTitle: "Open TidGo App", selfText: "Take receipt photos, add income, keep monthly records ready for your accountant.", scanApp: "Scan app", openApp: "Open app",
    accountantLabel: "I'm an accountant", accountantTitle: "Open Accountant Portal", accountantText: "View connected client records, download CSV/PDF packs, and reduce deadline panic.", scanPortal: "Scan portal", openPortal: "Open Accountant Portal", viewDemo: "View quick demo",
    footer: "TidGo helps organise records. It is not accounting, tax advice or payroll software.", companyFooter: "TidGo Ltd. Company number 17356146. 128 City Road, London, EC1V 2NX. hello@tidgo.co.uk", home: "Home", appDemo: "App demo", accountantDemo: "Accountant demo", deleteAccountLink: "Delete account", backHome: "Back to homepage", step: "Step", foundingTester: "Become a Founding Tester", testerCalloutTitle: "Want to help shape TidGo?", testerCalloutText: "Join the Android closed test, use the app for at least 14 days, and send honest feedback. No positive review required.", testerCalloutButton: "Become an Android tester", findAccountantTitle: "Find an accountant who understands tidy digital records", findAccountantText: "TidGo is building a small early access introduction list for self-employed people, landlords, CIS workers, accountants and bookkeepers. No public ranking yet. Tell us what you need and we will try to make a sensible introduction.", needAccountantTitle: "I need an accountant or bookkeeper", needAccountantText: "Tell us where you are, what you do and which language you prefer. TidGo may introduce you to an accountant or bookkeeper, but does not provide accounting advice or guarantee third-party services.", accountantJoinTitle: "I am an accountant or bookkeeper", accountantJoinText: "Join the early TidGo accountant list. We are looking for people who can help users with Self Assessment, CIS, landlords, MTD records and simple bookkeeping.", yourName: "Your name", businessType: "Work type or firm type", location: "Town or area", preferredLanguage: "Preferred language", phoneOptional: "Phone or WhatsApp (optional)", accountantFirm: "Firm name", servicesOffered: "Services offered", submitIntroRequest: "Send request", introSent: "Request sent. Thank you.", introPending: "Request could not be sent. Please email hello@tidgo.co.uk.", introDisclaimer: "TidGo may help with introductions, but it is not an accountant, tax adviser or broker. You choose and check any accountant yourself.",
    trySafe: "Try it safely: take a photo, check the result, download your summary, and delete your account/data any time from Settings.",
    appDemoKind: "For self-employed", appDemoTitle: "See the receipt flow before signing in.", appDemoText: "TidGo is built around one simple habit: take the photo now, send a cleaner pack later.",
    accountantDemoKind: "For accountants", accountantDemoTitle: "See the client handoff before signing in.", accountantDemoText: "The accountant portal is read-only. Clients keep records tidy; you get a cleaner pack when it is time to work.",
    demoHomeScreen: "Home", demoHomeTitle: "Start from a simple home screen", demoHomeText: "The main actions are right there: add an expense, add income, or open the monthly summary.",
    demoReceiptScreen: "Receipt photo", demoReceiptTitle: "Snap the receipt", demoReceiptText: "Take or upload a photo. TidGo confirms it has received the receipt with a small friendly message.", demoReceiptCallout: "Friendly confirmation after the receipt is received.",
    demoDetailsScreen: "Check details", demoDetailsTitle: "Review before saving", demoDetailsText: "You can correct the amount, category, currency or shop before it goes into your records.",
    demoSummaryScreen: "Monthly summary", demoSummaryTitle: "Send the pack", demoSummaryText: "Income and expenses are grouped by currency, ready for your accountant.",
    demoAccessScreen: "Accountant access", demoAccessTitle: "Sign in with accountant email", demoAccessText: "The portal uses an email code, then shows the connected accountant account on this device.",
    demoClientsScreen: "Client list", demoClientsTitle: "See connected clients", demoClientsText: "Only clients who gave consent appear in your list. You can open each client from one simple view.",
    demoRecordsScreen: "Client records", demoRecordsTitle: "Download the client pack", demoRecordsText: "Open a client, check totals, request missing docs, then download CSV or PDF."
  },
  pl: {
    navHow: "Jak to dziaÅ‚a", navWho: "Dla kogo?", navStory: "Historia twÃ³rcy", navIntake: "Jak dodawaÄ‡ dokumenty", navFindAccountant: "ZnajdÅº ksiÄ™gowego", navAccountantPack: "Dla ksiÄ™gowych", navPricing: "Start i ceny", navFaq: "FAQ", navMtd: "Baza wiedzy MTD", navContact: "Kontakt",
    heroEyebrow: "Paragony wchodzÄ…. PorzÄ…dek wychodzi.", heroTitle: "Jedno proste miejsce na paragony.", heroText: "Dla self-employed, ktÃ³rzy chcÄ… mieÄ‡ rekordy w porzÄ…dku, i dla ksiÄ™gowych, ktÃ³rzy nie chcÄ… gonitwy za reklamÃ³wkÄ… paragonÃ³w.",
    stepSnap: "ZrÃ³b zdjÄ™cie", stepTidy: "Trzymaj porzÄ…dek", stepPack: "WyÅ›lij czystÄ… paczkÄ™",
    trustSimple: "Bez skomplikowanej rejestracji. Tylko logowanie emailem.",
    trustControl: "Twoje rekordy zostajÄ… pod TwojÄ… kontrolÄ….",
    trustEarly: "Darmowe w trakcie early access.",
    earlyTitle: "Early access:", earlyText: "TidGo dziaÅ‚a dla maÅ‚ej grupy pierwszych uÅ¼ytkownikÃ³w. Teraz jest darmowe, zbieramy feedback, poprawiamy aplikacjÄ™ i dopisujemy jasne instrukcje.",
    pricingTitle: "Start i ceny:", pricingText: "Oficjalna data startu bÄ™dzie ogÅ‚oszona po testach early access. TidGo jest darmowe w trakcie early access. JeÅ›li wprowadzimy pÅ‚atne plany, uÅ¼ytkownicy dostanÄ… jasnÄ… informacjÄ™ z wyprzedzeniem i zawsze bÄ™dÄ… mogli wyeksportowaÄ‡ albo usunÄ…Ä‡ swoje rekordy.",
    mtdTitle: "Rekordy MTD bez chaosu ksiÄ™gowego", mtdLead: "Pierwszy krok w Making Tax Digital to nie wysyÅ‚anie zdjÄ™Ä‡ paragonÃ³w do HMRC. To trzymanie przychodÃ³w, wydatkÃ³w i dowodÃ³w w cyfrowej formie.", mtdText: "TidGo nie zastÄ™puje ksiÄ™gowego i nie wysyÅ‚a Twoich deklaracji podatkowych. Pomaga trzymaÄ‡ paragony, dowody przychodu i podsumowania w jednym uporzÄ…dkowanym miejscu, Å¼eby Ty albo ksiÄ™gowy mogli przygotowaÄ‡ kwartalne summary bez paniki na ostatniÄ… chwilÄ™.", faqTitle: "FAQ:", faqText: "WiÄ™cej odpowiedzi wkrÃ³tce. Na razie zobacz aplikacjÄ™, portal ksiÄ™gowego albo wyÅ›lij wiadomoÅ›Ä‡ poniÅ¼ej.",
    contactTitle: "Chcesz przetestowaÄ‡ albo zapytaÄ‡?", contactText: "WyÅ›lij krÃ³tkÄ… wiadomoÅ›Ä‡. Bez lejka sprzedaÅ¼owego, normalna odpowiedÅº od czÅ‚owieka.", yourEmail: "TwÃ³j email", roleSelf: "PracujÄ™ na siebie", roleAccountant: "Jestem ksiÄ™gowym", roleCurious: "Tylko sprawdzam", message: "WiadomoÅ›Ä‡", sendMessage: "WyÅ›lij wiadomoÅ›Ä‡", messageSent: "WiadomoÅ›Ä‡ wysÅ‚ana. DziÄ™kujÄ™.", messagePending: "Automatyczny kontakt jest podpinany. SprÃ³buj po nastÄ™pnym deployu API.",
    selfLabel: "PracujÄ™ na siebie", selfTitle: "OtwÃ³rz aplikacjÄ™ TidGo", selfText: "RÃ³b zdjÄ™cia paragonÃ³w, dodawaj przychody i trzymaj miesiÄ™czne rekordy gotowe dla ksiÄ™gowego.", scanApp: "Skanuj app", openApp: "OtwÃ³rz app",
    accountantLabel: "Jestem ksiÄ™gowym", accountantTitle: "OtwÃ³rz portal ksiÄ™gowego", accountantText: "Zobacz rekordy klientÃ³w, pobierz CSV/PDF i ogranicz panikÄ™ przed terminem.", scanPortal: "Skanuj portal", openPortal: "OtwÃ³rz portal ksiÄ™gowego", viewDemo: "Zobacz szybkie demo",
    footer: "TidGo pomaga porzÄ…dkowaÄ‡ rekordy. To nie jest ksiÄ™gowoÅ›Ä‡, porada podatkowa ani payroll.", companyFooter: "TidGo Ltd. Company number 17356146. 128 City Road, London, EC1V 2NX. hello@tidgo.co.uk", home: "Start", appDemo: "Demo app", accountantDemo: "Demo ksiÄ™gowego", deleteAccountLink: "UsuÅ„ konto", backHome: "WrÃ³Ä‡ na stronÄ™ gÅ‚Ã³wnÄ…", step: "Krok", foundingTester: "ZostaÅ„ Founding Tester", testerCalloutTitle: "Chcesz pomÃ³c dopracowaÄ‡ TidGo?", testerCalloutText: "DoÅ‚Ä…cz do zamkniÄ™tych testÃ³w Androida, uÅ¼ywaj aplikacji przez co najmniej 14 dni i wyÅ›lij szczery feedback. Nie wymagamy pozytywnej opinii.", testerCalloutButton: "ZostaÅ„ testerem Androida", findAccountantTitle: "ZnajdÅº ksiÄ™gowego, ktÃ³ry rozumie uporzÄ…dkowane cyfrowe rekordy", findAccountantText: "TidGo buduje maÅ‚Ä… listÄ™ kontaktowÄ… dla self-employed, landlordÃ³w, CIS workers, ksiÄ™gowych i bookkeeperÃ³w. Na razie bez publicznego rankingu. Napisz, czego potrzebujesz, a sprÃ³bujemy sensownie poÅ‚Ä…czyÄ‡ strony.", needAccountantTitle: "Szukam ksiÄ™gowego lub bookkeepera", needAccountantText: "Napisz, gdzie jesteÅ›, czym siÄ™ zajmujesz i w jakim jÄ™zyku wolisz rozmawiaÄ‡. TidGo moÅ¼e pomÃ³c w kontakcie, ale nie Å›wiadczy usÅ‚ug ksiÄ™gowych i nie gwarantuje usÅ‚ug firm trzecich.", accountantJoinTitle: "Jestem ksiÄ™gowym albo bookkeeperem", accountantJoinText: "DoÅ‚Ä…cz do wczesnej listy TidGo. Szukamy osÃ³b, ktÃ³re pomagajÄ… przy Self Assessment, CIS, landlordach, rekordach MTD i prostej ksiÄ™gowoÅ›ci.", yourName: "ImiÄ™ i nazwisko", businessType: "Rodzaj pracy lub firmy", location: "Miasto lub okolica", preferredLanguage: "Preferowany jÄ™zyk", phoneOptional: "Telefon lub WhatsApp (opcjonalnie)", accountantFirm: "Nazwa firmy", servicesOffered: "UsÅ‚ugi", submitIntroRequest: "WyÅ›lij zgÅ‚oszenie", introSent: "ZgÅ‚oszenie wysÅ‚ane. DziÄ™kujÄ™.", introPending: "Nie udaÅ‚o siÄ™ wysÅ‚aÄ‡. Napisz proszÄ™ na hello@tidgo.co.uk.", introDisclaimer: "TidGo moÅ¼e pomagaÄ‡ w kontaktach, ale nie jest ksiÄ™gowym, doradcÄ… podatkowym ani brokerem. Sam wybierasz i sprawdzasz ksiÄ™gowego.",
    trySafe: "SprawdÅº bez stresu: zrÃ³b zdjÄ™cie, zobacz wynik, pobierz summary i usuÅ„ konto/dane w dowolnym momencie w ustawieniach.",
    appDemoKind: "Dla self-employed", appDemoTitle: "Zobacz flow paragonu bez logowania.", appDemoText: "TidGo opiera siÄ™ na jednym prostym nawyku: zrÃ³b zdjÄ™cie teraz, wyÅ›lij czystszÄ… paczkÄ™ pÃ³Åºniej.",
    accountantDemoKind: "Dla ksiÄ™gowych", accountantDemoTitle: "Zobacz przekazanie klienta bez logowania.", accountantDemoText: "Portal ksiÄ™gowego jest tylko do odczytu. Klient trzyma rekordy w porzÄ…dku, a ty dostajesz czystszÄ… paczkÄ™ do pracy.",
    demoHomeScreen: "Start", demoHomeTitle: "Prosty ekran gÅ‚Ã³wny", demoHomeText: "NajwaÅ¼niejsze akcje sÄ… od razu widoczne: wydatek, przychÃ³d, koszt dla klienta i monthly summary.",
    demoReceiptScreen: "ZdjÄ™cie paragonu", demoReceiptTitle: "ZrÃ³b zdjÄ™cie paragonu", demoReceiptText: "ZrÃ³b albo wgraj zdjÄ™cie. TidGo potwierdza, Å¼e paragon zostaÅ‚ odebrany.", demoReceiptCallout: "Przyjazne potwierdzenie po odebraniu paragonu.",
    demoDetailsScreen: "SprawdÅº dane", demoDetailsTitle: "SprawdÅº przed zapisem", demoDetailsText: "MoÅ¼esz poprawiÄ‡ kwotÄ™, kategoriÄ™, walutÄ™ albo sklep przed zapisaniem.",
    demoSummaryScreen: "Podsumowanie", demoSummaryTitle: "WyÅ›lij paczkÄ™", demoSummaryText: "Przychody, wydatki i koszty dla klienta sÄ… pogrupowane wedÅ‚ug waluty i gotowe dla ksiÄ™gowego.",
    demoAccessScreen: "DostÄ™p ksiÄ™gowego", demoAccessTitle: "Logowanie emailem ksiÄ™gowego", demoAccessText: "Portal uÅ¼ywa kodu email, a potem pokazuje poÅ‚Ä…czone konto ksiÄ™gowego na tym urzÄ…dzeniu.",
    demoClientsScreen: "Lista klientÃ³w", demoClientsTitle: "Zobacz poÅ‚Ä…czonych klientÃ³w", demoClientsText: "Na liÅ›cie sÄ… tylko klienci, ktÃ³rzy dali zgodÄ™. KaÅ¼dego klienta otwierasz z prostego widoku.",
    demoRecordsScreen: "Rekordy klienta", demoRecordsTitle: "Pobierz paczkÄ™ klienta", demoRecordsText: "OtwÃ³rz klienta, sprawdÅº sumy, poproÅ› o brakujÄ…ce dokumenty i pobierz CSV lub PDF."
  }
};
MARKETING_COPY.ro = { ...MARKETING_COPY.en,
  navHow: "Cum functioneaza", navWho: "Pentru cine?", navStory: "Povestea noastra", foundingTester: "Devino Founding Tester", navFindAccountant: "Gaseste un contabil", navPricing: "Lansare si pret", navFaq: "FAQ", navMtd: "Baza de cunostinte MTD", navContact: "Contact",
  navIntake: "Cum adaugi documente", navAccountantPack: "Arata contabilului",
  heroEyebrow: "Bonuri inauntru. Evidente ordonate afara.", heroTitle: "Un loc simplu pentru bonuri.", heroText: "Trimite bonul prin WhatsApp. TidGo tine bonurile, dovezile de venit si evidentele MTD ordonate pentru self-employed, CIS workers, landlords si contabili.",
  stepSnap: "Fotografiaza bonuri", stepTidy: "Tine evidenta ordonata", stepPack: "Trimite pachetul curat",
  trustSimple: "Fara inregistrare complicata. Doar login cu email.",
  trustControl: "Evidentele raman sub controlul tau.",
  trustEarly: "Gratuit in early access.",
  earlyTitle: "Acces timpuriu:", earlyText: "TidGo este live pentru un grup mic de utilizatori. Este gratuit cat timp strangem feedback, imbunatatim aplicatia si adaugam ghiduri clare.",
  pricingTitle: "Lansare si pret:", pricingText: "Data lansarii oficiale va fi anuntata dupa testele early access. TidGo este gratuit in perioada de testare. Daca apar planuri platite, utilizatorii vor fi anuntati clar din timp si vor putea mereu exporta sau sterge inregistrarile.",
  mtdTitle: "Evidente MTD fara haos contabil", mtdLead: "Primul pas in Making Tax Digital nu este trimiterea pozelor cu bonuri la HMRC. Este pastrarea veniturilor, cheltuielilor si dovezilor in format digital.", mtdText: "TidGo nu inlocuieste contabilul si nu trimite declaratii fiscale. Te ajuta sa colectezi bonuri prin WhatsApp, sa pastrezi dovezi de venit si evidente MTD ordonate si sa pregatesti rezumate mai curate pentru contabil.", faqTitle: "FAQ:", faqText: "Mai multe raspunsuri vin curand. Deocamdata poti incerca aplicatia, portalul contabilului sau trimite un mesaj.",
  contactTitle: "Vrei sa testezi sau sa intrebi ceva?", contactText: "Trimite un mesaj scurt. Fara labirint de vanzari, doar un raspuns uman.", yourEmail: "Emailul tau", roleSelf: "Lucrez pe cont propriu", roleAccountant: "Sunt contabil", roleCurious: "Doar verific", message: "Mesaj", sendMessage: "Trimite mesaj", messageSent: "Mesaj trimis. Multumesc.", messagePending: "Contactul automat este conectat. Incearca din nou dupa urmatorul deploy API.",
  selfLabel: "Lucrez pe cont propriu", selfTitle: "Deschide aplicatia TidGo", selfText: "Fotografiaza bonuri, adauga venituri si tine evidenta lunara pregatita pentru contabil.", scanApp: "Scaneaza app", openApp: "Deschide app",
  accountantLabel: "Sunt contabil", accountantTitle: "Deschide portalul contabilului", accountantText: "Vezi evidentele clientilor conectati, descarca pachete CSV/PDF si redu panica de termen limita.", scanPortal: "Scaneaza portal", openPortal: "Deschide portalul contabilului", viewDemo: "Vezi demo rapid",
  footer: "TidGo ajuta la organizarea evidentelor. Nu este contabilitate, consultanta fiscala sau payroll.", companyFooter: "TidGo Ltd. Company number 17356146. 128 City Road, London, EC1V 2NX. hello@tidgo.co.uk", home: "Acasa", appDemo: "Demo app", accountantDemo: "Demo contabil", deleteAccountLink: "Sterge contul", backHome: "Inapoi la pagina principala", step: "Pas", testerCalloutTitle: "Vrei sa ajuti la imbunatatirea TidGo?", testerCalloutText: "Alatura-te testului inchis pentru Android, foloseste aplicatia cel putin 14 zile si trimite feedback sincer. Nu cerem o recenzie pozitiva.", testerCalloutButton: "Devino tester Android",
  trySafe: "Incearca in siguranta: fa o poza, verifica rezultatul, descarca sumarul si sterge contul/datele oricand din setari.",
  appDemoKind: "Pentru self-employed", appDemoTitle: "Vezi fluxul bonului inainte de autentificare.", appDemoText: "TidGo se bazeaza pe un obicei simplu: faci poza acum, trimiti un pachet mai curat mai tarziu.",
  accountantDemoKind: "Pentru contabili", accountantDemoTitle: "Vezi predarea clientului inainte de autentificare.", accountantDemoText: "Portalul contabilului este doar pentru citire. Clientii isi tin evidentele ordonate; tu primesti un pachet mai curat pentru lucru.",
  demoHomeScreen: "Start", demoHomeTitle: "Porneste de la un ecran simplu", demoHomeText: "Actiunile principale sunt la indemana: adauga cheltuiala, venit sau deschide sumarul lunar.",
  demoReceiptScreen: "Poza bon", demoReceiptTitle: "Fotografiaza bonul", demoReceiptText: "Fa sau incarca o poza. TidGo confirma prietenos ca bonul a fost primit.", demoReceiptCallout: "Confirmare prietenoasa dupa primirea bonului.",
  demoDetailsScreen: "Verifica datele", demoDetailsTitle: "Revizuieste inainte de salvare", demoDetailsText: "Poti corecta suma, categoria, moneda sau magazinul inainte sa intre in evidente.",
  demoSummaryScreen: "Sumar lunar", demoSummaryTitle: "Trimite pachetul", demoSummaryText: "Veniturile si cheltuielile sunt grupate pe moneda, gata pentru contabil.",
  demoAccessScreen: "Acces contabil", demoAccessTitle: "Autentificare cu emailul contabilului", demoAccessText: "Portalul foloseste un cod pe email, apoi arata contul conectat pe acest dispozitiv.",
  demoClientsScreen: "Lista clienti", demoClientsTitle: "Vezi clientii conectati", demoClientsText: "Apar doar clientii care au dat acordul. Fiecare client se deschide dintr-un ecran simplu.",
  demoRecordsScreen: "Evidente client", demoRecordsTitle: "Descarca pachetul clientului", demoRecordsText: "Deschide clientul, verifica totalurile, cere documente lipsa si descarca CSV sau PDF."
};
MARKETING_COPY.lt = { ...MARKETING_COPY.en,
  navHow: "Kaip veikia", navWho: "Kam skirta?", navStory: "KÅ«rÄ—jo istorija", foundingTester: "Tapk Founding Testeriu", navFindAccountant: "Rasti buhalterÄ¯", navPricing: "Startas ir kaina", navFaq: "DUK", navMtd: "MTD Å¾iniÅ³ bazÄ—", navContact: "Kontaktai",
  navIntake: "Kaip prideti dokumentus", navAccountantPack: "Parodyti buhalteriui",
  heroEyebrow: "Kvitai vidun. Tvarkingi irasai lauk.", heroTitle: "Viena paprasta vieta kvitams.", heroText: "Nufotografuok kvita per WhatsApp. TidGo tvarko kvitus, pajamu irodymus ir MTD irasus self-employed, CIS darbuotojams, landlords ir buhalteriams.",
  stepSnap: "Nufotografuok kvita", stepTidy: "Laikyk irasus tvarkingai", stepPack: "Issiusk tvarkinga paketa",
  trustSimple: "Jokios sudetingos registracijos. Tik prisijungimas el. pastu.",
  trustControl: "Jusu irasai lieka jusu kontroleje.",
  trustEarly: "Nemokama early access metu.",
  earlyTitle: "Ankstyva prieiga:", earlyText: "TidGo jau veikia mazai pirmuju vartotoju grupei. Dabar programa nemokama, kol renkame atsiliepimus, taisome detales ir rengiame paprastus paaiskinimus.",
  pricingTitle: "Startas ir kaina:", pricingText: "Oficiali starto data bus paskelbta po ankstyvos prieigos testu. TidGo dabar nemokama. Jei bus ivesti mokami planai, vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus.",
  mtdTitle: "MTD irasai be buhalterinio chaoso", mtdLead: "Pirmas Making Tax Digital zingsnis nera kvitu nuotrauku siuntimas HMRC. Tai pajamu, islaidu ir irodymu laikymas skaitmenine forma.", mtdText: "TidGo nepakeicia buhalterio ir neteikia mokesciu deklaraciju. Jis padeda rinkti kvitus per WhatsApp, laikyti pajamu irodymus ir MTD irasus tvarkingai bei paruosti aiskesnes suvestines buhalteriui.", faqTitle: "DUK:", faqText: "Daugiau atsakymu bus greitai. Kol kas galite isbandyti programa, buhalterio portala arba parasyti zinute.",
  contactTitle: "Norite pabandyti ar paklausti?", contactText: "Parasykite trumpa zinute. Be pardavimo labirinto, tiesiog zmogiskas atsakymas.", yourEmail: "Jusu el. pastas", roleSelf: "Dirbu sau", roleAccountant: "Esu buhalteris", roleCurious: "Tik domiuosi", message: "Zinute", sendMessage: "Siusti zinute", messageSent: "Zinute issiusta. Aciu.", messagePending: "Automatinis kontaktas prijungiamas. Pabandykite po kito API deploy.",
  selfLabel: "Dirbu sau", selfTitle: "Atidaryti TidGo app", selfText: "Fotografuok kvitus, pridek pajamas ir laikyk menesio irasus paruostus buhalteriui.", scanApp: "Skenuoti app", openApp: "Atidaryti app",
  accountantLabel: "Esu buhalteris", accountantTitle: "Atidaryti buhalterio portala", accountantText: "Matyk prijungtu klientu irasus, atsisiusk CSV/PDF paketus ir sumazink termino panika.", scanPortal: "Skenuoti portala", openPortal: "Atidaryti buhalterio portala", viewDemo: "Greitas demo",
  footer: "TidGo padeda tvarkyti irasus. Tai nera buhalterija, mokesciu konsultacija ar payroll programa.", companyFooter: "TidGo Ltd. Company number 17356146. 128 City Road, London, EC1V 2NX. hello@tidgo.co.uk", home: "Pradzia", appDemo: "App demo", accountantDemo: "Buhalterio demo", deleteAccountLink: "Istrinti paskyra", backHome: "Grizti i pagrindini puslapi", step: "Zingsnis", testerCalloutTitle: "Nori padeti tobulinti TidGo?", testerCalloutText: "Prisijunk prie uzdaro Android testo, naudok programa bent 14 dienu ir atsiusk sazininga atsiliepima. Teigiamo ivertinimo nereikalaujame.", testerCalloutButton: "Tapk Android testeriu",
  trySafe: "Isbandyk saugiai: nufotografuok, patikrink rezultata, atsisiusk suvestine ir bet kada istrink paskyra/duomenis nustatymuose.",
  appDemoKind: "Dirbantiems sau", appDemoTitle: "Pamatyk kvito eiga neprisijungus.", appDemoText: "TidGo remiasi vienu paprastu iprociu: nufotografuok dabar, tvarkingesni paketa issiusk veliau.",
  accountantDemoKind: "Buhalteriams", accountantDemoTitle: "Pamatyk kliento perdavima neprisijungus.", accountantDemoText: "Buhalterio portalas yra tik skaitymui. Klientai tvarko irasus, o jus gaunate tvarkingesni paketa darbui.",
  demoHomeScreen: "Pradzia", demoHomeTitle: "Paprastas pradinis ekranas", demoHomeText: "Svarbiausi veiksmai cia pat: prideti islaidas, pajamas, kliento islaidas arba atidaryti menesio suvestine.",
  demoReceiptScreen: "Kvito nuotrauka", demoReceiptTitle: "Nufotografuok kvita", demoReceiptText: "Nufotografuok arba ikelk nuotrauka. TidGo draugiskai patvirtina, kad kvitas gautas.", demoReceiptCallout: "Draugiskas patvirtinimas gavus kvita.",
  demoDetailsScreen: "Patikrink duomenis", demoDetailsTitle: "Perziurek pries issaugant", demoDetailsText: "Gali pataisyti suma, kategorija, valiuta arba parduotuve pries irasui patenkant i sistema.",
  demoSummaryScreen: "Menesio suvestine", demoSummaryTitle: "Issiusk paketa", demoSummaryText: "Pajamos, islaidos ir kliento islaidos sugrupuotos pagal valiuta, paruostos buhalteriui.",
  demoAccessScreen: "Buhalterio prieiga", demoAccessTitle: "Prisijunk buhalterio el. pastu", demoAccessText: "Portalas naudoja koda el. paste, tada rodo prijungta buhalterio paskyra siame irenginyje.",
  demoClientsScreen: "Klientu sarasas", demoClientsTitle: "Matyk prijungtus klientus", demoClientsText: "Rodomi tik klientai, kurie dave sutikima. Kiekviena klienta galima atidaryti paprastai.",
  demoRecordsScreen: "Kliento irasai", demoRecordsTitle: "Atsisiusk kliento paketa", demoRecordsText: "Atidaryk klienta, patikrink sumas, paprasyk trukstamu dokumentu ir atsisiusk CSV arba PDF."
};

Object.assign(MARKETING_COPY.en, {
  howTitle: "TidGo is the bridge between busy working people and tidy records ready for accounting.",
  howText: "Self-employed people can take receipt photos through the month. Accountants can see a cleaner read-only handoff when the client gives permission.",
  whoTitle: "Two simple doors.",
  whoText: "Open the app if you work for yourself. Open the accountant portal if you help clients keep records ready without the plastic-bag panic.",
  scopeFitTitle: "Good fit",
  scopeFitText: "Simple self-employed, landlord, CIS and side-income records: receipts, income proof and tidy summaries.",
  scopeNotForTitle: "Not built for",
  scopeNotForText: "VAT returns, LTD/company accounts, payroll, corporation tax or full accounting workflows.",
  mtdIntro: "MTD guides are being written as short, practical pages. Each guide links back to the relevant public GOV.UK or HMRC source where the rule comes from.",
  mtdQualifyingIncome: "What is qualifying income?",
  mtdQualifyingIncomeText: "Qualifying income decides whether MTD applies to you. It is gross self-employment and property income before expenses, not profit.",
  mtdGateway: "Government Gateway and MTD",
  mtdGatewayText: "Having a Government Gateway or GOV.UK One Login account is not the same as signing up for Making Tax Digital.",
  mtdWhat: "What is MTD?",
  mtdWho: "Who needs MTD?",
  mtdWhen: "When does MTD start?",
  mtdRecords: "What records do I need?",
  mtdPaper: "What if I still keep paper receipts?",
  mtdPhotos: "Can I use photos?",
  mtdReceiptsMyth: "Do I have to photograph every receipt for MTD?",
  mtdReceiptsMythText: "No. HMRC requires digital records, not a photo of every paper receipt. Photos are often the simplest way to keep proof readable and easy to find.",
  mtdSubmit: "Does TidGo submit to HMRC?",
  mtdAccountant: "Do I still need an accountant?",
  mtdGettingStarted: "Getting started with MTD",
  mtdSoleTraders: "MTD for sole traders",
  mtdLandlords: "MTD for landlords",
  mtdCis: "MTD for CIS subcontractors",
  mtdCisMyths: "CIS myths most accounting apps get wrong",
  mtdDigitalRecords: "Digital records",
  mtdQuarterlyUpdates: "Quarterly updates",
  mtdFaqs: "MTD FAQs",
  mtdWhatText: "Making Tax Digital is HMRC's move toward keeping tax records digitally and using approved software for parts of the tax process.",
  mtdWhoText: "It can affect self-employed people and landlords in the UK, depending on income level and start dates. Check HMRC or your accountant for your exact case.",
  mtdWhenText: "MTD rules are being introduced in stages. The important habit is simple: start keeping records digitally before the deadline panic arrives.",
  mtdRecordsText: "You should keep clear digital records of income, expenses and proof such as receipts or invoices. GOV.UK says self-employed records are normally kept for at least 5 years after the 31 January deadline for that tax year.",
  mtdPaperText: "Covered in the receipt-photo guide: HMRC does not require receipt photos, but you still need proof that survives the record-keeping period.",
  mtdPhotosText: "Covered in the receipt-photo guide: photos are not mandatory, but they are often the practical way to keep evidence readable.",
  mtdSubmitText: "TidGo is currently testing MTD submission flows in HMRC's sandbox. Today it helps prepare records for your accountant or other software.",
  mtdAccountantText: "Usually yes. TidGo is not tax advice or accounting software. It helps you keep records ready so your accountant has less chaos to fix.",
  mtdGettingStartedText: "Start with the first practical layer: keep income, expenses and supporting documents in digital form before the quarterly deadline pressure arrives.",
  mtdSoleTradersText: "For sole traders, MTD starts with clear digital records for self-employment income and expenses, not with complicated dashboards.",
  mtdLandlordsText: "Landlords need a simple way to keep property income, expenses and proof together, especially when receipts arrive by email or WhatsApp.",
  mtdCisText: "Gross income, payslips, CIS deductions and quarterly updates: the practical record-keeping layer for subcontractors.",
  mtdCisMythsText: "Unnecessary invoices, net income traps and expensive tools built for work CIS subcontractors often do not need.",
  mtdDigitalRecordsText: "Digital records are the foundation: dates, amounts, categories and supporting evidence stored in a way you can review and share.",
  mtdQuarterlyUpdatesText: "Quarterly updates are summaries of income and expenses. They are not full tax returns, but the records behind them still need to be tidy.",
  mtdFaqsText: "Short answers to the questions people actually ask before they speak to HMRC, software providers or their accountant.",
  mtdGettingStartedDetail: "Making Tax Digital for Income Tax is being introduced in stages for sole traders and landlords. The simple first step is not panic-buying a huge accounting suite. It is making sure your business income, expenses and proof are kept digitally, close to the date of the transaction, so quarterly summaries are easier to prepare.",
  mtdSoleTradersDetail: "If you are self-employed as a sole trader, your MTD routine should start with ordinary habits: capture receipts, keep income proof, check dates and amounts, and keep everything ready for your accountant or compatible software. TidGo focuses on this record-keeping layer and does not try to become full accounting software.",
  mtdLandlordsDetail: "For landlords, MTD can involve property income and expenses. The practical challenge is often not tax theory; it is keeping invoices, repairs, mileage, agent statements and receipts in one place. TidGo helps collect and organise that proof, while your accountant or MTD-compatible software handles the formal tax workflow.",
  mtdCisDetail: "CIS workers often work from the van, the site and the phone. Receipts, fuel, tools and remittance proof can arrive as photos, emails or screenshots. TidGo is designed as a simple front door for that evidence, so records can be checked before they become a deadline problem.",
  mtdDigitalRecordsDetail: "HMRC guidance says digital records are used to create quarterly update totals. A useful record is more than a random photo in the camera roll: it needs a date, amount, category and supporting proof you can find again. TidGo keeps the proof beside the record, so review and export are easier.",
  mtdQuarterlyUpdatesDetail: "HMRC describes quarterly updates as summaries of income and expenses for each self-employment or property business. They are not tax returns. TidGo does not submit them to HMRC, but it can help keep the underlying records and summaries ready for your accountant or MTD-compatible software.",
  mtdFaqsDetail: "The short answer: TidGo helps with digital records and accountant handoff. It does not submit to HMRC, does not replace your accountant and does not handle VAT, payroll, LTD company accounts or corporation tax. If another package already works for you, great. TidGo is for people who need a simpler way to collect proof first.",
  faqBuildTitle: "Real questions make a better FAQ.",
  faqBuildText: "Send us what feels unclear: setup, receipts, PDF, accountant access, MTD, anything. We are building this FAQ from real user questions, not corporate fog.",
  launchTabTitle: "Launch and pricing",
  launchTabText: "TidGo is in early access and free while we test with real users. Paid plans are expected later, with clear notice before anything changes.",
  launchPricingFullText: "TidGo is in early access for a small group of real users. It is free while we collect feedback, improve the app and prepare clearer guides. If paid plans are introduced, users will be told clearly in advance and will always be able to export or delete their records.",
  intakeTitle: "How intake works",
  intakeText: "TidGo recognises you by your registered email address and linked WhatsApp number. You do not need to remember a special personal address yet.",
  intakeWhatsAppTitle: "WhatsApp intake",
  intakeWhatsAppText: "Link your WhatsApp number in TidGo, then start the conversation yourself by sending the ready LINK message. After that, receipt photos sent from that linked number can be matched to your TidGo account. Unknown numbers are not assigned to an account.",
  intakeEmailTitle: "Email intake",
  intakeEmailText: "Forward documents from the same email address you use for TidGo to intake@tidgo.co.uk. Add expense or income in the subject if you want to help TidGo route it faster.",
  intakeFutureTitle: "Later: personal intake addresses",
  intakeFutureText: "Unique personal intake addresses are on the roadmap. For now, TidGo uses your registered sender email and linked WhatsApp number to identify you.",
  notDoTitle: "What TidGo does not do",
  notDoText: "TidGo does not submit to HMRC, does not replace your accountant, and does not handle VAT returns, LTD company accounts, payroll or corporation tax.",
  faqHmrcTitle: "Does TidGo submit to HMRC?",
  faqHmrcText: "No. That is by design. TidGo helps keep digital records tidy before they go to your accountant or MTD-compatible software.",
  faqSoftwareTitle: "Can I use TidGo with FreeAgent, Xero or QuickBooks?",
  faqSoftwareText: "Yes. TidGo sits before those tools. Use it to collect receipt photos, email receipts, WhatsApp photos and income proof, then export or share a cleaner pack.",
  faqMettleTitle: "Why not just use free FreeAgent via Mettle?",
  faqMettleText: "If that works for you, great. TidGo is for people who need an even simpler front door for messy receipts, WhatsApp photos, email receipts and accountant handoff.",
  accountantShareTitle: "Show this to your accountant",
  accountantShareText: "Use this short message if you want your accountant or trusted bookkeeper to understand TidGo before you connect them.",
  accountantMessageTitle: "Message to copy",
  accountantMessageText: "Hi, I am trying TidGo to keep my receipts and income proof in one place. It has a read-only accountant portal, so if I connect your email you can view my records and download a PDF/CSV pack, but you cannot change my data. The accountant demo is here: https://tidgo.co.uk/accountant-demo",
  accountantDemoPackTitle: "What they can see",
  accountantDemoPackText: "Only records you allow them to see: receipt photos, income proof, monthly/quarterly summaries and export packs. Accountant access is read-only and can be revoked.",
  platformNow: "Use the web app now.",
  platformSoon: "Android and iOS versions are in development alongside TidGo.",
  socialTitle: "Follow us on",
  privacyNote: "No cookie maze: TidGo uses essential app data only. Basic analytics runs only if you allow it. We do not sell user data.",
  copyright: "Â© 2026 TidGo. All rights reserved."
});

Object.assign(MARKETING_COPY.pl, {
  howTitle: "TidGo jest mostem miÄ™dzy zapracowanymi ludÅºmi a porzÄ…dnymi rekordami gotowymi do ksiÄ™gowoÅ›ci.",
  howText: "Self-employed robi zdjÄ™cia paragonÃ³w przez miesiÄ…c. KsiÄ™gowy dostaje czytelniejszy podglÄ…d tylko do odczytu, kiedy klient da zgodÄ™.",
  whoTitle: "Dwie proste drogi.",
  whoText: "OtwÃ³rz aplikacjÄ™, jeÅ›li pracujesz na siebie. OtwÃ³rz portal ksiÄ™gowego, jeÅ›li pomagasz klientom trzymaÄ‡ rekordy bez paniki z reklamÃ³wkÄ….",
  scopeFitTitle: "Dobre dopasowanie",
  scopeFitText: "Proste rekordy self-employed, landlord, CIS i dodatkowego dochodu: paragony, dowody przychodu i czytelne podsumowania.",
  scopeNotForTitle: "Nie do tego",
  scopeNotForText: "VAT returns, konta LTD/company accounts, payroll, corporation tax ani peÅ‚ne procesy ksiÄ™gowe.",
  mtdIntro: "Poradniki MTD bÄ™dÄ… krÃ³tkimi, praktycznymi stronami.",
  mtdQualifyingIncome: "Co to jest qualifying income?",
  mtdQualifyingIncomeText: "Qualifying income decyduje, czy obejmie CiÄ™ MTD. To przychÃ³d brutto przed kosztami, nie zysk.",
  mtdGateway: "Government Gateway a MTD",
  mtdGatewayText: "Konto Government Gateway albo GOV.UK One Login to tylko login. Rejestracja do Making Tax Digital to osobny krok.",
  mtdWhat: "Co to jest MTD?",
  mtdWho: "Kogo dotyczy MTD?",
  mtdWhen: "Kiedy startuje MTD?",
  mtdRecords: "Jakie rekordy trzeba mieÄ‡?",
  mtdPaper: "Co jeÅ›li dalej mam papierowe paragony?",
  mtdPhotos: "Czy mogÄ™ uÅ¼ywaÄ‡ zdjÄ™Ä‡?",
  mtdSubmit: "Czy TidGo wysyÅ‚a do HMRC?",
  mtdAccountant: "Czy dalej potrzebujÄ™ ksiÄ™gowego?",
  mtdWhatText: "Making Tax Digital to przechodzenie HMRC na cyfrowe rekordy i uÅ¼ywanie odpowiedniego oprogramowania w czÄ™Å›ci procesu podatkowego.",
  mtdWhoText: "MoÅ¼e dotyczyÄ‡ self-employed i landlordÃ³w w UK, zaleÅ¼nie od poziomu przychodu i dat wejÅ›cia zasad. DokÅ‚adny przypadek sprawdÅº z HMRC albo ksiÄ™gowym.",
  mtdWhenText: "Zasady MTD wchodzÄ… etapami. NajwaÅ¼niejszy nawyk jest prosty: zacznij trzymaÄ‡ rekordy cyfrowo zanim przyjdzie panika przed terminem.",
  mtdRecordsText: "Trzymaj jasne cyfrowe rekordy przychodÃ³w, wydatkÃ³w i dowody: paragony albo faktury. GOV.UK podaje, Å¼e self-employed zwykle trzyma rekordy co najmniej 5 lat po terminie 31 stycznia dla danego roku podatkowego.",
  mtdPaperText: "Papierowe paragony mogÄ… dalej istnieÄ‡, ale sama reklamÃ³wka papieru to sÅ‚aby plan. ZdjÄ™cia i cyfrowe rekordy uÅ‚atwiajÄ… przekazanie danych.",
  mtdPhotosText: "ZdjÄ™cia pomagajÄ… stworzyÄ‡ cyfrowy rekord. TidGo przechowuje zdjÄ™cia paragonÃ³w z podstawowymi danymi, Å¼ebyÅ› mÃ³gÅ‚ je sprawdziÄ‡ i wysÅ‚aÄ‡ czystszÄ… paczkÄ™.",
  mtdSubmitText: "Nie. TidGo nie wysyÅ‚a deklaracji do HMRC. Pomaga przygotowaÄ‡ i uporzÄ…dkowaÄ‡ rekordy przed przekazaniem ich Tobie, ksiÄ™gowemu albo innemu programowi.",
  mtdAccountantText: "Zwykle tak. TidGo nie jest poradÄ… podatkowÄ… ani peÅ‚nÄ… ksiÄ™gowoÅ›ciÄ…. Pomaga trzymaÄ‡ rekordy gotowe, Å¼eby ksiÄ™gowy miaÅ‚ mniej chaosu do ratowania.",
  mtdGettingStarted: "Pierwsze kroki z MTD",
  mtdSoleTraders: "MTD dla sole traders",
  mtdLandlords: "MTD dla landlordÃ³w",
  mtdCis: "MTD dla CIS workers",
  mtdCisMyths: "Mity CIS, ktore aplikacje ksiegowe czesto robia zle",
  mtdDigitalRecords: "Cyfrowe rekordy",
  mtdQuarterlyUpdates: "Quarterly updates",
  mtdFaqs: "FAQ MTD",
  mtdGettingStartedText: "Zacznij od praktycznej podstawy: przychody, wydatki i dowody w cyfrowej formie zanim przyjdzie presja terminu.",
  mtdSoleTradersText: "Dla sole traderÃ³w MTD zaczyna siÄ™ od jasnych cyfrowych rekordÃ³w przychodÃ³w i kosztÃ³w, nie od skomplikowanych dashboardÃ³w.",
  mtdLandlordsText: "Landlord potrzebuje prostego sposobu na trzymanie przychodÃ³w z najmu, kosztÃ³w i dowodÃ³w w jednym miejscu.",
  mtdCisText: "CIS workers czÄ™sto majÄ… paliwo, narzÄ™dzia, materiaÅ‚y, remittance notices i rozrzucone dowody. TidGo pasuje do takiego chaosu.",
  mtdCisMythsText: "Niepotrzebne faktury, pulapka kwoty netto i drogie narzedzia zbudowane do pracy, ktorej CIS subcontractor czesto nie potrzebuje.",
  mtdDigitalRecordsText: "Cyfrowe rekordy to fundament: daty, kwoty, kategorie i dowody zapisane tak, Å¼eby moÅ¼na byÅ‚o je sprawdziÄ‡ i wysÅ‚aÄ‡.",
  mtdQuarterlyUpdatesText: "Quarterly updates to podsumowania przychodÃ³w i wydatkÃ³w. To nie sÄ… peÅ‚ne tax returns, ale rekordy za nimi muszÄ… byÄ‡ uporzÄ…dkowane.",
  mtdFaqsText: "KrÃ³tkie odpowiedzi na pytania, ktÃ³re ludzie realnie zadajÄ… przed rozmowÄ… z HMRC, ksiÄ™gowym albo software providerem.",
  mtdGettingStartedDetail: "Making Tax Digital dla Income Tax wchodzi etapami dla sole traderÃ³w i landlordÃ³w. Pierwszy praktyczny krok to nie kupowanie ogromnego programu ksiÄ™gowego w panice, tylko trzymanie przychodÃ³w, wydatkÃ³w i dowodÃ³w cyfrowo, moÅ¼liwie blisko daty transakcji.",
  mtdSoleTradersDetail: "JeÅ›li jesteÅ› sole traderem, praktyczna rutyna MTD zaczyna siÄ™ od zwykÅ‚ych nawykÃ³w: zapisuj paragony, trzymaj dowody przychodu, sprawdzaj daty i kwoty oraz miej wszystko gotowe dla ksiÄ™gowego albo software zgodnego z MTD.",
  mtdLandlordsDetail: "Dla landlordÃ³w MTD moÅ¼e obejmowaÄ‡ property income i property expenses. Praktyczny problem to czÄ™sto nie teoria podatkowa, tylko faktury, naprawy, agent statements i paragony w jednym miejscu.",
  mtdCisDetail: "CIS workers czÄ™sto zbierajÄ… dowody z vana, budowy, telefonu, maila i WhatsAppa. TidGo ma byÄ‡ prostym wejÅ›ciem dla takich dokumentÃ³w zanim stanÄ… siÄ™ problemem przed terminem.",
  mtdDigitalRecordsDetail: "WedÅ‚ug HMRC cyfrowe rekordy sÅ‚uÅ¼Ä… do tworzenia kwartalnych totalÃ³w. Dobry rekord to nie przypadkowa fotka w galerii: potrzebuje daty, kwoty, kategorii i dowodu, ktÃ³ry da siÄ™ pÃ³Åºniej znaleÅºÄ‡.",
  mtdQuarterlyUpdatesDetail: "HMRC opisuje quarterly updates jako podsumowania przychodÃ³w i wydatkÃ³w dla kaÅ¼dej dziaÅ‚alnoÅ›ci self-employment albo property business. TidGo nie wysyÅ‚a ich do HMRC, ale pomaga przygotowaÄ‡ rekordy i summary dla ksiÄ™gowego albo kompatybilnego software.",
  mtdFaqsDetail: "KrÃ³tko: TidGo pomaga z cyfrowymi rekordami i przekazaniem ksiÄ™gowemu. Nie wysyÅ‚a do HMRC, nie zastÄ™puje ksiÄ™gowego i nie obsÅ‚uguje VAT, payroll, LTD accounts ani corporation tax.",
  faqBuildTitle: "Prawdziwe pytania robiÄ… lepsze FAQ.",
  faqBuildText: "WyÅ›lij nam, co jest niejasne: start, paragony, PDF, dostÄ™p ksiÄ™gowego, MTD, cokolwiek. Budujemy FAQ z prawdziwych pytaÅ„, nie z firmowej mgÅ‚y.",
  launchTabTitle: "Start i ceny",
  launchTabText: "TidGo jest w early access i jest darmowe podczas testÃ³w z prawdziwymi uÅ¼ytkownikami. PÅ‚atne plany sÄ… spodziewane pÃ³Åºniej, z jasnÄ… informacjÄ… przed zmianami.",
  launchPricingFullText: "TidGo jest w early access dla maÅ‚ej grupy prawdziwych uÅ¼ytkownikÃ³w. Jest darmowe, kiedy zbieramy feedback, poprawiamy aplikacjÄ™ i przygotowujemy jaÅ›niejsze poradniki. JeÅ›li wprowadzimy pÅ‚atne plany, uÅ¼ytkownicy dostanÄ… jasnÄ… informacjÄ™ z wyprzedzeniem i zawsze bÄ™dÄ… mogli wyeksportowaÄ‡ albo usunÄ…Ä‡ swoje rekordy.",
  intakeTitle: "Jak dziaÅ‚a dodawanie dokumentÃ³w",
  intakeText: "TidGo rozpoznaje CiÄ™ po zarejestrowanym adresie email i podÅ‚Ä…czonym numerze WhatsApp. Nie musisz pamiÄ™taÄ‡ Å¼adnego specjalnego osobistego adresu.",
  intakeWhatsAppTitle: "WhatsApp intake",
  intakeWhatsAppText: "PodÅ‚Ä…cz numer WhatsApp w TidGo, a potem sam rozpocznij rozmowÄ™ wysyÅ‚ajÄ…c gotowÄ… wiadomoÅ›Ä‡ LINK. Po tym zdjÄ™cia paragonÃ³w z tego numeru mogÄ… byÄ‡ dopasowane do Twojego konta. Nieznane numery nie sÄ… przypisywane do kont.",
  intakeEmailTitle: "Email intake",
  intakeEmailText: "PrzekaÅ¼ dokumenty z tego samego adresu email, ktÃ³rego uÅ¼ywasz w TidGo, na intake@tidgo.co.uk. W temacie wpisz expense albo income, jeÅ›li chcesz pomÃ³c TidGo szybciej to przypisaÄ‡.",
  intakeFutureTitle: "PÃ³Åºniej: osobiste adresy intake",
  intakeFutureText: "Unikalne osobiste adresy intake sÄ… w roadmapie. Na teraz TidGo uÅ¼ywa zarejestrowanego adresu nadawcy i podÅ‚Ä…czonego numeru WhatsApp.",
  notDoTitle: "Czego TidGo nie robi",
  notDoText: "TidGo nie wysyÅ‚a danych do HMRC, nie zastÄ™puje ksiÄ™gowego i nie obsÅ‚uguje VAT returns, kont LTD, payroll ani corporation tax.",
  faqHmrcTitle: "Czy TidGo wysyÅ‚a do HMRC?",
  faqHmrcText: "Nie. Tak jest celowo. TidGo pomaga trzymaÄ‡ cyfrowe rekordy w porzÄ…dku, zanim trafiÄ… do ksiÄ™gowego albo programu zgodnego z MTD.",
  faqSoftwareTitle: "Czy mogÄ™ uÅ¼ywaÄ‡ TidGo z FreeAgent, Xero albo QuickBooks?",
  faqSoftwareText: "Tak. TidGo jest przed tymi narzÄ™dziami. Zbieraj w nim paragony, maile, zdjÄ™cia z WhatsAppa i dowody przychodu, a potem eksportuj albo udostÄ™pnij czystszÄ… paczkÄ™.",
  faqMettleTitle: "Dlaczego nie darmowy FreeAgent przez Mettle?",
  faqMettleText: "JeÅ›li to dziaÅ‚a dla Ciebie, Å›wietnie. TidGo jest dla ludzi, ktÃ³rzy potrzebujÄ… jeszcze prostszego wejÅ›cia dla chaotycznych paragonÃ³w, WhatsAppa, maili i przekazania ksiÄ™gowemu.",
  accountantShareTitle: "PokaÅ¼ to ksiÄ™gowemu",
  accountantShareText: "UÅ¼yj tej krÃ³tkiej wiadomoÅ›ci, jeÅ›li chcesz, Å¼eby ksiÄ™gowy albo zaufany bookkeeper zrozumiaÅ‚ TidGo zanim go podÅ‚Ä…czysz.",
  accountantMessageTitle: "WiadomoÅ›Ä‡ do skopiowania",
  accountantMessageText: "CzeÅ›Ä‡, testujÄ™ TidGo do trzymania paragonÃ³w i dowodÃ³w przychodu w jednym miejscu. Jest tam portal ksiÄ™gowego tylko do odczytu, wiÄ™c jeÅ›li podÅ‚Ä…czÄ™ TwÃ³j email, moÅ¼esz zobaczyÄ‡ moje rekordy i pobraÄ‡ PDF/CSV pack, ale nie moÅ¼esz zmieniaÄ‡ moich danych. Demo portalu: https://tidgo.co.uk/accountant-demo",
  accountantDemoPackTitle: "Co ksiÄ™gowy widzi",
  accountantDemoPackText: "Tylko rekordy, na ktÃ³re dasz zgodÄ™: zdjÄ™cia paragonÃ³w, dowody przychodu, podsumowania miesiÄ™czne/kwartalne i eksporty. DostÄ™p jest tylko do odczytu i moÅ¼na go cofnÄ…Ä‡.",
  platformNow: "UÅ¼yj web app teraz.",
  platformSoon: "Wersje Android i iOS sÄ… rozwijane rÃ³wnolegle z TidGo.",
  socialTitle: "Obserwuj nas",
  privacyNote: "Bez cookie-labiryntu: TidGo uÅ¼ywa tylko danych potrzebnych do dziaÅ‚ania aplikacji. Podstawowa analityka dziaÅ‚a tylko po zgodzie. Nie sprzedajemy danych uÅ¼ytkownikÃ³w.",
  copyright: "Â© 2026 TidGo. Wszelkie prawa zastrzeÅ¼one."
});

Object.assign(MARKETING_COPY.ro, {
  howTitle: "TidGo este puntea dintre oameni ocupati si evidente ordonate, gata pentru contabilitate.",
  howText: "Persoanele self-employed pot fotografia bonuri in timpul lunii. Contabilii primesc un handoff read-only mai curat, cand clientul isi da acordul.",
  whoTitle: "Doua intrari simple.",
  whoText: "Deschide aplicatia daca lucrezi pe cont propriu. Deschide portalul contabilului daca ajuti clienti sa tina evidentele fara panica pungii cu bonuri.",
  scopeFitTitle: "Potrivit pentru",
  scopeFitText: "Evidente simple pentru self-employed, landlord, CIS si venit secundar: bonuri, dovezi de venit si rezumate clare.",
  scopeNotForTitle: "Nu este construit pentru",
  scopeNotForText: "Declaratii VAT, conturi LTD/company, payroll, corporation tax sau fluxuri complete de contabilitate.",
  mtdIntro: "Ghidurile MTD vor fi pagini scurte si practice.",
  mtdQualifyingIncome: "Ce este qualifying income?",
  mtdQualifyingIncomeText: "Qualifying income decide daca MTD ti se aplica. Este venitul brut inainte de cheltuieli, nu profitul.",
  mtdGateway: "Government Gateway si MTD",
  mtdGatewayText: "Un cont Government Gateway sau GOV.UK One Login este doar autentificare. Inscrierea in Making Tax Digital este un pas separat.",
  mtdWhat: "Ce este MTD?",
  mtdWho: "Cine are nevoie de MTD?",
  mtdWhen: "Cand incepe MTD?",
  mtdRecords: "Ce evidente sunt necesare?",
  mtdPaper: "Ce fac daca pastrez bonuri pe hartie?",
  mtdPhotos: "Pot folosi fotografii?",
  mtdSubmit: "TidGo trimite la HMRC?",
  mtdAccountant: "Mai am nevoie de contabil?",
  mtdWhatText: "Making Tax Digital este trecerea HMRC catre evidente fiscale digitale si folosirea software-ului potrivit pentru parti din procesul fiscal.",
  mtdWhoText: "Poate afecta persoane self-employed si landlords din UK, in functie de venit si datele de start. Verifica exact cu HMRC sau contabilul tau.",
  mtdWhenText: "Regulile MTD intra in etape. Obiceiul important este simplu: incepe sa tii evidente digitale inainte sa apara panica termenului limita.",
  mtdRecordsText: "Pastreaza evidente digitale clare pentru venituri, cheltuieli si dovezi: bonuri sau facturi. GOV.UK spune ca self-employed pastreaza de obicei evidentele cel putin 5 ani dupa termenul de 31 ianuarie pentru acel an fiscal.",
  mtdPaperText: "Bonurile pe hartie pot exista in continuare, dar doar o punga cu hartii nu este un plan bun. Fotografiile si evidentele digitale ajuta mult.",
  mtdPhotosText: "Fotografiile pot ajuta la crearea unei evidente digitale. TidGo pastreaza poza bonului cu detalii de baza pentru verificare si trimitere.",
  mtdSubmitText: "Nu. TidGo nu trimite declaratii la HMRC. Ajuta la pregatirea si organizarea evidentelor pentru tine, contabil sau alt software.",
  mtdAccountantText: "De obicei, da. TidGo nu este consultanta fiscala sau contabilitate completa. Te ajuta sa ai evidente pregatite, cu mai putin haos.",
  mtdCisMyths: "Mituri CIS pe care multe aplicatii contabile le gresesc",
  mtdCisMythsText: "Facturi inutile, capcana venitului net si software scump construit pentru lucruri de care subcontractorii CIS de multe ori nu au nevoie.",
  faqBuildTitle: "Intrebarile reale fac un FAQ mai bun.",
  faqBuildText: "Trimite-ne ce nu este clar: start, bonuri, PDF, acces contabil, MTD, orice. Construim FAQ-ul din intrebari reale, nu din ceata corporate.",
  launchTabTitle: "Lansare si pret",
  launchTabText: "TidGo este in early access si este gratuit cat timp testam cu utilizatori reali. Planurile platite sunt asteptate mai tarziu, cu anunt clar inainte de schimbari.",
  launchPricingFullText: "TidGo este in early access pentru un grup mic de utilizatori reali. Este gratuit cat timp strangem feedback, imbunatatim aplicatia si pregatim ghiduri mai clare. Daca apar planuri platite, utilizatorii vor fi anuntati clar din timp si vor putea mereu exporta sau sterge inregistrarile.",
  intakeTitle: "Cum functioneaza adaugarea documentelor",
  intakeText: "TidGo te recunoaste dupa emailul inregistrat si numarul WhatsApp conectat. Nu trebuie sa retii o adresa personala speciala.",
  intakeWhatsAppTitle: "WhatsApp intake",
  intakeWhatsAppText: "Conecteaza numarul WhatsApp in TidGo, apoi porneste tu conversatia trimitand mesajul LINK pregatit. Dupa aceea, pozele cu bonuri de pe acel numar pot fi asociate contului tau TidGo. Numerele necunoscute nu sunt atribuite unui cont.",
  intakeEmailTitle: "Email intake",
  intakeEmailText: "Redirectioneaza documente de pe acelasi email folosit pentru TidGo catre intake@tidgo.co.uk. Scrie expense sau income in subiect daca vrei sa ajuti TidGo sa le sorteze mai repede.",
  intakeFutureTitle: "Mai tarziu: adrese intake personale",
  intakeFutureText: "Adresele intake personale sunt in roadmap. Acum TidGo foloseste emailul expeditor inregistrat si numarul WhatsApp conectat.",
  notDoTitle: "Ce nu face TidGo",
  notDoText: "TidGo nu trimite la HMRC, nu inlocuieste contabilul si nu gestioneaza declaratii VAT, conturi LTD, payroll sau corporation tax.",
  faqHmrcTitle: "TidGo trimite la HMRC?",
  faqHmrcText: "Nu. Asa este proiectat. TidGo te ajuta sa tii evidente digitale ordonate inainte sa ajunga la contabil sau software compatibil MTD.",
  faqSoftwareTitle: "Pot folosi TidGo cu FreeAgent, Xero sau QuickBooks?",
  faqSoftwareText: "Da. TidGo sta inaintea acestor instrumente. Il folosesti pentru bonuri, email receipts, poze WhatsApp si dovezi de venit, apoi exporti sau partajezi un pachet mai curat.",
  faqMettleTitle: "De ce nu FreeAgent gratuit prin Mettle?",
  faqMettleText: "Daca functioneaza pentru tine, foarte bine. TidGo este pentru oameni care au nevoie de o intrare si mai simpla pentru bonuri, WhatsApp, emailuri si predarea catre contabil.",
  accountantShareTitle: "Arata asta contabilului",
  accountantShareText: "Foloseste acest mesaj scurt daca vrei ca un contabil sau bookkeeper de incredere sa inteleaga TidGo inainte sa il conectezi.",
  accountantMessageTitle: "Mesaj de copiat",
  accountantMessageText: "Salut, testez TidGo pentru a pastra bonuri si dovezi de venit intr-un singur loc. Are un portal pentru contabil doar pentru citire, deci daca iti conectez emailul, poti vedea evidentele mele si descarca un pachet PDF/CSV, dar nu poti modifica datele. Demo portal: https://tidgo.co.uk/accountant-demo",
  accountantDemoPackTitle: "Ce poate vedea contabilul",
  accountantDemoPackText: "Doar evidentele pentru care dai acordul: poze cu bonuri, dovezi de venit, rezumate lunare/trimestriale si exporturi. Accesul este read-only si poate fi revocat.",
  platformNow: "Foloseste aplicatia web acum.",
  platformSoon: "Versiunile Android si iOS sunt dezvoltate in paralel cu TidGo.",
  socialTitle: "Urmareste-ne",
  privacyNote: "Fara labirint de cookies: TidGo foloseste doar date esentiale ale aplicatiei. Analiza de baza ruleaza doar daca o permiti. Nu vindem datele utilizatorilor.",
  copyright: "Â© 2026 TidGo. Toate drepturile rezervate."
});

Object.assign(MARKETING_COPY.lt, {
  howTitle: "TidGo yra tiltas tarp uzimtu dirbanciu zmoniu ir tvarkingu irasu, paruostu buhalterijai.",
  howText: "Dirbantys sau gali fotografuoti kvitus visa menesi. Buhalteriai gauna tvarkingesni tik skaitymui skirta perdavima, kai klientas duoda leidima.",
  whoTitle: "Dvi paprastos durys.",
  whoText: "Atidaryk programele, jei dirbi sau. Atidaryk buhalterio portala, jei padedi klientams laikyti irasus be kvitu maiselio panikos.",
  scopeFitTitle: "Tinka",
  scopeFitText: "Paprasti self-employed, landlord, CIS ir papildomu pajamu irasai: kvitai, pajamu irodymai ir tvarkingos suvestines.",
  scopeNotForTitle: "Neskirta",
  scopeNotForText: "VAT deklaracijoms, LTD/company accounts, payroll, corporation tax ar pilnai buhalterijai.",
  mtdIntro: "MTD gidai bus trumpos ir praktiskos puslapio dalys.",
  mtdQualifyingIncome: "Kas yra qualifying income?",
  mtdQualifyingIncomeText: "Qualifying income lemia, ar tau taikomas MTD. Tai bendrosios pajamos pries islaidas, ne pelnas.",
  mtdGateway: "Government Gateway ir MTD",
  mtdGatewayText: "Government Gateway arba GOV.UK One Login paskyra yra tik prisijungimas. Registracija Making Tax Digital yra atskiras veiksmas.",
  mtdWhat: "Kas yra MTD?",
  mtdWho: "Kam reikia MTD?",
  mtdWhen: "Kada prasideda MTD?",
  mtdRecords: "Kokiu irasu reikia?",
  mtdPaper: "Kas jei dar laikau popierinius kvitus?",
  mtdPhotos: "Ar galiu naudoti nuotraukas?",
  mtdSubmit: "Ar TidGo pateikia HMRC?",
  mtdAccountant: "Ar vis dar reikia buhalterio?",
  mtdWhatText: "Making Tax Digital yra HMRC judejimas link skaitmeniniu mokesciu irasu ir tinkamos programines irangos kai kurioms proceso dalims.",
  mtdWhoText: "Tai gali liesti UK dirbancius sau zmones ir landlords, priklausomai nuo pajamu ir starto datu. Tikslu atveji tikrinkite su HMRC arba buhalteriu.",
  mtdWhenText: "MTD taisykles ivedamos etapais. Svarbiausias iprotis paprastas: pradeti laikyti irasus skaitmeniskai pries termino panika.",
  mtdRecordsText: "Laikykite aiskius skaitmeninius pajamu, islaidu ir irodymu irasus: kvitus arba saskaitas. GOV.UK nurodo, kad self-employed irasai paprastai laikomi bent 5 metus po sausio 31 d. termino tam mokestiniam metui.",
  mtdPaperText: "Popieriniai kvitai gali likti, bet vien maiselis popieriu nera geras planas. Nuotraukos ir skaitmeniniai irasai palengvina perdavima.",
  mtdPhotosText: "Nuotraukos padeda sukurti skaitmenini irasa. TidGo saugo kvito nuotrauka su pagrindiniais duomenimis, kad galetumete patikrinti ir perduoti.",
  mtdSubmitText: "Ne. TidGo neteikia deklaraciju HMRC. Jis padeda parengti ir sutvarkyti irasus jums, buhalteriui arba kitai programai.",
  mtdAccountantText: "Dazniausiai taip. TidGo nera mokesciu konsultacija ar pilna buhalterija. Jis padeda paruosti irasus ir sumazinti chaosa.",
  mtdCisMyths: "CIS mitai, kuriuos apskaitos programeles daznai supranta klaidingai",
  mtdCisMythsText: "Nereikalingos saskaitos, neto pajamu spastai ir brangi programine iranga darbui, kurio CIS subrangovams daznai nereikia.",
  faqBuildTitle: "Tikri klausimai sukuria geresni DUK.",
  faqBuildText: "Parasykite, kas neaisku: startas, kvitai, PDF, buhalterio prieiga, MTD, bet kas. DUK kuriame is tikru klausimu, ne is korporacines miglos.",
  launchTabTitle: "Startas ir kaina",
  launchTabText: "TidGo yra early access ir nemokama, kol testuojame su tikrais vartotojais. Mokami planai numatomi veliau, su aiskia zinute pries pokycius.",
  launchPricingFullText: "TidGo yra early access mazai tikru vartotoju grupei. Programa nemokama, kol renkame atsiliepimus, geriname ja ir ruosiame aiskesnius gidus. Jei bus ivesti mokami planai, vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus.",
  intakeTitle: "Kaip veikia dokumentu pridejimas",
  intakeText: "TidGo atpazista jus pagal registruota el. pasta ir prijungta WhatsApp numeri. Nereikia prisiminti specialaus asmeninio adreso.",
  intakeWhatsAppTitle: "WhatsApp intake",
  intakeWhatsAppText: "Prijunkite WhatsApp numeri TidGo, tada patys pradekite pokalbi siusdami paruosta LINK zinute. Po to kvitu nuotraukos is to numerio gali buti priskirtos jusu TidGo paskyrai. Nezinomi numeriai paskyroms nepriskiriami.",
  intakeEmailTitle: "Email intake",
  intakeEmailText: "Persiuskite dokumentus is to pacio el. pasto, kuri naudojate TidGo, i intake@tidgo.co.uk. Tema parasykite expense arba income, jei norite padeti TidGo greiciau surusiuoti.",
  intakeFutureTitle: "Veliau: asmeniniai intake adresai",
  intakeFutureText: "Unikalus asmeniniai intake adresai yra roadmap. Dabar TidGo naudoja registruota siuntejo el. pasta ir prijungta WhatsApp numeri.",
  notDoTitle: "Ko TidGo nedaro",
  notDoText: "TidGo neteikia HMRC deklaraciju, nepakeicia buhalterio ir nevaldo VAT deklaraciju, LTD/company accounts, payroll ar corporation tax.",
  faqHmrcTitle: "Ar TidGo pateikia HMRC?",
  faqHmrcText: "Ne. Taip suplanuota. TidGo padeda laikyti skaitmeninius irasus tvarkingai pries perduodant buhalteriui arba MTD suderinamai programai.",
  faqSoftwareTitle: "Ar galiu naudoti TidGo su FreeAgent, Xero arba QuickBooks?",
  faqSoftwareText: "Taip. TidGo yra pries sias sistemas. Jis renka kvitu nuotraukas, email receipts, WhatsApp nuotraukas ir pajamu irodymus, tada leidzia eksportuoti tvarkingesni paketa.",
  faqMettleTitle: "Kodel ne nemokamas FreeAgent per Mettle?",
  faqMettleText: "Jei tai jums veikia, puiku. TidGo skirtas zmonems, kuriems reikia dar paprastesnio iejimo kvitams, WhatsApp, el. pastui ir perdavimui buhalteriui.",
  accountantShareTitle: "Parodyti buhalteriui",
  accountantShareText: "Naudokite sia trumpa zinute, jei norite, kad buhalteris arba patikimas bookkeeper suprastu TidGo pries prijungima.",
  accountantMessageTitle: "Zinute kopijavimui",
  accountantMessageText: "Sveiki, bandau TidGo kvitams ir pajamu irodymams laikyti vienoje vietoje. Yra tik skaitymui skirtas buhalterio portalas, taigi prijungus jusu el. pasta galite matyti mano irasus ir atsisiusti PDF/CSV paketa, bet negalite keisti duomenu. Portalo demo: https://tidgo.co.uk/accountant-demo",
  accountantDemoPackTitle: "Ka gali matyti buhalteris",
  accountantDemoPackText: "Tik irasus, kuriems duodate leidima: kvitu nuotraukas, pajamu irodymus, menesio/ketvircio suvestines ir eksportus. Prieiga yra tik skaitymui ir gali buti atsaukta.",
  platformNow: "Naudok web app dabar.",
  platformSoon: "Android ir iOS versijos kuriamos kartu su TidGo.",
  socialTitle: "Sekite mus",
  privacyNote: "Be cookies labirinto: TidGo naudoja tik butinus programeles duomenis. Paprasta analitika veikia tik jei sutinki. Vartotoju duomenu neparduodame.",
  copyright: "Â© 2026 TidGo. Visos teises saugomos."
});

Object.assign(MARKETING_COPY.en, {
  heroTitle: "If you can use WhatsApp, you can use TidGo.",
  heroText: "Send receipt photos, forward CIS payslips, or type a quick income amount. TidGo keeps your records tidy, flags what needs checking, and prepares a clean handoff for your accountant â€” an MTD receipt app without open banking.",
  stepSnap: "Send it your way",
  stepTidy: "Check what needs attention",
  stepPack: "Hand over tidy records",
  trustSimple: "No business bank account needed.",
  trustControl: "No bank connection required.",
  trustEarly: "No accounting software to learn.",
  whatsNewTitle: "What's new in TidGo",
  whatsNewBadge: "New",
  whatsNewIntake: "WhatsApp receipt intake is now live: send receipt photos to TidGo without opening the app. Email intake is available too.",
  whatsNewMtd: "TidGo helps keep digital records ready for your accountant's quarterly MTD workflow. TidGo does not submit to HMRC yet.",
  whatsNewCta: "See more after you sign in.",
  cisTitle: "Built for CIS paperwork too",
  cisText: "Forward payslips, remittance notes and income proof. Add the amount manually when needed, keep the proof attached, and let your accountant review tidy English records.",
  simpleValueTitle: "No bloated accounting suite",
  simpleValueText: "TidGo focuses on the work most small users actually need: receipts, income proof, tidy summaries and accountant handoff. No dashboards for the sake of dashboards. No paying for features you never open.",
  selfText: "Send receipt photos, record income and attach CIS paperwork when you have it. TidGo keeps everything tidy for your accountant: monthly or quarterly.",
  accountantText: "View client records with permission, see what still needs review and download clean English CSV/PDF packs without chasing bags of receipts before every deadline.",
  howTitle: "You handle WhatsApp. Your accountant handles MTD.",
  howText: "Keep sending receipts and income information the way you already send messages. TidGo organises everything into tidy English records your accountant can review each quarter.",
   videoSectionTitle: "See TidGo in 30 seconds",
  videoSectionText: "Three short videos: receipts by WhatsApp, TidGo in different languages, and a cleaner pack for your accountant.",
  videoWhatsAppTitle: "Send receipts by WhatsApp",
  videoWhatsAppText: "Snap it, send it, keep it with your records.",
  videoLanguagesTitle: "Use TidGo in your language",
  videoLanguagesText: "A simpler record app for people who think in more than one language.",
  videoAccountantTitle: "Your accountant gets a cleaner pack",
  videoAccountantText: "Less paper chaos, clearer monthly and quarterly summaries.",
  videoWatch: "Watch on YouTube", shareTidGo: "Share TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo keeps receipts, income proof and simple records tidy for self-employed people and accountants.",
  shareCopied: "TidGo link copied.",
  mtdTestingTitle: "MTD submission testing",
  mtdTestingText: "TidGo is currently testing an MTD connection in HMRC's sandbox. MTD quarterly submissions are in development, pending HMRC production approval. HMRC's next update is expected by the end of September 2026.",
  mtdLateTitle: "Missed a quarterly update?",
  mtdLateText: "Missed the 7 August deadline? No penalty points in 2026/27. Here's what actually happens.",
  mtdResponsibilities: "MTD: what you do and what your accountant does",
  mtdResponsibilitiesText: "A plain table showing what MTD actually requires, what is optional, and why a quarterly update is not a quarterly tax return.",  mtdAutoSignup: "Automatically signed up by HMRC?",
  mtdAutoSignupText: "Received a letter saying HMRC signed you up for MTD automatically? Here's what it means and what to do next.",
  mtdSourceTitle: "Official source",
  mtdSourceText: "Read the public GOV.UK guidance on Making Tax Digital for Income Tax and quarterly updates.",
  launchPricingFullText: "TidGo is in early access for a small group of real users. It is free while we collect feedback, improve the app and prepare clearer guides. Users will be told clearly in advance and will always be able to export or delete their records.",
  pricingText: "TidGo is free during early access. If paid plans are introduced, users will be told clearly in advance and will always be able to export or delete their records.",
  mtdWho: "Does MTD apply to me?",
  mtdWhoText: "Thresholds, exemptions and the plain-English version of what Making Tax Digital actually means.",
  mtdSpreadsheets: "Can I still use Excel for MTD?",
  mtdSpreadsheetsText: "Spreadsheets are not banned, but Excel alone is not enough. Here is what bridging software and digital links really mean.",
});

Object.assign(MARKETING_COPY.pl, {
  heroTitle: "JeÅ›li umiesz uÅ¼ywaÄ‡ WhatsAppa, umiesz uÅ¼ywaÄ‡ TidGo.",
  heroText: "WyÅ›lij zdjÄ™cie paragonu, przekaÅ¼ CIS payslip albo wpisz szybkÄ… kwotÄ™ przychodu. TidGo trzyma rekordy w porzÄ…dku, pokazuje co trzeba sprawdziÄ‡ i szykuje czystÄ… paczkÄ™ dla ksiÄ™gowego.",
  stepSnap: "WyÅ›lij po swojemu",
  stepTidy: "SprawdÅº co wymaga uwagi",
  stepPack: "PrzekaÅ¼ porzÄ…dne rekordy",
  trustSimple: "Bez konta firmowego w banku.",
  trustControl: "Bez podÅ‚Ä…czania banku.",
  trustEarly: "Bez nauki programu ksiÄ™gowego.",
  whatsNewTitle: "Co nowego w TidGo",
  whatsNewBadge: "Nowe",
  whatsNewIntake: "WhatsApp receipt intake juÅ¼ dziaÅ‚a: wysyÅ‚aj zdjÄ™cia paragonÃ³w do TidGo bez otwierania aplikacji. Email intake teÅ¼ jest dostÄ™pny.",
  whatsNewMtd: "TidGo pomaga trzymaÄ‡ cyfrowe rekordy gotowe do kwartalnego workflow MTD u ksiÄ™gowego. TidGo jeszcze nie wysyÅ‚a danych do HMRC.",
  whatsNewCta: "Zobacz wiÄ™cej po zalogowaniu.",
  cisTitle: "TakÅ¼e pod dokumenty CIS",
  cisText: "Przekazuj payslipy, remittance notes i dowody przychodu. W razie potrzeby wpisz kwotÄ™ rÄ™cznie, trzymaj dokument podpiÄ™ty i daj ksiÄ™gowemu porzÄ…dne rekordy po angielsku.",
  simpleValueTitle: "Bez nadmuchanego kombajnu ksiÄ™gowego",
  simpleValueText: "TidGo skupia siÄ™ na pracy, ktÃ³rej maÅ‚e firmy naprawdÄ™ potrzebujÄ…: paragony, dowody przychodu, porzÄ…dne summary i przekazanie ksiÄ™gowemu. Bez wykresÃ³w dla samych wykresÃ³w. Bez pÅ‚acenia za funkcje, ktÃ³rych nigdy nie otwierasz.",
  selfText: "WysyÅ‚aj zdjÄ™cia paragonÃ³w, zapisuj przychÃ³d i podpinaj dokumenty CIS, kiedy je masz. TidGo trzyma wszystko w porzÄ…dku dla ksiÄ™gowego: miesiÄ™cznie albo kwartalnie.",
  accountantText: "Zobacz rekordy klienta za jego zgodÄ…, sprawdÅº co wymaga uwagi i pobierz czytelny angielski CSV/PDF pack bez gonienia za reklamÃ³wkami paragonÃ³w przed terminem.",
  howTitle: "Ty ogarniasz WhatsAppa. KsiÄ™gowy ogarnia MTD.",
  howText: "WysyÅ‚aj paragony i informacje o przychodzie tak, jak juÅ¼ wysyÅ‚asz wiadomoÅ›ci. TidGo ukÅ‚ada wszystko w czytelne angielskie rekordy do kwartalnego sprawdzenia przez ksiÄ™gowego.",
   videoSectionTitle: "Zobacz TidGo w 30 sekund",
  videoSectionText: "Trzy krotkie filmy: paragony przez WhatsApp, TidGo w roznych jezykach i czystsza paczka dla ksiegowego.",
  videoWhatsAppTitle: "Wysylaj paragony przez WhatsApp",
  videoWhatsAppText: "Zrob zdjecie, wyslij, trzymaj razem z rekordami.",
  videoLanguagesTitle: "Uzywaj TidGo w swoim jezyku",
  videoLanguagesText: "Prostsza aplikacja do rekordow dla ludzi, ktorzy mysla w wiecej niz jednym jezyku.",
  videoAccountantTitle: "Ksiegowy dostaje czystsza paczke",
  videoAccountantText: "Mniej papierowego chaosu, czytelniejsze podsumowania miesieczne i kwartalne.",
  videoWatch: "Obejrzyj na YouTube", shareTidGo: "UdostÄ™pnij TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo trzyma paragony, dowody przychodu i proste rekordy w porzÄ…dku dla self-employed i ksiÄ™gowych.",
  shareCopied: "Link TidGo skopiowany.",
  mtdTestingTitle: "Testy wysyÅ‚ki MTD",
  mtdTestingText: "TidGo testuje obecnie po&#322;&#261;czenie MTD w sandboxie HMRC. Kwartalne wysy&#322;ki MTD s&#261; w trakcie developmentu i czekaj&#261; na produkcyjne zatwierdzenie HMRC. Kolejny update HMRC jest spodziewany do ko&#324;ca wrze&#347;nia 2026.",
  mtdLateTitle: "Termin kwartalnego update'u juÅ¼ minÄ…Å‚?",
  mtdLateText: "Termin 7 sierpnia min&#261;&#322;? W roku 2026/27 nie ma penalty points. Zobacz, co naprawd&#281; dzieje si&#281; dalej.",
  mtdResponsibilities: "MTD: co robisz Ty, a co robi ksi\u0119gowy",
  mtdResponsibilitiesText: "Prosta tabela pokazuj\u0105ca, czego MTD naprawd\u0119 wymaga, co jest opcjonalne i dlaczego quarterly update nie jest kwartalnym tax return.",  mtdAutoSignup: "HMRC automatycznie zapisaÅ‚o CiÄ™ do MTD?",
  mtdAutoSignupText: "DostaÅ‚eÅ› list, Å¼e HMRC zapisaÅ‚o CiÄ™ automatycznie do MTD? Zobacz, co to znaczy i co zrobiÄ‡ dalej.",
  mtdSourceTitle: "Oficjalne ÅºrÃ³dÅ‚o",
  mtdSourceText: "Przeczytaj publiczne GOV.UK guidance o Making Tax Digital for Income Tax i quarterly updates.",
  launchPricingFullText: "TidGo jest w early access dla maÅ‚ej grupy prawdziwych uÅ¼ytkownikÃ³w. Jest darmowe, kiedy zbieramy feedback, poprawiamy aplikacjÄ™ i przygotowujemy jaÅ›niejsze poradniki. UÅ¼ytkownicy dostanÄ… jasnÄ… informacjÄ™ z wyprzedzeniem i zawsze bÄ™dÄ… mogli wyeksportowaÄ‡ albo usunÄ…Ä‡ swoje rekordy.",
  pricingText: "TidGo jest darmowe w trakcie early access. JeÅ›li wprowadzimy pÅ‚atne plany, uÅ¼ytkownicy dostanÄ… jasnÄ… informacjÄ™ z wyprzedzeniem i zawsze bÄ™dÄ… mogli wyeksportowaÄ‡ albo usunÄ…Ä‡ swoje rekordy.",
  mtdWho: "Czy MTD dotyczy Ciebie?",
  mtdWhoText: "Progi, zwolnienia i proste wyjaÅ›nienie, co Making Tax Digital naprawdÄ™ oznacza.",
  mtdSpreadsheets: "Czy moge dalej uzywac Excela do MTD?",
  mtdSpreadsheetsText: "Excel nie jest zakazany, ale sam arkusz nie wystarczy. Prosto o bridging software i cyfrowych polaczeniach.",
});

Object.assign(MARKETING_COPY.ro, {
  heroTitle: "Daca poti folosi WhatsApp, poti folosi TidGo.",
  heroText: "Trimite poze cu bonuri, redirectioneaza payslipuri CIS sau scrie rapid o suma de venit. TidGo tine evidentele ordonate, arata ce trebuie verificat si pregateste predarea catre contabil.",
  stepSnap: "Trimite in felul tau",
  stepTidy: "Verifica ce cere atentie",
  stepPack: "Preda evidente ordonate",
  trustSimple: "Fara cont bancar business necesar.",
  trustControl: "Fara conectare la banca.",
  trustEarly: "Fara software contabil de invatat.",
  whatsNewTitle: "Ce este nou in TidGo",
  whatsNewBadge: "Nou",
  whatsNewIntake: "WhatsApp receipt intake este live: trimite poze cu bonuri catre TidGo fara sa deschizi aplicatia. Email intake este disponibil si el.",
  whatsNewMtd: "TidGo te ajuta sa pastrezi evidente digitale pregatite pentru workflow-ul trimestrial MTD al contabilului. TidGo nu trimite inca la HMRC.",
  whatsNewCta: "Vezi mai multe dupa autentificare.",
  cisTitle: "Construit si pentru documente CIS",
  cisText: "Redirectioneaza payslipuri, remittance notes si dovezi de venit. Introdu suma manual cand este nevoie, pastreaza dovada atasata si lasa contabilul sa verifice evidente clare in engleza.",
  simpleValueTitle: "Fara suita contabila umflata",
  simpleValueText: "TidGo se concentreaza pe munca de care utilizatorii mici chiar au nevoie: bonuri, dovezi de venit, rezumate ordonate si predare catre contabil. Fara dashboard-uri de dragul dashboard-urilor. Fara plata pentru functii pe care nu le deschizi.",
  selfText: "Trimite poze cu bonuri, inregistreaza venituri si ataseaza documente CIS cand le ai. TidGo tine totul ordonat pentru contabil: lunar sau trimestrial.",
  accountantText: "Vezi evidentele clientului cu acordul lui, vezi ce mai trebuie verificat si descarca pachete clare CSV/PDF in engleza fara sa alergi dupa pungi cu bonuri inainte de termen.",
  howTitle: "Tu folosesti WhatsApp. Contabilul se ocupa de MTD.",
  howText: "Trimite bonuri si informatii despre venit asa cum trimiti deja mesaje. TidGo le organizeaza in evidente clare in engleza, pe care contabilul le poate verifica trimestrial.",
   videoSectionTitle: "Vezi TidGo in 30 de secunde",
  videoSectionText: "Trei videoclipuri scurte: bonuri prin WhatsApp, TidGo in mai multe limbi si un pachet mai curat pentru contabil.",
  videoWhatsAppTitle: "Trimite bonuri prin WhatsApp",
  videoWhatsAppText: "Fotografiezi, trimiti si pastrezi dovada langa evidenta.",
  videoLanguagesTitle: "Foloseste TidGo in limba ta",
  videoLanguagesText: "O aplicatie mai simpla pentru oameni care gandesc in mai multe limbi.",
  videoAccountantTitle: "Contabilul primeste un pachet mai clar",
  videoAccountantText: "Mai putin haos cu hartii, rezumate lunare si trimestriale mai curate.",
  videoWatch: "Vezi pe YouTube", shareTidGo: "Distribuie TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo tine bonuri, dovezi de venit si evidente simple ordonate pentru self-employed si contabili.",
  shareCopied: "Linkul TidGo a fost copiat.",
  mtdTestingTitle: "Testare trimitere MTD",
  mtdTestingText: "TidGo testeaza in prezent conexiunea MTD in sandbox-ul HMRC. Trimiterile trimestriale MTD sunt in development, in asteptarea aprobarii HMRC pentru productie. Urmatorul update HMRC este asteptat pana la finalul lui septembrie 2026.",
  mtdLateTitle: "Ai ratat un quarterly update?",
  mtdLateText: "Ai ratat termenul de 7 august? In 2026/27 nu exista penalty points. Iata ce se intampla de fapt.",
  mtdResponsibilities: "MTD: ce faci tu si ce face contabilul",
  mtdResponsibilitiesText: "Un tabel simplu care arata ce cere MTD, ce este optional si de ce un quarterly update nu este o declaratie fiscala trimestriala.",  mtdAutoSignup: "HMRC te-a inscris automat la MTD?",
  mtdAutoSignupText: "Ai primit o scrisoare ca HMRC te-a inscris automat la MTD? Iata ce inseamna si ce trebuie sa faci mai departe.",
  mtdSourceTitle: "Sursa oficiala",
  mtdSourceText: "Citeste ghidul public GOV.UK despre Making Tax Digital for Income Tax si quarterly updates.",
  launchPricingFullText: "TidGo este in early access pentru un grup mic de utilizatori reali. Este gratuit cat timp strangem feedback, imbunatatim aplicatia si pregatim ghiduri mai clare. Utilizatorii vor fi anuntati clar din timp si vor putea mereu exporta sau sterge inregistrarile.",
  pricingText: "TidGo este gratuit in early access. Daca apar planuri platite, utilizatorii vor fi anuntati clar din timp si vor putea mereu exporta sau sterge inregistrarile.",
  mtdWho: "Èši se aplicÄƒ MTD?",
  mtdWhoText: "Praguri, scutiri È™i explicaÈ›ia simplÄƒ a ceea ce Ã®nseamnÄƒ Making Tax Digital.",
  mtdSpreadsheets: "Pot folosi Excel pentru MTD?",
  mtdSpreadsheetsText: "Foile de calcul nu sunt interzise, dar Excel singur nu ajunge. Iata ce inseamna bridging software si legaturile digitale.",
});

Object.assign(MARKETING_COPY.lt, {
  heroTitle: "Jei mokate naudotis WhatsApp, mokate naudotis TidGo.",
  heroText: "Siuskite kvitu nuotraukas, persiuskite CIS payslipus arba greitai irasykite pajamu suma. TidGo tvarko irasus, parodo ka reikia patikrinti ir paruosia aisku perdavima buhalteriui.",
  stepSnap: "Siuskite savo budu",
  stepTidy: "Patikrinkite kas reikalauja demesio",
  stepPack: "Perduokite tvarkingus irasus",
  trustSimple: "Nereikia business banko saskaitos.",
  trustControl: "Nereikia jungti banko.",
  trustEarly: "Nereikia mokytis buhalterines sistemos.",
  whatsNewTitle: "Kas naujo TidGo",
  whatsNewBadge: "Nauja",
  whatsNewIntake: "WhatsApp receipt intake jau veikia: siuskite kvitu nuotraukas i TidGo neatidarydami programeles. Email intake taip pat prieinamas.",
  whatsNewMtd: "TidGo padeda laikyti skaitmeninius irasus paruostus buhalterio ketvirtiniam MTD workflow. TidGo dar neteikia deklaraciju HMRC.",
  whatsNewCta: "Daugiau pamatysite prisijunge.",
  cisTitle: "Tinka ir CIS dokumentams",
  cisText: "Persiuskite payslipus, remittance notes ir pajamu irodymus. Jei reikia, suma irasykite ranka, laikykite irodyma prisegta ir leiskite buhalteriui perziureti tvarkingus angliskus irasus.",
  simpleValueTitle: "Ne perpusta buhalterijos sistema",
  simpleValueText: "TidGo susitelkia i darba, kurio maziems vartotojams tikrai reikia: kvitai, pajamu irodymai, tvarkingos suvestines ir perdavimas buhalteriui. Jokiu dashboard'u vien del dashboard'u. Jokio mokejimo uz funkcijas, kuriu neatidarote.",
  selfText: "Siuskite kvitu nuotraukas, irasykite pajamas ir pridekite CIS dokumentus, kai juos turite. TidGo viska laiko tvarkingai buhalteriui: menesiui arba ketvirciui.",
  accountantText: "Matykite kliento irasus su jo leidimu, pamatykite ka reikia patikrinti ir atsisiuskite aiskus angliskus CSV/PDF paketus be kvitu maisu vaikymosi pries terminus.",
  howTitle: "Jus naudojate WhatsApp. Buhalteris tvarko MTD.",
  howText: "Siuskite kvitus ir pajamu informacija taip, kaip jau siunciate zinutes. TidGo sudeda viska i tvarkingus angliskus irasus, kuriuos buhalteris gali perziureti kas ketvirti.",
   videoSectionTitle: "Pamatykite TidGo per 30 sekundziu",
  videoSectionText: "Trys trumpi video: kvitai per WhatsApp, TidGo keliomis kalbomis ir tvarkingesnis paketas buhalteriui.",
  videoWhatsAppTitle: "Siuskite kvitus per WhatsApp",
  videoWhatsAppText: "Nufotografuokite, issiuskite ir laikykite prie irasu.",
  videoLanguagesTitle: "Naudokite TidGo savo kalba",
  videoLanguagesText: "Paprastesne irasu programele zmonems, kurie galvoja daugiau nei viena kalba.",
  videoAccountantTitle: "Buhalteris gauna tvarkingesni paketa",
  videoAccountantText: "Maziau popieriu chaoso, aiskesnes menesio ir ketvircio suvestines.",
  videoWatch: "Ziureti YouTube", shareTidGo: "Dalintis TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo tvarko kvitus, pajamu irodymus ir paprastus irasus self-employed zmonems ir buhalteriams.",
  shareCopied: "TidGo nuoroda nukopijuota.",
  mtdTestingTitle: "MTD submission testavimas",
  mtdTestingText: "TidGo siuo metu testuoja MTD jungti HMRC sandbox aplinkoje. Ketvirtiniai MTD pateikimai yra kuriami ir laukia HMRC production patvirtinimo. Kitas HMRC update laukiamas iki 2026 m. rugsejo pabaigos.",
  mtdLateTitle: "Praleidote quarterly update?",
  mtdLateText: "Praleidote rugpjucio 7 d. termina? 2026/27 metais penalty points nera. Stai kas is tikruju vyksta toliau.",
  mtdResponsibilities: "MTD: ka darote jus ir ka daro buhalteris",
  mtdResponsibilitiesText: "Paprasta lentele apie tai, ko MTD is tikruju reikalauja, kas neprivaloma ir kodel quarterly update nera ketvirtine mokesciu deklaracija.",  mtdAutoSignup: "HMRC automatiÅ¡kai Ä¯traukÄ— jus Ä¯ MTD?",
  mtdAutoSignupText: "Gavote laiÅ¡kÄ…, kad HMRC automatiÅ¡kai Ä¯traukÄ— jus Ä¯ MTD? Å tai kÄ… tai reiÅ¡kia ir kÄ… daryti toliau.",
  mtdSourceTitle: "Oficialus saltinis",
  mtdSourceText: "Skaitykite viesas GOV.UK gaires apie Making Tax Digital for Income Tax ir quarterly updates.",
  launchPricingFullText: "TidGo yra early access mazai tikru vartotoju grupei. Programa nemokama, kol renkame atsiliepimus, geriname ja ir ruosiame aiskesnius gidus. Vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus.",
  pricingText: "TidGo nemokama early access metu. Jei bus ivesti mokami planai, vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus.",
  mtdWho: "Ar MTD taikomas tau?",
  mtdWhoText: "Ribos, iÅ¡imtys ir paprastas paaiÅ¡kinimas, kÄ… Making Tax Digital iÅ¡ tikrÅ³jÅ³ reiÅ¡kia.",
  mtdSpreadsheets: "Ar galiu naudoti Excel MTD?",
  mtdSpreadsheetsText: "Skaiciuokles nera uzdraustos, bet vien Excel nepakanka. Paprastai apie tarpine programine iranga ir skaitmeninius rysius.",
});

const EARLY_ACCESS_BANNER_COPY = {
  en: {
    title: "Early Access ends 1 September 2026",
    text: "TidGo is free until then. Sign up now and get 14 days free when paid plans begin - no card required during Early Access.",
    button: "Start free - no card needed"
  },
  pl: {
    title: "Early Access konczy sie 1 wrzesnia 2026",
    text: "Do tej daty TidGo jest bezplatne. Zapisz sie teraz i dostan 14 dni za darmo, gdy zaczna sie platne plany - bez karty w czasie Early Access.",
    button: "Zacznij za darmo - bez karty"
  },
  ro: {
    title: "Early Access se incheie pe 1 septembrie 2026",
    text: "Pana atunci TidGo este gratuit. Inscrie-te acum si primesti 14 zile gratuit cand incep planurile platite - fara card in perioada Early Access.",
    button: "Incepe gratuit - fara card"
  },
  lt: {
    title: "Early Access baigiasi 2026 m. rugsejo 1 d.",
    text: "Iki tol TidGo yra nemokama. Uzsiregistruok dabar ir gauk 14 dienu nemokamai, kai prasides mokami planai - korteles nereikia Early Access laikotarpiu.",
    button: "Pradek nemokamai - be korteles"
  }
};

const PRICING_PAGE_COPY = {
  en: {
    title: "TidGo pricing",
    lead: "Clear pricing for simple record keeping.",
    price: "Â£4.99 per month",
    intro: "Cancel any time. No contracts. No annual commitment. No questions asked.",
    ownership: "Your records are always yours. While your account is active, you can export or delete your records at any time. After cancellation, your records stay available for 30 days so you can export them before they are deleted.",
    includedTitle: "What's included",
    sections: [
      ["Record keeping", "Receipts by WhatsApp photo, forwarded email, or in-app upload. Income entries with optional proof document. CIS payslips and remittance notices by email."],
      ["Eight languages, English output", "The app works in eight languages. Records and reports your accountant receives are always in English - because HMRC and accountants work in English. That's intentional, not a limitation."],
      ["Accountant access - always free", "Your accountant gets free read-only access to your records. No fee per client, no practice licence. They can view records, request missing documents and download a clean PDF or CSV pack."],
      ["MTD-ready records", "TidGo keeps your records organised and ready for your accountant's MTD workflow. It does not currently submit to HMRC directly - your accountant or MTD-compatible software does that."],
      ["Export and delete", "Export your full records as PDF or CSV while your account is active. If you cancel, your records remain available for 30 days so you can export them before deletion."]
    ],
    comingTitle: "MTD quarterly submissions - in development",
    comingText: "MTD quarterly submissions are in development, pending HMRC production approval. HMRC's next update is expected by the end of September 2026.",
    comingScope: "Quarterly updates are running totals of income and expenses - four per year. The year-end declaration remains your accountant's work. We are not replacing that.",
    comingNote: "No date is confirmed yet. Founding Testers will hear first.",
    earlyTitle: "Early Access ends 1 September 2026",
    earlyText: "TidGo is free during Early Access until 1 September 2026. After paid plans begin, every subscription starts with 14 days free, then Â£4.99 per month.",
    earlyNow: "If you sign up before 1 September 2026: you use TidGo free during Early Access. Your 14-day free period starts only when paid plans begin.",
    earlyExisting: "If you are already using TidGo: you will receive clear notice before any charge begins. If you decide not to continue, you will have time to export your records before access ends.",
    faqTitle: "Frequently asked questions",
    faqs: [
      ["Can I cancel any time?", "Yes. Cancel in settings, no email required, no questions asked. Your records remain accessible for 30 days after cancellation so you can export them."],
      ["Is there an annual plan?", "No. Monthly only. We don't think it's fair to lock people in for a year."],
      ["What happens to my data if I cancel?", "Your records stay accessible for 30 days. After that they are deleted. Export them before you go - it takes one click."],
      ["Does the accountant pay anything?", "No. Accountant access is free and always will be."],
      ["Will the price change?", "We will give clear advance notice of any price change - at least 30 days. You will always be able to export your records before any change takes effect."],
      ["Is TidGo MTD-compliant software?", "TidGo helps you keep digital records ready for MTD. It does not currently submit quarterly updates to HMRC directly. That part is done by your accountant or MTD-compatible software. We are working on direct submission."]
    ]
  },
  pl: {
    title: "Cennik TidGo",
    lead: "Jasna cena za proste prowadzenie rekordow.",
    price: "Â£4.99 miesiecznie",
    intro: "Anuluj kiedy chcesz. Bez umow. Bez rocznych zobowiazan. Bez pytan.",
    ownership: "Twoje rekordy zawsze naleza do Ciebie. Gdy konto jest aktywne, mozesz je wyeksportowac albo usunac w kazdej chwili. Po anulowaniu rekordy zostaja dostepne przez 30 dni, zebys mogl je pobrac przed usunieciem.",
    includedTitle: "Co jest w planie",
    sections: [
      ["Zbieranie rekordow", "Paragony przez zdjecie na WhatsAppie, przekazany mail lub upload w aplikacji. Wpisy przychodow z opcjonalnym dowodem. Payslipy CIS i remittance notices mailem."],
      ["Osiem jezykow, raporty po angielsku", "Aplikacja dziala w osmiu jezykach. Rekordy i raporty, ktore dostaje Twoj ksiegowy, sa zawsze po angielsku - bo HMRC i ksiegowi pracuja po angielsku. To celowa decyzja, nie ograniczenie."],
      ["Dostep dla ksiegowego - zawsze bezplatny", "Twoj ksiegowy dostaje bezplatny dostep tylko do odczytu. Bez oplaty za klienta, bez licencji. Moze przegladac rekordy, prosic o brakujace dokumenty i pobierac czysty pack PDF lub CSV."],
      ["Rekordy gotowe pod MTD", "TidGo porzadkuje Twoje rekordy i przygotowuje je do workflow MTD Twojego ksiegowego. Obecnie nie wysyla bezposrednio do HMRC - robi to Twoj ksiegowy albo kompatybilne oprogramowanie."],
      ["Eksport i usuniecie", "Eksportuj pelne rekordy jako PDF lub CSV, gdy konto jest aktywne. Po anulowaniu rekordy zostaja dostepne przez 30 dni, zebys mogl je pobrac przed usunieciem."]
    ],
    comingTitle: "Kwartalne wysylki MTD - w trakcie developmentu",
    comingText: "Kwartalne wysy&#322;ki MTD s&#261; w trakcie developmentu i czekaj&#261; na produkcyjne zatwierdzenie HMRC. Kolejny update HMRC jest spodziewany do ko&#324;ca wrze&#347;nia 2026.",
    comingScope: "Quarterly updates to narastajace sumy przychodow i wydatkow - cztery razy w roku. Roczna deklaracja pozostaje praca Twojego ksiegowego. Nie zastepujemy tego.",
    comingNote: "Daty nie ma jeszcze potwierdzonej. Founding Testerzy dowiedza sie pierwsi.",
    earlyTitle: "Early Access konczy sie 1 wrzesnia 2026",
    earlyText: "TidGo jest bezplatne w Early Access do 1 wrzesnia 2026. Gdy zaczna sie platne plany, kazda subskrypcja zacznie sie od 14 dni za darmo, potem Â£4.99 miesiecznie.",
    earlyNow: "Jesli zapiszesz sie przed 1 wrzesnia 2026: uzywasz TidGo za darmo w Early Access. Twoje 14 dni darmowego okresu zacznie sie dopiero wtedy, gdy rusza platne plany.",
    earlyExisting: "Jesli juz uzywasz TidGo: dostaniesz wyrazne powiadomienie, zanim jakiekolwiek oplaty sie zaczna. Jesli zdecydujesz, ze nie chcesz kontynuowac, bedziesz miec czas, zeby wyeksportowac swoje rekordy przed koncem dostepu.",
    faqTitle: "Najczestsze pytania",
    faqs: [
      ["Czy moge anulowac w kazdej chwili?", "Tak. Anuluj w ustawieniach, bez maila, bez pytan. Twoje rekordy sa dostepne przez 30 dni po anulowaniu, zebys mogl je wyeksportowac."],
      ["Czy jest plan roczny?", "Nie. Tylko miesieczny. Uwazamy, ze wiazanie ludzi na rok nie jest uczciwe."],
      ["Co sie dzieje z moimi danymi po anulowaniu?", "Rekordy sa dostepne przez 30 dni. Potem zostaja usuniete. Wyeksportuj je przed odejsciem - to jedno klikniecie."],
      ["Czy ksiegowy za cos placi?", "Nie. Dostep dla ksiegowego jest bezplatny i zawsze taki pozostanie."],
      ["Czy cena sie zmieni?", "O kazdej zmianie ceny poinformujemy z co najmniej 30-dniowym wyprzedzeniem. Zawsze bedziesz mogl wyeksportowac swoje rekordy przed wejsciem jakiejkolwiek zmiany."],
      ["Czy TidGo to oprogramowanie zgodne z MTD?", "TidGo pomaga prowadzic cyfrowe rekordy gotowe pod MTD. Obecnie nie wysyla kwartalnych raportow do HMRC bezposrednio. To robi Twoj ksiegowy albo kompatybilne oprogramowanie. Pracujemy nad bezposrednia wysylka."]
    ]
  },
  ro: {
    title: "Preturi TidGo",
    lead: "Pret clar pentru evidente simple.",
    price: "Â£4.99 pe luna",
    intro: "Anulezi oricand. Fara contracte. Fara angajament anual. Fara intrebari.",
    ownership: "Inregistrarile tale iti apartin intotdeauna. Cat timp contul este activ, le poti exporta sau sterge oricand. Dupa anulare, inregistrarile raman disponibile 30 de zile ca sa le poti exporta inainte de stergere.",
    includedTitle: "Ce este inclus",
    sections: [
      ["Colectarea evidentelor", "Bonuri prin fotografie pe WhatsApp, email transmis mai departe sau incarcare in aplicatie. Inregistrari de venituri cu document justificativ optional. Payslipuri CIS si remittance notices prin email."],
      ["Opt limbi, rapoarte in engleza", "Aplicatia functioneaza in opt limbi. Evidentele si rapoartele pe care le primeste contabilul tau sunt intotdeauna in engleza - pentru ca HMRC si contabilii lucreaza in engleza."],
      ["Acces pentru contabil - intotdeauna gratuit", "Contabilul tau primeste acces gratuit doar pentru citire. Nicio taxa per client, nicio licenta. Poate vizualiza evidentele, solicita documente lipsa si descarca un pachet PDF sau CSV."],
      ["Evidente pregatite pentru MTD", "TidGo iti organizeaza evidentele si le pregateste pentru fluxul MTD al contabilului tau. In prezent nu trimite direct la HMRC - face asta contabilul tau sau software-ul compatibil."],
      ["Export si stergere", "Exporta toate evidentele ca PDF sau CSV cat timp contul este activ. Dupa anulare, inregistrarile raman disponibile 30 de zile ca sa le poti exporta inainte de stergere."]
    ],
    comingTitle: "Trimiteri trimestriale MTD - in development",
    comingText: "Trimiterile trimestriale MTD sunt in development, in asteptarea aprobarii HMRC pentru productie. Urmatorul update HMRC este asteptat pana la finalul lui septembrie 2026.",
    comingScope: "Actualizarile trimestriale sunt totaluri cumulative ale veniturilor si cheltuielilor - patru pe an. Declaratia de la finalul anului ramane treaba contabilului tau. Nu o inlocuim.",
    comingNote: "Nu exista inca o data confirmata. Founding Testerii vor afla primii.",
    earlyTitle: "Early Access se incheie pe 1 septembrie 2026",
    earlyText: "TidGo este gratuit in Early Access pana la 1 septembrie 2026. Dupa inceperea planurilor platite, fiecare abonament incepe cu 14 zile gratuite, apoi Â£4.99 pe luna.",
    earlyNow: "Daca te inscrii inainte de 1 septembrie 2026: folosesti TidGo gratuit in Early Access. Perioada ta gratuita de 14 zile incepe doar cand pornesc planurile platite.",
    earlyExisting: "Daca folosesti deja TidGo: vei primi o notificare clara inainte ca orice taxa sa inceapa. Daca nu vrei sa continui, vei avea timp sa exporti inregistrarile inainte ca accesul sa se incheie.",
    faqTitle: "Intrebari frecvente",
    faqs: [
      ["Pot anula oricand?", "Da. Anulezi din setari, fara email, fara intrebari. Evidentele raman accesibile 30 de zile dupa anulare."],
      ["Exista un plan anual?", "Nu. Doar lunar. Nu consideram corect sa legam oamenii pe un an."],
      ["Ce se intampla cu datele mele dupa anulare?", "Evidentele sunt accesibile 30 de zile. Apoi sunt sterse. Exporta-le inainte sa pleci."],
      ["Contabilul plateste ceva?", "Nu. Accesul pentru contabil este gratuit si va ramane asa intotdeauna."],
      ["Se va schimba pretul?", "Vom anunta orice modificare de pret cu cel putin 30 de zile inainte."],
      ["TidGo trimite direct la HMRC?", "Nu in prezent. TidGo pregateste evidentele pentru MTD, iar trimiterea se face prin contabilul tau sau software compatibil. Lucram la trimiterea directa."]
    ]
  },
  lt: {
    title: "TidGo kainos",
    lead: "Aiski kaina paprastiems irasams.",
    price: "Â£4.99 per menesi",
    intro: "Atsauk bet kada. Jokiu sutarciu. Jokiu metiniu isipareigojimu. Jokiu klausimu.",
    ownership: "Tavo irasai visada priklauso tau. Kol paskyra aktyvi, gali juos eksportuoti arba istrinti bet kada. Po atsaukimo irasai lieka pasiekiami 30 dienu, kad galetum juos eksportuoti pries istrynima.",
    includedTitle: "Kas itraukta",
    sections: [
      ["Irasu rinkimas", "Kvitai per WhatsApp nuotrauka, persiunciama el. laiska arba ikelima programeleje. Pajamu irasai su pasirinktinu irodanciu dokumentu. CIS payslipai ir remittance notices el. pastu."],
      ["Astuonios kalbos, ataskaitos angliskai", "Programele veikia astuoniomis kalbomis. Irasai ir ataskaitos, kuriuos gauna tavo buhalteris, visada yra anglu kalba - nes HMRC ir buhalteriai dirba angliskai."],
      ["Prieiga buhalteriui - visada nemokama", "Tavo buhalteris gauna nemokama tik skaitymo prieiga. Jokio mokescio per klienta, jokios licencijos. Gali perziureti irasus, prasyti trukstamu dokumentu ir atsisiusti PDF ar CSV paketa."],
      ["Irasai paruosti MTD", "TidGo tvarko tavo irasus ir paruosia juos tavo buhalterio MTD darbo eigai. Siuo metu nesiuncia tiesiogiai i HMRC - tai daro tavo buhalteris arba suderinama programine iranga."],
      ["Eksportas ir istrynimas", "Eksportuok visus irasus kaip PDF ar CSV, kol paskyra aktyvi. Po atsaukimo irasai lieka pasiekiami 30 dienu, kad galetum juos eksportuoti pries istrynima."]
    ],
    comingTitle: "Ketvirtiniai MTD pateikimai - kuriama",
    comingText: "Ketvirtiniai MTD pateikimai yra kuriami ir laukia HMRC production patvirtinimo. Kitas HMRC update laukiamas iki 2026 m. rugsejo pabaigos.",
    comingScope: "Ketvirtiniai atnaujinimai yra kaupiamosios pajamu ir islaidu sumos - keturis kartus per metus. Metu pabaigos deklaracija lieka tavo buhalterio darbas. Mes jos nepakeiciame.",
    comingNote: "Data dar nepatvirtinta. Founding Testeriai suzinos pirmieji.",
    earlyTitle: "Early Access baigiasi 2026 m. rugsejo 1 d.",
    earlyText: "TidGo yra nemokama Early Access laikotarpiu iki 2026 m. rugsejo 1 d. Kai prasides mokami planai, kiekviena prenumerata prasides nuo 14 dienu nemokamo laikotarpio, tada Â£4.99 per menesi.",
    earlyNow: "Jei uzsiregistruosi iki 2026 m. rugsejo 1 d.: naudosi TidGo nemokamai Early Access metu. Tavo 14 dienu nemokamas laikotarpis prasides tik tada, kai prasides mokami planai.",
    earlyExisting: "Jei jau naudoji TidGo: gausi aisku pranesima pries pradedant bet kokius mokescius. Jei nenoresi testi, turesi laiko eksportuoti irasus pries pasibaigiant prieigai.",
    faqTitle: "Dazniausiai uzduodami klausimai",
    faqs: [
      ["Ar galiu atsaukti bet kada?", "Taip. Atsauk nustatymuose, be el. laisko, be klausimu. Irasai pasiekiami 30 dienu po atsaukimo."],
      ["Ar yra metinis planas?", "Ne. Tik menesinis. Nemanome, kad teisinga suristi zmones metams."],
      ["Kas nutinka su mano duomenimis atsaukus?", "Irasai pasiekiami 30 dienu. Po to istrinami. Eksportuok juos pries iseidamas."],
      ["Ar buhalteris uz ka nors moka?", "Ne. Prieiga buhalteriui yra nemokama ir tokia visada isliks."],
      ["Ar pasikeis kaina?", "Apie bet koki kainos pakeitima pranesime likus ne maziau kaip 30 dienu."],
      ["Ar TidGo siuncia tiesiogiai i HMRC?", "Siuo metu ne. TidGo paruosia irasus MTD, o pateikima atlieka tavo buhalteris arba suderinama programine iranga. Dirbame prie tiesioginio pateikimo."]
    ]
  }
};

const ACCOUNTANT_COPY = {
  en: {
    forAccountants: "TidGo for Accountants",
    heroTitle: "Receipts in. Tidy records out.",
    heroSubtitle: "A simple read-only handoff for sole traders who are brilliant at work and less brilliant at keeping receipts in order.",
    accessTitle: "Accountant access",
    signedInHint: "This device is signed in for the accountant email below.",
    signedOutHint: "Enter your accountant email. We will send a short login code before showing connected clients.",
    connectedAccount: "Connected account",
    email: "Email",
    nameOrPractice: "Name or practice",
    accountantEmail: "Accountant email",
    showConnectedClients: "Show connected clients",
    openClientList: "Open client list",
    backToOverview: "Back to overview",
    searchClients: "Search clients",
    signOut: "Sign out",
    sendLoginCode: "Send login code",
    loginCode: "Login code",
    verifyCode: "Verify code",
    handoffTitle: "Built for accountant handoff",
    handoffText: "Clients keep receipts and income proof tidy through the month. You get a read-only view and a clean pack when it is time to work.",
    clientAccess: "Client access",
    readOnly: "Read only",
    clientPermission: "Client permission",
    required: "Required",
    connectedClients: "Connected clients",
    clientList: "Client list",
    noClients: "No clients have connected this email yet.",
    signInFirst: "Sign in with your accountant email code first.",
    noTrade: "No trade set",
    noEmail: "No email",
    records: "records",
    howAccessWorks: "How access will work",
    clientAddsEmail: "1. Client adds your email",
    consentFirst: "Consent first",
    youSeeRecords: "2. You see records",
    youDownloadPack: "3. You download the pack",
    csvPdf: "CSV + PDF",
    clientRecords: "Client records",
    showClientsFirst: "Show connected clients first.",
    trade: "Trade",
    connected: "Connected",
    income: "Income",
    expenses: "Expenses",
    paidForClient: "Paid for client",
    downloadCsv: "Download CSV",
    downloadPdf: "Download PDF",
    requestDocs: "Request docs",
    noRecords: "No records yet.",
    expense: "Expense",
    proofAttached: "Proof attached",
    proofMissing: "Proof missing",
    receiptPhotoAttached: "Receipt photo attached",
    noReceiptPhoto: "No receipt photo",
    record: "Record",
    removeClient: "Remove client",
    removeClientConfirm: "Remove this client from your accountant list?",
    clientRemoved: "Client removed.",
    removeNeedsBackend: "This connection cannot be removed from the accountant side yet. Client can revoke access in TidGo settings.",
    accountantEmailInfo: "Use the email address your clients connect to in their TidGo settings.",
    connectedClientsInfo: "Only clients who have allowed access to this accountant email appear here.",
    requestDocsInfo: "Sends or prepares a short request when proof is missing.",
    requestDocsSent: "Request sent.",
    requestDocsCopied: "Request message copied.",
    requestDocsFailed: "Request email is not connected yet. Message copied instead."
  },
  pl: {
    forAccountants: "TidGo dla ksiÄ™gowych",
    heroTitle: "Paragony wchodzÄ…. PorzÄ…dek wychodzi.",
    heroSubtitle: "Prosty podglÄ…d tylko do odczytu dla sole traders, ktÃ³rzy sÄ… Å›wietni w pracy, ale nie zawsze w pilnowaniu paragonÃ³w.",
    accessTitle: "DostÄ™p ksiÄ™gowego",
    signedInHint: "To urzÄ…dzenie jest zalogowane dla poniÅ¼szego emaila ksiÄ™gowego.",
    signedOutHint: "Wpisz email ksiÄ™gowego. WyÅ›lemy krÃ³tki kod logowania przed pokazaniem poÅ‚Ä…czonych klientÃ³w.",
    connectedAccount: "PoÅ‚Ä…czone konto",
    email: "Email",
    nameOrPractice: "ImiÄ™ lub nazwa biura",
    accountantEmail: "Email ksiÄ™gowego",
    showConnectedClients: "PokaÅ¼ poÅ‚Ä…czonych klientÃ³w",
    openClientList: "OtwÃ³rz listÄ™ klientÃ³w",
    backToOverview: "WrÃ³Ä‡ do podglÄ…du",
    searchClients: "Szukaj klientÃ³w",
    signOut: "Wyloguj",
    sendLoginCode: "WyÅ›lij kod logowania",
    loginCode: "Kod logowania",
    verifyCode: "SprawdÅº kod",
    handoffTitle: "Zrobione pod przekazanie ksiÄ™gowemu",
    handoffText: "Klienci trzymajÄ… paragony i dowody przychodu w porzÄ…dku przez miesiÄ…c. Ty dostajesz podglÄ…d tylko do odczytu i czystÄ… paczkÄ™ do pracy.",
    clientAccess: "DostÄ™p klienta",
    readOnly: "Tylko odczyt",
    clientPermission: "Zgoda klienta",
    required: "Wymagana",
    connectedClients: "PoÅ‚Ä…czeni klienci",
    clientList: "Lista klientÃ³w",
    noClients: "Å»aden klient nie poÅ‚Ä…czyÅ‚ jeszcze tego emaila.",
    signInFirst: "Najpierw zaloguj siÄ™ kodem na email ksiÄ™gowego.",
    noTrade: "Brak zawodu",
    noEmail: "Brak emaila",
    records: "wpisÃ³w",
    howAccessWorks: "Jak dziaÅ‚a dostÄ™p",
    clientAddsEmail: "1. Klient dodaje twÃ³j email",
    consentFirst: "Najpierw zgoda",
    youSeeRecords: "2. Widzisz rekordy",
    youDownloadPack: "3. Pobierasz paczkÄ™",
    csvPdf: "CSV + PDF",
    clientRecords: "Rekordy klienta",
    showClientsFirst: "Najpierw pokaÅ¼ poÅ‚Ä…czonych klientÃ³w.",
    trade: "ZawÃ³d",
    connected: "PoÅ‚Ä…czono",
    income: "Przychody",
    expenses: "Wydatki",
    paidForClient: "Do odzyskania",
    downloadCsv: "Pobierz CSV",
    downloadPdf: "Pobierz PDF",
    requestDocs: "PoproÅ› o dokumenty",
    noRecords: "Brak rekordÃ³w.",
    expense: "Wydatek",
    proofAttached: "DowÃ³d dodany",
    proofMissing: "Brak dowodu",
    receiptPhotoAttached: "ZdjÄ™cie paragonu dodane",
    noReceiptPhoto: "Brak zdjÄ™cia paragonu",
    record: "Rekord",
    removeClient: "UsuÅ„ klienta",
    removeClientConfirm: "UsunÄ…Ä‡ tego klienta z listy ksiÄ™gowego?",
    clientRemoved: "Klient usuniÄ™ty.",
    removeNeedsBackend: "Tego poÅ‚Ä…czenia nie da siÄ™ jeszcze usunÄ…Ä‡ od strony ksiÄ™gowego. Klient moÅ¼e cofnÄ…Ä‡ dostÄ™p w ustawieniach TidGo.",
    accountantEmailInfo: "UÅ¼yj adresu email, ktÃ³ry klienci podÅ‚Ä…czajÄ… w swoich ustawieniach TidGo.",
    connectedClientsInfo: "Tutaj widaÄ‡ tylko klientÃ³w, ktÃ³rzy pozwolili temu emailowi ksiÄ™gowego na dostÄ™p.",
    requestDocsInfo: "WysyÅ‚a albo przygotowuje krÃ³tkÄ… proÅ›bÄ™, gdy brakuje dokumentu.",
    requestDocsSent: "ProÅ›ba wysÅ‚ana.",
    requestDocsCopied: "WiadomoÅ›Ä‡ skopiowana.",
    requestDocsFailed: "Email z prosba nie jest jeszcze podpiety. Wiadomosc skopiowana."
  }
};

Object.assign(ACCOUNTANT_COPY, {
  ro: {
    ...ACCOUNTANT_COPY.en,
    forAccountants: "TidGo pentru contabili",
    heroTitle: "Bonuri inauntru. Evidente ordonate afara.",
    heroSubtitle: "Un portal simplu, doar pentru citire, pentru clienti mici care vor sa tina actele pregatite.",
    accessTitle: "Acces contabil",
    signedInHint: "Acest dispozitiv este conectat pentru emailul contabilului de mai jos.",
    signedOutHint: "Introdu emailul contabilului. Trimitem un cod scurt inainte de afisarea clientilor conectati.",
    connectedAccount: "Cont conectat",
    nameOrPractice: "Nume sau firma",
    accountantEmail: "Email contabil",
    showConnectedClients: "Arata clientii conectati",
    signOut: "Deconectare",
    sendLoginCode: "Trimite codul",
    loginCode: "Cod de login",
    verifyCode: "Verifica codul",
    connectedClients: "Clienti conectati",
    clientList: "Lista clienti",
    noClients: "Niciun client nu a conectat acest email inca.",
    signInFirst: "Conecteaza-te mai intai cu codul primit pe email.",
    records: "inregistrari",
    downloadCsv: "Descarca CSV",
    downloadPdf: "Descarca PDF",
    requestDocs: "Cere documente"
  },
  uk: {
    ...ACCOUNTANT_COPY.en,
    forAccountants: "TidGo dlia bukhhalteriv",
    heroTitle: "Cheky vseredynu. Uporiadkovani zapysy nazovni.",
    heroSubtitle: "Prostyi portal lyshe dlia perehliadu, shchob klienty trymaly dokumenty hotovymy.",
    accessTitle: "Dostup bukhhaltera",
    signedInHint: "Tse prystroi uviiishov za emailom bukhhaltera nyzhche.",
    signedOutHint: "Vvedit email bukhhaltera. My nadishlemo korotkyi kod pered pokazom kliientiv.",
    connectedAccount: "Pidkliuchenyi akaunt",
    nameOrPractice: "Imia abo nazva firmy",
    accountantEmail: "Email bukhhaltera",
    showConnectedClients: "Pokazaty pidkliuchenykh kliientiv",
    signOut: "Vyity",
    sendLoginCode: "Nadislaty kod",
    loginCode: "Kod vhodu",
    verifyCode: "Pereviryty kod",
    connectedClients: "Pidkliucheni kliienty",
    clientList: "Spysok kliientiv",
    noClients: "Shche nema kliientiv dlia tsoho emaila.",
    signInFirst: "Spochatku uviydit z kodom z emaila.",
    records: "zapysiv",
    downloadCsv: "Zavantazhyty CSV",
    downloadPdf: "Zavantazhyty PDF",
    requestDocs: "Poprosyty dokumenty"
  },
  lt: {
    ...ACCOUNTANT_COPY.en,
    forAccountants: "TidGo buhalteriams",
    heroTitle: "Kvitai vidun. Tvarkingi irasai lauk.",
    heroSubtitle: "Paprastas tik skaitymo portalas, kad klientu dokumentai butu paruosti.",
    accessTitle: "Buhalterio prieiga",
    signedInHint: "Sis irenginys prijungtas prie zemiau nurodyto buhalterio el. pasto.",
    signedOutHint: "Iveskite buhalterio el. pasta. Atsiusime trumpa prisijungimo koda.",
    connectedAccount: "Prijungta paskyra",
    nameOrPractice: "Vardas arba imone",
    accountantEmail: "Buhalterio el. pastas",
    showConnectedClients: "Rodyti prijungtus klientus",
    signOut: "Atsijungti",
    sendLoginCode: "Siusti koda",
    loginCode: "Prisijungimo kodas",
    verifyCode: "Patikrinti koda",
    connectedClients: "Prijungti klientai",
    clientList: "Klientu sarasas",
    noClients: "Dar nera klientu, prijungusiu si el. pasta.",
    signInFirst: "Pirma prisijunkite su el. pasto kodu.",
    records: "irasai",
    downloadCsv: "Atsisiusti CSV",
    downloadPdf: "Atsisiusti PDF",
    requestDocs: "Prasyti dokumentu"
  },
  lv: {
    ...ACCOUNTANT_COPY.en,
    forAccountants: "TidGo gramatveziem",
    heroTitle: "Ceki ieksa. Sakartoti ieraksti ara.",
    heroSubtitle: "Vienkarss tikai lasisanas portals, lai klientu dokumenti butu gatavi.",
    accessTitle: "Gramatveza piekluve",
    signedInHint: "Si ierice ir pieslegta zemak noraditajam gramatveza e-pastam.",
    signedOutHint: "Ievadi gramatveza e-pastu. Mes nosutisim isu pieteiksanas kodu.",
    connectedAccount: "Pieslegts konts",
    nameOrPractice: "Vards vai firma",
    accountantEmail: "Gramatveza e-pasts",
    showConnectedClients: "Radit pieslegtos klientus",
    signOut: "Izrakstities",
    sendLoginCode: "Sutit kodu",
    loginCode: "Pieteiksanas kods",
    verifyCode: "Parbaudit kodu",
    connectedClients: "Pieslegtie klienti",
    clientList: "Klientu saraksts",
    noClients: "Neviens klients vel nav piesledzis so e-pastu.",
    signInFirst: "Vispirms piesledzies ar e-pasta kodu.",
    records: "ieraksti",
    downloadCsv: "Lejupieladet CSV",
    downloadPdf: "Lejupieladet PDF",
    requestDocs: "Prasit dokumentus"
  },
  es: {
    ...ACCOUNTANT_COPY.en,
    forAccountants: "TidGo para contables",
    heroTitle: "Recibos dentro. Registros ordenados fuera.",
    heroSubtitle: "Un portal sencillo de solo lectura para que los clientes mantengan sus documentos listos.",
    accessTitle: "Acceso del contable",
    signedInHint: "Este dispositivo esta conectado al email del contable mostrado abajo.",
    signedOutHint: "Introduce el email del contable. Enviaremos un codigo corto antes de mostrar clientes conectados.",
    connectedAccount: "Cuenta conectada",
    nameOrPractice: "Nombre o despacho",
    accountantEmail: "Email del contable",
    showConnectedClients: "Mostrar clientes conectados",
    signOut: "Cerrar sesion",
    sendLoginCode: "Enviar codigo",
    loginCode: "Codigo de acceso",
    verifyCode: "Verificar codigo",
    connectedClients: "Clientes conectados",
    clientList: "Lista de clientes",
    noClients: "Ningun cliente ha conectado este email todavia.",
    signInFirst: "Primero inicia sesion con el codigo enviado por email.",
    records: "registros",
    downloadCsv: "Descargar CSV",
    downloadPdf: "Descargar PDF",
    requestDocs: "Pedir documentos"
  },
  bg: {
    ...ACCOUNTANT_COPY.en,
    forAccountants: "TidGo za schetovoditeli",
    heroTitle: "Belezhki vat. Podredeni zapisi van.",
    heroSubtitle: "Prost portal samo za chetene, za da sa dokumentite na klientite gotovi.",
    accessTitle: "Dostap za schetovoditel",
    signedInHint: "Tova ustroystvo e vlyazlo s emaila na schetovoditelya po-dolu.",
    signedOutHint: "Vavedete emaila na schetovoditelya. Shte izpratim kratuk kod predi spisaka s klienti.",
    connectedAccount: "Svarzan akaunt",
    nameOrPractice: "Ime ili firma",
    accountantEmail: "Email na schetovoditel",
    showConnectedClients: "Pokazhi svarzani klienti",
    signOut: "Izlez",
    sendLoginCode: "Izprati kod",
    loginCode: "Kod za vhod",
    verifyCode: "Proveri koda",
    connectedClients: "Svarzani klienti",
    clientList: "Spisak klienti",
    noClients: "Oshte nyama klienti, svarzali tozi email.",
    signInFirst: "Parvo vlezi s koda ot emaila.",
    records: "zapisa",
    downloadCsv: "Izteglyane CSV",
    downloadPdf: "Izteglyane PDF",
    requestDocs: "Poiski dokumenti"
  }
});

Object.assign(ACCOUNTANT_COPY.ro, {
  requestDocsInfo: "Trimite sau pregateste o cerere scurta cand lipseste dovada.",
  requestDocsSent: "Cerere trimisa.",
  requestDocsCopied: "Mesaj copiat.",
  requestDocsFailed: "Emailul pentru cerere nu este conectat inca. Mesajul a fost copiat."
});

Object.assign(ACCOUNTANT_COPY.uk, {
  requestDocsInfo: "Nadsylaie abo hotuie korotkyi zapyt, koly brakuie dokaziv.",
  requestDocsSent: "Zapyt nadislano.",
  requestDocsCopied: "Povidomlennia skopiovano.",
  requestDocsFailed: "Email dlia zapytu shche ne pidkliuchenyi. Povidomlennia skopiovano."
});

Object.assign(ACCOUNTANT_COPY.lt, {
  requestDocsInfo: "Issiuncia arba paruose trumpa prasyma, kai truksta irodymo.",
  requestDocsSent: "Prasymas issiustas.",
  requestDocsCopied: "Zinute nukopijuota.",
  requestDocsFailed: "Prasymo el. pastas dar neprijungtas. Zinute nukopijuota."
});

Object.assign(ACCOUNTANT_COPY.lv, {
  requestDocsInfo: "Nosuta vai sagatavo isu pieprasijumu, ja trukst pieradijuma.",
  requestDocsSent: "Pieprasijums nosutits.",
  requestDocsCopied: "Zina nokopeta.",
  requestDocsFailed: "Pieprasijuma e-pasts vel nav pieslegts. Zina nokopeta."
});

Object.assign(ACCOUNTANT_COPY.es, {
  requestDocsInfo: "Envia o prepara una solicitud corta cuando falta prueba.",
  requestDocsSent: "Solicitud enviada.",
  requestDocsCopied: "Mensaje copiado.",
  requestDocsFailed: "El email de solicitud aun no esta conectado. Mensaje copiado."
});

Object.assign(ACCOUNTANT_COPY.bg, {
  requestDocsInfo: "Izprashta ili podgotvya kratka molba, kogato lipsva dokazatelstvo.",
  requestDocsSent: "Molbata e izpratena.",
  requestDocsCopied: "Saobshtenieto e kopirano.",
  requestDocsFailed: "Email za molbata oshte ne e svarzan. Saobshtenieto e kopirano."
});

const DOWNLOAD_COPY = {
  en: {
    title: "Quick check before download",
    userText: "TidGo helps prepare your records, but it does not verify every item on a receipt. Please check that amounts, categories and documents are accurate for your situation.",
    accountantText: "TidGo gives you a read-only pack from the client. It does not verify every item on a receipt. Please check the records before using them for accounting or submission work.",
    pdfLine: "TidGo helps organise records, but it does not verify every receipt item. Please check amounts, categories and documents before using this pack. This is a record summary, not VAT, payroll or corporation tax advice.",
    ok: "I understand, continue",
    cancel: "Cancel"
  },
  pl: {
    title: "Szybkie sprawdzenie przed pobraniem",
    userText: "TidGo pomaga przygotowaÄ‡ rekordy, ale nie sprawdza kaÅ¼dej pozycji na paragonie. SprawdÅº, czy kwoty, kategorie i dokumenty sÄ… poprawne dla Twojej sytuacji.",
    accountantText: "TidGo daje paczkÄ™ klienta tylko do odczytu. Nie sprawdza kaÅ¼dej pozycji na paragonie. SprawdÅº rekordy przed uÅ¼yciem ich do ksiÄ™gowoÅ›ci albo wysyÅ‚ki dalej.",
    pdfLine: "TidGo pomaga uporzÄ…dkowaÄ‡ rekordy, ale nie sprawdza kaÅ¼dej pozycji na paragonie. SprawdÅº kwoty, kategorie i dokumenty przed uÅ¼yciem tej paczki. To jest podsumowanie rekordÃ³w, nie porada VAT, payroll ani corporation tax.",
    ok: "Rozumiem, kontynuuj",
    cancel: "Anuluj"
  },
  ro: {
    title: "Verificare rapida inainte de descarcare",
    userText: "TidGo ajuta la pregatirea evidentelor, dar nu verifica fiecare articol de pe bon. Verifica sumele, categoriile si documentele pentru situatia ta.",
    accountantText: "TidGo iti ofera o paccheta doar pentru citire de la client. Nu verifica fiecare articol de pe bon. Verifica evidenta inainte de folosire.",
    pdfLine: "TidGo ajuta la organizarea evidentelor, dar nu verifica fiecare articol de pe bon. Verifica sumele, categoriile si documentele inainte de folosire. Acesta este un sumar de evidente, nu consultanta VAT, payroll sau corporation tax.",
    ok: "Inteleg, continua",
    cancel: "Anuleaza"
  },
  uk: {
    title: "Shvydka perevirka pered zavantazhenniam",
    userText: "TidGo dopomahaie pidhotuvaty zapysy, ale ne pereviriaie kozhen punkt u cheku. Perevirte sumy, katehorii ta dokumenty dlia svoiei sytuatsii.",
    accountantText: "TidGo nadaie read-only paket vid kliienta. Vin ne pereviriaie kozhen punkt u cheku. Perevirte zapysy pered vykorystanniam.",
    pdfLine: "TidGo dopomahaie vporiadkuvaty zapysy, ale ne pereviriaie kozhen punkt u cheku. Perevirte sumy, katehorii ta dokumenty pered vykorystanniam. This is a record summary, not VAT, payroll or corporation tax advice.",
    ok: "Rozumiiu, prodovzhyty",
    cancel: "Skasuvaty"
  },
  lt: {
    title: "Greitas patikrinimas pries atsisiuntima",
    userText: "TidGo padeda paruosti irasus, bet netikrina kiekvienos kvito eilutes. Patikrinkite sumas, kategorijas ir dokumentus pagal savo situacija.",
    accountantText: "TidGo pateikia tik skaitymo kliento paketa. Jis netikrina kiekvienos kvito eilutes. Patikrinkite irasus pries naudojima.",
    pdfLine: "TidGo padeda tvarkyti irasus, bet netikrina kiekvienos kvito eilutes. Patikrinkite sumas, kategorijas ir dokumentus pries naudojima. Tai irasu suvestine, ne VAT, payroll ar corporation tax patarimas.",
    ok: "Suprantu, testi",
    cancel: "Atsaukti"
  },
  lv: {
    title: "Atra parbaude pirms lejupielades",
    userText: "TidGo palidz sagatavot ierakstus, bet neparbauda katru ceka poziciju. Parbaudi summas, kategorijas un dokumentus savai situacijai.",
    accountantText: "TidGo dod tikai lasisanas klienta paku. Tas neparbauda katru ceka poziciju. Parbaudi ierakstus pirms lietosanas.",
    pdfLine: "TidGo palidz sakartot ierakstus, bet neparbauda katru ceka poziciju. Parbaudi summas, kategorijas un dokumentus pirms lietosanas. Sis ir ierakstu kopsavilkums, ne VAT, payroll vai corporation tax padoms.",
    ok: "Saprotu, turpinat",
    cancel: "Atcelt"
  },
  es: {
    title: "Revision rapida antes de descargar",
    userText: "TidGo ayuda a preparar tus registros, pero no verifica cada articulo de un recibo. Revisa importes, categorias y documentos para tu situacion.",
    accountantText: "TidGo ofrece un paquete de solo lectura del cliente. No verifica cada articulo de un recibo. Revisa los registros antes de usarlos.",
    pdfLine: "TidGo ayuda a organizar registros, pero no verifica cada articulo de un recibo. Revisa importes, categorias y documentos antes de usar este paquete. Es un resumen de registros, no asesoramiento de VAT, payroll o corporation tax.",
    ok: "Entiendo, continuar",
    cancel: "Cancelar"
  },
  bg: {
    title: "Barza proverka predi svalyane",
    userText: "TidGo pomaga da podgotvite zapisite, no ne proveriava vsichki pozitsii v belezhkata. Proverete sumite, kategoriite i dokumentite za vashata situatsia.",
    accountantText: "TidGo dava paket samo za chetene ot klienta. Ne proveriava vsichki pozitsii v belezhkata. Proverete zapisite predi upotreba.",
    pdfLine: "TidGo pomaga da podredite zapisite, no ne proveriava vsichki pozitsii v belezhkata. Proverete sumite, kategoriite i dokumentite predi upotreba. This is a record summary, not VAT, payroll or corporation tax advice.",
    ok: "Razbiram, prodalzhi",
    cancel: "Otkaz"
  }
};

const COPY = {
  en: {
    intro: "Receipts in. Tidy records out. Ready for your accountant.",
    chooseLanguage: "Choose language",
    firstName: "Your name or business name",
    trade: "Trade or job",
    incomeSources: "Income sources",
    incomeSourcesHint: "This helps TidGo understand your records. PAYE income is handled separately; TidGo keeps records for self-employment, CIS, landlord or side-income work. It is not VAT or LTD accounting software.",
    incomeSelfEmployed: "Self-employed",
    incomeCis: "CIS",
    incomeLandlord: "Landlord",
    incomePayeSide: "PAYE + side income",
    incomeOther: "Other",
    email: "Recovery email",
    emailHint: "Email is required for account access, recovery and email intake.",
    whatsappPhone: "WhatsApp number",
    whatsappPhoneHint: "Optional. Add it if you want to send receipt photos to TidGo by WhatsApp later.",
    whatsappConnectedTitle: "WhatsApp connected",
    whatsappConnectedText: "A WhatsApp number ending in {last3} is linked to this account.",
    changeWhatsAppNumber: "Change WhatsApp number",
    changeWhatsAppIntro: "For safety, confirm your recovery email first. You do not type the new number here; TidGo reads it from the WhatsApp message sent by the new phone.",
    changeWhatsAppEmailHint: "We will send a code to your TidGo recovery email.",
    whatsappChangeCodeHint: "Enter the email code, then you can connect the new WhatsApp number.",
    unlockWhatsAppChange: "Unlock change",
    whatsappChangeUnlocked: "Email confirmed. Open TidGo on the phone with the new WhatsApp number, then tap this button and send the ready LINK message.",
    whatsappAddOnceHint: "Add the number you want to use for sending receipts. Connect it once, then send the ready LINK message in WhatsApp.",
    connectWhatsApp: "Connect WhatsApp",
    connectWhatsAppHint: "Open WhatsApp and send the ready LINK message. TidGo will use it to connect this phone to your account.",
    connectWhatsAppFallback: "Opening WhatsApp with a basic link message. If it does not connect, try again after the next API deploy.",
    intakeTitle: "Ways to add records",
    whatsappIntakeText: "WhatsApp intake: connect your number, then send receipt photos to TidGo from WhatsApp.",
    emailIntakeLabel: "Email intake:",
    emailIntakeText: "You can also send income and expense records from the same email you use for TidGo. Forward the email or send a normal email with an attachment. Use subject income or expense if you can.",
    dragDropTitle: "Drop receipt here",
    dragDropHint: "On desktop, drag a receipt photo or screenshot into this box.",
    dropActive: "Let go to add this receipt.",
    proofDropTitle: "Drop income proof here",
    proofDropHint: "On desktop, drag a payslip, remittance note or screenshot into this box.",
    proofDropActive: "Let go to attach this proof.",
    incomeManualCheck: "Please check and enter the amount and date manually to avoid mistakes from busy documents.",
    start: "Start TidGo",
    haveAccount: "I already have an account",
    recover: "Recover account",
    sendCode: "Send code",
    code: "Email code",
    restore: "Restore",
    login: "Login",
    cookieTitle: "Cookie choice",
    cookieText: "TidGo needs essential app storage to work. Basic analytics is optional and only helps us improve the product.",
    cookieAccept: "Allow analytics",
    cookieDecline: "Essential only",
    recoveryEmail: "Email recovery",
    recoveryWhatsApp: "WhatsApp recovery",
    recoveryWhatsAppIntro: "If your WhatsApp number is already linked to TidGo, send RECOVER TIDGO to TidGo on WhatsApp. Then enter that number and the code you receive.",
    openWhatsAppRecovery: "Open WhatsApp recovery",
    whatsappRecoveryNumber: "Linked WhatsApp number",
    whatsappCode: "WhatsApp code",
    verifyWhatsAppCode: "Recover with WhatsApp code",
    changeEmailTitle: "Change recovery email",
    changeEmailHint: "Use this if you want TidGo recovery and email intake to move to a new email address.",
    newEmail: "New email",
    emailChangeCodeHint: "We will send a code to the new email before changing it.",
    requestEmailChange: "Send change code",
    verifyEmailChange: "Confirm new email",
    emailChanged: "Email changed.",
    verifyEmail: "Verify your email",
    verifyEmailHint: "We sent a 6-digit code to your email. Enter it to finish setting up TidGo on this device.",
    verifyAndStart: "Verify and start",
    agreeLegal: "I agree to TidGo's Privacy Policy and Terms.",
    sendCodeAgain: "Send code again",
    codeSent: "Code sent. Check your email.",
    codeSentIfExists: "Code sent if this email exists.",
    validAmount: "Enter a valid amount.",
    pdfLoading: "PDF tool is still loading. Try again in a few seconds.",
    pdfCreateFailed: "Could not create PDF.",
    pdfSavedNoShare: "PDF saved. Your browser cannot open phone sharing for files.",
    openPdf: "Open PDF",
    expensePdfUnsupported: "For now, expense upload needs an image or screenshot. PDF support needs backend storage.",
    hello: "Hello",
    summary: "Summaries",
    monthly: "Monthly",
    quarterly: "Quarterly",
    taxQuarterly: "UK tax quarters",
    ukTaxQuarterly: "Quarterly for UK taxpayers",
    mtdRunning: "MTD running summary",
    quarterReady: "Quarter-ready records",
    mtdRunningReady: "Running MTD record summary",
    addExpense: "Add expense",
    addIncome: "Add income",
    photoDone: "Take photo",
    expenseHint: "Take a receipt photo or upload a receipt screenshot/image.",
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
    tapToView: "Tap to view",
    rotate: "Rotate",
    pinchToZoom: "Pinch to zoom",
    cancel: "Cancel",
    photoReady: "Photo ready. Sending it to the bag.",
    subtle: "Light",
    dry: "Dry",
    serious: "Serious",
    humour: "Comment style",
    profile: "Profile",
    deleteAccount: "Delete account and all data",
    deleteWarning: "This permanently deletes profile, receipts, receipt photos and income.",
    deleteReceiptWarning: "This deletes only this receipt entry and its photo.",
    deleteIncomeWarning: "This deletes only this income entry.",
    printPdf: "Save PDF",
    emailPdf: "Send summary PDF",
    submissionHint: "On the public HTTPS app this creates a PDF and opens your phone sharing options: email, WhatsApp, Drive, Messages and more.",
    secureShareRequired: "Phone sharing with a PDF needs the public HTTPS version. Local testing over http can only use Save PDF.",
    emailBody: "TidGo monthly summary PDF",
    noEntries: "No entries",
    loadingRecords: "Loading your records...",
    note: "A tidy monthly bag. Tax and clever bits stay with the accountant.",
    businessTypeTitle: "What is this record for?",
    businessSelfEmployment: "Self-employment / CIS / side income",
    businessProperty: "UK property / landlord",
    businessCategory: "Assign to business",
    businessRecordsTitle: "Business records",
    businessRecordsHint: "UK property stays as one bucket. Add up to three self-employment/CIS businesses only if you really need separate records.",
    summaryBusinessFilter: "Summary for",
    allBusinessRecords: "All records",
    summaryBusinessHint: "All records for accountant pack. Pick one business for MTD-style totals.",
    selfEmploymentBusiness1: "Self-employment business 1",
    selfEmploymentBusiness2: "Self-employment business 2",
    selfEmploymentBusiness3: "Self-employment business 3",
    addBusiness: "Add business",
    removeBusiness: "Remove business",
    removeBusinessConfirm: "Remove this business from the active list? Existing records will not be deleted. They stay in All records until you move them to another business.",
    archivedBusiness: "Archived business",
    moveRecordHint: "Move this record to another active business if it was filed in the wrong place.",
    businessNamePlaceholder: "Business name",
    propertyIncomeHint: "For rent or other UK property income, enter the amount manually. You can attach a bank statement screenshot, PDF or transfer confirmation as proof.",
    backendDown: "Cannot reach TidGo API right now. Render may be waking up; try again in a moment.",
    serverUnavailableTitle: "TidGo is temporarily unavailable",
    serverUnavailableText: "The app on your device is fine. The TidGo server is not answering right now, probably during a deploy or restart. Please try again shortly.",
    tryAgain: "Try again",
    dateNeedsReview: "Please check this date",
    dateNeedsReviewHint: "TidGo was not fully confident about the receipt date. Edit it here before using this record.",
    installHint: "On iPhone: Share, then Add to Home Screen.",
    seeAll: "See all",
    seeMore: "See more",
    showLess: "Show less",
    food: "Food",
    fuel: "Fuel",
    tools: "Tools",
    transport: "Transport",
    other: "Other"
  },
  pl: {
    intro: "Paragony wchodzÄ…. PorzÄ…dne rekordy wychodzÄ…. Gotowe dla ksiÄ™gowego.",
    chooseLanguage: "Wybierz jÄ™zyk",
    firstName: "ImiÄ™, nazwisko albo nazwa firmy",
    trade: "ZawÃ³d",
    incomeSources: "Å¹rÃ³dÅ‚a przychodu",
    incomeSourcesHint: "To pomaga TidGo zrozumieÄ‡ Twoje rekordy. DochÃ³d PAYE jest rozliczany osobno; TidGo trzyma rekordy dla self-employment, CIS, landlord albo dodatkowej pracy. To nie jest software do VAT ani ksiÄ™gowoÅ›ci LTD.",
    incomeSelfEmployed: "Self-employed",
    incomeCis: "CIS",
    incomeLandlord: "Landlord",
    incomePayeSide: "PAYE + dodatkowy dochÃ³d",
    incomeOther: "Inne",
    email: "Email do odzyskania",
    emailHint: "Email jest wymagany do dostÄ™pu do konta, odzyskiwania i email intake.",
    whatsappPhone: "Numer WhatsApp",
    whatsappPhoneHint: "Opcjonalnie. Dodaj go, jeÅ›li pÃ³Åºniej chcesz wysyÅ‚aÄ‡ zdjÄ™cia paragonÃ³w do TidGo przez WhatsApp.",
    whatsappConnectedTitle: "WhatsApp poÅ‚Ä…czony",
    whatsappConnectedText: "Numer WhatsApp zakoÅ„czony na {last3} jest przypisany do tego konta.",
    changeWhatsAppNumber: "ZmieÅ„ numer WhatsApp",
    changeWhatsAppIntro: "Dla bezpieczeÅ„stwa najpierw potwierdÅº email odzyskiwania. Nie wpisujesz tutaj nowego numeru; TidGo odczyta go z wiadomoÅ›ci WhatsApp wysÅ‚anej z nowego telefonu.",
    changeWhatsAppEmailHint: "WyÅ›lemy kod na email odzyskiwania TidGo.",
    whatsappChangeCodeHint: "Wpisz kod z emaila, potem moÅ¼esz poÅ‚Ä…czyÄ‡ nowy numer WhatsApp.",
    unlockWhatsAppChange: "Odblokuj zmianÄ™",
    whatsappChangeUnlocked: "Email potwierdzony. OtwÃ³rz TidGo na telefonie z nowym numerem WhatsApp, potem kliknij ten przycisk i wyÅ›lij gotowÄ… wiadomoÅ›Ä‡ LINK.",
    whatsappAddOnceHint: "Dodaj numer, z ktÃ³rego chcesz wysyÅ‚aÄ‡ paragony. PoÅ‚Ä…cz go raz, potem wyÅ›lij gotowÄ… wiadomoÅ›Ä‡ LINK w WhatsAppie.",
    connectWhatsApp: "PoÅ‚Ä…cz WhatsApp",
    connectWhatsAppHint: "OtwÃ³rz WhatsApp i wyÅ›lij gotowÄ… wiadomoÅ›Ä‡ LINK. TidGo uÅ¼yje jej, Å¼eby poÅ‚Ä…czyÄ‡ ten telefon z kontem.",
    connectWhatsAppFallback: "Otwieram WhatsApp z podstawowÄ… wiadomoÅ›ciÄ… LINK. JeÅ›li nie poÅ‚Ä…czy, sprÃ³buj po nastÄ™pnym deployu API.",
    intakeTitle: "Sposoby dodawania rekordÃ³w",
    whatsappIntakeText: "WhatsApp intake: poÅ‚Ä…cz numer, potem wysyÅ‚aj zdjÄ™cia paragonÃ³w do TidGo z WhatsAppa.",
    emailIntakeLabel: "Email intake:",
    emailIntakeText: "MoÅ¼esz teÅ¼ wysyÅ‚aÄ‡ rekordy income i expense z tego samego emaila, ktÃ³rego uÅ¼ywasz w TidGo. PrzeÅ›lij mail dalej albo wyÅ›lij zwykÅ‚y email z zaÅ‚Ä…cznikiem. W temacie wpisz income albo expense, jeÅ›li moÅ¼esz.",
    dragDropTitle: "UpuÅ›Ä‡ paragon tutaj",
    dragDropHint: "Na komputerze przeciÄ…gnij zdjÄ™cie paragonu albo screenshot do tego pola.",
    dropActive: "PuÅ›Ä‡, Å¼eby dodaÄ‡ ten paragon.",
    proofDropTitle: "UpuÅ›Ä‡ dowÃ³d przychodu tutaj",
    proofDropHint: "Na komputerze przeciÄ…gnij payslip, remittance note albo screenshot do tego pola.",
    proofDropActive: "PuÅ›Ä‡, Å¼eby dodaÄ‡ ten dowÃ³d.",
    incomeManualCheck: "SprawdÅº i wpisz kwotÄ™ oraz datÄ™ rÄ™cznie, Å¼eby uniknÄ…Ä‡ pomyÅ‚ek z dokumentÃ³w peÅ‚nych rÃ³Å¼nych liczb.",
    start: "Start",
    haveAccount: "Mam juÅ¼ konto",
    recover: "Odzyskaj konto",
    sendCode: "WyÅ›lij kod",
    code: "Kod z emaila",
    restore: "Odzyskaj",
    login: "Login",
    cookieTitle: "Zgoda cookies",
    cookieText: "TidGo potrzebuje podstawowego zapisu danych, Å¼eby aplikacja dziaÅ‚aÅ‚a. Podstawowa analityka jest opcjonalna i pomaga nam ulepszaÄ‡ produkt.",
    cookieAccept: "Zgadzam siÄ™ na analitykÄ™",
    cookieDecline: "Tylko niezbÄ™dne",
    recoveryEmail: "Odzyskiwanie emailem",
    recoveryWhatsApp: "Odzyskiwanie przez WhatsApp",
    recoveryWhatsAppIntro: "JeÅ›li numer WhatsApp jest juÅ¼ poÅ‚Ä…czony z TidGo, wyÅ›lij RECOVER TIDGO do TidGo na WhatsAppie. Potem wpisz ten numer i kod, ktÃ³ry otrzymasz.",
    openWhatsAppRecovery: "OtwÃ³rz odzyskiwanie WhatsApp",
    whatsappRecoveryNumber: "PoÅ‚Ä…czony numer WhatsApp",
    whatsappCode: "Kod z WhatsAppa",
    verifyWhatsAppCode: "Odzyskaj kodem WhatsApp",
    changeEmailTitle: "ZmieÅ„ email odzyskiwania",
    changeEmailHint: "UÅ¼yj tego, jeÅ›li chcesz przenieÅ›Ä‡ odzyskiwanie konta i email intake na nowy adres email.",
    newEmail: "Nowy email",
    emailChangeCodeHint: "WyÅ›lemy kod na nowy email zanim go zmienimy.",
    requestEmailChange: "WyÅ›lij kod zmiany",
    verifyEmailChange: "PotwierdÅº nowy email",
    emailChanged: "Email zmieniony.",
    verifyEmail: "PotwierdÅº email",
    verifyEmailHint: "WysÅ‚aliÅ›my 6-cyfrowy kod na twÃ³j email. Wpisz go, Å¼eby dokoÅ„czyÄ‡ start TidGo na tym urzÄ…dzeniu.",
    verifyAndStart: "PotwierdÅº i start",
    agreeLegal: "Zgadzam siÄ™ z PolitykÄ… prywatnoÅ›ci i Regulaminem TidGo.",
    sendCodeAgain: "WyÅ›lij kod ponownie",
    codeSent: "Kod wysÅ‚any. SprawdÅº email.",
    codeSentIfExists: "Kod wysÅ‚any, jeÅ›li ten email istnieje.",
    validAmount: "Wpisz poprawnÄ… kwotÄ™.",
    pdfLoading: "NarzÄ™dzie PDF jeszcze siÄ™ Å‚aduje. SprÃ³buj za kilka sekund.",
    pdfCreateFailed: "Nie udaÅ‚o siÄ™ utworzyÄ‡ PDF.",
    pdfSavedNoShare: "PDF zapisany. Ta przeglÄ…darka nie moÅ¼e otworzyÄ‡ udostÄ™pniania plikÃ³w.",
    openPdf: "OtwÃ³rz PDF",
    expensePdfUnsupported: "Na razie wydatek wymaga zdjÄ™cia albo screenshota. PDF wymaga jeszcze backend storage.",
    hello: "CzeÅ›Ä‡",
    summary: "Podsumowania",
    monthly: "MiesiÄ™czne",
    quarterly: "Kwartalne",
    taxQuarterly: "KwartaÅ‚y UK tax",
    ukTaxQuarterly: "Kwartalnie dla podatnikÃ³w UK",
    quarterReady: "Rekordy gotowe kwartalnie",
    addExpense: "Dodaj wydatek",
    addIncome: "Dodaj przychÃ³d",
    photoDone: "ZrÃ³b zdjÄ™cie",
    expenseHint: "ZrÃ³b zdjÄ™cie paragonu albo wgraj screenshot/obraz paragonu.",
    amountNote: "Kwota i opis",
    paidForClient: "ZapÅ‚acone za klienta",
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
    delete: "UsuÅ„",
    edit: "Edytuj",
    close: "Zamknij",
    tapToView: "Tapnij, Å¼eby zobaczyÄ‡",
    rotate: "ObrÃ³Ä‡",
    pinchToZoom: "Zoom palcami",
    cancel: "Anuluj",
    photoReady: "Fotka gotowa. WysyÅ‚am do reklamÃ³wki.",
    subtle: "Lekki",
    dry: "Suchy",
    serious: "PowaÅ¼ny",
    humour: "Styl komentarza",
    profile: "Profil",
    deleteAccount: "UsuÅ„ konto i wszystkie dane",
    deleteWarning: "To trwale usunie profil, paragony, zdjÄ™cia paragonÃ³w i przychody.",
    deleteReceiptWarning: "To usunie tylko ten paragon i jego zdjÄ™cie.",
    deleteIncomeWarning: "To usunie tylko ten wpis przychodu.",
    printPdf: "Zapisz PDF",
    emailPdf: "WyÅ›lij summary PDF",
    submissionHint: "W publicznej wersji HTTPS tworzy PDF i otwiera opcje telefonu: email, WhatsApp, Drive, SMS i inne.",
    secureShareRequired: "WysyÅ‚anie PDF przez opcje telefonu wymaga publicznej wersji HTTPS. Lokalnie przez http dziaÅ‚a tylko Zapisz PDF.",
    emailBody: "MiesiÄ™czne podsumowanie TidGo PDF",
    noEntries: "Brak wpisÃ³w",
    loadingRecords: "ÅadujÄ™ rekordy...",
    note: "PorzÄ…dna miesiÄ™czna reklamÃ³wka. Podatki i mÄ…dre sztuczki zostajÄ… dla ksiÄ™gowego.",
    businessTypeTitle: "Czego dotyczy ten wpis?",
    businessSelfEmployment: "Self-employment / CIS / side income",
    businessProperty: "UK property / landlord",
    businessCategory: "Przypisz do biznesu",
    summaryBusinessFilter: "Podsumowanie dla",
    allBusinessRecords: "Wszystkie rekordy",
    summaryBusinessHint: "Wszystkie rekordy dla ksiegowego. Jeden biznes dla liczb pod MTD.",
    addBusiness: "Dodaj biznes",
    removeBusiness: "UsuÅ„ biznes",
    removeBusinessConfirm: "UsunÄ…Ä‡ ten biznes z aktywnej listy? IstniejÄ…ce rekordy nie zostanÄ… usuniÄ™te. ZostanÄ… w Wszystkie rekordy, dopÃ³ki nie przeniesiesz ich do innego biznesu.",
    archivedBusiness: "Archiwalny biznes",
    moveRecordHint: "PrzenieÅ› ten rekord do innego aktywnego biznesu, jeÅ›li trafiÅ‚ w zÅ‚e miejsce.",
    backendDown: "Nie mogÄ™ teraz poÅ‚Ä…czyÄ‡ siÄ™ z API TidGo. Render moÅ¼e siÄ™ budziÄ‡; sprÃ³buj za moment.",
    serverUnavailableTitle: "TidGo jest chwilowo niedostÄ™pne",
    serverUnavailableText: "Aplikacja na tym urzÄ…dzeniu jest w porzÄ…dku. Serwer TidGo teraz nie odpowiada, prawdopodobnie przez deploy albo restart. SprÃ³buj ponownie za chwilÄ™.",
    tryAgain: "SprÃ³buj ponownie",
    dateNeedsReview: "SprawdÅº datÄ™",
    dateNeedsReviewHint: "TidGo nie ma peÅ‚nej pewnoÅ›ci co do daty z paragonu. Popraw jÄ… tutaj przed uÅ¼yciem rekordu.",
    installHint: "Na iPhonie: UdostÄ™pnij, potem Dodaj do ekranu poczÄ…tkowego.",
    seeAll: "PokaÅ¼ wszystkie",
    seeMore: "PokaÅ¼ wiÄ™cej",
    showLess: "PokaÅ¼ mniej",
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
    firstName: "Nume sau numele firmei",
    trade: "Meserie",
    email: "Email de recuperare",
    emailHint: "Emailul este necesar pentru acces la cont, recuperare si email intake.",
    start: "Porneste TidGo",
    haveAccount: "Am deja cont",
    recover: "Recupereaza contul",
    sendCode: "Trimite codul",
    code: "Cod email",
    restore: "Recupereaza",
    hello: "Salut",
    summary: "Rezumat lunar",
    monthly: "Lunar",
    quarterly: "Trimestrial",
    quarterReady: "Evidente gata pe trimestru",
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
    seeMore: "Vezi mai multe",
    showLess: "Arata mai putin",
    food: "Mancare",
    fuel: "Combustibil",
    tools: "Unelte",
    transport: "Transport",
    other: "Altele"
  },
  uk: {
    ...COPY.en,
    intro: "Ð¤Ð¾Ñ‚Ð¾ Ñ‡ÐµÐºÐ° Ð²ÑÐµÑ€ÐµÐ´Ð¸Ð½Ñƒ, Ð¼Ñ–ÑÑÑ‡Ð½Ð¸Ð¹ Ð¿Ñ–Ð´ÑÑƒÐ¼Ð¾Ðº Ð½Ð°Ð·Ð¾Ð²Ð½Ñ–. Ð‘ÐµÐ· Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€ÑÑŒÐºÐ¾Ð³Ð¾ Ñ…Ð°Ð¾ÑÑƒ.",
    chooseLanguage: "ÐžÐ±ÐµÑ€Ñ–Ñ‚ÑŒ Ð¼Ð¾Ð²Ñƒ",
    firstName: "Ð†Ð¼'Ñ Ð°Ð±Ð¾ Ð½Ð°Ð·Ð²Ð° Ð±Ñ–Ð·Ð½ÐµÑÑƒ",
    trade: "ÐŸÑ€Ð¾Ñ„ÐµÑÑ–Ñ",
    email: "Email Ð´Ð»Ñ Ð²Ñ–Ð´Ð½Ð¾Ð²Ð»ÐµÐ½Ð½Ñ",
    emailHint: "Email Ð¿Ð¾Ñ‚Ñ€Ñ–Ð±ÐµÐ½ Ð´Ð»Ñ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ñƒ Ð´Ð¾ Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð°, Ð²Ñ–Ð´Ð½Ð¾Ð²Ð»ÐµÐ½Ð½Ñ Ñ‚Ð° email intake.",
    start: "Ð—Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚Ð¸ TidGo",
    haveAccount: "Ð£ Ð¼ÐµÐ½Ðµ Ð²Ð¶Ðµ Ñ” Ð°ÐºÐ°ÑƒÐ½Ñ‚",
    recover: "Ð’Ñ–Ð´Ð½Ð¾Ð²Ð¸Ñ‚Ð¸ Ð°ÐºÐ°ÑƒÐ½Ñ‚",
    sendCode: "ÐÐ°Ð´Ñ–ÑÐ»Ð°Ñ‚Ð¸ ÐºÐ¾Ð´",
    code: "ÐšÐ¾Ð´ Ð· email",
    restore: "Ð’Ñ–Ð´Ð½Ð¾Ð²Ð¸Ñ‚Ð¸",
    hello: "ÐŸÑ€Ð¸Ð²Ñ–Ñ‚",
    summary: "ÐŸÑ–Ð´ÑÑƒÐ¼Ð¾Ðº Ð¼Ñ–ÑÑÑ†Ñ",
    monthly: "ÐœÑ–ÑÑÑ‡Ð½Ð¾",
    quarterly: "ÐšÐ²Ð°Ñ€Ñ‚Ð°Ð»ÑŒÐ½Ð¾",
    quarterReady: "Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð³Ð¾Ñ‚Ð¾Ð²Ñ– Ð´Ð¾ ÐºÐ²Ð°Ñ€Ñ‚Ð°Ð»Ñƒ",
    addExpense: "Ð”Ð¾Ð´Ð°Ñ‚Ð¸ Ð²Ð¸Ñ‚Ñ€Ð°Ñ‚Ñƒ",
    addIncome: "Ð”Ð¾Ð´Ð°Ñ‚Ð¸ Ð´Ð¾Ñ…Ñ–Ð´",
    photoDone: "Ð¤Ð¾Ñ‚Ð¾ Ð³Ð¾Ñ‚Ð¾Ð²Ðµ",
    amountNote: "Ð¡ÑƒÐ¼Ð° Ñ– Ð¾Ð¿Ð¸Ñ",
    paidForClient: "Ð¡Ð¿Ð»Ð°Ñ‡ÐµÐ½Ð¾ Ð·Ð° ÐºÐ»Ñ–Ñ”Ð½Ñ‚Ð°",
    settings: "ÐÐ°Ð»Ð°ÑˆÑ‚ÑƒÐ²Ð°Ð½Ð½Ñ",
    income: "Ð”Ð¾Ñ…Ð¾Ð´Ð¸",
    expenses: "Ð’Ð¸Ñ‚Ñ€Ð°Ñ‚Ð¸",
    client: "Ð”Ð¾ Ð¿Ð¾Ð²ÐµÑ€Ð½ÐµÐ½Ð½Ñ",
    unknown: "ÐÐµÐ²Ñ–Ð´Ð¾Ð¼Ð¾",
    empty: "Ð§ÐµÐºÑ–Ð² Ñ‰Ðµ Ð½ÐµÐ¼Ð°Ñ”. Ð—Ñ€Ð¾Ð±Ñ–Ñ‚ÑŒ Ð¿ÐµÑ€ÑˆÐµ Ñ„Ð¾Ñ‚Ð¾.",
    amount: "Ð¡ÑƒÐ¼Ð°",
    currency: "Ð’Ð°Ð»ÑŽÑ‚Ð°",
    merchant: "ÐœÐ°Ð³Ð°Ð·Ð¸Ð½",
    category: "ÐšÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ñ–Ñ",
    description: "ÐžÐ¿Ð¸Ñ",
    date: "Ð”Ð°Ñ‚Ð°",
    save: "Ð—Ð±ÐµÑ€ÐµÐ³Ñ‚Ð¸",
    saved: "Ð—Ð±ÐµÑ€ÐµÐ¶ÐµÐ½Ð¾.",
    delete: "Ð’Ð¸Ð´Ð°Ð»Ð¸Ñ‚Ð¸",
    cancel: "Ð¡ÐºÐ°ÑÑƒÐ²Ð°Ñ‚Ð¸",
    photoReady: "Ð¤Ð¾Ñ‚Ð¾ Ð³Ð¾Ñ‚Ð¾Ð²Ðµ. ÐÐ°Ð´ÑÐ¸Ð»Ð°ÑŽ Ð² Ð·Ð°ÑÑ‚Ð¾ÑÑƒÐ½Ð¾Ðº.",
    subtle: "Ð›ÐµÐ³ÐºÐ¸Ð¹",
    dry: "Ð¡ÑƒÑ…Ð¸Ð¹",
    serious: "Ð¡ÐµÑ€Ð¹Ð¾Ð·Ð½Ð¸Ð¹",
    humour: "Ð¡Ñ‚Ð¸Ð»ÑŒ ÐºÐ¾Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ñ",
    profile: "ÐŸÑ€Ð¾Ñ„Ñ–Ð»ÑŒ",
    deleteAccount: "Ð’Ð¸Ð´Ð°Ð»Ð¸Ñ‚Ð¸ Ð°ÐºÐ°ÑƒÐ½Ñ‚ Ñ– Ð²ÑÑ– Ð´Ð°Ð½Ñ–",
    deleteWarning: "ÐÐ°Ð·Ð°Ð²Ð¶Ð´Ð¸ Ð²Ð¸Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¾Ñ„Ñ–Ð»ÑŒ, Ñ‡ÐµÐºÐ¸, Ñ„Ð¾Ñ‚Ð¾ Ñ– Ð´Ð¾Ñ…Ð¾Ð´Ð¸.",
    printPdf: "Ð—Ð±ÐµÑ€ÐµÐ³Ñ‚Ð¸ PDF",
    emailPdf: "ÐÐ°Ð´Ñ–ÑÐ»Ð°Ñ‚Ð¸ summary PDF",
    submissionHint: "Ð£ Ð¿ÑƒÐ±Ð»Ñ–Ñ‡Ð½Ñ–Ð¹ HTTPS-Ð²ÐµÑ€ÑÑ–Ñ— ÑÑ‚Ð²Ð¾Ñ€ÑŽÑ” PDF Ñ– Ð²Ñ–Ð´ÐºÑ€Ð¸Ð²Ð°Ñ” Ð²Ð°Ñ€Ñ–Ð°Ð½Ñ‚Ð¸ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ñƒ: email, WhatsApp, Drive, Ð¿Ð¾Ð²Ñ–Ð´Ð¾Ð¼Ð»ÐµÐ½Ð½Ñ Ñ‚Ð¾Ñ‰Ð¾.",
    secureShareRequired: "ÐÐ°Ð´ÑÐ¸Ð»Ð°Ð½Ð½Ñ PDF Ð¿Ð¾Ñ‚Ñ€ÐµÐ±ÑƒÑ” Ð¿ÑƒÐ±Ð»Ñ–Ñ‡Ð½Ð¾Ñ— HTTPS-Ð²ÐµÑ€ÑÑ–Ñ—. Ð›Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¾ Ñ‡ÐµÑ€ÐµÐ· http Ð¿Ñ€Ð°Ñ†ÑŽÑ” Ð»Ð¸ÑˆÐµ Ð—Ð±ÐµÑ€ÐµÐ³Ñ‚Ð¸ PDF.",
    emailBody: "ÐœÑ–ÑÑÑ‡Ð½Ð¸Ð¹ Ð¿Ñ–Ð´ÑÑƒÐ¼Ð¾Ðº TidGo PDF",
    noEntries: "ÐÐµÐ¼Ð°Ñ” Ð·Ð°Ð¿Ð¸ÑÑ–Ð²",
    note: "ÐÐºÑƒÑ€Ð°Ñ‚Ð½Ð¸Ð¹ Ð¼Ñ–ÑÑÑ‡Ð½Ð¸Ð¹ Ð¿Ñ–Ð´ÑÑƒÐ¼Ð¾Ðº. ÐŸÐ¾Ð´Ð°Ñ‚ÐºÐ¸ Ð·Ð°Ð»Ð¸ÑˆÐ°Ñ”Ð¼Ð¾ ÑÐ¿Ñ€Ð°Ð²Ð¶Ð½ÑŒÐ¾Ð¼Ñƒ Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€Ñƒ.",
    installHint: "ÐÐ° iPhone: Share, Ð¿Ð¾Ñ‚Ñ–Ð¼ Add to Home Screen.",
    seeAll: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚Ð¸ Ð²ÑÑ–",
    seeMore: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚Ð¸ Ð±Ñ–Ð»ÑŒÑˆÐµ",
    showLess: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚Ð¸ Ð¼ÐµÐ½ÑˆÐµ",
    food: "Ð‡Ð¶Ð°",
    fuel: "ÐŸÐ°Ð»ÑŒÐ½Ðµ",
    tools: "Ð†Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð¸",
    transport: "Ð¢Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚",
    other: "Ð†Ð½ÑˆÐµ"
  },
  lt: {
    ...COPY.en,
    intro: "Kvito nuotrauka Ä¯eina, mÄ—nesio suvestinÄ— iÅ¡eina. Be buhalterinio chaoso.",
    chooseLanguage: "Pasirinkite kalbÄ…",
    firstName: "Vardas arba verslo pavadinimas",
    trade: "Profesija",
    email: "AtkÅ«rimo el. paÅ¡tas",
    emailHint: "El. paÅ¡tas reikalingas paskyros prieigai, atkÅ«rimui ir email intake.",
    start: "PradÄ—ti TidGo",
    haveAccount: "Jau turiu paskyrÄ…",
    recover: "Atkurti paskyrÄ…",
    sendCode: "SiÅ³sti kodÄ…",
    code: "Kodas iÅ¡ el. paÅ¡to",
    restore: "Atkurti",
    hello: "Sveiki",
    summary: "MÄ—nesio suvestinÄ—",
    monthly: "Menesio",
    quarterly: "Ketvircio",
    quarterReady: "Ketvirciui paruosti irasai",
    addExpense: "PridÄ—ti iÅ¡laidÄ…",
    addIncome: "PridÄ—ti pajamas",
    photoDone: "Nuotrauka paruoÅ¡ta",
    amountNote: "Suma ir apraÅ¡as",
    paidForClient: "SumokÄ—ta uÅ¾ klientÄ…",
    settings: "Nustatymai",
    income: "Pajamos",
    expenses: "IÅ¡laidos",
    client: "SusigrÄ…Å¾inti",
    unknown: "NeÅ¾inoma",
    empty: "KvitÅ³ dar nÄ—ra. Padarykite pirmÄ… nuotraukÄ….",
    amount: "Suma",
    currency: "Valiuta",
    merchant: "ParduotuvÄ—",
    category: "Kategorija",
    description: "ApraÅ¡as",
    date: "Data",
    save: "IÅ¡saugoti",
    saved: "IÅ¡saugota.",
    delete: "IÅ¡trinti",
    cancel: "AtÅ¡aukti",
    photoReady: "Nuotrauka paruoÅ¡ta. SiunÄiu Ä¯ programÄ….",
    subtle: "Lengvas",
    dry: "Sausas",
    serious: "Rimtas",
    humour: "Komentaro stilius",
    profile: "Profilis",
    deleteAccount: "IÅ¡trinti paskyrÄ… ir visus duomenis",
    deleteWarning: "Visam laikui iÅ¡trina profilÄ¯, kvitus, nuotraukas ir pajamas.",
    printPdf: "IÅ¡saugoti PDF",
    emailPdf: "SiÅ³sti summary PDF",
    submissionHint: "VieÅ¡oje HTTPS versijoje sukuria PDF ir atidaro telefono bendrinimÄ…: email, WhatsApp, Drive, Å¾inutÄ—s ir kt.",
    secureShareRequired: "PDF bendrinimui reikia vieÅ¡os HTTPS versijos. Lokaliai per http veikia tik IÅ¡saugoti PDF.",
    emailBody: "TidGo mÄ—nesio suvestinÄ— PDF",
    noEntries: "Ä®raÅ¡Å³ nÄ—ra",
    note: "Tvarkinga mÄ—nesio suvestinÄ—. MokesÄius paliekame tikram buhalteriui.",
    installHint: "iPhone: Share, tada Add to Home Screen.",
    seeAll: "Rodyti visus",
    seeMore: "Rodyti daugiau",
    showLess: "Rodyti maÅ¾iau",
    food: "Maistas",
    fuel: "Kuras",
    tools: "Ä®rankiai",
    transport: "Transportas",
    other: "Kita"
  },
  lv: {
    ...COPY.en,
    intro: "ÄŒeka foto iekÅ¡Ä, mÄ“neÅ¡a kopsavilkums ÄrÄ. Bez grÄmatvedÄ«bas haosa.",
    chooseLanguage: "IzvÄ“lieties valodu",
    firstName: "VÄrds vai uzÅ†Ä“muma nosaukums",
    trade: "Profesija",
    email: "AtjaunoÅ¡anas e-pasts",
    emailHint: "E-pasts ir vajadzÄ«gs konta piekÄ¼uvei, atjaunoÅ¡anai un email intake.",
    start: "SÄkt TidGo",
    haveAccount: "Man jau ir konts",
    recover: "Atjaunot kontu",
    sendCode: "SÅ«tÄ«t kodu",
    code: "E-pasta kods",
    restore: "Atjaunot",
    hello: "Sveiki",
    summary: "MÄ“neÅ¡a kopsavilkums",
    monthly: "Menesa",
    quarterly: "Ceturksna",
    quarterReady: "Ceturksnim gatavi ieraksti",
    addExpense: "Pievienot izdevumu",
    addIncome: "Pievienot ienÄkumu",
    photoDone: "Foto gatavs",
    amountNote: "Summa un piezÄ«me",
    paidForClient: "SamaksÄts par klientu",
    settings: "IestatÄ«jumi",
    income: "IenÄkumi",
    expenses: "Izdevumi",
    client: "JÄatgÅ«st",
    unknown: "NezinÄms",
    empty: "ÄŒeku vÄ“l nav. UzÅ†emiet pirmo foto.",
    amount: "Summa",
    currency: "ValÅ«ta",
    merchant: "Veikals",
    category: "Kategorija",
    description: "Apraksts",
    date: "Datums",
    save: "SaglabÄt",
    saved: "SaglabÄts.",
    delete: "DzÄ“st",
    cancel: "Atcelt",
    photoReady: "Foto gatavs. SÅ«tu uz lietotni.",
    subtle: "Viegls",
    dry: "Sauss",
    serious: "Nopietns",
    humour: "KomentÄra stils",
    profile: "Profils",
    deleteAccount: "DzÄ“st kontu un visus datus",
    deleteWarning: "Neatgriezeniski dzÄ“Å¡ profilu, Äekus, foto un ienÄkumus.",
    printPdf: "SaglabÄt PDF",
    emailPdf: "SÅ«tÄ«t summary PDF",
    submissionHint: "PubliskajÄ HTTPS versijÄ izveido PDF un atver tÄlruÅ†a kopÄ«goÅ¡anu: email, WhatsApp, Drive, ziÅ†as u.c.",
    secureShareRequired: "PDF kopÄ«goÅ¡anai vajag publisko HTTPS versiju. LokÄli caur http darbojas tikai SaglabÄt PDF.",
    emailBody: "TidGo mÄ“neÅ¡a kopsavilkums PDF",
    noEntries: "Nav ierakstu",
    note: "KÄrtÄ«gs mÄ“neÅ¡a kopsavilkums. NodokÄ¼us atstÄjam Ä«stam grÄmatvedim.",
    installHint: "iPhone: Share, tad Add to Home Screen.",
    seeAll: "RÄdÄ«t visus",
    seeMore: "RÄdÄ«t vairÄk",
    showLess: "RÄdÄ«t mazÄk",
    food: "PÄrtika",
    fuel: "Degviela",
    tools: "Instrumenti",
    transport: "Transports",
    other: "Cits"
  },
  es: {
    ...COPY.en,
    intro: "Foto del recibo dentro, resumen mensual fuera. Sin caos contable.",
    chooseLanguage: "Elige idioma",
    firstName: "Nombre o nombre del negocio",
    trade: "Oficio",
    email: "Email de recuperaciÃ³n",
    emailHint: "El email es necesario para acceder a la cuenta, recuperarla y usar email intake.",
    start: "Empezar TidGo",
    haveAccount: "Ya tengo cuenta",
    recover: "Recuperar cuenta",
    sendCode: "Enviar cÃ³digo",
    code: "CÃ³digo de email",
    restore: "Recuperar",
    hello: "Hola",
    summary: "Resumen mensual",
    monthly: "Mensual",
    quarterly: "Trimestral",
    quarterReady: "Registros listos por trimestre",
    addExpense: "AÃ±adir gasto",
    addIncome: "AÃ±adir ingreso",
    photoDone: "Foto lista",
    amountNote: "Importe y nota",
    paidForClient: "Pagado por cliente",
    settings: "Ajustes",
    income: "Ingresos",
    expenses: "Gastos",
    client: "Por recuperar",
    unknown: "Desconocido",
    empty: "TodavÃ­a no hay recibos. Haz la primera foto.",
    amount: "Importe",
    currency: "Moneda",
    merchant: "Tienda",
    category: "CategorÃ­a",
    description: "DescripciÃ³n",
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
    submissionHint: "En la versiÃ³n pÃºblica HTTPS crea un PDF y abre las opciones del telÃ©fono: email, WhatsApp, Drive, mensajes y mÃ¡s.",
    secureShareRequired: "Compartir PDF necesita la versiÃ³n pÃºblica HTTPS. En local por http solo funciona Guardar PDF.",
    emailBody: "Resumen mensual TidGo PDF",
    noEntries: "Sin entradas",
    note: "Un resumen mensual ordenado. Los impuestos se quedan con el contable real.",
    installHint: "En iPhone: Share, luego Add to Home Screen.",
    seeAll: "Ver todo",
    seeMore: "Ver mÃ¡s",
    showLess: "Ver menos",
    food: "Comida",
    fuel: "Combustible",
    tools: "Herramientas",
    transport: "Transporte",
    other: "Otros"
  },
  bg: {
    ...COPY.en,
    intro: "Ð¡Ð½Ð¸Ð¼ÐºÐ° Ð½Ð° Ð±ÐµÐ»ÐµÐ¶ÐºÐ°Ñ‚Ð° Ð²Ð»Ð¸Ð·Ð°, Ð¼ÐµÑÐµÑ‡Ð½Ð¾Ñ‚Ð¾ Ð¾Ð±Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ Ð¸Ð·Ð»Ð¸Ð·Ð°. Ð‘ÐµÐ· ÑÑ‡ÐµÑ‚Ð¾Ð²Ð¾Ð´ÐµÐ½ Ñ…Ð°Ð¾Ñ.",
    chooseLanguage: "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ ÐµÐ·Ð¸Ðº",
    firstName: "Ð˜Ð¼Ðµ Ð¸Ð»Ð¸ Ð¸Ð¼Ðµ Ð½Ð° Ð±Ð¸Ð·Ð½ÐµÑÐ°",
    trade: "ÐŸÑ€Ð¾Ñ„ÐµÑÐ¸Ñ",
    email: "Email Ð·Ð° Ð²ÑŠÐ·ÑÑ‚Ð°Ð½Ð¾Ð²ÑÐ²Ð°Ð½Ðµ",
    emailHint: "Email Ðµ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼ Ð·Ð° Ð´Ð¾ÑÑ‚ÑŠÐ¿ Ð´Ð¾ Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð°, Ð²ÑŠÐ·ÑÑ‚Ð°Ð½Ð¾Ð²ÑÐ²Ð°Ð½Ðµ Ð¸ email intake.",
    start: "Ð¡Ñ‚Ð°Ñ€Ñ‚Ð¸Ñ€Ð°Ð¹ TidGo",
    haveAccount: "Ð’ÐµÑ‡Ðµ Ð¸Ð¼Ð°Ð¼ Ð°ÐºÐ°ÑƒÐ½Ñ‚",
    recover: "Ð’ÑŠÐ·ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸ Ð°ÐºÐ°ÑƒÐ½Ñ‚",
    sendCode: "Ð˜Ð·Ð¿Ñ€Ð°Ñ‚Ð¸ ÐºÐ¾Ð´",
    code: "ÐšÐ¾Ð´ Ð¾Ñ‚ email",
    restore: "Ð’ÑŠÐ·ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸",
    hello: "Ð—Ð´Ñ€Ð°Ð²ÐµÐ¹Ñ‚Ðµ",
    summary: "ÐœÐµÑÐµÑ‡Ð½Ð¾ Ð¾Ð±Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ",
    monthly: "ÐœÐµÑÐµÑ‡Ð½Ð¾",
    quarterly: "Ð¢Ñ€Ð¸Ð¼ÐµÑÐµÑ‡Ð½Ð¾",
    quarterReady: "Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð³Ð¾Ñ‚Ð¾Ð²Ð¸ Ð·Ð° Ñ‚Ñ€Ð¸Ð¼ÐµÑÐµÑ‡Ð¸Ðµ",
    addExpense: "Ð”Ð¾Ð±Ð°Ð²Ð¸ Ñ€Ð°Ð·Ñ…Ð¾Ð´",
    addIncome: "Ð”Ð¾Ð±Ð°Ð²Ð¸ Ð¿Ñ€Ð¸Ñ…Ð¾Ð´",
    photoDone: "Ð¡Ð½Ð¸Ð¼ÐºÐ°Ñ‚Ð° Ðµ Ð³Ð¾Ñ‚Ð¾Ð²Ð°",
    amountNote: "Ð¡ÑƒÐ¼Ð° Ð¸ Ð±ÐµÐ»ÐµÐ¶ÐºÐ°",
    paidForClient: "ÐŸÐ»Ð°Ñ‚ÐµÐ½Ð¾ Ð·Ð° ÐºÐ»Ð¸ÐµÐ½Ñ‚",
    settings: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸",
    income: "ÐŸÑ€Ð¸Ñ…Ð¾Ð´Ð¸",
    expenses: "Ð Ð°Ð·Ñ…Ð¾Ð´Ð¸",
    client: "Ð—Ð° Ð²Ñ€ÑŠÑ‰Ð°Ð½Ðµ",
    unknown: "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð¾",
    empty: "ÐžÑ‰Ðµ Ð½ÑÐ¼Ð° Ð±ÐµÐ»ÐµÐ¶ÐºÐ¸. ÐÐ°Ð¿Ñ€Ð°Ð²ÐµÑ‚Ðµ Ð¿ÑŠÑ€Ð²Ð°Ñ‚Ð° ÑÐ½Ð¸Ð¼ÐºÐ°.",
    amount: "Ð¡ÑƒÐ¼Ð°",
    currency: "Ð’Ð°Ð»ÑƒÑ‚Ð°",
    merchant: "ÐœÐ°Ð³Ð°Ð·Ð¸Ð½",
    category: "ÐšÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ñ",
    description: "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ",
    date: "Ð”Ð°Ñ‚Ð°",
    save: "Ð—Ð°Ð¿Ð°Ð·Ð¸",
    saved: "Ð—Ð°Ð¿Ð°Ð·ÐµÐ½Ð¾.",
    delete: "Ð˜Ð·Ñ‚Ñ€Ð¸Ð¹",
    cancel: "ÐžÑ‚ÐºÐ°Ð·",
    photoReady: "Ð¡Ð½Ð¸Ð¼ÐºÐ°Ñ‚Ð° Ðµ Ð³Ð¾Ñ‚Ð¾Ð²Ð°. Ð˜Ð·Ð¿Ñ€Ð°Ñ‰Ð°Ð¼ ÐºÑŠÐ¼ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸ÐµÑ‚Ð¾.",
    subtle: "Ð›ÐµÐº",
    dry: "Ð¡ÑƒÑ…",
    serious: "Ð¡ÐµÑ€Ð¸Ð¾Ð·ÐµÐ½",
    humour: "Ð¡Ñ‚Ð¸Ð» Ð½Ð° ÐºÐ¾Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð°",
    profile: "ÐŸÑ€Ð¾Ñ„Ð¸Ð»",
    deleteAccount: "Ð˜Ð·Ñ‚Ñ€Ð¸Ð¹ Ð°ÐºÐ°ÑƒÐ½Ñ‚Ð° Ð¸ Ð²ÑÐ¸Ñ‡ÐºÐ¸ Ð´Ð°Ð½Ð½Ð¸",
    deleteWarning: "Ð˜Ð·Ñ‚Ñ€Ð¸Ð²Ð° Ð·Ð°Ð²Ð¸Ð½Ð°Ð³Ð¸ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»Ð°, Ð±ÐµÐ»ÐµÐ¶ÐºÐ¸Ñ‚Ðµ, ÑÐ½Ð¸Ð¼ÐºÐ¸Ñ‚Ðµ Ð¸ Ð¿Ñ€Ð¸Ñ…Ð¾Ð´Ð¸Ñ‚Ðµ.",
    printPdf: "Ð—Ð°Ð¿Ð°Ð·Ð¸ PDF",
    emailPdf: "Ð˜Ð·Ð¿Ñ€Ð°Ñ‚Ð¸ summary PDF",
    submissionHint: "Ð’ Ð¿ÑƒÐ±Ð»Ð¸Ñ‡Ð½Ð°Ñ‚Ð° HTTPS Ð²ÐµÑ€ÑÐ¸Ñ ÑÑŠÐ·Ð´Ð°Ð²Ð° PDF Ð¸ Ð¾Ñ‚Ð²Ð°Ñ€Ñ Ð¾Ð¿Ñ†Ð¸Ð¸Ñ‚Ðµ Ð½Ð° Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°: email, WhatsApp, Drive, ÑÑŠÐ¾Ð±Ñ‰ÐµÐ½Ð¸Ñ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸.",
    secureShareRequired: "Ð¡Ð¿Ð¾Ð´ÐµÐ»ÑÐ½ÐµÑ‚Ð¾ Ð½Ð° PDF Ð¸Ð·Ð¸ÑÐºÐ²Ð° Ð¿ÑƒÐ±Ð»Ð¸Ñ‡Ð½Ð°Ñ‚Ð° HTTPS Ð²ÐµÑ€ÑÐ¸Ñ. Ð›Ð¾ÐºÐ°Ð»Ð½Ð¾ Ð¿Ñ€ÐµÐ· http Ñ€Ð°Ð±Ð¾Ñ‚Ð¸ ÑÐ°Ð¼Ð¾ Ð—Ð°Ð¿Ð°Ð·Ð¸ PDF.",
    emailBody: "ÐœÐµÑÐµÑ‡Ð½Ð¾ Ð¾Ð±Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ TidGo PDF",
    noEntries: "ÐÑÐ¼Ð° Ð·Ð°Ð¿Ð¸ÑÐ¸",
    note: "ÐŸÐ¾Ð´Ñ€ÐµÐ´ÐµÐ½Ð¾ Ð¼ÐµÑÐµÑ‡Ð½Ð¾ Ð¾Ð±Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ. Ð”Ð°Ð½ÑŠÑ†Ð¸Ñ‚Ðµ Ð¾ÑÑ‚Ð°Ð²Ð°Ñ‚ Ð·Ð° Ð¸ÑÑ‚Ð¸Ð½ÑÐºÐ¸Ñ ÑÑ‡ÐµÑ‚Ð¾Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ».",
    installHint: "ÐÐ° iPhone: Share, Ð¿Ð¾ÑÐ»Ðµ Add to Home Screen.",
    seeAll: "ÐŸÐ¾ÐºÐ°Ð¶Ð¸ Ð²ÑÐ¸Ñ‡ÐºÐ¸",
    seeMore: "ÐŸÐ¾ÐºÐ°Ð¶Ð¸ Ð¾Ñ‰Ðµ",
    showLess: "ÐŸÐ¾ÐºÐ°Ð¶Ð¸ Ð¿Ð¾-Ð¼Ð°Ð»ÐºÐ¾",
    food: "Ð¥Ñ€Ð°Ð½Ð°",
    fuel: "Ð“Ð¾Ñ€Ð¸Ð²Ð¾",
    tools: "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð¸",
    transport: "Ð¢Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚",
    other: "Ð”Ñ€ÑƒÐ³Ð¾"
  }
});

Object.assign(COPY.en, {
  privacyTitle: "Privacy Policy",
  termsTitle: "Terms",
  deleteAccountInfoTitle: "Delete account info",
  legalShort: "Short version",
  legalFull: "Plain details",
  legalOpenFull: "Open full version",
  legalBack: "Back to settings",
    feedbackTitle: "Send feedback",
    feedbackHint: "Found something weird? Send us a quick message.",
    feedbackPlaceholder: "Tell us what happened, what felt confusing, or what should work better.",
    sendMessage: "Send us a message",
    feedbackSent: "Message sent. Thank you.",
    feedbackFailed: "Message could not be sent. Please try again later.",
    deleteConfirmText: "I understand this permanently deletes my profile, receipts, photos and income.",
    deleteConfirmRequired: "Tick the confirmation box first.",
    copyEmail: "Copy email",
    emailCopied: "Email copied.",
    openEmailApp: "Open email app",
    feedbackSubject: "TidGo feedback",
    feedbackBody: "Hi, I tested TidGo and noticed:",
    recordsTitle: "Check my records",
    recordsHint: "See what looks ready for your accountant and what may need a proof or a second look.",
    connectAccountant: "Connect accountant",
    connectAccountantHint: "Add your accountant's email here. Live sharing will ask for your permission before anyone can see your records.",
    accountantEmail: "Accountant email",
    createInvite: "Save accountant",
    connectionStatus: "Connection status",
    pendingAccountant: "Saved for connection",
    pendingClient: "Waiting for client approval",
    activeConnection: "Connected",
    allowAccess: "Allow access",
    declineAccess: "Decline",
    revokeAccess: "Revoke access",
    noConnection: "No accountant connected on this device yet.",
    inviteCreated: "Accountant saved.",
    accessAllowed: "Access allowed.",
    accessDeclined: "Access declined.",
    accessRevoked: "Access revoked.",
    signOutDevice: "Sign out on this device",
    signOutHint: "Use this when you want to test recovery or move to another account. It clears this device session and disconnects WhatsApp for this account where supported. It does not delete your receipts.",
    signOutConfirm: "This will sign you out on this device, clear the saved WhatsApp session and show the email recovery screen. Your receipts will not be deleted.",
    accountantAccess: "Accountant access",
    accountantEmail: "Accountant email",
    accountantHint: "Accountant portal is coming later. For now, check your records before sending them on.",
    saveAccountant: "Save accountant",
    inviteAccountant: "Invite accountant",
    previewAccountant: "Check my records",
    revokeAccess: "Revoke access",
    revokeOrChangeAccountant: "Revoke access / change accountant",
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
    replaceProof: "Replace proof",
    takePhoto: "Take photo",
    uploadFile: "Upload file",
    proofHint: "Add a payslip, CIS statement, remittance note or screenshot. Amount stays manual.",
    replaceReceiptPhoto: "Retake or replace photo",
    replaceReceiptHint: "Use this if TidGo asked for a clearer photo. The new photo will be read again and replace this receipt record.",
    legalSettingsTitle: "Legal",
    legalSettingsText: "Full versions are available at TidGo.co.uk. By using this app, you agree to the Privacy Policy and Terms below. If you do not agree, please delete your account and stop using TidGo.",
    legalSettingsAgree: "I agree to TidGo's Privacy Policy and Terms.",
    shortPrivacyNoticeTitle: "Short privacy notice",
    shortPrivacyNoticeText: "TidGo stores your account details, receipt photos, income records and summaries so you can keep simple self-employed or landlord records in one place.\n\nTidGo is designed for simple record-keeping only. It does not support limited company accounts, VAT returns, payroll or corporation tax.\n\nWe use your email for account access, recovery, security messages and email intake. Email is required to create and use your TidGo account. If you choose email notifications, we may also send occasional TidGo product updates.\n\nIf you connect WhatsApp or send emails to TidGo, we use those channels only to add records to your account.\n\nReceipt photos may be processed by OpenAI on our behalf to read dates, amounts, merchants and categories. We do not sell your data.\n\nYou can delete your account and active data from Settings. Some backups and technical logs may remain for up to 30 days.\n\nBy creating an account, you agree to TidGo's Privacy Policy and Terms.",
    importantNotesTitle: "Important notes",
    importantNotesText: "TidGo is for simple self-employed, landlord and side-income records. It is not VAT, LTD/company accounts, payroll or corporation tax software.",
    legalConsentTitle: "Before you continue",
    legalConsentText: "Please confirm that you agree to TidGo's Privacy Policy and Terms. You can open the full versions below.",
    continueToApp: "Continue to TidGo",
    notificationsTitle: "Notifications",
    notificationsHint: "Choose how TidGo may contact you about service messages such as records, summaries and important account updates. No spam.",
    notifyEmail: "Email",
    notifyPush: "Push",
    notifyNone: "None"
});

Object.assign(COPY.en, {
  calendarQuarterly: "Calendar quarters",
  taxQuarterly: "UK tax quarters",
  quarterMode: "Quarter mode",
  calendarQuarterHint: "Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec.",
  taxQuarterHint: "UK tax-year quarters from 6 Apr, 6 Jul, 6 Oct and 6 Jan.",
  duplicateDetails: "Open possible duplicate",
  duplicateHint: "These records look similar. Open one and compare the receipt photos.",
  duplicateReviewTitle: "This looks like a possible duplicate",
  duplicateReviewHint: "TidGo found a very similar receipt already saved on this account. Check the photo, date, amount and merchant before using this record in a summary.",
  requestDocsBackendNeeded: "Request email needs a backend Resend endpoint before it can send to the client automatically.",
  mtdRunning: "MTD running summary",
  mtdRunningReady: "Running MTD record summary",
  mtdRunningHint: "Covers records from the start of the tax year to the end of this update period.",
  mtdRunningDisclaimer: "For your accountant. TidGo does not submit this to HMRC."
});

Object.assign(COPY.pl, {
  privacyTitle: "Polityka prywatnoÅ›ci",
  termsTitle: "Regulamin",
  deleteAccountInfoTitle: "Instrukcja usuniÄ™cia konta",
  legalShort: "KrÃ³tko",
  legalFull: "Proste szczegÃ³Å‚y",
  legalOpenFull: "OtwÃ³rz peÅ‚nÄ… wersjÄ™",
  legalBack: "WrÃ³Ä‡ do ustawieÅ„",
    feedbackTitle: "WyÅ›lij feedback",
    feedbackHint: "CoÅ› wyglÄ…da dziwnie? WyÅ›lij nam szybkÄ… wiadomoÅ›Ä‡.",
    feedbackPlaceholder: "Napisz, co siÄ™ staÅ‚o, co byÅ‚o niejasne albo co powinno dziaÅ‚aÄ‡ lepiej.",
    sendMessage: "WyÅ›lij wiadomoÅ›Ä‡",
    feedbackSent: "WiadomoÅ›Ä‡ wysÅ‚ana. DziÄ™kujÄ™.",
    feedbackFailed: "Nie udaÅ‚o siÄ™ wysÅ‚aÄ‡ wiadomoÅ›ci. SprÃ³buj pÃ³Åºniej.",
    deleteConfirmText: "Rozumiem, Å¼e to trwale usunie mÃ³j profil, paragony, zdjÄ™cia i przychody.",
    deleteConfirmRequired: "Najpierw zaznacz potwierdzenie.",
    copyEmail: "Kopiuj email",
    emailCopied: "Email skopiowany.",
    openEmailApp: "OtwÃ³rz email",
    feedbackSubject: "TidGo feedback",
    feedbackBody: "CzeÅ›Ä‡, testowaÅ‚em TidGo i zauwaÅ¼yÅ‚em:",
    recordsTitle: "SprawdÅº moje rekordy",
    recordsHint: "Zobacz, co wyglÄ…da gotowe dla ksiÄ™gowego, a gdzie moÅ¼e brakowaÄ‡ dowodu albo drugiego spojrzenia.",
    connectAccountant: "PoÅ‚Ä…cz ksiÄ™gowego",
    connectAccountantHint: "Dodaj email ksiÄ™gowego. UdostÄ™pnianie rekordÃ³w bÄ™dzie wymagaÅ‚o Twojej zgody.",
    accountantEmail: "Email ksiÄ™gowego",
    createInvite: "Zapisz ksiÄ™gowego",
    connectionStatus: "Status poÅ‚Ä…czenia",
    pendingAccountant: "Zapisane do poÅ‚Ä…czenia",
    pendingClient: "Czeka na zgodÄ™ klienta",
    activeConnection: "PoÅ‚Ä…czone",
    allowAccess: "ZezwÃ³l na dostÄ™p",
    declineAccess: "OdmÃ³w",
    revokeAccess: "Cofnij dostÄ™p",
    noConnection: "Na tym urzÄ…dzeniu nie ma jeszcze poÅ‚Ä…czonego ksiÄ™gowego.",
    inviteCreated: "KsiÄ™gowy zapisany.",
    accessAllowed: "DostÄ™p zatwierdzony.",
    accessDeclined: "DostÄ™p odrzucony.",
    accessRevoked: "DostÄ™p cofniÄ™ty.",
    signOutDevice: "Wyloguj na tym urzÄ…dzeniu",
    signOutHint: "UÅ¼yj, gdy chcesz przetestowaÄ‡ odzyskiwanie albo przejÅ›Ä‡ na inne konto. To czyÅ›ci sesjÄ™ na tym urzÄ…dzeniu i odÅ‚Ä…cza WhatsApp dla tego konta, jeÅ›li API juÅ¼ to obsÅ‚uguje. To nie usuwa paragonÃ³w.",
    signOutConfirm: "To wyloguje CiÄ™ na tym urzÄ…dzeniu, wyczyÅ›ci zapisanÄ… sesjÄ™ WhatsApp i pokaÅ¼e ekran odzyskiwania emailem. Paragony nie zostanÄ… usuniÄ™te.",
    accountantAccess: "DostÄ™p dla ksiÄ™gowego",
    accountantEmail: "Email ksiÄ™gowego",
    accountantHint: "Portal ksiÄ™gowego bÄ™dzie pÃ³Åºniej. Na razie sprawdÅº rekordy przed wysÅ‚aniem dalej.",
    saveAccountant: "Zapisz ksiÄ™gowego",
    inviteAccountant: "ZaproÅ› ksiÄ™gowego",
    previewAccountant: "SprawdÅº moje rekordy",
    revokeAccess: "Cofnij dostÄ™p",
    revokeOrChangeAccountant: "Cofnij dostÄ™p / zmieÅ„ ksiÄ™gowego",
    accountantView: "Co zobaczy ksiÄ™gowy",
    readOnly: "Tylko do odczytu",
    lastReceipt: "Ostatni paragon",
    status: "Status",
    ok: "OK",
    chase: "PogoniÄ‡",
    downloadCsv: "Pobierz CSV",
    accountantInviteSubject: "DostÄ™p ksiÄ™gowego TidGo",
    accountantInviteBody: "CzeÅ›Ä‡, uÅ¼ywam TidGo do porzÄ…dkowania paragonÃ³w i przychodÃ³w. ChciaÅ‚bym poÅ‚Ä…czyÄ‡ moje rekordy z TobÄ…, kiedy dostÄ™p dla ksiÄ™gowego bÄ™dzie gotowy.",
    accountantHeroToast: "Tryb bohatera odblokowany. Rekordy sÄ… w porzÄ…dku, reklamÃ³wka moÅ¼e iÅ›Ä‡ na emeryturÄ™.",
    missingMonths: "BrakujÄ…ce miesiÄ…ce",
    needsReview: "Do sprawdzenia",
    chaseClient: "PogoÅ„ klienta",
    accountantPack: "Pobierz paczkÄ™ ksiÄ™gowego",
    noRecords: "Brak rekordÃ³w",
    missingMerchant: "Brakuje sklepu",
    missingCategory: "Brakuje kategorii",
    possibleDuplicate: "MoÅ¼liwy duplikat",
    incomeWithoutProof: "Brakuje dowodu przychodu",
    chaseSubject: "BrakujÄ…ce rekordy TidGo",
    chaseBody: "CzeÅ›Ä‡, dodaj proszÄ™ brakujÄ…ce paragony i dowody przychodu w TidGo, kiedy moÅ¼esz. To pomoÅ¼e przygotowaÄ‡ rekordy bez paniki na ostatniÄ… chwilÄ™.",
    accountantPackToast: "Paczka ksiÄ™gowego ruszyÅ‚a. CSV dzisiaj, spokojniejszy styczeÅ„ jutro.",
    addClient: "Dodaj klienta",
    importClientEmails: "Importuj emaile klientow",
    inviteClients: "Zapros klientow",
    clientEmails: "Emaile klientÃ³w",
    accountantDemoHint: "Demo ksiÄ™gowego: wklej jeden lub wiele emaili klientÃ³w, potem zaproÅ› ich do TidGo.",
    attachProof: "Dodaj dowÃ³d",
    proofAttached: "DowÃ³d dodany",
    viewProof: "Zobacz dowÃ³d",
    replaceProof: "ZmieÅ„ dowÃ³d",
    takePhoto: "ZrÃ³b zdjÄ™cie",
    uploadFile: "Wgraj plik",
    proofHint: "Dodaj payslip, CIS statement, remittance note albo screenshot. KwotÄ™ wpisujesz rÄ™cznie.",
    replaceReceiptPhoto: "ZrÃ³b ponownie albo zamieÅ„ zdjÄ™cie",
    replaceReceiptHint: "UÅ¼yj tego, jeÅ›li TidGo poprosiÅ‚o o wyraÅºniejsze zdjÄ™cie. Nowe zdjÄ™cie zostanie odczytane ponownie i zastÄ…pi ten paragon.",
    legalSettingsTitle: "Legal",
    legalSettingsText: "PeÅ‚ne wersje sÄ… dostÄ™pne na TidGo.co.uk. UÅ¼ywajÄ…c tej aplikacji, zgadzasz siÄ™ z PolitykÄ… prywatnoÅ›ci i Regulaminem poniÅ¼ej. JeÅ›li siÄ™ nie zgadzasz, usuÅ„ konto i przestaÅ„ uÅ¼ywaÄ‡ TidGo.",
    legalSettingsAgree: "Zgadzam siÄ™ z PolitykÄ… prywatnoÅ›ci i Regulaminem TidGo.",
    shortPrivacyNoticeTitle: "KrÃ³tka informacja prywatnoÅ›ci",
    shortPrivacyNoticeText: "TidGo przechowuje dane konta, zdjÄ™cia paragonÃ³w, rekordy przychodÃ³w i podsumowania, Å¼ebyÅ› mÃ³gÅ‚ trzymaÄ‡ proste rekordy self-employed albo landlord w jednym miejscu.\n\nTidGo sÅ‚uÅ¼y tylko do prostego prowadzenia rekordÃ³w. Nie obsÅ‚uguje kont limited company, VAT returns, payroll ani corporation tax.\n\nUÅ¼ywamy emaila do dostÄ™pu do konta, odzyskiwania, wiadomoÅ›ci bezpieczeÅ„stwa i email intake. Email jest wymagany do utworzenia i uÅ¼ywania konta TidGo. JeÅ›li wybierzesz powiadomienia email, moÅ¼emy teÅ¼ wysyÅ‚aÄ‡ okazjonalne informacje o zmianach w TidGo.\n\nJeÅ›li poÅ‚Ä…czysz WhatsApp albo wysyÅ‚asz maile do TidGo, uÅ¼ywamy tych kanaÅ‚Ã³w tylko do dodawania rekordÃ³w do Twojego konta.\n\nZdjÄ™cia paragonÃ³w mogÄ… byÄ‡ przetwarzane przez OpenAI w naszym imieniu, Å¼eby odczytaÄ‡ daty, kwoty, sklepy i kategorie. Nie sprzedajemy Twoich danych.\n\nMoÅ¼esz usunÄ…Ä‡ konto i aktywne dane w Settings. NiektÃ³re backupy i logi techniczne mogÄ… zostaÄ‡ do 30 dni.\n\nTworzÄ…c konto, zgadzasz siÄ™ z PolitykÄ… prywatnoÅ›ci i Regulaminem TidGo.",
    importantNotesTitle: "WaÅ¼ne informacje",
    importantNotesText: "TidGo jest do prostych rekordÃ³w self-employed, landlord i dodatkowego dochodu. To nie jest software do VAT, kont LTD/company accounts, payroll ani corporation tax.",
    legalConsentTitle: "Zanim przejdziesz dalej",
    legalConsentText: "PotwierdÅº proszÄ™, Å¼e zgadzasz siÄ™ z PolitykÄ… prywatnoÅ›ci i Regulaminem TidGo. PeÅ‚ne wersje moÅ¼esz otworzyÄ‡ poniÅ¼ej.",
    continueToApp: "PrzejdÅº do TidGo",
    notificationsTitle: "Powiadomienia",
    notificationsHint: "Wybierz, jak TidGo moze kontaktowac sie z Toba w sprawach aplikacji, rekordow, podsumowan i waznych zmian konta. Bez spamu.",
    notifyEmail: "Email",
    notifyPush: "Push",
    notifyNone: "Brak"
});

Object.assign(COPY.pl, {
  calendarQuarterly: "Kwartaly kalendarzowe",
  taxQuarterly: "Kwartaly UK tax",
  quarterMode: "Tryb kwartalu",
  calendarQuarterHint: "Sty-Mar, Kwi-Cze, Lip-Wrz, Paz-Gru.",
  taxQuarterHint: "Kwartaly brytyjskiego roku podatkowego od 6 Apr, 6 Jul, 6 Oct i 6 Jan.",
  duplicateDetails: "Otworz mozliwy duplikat",
  duplicateHint: "Te rekordy wyglÄ…dajÄ… podobnie. OtwÃ³rz jeden i porÃ³wnaj zdjÄ™cia paragonÃ³w.",
  duplicateReviewTitle: "To wyglÄ…da jak moÅ¼liwy duplikat",
  duplicateReviewHint: "TidGo znalazÅ‚o bardzo podobny paragon zapisany juÅ¼ na tym koncie. SprawdÅº zdjÄ™cie, datÄ™, kwotÄ™ i sprzedawcÄ™ przed uÅ¼yciem tego rekordu w podsumowaniu.",
  requestDocsBackendNeeded: "WysyÅ‚ka request email wymaga endpointu Resend w backendzie, zanim pÃ³jdzie automatycznie do klienta.",
  mtdRunning: "MTD running summary",
  mtdRunningReady: "NarastajÄ…ce MTD record summary",
  mtdRunningHint: "Obejmuje rekordy od poczÄ…tku roku podatkowego do koÅ„ca tego okresu.",
  mtdRunningDisclaimer: "Dla Twojego ksiÄ™gowego. TidGo nie wysyÅ‚a tego do HMRC."
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
  feedbackBody: "Salut, am testat TidGo si am observat:",
  copyEmail: "Copiaza email",
  emailCopied: "Email copiat.",
  openEmailApp: "Deschide email",
  recordsTitle: "Verifica evidenta",
  recordsHint: "Vezi ce pare pregatit pentru contabil si ce poate avea nevoie de dovada sau verificare.",
  connectAccountant: "Conecteaza contabilul",
  connectAccountantHint: "Adauga emailul contabilului. Partajarea live va cere acordul tau.",
  accountantEmail: "Email contabil",
  createInvite: "Salveaza contabilul",
  connectionStatus: "Status conexiune",
  pendingAccountant: "Salvat pentru conectare",
  pendingClient: "Asteapta acordul clientului",
  activeConnection: "Conectat",
  allowAccess: "Permite acces",
  declineAccess: "Refuza",
  revokeAccess: "Retrage accesul",
  noConnection: "Niciun contabil conectat pe acest dispozitiv.",
  inviteCreated: "Contabil salvat.",
  accessAllowed: "Acces permis.",
  accessDeclined: "Acces refuzat.",
  accessRevoked: "Acces retras.",
  previewAccountant: "Verifica evidenta",
  signOutDevice: "Delogare pe acest dispozitiv",
  signOutHint: "Foloseste doar pentru testarea recuperarii sau pentru alt cont. Nu sterge bonurile."
});

Object.assign(COPY.ro, {
  calendarQuarterly: "Trimestre calendaristice",
  taxQuarterly: "Trimestre fiscale UK",
  quarterMode: "Mod trimestru",
  calendarQuarterHint: "Ian-Mar, Apr-Iun, Iul-Sep, Oct-Dec.",
  taxQuarterHint: "Trimestre ale anului fiscal UK de la 6 Apr, 6 Iul, 6 Oct si 6 Ian.",
  duplicateDetails: "Deschide posibil duplicat",
  duplicateHint: "Aceste inregistrari par similare. Deschide una si compara pozele bonurilor.",
  duplicateReviewTitle: "Acesta pare un posibil duplicat",
  duplicateReviewHint: "TidGo a gasit un bon foarte similar deja salvat in acest cont. Verifica poza, data, suma si comerciantul inainte sa folosesti acest record intr-un sumar.",
  requestDocsBackendNeeded: "Emailul de cerere are nevoie de endpoint Resend in backend inainte sa fie trimis automat clientului."
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
  feedbackBody: "\u041f\u0440\u0438\u0432\u0456\u0442, \u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 TidGo \u0456 \u043f\u043e\u043c\u0456\u0442\u0438\u0432:",
  copyEmail: "\u0421\u043a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438 email",
  emailCopied: "Email \u0441\u043a\u043e\u043f\u0456\u0439\u043e\u0432\u0430\u043d\u043e.",
  openEmailApp: "\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 email",
  recordsTitle: "\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u043c\u043e\u0457 \u0437\u0430\u043f\u0438\u0441\u0438",
  recordsHint: "\u041f\u043e\u0434\u0438\u0432\u0456\u0442\u044c\u0441\u044f, \u0449\u043e \u0433\u043e\u0442\u043e\u0432\u0435 \u0434\u043b\u044f \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430, \u0430 \u0434\u0435 \u043c\u043e\u0436\u0435 \u0431\u0440\u0430\u043a\u0443\u0432\u0430\u0442\u0438 \u0434\u043e\u043a\u0430\u0437\u0443.",
  connectAccountant: "\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430",
  connectAccountantHint: "\u0414\u043e\u0434\u0430\u0439\u0442\u0435 email \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430. \u0414\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0456\u0432 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0432\u0430\u0442\u0438\u043c\u0435 \u0432\u0430\u0448\u043e\u0457 \u0437\u0433\u043e\u0434\u0438.",
  accountantEmail: "Email \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430",
  createInvite: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430",
  connectionStatus: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0432'\u044f\u0437\u043a\u0443",
  pendingAccountant: "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e \u0434\u043b\u044f \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",
  pendingClient: "\u0427\u0435\u043a\u0430\u0454 \u043d\u0430 \u0437\u0433\u043e\u0434\u0443 \u043a\u043b\u0456\u0454\u043d\u0442\u0430",
  activeConnection: "\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043e",
  allowAccess: "\u0414\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u0438 \u0434\u043e\u0441\u0442\u0443\u043f",
  declineAccess: "\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438",
  revokeAccess: "\u0412\u0456\u0434\u043a\u043b\u0438\u043a\u0430\u0442\u0438 \u0434\u043e\u0441\u0442\u0443\u043f",
  noConnection: "\u041d\u0430 \u0446\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457 \u0449\u0435 \u043d\u0435\u043c\u0430\u0454 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430.",
  inviteCreated: "\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e.",
  accessAllowed: "\u0414\u043e\u0441\u0442\u0443\u043f \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u043e.",
  accessDeclined: "\u0414\u043e\u0441\u0442\u0443\u043f \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043e.",
  accessRevoked: "\u0414\u043e\u0441\u0442\u0443\u043f \u0432\u0456\u0434\u043a\u043b\u0438\u043a\u0430\u043d\u043e.",
  previewAccountant: "\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u043c\u043e\u0457 \u0437\u0430\u043f\u0438\u0441\u0438",
  signOutDevice: "\u0412\u0438\u0439\u0442\u0438 \u043d\u0430 \u0446\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457",
  signOutHint: "\u0422\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0443 \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0430\u0431\u043e \u0456\u043d\u0448\u043e\u0433\u043e \u0430\u043a\u0430\u0443\u043d\u0442\u0430. \u0426\u0435 \u043d\u0435 \u0432\u0438\u0434\u0430\u043b\u044f\u0454 \u0447\u0435\u043a\u0438."
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
  feedbackBody: "Sveiki, isbandziau TidGo ir pastebejau:",
  copyEmail: "Kopijuoti el. pasta",
  emailCopied: "El. pastas nukopijuotas.",
  openEmailApp: "Atidaryti el. pasta",
  recordsTitle: "Patikrinti irasus",
  recordsHint: "Paziurekite, kas paruosta buhalteriui, o kur gali trukti irodymo ar patikrinimo.",
  connectAccountant: "Prijungti buhalteri",
  connectAccountantHint: "Irasykite buhalterio el. pasta. Bendrinimui reikes jusu leidimo.",
  accountantEmail: "Buhalterio el. pastas",
  createInvite: "Issaugoti buhalteri",
  connectionStatus: "Rysio busena",
  pendingAccountant: "Issaugota prijungimui",
  pendingClient: "Laukiama kliento sutikimo",
  activeConnection: "Prijungta",
  allowAccess: "Leisti prieiga",
  declineAccess: "Atmesti",
  revokeAccess: "Atsaukti prieiga",
  noConnection: "Siame irenginyje buhalteris dar neprijungtas.",
  inviteCreated: "Buhalteris issaugotas.",
  accessAllowed: "Prieiga leista.",
  accessDeclined: "Prieiga atmesta.",
  accessRevoked: "Prieiga atsaukta.",
  previewAccountant: "Patikrinti irasus",
  signOutDevice: "Atsijungti siame irenginyje",
  signOutHint: "Naudokite tik atkuriant paskyra testui arba kitai paskyrai. Kvitai neistrinami."
});

Object.assign(COPY.lt, {
  calendarQuarterly: "Kalendoriniai ketvirciai",
  taxQuarterly: "UK mokesciu ketvirciai",
  quarterMode: "Ketvircio rezimas",
  calendarQuarterHint: "Sau-Kov, Bal-Bir, Lie-Rug, Spa-Gru.",
  taxQuarterHint: "UK mokestiniu metu ketvirciai nuo Apr 6, Jul 6, Oct 6 ir Jan 6.",
  duplicateDetails: "Atidaryti galima dublikata",
  duplicateHint: "Sie irasai atrodo panasus. Atidarykite viena ir palyginkite kvitu nuotraukas.",
  duplicateReviewTitle: "Tai gali bÅ«ti dublikatas",
  duplicateReviewHint: "TidGo rado labai panaÅ¡Å³ kvitÄ…, jau iÅ¡saugotÄ… Å¡ioje paskyroje. Patikrink nuotraukÄ…, datÄ…, sumÄ… ir pardavÄ—jÄ… prieÅ¡ naudodamas Å¡Ä¯ Ä¯raÅ¡Ä… suvestinÄ—je.",
  requestDocsBackendNeeded: "Prasymo emailui reikia Resend endpointo backend'e, pries siunciant klientui automatiskai."
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
  feedbackBody: "Sveiki, es testÄ“ju TidGo un pamaniju:"
});

Object.assign(COPY.lv, {
  feedbackBody: "Sveiki, es testeju TidGo un pamaniju:",
  copyEmail: "Kopet email",
  emailCopied: "Email nokopets.",
  openEmailApp: "Atvert email",
  recordsTitle: "Parbaudit ierakstus",
  recordsHint: "Skatiet, kas ir gatavs gramatvedim un kur var trukt pieradijuma vai parbaudes.",
  connectAccountant: "Pievienot gramatvedi",
  connectAccountantHint: "Pievienojiet gramatveza email. Kopigosanai bus vajadziga jusu atlauja.",
  accountantEmail: "Gramatveza email",
  createInvite: "Saglabat gramatvedi",
  connectionStatus: "Savienojuma statuss",
  pendingAccountant: "Saglabats savienosanai",
  pendingClient: "Gaida klienta piekrisanu",
  activeConnection: "Savienots",
  allowAccess: "Atlaut piekluvi",
  declineAccess: "Atteikt",
  revokeAccess: "Atsaukt piekluvi",
  noConnection: "Saja ierice gramatvedis vel nav pievienots.",
  inviteCreated: "Gramatvedis saglabats.",
  accessAllowed: "Piekluve atlauzta.",
  accessDeclined: "Piekluve atteikta.",
  accessRevoked: "Piekluve atsaukta.",
  previewAccountant: "Parbaudit ierakstus",
  signOutDevice: "Izrakstities saja ierice",
  signOutHint: "Lietojiet tikai atjaunosanas testam vai citam kontam. Ceki netiek dzesti."
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
  feedbackBody: "Hola, he probado TidGo y he notado:",
  copyEmail: "Copiar email",
  emailCopied: "Email copiado.",
  openEmailApp: "Abrir email",
  recordsTitle: "Revisar mis registros",
  recordsHint: "Mira que parece listo para tu contable y que puede necesitar prueba o revision.",
  connectAccountant: "Conectar contable",
  connectAccountantHint: "Anade el email de tu contable. Compartir datos requerira tu permiso.",
  accountantEmail: "Email del contable",
  createInvite: "Guardar contable",
  connectionStatus: "Estado de conexion",
  pendingAccountant: "Guardado para conectar",
  pendingClient: "Esperando permiso del cliente",
  activeConnection: "Conectado",
  allowAccess: "Permitir acceso",
  declineAccess: "Rechazar",
  revokeAccess: "Revocar acceso",
  noConnection: "Aun no hay contable conectado en este dispositivo.",
  inviteCreated: "Contable guardado.",
  accessAllowed: "Acceso permitido.",
  accessDeclined: "Acceso rechazado.",
  accessRevoked: "Acceso revocado.",
  previewAccountant: "Revisar mis registros",
  signOutDevice: "Cerrar sesion en este dispositivo",
  signOutHint: "Usalo solo para probar recuperacion o cambiar de cuenta. No borra tus recibos."
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
  feedbackBody: "\u0417\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435, \u0442\u0435\u0441\u0442\u0432\u0430\u0445 TidGo \u0438 \u0437\u0430\u0431\u0435\u043b\u044f\u0437\u0430\u0445:",
  copyEmail: "\u041a\u043e\u043f\u0438\u0440\u0430\u0439 email",
  emailCopied: "Email \u0435 \u043a\u043e\u043f\u0438\u0440\u0430\u043d.",
  openEmailApp: "\u041e\u0442\u0432\u043e\u0440\u0438 email",
  recordsTitle: "\u041f\u0440\u043e\u0432\u0435\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438\u0442\u0435",
  recordsHint: "\u0412\u0438\u0436\u0442\u0435 \u043a\u043e\u0435 \u0435 \u0433\u043e\u0442\u043e\u0432\u043e \u0437\u0430 \u0441\u0447\u0435\u0442\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b \u0438 \u043a\u044a\u0434\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u043b\u0438\u043f\u0441\u0432\u0430 \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0441\u0442\u0432\u043e.",
  connectAccountant: "\u0421\u0432\u044a\u0440\u0436\u0438 \u0441\u0447\u0435\u0442\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b",
  connectAccountantHint: "\u0414\u043e\u0431\u0430\u0432\u0435\u0442\u0435 email \u043d\u0430 \u0441\u0447\u0435\u0442\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b. \u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435\u0442\u043e \u0449\u0435 \u0438\u0437\u0438\u0441\u043a\u0432\u0430 \u0432\u0430\u0448\u0435\u0442\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435.",
  accountantEmail: "Email \u043d\u0430 \u0441\u0447\u0435\u0442\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b",
  createInvite: "\u0417\u0430\u043f\u0430\u0437\u0438 \u0441\u0447\u0435\u0442\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b",
  connectionStatus: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430\u0442\u0430",
  pendingAccountant: "\u0417\u0430\u043f\u0430\u0437\u0435\u043d\u043e \u0437\u0430 \u0441\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435",
  pendingClient: "\u0427\u0430\u043a\u0430 \u0441\u044a\u0433\u043b\u0430\u0441\u0438\u0435 \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442",
  activeConnection: "\u0421\u0432\u044a\u0440\u0437\u0430\u043d\u043e",
  allowAccess: "\u041f\u043e\u0437\u0432\u043e\u043b\u0438 \u0434\u043e\u0441\u0442\u044a\u043f",
  declineAccess: "\u041e\u0442\u043a\u0430\u0436\u0438",
  revokeAccess: "\u041e\u0442\u043c\u0435\u043d\u0438 \u0434\u043e\u0441\u0442\u044a\u043f",
  noConnection: "\u041d\u044f\u043c\u0430 \u0441\u0432\u044a\u0440\u0437\u0430\u043d \u0441\u0447\u0435\u0442\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b \u043d\u0430 \u0442\u043e\u0432\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e.",
  inviteCreated: "\u0421\u0447\u0435\u0442\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f\u0442 \u0435 \u0437\u0430\u043f\u0430\u0437\u0435\u043d.",
  accessAllowed: "\u0414\u043e\u0441\u0442\u044a\u043f\u044a\u0442 \u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u0435\u043d.",
  accessDeclined: "\u0414\u043e\u0441\u0442\u044a\u043f\u044a\u0442 \u0435 \u043e\u0442\u043a\u0430\u0437\u0430\u043d.",
  accessRevoked: "\u0414\u043e\u0441\u0442\u044a\u043f\u044a\u0442 \u0435 \u043e\u0442\u043c\u0435\u043d\u0435\u043d.",
  previewAccountant: "\u041f\u0440\u043e\u0432\u0435\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438\u0442\u0435",
  signOutDevice: "\u0418\u0437\u0445\u043e\u0434 \u043e\u0442 \u0442\u043e\u0432\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",
  signOutHint: "\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u0442\u0435 \u0441\u0430\u043c\u043e \u0437\u0430 \u0442\u0435\u0441\u0442 \u043d\u0430 \u0432\u044a\u0437\u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0432\u0430\u043d\u0435 \u0438\u043b\u0438 \u0434\u0440\u0443\u0433 \u0430\u043a\u0430\u0443\u043d\u0442. \u041d\u0435 \u0442\u0440\u0438\u0435 \u0431\u0435\u043b\u0435\u0436\u043a\u0438."
});

Object.values(COPY).forEach((copy) => {
  copy.feedbackPlaceholder ||= COPY.en.feedbackPlaceholder;
  copy.feedbackSent ||= COPY.en.feedbackSent;
  copy.feedbackFailed ||= COPY.en.feedbackFailed;
  copy.deleteConfirmText ||= COPY.en.deleteConfirmText;
  copy.deleteConfirmRequired ||= COPY.en.deleteConfirmRequired;
  copy.signOutConfirm ||= COPY.en.signOutConfirm;
});

Object.assign(COPY.uk, {
  calendarQuarterly: "Kalend. kvartaly",
  taxQuarterly: "UK podatkovi kvartaly",
  quarterMode: "Rezhym kvartalu",
  calendarQuarterHint: "Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec.",
  taxQuarterHint: "Kvartaly UK podatkovoho roku vid 6 Apr, 6 Jul, 6 Oct i 6 Jan.",
  duplicateDetails: "Vidkryty mozlyvyi dublikat",
  duplicateHint: "Tsi zapysy skhozhi. Vidkryite odyn i porivniaite foto chekiv.",
  duplicateReviewTitle: "Ð¦Ðµ Ð¼Ð¾Ð¶Ðµ Ð±ÑƒÑ‚Ð¸ Ð´ÑƒÐ±Ð»Ñ–ÐºÐ°Ñ‚",
  duplicateReviewHint: "TidGo Ð·Ð½Ð°Ð¹ÑˆÐ¾Ð² Ð´ÑƒÐ¶Ðµ ÑÑ…Ð¾Ð¶Ð¸Ð¹ Ñ‡ÐµÐº, ÑƒÐ¶Ðµ Ð·Ð±ÐµÑ€ÐµÐ¶ÐµÐ½Ð¸Ð¹ Ñƒ Ñ†ÑŒÐ¾Ð¼Ñƒ Ð°ÐºÐ°ÑƒÐ½Ñ‚Ñ–. ÐŸÐµÑ€ÐµÐ²Ñ–Ñ€Ñ‚Ðµ Ñ„Ð¾Ñ‚Ð¾, Ð´Ð°Ñ‚Ñƒ, ÑÑƒÐ¼Ñƒ Ð¹ Ð¿Ñ€Ð¾Ð´Ð°Ð²Ñ†Ñ Ð¿ÐµÑ€ÐµÐ´ Ð²Ð¸ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð°Ð½Ð½ÑÐ¼ Ñ†ÑŒÐ¾Ð³Ð¾ Ð·Ð°Ð¿Ð¸ÑÑƒ Ñƒ Ð¿Ñ–Ð´ÑÑƒÐ¼ÐºÑƒ.",
  requestDocsBackendNeeded: "Email-zapyt potrebuie Resend endpoint u backend, persh nizh avtomatychno nadislaty kliientu."
});

Object.assign(COPY.lv, {
  calendarQuarterly: "Kalendara ceturksni",
  taxQuarterly: "UK nodoklu ceturksni",
  quarterMode: "Ceturksna rezims",
  calendarQuarterHint: "Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec.",
  taxQuarterHint: "UK nodoklu gada ceturksni no 6 Apr, 6 Jul, 6 Oct un 6 Jan.",
  duplicateDetails: "Atvert iespejamu dublikatu",
  duplicateHint: "Sie ieraksti izskatas lidzigi. Atver vienu un salidzini ceku foto.",
  duplicateReviewTitle: "Tas var bÅ«t dublikÄts",
  duplicateReviewHint: "TidGo atrada Ä¼oti lÄ«dzÄ«gu Äeku, kas jau ir saglabÄts Å¡ajÄ kontÄ. Pirms izmantoÅ¡anas kopsavilkumÄ pÄrbaudi foto, datumu, summu un tirgotÄju.",
  requestDocsBackendNeeded: "Pieprasijuma emailam vajag Resend endpoint backend'a, pirms tas sutis klientam automatiski."
});

Object.assign(COPY.es, {
  calendarQuarterly: "Trimestres calendario",
  taxQuarterly: "Trimestres fiscales UK",
  quarterMode: "Modo trimestral",
  calendarQuarterHint: "Ene-Mar, Abr-Jun, Jul-Sep, Oct-Dic.",
  taxQuarterHint: "Trimestres del ano fiscal UK desde 6 Apr, 6 Jul, 6 Oct y 6 Jan.",
  duplicateDetails: "Abrir posible duplicado",
  duplicateHint: "Estos registros parecen similares. Abre uno y compara las fotos.",
  duplicateReviewTitle: "Esto parece un posible duplicado",
  duplicateReviewHint: "TidGo encontro un recibo muy parecido ya guardado en esta cuenta. Revisa la foto, fecha, importe y comercio antes de usar este registro en un resumen.",
  requestDocsBackendNeeded: "El email de solicitud necesita un endpoint Resend en backend antes de enviarse automaticamente al cliente."
});

Object.assign(COPY.bg, {
  calendarQuarterly: "Kalendarni trimesecia",
  taxQuarterly: "UK danachni trimesecia",
  quarterMode: "Rezhim trimesecie",
  calendarQuarterHint: "Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec.",
  taxQuarterHint: "UK danachni trimesecia ot 6 Apr, 6 Jul, 6 Oct i 6 Jan.",
  duplicateDetails: "Otvori vazmozhen dublikat",
  duplicateHint: "Tezi zapisi izgledat podobni. Otvorete edin i sravnete snimkite.",
  duplicateReviewTitle: "Ð¢Ð¾Ð²Ð° Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ðµ Ð´ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ‚",
  duplicateReviewHint: "TidGo Ð½Ð°Ð¼ÐµÑ€Ð¸ Ð¼Ð½Ð¾Ð³Ð¾ Ð¿Ð¾Ð´Ð¾Ð±Ð½Ð° Ð±ÐµÐ»ÐµÐ¶ÐºÐ°, ÐºÐ¾ÑÑ‚Ð¾ Ð²ÐµÑ‡Ðµ Ðµ Ð·Ð°Ð¿Ð¸ÑÐ°Ð½Ð° Ð² Ñ‚Ð¾Ð·Ð¸ Ð°ÐºÐ°ÑƒÐ½Ñ‚. ÐŸÑ€Ð¾Ð²ÐµÑ€ÐµÑ‚Ðµ ÑÐ½Ð¸Ð¼ÐºÐ°Ñ‚Ð°, Ð´Ð°Ñ‚Ð°Ñ‚Ð°, ÑÑƒÐ¼Ð°Ñ‚Ð° Ð¸ Ñ‚ÑŠÑ€Ð³Ð¾Ð²ÐµÑ†Ð°, Ð¿Ñ€ÐµÐ´Ð¸ Ð´Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚Ðµ Ñ‚Ð¾Ð·Ð¸ Ð·Ð°Ð¿Ð¸Ñ Ð² ÑÐ¿Ñ€Ð°Ð²ÐºÐ°.",
  requestDocsBackendNeeded: "Email za zayavka iska Resend endpoint v backend predi avtomatichno izprashtane do klienta."
});

Object.assign(COPY.ro, {
  mtdRunning: "Sumar MTD cumulativ",
  mtdRunningReady: "Sumar cumulativ MTD pentru evidente",
  mtdRunningHint: "Include evidentele de la inceputul anului fiscal pana la finalul acestei perioade.",
  mtdRunningDisclaimer: "Pentru contabilul tau. TidGo nu trimite acest sumar catre HMRC."
});

Object.assign(COPY.uk, {
  mtdRunning: "MTD running summary",
  mtdRunningReady: "Narostaiuchyi MTD record summary",
  mtdRunningHint: "Okhopliuie zapysy vid pochatku podatkovoho roku do kintsia tsoho periodu.",
  mtdRunningDisclaimer: "Dlia vashoho bukhhaltera. TidGo ne nadsylaie tse do HMRC."
});

Object.assign(COPY.lt, {
  mtdRunning: "MTD kaupiamoji suvestine",
  mtdRunningReady: "Kaupiamoji MTD irasu suvestine",
  mtdRunningHint: "Apima irasus nuo mokestiniu metu pradzios iki sio laikotarpio pabaigos.",
  mtdRunningDisclaimer: "Skirta jusu buhalteriui. TidGo nesiuncia sio dokumento HMRC."
});

Object.assign(COPY.lv, {
  mtdRunning: "MTD pieaugosais kopsavilkums",
  mtdRunningReady: "Pieaugosais MTD ierakstu kopsavilkums",
  mtdRunningHint: "Ietver ierakstus no nodoklu gada sakuma lidz si perioda beigam.",
  mtdRunningDisclaimer: "Jusu gramatvedim. TidGo nesuta so kopsavilkumu HMRC."
});

Object.assign(COPY.es, {
  mtdRunning: "Resumen MTD acumulado",
  mtdRunningReady: "Resumen acumulado de registros MTD",
  mtdRunningHint: "Cubre los registros desde el inicio del ano fiscal hasta el final de este periodo.",
  mtdRunningDisclaimer: "Para tu contable. TidGo no envia este resumen a HMRC."
});

Object.assign(COPY.bg, {
  mtdRunning: "MTD natrupvashto obobshtenie",
  mtdRunningReady: "Natrupvashto MTD obobshtenie na zapisite",
  mtdRunningHint: "Obhvashta zapisite ot nachaloto na danachnata godina do kraya na tozi period.",
  mtdRunningDisclaimer: "Za vashiya schetovoditel. TidGo ne izprashta tova do HMRC."
});

Object.assign(COPY.ro, {
  deleteReceiptWarning: "Sterge doar acest bon si poza lui.",
  deleteIncomeWarning: "Sterge doar aceasta intrare de venit."
});

Object.assign(COPY.uk, {
  deleteReceiptWarning: "Delete only this receipt and its photo.",
  deleteIncomeWarning: "Delete only this income entry."
});

Object.assign(COPY.lt, {
  deleteReceiptWarning: "Istrina tik si kvita ir jo nuotrauka.",
  deleteIncomeWarning: "Istrina tik si pajamu irasa."
});

Object.assign(COPY.lv, {
  deleteReceiptWarning: "Dzes tikai so ceku un ta foto.",
  deleteIncomeWarning: "Dzes tikai so ienakumu ierakstu."
});

Object.assign(COPY.es, {
  deleteReceiptWarning: "Elimina solo este recibo y su foto.",
  deleteIncomeWarning: "Elimina solo este ingreso."
});

Object.assign(COPY.bg, {
  deleteReceiptWarning: "Delete only this receipt and its photo.",
  deleteIncomeWarning: "Delete only this income entry."
});

Object.assign(COPY.ro, {
  summary: "Rezumate",
  ukTaxQuarterly: "Trimestrial pentru contribuabili UK"
});

Object.assign(COPY.uk, {
  summary: "Summaries",
  ukTaxQuarterly: "Quarterly for UK taxpayers"
});

Object.assign(COPY.lt, {
  summary: "Suvestines",
  ukTaxQuarterly: "Ketvirciai UK mokesciu moketojams"
});

Object.assign(COPY.lv, {
  summary: "Kopsavilkumi",
  ukTaxQuarterly: "Ceturksni UK nodoklu maksatÄjiem"
});

Object.assign(COPY.es, {
  summary: "ResÃºmenes",
  ukTaxQuarterly: "Trimestral para contribuyentes UK"
});

Object.assign(COPY.bg, {
  summary: "Summaries",
  ukTaxQuarterly: "Quarterly for UK taxpayers"
});

Object.assign(COPY.ro, {
  whatsappPhone: "Numar WhatsApp",
  whatsappPhoneHint: "Optional. Adauga-l daca vrei sa trimiti poze cu bonuri catre TidGo prin WhatsApp mai tarziu.",
  whatsappConnectedTitle: "WhatsApp conectat",
  whatsappConnectedText: "Un numar WhatsApp care se termina in {last3} este legat de acest cont.",
  changeWhatsAppNumber: "Schimba numarul WhatsApp",
  changeWhatsAppIntro: "Pentru siguranta, confirma mai intai emailul de recuperare. Nu scrii noul numar aici; TidGo il citeste din mesajul WhatsApp trimis de noul telefon.",
  changeWhatsAppEmailHint: "Vom trimite un cod pe emailul de recuperare TidGo.",
  whatsappChangeCodeHint: "Introdu codul din email, apoi poti conecta noul numar WhatsApp.",
  unlockWhatsAppChange: "Deblocheaza schimbarea",
  whatsappChangeUnlocked: "Email confirmat. Deschide TidGo pe telefonul cu noul numar WhatsApp, apoi apasa acest buton si trimite mesajul LINK.",
  whatsappAddOnceHint: "Adauga numarul de pe care vrei sa trimiti bonuri. Conecteaza-l o singura data, apoi trimite mesajul LINK in WhatsApp.",
  intakeTitle: "Modalitati de adaugare",
  whatsappIntakeText: "WhatsApp intake: conecteaza numarul, apoi trimite poze cu bonuri catre TidGo din WhatsApp.",
  emailIntakeLabel: "Email intake:",
  emailIntakeText: "Poti trimite documente income si expense de pe acelasi email folosit in TidGo. Redirectioneaza emailul sau trimite un email normal cu atasament. Pune income sau expense in subiect daca poti.",
  dragDropTitle: "Trage bonul aici",
  dragDropHint: "Pe desktop, trage o poza sau un screenshot al bonului in aceasta zona.",
  dropActive: "Elibereaza pentru a adauga bonul.",
  proofDropTitle: "Trage dovada venitului aici",
  proofDropHint: "Pe desktop, trage un payslip, remittance note sau screenshot in aceasta zona.",
  proofDropActive: "Elibereaza pentru a atasa dovada.",
  incomeManualCheck: "Verifica si introdu manual suma si data, ca sa eviti greseli din documente cu multe cifre."
});

Object.assign(COPY.uk, {
  whatsappPhone: "WhatsApp number",
  whatsappPhoneHint: "Optional. Add it if you want to send receipt photos to TidGo by WhatsApp later.",
  whatsappConnectedTitle: "WhatsApp connected",
  whatsappConnectedText: "A WhatsApp number ending in {last3} is linked to this account.",
  changeWhatsAppNumber: "Change WhatsApp number",
  changeWhatsAppIntro: "For safety, confirm your recovery email first. You do not type the new number here; TidGo reads it from the WhatsApp message sent by the new phone.",
  changeWhatsAppEmailHint: "We will send a code to your TidGo recovery email.",
  whatsappChangeCodeHint: "Enter the email code, then you can connect the new WhatsApp number.",
  unlockWhatsAppChange: "Unlock change",
  whatsappChangeUnlocked: "Email confirmed. Open TidGo on the phone with the new WhatsApp number, then tap this button and send the ready LINK message.",
  whatsappAddOnceHint: "Add the number you want to use for sending receipts. Connect it once, then send the ready LINK message in WhatsApp.",
  intakeTitle: "Ways to add records",
  whatsappIntakeText: "WhatsApp intake: connect your number, then send receipt photos to TidGo from WhatsApp.",
  emailIntakeLabel: "Email intake:",
  emailIntakeText: "You can also send income and expense records from the same email you use for TidGo. Forward the email or send a normal email with an attachment. Use subject income or expense if you can.",
  dragDropTitle: "Drop receipt here",
  dragDropHint: "On desktop, drag a receipt photo or screenshot into this box.",
  dropActive: "Let go to add this receipt.",
  proofDropTitle: "Drop income proof here",
  proofDropHint: "On desktop, drag a payslip, remittance note or screenshot into this box.",
  proofDropActive: "Let go to attach this proof.",
  incomeManualCheck: "Please check and enter the amount and date manually to avoid mistakes from busy documents."
});

Object.assign(COPY.lt, {
  whatsappPhone: "WhatsApp numeris",
  whatsappPhoneHint: "Neprivaloma. Pridekite, jei veliau noresite siusti kvitu nuotraukas i TidGo per WhatsApp.",
  whatsappConnectedTitle: "WhatsApp prijungtas",
  whatsappConnectedText: "WhatsApp numeris, kuris baigiasi {last3}, prijungtas prie sios paskyros.",
  changeWhatsAppNumber: "Keisti WhatsApp numeri",
  changeWhatsAppIntro: "Saugumui pirma patvirtinkite atkurimo el. pasta. Naujo numerio cia neivedate; TidGo ji nuskaitys is WhatsApp zinutes, issiustos is naujo telefono.",
  changeWhatsAppEmailHint: "Koda atsiusime i TidGo atkurimo el. pasta.",
  whatsappChangeCodeHint: "Iveskite el. pasto koda, tada galesite prijungti nauja WhatsApp numeri.",
  unlockWhatsAppChange: "Atrakinti keitima",
  whatsappChangeUnlocked: "El. pastas patvirtintas. Atidarykite TidGo telefone su nauju WhatsApp numeriu, tada paspauskite si mygtuka ir issiuskite LINK zinute.",
  whatsappAddOnceHint: "PridÄ—kite numeri, is kurio siusite kvitus. Prijunkite ji viena karta, tada issiuskite LINK zinute WhatsApp.",
  intakeTitle: "BÅ«dai pridÄ—ti Ä¯raÅ¡us",
  whatsappIntakeText: "WhatsApp intake: prijunkite numeri, tada siuskite kvitu nuotraukas i TidGo per WhatsApp.",
  emailIntakeLabel: "Email intake:",
  emailIntakeText: "Taip pat galite siusti income ir expense irasus is to paties el. pasto, kuri naudojate TidGo. Persiuskite el. laiska arba siuskite paprasta laiska su priedu. Jei galite, temoje rasykite income arba expense.",
  dragDropTitle: "Numeskite kvita cia",
  dragDropHint: "Kompiuteryje nutempkite kvito nuotrauka arba ekrano kopija i si laukeli.",
  dropActive: "Paleiskite, kad prideti kvita.",
  proofDropTitle: "Numeskite pajamu irodyma cia",
  proofDropHint: "Kompiuteryje nutempkite payslip, remittance note arba ekrano kopija i si laukeli.",
  proofDropActive: "Paleiskite, kad prideti irodyma.",
  incomeManualCheck: "Patikrinkite ir iveskite suma bei data ranka, kad isvengtumete klaidu is dokumentu su daug skaiciu."
});

Object.assign(COPY.lv, {
  whatsappPhone: "WhatsApp numurs",
  whatsappPhoneHint: "Nav obligati. Pievienojiet, ja velak velaties sutit ceku foto uz TidGo caur WhatsApp.",
  whatsappConnectedTitle: "WhatsApp pieslegts",
  whatsappConnectedText: "WhatsApp numurs, kas beidzas ar {last3}, ir piesaistits sim kontam.",
  changeWhatsAppNumber: "Mainit WhatsApp numuru",
  changeWhatsAppIntro: "Drosibai vispirms apstipriniet atjaunosanas e-pastu. Jauno numuru seit neievadiet; TidGo to nolasa no WhatsApp zinas, kas nosutita no jauna telefona.",
  changeWhatsAppEmailHint: "Mes nosutisim kodu uz TidGo atjaunosanas e-pastu.",
  whatsappChangeCodeHint: "Ievadiet emaila kodu, tad varesiet pieslegt jaunu WhatsApp numuru.",
  unlockWhatsAppChange: "Atlaujat mainu",
  whatsappChangeUnlocked: "E-pasts apstiprinats. Atveriet TidGo telefona ar jauno WhatsApp numuru, tad nospiediet so pogu un nosutiet LINK zinu.",
  whatsappAddOnceHint: "Pievienojiet numuru, no kura sÅ«tisiet Äekus. Piesledziet to vienu reizi, pec tam nosutiet LINK zinu WhatsApp.",
  intakeTitle: "Veidi, ka pievienot ierakstus",
  whatsappIntakeText: "WhatsApp intake: piesledziet numuru, pec tam sutiet ceku foto uz TidGo caur WhatsApp.",
  emailIntakeLabel: "Email intake:",
  emailIntakeText: "Varat sutit income un expense ierakstus no ta pasa emaila, ko izmantojat TidGo. Parsutiet emailu vai nosutiet parastu emailu ar pielikumu. Ja varat, temata ierakstiet income vai expense.",
  dragDropTitle: "Nometiet ceku seit",
  dragDropHint: "Datora parvelciet ceka foto vai ekrankopiju saja lauka.",
  dropActive: "Atlaidiet, lai pievienotu ceku.",
  proofDropTitle: "Nometiet ienakumu pieradijumu seit",
  proofDropHint: "Datora parvelciet payslip, remittance note vai ekrankopiju saja lauka.",
  proofDropActive: "Atlaidiet, lai pievienotu pieradijumu.",
  incomeManualCheck: "Parbaudiet un ievadiet summu un datumu manuali, lai izvairitos no kludam dokumentos ar daudz skaitliem."
});

Object.assign(COPY.es, {
  whatsappPhone: "Numero de WhatsApp",
  whatsappPhoneHint: "Opcional. Anadelo si luego quieres enviar fotos de recibos a TidGo por WhatsApp.",
  whatsappConnectedTitle: "WhatsApp conectado",
  whatsappConnectedText: "Un numero de WhatsApp que termina en {last3} esta vinculado a esta cuenta.",
  changeWhatsAppNumber: "Cambiar numero de WhatsApp",
  changeWhatsAppIntro: "Por seguridad, confirma primero tu email de recuperacion. No escribes el nuevo numero aqui; TidGo lo lee del mensaje de WhatsApp enviado desde el nuevo telefono.",
  changeWhatsAppEmailHint: "Enviaremos un codigo a tu email de recuperacion de TidGo.",
  whatsappChangeCodeHint: "Introduce el codigo del email y luego podras conectar el nuevo numero de WhatsApp.",
  unlockWhatsAppChange: "Desbloquear cambio",
  whatsappChangeUnlocked: "Email confirmado. Abre TidGo en el telefono con el nuevo numero de WhatsApp, pulsa este boton y envia el mensaje LINK preparado.",
  whatsappAddOnceHint: "Anade el numero desde el que quieres enviar recibos. Conectalo una vez y luego envia el mensaje LINK en WhatsApp.",
  intakeTitle: "Formas de anadir registros",
  whatsappIntakeText: "WhatsApp intake: conecta tu numero y luego envia fotos de recibos a TidGo desde WhatsApp.",
  emailIntakeLabel: "Email intake:",
  emailIntakeText: "Tambien puedes enviar registros de income y expense desde el mismo email que usas para TidGo. Reenvia el email o envia un email normal con adjunto. Usa income o expense en el asunto si puedes.",
  dragDropTitle: "Suelta el recibo aqui",
  dragDropHint: "En desktop, arrastra una foto o captura del recibo a este cuadro.",
  dropActive: "Suelta para anadir este recibo.",
  proofDropTitle: "Suelta la prueba de ingreso aqui",
  proofDropHint: "En desktop, arrastra un payslip, remittance note o captura a este cuadro.",
  proofDropActive: "Suelta para adjuntar esta prueba.",
  incomeManualCheck: "Revisa e introduce el importe y la fecha manualmente para evitar errores en documentos con muchas cifras."
});

Object.assign(COPY.bg, {
  whatsappPhone: "WhatsApp number",
  whatsappPhoneHint: "Optional. Add it if you want to send receipt photos to TidGo by WhatsApp later.",
  whatsappConnectedTitle: "WhatsApp connected",
  whatsappConnectedText: "A WhatsApp number ending in {last3} is linked to this account.",
  changeWhatsAppNumber: "Change WhatsApp number",
  changeWhatsAppIntro: "For safety, confirm your recovery email first. You do not type the new number here; TidGo reads it from the WhatsApp message sent by the new phone.",
  changeWhatsAppEmailHint: "We will send a code to your TidGo recovery email.",
  whatsappChangeCodeHint: "Enter the email code, then you can connect the new WhatsApp number.",
  unlockWhatsAppChange: "Unlock change",
  whatsappChangeUnlocked: "Email confirmed. Open TidGo on the phone with the new WhatsApp number, then tap this button and send the ready LINK message.",
  whatsappAddOnceHint: "Add the number you want to use for sending receipts. Connect it once, then send the ready LINK message in WhatsApp.",
  intakeTitle: "Ways to add records",
  whatsappIntakeText: "WhatsApp intake: connect your number, then send receipt photos to TidGo from WhatsApp.",
  emailIntakeLabel: "Email intake:",
  emailIntakeText: "You can also send income and expense records from the same email you use for TidGo. Forward the email or send a normal email with an attachment. Use subject income or expense if you can.",
  dragDropTitle: "Drop receipt here",
  dragDropHint: "On desktop, drag a receipt photo or screenshot into this box.",
  dropActive: "Let go to add this receipt.",
  proofDropTitle: "Drop income proof here",
  proofDropHint: "On desktop, drag a payslip, remittance note or screenshot into this box.",
  proofDropActive: "Let go to attach this proof.",
  incomeManualCheck: "Please check and enter the amount and date manually to avoid mistakes from busy documents."
});

Object.assign(COPY.ro, {
  incomeSources: "Surse de venit",
  incomeSourcesHint: "Ajuta TidGo sa inteleaga evidenta. Venitul PAYE se trateaza separat; TidGo pastreaza documente pentru self-employment, CIS, landlord sau venit secundar. Nu este software pentru VAT sau LTD.",
  incomeSelfEmployed: "Lucrez pe cont propriu",
  incomeCis: "CIS",
  incomeLandlord: "Venit din chirii",
  incomePayeSide: "PAYE + venit secundar",
  incomeOther: "Altceva"
});

Object.assign(COPY.uk, {
  incomeSources: "Dzherela dokhodu",
  incomeSourcesHint: "Tse dopomahaie TidGo zrozumity vashi zapysy. PAYE dokhid oblikovuietsia okremo; TidGo zberihaye zapysy dlia samozainiatosti, CIS, orendy abo dodatkovoho dokhodu. Tse ne prohrama dlia VAT abo LTD accounting.",
  incomeSelfEmployed: "Samozainiatyi",
  incomeCis: "CIS",
  incomeLandlord: "Dokhid z orendy",
  incomePayeSide: "PAYE + dodatkovyi dokhid",
  incomeOther: "Inshe"
});

Object.assign(COPY.lt, {
  incomeSources: "Pajamu saltiniai",
  incomeSourcesHint: "Tai padeda TidGo suprasti jusu irasus. PAYE pajamos tvarkomos atskirai; TidGo saugo irasus self-employment, CIS, landlord arba papildomoms pajamoms. Tai nera VAT ar LTD apskaitos programa.",
  incomeSelfEmployed: "Dirbu savarankiskai",
  incomeCis: "CIS",
  incomeLandlord: "Nuomos pajamos",
  incomePayeSide: "PAYE + papildomos pajamos",
  incomeOther: "Kita"
});

Object.assign(COPY.lv, {
  incomeSources: "Ienakumu avoti",
  incomeSourcesHint: "Tas palidz TidGo saprast jusu ierakstus. PAYE ienakumi tiek apstradati atseviski; TidGo glaba ierakstus self-employment, CIS, landlord vai papildu darbam. Ta nav VAT vai LTD gramatvedibas programma.",
  incomeSelfEmployed: "Pasnodarbinatais",
  incomeCis: "CIS",
  incomeLandlord: "Ienakumi no ires",
  incomePayeSide: "PAYE + papildu ienakumi",
  incomeOther: "Cits"
});

Object.assign(COPY.es, {
  incomeSources: "Fuentes de ingreso",
  incomeSourcesHint: "Ayuda a TidGo a entender tus registros. El ingreso PAYE se gestiona aparte; TidGo guarda registros para self-employment, CIS, landlord o ingresos secundarios. No es software de contabilidad VAT o LTD.",
  incomeSelfEmployed: "Trabajo por cuenta propia",
  incomeCis: "CIS",
  incomeLandlord: "Ingresos por alquiler",
  incomePayeSide: "PAYE + ingreso secundario",
  incomeOther: "Otro"
});

Object.assign(COPY.bg, {
  incomeSources: "Iztochnitsi na dohod",
  incomeSourcesHint: "Tova pomaga na TidGo da razbere zapisite vi. PAYE dohod se obrabotva otdelno; TidGo pazi zapisi za samozaietost, CIS, naemi ili dopalnitelen dohod. Ne e software za VAT ili LTD accounting.",
  incomeSelfEmployed: "Samozaiet",
  incomeCis: "CIS",
  incomeLandlord: "Dohod ot naem",
  incomePayeSide: "PAYE + dopalnitelen dohod",
  incomeOther: "Drugo"
});

["ro", "uk", "lt", "lv", "es", "bg"].forEach((language) => {
  Object.assign(COPY[language], {
    connectWhatsApp: COPY.en.connectWhatsApp,
    connectWhatsAppHint: COPY.en.connectWhatsAppHint,
    connectWhatsAppFallback: COPY.en.connectWhatsAppFallback,
    tapToView: COPY.en.tapToView,
    rotate: COPY.en.rotate,
    pinchToZoom: COPY.en.pinchToZoom,
    cookieTitle: COPY.en.cookieTitle,
    cookieText: COPY.en.cookieText,
    cookieAccept: COPY.en.cookieAccept,
    cookieDecline: COPY.en.cookieDecline,
    agreeLegal: COPY.en.agreeLegal,
    legalOpenFull: COPY.en.legalOpenFull,
    deleteAccountInfoTitle: COPY.en.deleteAccountInfoTitle,
    legalSettingsAgree: COPY.en.legalSettingsAgree,
    shortPrivacyNoticeTitle: COPY.en.shortPrivacyNoticeTitle,
    shortPrivacyNoticeText: COPY.en.shortPrivacyNoticeText,
    importantNotesTitle: COPY.en.importantNotesTitle,
    importantNotesText: COPY.en.importantNotesText,
    legalConsentTitle: COPY.en.legalConsentTitle,
    legalConsentText: COPY.en.legalConsentText,
    continueToApp: COPY.en.continueToApp,
    replaceReceiptPhoto: COPY.en.replaceReceiptPhoto,
    replaceReceiptHint: COPY.en.replaceReceiptHint,
    archivedBusiness: COPY.en.archivedBusiness,
    moveRecordHint: COPY.en.moveRecordHint,
    legalSettingsTitle: COPY.en.legalSettingsTitle,
    legalSettingsText: COPY.en.legalSettingsText,
    notificationsTitle: COPY.en.notificationsTitle,
    notificationsHint: COPY.en.notificationsHint,
    notifyEmail: COPY.en.notifyEmail,
    notifyPush: COPY.en.notifyPush,
    notifyNone: COPY.en.notifyNone
  });
});

Object.assign(COPY.en, {
  shareTidGo: "Share TidGo",
  shareText: "TidGo keeps receipts, income proof and simple records tidy for self-employed people and accountants.",
  shareCopied: "TidGo link copied.",
  whatsappOnboardingTitle: "WhatsApp intake is available",
  whatsappOnboardingText: "After you create your account, open Settings to connect WhatsApp. Then you can send receipt photos to TidGo without opening the app."
});

Object.assign(COPY.pl, {
  shareTidGo: "UdostÄ™pnij TidGo",
  shareText: "TidGo trzyma paragony, dowody przychodu i proste rekordy w porzÄ…dku dla self-employed i ksiÄ™gowych.",
  shareCopied: "Link TidGo skopiowany.",
  whatsappOnboardingTitle: "WhatsApp intake jest dostÄ™pny",
  whatsappOnboardingText: "Po utworzeniu konta wejdÅº w Ustawienia i poÅ‚Ä…cz WhatsApp. Potem moÅ¼esz wysyÅ‚aÄ‡ zdjÄ™cia paragonÃ³w do TidGo bez otwierania aplikacji."
});

Object.assign(COPY.ro, {
  shareTidGo: "Distribuie TidGo",
  shareText: "TidGo tine bonuri, dovezi de venit si evidente simple ordonate pentru self-employed si contabili.",
  shareCopied: "Linkul TidGo a fost copiat.",
  whatsappOnboardingTitle: "WhatsApp intake este disponibil",
  whatsappOnboardingText: "Dupa ce creezi contul, deschide Settings pentru a conecta WhatsApp. Apoi poti trimite poze cu bonuri catre TidGo fara sa deschizi aplicatia."
});

Object.assign(COPY.uk, {
  shareTidGo: "Share TidGo",
  shareText: "TidGo keeps receipts, income proof and simple records tidy for self-employed people and accountants.",
  shareCopied: "TidGo link copied.",
  whatsappOnboardingTitle: "WhatsApp intake is available",
  whatsappOnboardingText: "After you create your account, open Settings to connect WhatsApp. Then you can send receipt photos to TidGo without opening the app."
});

Object.assign(COPY.lt, {
  shareTidGo: "Dalintis TidGo",
  shareText: "TidGo tvarko kvitus, pajamu irodymus ir paprastus irasus self-employed zmonems ir buhalteriams.",
  shareCopied: "TidGo nuoroda nukopijuota.",
  whatsappOnboardingTitle: "WhatsApp intake veikia",
  whatsappOnboardingText: "Sukure paskyra atidarykite Settings ir prijunkite WhatsApp. Tada galesite siusti kvitu nuotraukas i TidGo neatidare programeles."
});

Object.assign(COPY.lv, {
  shareTidGo: "Kopigot TidGo",
  shareText: "TidGo uztur cekus, ienakumu pieradijumus un vienkarsus ierakstus kartiba self-employed cilvekiem un gramatveziem.",
  shareCopied: "TidGo saite nokopeta.",
  whatsappOnboardingTitle: "WhatsApp intake ir pieejams",
  whatsappOnboardingText: "Pec konta izveides atveriet Settings, lai pieslegtu WhatsApp. Pec tam varat sutit ceku foto uz TidGo, neatverot lietotni."
});

Object.assign(COPY.es, {
  shareTidGo: "Compartir TidGo",
  shareText: "TidGo mantiene recibos, pruebas de ingreso y registros simples ordenados para self-employed y contables.",
  shareCopied: "Enlace de TidGo copiado.",
  whatsappOnboardingTitle: "WhatsApp intake esta disponible",
  whatsappOnboardingText: "Despues de crear la cuenta, abre Settings para conectar WhatsApp. Luego podras enviar fotos de recibos a TidGo sin abrir la app."
});

Object.assign(COPY.bg, {
  shareTidGo: "Share TidGo",
  shareText: "TidGo keeps receipts, income proof and simple records tidy for self-employed people and accountants.",
  shareCopied: "TidGo link copied.",
  whatsappOnboardingTitle: "WhatsApp intake is available",
  whatsappOnboardingText: "After you create your account, open Settings to connect WhatsApp. Then you can send receipt photos to TidGo without opening the app."
});

const LEGAL_TEXT = {
  en: {
    privacy: {
      short: "TidGo keeps only the data needed to save your income, expenses and monthly summary. Receipt photos and account details are used to run the app, not to sell ads or profile you.",
      details: "We store your profile, recovery email, receipt photos, receipt details, income entries and settings. The app uses the TidGo API, MongoDB Atlas, Render, OpenAI for receipt reading, Resend for recovery emails and, if you allow analytics, Google Analytics to understand app usage. You can delete your account and data in Settings."
    },
    terms: {
      short: "TidGo helps organise receipts and prepare a monthly summary for your accountant. It is not accounting, tax, payroll or legal advice.",
      details: "You are responsible for checking entries before sending them on. Keep originals where your accountant or local rules require it. TidGo is a simple record helper and should not replace a qualified accountant."
    }
  },
  pl: {
    privacy: {
      short: "TidGo przechowuje tylko dane potrzebne do zapisania Twoich przychodÃ³w, wydatkÃ³w i miesiÄ™cznego podsumowania. ZdjÄ™cia paragonÃ³w i dane konta sÄ… uÅ¼ywane do dziaÅ‚ania aplikacji, nie do reklam ani profilowania.",
      details: "Przechowujemy profil, email do odzyskania, zdjÄ™cia paragonÃ³w, dane paragonÃ³w, przychody i ustawienia. Aplikacja uÅ¼ywa API TidGo, MongoDB Atlas, Render, OpenAI do czytania paragonÃ³w, Resend do emaili odzyskiwania oraz, jeÅ›li wyrazisz zgodÄ™ na analitykÄ™, Google Analytics do zrozumienia uÅ¼ycia aplikacji. Konto i dane moÅ¼esz usunÄ…Ä‡ w Ustawieniach."
    },
    terms: {
      short: "TidGo pomaga uporzÄ…dkowaÄ‡ paragony i przygotowaÄ‡ miesiÄ™czne podsumowanie dla ksiÄ™gowego. To nie jest ksiÄ™gowoÅ›Ä‡, doradztwo podatkowe, payroll ani porada prawna.",
      details: "Przed wysÅ‚aniem podsumowania sprawdÅº wpisy. OryginaÅ‚y dokumentÃ³w trzymaj tam, gdzie wymaga tego ksiÄ™gowy albo lokalne przepisy. TidGo jest prostym pomocnikiem do porzÄ…dkowania danych i nie zastÄ™puje ksiÄ™gowego."
    }
  },
  ro: {
    privacy: {
      short: "TidGo pastreaza doar datele necesare pentru venituri, cheltuieli si rezumatul lunar. Pozele bonurilor si datele contului sunt folosite pentru aplicatie, nu pentru reclame sau profilare.",
      details: "Stocam profilul, emailul de recuperare, pozele bonurilor, detaliile bonurilor, veniturile si setarile. Aplicatia foloseste API-ul TidGo, MongoDB Atlas, Render, OpenAI pentru citirea bonurilor, Resend pentru emailuri de recuperare si, daca permiti analiza, Google Analytics pentru a intelege folosirea aplicatiei. Iti poti sterge contul si datele din Setari."
    },
    terms: {
      short: "TidGo te ajuta sa organizezi bonuri si sa pregatesti un rezumat lunar pentru contabil. Nu este contabilitate, consultanta fiscala, payroll sau consultanta juridica.",
      details: "Verifica intrarile inainte sa le trimiti. Pastreaza originalele daca iti cere contabilul sau legea locala. TidGo este un ajutor simplu pentru organizare si nu inlocuieste un contabil calificat."
    }
  },
  uk: {
    privacy: {
      short: "TidGo zberihaye lyshe dani, potribni dlya dokhodiv, vytrat i misyachnoho pidsumku. Foto chekiv i dani akauntu vykorystovuyutsya dlya roboty dodatka, ne dlya reklamy abo profilyuvannya.",
      details: "My zberihayemo profil, email dlya vidnovlennya, foto chekiv, dani chekiv, dokhody ta nalashtuvannya. Dodatok vykorystovuye API TidGo, MongoDB Atlas, Render, OpenAI dlya chytannya chekiv, Resend dlya emailiv vidnovlennya i, yakshcho vy dozvolyte analityku, Google Analytics dlya rozuminnya vykorystannya dodatka. Akaunt i dani mozhna vydalyty v Nalashtuvannyakh."
    },
    terms: {
      short: "TidGo dopomahaye vporiadkuvaty cheky i pidhotuvaty misyachnyi pidsumok dlya bukhhaltera. Tse ne bukhhalteriya, podatkova, payroll abo yurydychna porada.",
      details: "Perevirte zapysy pered nadsyllannyam. Zberihayte oryhinaly, yakshcho tse potribno bukhhalteru abo mistsevym pravyÅ‚am. TidGo ye prostym pomichnykom i ne zaminyuye kvalifikovanoho bukhhaltera."
    }
  },
  lt: {
    privacy: {
      short: "TidGo saugo tik duomenis, reikalingus pajamoms, islaidoms ir menesio suvestinei. Kvituku nuotraukos ir paskyros duomenys naudojami programai veikti, ne reklamoms ar profiliavimui.",
      details: "Saugome profili, atkurimo el. pasta, kvituku nuotraukas, kvituku duomenis, pajamas ir nustatymus. Programa naudoja TidGo API, MongoDB Atlas, Render, OpenAI kvitukams nuskaityti, Resend atkurimo el. laiskams ir, jei leidziate analitika, Google Analytics programos naudojimui suprasti. Paskyra ir duomenis galima istrinti Nustatymuose."
    },
    terms: {
      short: "TidGo padeda tvarkyti kvitukus ir paruosti menesio suvestine buhalteriui. Tai nera buhalterija, mokescio, payroll ar teisine konsultacija.",
      details: "Patikrinkite irasus pries siusdami. Originalus laikykite, jei to praso buhalteris ar vietines taisykles. TidGo yra paprastas tvarkymo pagalbininkas ir nepakeicia kvalifikuoto buhalterio."
    }
  },
  lv: {
    privacy: {
      short: "TidGo glaba tikai datus, kas vajadzigi ienakumiem, izdevumiem un menesa kopsavilkumam. Ceku foto un konta dati tiek lietoti lietotnei, ne reklamai vai profilesanai.",
      details: "Mes glabajam profilu, atjaunosanas e-pastu, ceku foto, ceku datus, ienakumus un iestatijumus. Lietotne izmanto TidGo API, MongoDB Atlas, Render, OpenAI ceku nolasisanai, Resend atjaunosanas e-pastiem un, ja atlaujat analitiku, Google Analytics lietotnes izmantosanas saprasanai. Kontu un datus var dzest Iestatijumos."
    },
    terms: {
      short: "TidGo palidz sakartot cekus un sagatavot menesa kopsavilkumu gramatvedim. Ta nav gramatvediba, nodoklu, payroll vai juridiska konsultacija.",
      details: "Parbaudiet ierakstus pirms sutisanas. Originalus glabajiet, ja to prasa gramatvedis vai vietejie noteikumi. TidGo ir vienkarss paligs un neaizstaj kvalificetu gramatvedi."
    }
  },
  es: {
    privacy: {
      short: "TidGo guarda solo los datos necesarios para ingresos, gastos y resumen mensual. Las fotos de recibos y datos de cuenta se usan para la app, no para vender anuncios ni perfilarte.",
      details: "Guardamos perfil, email de recuperacion, fotos de recibos, detalles de recibos, ingresos y ajustes. La app usa la API de TidGo, MongoDB Atlas, Render, OpenAI para leer recibos, Resend para emails de recuperacion y, si permites analitica, Google Analytics para entender el uso de la app. Puedes borrar tu cuenta y datos en Ajustes."
    },
    terms: {
      short: "TidGo ayuda a ordenar recibos y preparar un resumen mensual para tu contable. No es contabilidad, asesoria fiscal, payroll ni consejo legal.",
      details: "Revisa las entradas antes de enviarlas. Guarda originales cuando tu contable o las normas locales lo pidan. TidGo es una ayuda simple de organizacion y no sustituye a un contable cualificado."
    }
  },
  bg: {
    privacy: {
      short: "TidGo pazhi samo dannite, nuzhni za prihodite, razhodite i mesechnoto obobshtenie. Snimkite na belezhki i dannite za akaunta se polzvat za rabota na prilozhenieto, ne za reklami ili profilirane.",
      details: "Sahranyavame profil, email za vazstanovyavane, snimki na belezhki, danni za belezhki, prihodi i nastroiki. Prilozhenieto polzva TidGo API, MongoDB Atlas, Render, OpenAI za chetene na belezhki, Resend za emaili za vazstanovyavane i, ako pozvolite analitika, Google Analytics za razbirane na upotrebata. Mozhete da iztriete akaunta i dannite v Nastroiki."
    },
    terms: {
      short: "TidGo pomaga da podredite belezhki i da podgotvite mesechno obobshtenie za schetovoditel. Tova ne e schetovodstvo, danachna, payroll ili pravna konsultatsiya.",
      details: "Proverete zapisite predi izprashtane. Pazete originalite, kogato schetovoditel ili mestni pravila go iziskvat. TidGo e prost pomoshtnik za red i ne zamestva kvalifitsiran schetovoditel."
    }
  }
};

const FULL_LEGAL_MARKDOWN = {
  privacy: `# TidGo Privacy Policy

**Last updated:** 22 July 2026
**Version:** 0.9 â€” Closed Testing / Beta

> **Beta notice:** TidGo is currently in closed testing (Google Play closed testing) and the PWA is under continuous development until the service is formally launched as a subscription product. This policy reflects how we handle your data during closed testing. We will review and update it before public launch if our infrastructure or processing activities change.

## 1. Who we are

TidGo ("TidGo", "we", "us", "our") is a record-keeping app designed for **self-employed individuals, sole traders, landlords, and individuals with simple income and expense records** (including those keeping records under Making Tax Digital). It helps you collect receipt photos and income proof documents, and produce simple monthly or quarterly summaries.

TidGo is **record-keeping software supporting an accountant-led workflow**. It is not a full accounting system, tax filing service or substitute for an accountant. It does not support limited company accounts, VAT returns, payroll or corporation tax.

TidGo is **not** accounting software, **not** tax advice, and does **not** submit tax returns to HMRC or any tax authority.

**Important â€” accuracy of extracted data:** TidGo uses AI/OCR technology to read receipt and document details automatically. This technology does its best, but it does not verify every item and may occasionally produce inaccurate results. You are responsible for checking that amounts, categories and documents are correct for your situation before using them for any tax, accounting or other official purpose. TidGo displays a reminder of this when you export a monthly or quarterly summary as a PDF.

The data controller for your personal data is:

> **TidGo Ltd**
> Company number: **17356146** (England and Wales)
> 128 City Road, London, EC1V 2NX
> Email: **hello@tidgo.co.uk** / **support@tidgo.co.uk**
> ICO registration number: **ZC205408** (registered 22 July 2026, expires 21 July 2027)

If you have any questions about this policy or how we handle your data, contact us at the email above.

## 2. What data we collect

Depending on how you use TidGo, we may collect:

- **Account and recovery data** â€” your email address. Your email address is required to create and recover your TidGo account, send account security messages, link incoming email records to your account, and contact you about important service matters.
- **Profile data** â€” such as your first name, trade/job and income source.
- **WhatsApp phone number (optional)** â€” only if you choose to connect WhatsApp as an intake channel.
- **Email intake data (optional)** â€” if you send documents to TidGo by email, we process the sender email address (to match the message to your account), the message and its attachments (e.g. payslips or PDFs).
- **Receipt photos and uploaded files** â€” images and documents you upload or send to TidGo.
- **Income proof files** â€” such as payslips, remittance notes or screenshots you upload.
- **Extracted receipt details** â€” such as amount, currency, merchant, category and date, produced automatically from your receipts using OCR/AI.
- **Accountant connection data** â€” if you choose to connect an accountant to your account.
- **Basic usage and analytics data** â€” such as how the app is used, to help us maintain and improve TidGo.

We do not ask you to upload anything you are not comfortable storing in TidGo. Please do not upload documents you do not want stored in the service.

## 3. Why we collect this data and our lawful bases

Under UK data protection law (UK GDPR and the Data Protection Act 2018), we need a lawful basis for processing your personal data. We use your data:

| Purpose | Lawful basis |
|---|---|
| To create your account and let you recover access to it | Performance of a contract |
| To store and organise your receipts and income records | Performance of a contract |
| To read receipt details using OCR/AI and produce extracted data | Performance of a contract |
| To create monthly or quarterly summaries | Performance of a contract |
| To let you share records with an accountant you connect | Performance of a contract / your consent |
| To match incoming WhatsApp messages and documents to your account (if you connect WhatsApp) | Your consent |
| To match incoming emails and attachments to your account (if you use email intake) | Performance of a contract |
| To send service and recovery emails | Performance of a contract / legitimate interests |
| To maintain, secure and improve the app, including basic analytics | Legitimate interests |
| To comply with legal obligations | Legal obligation |

We do **not** sell your personal data. We do **not** use WhatsApp for marketing spam.

**AI/OCR processing:** receipt and income proof images you upload may be sent to the OpenAI API to extract the document type, amount, currency, date, category and merchant/description. This processing is performed solely to provide the service to you. Under OpenAI's API data controls, **data submitted via the API is not used to train OpenAI's models by default**. OpenAI may retain abuse-monitoring logs for up to 30 days, unless a longer period is legally required, after which they are deleted.

## 4. Who we share your data with (processors and services)

We use trusted third-party providers to run TidGo. They process data on our behalf under contractual safeguards:

- **MongoDB Atlas** â€” database storage for account data, structured record details and extracted receipt data. Hosted on **AWS, Ireland (eu-west-1)** â€” data remains within the EU/EEA, no international transfer applies. Note: automated Atlas backups are currently inactive during the testing phase; the backup retention policy will be updated when backups are enabled before production launch.
- **Render** â€” application hosting and API (backend). Hosted in **Oregon, United States**. International transfer applies â€” covered by Render's Data Processing Agreement incorporating SCCs with the UK Addendum.
- **OpenAI (API)** â€” receipt reading (OCR) and classification. US-based â€” international transfer safeguards apply (see Section 5). API data is not used to train OpenAI's models by default; abuse-monitoring logs are retained for up to 30 days.
- **IONOS** (IONOS Cloud Limited) â€” domain registration and administrative email services for tidgo.co.uk. Data processed in the **UK or EEA**. Covered by IONOS Data Processing Agreement v2.0 (03/2026), subject to English law. IONOS holds ISO 27001 certification. No international transfer applies.
- **Resend** â€” outbound service and account recovery emails, and inbound email receiving (emails sent to our intake address are received by Resend and delivered to our backend via webhook). US-based â€” certified under the **EU-US Data Privacy Framework (DPF) and UK Extension to the EU-US DPF**, and SOC 2 and GDPR compliant. DPA available at resend.com/legal/dpa.
- **Scaleway Object Storage (EU)** â€” stores receipt photos, income proof documents and generated PDF reports. Scaleway is a French company (Scaleway S.A.S., Paris) â€” all services are located within the European Union by default; no international transfer applies. When you view a receipt or download a report, our backend generates a short-lived signed URL; your device downloads the file directly from Scaleway without passing through our application servers. When you generate a monthly or quarterly PDF report, TidGo may temporarily retrieve stored receipt and proof files from Scaleway to create the report. Generated reports may also be stored in Scaleway so they can be downloaded again without regenerating them. Covered by Scaleway Data Processing Agreement (version June 1st, 2024), governed by French law.
- **Meta / WhatsApp** â€” WhatsApp message and document intake, only if you choose to connect WhatsApp. Your use of WhatsApp is also governed by WhatsApp's own terms and privacy policy.
- **Google Analytics** â€” website and PWA usage analytics. Data may be processed in the United States â€” covered by Google Ads Data Processing Terms (privacy.google.com/businesses/processorterms), governed by English law, incorporating SCCs for international transfers.

We also share your records with **your accountant**, but only if and when you choose to connect one (see Section 8).

We may disclose data where required by law, regulation or valid legal process.

## 5. International data transfers

Some of our providers process data outside the UK. Our database (MongoDB Atlas) is hosted in Ireland (EU) â€” no international transfer applies. The following providers process data in the United States:

- **Render** (backend/API hosting, Oregon) â€” transfers covered by UK SCCs with UK Addendum
- **OpenAI** (OCR/AI processing) â€” transfers covered by UK SCCs with UK Addendum
- **Resend** (email) â€” certified under the EU-US Data Privacy Framework and **UK Extension to the EU-US DPF**
- **Meta** (WhatsApp, where applicable) â€” transfers covered by Meta's Data Processing Terms (effective 23 August 2025) incorporating the **UK Data Transfer Addendum** for UK GDPR transfers

Each provider listed above has a Data Processing Agreement or equivalent data processing terms in place, providing appropriate safeguards for UK GDPR compliance.

Where data is transferred outside the UK, we rely on safeguards recognised under UK law, such as UK adequacy regulations, the UK Extension to the EUâ€“US Data Privacy Framework, or the UK International Data Transfer Agreement / Addendum (IDTA), as applicable to each provider.

## 6. How long we keep your data (retention)

- Your data is kept **while your account is active**.
- When you delete your account, we delete your active account data, receipts, income records and stored files from our live systems. Some limited technical logs or backups may remain for up to **30 days** before automatic deletion, unless we are legally required to keep them longer.
- Abuse-monitoring logs held by OpenAI are retained by OpenAI for up to 30 days (see Section 3).

**Please note:** if you use TidGo to keep business records, UK law (HMRC) may require *you* to keep your own copies of business records for several years. Deleting your TidGo account deletes your data from TidGo â€” it does not fulfil or remove your own record-keeping obligations.

## 7. Account deletion

You can delete your account and all your data at any time from **Settings â†’ Delete account**. Once deleted from our live systems, your data cannot be recovered.

## 8. Accountant access

Accountant access is **optional and fully consent-based**. Here is how it works:

- You enter your accountant's email address in the app.
- Your accountant receives an email invitation asking if they want access to your records.
- If they accept, a six-digit access code is sent to the email address you provided.
- From that point, your accountant has **read-only** access â€” they can view and download your records as CSV or PDF exports, but cannot make any changes.
- You can revoke access or change your accountant at any time from Settings â†’ Connect accountant â†’ Revoke access.

Your accountant's email address is processed solely to send the invitation and access code. We do not use it for any other purpose.

If you connect an accountant, your accountant is independently responsible for how they handle any data they access or export in the course of providing services to you.

## 9. How you can send documents to TidGo (intake channels)

You can add documents to your TidGo account in several ways:

- **In-app photo/upload** â€” taking a photo or uploading a file in the Android app or the PWA (on your phone, desktop or browser).
- **WhatsApp (optional)** â€” sending a receipt photo or document by WhatsApp.
- **Email (optional)** â€” sending an email with an attachment (e.g. a payslip or PDF) to your TidGo intake address.

**WhatsApp intake:**

- We use your phone number solely to match incoming WhatsApp receipt photos and documents to the correct TidGo account.
- You start the connection yourself by sending a **LINK** message.
- We do not use WhatsApp for marketing.
- You can disconnect WhatsApp at any time from within the app (Settings â†’ disconnect WhatsApp), or by deleting your account.
- Messages you send via WhatsApp are also processed by Meta under WhatsApp's own terms.

**Email intake:**

- We use the sender email address solely to match the incoming message and its attachments to the correct TidGo account.
- Emails and attachments are processed only to add the documents to your account; the intake channel is not used for marketing.
- IONOS provides domain registration for tidgo.co.uk. Resend receives emails sent to our intake address and delivers them securely to our backend. See Section 4 for details of these providers.

## 10. Security

We take reasonable technical and organisational measures to protect your data:

- Data is transmitted over HTTPS (encrypted in transit).
- Data is stored with reputable third-party cloud providers.
- We implement appropriate technical and organisational security measures to protect your data, including: encrypted connections (HTTPS/TLS 1.2 or higher) for all data in transit; encryption at rest using AES for stored data; access controls based on the principle of least privilege; and multi-factor authentication where technically feasible. Our hosting provider (Render) holds annual SOC 2 and ISO 27001 certifications and conducts independent third-party security testing. No system is 100% secure; if we become aware of a breach affecting your data, we will notify you and the ICO as required by law.



## 11. Your rights

Under UK data protection law, you have the right to:

- **access** the personal data we hold about you,
- **rectify** inaccurate data,
- **erase** your data ("right to be forgotten"),
- **restrict** or **object** to certain processing,
- **data portability** (receive your data in a usable format),
- **withdraw consent** at any time where processing is based on consent (e.g. WhatsApp connection, accountant access),
- **complain** to the Information Commissioner's Office (ICO): [ico.org.uk](https://ico.org.uk).

To exercise any of these rights, contact us at **support@tidgo.co.uk** or use the tools in the app (e.g. Settings â†’ Delete account). We will respond within one month.

## 12. Children

TidGo is a business tool intended for users aged **18 or over**. We do not knowingly collect data from children.

## 13. Analytics and cookies

**PWA and website (tidgo.co.uk)**

The TidGo website and PWA use Google Analytics to understand how the service is used and to improve it. Google Analytics uses cookies and device identifiers and may process data in the United States â€” covered by Google Ads Data Processing Terms (privacy.google.com/businesses/processorterms), governed by English law, incorporating SCCs for international transfers.

Under UK PECR, we are required to obtain your consent before setting non-essential cookies (including Google Analytics cookies). A cookie consent banner is displayed on first visit to the TidGo website and PWA. You can withdraw consent or manage your cookie preferences at any time via the cookie settings link in the footer.

A separate Cookie Policy describing all cookies and local storage used by TidGo is available at: [tidgo.co.uk/cookies](https://tidgo.co.uk/cookies/).

**Android app**

The TidGo Android app does not currently use Google Analytics or Firebase Analytics. No third-party analytics or advertising identifiers are collected within the Android app.

## 14. Early access notice

TidGo is currently in **closed testing** (Google Play closed testing), and the PWA remains under continuous development until the service is formally announced as a subscription product. Features may change and data structures may evolve during this phase. We will inform you of material changes to this policy. You will always be told clearly before any paid plan applies to you.

## 15. Changes to this policy

We may update this policy from time to time. We will post the updated version in the app and on our website with a new "Last updated" date, and where changes are significant, we will notify you directly (e.g. by email or in-app notice).

## 16. Governing law

This Privacy Policy is governed by the laws of **England and Wales**. Any disputes relating to this policy or the processing of your personal data will be subject to the jurisdiction of the courts of England and Wales, without affecting your right to lodge a complaint with the ICO or any other supervisory authority in your country of residence.

## 17. Contact

Questions, requests or complaints:
**hello@tidgo.co.uk** / **support@tidgo.co.uk**
128 City Road, London, EC1V 2NX`,
  terms: `# TidGo Terms & Conditions

**Last updated:** 30 July 2026
**Version:** 0.10 â€” Closed Testing / Beta

Please read these Terms & Conditions ("Terms") carefully before using TidGo. You accept these Terms by ticking the acceptance box when creating an account, and by continuing to use TidGo. If you do not agree, please do not use the service.

## 1. Who we are

TidGo is operated by:

> **TidGo Ltd**
> Company number: **17356146** (England and Wales)
> 128 City Road, London, EC1V 2NX
> Email: **hello@tidgo.co.uk** / **support@tidgo.co.uk**

## 2. What TidGo is â€” and what it is not

TidGo is a record-keeping app designed for **self-employed individuals, sole traders, landlords, and individuals with simple income and expense records** (including those keeping records under Making Tax Digital). It helps you collect receipt photos and income proof documents, and produce simple monthly or quarterly summaries for your own records or to share with your accountant.

**TidGo is designed for simple record-keeping only. It does not support limited company accounts, VAT returns, payroll or corporation tax.** If you need any of these, please use appropriate accounting software.

**TidGo is NOT:**

- accounting software,
- tax, legal or financial advice,
- a tax filing service â€” TidGo does **not** submit tax returns to HMRC or any other tax authority,
- a substitute for a qualified accountant or tax adviser.

TidGo does not decide whether an expense is tax deductible, whether your records are complete, or whether your summaries are correct for tax purposes.

## 3. Eligibility

You must be at least **18 years old** and capable of entering into a binding contract to use TidGo. TidGo is intended for self-employed individuals, sole traders, landlords and other unincorporated users with simple income and expense records.

## 4. Your account

- You are responsible for keeping your account access secure.
- You must provide an email address that you control and can access. TidGo uses this email for account access, recovery, security messages and matching records sent by email. You are responsible for keeping your email address current and maintaining access to it.
- You must not share your account with others or use another person's account without permission.
- You are responsible for all activity that occurs under your account.

## 5. Early access / testing

TidGo is currently in a **closed testing / beta phase**:

- The Android app is available via **Google Play closed testing** only.
- The PWA (web app) is **under continuous development** and will remain so until TidGo is formally launched as a subscription product.
- Features may change, be added or removed at any time; occasional bugs, downtime or data-format changes may occur.
- The service is provided **free of charge** during this phase. When TidGo launches as a subscription product, **you will always be clearly informed before any paid plan starts or applies to you**, and no charges will apply without your agreement.
- Android closed testers may be offered free access to the TidGo Core plan as a reward for taking part in testing. To qualify, you must join the Google Play closed test, remain a tester for at least 14 days, genuinely try the app, and send short honest feedback or report problems. We do **not** require a positive review, star rating or public endorsement. "Free access" means free access to the TidGo Core plan for as long as the service remains available. It is non-transferable, and optional future paid add-ons are not included.

## 6. Your content and data

- You retain ownership of all receipts, photos, documents and data you upload ("Your Content").
- You grant TidGo a limited licence to store, process and display Your Content solely to provide the service to you (including OCR/AI extraction, summaries, and sharing with an accountant you connect).
- You are responsible for ensuring you have the right to upload Your Content.
- Do not upload content that is illegal, infringes others' rights, or that you do not want stored in TidGo.

How we handle personal data is described in our [Privacy Policy](https://tidgo.co.uk/privacy/), which forms part of these Terms.

## 7. Accuracy â€” your responsibility to check

TidGo uses OCR and AI to read receipt details (amounts, merchants, dates, categories). **OCR/AI may make mistakes.**

You are responsible for checking all amounts, categories, dates, receipt contents and summaries **before** using, exporting, sharing or relying on them â€” including before sharing with an accountant or using them for any tax or business purpose.

TidGo accepts no responsibility for decisions made, or returns filed, based on unchecked or inaccurate extracted data.

## 8. Accountant access

- Connecting an accountant is optional and requires your approval.
- Accountant access is read-only unless a future feature clearly states otherwise and you approve it.
- You can revoke accountant access at any time.
- TidGo is not a party to the relationship between you and your accountant and is not responsible for the accountant's services, advice or conduct.

## 9. Intake channels (in-app, WhatsApp, email)

You can add documents to TidGo in-app (Android or PWA), by WhatsApp, or by email:

- Connecting WhatsApp is optional and started by you (by sending a LINK message). If connected, TidGo uses your phone number only to match incoming receipt photos/documents to your account. WhatsApp is a third-party service provided by Meta and subject to Meta's own terms; TidGo is not responsible for WhatsApp's availability or conduct.
- Email intake is optional. TidGo uses the sender email address only to match incoming emails and attachments (e.g. payslips, PDFs) to your account. Only send documents from an email address linked to your account, and only send file types supported by the service.
- You are responsible for ensuring documents you send via any channel reach the correct account (e.g. sending from your registered email address or linked WhatsApp number). Documents that cannot be matched to an account may be rejected and deleted.

## 10. Acceptable use

You agree not to:

- use TidGo for any unlawful purpose, including fraud or money laundering,
- upload malicious code or attempt to breach, probe or disrupt the service,
- attempt to access other users' accounts or data,
- reverse-engineer, scrape or copy the service except as permitted by law,
- resell or provide the service to third parties without our written agreement.

We may suspend or terminate accounts that breach these Terms.

## 11. Record-keeping obligations remain yours

UK law may require you to keep your own business records (for example, HMRC generally expects self-employed records to be kept for at least 5â€“6 years). TidGo is a convenience tool â€” it does not replace your legal obligation to retain your own records. We strongly recommend keeping your own copies/exports of important documents.

## 12. Availability and changes to the service

- We aim to keep TidGo available and working well, but we do not guarantee uninterrupted or error-free operation, especially during early access.
- We may modify, suspend or discontinue the service (in whole or in part). If we discontinue the service or materially reduce it, we will give you reasonable notice and an opportunity to export your data where practicable.

## 13. Termination

- You may stop using TidGo and delete your account at any time from Settings.
- We may suspend or terminate your account if you materially breach these Terms, if required by law, or if we discontinue the service (with notice as described above).
- On deletion, your data is removed from active systems as described in the Privacy Policy.

## 14. Disclaimers

To the fullest extent permitted by law:

- TidGo is provided **"as is"** and **"as available"**, without warranties of any kind, whether express or implied, including fitness for a particular purpose or accuracy of extracted data.
- TidGo uses AI/OCR technology to extract details from receipts and documents. This technology does not verify every item and may produce inaccurate results. **Before using any extracted data for tax, accounting or official purposes, you must check that amounts, categories and documents are correct for your situation.** TidGo displays this reminder within the app when you export a monthly or quarterly summary as a PDF.
- TidGo does not provide tax, accounting, legal or financial advice, and no output of the service should be treated as such.

Nothing in these Terms excludes or limits liability that cannot be excluded under UK law, including liability for death or personal injury caused by negligence, or for fraud.

## 15. Limitation of liability

To the fullest extent permitted by law:

- TidGo is not liable for indirect or consequential losses, loss of profits, loss of business, or loss of data (beyond taking reasonable steps to protect it as described in the Privacy Policy).
- TidGo is not liable for penalties, interest, additional tax or losses arising from inaccurate, incomplete or unchecked records, extracted data or summaries.
- During any free or early-access period, our total liability to you in connection with the service is limited to **Â£100**. Once paid plans apply, our total liability is limited to the amount you paid to TidGo in the **previous 12 months**.

## 16. Intellectual property

TidGo, its name, branding, software and design are owned by us or our licensors. These Terms do not grant you any rights to our intellectual property other than the right to use the service as intended.

## 17. Changes to these Terms

We may update these Terms from time to time (for example, when new features launch or paid plans are introduced). We will post the updated Terms with a new "Last updated" date and, for material changes, notify you in-app or by email. Continued use of TidGo after changes take effect means you accept the updated Terms.

## 18. Governing law and disputes

These Terms are governed by the laws of **England and Wales**. Any disputes arising from these Terms or your use of TidGo will be subject to the exclusive jurisdiction of the courts of England and Wales, without affecting any mandatory consumer rights you may have under the law of your country of residence.

## 19. Contact

Questions about these Terms:
**hello@tidgo.co.uk** / **support@tidgo.co.uk**
128 City Road, London, EC1V 2NX`
};

const INCOME_SOURCE_KEYS = ["self_employed", "cis", "landlord", "paye_side", "other"];

function marketingLanguageFromPath() {
  const first = location.pathname.split("/").filter(Boolean)[0];
  return MARKETING_LANGUAGES[first] ? first : "";
}

const state = {
  user: read("rb_signed_out", false) ? null : read("rb_user", null),
  language: read("rb_language", "en"),
  humour: read("rb_humour", "funny"),
  accountantEmail: read("rb_accountant_email", ""),
  accountantConsents: [],
  accountantPortalEmail: read("rb_accountant_portal_email", ""),
  accountantPendingEmail: read("rb_accountant_pending_email", ""),
  accountantDisplayName: read("rb_accountant_display_name", ""),
  accountantCodeSent: false,
  accountantClients: [],
  accountantClientRecords: null,
  accountantSelectedClientId: null,
  accountantClientListOpen: false,
  accountantClientSearch: "",
  adminEmail: read("tg_admin_email", ""),
  adminPendingEmail: read("tg_admin_pending_email", ""),
  adminCodeSent: false,
  adminToken: sessionStorage.getItem("tg_admin_token") || "",
  adminUsers: [],
  adminError: "",
  adminSearch: "",
  adminSearchDraft: "",
  whatsappChangeCodeSent: false,
  whatsappChangeUnlocked: false,
  whatsappChangeOpen: false,
  whatsappChangeEmail: "",
  emailChangeOpen: false,
  emailChangeCodeSent: false,
  emailChangeNewEmail: "",
  pendingSignupEmail: read("rb_pending_signup_email", ""),
  pendingSignupWhatsApp: read("rb_pending_signup_whatsapp", ""),
  pendingSignupIncomeSources: read("rb_pending_income_sources", []),
  marketingLanguage: marketingLanguageFromPath() || (MARKETING_LANGUAGES[read("tg_marketing_language", "en")] ? read("tg_marketing_language", "en") : "en"),
  marketingSection: read("tg_marketing_section", "how"),
  incomeProofs: read("rb_income_proofs", {}),
  recordBusinessMeta: read("rb_record_business_meta", {}),
  screen: initialScreen(),
  receipts: [],
  income: [],
  recordsLoading: false,
  pendingRecordKind: "",
  pendingBusinessType: "",
  pendingBusinessSlotId: "",
  apiUnavailable: false,
  selected: null,
  imageViewer: null,
  imageRotation: 0,
  summaryDate: new Date(),
  summaryPeriod: read("rb_summary_period", "month") === "quarter" ? "quarter" : "month",
  quarterMode: ["calendar", "uk_tax", "mtd_running"].includes(read("rb_quarter_mode", "calendar")) ? read("rb_quarter_mode", "calendar") : "calendar",
  summaryBusinessSlotId: read("rb_summary_business_slot_id", "all") || "all",
  transactionLimit: 4,
  loading: false,
  routeMotion: ""
};

const app = document.querySelector("#app");
const expensePhotoPicker = document.querySelector("#expensePhotoPicker");
const expenseFilePicker = document.querySelector("#expenseFilePicker");

state.incomeProofs = compactIncomeProofs(state.incomeProofs);
try {
  write("rb_income_proofs", state.incomeProofs);
} catch {
  state.incomeProofs = {};
  forget("rb_income_proofs");
}

function isAccountantRoute() {
  return location.hostname.startsWith("accountant.") || location.pathname.replace(/\/+$/, "") === "/accountant";
}

function isAppRoute() {
  return location.pathname.replace(/\/+$/, "") === "/app";
}

function isAppDemoRoute() {
  return location.pathname.replace(/\/+$/, "") === "/app-demo";
}

function isAccountantDemoRoute() {
  return location.pathname.replace(/\/+$/, "") === "/accountant-demo";
}

function isAdminRoute() {
  return location.pathname.replace(/\/+$/, "") === "/admin";
}

function marketingPageSlug() {
  let path = location.pathname.replace(/\/+$/, "") || "/";
  const parts = path.split("/").filter(Boolean);
  if (parts.length > 1 && MARKETING_LANGUAGES[parts[0]]) {
    path = `/${parts.slice(1).join("/")}`;
  }
  const routes = {
    "/how-it-works": "how",
    "/who-is-it-for": "who",
    "/how-intake-works": "intake",
    "/find-accountant": "findAccountant",
    "/show-this-to-your-accountant": "accountantPack",
    "/launch-pricing": "pricing",
    "/faq": "faq",
    "/our-story": "story",
  "/nasza-historia": "story",
  "/povestea-noastra": "story",
  "/musu-istorija": "story",
    "/founding-tester": "androidTesters",
    "/android-testers": "androidTesters",
    "/mtd": "mtd",
    "/mtd/what-you-do-accountant-does": "mtdResponsibilities",
    "/mtd/automatically-signed-up": "mtdAutoSignup",
    "/mtd/qualifying-income": "mtdQualifyingIncome",
    "/mtd/government-gateway": "mtdGateway",
    "/mtd/do-i-have-to-photograph-receipts": "mtdReceiptsMyth",
    "/mtd/cis-myths": "mtdCisMyths",
    "/mtd/getting-started": "mtdGettingStarted",
    "/mtd/sole-traders": "mtdSoleTraders",
    "/mtd/landlords": "mtdLandlords",
    "/mtd/cis": "mtdCis",
    "/mtd/digital-records": "mtdDigitalRecords",
    "/mtd/can-i-use-spreadsheets": "mtdSpreadsheets",
    "/mtd/quarterly-updates": "mtdQuarterlyUpdates",
    "/mtd/missed-7-august-deadline": "mtdMissedDeadline",
    "/mtd/faqs": "mtdFaqs",
    "/mtd/what-is-mtd": "mtdWhat",
    "/mtd/who-needs-mtd": "mtdWho",
    "/mtd/when-does-mtd-start": "mtdWhen",
    "/mtd/what-records-do-i-need": "mtdRecords",
    "/mtd/paper-receipts": "mtdPaper",
    "/mtd/can-i-use-photos": "mtdPhotos",
    "/mtd/does-tidgo-submit-to-hmrc": "mtdSubmit",
    "/mtd/do-i-need-an-accountant": "mtdAccountant",
    "/privacy": "privacy",
    "/terms": "terms",
    "/delete-account": "deleteAccountInfo"
  };
  return routes[path] || "";
}

function isMarketingPageRoute() {
  return Boolean(marketingPageSlug());
}

function isLandingRoute() {
  return !isAccountantRoute() && !isAppRoute() && !isAppDemoRoute() && !isAccountantDemoRoute() && !isAdminRoute() && !isMarketingPageRoute();
}

function initialScreen() {
  if (isAdminRoute()) return "adminLanding";
  if (isAccountantRoute()) return "accountantLanding";
  if (isAppDemoRoute()) return "appDemo";
  if (isAccountantDemoRoute()) return "accountantDemo";
  if (isMarketingPageRoute()) return "marketingPage";
  if (isLandingRoute()) return "landing";
  return "boot";
}

function isFastPublicScreen() {
  return ["landing", "marketingPage", "appDemo", "accountantDemo"].includes(state.screen);
}

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

function at(key) {
  return (ACCOUNTANT_COPY[state.language] || ACCOUNTANT_COPY.en)[key] || ACCOUNTANT_COPY.en[key] || key;
}

function dt(key) {
  return (DOWNLOAD_COPY[state.language] || DOWNLOAD_COPY.en)[key] || DOWNLOAD_COPY.en[key] || key;
}

function mk(key) {
  return (MARKETING_COPY[state.marketingLanguage] || MARKETING_COPY.en)[key] || MARKETING_COPY.en[key] || key;
}

function marketingLegalTitle(kind) {
  const titles = {
    en: { privacy: "Privacy Policy", terms: "Terms" },
    pl: { privacy: "Polityka prywatnoÅ›ci", terms: "Regulamin" },
    ro: { privacy: "Politica de confidenÈ›ialitate", terms: "Termeni" },
    lt: { privacy: "Privatumo politika", terms: "SÄ…lygos" }
  };
  const languageTitles = titles[state.marketingLanguage] || titles.en;
  return languageTitles[kind] || titles.en[kind] || kind;
}

function marketingOfficialLegalNotice() {
  if (state.marketingLanguage === "en") return "";
  const titles = {
    pl: "Oficjalna wersja angielska",
    ro: "Versiunea oficialÄƒ Ã®n englezÄƒ",
    lt: "Oficiali angliÅ¡ka versija"
  };
  const notices = {
    pl: "PeÅ‚ny dokument prawny jest dostÄ™pny po angielsku, poniewaÅ¼ TidGo jest firmÄ… zarejestrowanÄ… w UK, a wersja angielska jest oficjalnÄ… wersjÄ… prawnÄ….",
    ro: "Documentul juridic complet este disponibil Ã®n limba englezÄƒ, deoarece TidGo este o companie Ã®nregistratÄƒ Ã®n UK, iar versiunea Ã®n limba englezÄƒ este versiunea juridicÄƒ oficialÄƒ.",
    lt: "Pilnas teisinis dokumentas pateikiamas anglÅ³ kalba, nes TidGo yra JK registruota Ä¯monÄ—, o angliÅ¡ka versija yra oficiali teisinÄ— versija."
  };
  const notice = notices[state.marketingLanguage] || notices.en;
  const title = titles[state.marketingLanguage] || "Official English version";
  return notice ? `<div class="platform-note legal-official-note"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(notice)}</span></div>` : "";
}

function marketingLanguagePicker() {
  return `
    <div class="marketing-language-switcher" aria-label="Marketing page language">
      ${Object.entries(MARKETING_LANGUAGES).map(([code, language]) => `
        <button class="marketing-lang ${state.marketingLanguage === code ? "active" : ""}" type="button" data-marketing-language="${code}">
          <span class="flag flag-${language.country}" aria-hidden="true"></span>
          <span>${escapeHtml(language.label)}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function marketingNav(active = "") {
  return `
    <nav class="landing-nav" aria-label="TidGo navigation">
      <a class="nav-story ${active === "story" ? "active" : ""}" href="/our-story">${mk("navStory")}</a>
      <a class="${active === "foundingTester" ? "active" : ""}" href="/founding-tester">${mk("foundingTester")}</a>
      <a class="${active === "how" ? "active" : ""}" href="/how-it-works">${mk("navHow")}</a>
      <a class="${active === "who" ? "active" : ""}" href="/who-is-it-for">${mk("navWho")}</a>
      <a class="${active === "intake" ? "active" : ""}" href="/how-intake-works">${mk("navIntake")}</a>
      <a class="${active === "findAccountant" ? "active" : ""}" href="/find-accountant">${mk("navFindAccountant")}</a>
      <a class="${active === "accountantPack" ? "active" : ""}" href="/show-this-to-your-accountant">${mk("navAccountantPack")}</a>
      <a class="${active === "pricing" ? "active" : ""}" href="/launch-pricing">${mk("navPricing")}</a>
      <a class="${active === "faq" ? "active" : ""}" href="/faq">${mk("navFaq")}</a>
      <a class="nav-mtd ${active === "mtd" ? "active" : ""}" href="/mtd">${mk("navMtd")}</a>
      <a href="/#contact">${mk("navContact")}</a>
    </nav>
  `;
}

function androidTesterCallout(extraClass = "") {
  const className = ["story-callout", extraClass].filter(Boolean).join(" ");
  return `
    <section class="${className}">
      <strong>${mk("testerCalloutTitle")}</strong>
      <span>${mk("testerCalloutText")}</span>
      <a class="primary landing-link" href="/android-testers">${mk("testerCalloutButton")}</a>
    </section>
  `;
}

function landingHeader(active = "") {
  return `
    <header class="landing-head">
      <a class="brand landing-brand" href="/"><img src="/icon-192.png" alt=""><span>TidGo<sup>TM</sup></span></a>
      <div class="landing-head-actions">
        ${marketingNav(active)}
        ${marketingLanguagePicker()}
      </div>
    </header>
  `;
}

function landingFooter() {
  return `
    <footer class="landing-foot">
      <div class="landing-foot-copy">
        <span>${mk("footer")} <strong>${mk("copyright")}</strong></span>
        <span class="landing-company-line">${mk("companyFooter")}</span>
        <span class="landing-legal-links"><a href="/our-story">${mk("navStory")}</a><a href="/find-accountant">${mk("navFindAccountant")}</a><a href="/privacy">${marketingLegalTitle("privacy")}</a><a href="/terms">${marketingLegalTitle("terms")}</a><a href="/delete-account">${mk("deleteAccountLink")}</a></span>
        <span class="landing-privacy-note">${mk("privacyNote")}</span>
      </div>
    </footer>
  `;
}

function mtdTopics() {
  return [
    ["mtdResponsibilities", "mtdResponsibilitiesText", state.marketingLanguage === "en" ? "/mtd/what-you-do-accountant-does" : `/${state.marketingLanguage}/mtd/what-you-do-accountant-does`],
    ["mtdAutoSignup", "mtdAutoSignupText", state.marketingLanguage === "en" ? "/mtd/automatically-signed-up" : `/${state.marketingLanguage}/mtd/automatically-signed-up`],
    ["mtdWho", "mtdWhoText", state.marketingLanguage === "en" ? "/mtd/who-needs-mtd" : `/${state.marketingLanguage}/mtd/who-needs-mtd`],
    ["mtdWhat", "mtdWhatText", state.marketingLanguage === "en" ? "/mtd/what-is-mtd" : `/${state.marketingLanguage}/mtd/what-is-mtd`],
    ["mtdQualifyingIncome", "mtdQualifyingIncomeText", state.marketingLanguage === "en" ? "/mtd/qualifying-income" : `/${state.marketingLanguage}/mtd/qualifying-income`],
    ["mtdDigitalRecords", "mtdDigitalRecordsText", state.marketingLanguage === "en" ? "/mtd/digital-records" : `/${state.marketingLanguage}/mtd/digital-records`],
    ["mtdSpreadsheets", "mtdSpreadsheetsText", state.marketingLanguage === "en" ? "/mtd/can-i-use-spreadsheets" : `/${state.marketingLanguage}/mtd/can-i-use-spreadsheets`],
    ["mtdQuarterlyUpdates", "mtdQuarterlyUpdatesText", mtdQuarterlyUpdatesHref()],
    ["mtdReceiptsMyth", "mtdReceiptsMythText", state.marketingLanguage === "en" ? "/mtd/do-i-have-to-photograph-receipts" : `/${state.marketingLanguage}/mtd/do-i-have-to-photograph-receipts`],
    ["mtdGateway", "mtdGatewayText", state.marketingLanguage === "en" ? "/mtd/government-gateway" : `/${state.marketingLanguage}/mtd/government-gateway`],
    ["mtdCis", "mtdCisText", state.marketingLanguage === "en" ? "/mtd/cis" : `/${state.marketingLanguage}/mtd/cis`],
    ["mtdCisMyths", "mtdCisMythsText", state.marketingLanguage === "en" ? "/mtd/cis-myths" : `/${state.marketingLanguage}/mtd/cis-myths`]
  ];
}



const MTD_SPREADSHEETS_ARTICLES = {
  "en": {
    "title": "Do I have to throw away my spreadsheet? Excel, MTD and bridging software explained",
    "html": "<h2>I've used Excel for twenty years. It worked. Why is it suddenly a problem?</h2>\n<p>It isn't. Not exactly.</p>\n<p>Excel is not banned under Making Tax Digital. HMRC has not sent anyone a letter saying &quot;delete your spreadsheets immediately or face consequences.&quot; If someone told you that, they were wrong.</p>\n<p>But â€” and this is the bit nobody explains clearly â€” Excel on its own is not enough anymore. Not because your spreadsheet is wrong. Because of how it connects to everything else.</p>\n<p>Here's the actual rule: your digital records must flow to HMRC through a <strong>digital link</strong>. No manual retyping. No copy-paste between systems. No printing it out and typing the numbers in somewhere else. The data has to move digitally, end to end.</p>\n<p>Excel doesn't talk to HMRC directly. So if you want to keep your spreadsheet, you need something in the middle â€” a <strong>bridging software</strong> â€” that reads your Excel and sends the numbers to HMRC without you touching them.</p>\n<p>That's it. Excel plus bridging software equals legal. Excel alone equals not compliant.</p>\n<h2>So what's bridging software then?</h2>\n<p>Think of it as a translator. Your Excel speaks &quot;spreadsheet.&quot; HMRC speaks &quot;API.&quot; Bridging software sits between them, reads your numbers and sends them in the right format.</p>\n<p>There are plenty of options â€” some free, some cheap, some part of bigger packages. HMRC keeps <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">a list of compatible software</a> and bridging tools are on there.</p>\n<h2>The bit Excel can't help you with: keeping the actual receipts</h2>\n<p>Here's the part that often gets lost in the Excel conversation.</p>\n<p>Even if your spreadsheet is perfectly connected and fully compliant, <strong>you still need to keep the receipts, invoices and payslips behind those numbers for five years.</strong></p>\n<p>Not in Excel. The actual documents.</p>\n<p>HMRC doesn't want your spreadsheet as proof. HMRC wants the receipt that proves the number in the spreadsheet is real. Your digital record (date, amount, category) is what MTD requires. The supporting document (the receipt, the invoice, the bank statement) is what the law has always required â€” and still does.</p>\n<p>A thermal receipt from a builders' merchant is unreadable long before five years are up. Paper fades. <a href=\"/mtd/do-i-have-to-photograph-receipts\">The full explanation of what HMRC actually requires â€” and why photos help even though they're not mandatory â€” is here.</a></p>\n<p><strong>TidGo collects receipts, CIS payslips and income proof as they happen â€” by WhatsApp photo, forwarded email or in the app. Works alongside your spreadsheet, not instead of it. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Try free, no card needed â†’</a></strong></p>\n<h2>The copy-paste rule â€” this one catches people out</h2>\n<p>Once you've submitted a quarterly update, you cannot manually transfer those records to another system. Not by retyping. Not by copy-paste. Not by screenshotting and entering manually somewhere else.</p>\n<p>If you use more than one piece of software â€” say, Excel for recording and something else for submitting â€” they must be <strong>digitally linked</strong>. Meaning the data flows automatically, not through your fingers.</p>\n<p>One practical example: you keep a spreadsheet, do your quarterly totals, copy them into a different program to submit. That's exactly what the rule prohibits. The spreadsheet needs to feed the submission software directly â€” formula, data connection, export. Not Ctrl+C, Ctrl+V.</p>\n<p><strong>The digital link between your records and your submission is the part most people get wrong. TidGo handles the record side â€” tidy, dated, categorised â€” so whoever does your submission has something clean to work from. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">See how it works â†’</a></strong></p>\n<h2>What if my turnover is under Â£90,000?</h2>\n<p>Good news. Below Â£90,000 turnover from a self-employment source, you can use <strong>simplified categorisation</strong> â€” meaning you only record whether each transaction is income or an expense. No subcategories, no splitting fuel from materials from tools.</p>\n<p>For a lot of sole traders, that's a very short spreadsheet. Which makes the bridging software conversation a lot simpler.</p>\n<h2>Where to keep the actual documents</h2>\n<p>Cloud storage. Your computer. An external drive. A USB stick. Wherever you can find them in five years and they'll still be readable.</p>\n<p>A floppy disc, if you still have a machine that reads them â€” HMRC hasn't specifically banned those either. CD-ROM is also technically fine. Though we'd gently suggest a backup plan. And a backup of the backup. On something made after 2005.</p>\n<h2>Honestly â€” should you bother with Excel at all?</h2>\n<p>If you're already comfortable with spreadsheets and your records are clean â€” keeping Excel with a bridging tool is a perfectly reasonable choice. It costs less than full accounting software, you understand it, and it works.</p>\n<p>If you're not really using Excel properly anyway â€” just throwing numbers in somewhere and hoping for the best â€” this might be the moment to try something simpler. Not because the law requires it. Because a mess in Excel is still a mess, just a digital one.</p>\n<p>For your specific situation, ask your accountant. This covers the general rules. Not tax advice.</p>\n<p><strong>TidGo works with your accountant, not instead of them. Works with your spreadsheet, not instead of it. Works before HMRC asks questions â€” not instead of answering them.</strong> <strong>Not a replacement for any of them. Just the layer that was missing.</strong> <strong><a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Start free â€” no card needed â†’</a></strong></p>\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital â€” create digital records</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find compatible software</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a> â€” GOV.UK</li>\n</ul>"
  },
  "pl": {
    "title": "Czy muszÄ™ wyrzuciÄ‡ Excela? Arkusze, MTD i bridging software po ludzku",
    "html": "<h2>Mam Excela od dwudziestu lat. DziaÅ‚aÅ‚. Dlaczego nagle jest problemem?</h2>\n<p>Nie jest. Nie do koÅ„ca.</p>\n<p>Excel nie jest zakazany przez Making Tax Digital. HMRC nie wysÅ‚aÅ‚o nikomu listu z napisem &quot;usuÅ„ arkusze natychmiast albo groÅ¼Ä… konsekwencje&quot;. JeÅ›li ktoÅ› Ci tak powiedziaÅ‚ â€” myliÅ‚ siÄ™.</p>\n<p>Ale â€” i tu jest ta czÄ™Å›Ä‡, ktÃ³rej nikt nie tÅ‚umaczy wprost â€” sam Excel juÅ¼ nie wystarczy. Nie dlatego Å¼e TwÃ³j arkusz jest zÅ‚y. Dlatego jak siÄ™ Å‚Ä…czy z resztÄ… Å›wiata.</p>\n<p>Zasada jest taka: Twoje cyfrowe rekordy muszÄ… pÅ‚ynÄ…Ä‡ do HMRC przez <strong>cyfrowe poÅ‚Ä…czenie</strong>. Å»adnego rÄ™cznego przepisywania. Å»adnego copy-paste miÄ™dzy programami. Å»adnego drukowania i wpisywania na nowo gdzieÅ› indziej. Dane muszÄ… pÅ‚ynÄ…Ä‡ cyfrowo, od poczÄ…tku do koÅ„ca.</p>\n<p>Excel sam w sobie nie rozmawia z HMRC. WiÄ™c jeÅ›li chcesz zatrzymaÄ‡ arkusz, potrzebujesz czegoÅ› poÅ›rodku â€” <strong>bridging software</strong> â€” ktÃ³re czyta TwÃ³j Excel i wysyÅ‚a liczby do HMRC bez Twojej rÄ™ki pomiÄ™dzy.</p>\n<p>Tyle. Excel plus bridging software rÃ³wna siÄ™ legalnie. Sam Excel rÃ³wna siÄ™ niezgodnie z przepisami.</p>\n<h2>No to czym jest ten bridging software?</h2>\n<p>TÅ‚umaczem. TwÃ³j Excel mÃ³wi po &quot;arkuszowemu&quot;. HMRC mÃ³wi po &quot;API&quot;. Bridging software siedzi miÄ™dzy nimi, czyta Twoje liczby i wysyÅ‚a je we wÅ‚aÅ›ciwym formacie.</p>\n<p>Jest sporo opcji â€” niektÃ³re darmowe, niektÃ³re tanie, niektÃ³re jako czÄ™Å›Ä‡ wiÄ™kszych pakietÃ³w. HMRC prowadzi <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">listÄ™ kompatybilnego oprogramowania</a> i narzÄ™dzia bridging sÄ… tam uwzglÄ™dnione.</p>\n<h2>CzÄ™Å›Ä‡, z ktÃ³rÄ… Excel Ci nie pomoÅ¼e: prawdziwe dowody</h2>\n<p>I tu jest rzecz, ktÃ³ra ginie w tej caÅ‚ej rozmowie o Excelu.</p>\n<p>Nawet jeÅ›li TwÃ³j arkusz jest perfekcyjnie podÅ‚Ä…czony i w peÅ‚ni zgodny z przepisami â€” <strong>i tak musisz trzymaÄ‡ paragony, faktury i payslipy za tymi liczbami przez piÄ™Ä‡ lat.</strong></p>\n<p>Nie w Excelu. Prawdziwe dokumenty.</p>\n<p>HMRC nie chce Twojego arkusza jako dowodu. Chce paragonu, ktÃ³ry udowadnia Å¼e liczba w arkuszu jest prawdziwa. TwÃ³j cyfrowy rekord (data, kwota, kategoria) to co wymaga MTD. Dokument ÅºrÃ³dÅ‚owy (paragon, faktura, wyciÄ…g bankowy) to co prawo zawsze wymagaÅ‚o â€” i nadal wymaga.</p>\n<p>Paragon termiczny ze skÅ‚adu budowlanego jest nieczytelny na dÅ‚ugo przed upÅ‚ywem piÄ™ciu lat. Papier blaknie. <a href=\"/pl/mtd/do-i-have-to-photograph-receipts\">PeÅ‚ne wyjaÅ›nienie czego HMRC naprawdÄ™ wymaga â€” i dlaczego zdjÄ™cia pomagajÄ… nawet jeÅ›li nie sÄ… obowiÄ…zkowe â€” jest tutaj.</a></p>\n<p><strong>TidGo zbiera paragony, payslipy CIS i dowody przychodu na bieÅ¼Ä…co â€” przez zdjÄ™cie na WhatsAppie, przekazany mail lub w aplikacji. DziaÅ‚a obok Twojego arkusza, nie zamiast niego. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">WyprÃ³buj za darmo, bez karty â†’</a></strong></p>\n<h2>Zasada o copy-paste â€” tu siÄ™ wielu potyka</h2>\n<p>Po wysÅ‚aniu kwartalnego raportu nie moÅ¼esz rÄ™cznie przenosiÄ‡ rekordÃ³w do innego systemu. Ani przez przepisywanie. Ani przez copy-paste. Ani przez robienie screenshota i wpisywanie gdzie indziej.</p>\n<p>JeÅ›li uÅ¼ywasz wiÄ™cej niÅ¼ jednego programu â€” powiedzmy Excel do zapisywania i coÅ› innego do wysyÅ‚ania â€” muszÄ… byÄ‡ <strong>cyfrowo poÅ‚Ä…czone</strong>. Dane pÅ‚ynÄ… automatycznie, nie przez Twoje palce.</p>\n<p>Praktyczny przykÅ‚ad: masz arkusz, robisz kwartalne sumy, kopiujesz je do innego programu Å¼eby wysÅ‚aÄ‡. WÅ‚aÅ›nie to zabrania przepis. Arkusz musi zasilaÄ‡ program do wysyÅ‚ki bezpoÅ›rednio â€” przez formuÅ‚Ä™, poÅ‚Ä…czenie danych, eksport. Nie przez Ctrl+C, Ctrl+V.</p>\n<p><strong>Cyfrowe poÅ‚Ä…czenie miÄ™dzy rekordami a wysyÅ‚kÄ… â€” to jest czÄ™Å›Ä‡, ktÃ³rÄ… wiÄ™kszoÅ›Ä‡ ludzi robi Åºle. TidGo ogarnia stronÄ™ rekordÃ³w â€” czyste, datowane, skategoryzowane â€” Å¼eby ten, kto robi TwojÄ… wysyÅ‚kÄ™, miaÅ‚ z czego pracowaÄ‡. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Zobacz jak to dziaÅ‚a â†’</a></strong></p>\n<h2>Co jeÅ›li mÃ³j obrÃ³t jest poniÅ¼ej Â£90 000?</h2>\n<p>Dobra wiadomoÅ›Ä‡. PoniÅ¼ej Â£90 000 obrotu z dziaÅ‚alnoÅ›ci moÅ¼esz uÅ¼ywaÄ‡ <strong>uproszczonej kategoryzacji</strong> â€” wpisujesz tylko czy transakcja to przychÃ³d czy wydatek. Bez podkategorii, bez rozdzielania paliwa od materiaÅ‚Ã³w od narzÄ™dzi.</p>\n<p>Dla wielu sole traderÃ³w to bardzo krÃ³tki arkusz. Co sprawia Å¼e rozmowa o bridging software staje siÄ™ duÅ¼o prostsza.</p>\n<h2>Gdzie trzymaÄ‡ prawdziwe dokumenty</h2>\n<p>Chmura. Komputer. ZewnÄ™trzny dysk. Pendrive. Gdziekolwiek gdzie je znajdziesz za piÄ™Ä‡ lat i bÄ™dÄ… nadal czytelne.</p>\n<p>Dyskietka 3,5 cala, jeÅ›li masz jeszcze komputer ktÃ³ry jÄ… czyta â€” HMRC tego teÅ¼ oficjalnie nie zabroniÅ‚o. CD-ROM technicznie teÅ¼ jest w porzÄ…dku. ChoÄ‡ delikatnie sugerujemy plan awaryjny. I kopiÄ™ zapasowÄ… kopii zapasowej. Na czymÅ› wyprodukowanym po 2005 roku.</p>\n<h2>Szczerze â€” czy w ogÃ³le warto bawiÄ‡ siÄ™ Excelem?</h2>\n<p>JeÅ›li juÅ¼ dobrze czujesz siÄ™ z arkuszami i Twoje rekordy sÄ… czyste â€” Excel z bridging software to caÅ‚kowicie rozsÄ…dny wybÃ³r. Kosztuje mniej niÅ¼ peÅ‚ne oprogramowanie ksiÄ™gowe, rozumiesz to, i dziaÅ‚a.</p>\n<p>JeÅ›li tak naprawdÄ™ nie uÅ¼ywasz Excela porzÄ…dnie â€” wrzucasz liczby byle gdzie i masz nadziejÄ™ Å¼e jakoÅ› to bÄ™dzie â€” moÅ¼e to jest moment Å¼eby sprÃ³bowaÄ‡ czegoÅ› prostszego. Nie dlatego Å¼e prawo tego wymaga. Dlatego Å¼e baÅ‚agan w Excelu to nadal baÅ‚agan, tylko cyfrowy.</p>\n<p>W sprawach dotyczÄ…cych Twojej sytuacji â€” zapytaj ksiÄ™gowego. Ta strona opisuje ogÃ³lne zasady. Nie jest poradÄ… podatkowÄ….</p>\n<p><strong>TidGo dziaÅ‚a z Twoim ksiÄ™gowym, nie zamiast niego. DziaÅ‚a z Twoim arkuszem, nie zamiast niego. DziaÅ‚a zanim skarbÃ³wka zacznie pytaÄ‡ â€” nie zamiast odpowiadaÄ‡.</strong> <strong>Nie zastÄ™puje Å¼adnego z nich. Jest tylko tÄ… warstwÄ…, ktÃ³rej brakowaÅ‚o.</strong> <strong><a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Zacznij za darmo â€” bez karty â†’</a></strong></p>\n<h2>Å¹rÃ³dÅ‚a</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital â€” create digital records</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find compatible software</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a> â€” GOV.UK</li>\n</ul>"
  },
  "ro": {
    "title": "Trebuie sÄƒ renunÈ› la Excel? Foi de calcul, MTD È™i bridging software explicat",
    "html": "<h2>Am folosit Excel douÄƒzeci de ani. A funcÈ›ionat. De ce e brusc o problemÄƒ?</h2>\n<p>Nu este. Nu exact.</p>\n<p>Excel nu este interzis prin Making Tax Digital. HMRC nu a trimis nimÄƒnui o scrisoare care sÄƒ spunÄƒ &quot;È™terge imediat foile de calcul sau ai de suferit.&quot; DacÄƒ cineva È›i-a spus asta â€” a greÈ™it.</p>\n<p>Dar â€” È™i aceasta este partea pe care nimeni nu o explicÄƒ clar â€” Excel singur nu mai este suficient. Nu pentru cÄƒ foaia ta de calcul este greÈ™itÄƒ. Ci din cauza modului Ã®n care se conecteazÄƒ cu restul.</p>\n<p>Regula realÄƒ: evidenÈ›ele tale digitale trebuie sÄƒ ajungÄƒ la HMRC printr-o <strong>legÄƒturÄƒ digitalÄƒ</strong>. FÄƒrÄƒ retastare manualÄƒ. FÄƒrÄƒ copy-paste Ã®ntre sisteme. FÄƒrÄƒ tipÄƒrire È™i retastare Ã®n altÄƒ parte. Datele trebuie sÄƒ circule digital, de la un capÄƒt la altul.</p>\n<p>Excel nu comunicÄƒ direct cu HMRC. Deci dacÄƒ vrei sÄƒ-È›i pÄƒstrezi foaia de calcul, ai nevoie de ceva intermediar â€” un <strong>bridging software</strong> â€” care citeÈ™te Excel-ul tÄƒu È™i trimite numerele la HMRC fÄƒrÄƒ ca tu sÄƒ le atingi.</p>\n<p>AtÃ¢t. Excel plus bridging software Ã®nseamnÄƒ legal. Excel singur Ã®nseamnÄƒ neconform.</p>\n<h2>Deci ce este bridging software-ul?</h2>\n<p>Un traducÄƒtor. Excel-ul tÄƒu vorbeÈ™te &quot;foaie de calcul.&quot; HMRC vorbeÈ™te &quot;API.&quot; Bridging software-ul stÄƒ Ã®ntre ele, citeÈ™te numerele tale È™i le trimite Ã®n formatul corect.</p>\n<p>ExistÄƒ multe opÈ›iuni â€” unele gratuite, unele ieftine. HMRC menÈ›ine <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">o listÄƒ de software compatibil</a> È™i instrumentele bridging sunt acolo.</p>\n<h2>Partea cu care Excel nu te poate ajuta: bonurile reale</h2>\n<p>Chiar dacÄƒ foaia ta de calcul este perfect conectatÄƒ, <strong>tot trebuie sÄƒ pÄƒstrezi bonurile, facturile È™i payslipurile din spatele acelor numere timp de cinci ani.</strong></p>\n<p>Nu Ã®n Excel. Documentele reale.</p>\n<p>HMRC nu vrea foaia ta de calcul ca dovadÄƒ. Vrea bonul care dovedeÈ™te cÄƒ numÄƒrul din foaie este real. <a href=\"/ro/mtd/do-i-have-to-photograph-receipts\">ExplicaÈ›ia completÄƒ a ce cere HMRC de fapt este aici.</a></p>\n<p><strong>TidGo colecteazÄƒ bonuri, payslipuri CIS È™i dovezi de venit pe mÄƒsurÄƒ ce apar â€” prin fotografie pe WhatsApp, email transmis sau Ã®n aplicaÈ›ie. FuncÈ›ioneazÄƒ alÄƒturi de foaia ta de calcul, nu Ã®n locul ei. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">ÃŽncearcÄƒ gratuit, fÄƒrÄƒ card â†’</a></strong></p>\n<h2>Regula copy-paste â€” aceasta prinde pe mulÈ›i</h2>\n<p>DupÄƒ ce ai trimis o actualizare trimestrialÄƒ, nu poÈ›i transfera manual acele Ã®nregistrÄƒri Ã®n alt sistem. Nici prin retastare. Nici prin copy-paste.</p>\n<p>DacÄƒ foloseÈ™ti mai mult de un program â€” sÄƒ zicem Excel pentru Ã®nregistrare È™i altceva pentru trimitere â€” acestea trebuie sÄƒ fie <strong>legate digital</strong>. Datele circulÄƒ automat, nu prin degetele tale.</p>\n<p><strong>LegÄƒtura digitalÄƒ dintre Ã®nregistrÄƒri È™i trimitere â€” aceasta este partea pe care cei mai mulÈ›i o fac greÈ™it. TidGo se ocupÄƒ de partea Ã®nregistrÄƒrilor â€” curate, datate, categorisite. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Vezi cum funcÈ›ioneazÄƒ â†’</a></strong></p>\n<h2>DacÄƒ cifra de afaceri este sub Â£90.000?</h2>\n<p>Sub Â£90.000 poÈ›i folosi <strong>categorizarea simplificatÄƒ</strong> â€” Ã®nregistrezi doar dacÄƒ fiecare tranzacÈ›ie este venit sau cheltuialÄƒ. FÄƒrÄƒ subcategorii.</p>\n<h2>Unde sÄƒ pÄƒstrezi documentele reale</h2>\n<p>Stocare Ã®n cloud. Computerul tÄƒu. Un hard disk extern. Un stick USB. Un floppy disc dacÄƒ mai ai o maÈ™inÄƒ care Ã®l citeÈ™te â€” HMRC nu le-a interzis oficial nici pe acelea. CD-ROM este de asemenea tehnic acceptabil. DeÈ™i sugerÄƒm un plan de rezervÄƒ. Pe ceva fabricat dupÄƒ 2005.</p>\n<h2>Sincer â€” meritÄƒ sÄƒ te deranjezi cu Excel?</h2>\n<p>DacÄƒ eÈ™ti deja confortabil cu foile de calcul È™i evidenÈ›ele tale sunt curate â€” Excel cu un instrument bridging este o alegere perfect rezonabilÄƒ.</p>\n<p>DacÄƒ nu foloseÈ™ti Excel corect oricum â€” arunci numere la Ã®ntÃ¢mplare â€” poate e momentul sÄƒ Ã®ncerci ceva mai simplu. Nu pentru cÄƒ legea o cere. Ci pentru cÄƒ o mizerie Ã®n Excel rÄƒmÃ¢ne o mizerie, doar digitalÄƒ.</p>\n<p>Pentru situaÈ›ia ta specificÄƒ, Ã®ntreabÄƒ contabilul. Nu este consultanÈ›Äƒ fiscalÄƒ.</p>\n<p><strong>TidGo funcÈ›ioneazÄƒ cu contabilul tÄƒu, nu Ã®n locul lui. FuncÈ›ioneazÄƒ cu foaia ta de calcul, nu Ã®n locul ei. FuncÈ›ioneazÄƒ Ã®nainte ca HMRC sÄƒ punÄƒ Ã®ntrebÄƒri â€” nu Ã®n locul rÄƒspunsurilor.</strong> <strong>Nu Ã®nlocuieÈ™te niciunul dintre ele. Este doar stratul care lipsea.</strong> <strong><a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">ÃŽncepe gratuit â€” fÄƒrÄƒ card â†’</a></strong></p>\n<h2>Surse</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital â€” create digital records</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find compatible software</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a> â€” GOV.UK</li>\n</ul>"
  },
  "lt": {
    "title": "Ar turiu atsisakyti Excel? SkaiÄiuoklÄ—s, MTD ir tarpinÄ— programinÄ— Ä¯ranga",
    "html": "<h2>Naudojau Excel dvideÅ¡imt metÅ³. VeikÄ—. KodÄ—l dabar staiga problema?</h2>\n<p>NÄ—ra. Ne visai.</p>\n<p>Excel nÄ—ra uÅ¾draustas pagal Making Tax Digital. HMRC nesiuntÄ— niekam laiÅ¡ko su uÅ¾raÅ¡u &quot;iÅ¡trink skaiÄiuokles nedelsiant arba bus pasekmiÅ³.&quot; Jei kas nors tau taip sakÄ— â€” klydo.</p>\n<p>Bet â€” ir Äia yra ta dalis, kurios niekas nepaaiÅ¡kina aiÅ¡kiai â€” vien Excel nebepakanka. Ne todÄ—l, kad tavo skaiÄiuoklÄ— yra bloga. DÄ—l to, kaip ji jungiasi su visu kitu.</p>\n<p>Tikroji taisyklÄ—: tavo skaitmeniniai Ä¯raÅ¡ai turi pasiekti HMRC per <strong>skaitmeninÄ™ nuorodÄ…</strong>. Jokio rankinio perkÄ—limo. Jokio copy-paste tarp sistemÅ³. Duomenys turi tekÄ—ti skaitmeniÅ¡kai nuo pradÅ¾ios iki pabaigos.</p>\n<p>Excel tiesiogiai nekomunikuoja su HMRC. Taigi jei nori pasilikti skaiÄiuoklÄ™, reikia ko nors viduryje â€” <strong>tarpinÄ—s programinÄ—s Ä¯rangos</strong> â€” kuri nuskaito tavo Excel ir siunÄia skaiÄius Ä¯ HMRC be tavo rankÅ³ tarpininkaujant.</p>\n<p>Tiek. Excel plius tarpinÄ— programinÄ— Ä¯ranga lygus legaliai. Vien Excel lygus neatitikimui.</p>\n<h2>Tai kas yra tarpinÄ— programinÄ— Ä¯ranga?</h2>\n<p>VertÄ—jas. Tavo Excel kalba &quot;skaiÄiuokliÅ³&quot; kalba. HMRC kalba &quot;API&quot; kalba. TarpinÄ— programinÄ— Ä¯ranga sÄ—di tarp jÅ³, nuskaito tavo skaiÄius ir siunÄia juos tinkamu formatu.</p>\n<p>Yra daug variantÅ³ â€” kai kurie nemokami, kai kurie pigÅ«s. HMRC tvarko <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">suderinamos programinÄ—s Ä¯rangos sÄ…raÅ¡Ä…</a>.</p>\n<h2>Dalis, su kuria Excel nepadÄ—s: tikri kvitai</h2>\n<p>Net jei tavo skaiÄiuoklÄ— yra tobulai prijungta, <strong>vis tiek privalai saugoti kvitus, sÄ…skaitas faktÅ«ras ir payslipus uÅ¾ tais skaiÄiais penkerius metus.</strong></p>\n<p>Ne Excel. Tikrus dokumentus. <a href=\"/lt/mtd/do-i-have-to-photograph-receipts\">IÅ¡samus paaiÅ¡kinimas, ko iÅ¡ tikrÅ³jÅ³ reikalauja HMRC, yra Äia.</a></p>\n<p><strong>TidGo renka kvitus, CIS payslipus ir pajamÅ³ Ä¯rodymus iÅ¡ karto â€” per WhatsApp nuotraukÄ…, persiunÄiamÄ… el. laiÅ¡kÄ… ar programÄ—lÄ—je. Veikia kartu su tavo skaiÄiuokle, o ne jos vietoje. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">IÅ¡bandyk nemokamai, be kortelÄ—s â†’</a></strong></p>\n<h2>Copy-paste taisyklÄ— â€” Äia daugelis suklysta</h2>\n<p>Pateikus ketvirtinÄ™ ataskaitÄ…, negali rankiniu bÅ«du perkelti tÅ³ Ä¯raÅ¡Å³ Ä¯ kitÄ… sistemÄ…. Nei perkeldamas, nei copy-paste.</p>\n<p>Jei naudoji daugiau nei vienÄ… programÄ… â€” tarkime, Excel Ä¯raÅ¡ymui ir kaÅ¾kÄ… kitÄ… pateikimui â€” jos turi bÅ«ti <strong>skaitmeniÅ¡kai susietos</strong>. Duomenys teka automatiÅ¡kai, ne per tavo pirÅ¡tus.</p>\n<p><strong>SkaitmeninÄ— nuoroda tarp Ä¯raÅ¡Å³ ir pateikimo â€” tai dalis, kuriÄ… dauguma daro neteisingai. TidGo rÅ«pinasi Ä¯raÅ¡Å³ puse â€” tvarkingai, su datomis, kategorizuotai. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Å½iÅ«rÄ—k kaip veikia â†’</a></strong></p>\n<h2>Jei apyvarta maÅ¾esnÄ— nei Â£90 000?</h2>\n<p>Å½emiau Â£90 000 gali naudoti <strong>supaprastintÄ… kategorizacijÄ…</strong> â€” Ä¯raÅ¡ai tik ar kiekviena operacija yra pajamos ar iÅ¡laidos. Be subkategorijÅ³.</p>\n<h2>Kur laikyti tikrus dokumentus</h2>\n<p>DebesÅ³ saugykla. Kompiuteris. IÅ¡orinis diskas. USB lazdelÄ—. Diskelis 3,5 colio, jei dar turi maÅ¡inÄ…, kuri jÄ¯ skaito â€” HMRC oficialiai jÅ³ neuÅ¾draudÄ—. CD-ROM taip pat techniÅ¡kai priimtinas. Nors Å¡velniai siÅ«lome atsarginÄ¯ planÄ…. Ant kaÅ¾ko pagaminto po 2005 metÅ³.</p>\n<h2>Atvirai â€” ar verta vargtis su Excel?</h2>\n<p>Jei jau patogiai jauti skaiÄiuokles ir tavo Ä¯raÅ¡ai yra tvarkingi â€” Excel su tarpine programine Ä¯ranga yra visiÅ¡kai pagrÄ¯stas pasirinkimas.</p>\n<p>Jei iÅ¡ tikrÅ³jÅ³ nenaudoji Excel tinkamai â€” meti skaiÄius bet kur â€” galbÅ«t tai momentas iÅ¡bandyti kaÅ¾kÄ… paprastesnio. Ne todÄ—l, kad Ä¯statymas reikalauja. TodÄ—l, kad netvarka Excel yra vis tiek netvarka, tik skaitmeninÄ—.</p>\n<p>DÄ—l savo konkreÄios situacijos â€” klausk buhalterio. Ne mokesÄiÅ³ konsultacija.</p>\n<p><strong>TidGo veikia su tavo buhalteriu, o ne jo vietoje. Veikia su tavo skaiÄiuokle, o ne jos vietoje. Veikia prieÅ¡ HMRC pradedant klausti â€” ne atsakymÅ³ vietoje.</strong> <strong>NepakeiÄia nÄ— vieno iÅ¡ jÅ³. Yra tik tas sluoksnis, kurio trÅ«ko.</strong> <strong><a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">PradÄ—k nemokamai â€” be kortelÄ—s â†’</a></strong></p>\n<h2>Å altiniai</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital â€” create digital records</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find compatible software</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a> â€” GOV.UK</li>\n</ul>"
  }
};

function mtdSpreadsheetsArticle() {
  const lang = state.marketingLanguage || "en";
  const article = MTD_SPREADSHEETS_ARTICLES[lang] || MTD_SPREADSHEETS_ARTICLES.en;
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>${article.title}</h1>
      ${article.html}
    </article>
  `;
}

const MTD_WHO_NEEDS_ARTICLES = {
  "en": {
    "title": "Does Making Tax Digital apply to me? And what actually is it?",
    "html": "<h2>Right, what is this MTD thing?</h2>\n<p>You've probably seen the letters. Maybe binned a few. Making Tax Digital â€” MTD for short â€” is HMRC's way of updating how self-employed people and landlords report their income.</p>\n<p>Here's the bit most people get wrong: <strong>it's not four or even five tax returns a year.</strong></p>\n<p>It's more like sending a text to HMRC every three months. &quot;Here's what came in, here's what went out.&quot; That's it. No calculations, no payments, no panic. Just a running total from your records.</p>\n<p>And to be clear â€” <strong>you don't pay tax quarterly.</strong> Not now, anyway. The quarterly update is just information. What you owe is still calculated once a year, and you still pay it by 31 January. Nobody is taking money from you every three months.</p>\n<p>(There is talk of moving towards more regular tax payments for the self-employed from 2029 onwards â€” similar to how PAYE works for employees. But that's not here yet, and when it comes it will be a separate change with its own announcement.)</p>\n<p>The actual tax return â€” the one where your accountant earns their fee, claims your reliefs and works out what you owe HMRC. Or, on a good year, what HMRC owes you â€” that still happens once a year. MTD doesn't replace that. It just means HMRC gets a rough picture every quarter instead of being surprised every January.</p>\n<p>Put it this way: instead of letting the carrier bag fill up for a whole year, you're just giving HMRC a peek inside every three months. The bag stays manageable. You stay sane.</p>\n<h2>So does it actually apply to you?</h2>\n<p>It comes down to one number: your <strong>qualifying income</strong>.</p>\n<p>Not your profit. Not what's left after fuel, materials and the van insurance. Your <strong>gross income</strong> â€” everything that came in from self-employment and property, before you spent any of it.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr><th>From</th><th>Threshold</th><th>Who's in</th></tr></thead>\n<tbody>\n<tr><td>April 2026</td><td>Â£50,000</td><td>You're in. (Or you should be by now.)</td></tr>\n<tr><td>April 2027</td><td>Â£30,000</td><td>Next wave</td></tr>\n<tr><td>April 2028</td><td>Â£20,000</td><td>Most sole traders eventually</td></tr>\n</tbody>\n</table>\n</div>\n<p>If you're a builder who turned over Â£55,000 last year â€” even if half went on materials â€” you're in. If you drive a van and also rent out a flat, both incomes count together.</p>\n<p>On a PAYE job with your own invoices on the side? Only the self-employed bit counts for MTD. Your salary from the boss doesn't come into it.</p>\n<h2>What if I'm nowhere near those numbers?</h2>\n<p>Below Â£20,000 â€” you're automatically off the hook. Nothing to do.</p>\n<p>Between Â£20,000 and the current threshold â€” you're not in yet, but you will be. Worth building the habit of keeping digital records now, because habits take months to build â€” not a weekend before a deadline.</p>\n<h2>Who's actually off the hook?</h2>\n<p>A few groups can apply for an exemption:</p>\n<ul>\n<li>People who genuinely cannot use computers or software â€” age, disability or no internet where they live</li>\n<li>Some religious groups where digital recordkeeping conflicts with their beliefs</li>\n<li>Cases where HMRC accepts it's not reasonably practicable</li>\n</ul>\n<p>Think you might wriggle out of it? <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Check the exemptions guidance on GOV.UK</a> â€” don't just assume. HMRC needs to agree.</p>\n<h2>Honestly?</h2>\n<p>MTD is a real change. You can't leave everything to January anymore. But it's not as bad as it sounds â€” mostly because the quarterly bit is just a summary, not a reckoning.</p>\n<p>The hard part isn't the submission. It's keeping clean records through the year so the summary takes minutes, not a weekend.</p>\n<p>For your specific situation â€” mixed income, multiple jobs, anything complicated â€” talk to your accountant. This covers the general rules. Not tax advice.</p>\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use MTD</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if you can get an exemption</a> â€” GOV.UK</li>\n</ul>"
  },
  "pl": {
    "title": "Czy Making Tax Digital dotyczy Ciebie? I co to wÅ‚aÅ›ciwie jest?",
    "html": "<h2>No dobra, o co chodzi z tym MTD?</h2>\n<p>Pewnie widziaÅ‚eÅ› te listy. MoÅ¼e kilka nawet odÅ‚oÅ¼yÅ‚eÅ› &quot;na pÃ³Åºniej&quot; â€” czyli nigdy. Making Tax Digital â€” w skrÃ³cie MTD â€” to sposÃ³b, w jaki HMRC chce, Å¼ebyÅ› teraz raportowaÅ‚ swoje dochody jako samozatrudniony albo landlord.</p>\n<p>I tu jest rzecz, ktÃ³rÄ… wiÄ™kszoÅ›Ä‡ ludzi rozumie na odwrÃ³t: <strong>to nie sÄ… cztery, a nawet piÄ™Ä‡ zeznaÅ„ podatkowych w roku.</strong></p>\n<p>To bardziej jak wysyÅ‚anie SMSa do HMRC co trzy miesiÄ…ce. &quot;Tyle wpÅ‚ynÄ™Å‚o, tyle wydaÅ‚em.&quot; Tyle. Bez obliczeÅ„, bez pÅ‚atnoÅ›ci, bez paniki. Samo podsumowanie tego, co masz w rekordach.</p>\n<p>I Å¼eby byÅ‚o jasne â€” <strong>co kwartaÅ‚ nie pÅ‚acisz podatku.</strong> Przynajmniej nie teraz. Kwartalne podsumowanie to tylko informacja dla HMRC. To ile jesteÅ› winien nadal liczy siÄ™ raz w roku i nadal pÅ‚acisz do 31 stycznia. Nikt nie Å›ciÄ…ga Ci pieniÄ™dzy co trzy miesiÄ…ce.</p>\n<p>(SÄ… plany Å¼eby od okoÅ‚o 2029 roku wprowadziÄ‡ bardziej regularne pÅ‚atnoÅ›ci podatku dla samozatrudnionych â€” podobnie jak na etacie, gdzie podatek schodzi co miesiÄ…c. Ale to jeszcze nie teraz, i jak przyjdzie to bÄ™dzie osobna zmiana z osobnym ogÅ‚oszeniem.)</p>\n<p>Prawdziwe rozliczenie â€” to gdzie TwÃ³j ksiÄ™gowy siedzi, liczy ulgi i wychodzi ile jesteÅ› winien skarbÃ³wce. Albo, w lepszym scenariuszu, ile ona jest winna Tobie. To nadal jest raz w roku. MTD tego nie zastÄ™puje. Sprawia tylko, Å¼e HMRC wie mniej wiÄ™cej jak idzie co kwartaÅ‚, zamiast dostawaÄ‡ niespodziankÄ™ co kaÅ¼dy styczeÅ„.</p>\n<p>ProÅ›ciej: zamiast czekaÄ‡ aÅ¼ reklamÃ³wka z paragonami bÄ™dzie peÅ‚na przez rok â€” co kwartaÅ‚ telefonem wysyÅ‚asz co w niej jest. ReklamÃ³wka zostaje pusta. Ty â€” spokojny.</p>\n<h2>No to czy Ciebie dotyczy?</h2>\n<p>ZaleÅ¼y od jednej liczby: Twojego <strong>qualifying income</strong>.</p>\n<p>Nie zysku. Nie tego co zostaje po paliwie, materiaÅ‚ach i ubezpieczeniu vana. <strong>PrzychÃ³d brutto</strong> â€” wszystko co wpÅ‚ynÄ™Å‚o z dziaÅ‚alnoÅ›ci i z wynajmu, zanim cokolwiek wydaÅ‚eÅ›.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr><th>Od</th><th>PrÃ³g</th><th>Kogo Å‚apie</th></tr></thead>\n<tbody>\n<tr><td>KwiecieÅ„ 2026</td><td>Â£50 000</td><td>JesteÅ› w systemie! (albo przynajmniej powinieneÅ› juÅ¼ byÄ‡)</td></tr>\n<tr><td>KwiecieÅ„ 2027</td><td>Â£30 000</td><td>NastÄ™pna fala</td></tr>\n<tr><td>KwiecieÅ„ 2028</td><td>Â£20 000</td><td>WiÄ™kszoÅ›Ä‡ samozatrudnionych w koÅ„cu</td></tr>\n</tbody>\n</table>\n</div>\n<p>JeÅ›li jesteÅ› budowlaÅ„cem z obrotem Â£55 000 w zeszÅ‚ym roku â€” nawet jeÅ›li poÅ‚owa poszÅ‚a na materiaÅ‚y â€” jesteÅ› w systemie. JeÅ›li jeÅºdzisz vanem i przy okazji wynajmujesz mieszkanie, obie kwoty liczÄ… siÄ™ razem.</p>\n<p>Pracujesz na etacie i przy okazji wystawiasz faktury za coÅ› swojego? Do MTD liczy siÄ™ tylko ta wÅ‚asna dziaÅ‚alnoÅ›Ä‡. Pensja od szefa â€” nie wchodzi do rachunku.</p>\n<h2>Co jeÅ›li jestem daleko od tych kwot?</h2>\n<p>PoniÅ¼ej Â£20 000 â€” automatycznie zwolniony. Nic nie musisz robiÄ‡.</p>\n<p>MiÄ™dzy Â£20 000 a aktualnym progiem â€” jeszcze nie jesteÅ› w systemie, ale wkrÃ³tce bÄ™dziesz. Warto zaczÄ…Ä‡ zbieraÄ‡ cyfrowe rekordy teraz, bo nawyki buduje siÄ™ miesiÄ…cami, a nie w weekend przed terminem.</p>\n<h2>Kto moÅ¼e siÄ™ wymigaÄ‡?</h2>\n<p>Kilka grup moÅ¼e ubiegaÄ‡ siÄ™ o zwolnienie:</p>\n<ul>\n<li>Osoby ktÃ³re naprawdÄ™ nie mogÄ… korzystaÄ‡ z komputera lub oprogramowania â€” ze wzglÄ™du na wiek, niepeÅ‚nosprawnoÅ›Ä‡ albo brak dostÄ™pu do internetu</li>\n<li>NiektÃ³re grupy wyznaniowe gdzie cyfrowe rekordy kolidujÄ… z przekonaniami</li>\n<li>Przypadki gdzie HMRC zgodzi siÄ™ Å¼e to niewykonalne</li>\n</ul>\n<p>JeÅ›li myÅ›lisz Å¼e moÅ¼esz siÄ™ wymigaÄ‡ â€” <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">sprawdÅº wytyczne o zwolnieniach na GOV.UK</a>. Nie zakÅ‚adaj. HMRC musi siÄ™ zgodziÄ‡.</p>\n<h2>Szczerze?</h2>\n<p>MTD to realna zmiana. Nie moÅ¼esz juÅ¼ zostawiÄ‡ wszystkiego na styczeÅ„. Ale nie jest tak straszna jak brzmi â€” gÅ‚Ã³wnie dlatego Å¼e kwartalne podsumowanie to tylko podsumowanie, a nie rozliczenie.</p>\n<p>Trudna czÄ™Å›Ä‡ to nie wysyÅ‚anie. Trudna czÄ™Å›Ä‡ to trzymanie czystych rekordÃ³w przez caÅ‚y rok, Å¼eby to podsumowanie zajÄ™Å‚o minuty a nie weekend.</p>\n<p>W sprawach dotyczÄ…cych Twojej sytuacji â€” mieszane dochody, kilka zajÄ™Ä‡, cokolwiek skomplikowanego â€” zapytaj ksiÄ™gowego. Ta strona opisuje ogÃ³lne zasady. Nie jest poradÄ… podatkowÄ….</p>\n<h2>Å¹rÃ³dÅ‚a</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use MTD</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if you can get an exemption</a> â€” GOV.UK</li>\n</ul>"
  },
  "ro": {
    "title": "Se aplicÄƒ Making Tax Digital Ã®n cazul tÄƒu? È˜i ce este, de fapt?",
    "html": "<h2>Bun, despre ce e vorba cu MTD Äƒsta?</h2>\n<p>Probabil ai vÄƒzut scrisorile. Poate ai aruncat cÃ¢teva. Making Tax Digital â€” pe scurt MTD â€” este modul Ã®n care HMRC vrea sÄƒ raportezi veniturile ca persoanÄƒ self-employed sau landlord.</p>\n<p>IatÄƒ ce Ã®nÈ›eleg greÈ™it majoritatea oamenilor: <strong>nu sunt patru sau chiar cinci declaraÈ›ii fiscale pe an.</strong></p>\n<p>E mai degrabÄƒ ca È™i cum ai trimite un SMS la HMRC la fiecare trei luni. &quot;AtÃ¢t a intrat, atÃ¢t a ieÈ™it.&quot; AtÃ¢t. FÄƒrÄƒ calcule, fÄƒrÄƒ plÄƒÈ›i, fÄƒrÄƒ panicÄƒ. Doar un total cumulat din evidenÈ›ele tale.</p>\n<p>È˜i ca sÄƒ fie clar â€” <strong>nu plÄƒteÈ™ti impozit trimestrial.</strong> Cel puÈ›in nu acum. Actualizarea trimestrialÄƒ este doar informaÈ›ie. Ce datorezi se calculeazÄƒ tot o datÄƒ pe an È™i plÄƒteÈ™ti tot pe 31 ianuarie. Nimeni nu Ã®È›i ia bani la fiecare trei luni.</p>\n<p>(ExistÄƒ discuÈ›ii despre introducerea unor plÄƒÈ›i de impozit mai regulate pentru persoanele self-employed din jurul anului 2029 â€” similar cu PAYE pentru angajaÈ›i. Dar nu e Ã®ncÄƒ acum, È™i cÃ¢nd va veni va fi o schimbare separatÄƒ cu propriul anunÈ›.)</p>\n<p>DeclaraÈ›ia fiscalÄƒ realÄƒ â€” cea Ã®n care contabilul tÄƒu cÃ¢È™tigÄƒ onorariul, revendicÄƒ deducerile È™i calculeazÄƒ cÃ¢t datorezi HMRC. Sau, Ã®ntr-un an bun, cÃ¢t Ã®È›i datoreazÄƒ HMRC È›ie â€” aceea tot o datÄƒ pe an se face. MTD nu o Ã®nlocuieÈ™te. ÃŽnseamnÄƒ doar cÄƒ HMRC are o imagine aproximativÄƒ Ã®n fiecare trimestru Ã®n loc sÄƒ fie surprins Ã®n fiecare ianuarie.</p>\n<p>Pune-o aÈ™a: Ã®n loc sÄƒ laÈ™i punga cu bonuri sÄƒ se umple un an Ã®ntreg, dai HMRC o privire Ã®nÄƒuntru la fiecare trei luni. Punga rÄƒmÃ¢ne gestionabilÄƒ. Tu â€” liniÈ™tit.</p>\n<h2>Deci È›i se aplicÄƒ?</h2>\n<p>Depinde de un singur numÄƒr: <strong>qualifying income</strong>-ul tÄƒu.</p>\n<p>Nu profitul. Nu ce rÄƒmÃ¢ne dupÄƒ combustibil, materiale È™i asigurarea maÈ™inii. <strong>Venitul brut</strong> â€” tot ce a intrat din activitate independentÄƒ È™i proprietÄƒÈ›i, Ã®nainte sÄƒ cheltuieÈ™ti ceva.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr><th>Din</th><th>Prag</th><th>Cine intrÄƒ</th></tr></thead>\n<tbody>\n<tr><td>Aprilie 2026</td><td>Â£50.000</td><td>EÈ™ti Ã®n sistem! (sau ar trebui sÄƒ fii deja)</td></tr>\n<tr><td>Aprilie 2027</td><td>Â£30.000</td><td>UrmÄƒtorul val</td></tr>\n<tr><td>Aprilie 2028</td><td>Â£20.000</td><td>Majoritatea self-employed Ã®n final</td></tr>\n</tbody>\n</table>\n</div>\n<p>DacÄƒ eÈ™ti un constructor cu o cifrÄƒ de afaceri de Â£55.000 anul trecut â€” chiar dacÄƒ jumÄƒtate s-a dus pe materiale â€” eÈ™ti Ã®n sistem. DacÄƒ conduci o dubÄƒ È™i Ã®nchiriezi È™i un apartament, ambele venituri se adunÄƒ.</p>\n<p>Lucrezi cu contract È™i mai ai È™i facturi proprii pe lÃ¢ngÄƒ? Pentru MTD conteazÄƒ doar activitatea independentÄƒ. Salariul de la angajator nu intrÄƒ Ã®n calcul.</p>\n<h2>Ce dacÄƒ sunt departe de acele cifre?</h2>\n<p>Sub Â£20.000 â€” eÈ™ti automat scutit. Nimic de fÄƒcut.</p>\n<p>ÃŽntre Â£20.000 È™i pragul actual â€” nu eÈ™ti Ã®ncÄƒ Ã®n sistem, dar vei fi. MeritÄƒ sÄƒ Ã®ncepi sÄƒ È›ii evidenÈ›e digitale acum, pentru cÄƒ obiceiurile se construiesc Ã®n luni, nu Ã®ntr-un weekend Ã®nainte de termen.</p>\n<h2>Cine scapÄƒ complet?</h2>\n<p>CÃ¢teva grupuri pot solicita o scutire:</p>\n<ul>\n<li>Persoane care nu pot folosi computerul sau software-ul â€” din cauza vÃ¢rstei, dizabilitÄƒÈ›ii sau lipsei internetului</li>\n<li>Unele grupuri religioase unde evidenÈ›ele digitale intrÄƒ Ã®n conflict cu convingerile lor</li>\n<li>Cazuri Ã®n care HMRC acceptÄƒ cÄƒ nu este rezonabil practicabil</li>\n</ul>\n<p>Crezi cÄƒ poÈ›i scÄƒpa? <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">VerificÄƒ ghidul de scutiri pe GOV.UK</a> â€” nu presupune. HMRC trebuie sÄƒ fie de acord.</p>\n<h2>Sincer?</h2>\n<p>MTD este o schimbare realÄƒ. Nu mai poÈ›i lÄƒsa totul pe ianuarie. Dar nu e atÃ¢t de rÄƒu pe cÃ¢t sunÄƒ â€” mai ales cÄƒ partea trimestrialÄƒ e doar un rezumat, nu o socotealÄƒ.</p>\n<p>Partea grea nu e trimiterea. Partea grea e sÄƒ È›ii evidenÈ›e curate pe tot parcursul anului, ca rezumatul sÄƒ dureze minute, nu un weekend.</p>\n<p>Pentru situaÈ›ia ta specificÄƒ â€” venituri mixte, mai multe joburi, orice complicat â€” Ã®ntreabÄƒ contabilul. Aceasta acoperÄƒ regulile generale. Nu este consultanÈ›Äƒ fiscalÄƒ.</p>\n<h2>Surse</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use MTD</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if you can get an exemption</a> â€” GOV.UK</li>\n</ul>"
  },
  "lt": {
    "title": "Ar Making Tax Digital taikomas tau? Ir kas tai iÅ¡ tikrÅ³jÅ³ yra?",
    "html": "<h2>Na gerai, kas tas MTD?</h2>\n<p>Tikriausiai matei laiÅ¡kus. GalbÅ«t kelis atidÄ—jai &quot;vÄ—liau&quot; â€” tai yra niekada. Making Tax Digital â€” trumpai MTD â€” tai HMRC bÅ«das atnaujinti, kaip savarankiÅ¡kai dirbantys asmenys ir nuomotojai praneÅ¡a apie savo pajamas.</p>\n<p>Å tai kÄ… dauguma Å¾moniÅ³ supranta klaidingai: <strong>tai ne keturios ar net penkios mokesÄiÅ³ deklaracijos per metus.</strong></p>\n<p>Tai labiau panaÅ¡u Ä¯ SMS siuntimÄ… Ä¯ HMRC kas tris mÄ—nesius. &quot;Tiek atÄ—jo, tiek iÅ¡Ä—jo.&quot; Tiek. JokiÅ³ skaiÄiavimÅ³, jokiÅ³ mokÄ—jimÅ³, jokios panikos. Tik einamasis sumai iÅ¡ tavo Ä¯raÅ¡Å³.</p>\n<p>Ir kad bÅ«tÅ³ aiÅ¡ku â€” <strong>mokesÄiÅ³ kas ketvirtÄ¯ nemoki.</strong> Bent jau ne dabar. KetvirtinÄ— ataskaita yra tik informacija. Kiek skolingas apskaiÄiuojama vis tiek kartÄ… per metus ir vis tiek mokama iki sausio 31 d. Niekas neima iÅ¡ tavÄ™s pinigÅ³ kas tris mÄ—nesius.</p>\n<p>(Yra planÅ³ nuo maÅ¾daug 2029 metÅ³ Ä¯vesti reguliaresnius mokesÄiÅ³ mokÄ—jimus savarankiÅ¡kai dirbantiems â€” panaÅ¡iai kaip PAYE veikia darbuotojams. Bet tai dar ne dabar, ir kai ateis, tai bus atskiras pakeitimas su atskiru praneÅ¡imu.)</p>\n<p>Tikroji mokesÄiÅ³ deklaracija â€” ta, kurioje tavo buhalteris uÅ¾dirba atlyginimÄ…, reikalauja atskaitymÅ³ ir apskaiÄiuoja kiek skolingas HMRC. Arba, geru metais, kiek HMRC skolingas tau â€” ta vis tiek vyksta kartÄ… per metus. MTD jos nepakeiÄia. Tai tiesiog reiÅ¡kia, kad HMRC kas ketvirtÄ¯ gauna apytikslÄ¯ vaizdÄ…, o ne nustemba kiekvienÄ… sausÄ¯.</p>\n<p>Sakyk taip: vietoj to, kad leistum kvitÅ³ maiÅ¡ui pildytis iÅ¡tisus metus, kas tris mÄ—nesius telefonu parodai HMRC kas viduje. MaiÅ¡as iÅ¡lieka valdomas. Tu â€” ramus.</p>\n<h2>Tai ar tau taikoma?</h2>\n<p>Viskas priklauso nuo vieno skaiÄiaus: tavo <strong>qualifying income</strong>.</p>\n<p>Ne pelno. Ne to, kas lieka po kuro, medÅ¾iagÅ³ ir automobilio draudimo. <strong>Bendrosios pajamos</strong> â€” viskas, kas atÄ—jo iÅ¡ savarankiÅ¡kos veiklos ir nuomos, prieÅ¡ iÅ¡leidÅ¾iant kÄ… nors.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr><th>Nuo</th><th>Riba</th><th>Kas patenka</th></tr></thead>\n<tbody>\n<tr><td>2026 m. balandis</td><td>Â£50 000</td><td>Esi sistemoje! (arba bent jau turÄ—tum jau bÅ«ti)</td></tr>\n<tr><td>2027 m. balandis</td><td>Â£30 000</td><td>Kita banga</td></tr>\n<tr><td>2028 m. balandis</td><td>Â£20 000</td><td>Dauguma savarankiÅ¡kai dirbanÄiÅ³ galiausiai</td></tr>\n</tbody>\n</table>\n</div>\n<p>Jei esi statybininkas su Â£55 000 apyvarta praÄ—jusiais metais â€” net jei pusÄ— nuÄ—jo medÅ¾iagoms â€” esi sistemoje. Jei vairuoji furgonÄ… ir dar nuomoji butÄ…, abi pajamos susumuojamos.</p>\n<p>Dirbi pagal darbo sutartÄ¯ ir turi nuosavÅ³ sÄ…skaitÅ³ faktÅ«rÅ³ Å¡alia? MTD tikslais skaiÄiuojama tik savarankiÅ¡ka veikla. Atlyginimas iÅ¡ darbdavio neÄ¯eina Ä¯ skaiÄiavimÄ….</p>\n<h2>O kas, jei esu toli nuo tÅ³ skaiÄiÅ³?</h2>\n<p>Å½emiau Â£20 000 â€” automatiÅ¡kai atleistas. Nieko daryti nereikia.</p>\n<p>Tarp Â£20 000 ir dabartinÄ—s ribos â€” dar nesi sistemoje, bet bÅ«si. Verta pradÄ—ti tvarkyti skaitmeninius Ä¯raÅ¡us dabar, nes Ä¯proÄiai formuojasi mÄ—nesius, o ne savaitgalÄ¯ prieÅ¡ terminÄ….</p>\n<h2>Kas iÅ¡ tikrÅ³jÅ³ iÅ¡sisuka?</h2>\n<p>Kelios grupÄ—s gali kreiptis dÄ—l atleidimo:</p>\n<ul>\n<li>Asmenys, kurie tikrai negali naudotis kompiuteriu ar programine Ä¯ranga â€” dÄ—l amÅ¾iaus, negalios ar interneto nebuvimo</li>\n<li>Kai kurios religinÄ—s grupÄ—s, kur skaitmeninÄ— apskaita prieÅ¡tarauja Ä¯sitikinimams</li>\n<li>Atvejai, kai HMRC sutinka, kad tai nepagrÄ¯stai nepraktiÅ¡ka</li>\n</ul>\n<p>Manai, kad gali iÅ¡sisukti? <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Patikrink atleidimÅ³ gaires GOV.UK</a> â€” nedaryk prielaidÅ³. HMRC turi sutikti.</p>\n<h2>Atvirai?</h2>\n<p>MTD yra tikras pokytis. Nebegali visko palikti sausio mÄ—nesiui. Bet tai nÄ—ra taip blogai, kaip skamba â€” daugiausia todÄ—l, kad ketvirtinÄ— dalis yra tik suvestinÄ—, o ne atsiskaitymas.</p>\n<p>Sunkioji dalis nÄ—ra pateikimas. Sunkioji dalis â€” tvarkingÅ³ Ä¯raÅ¡Å³ tvarkymas iÅ¡tisus metus, kad suvestinÄ— uÅ¾imtÅ³ minutes, o ne savaitgalÄ¯.</p>\n<p>DÄ—l savo konkreÄios situacijos â€” miÅ¡rios pajamos, keli darbai, kas nors sudÄ—tingo â€” klausk buhalterio. Tai apima bendras taisykles. Ne mokesÄiÅ³ konsultacija.</p>\n<h2>Å altiniai</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use MTD</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if you can get an exemption</a> â€” GOV.UK</li>\n</ul>"
  }
};

function mtdWhoNeedsArticle() {
  const lang = state.marketingLanguage || "en";
  const article = MTD_WHO_NEEDS_ARTICLES[lang] || MTD_WHO_NEEDS_ARTICLES.en;
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>${article.title}</h1>
      ${article.html}
      ${pageCta()}
    </article>
  `;
}

const MTD_CIS_ARTICLES = {
  "en": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>MTD for CIS subcontractors: gross income, payslips and quarterly updates</h1>\n  <h2>Does MTD apply to CIS subcontractors?</h2>\n  <p>Yes â€” in the same way it applies to any sole trader. If your gross qualifying income exceeds the relevant threshold, Making Tax Digital for Income Tax applies to you from the relevant date.</p>\n  <p>The thresholds: above Â£50,000 from April 2026, above Â£30,000 from April 2027, above Â£20,000 from April 2028.</p>\n  <p>Your qualifying income is based on your gross CIS income and any property income, before expenses and CIS deductions. CIS deductions do not reduce your qualifying income.</p>\n  <p>This catches people out. If your contractor pays you Â£1,600 and deducts Â£400 CIS tax, your qualifying income for threshold purposes is Â£2,000 â€” not Â£1,600. The deduction is tax paid on account, not a reduction in income.</p>\n  <h2>What CIS deductions actually are</h2>\n  <p>CIS is not income tax in a separate system. It is income tax paid early â€” in instalments, throughout the year, collected by your contractor on HMRC's behalf. When your contractor deducts 20% or 30% from your payment, they send that money directly to HMRC and report it monthly.</p>\n  <p>By the time you submit your annual return, HMRC already knows how much has been paid on your behalf. The deduction offsets the tax you owe for the year. If more was deducted than you owe, you get a refund.</p>\n  <p>MTD does not change any of this. It changes how frequently you report your income and expenses â€” not how CIS deductions work.</p>\n  <h2>What goes into your quarterly updates: gross income</h2>\n  <p>This is the part that confuses subcontractors â€” and some accountants.</p>\n  <p>When the customer submits quarterly updates to HMRC through their software, they will not be required to provide a CIS deduction amount. HMRC already has the deduction figures from your contractor's monthly returns.</p>\n  <p>What you record in your quarterly updates is your <strong>gross income</strong> â€” the full amount before the CIS deduction. If your payslip shows Â£2,000 gross and Â£400 deducted, you record Â£2,000 as income. Not Â£1,600.</p>\n  <p>After a quarterly update is submitted, the software triggers a tax calculation. This calculation result will include the CIS deductions received by the contractor for that quarter. So the net tax position you see after each quarterly update already takes your CIS deductions into account â€” even though you didn't enter them yourself.</p>\n  <p>If the amount your contractor reported to HMRC doesn't match your payslips, you can flag the discrepancy. If the customer does not agree with the amount the contractor has submitted to HMRC for any of their quarterly updates, HMRC advises them to query any discrepancies with their contractor.</p>\n  <h2>Your payslip is your primary record</h2>\n  <p>Every month your contractor should give you a CIS statement showing:</p>\n  <ul>\n    <li>Your gross pay</li>\n    <li>The CIS deduction amount and rate (20% or 30%)</li>\n    <li>The net amount paid to you</li>\n  </ul>\n  <p>This payslip is the document that supports your income records. Keep every one. They are your proof of gross income and your evidence of the deductions already paid to HMRC.</p>\n  <p>You will need to maintain digital records that include all income from construction work, including your full gross invoice amounts, and CIS deductions.</p>\n  <p>The most practical approach: when a payslip arrives by email, forward it to your record-keeping system immediately. Don't wait until the quarterly deadline to find twelve payslips from different contractors across different email accounts.</p>\n  <h2>What goes into your final declaration</h2>\n  <p>The final declaration is where CIS deductions are formally reconciled.</p>\n  <p>A customer, at any time, can view a breakdown of all the CIS deductions that have been reported to HMRC by their contractors. Before submitting the final declaration, you check that figure matches your own records. At the end of the year, if the customer still does not agree with the CIS deductions amount the contractor has submitted to HMRC, they can submit what they believe to be the correct amount.</p>\n  <p>This is why the final declaration requires professional input â€” your accountant can check the CIS deductions figure against your payslips, claim any allowable expenses properly, and make sure the year-end tax calculation is right. This is not the kind of thing an app should be doing automatically.</p>\n  <h2>The records you need to keep</h2>\n  <p>For each job or contractor:</p>\n  <ul>\n    <li>CIS payslips showing gross pay and deduction</li>\n    <li>Remittance notices and statements</li>\n    <li>Invoices you issued (if applicable)</li>\n    <li>Expenses: fuel, tools, materials, PPE, equipment hire, subcontractor payments you made</li>\n  </ul>\n  <p>For expenses, keep the receipt or proof behind each one. That includes ordinary van driver receipts UK subcontractors collect every week: fuel, parking, tools and materials. CIS deductions are only reconciled in your final declaration â€” but expenses reduce your taxable profit, so recording them accurately throughout the year matters.</p>\n  <p>If your turnover from self-employment is under Â£90,000, you may be able to use simplified categorisation â€” recording just whether each transaction is income or an expense, without breaking it into subcategories. Ask your accountant whether this applies to your situation.</p>\n  <h2>MTD doesn't replace CIS</h2>\n  <p>CIS deductions continue to be reported by contractors to HMRC. Subcontractors maintain digital records of income and deductions. Quarterly submissions provide regular business updates. At year-end, everything is brought together so that subcontractors can confirm their total business income, allowable expenses, CIS deductions already paid, adjustments required and final taxable profit.</p>\n  <p>CIS and MTD run in parallel. MTD changes the reporting rhythm â€” quarterly instead of annual â€” but it doesn't touch the deduction mechanism.</p>\n  <h2>Summary: what to do</h2>\n  <p>1. <strong>Keep every payslip</strong> as it arrives â€” forward it somewhere digital immediately.</p>\n  <p>2. <strong>Record gross income</strong> in your quarterly updates, not net.</p>\n  <p>3. <strong>Record expenses</strong> as they happen â€” fuel, tools, materials, everything with a receipt.</p>\n  <p>4. <strong>Submit four quarterly updates</strong> by the deadlines (7 August, 7 November, 7 February, 7 May).</p>\n  <p>5. <strong>Before the final declaration</strong>, check your CIS deduction total against your payslips and let your accountant do the rest.</p>\n  <p>For your specific situation â€” especially if you work for multiple contractors, have cash jobs alongside CIS work, or operate through a limited company â€” talk to your accountant. This page covers the general rules. Individual circumstances vary.</p>\n  <h2>Where TidGo fits</h2>\n  <p><a href=\"/\">TidGo</a> is built for exactly this kind of paperwork. Forward your CIS payslips and remittance notices by email, send expense receipt photos on WhatsApp, and keep everything in one place through the year. TidGo records gross income from payslips and stores the deduction information separately â€” so your quarterly records show the right figures, and your accountant has clean records for the final declaration.</p>\n  <p>TidGo does not submit to HMRC and does not give tax advice. It collects and organises the records so that whoever does your submission has something to work from.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html\" target=\"_blank\" rel=\"noopener\">HMRC MTD end-to-end service guide â€” making updates at tax year end</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/what-is-the-construction-industry-scheme\" target=\"_blank\" rel=\"noopener\">Construction Industry Scheme â€” guidance</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Last checked: August 2026. Verify at GOV.UK if reading later.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "pl": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>MTD dla podwykonawcÃ³w CIS: przychÃ³d brutto, payslipy i raporty kwartalne</h1>\n  <h2>Czy MTD dotyczy podwykonawcÃ³w CIS?</h2>\n  <p>Tak â€” tak samo jak kaÅ¼dego sole tradera. JeÅ›li TwÃ³j przychÃ³d brutto przekracza odpowiedni prÃ³g, Making Tax Digital dla Income Tax dotyczy CiÄ™ od wÅ‚aÅ›ciwej daty.</p>\n  <p>Progi: powyÅ¼ej Â£50 000 od kwietnia 2026, powyÅ¼ej Â£30 000 od kwietnia 2027, powyÅ¼ej Â£20 000 od kwietnia 2028.</p>\n  <p>Qualifying income liczy siÄ™ od przychodu brutto z CIS i ewentualnych przychodÃ³w z wynajmu, przed kosztami i przed potrÄ…ceniami CIS. PotrÄ…cenia CIS nie zmniejszajÄ… qualifying income.</p>\n  <p>To jest puÅ‚apka, w ktÃ³rÄ… wiele osÃ³b wpada. JeÅ›li contractor pÅ‚aci Ci Â£1 600 i potrÄ…ca Â£400 CIS, Twoje qualifying income do celÃ³w progowych wynosi Â£2 000 â€” nie Â£1 600. PotrÄ…cenie to podatek zapÅ‚acony z gÃ³ry, a nie zmniejszenie przychodu.</p>\n  <h2>Czym sÄ… potrÄ…cenia CIS</h2>\n  <p>CIS to nie podatek w osobnym systemie. To podatek dochodowy pÅ‚acony z wyprzedzeniem â€” w ratach, przez caÅ‚y rok, pobierany przez contractora w imieniu HMRC. Kiedy contractor potrÄ…ca 20% lub 30% z Twojej wypÅ‚aty, wysyÅ‚a tÄ™ kwotÄ™ bezpoÅ›rednio do HMRC i raportuje to co miesiÄ…c.</p>\n  <p>Do czasu zÅ‚oÅ¼enia rocznej deklaracji HMRC juÅ¼ wie, ile zostaÅ‚o zapÅ‚acone w Twoim imieniu. PotrÄ…cenie kompensuje podatek, ktÃ³ry jesteÅ› winien za rok. JeÅ›li potrÄ…cono wiÄ™cej, niÅ¼ wynosi TwÃ³j podatek â€” dostajesz zwrot.</p>\n  <p>MTD tego nie zmienia. Zmienia czÄ™stotliwoÅ›Ä‡ raportowania przychodÃ³w i wydatkÃ³w â€” nie sposÃ³b dziaÅ‚ania potrÄ…ceÅ„ CIS.</p>\n  <h2>Co wpisuje siÄ™ w raporty kwartalne: przychÃ³d brutto</h2>\n  <p>Tu siÄ™ gubi wielu podwykonawcÃ³w â€” a nawet czÄ™Å›Ä‡ ksiÄ™gowych.</p>\n  <p>Kiedy klient wysyÅ‚a kwartalne aktualizacje do HMRC przez oprogramowanie, nie jest wymagane podawanie kwoty potrÄ…ceÅ„ CIS. HMRC ma juÅ¼ te dane z miesiÄ™cznych raportÃ³w contractora.</p>\n  <p>W raportach kwartalnych wpisujesz <strong>przychÃ³d brutto</strong> â€” peÅ‚nÄ… kwotÄ™ przed potrÄ…ceniem CIS. JeÅ›li payslip pokazuje Â£2 000 brutto i Â£400 potrÄ…cenia, wpisujesz Â£2 000 jako przychÃ³d. Nie Â£1 600.</p>\n  <p>Po wysÅ‚aniu kwartalnego raportu oprogramowanie uruchamia obliczenie podatkowe. Wynik tego obliczenia zawiera potrÄ…cenia CIS zgÅ‚oszone przez contractora za dany kwartaÅ‚. Czyli pozycja podatkowa, ktÃ³rÄ… widzisz po kaÅ¼dym kwartale, juÅ¼ uwzglÄ™dnia Twoje potrÄ…cenia CIS â€” mimo Å¼e sam ich nie wpisywaÅ‚eÅ›.</p>\n  <p>JeÅ›li kwota zgÅ‚oszona przez contractora do HMRC nie zgadza siÄ™ z Twoimi payslipami, moÅ¼esz to zgÅ‚osiÄ‡. JeÅ›li klient nie zgadza siÄ™ z kwotÄ… zgÅ‚oszonÄ… przez contractora do HMRC za ktÃ³rykolwiek z kwartalnych raportÃ³w, HMRC radzi wyjaÅ›niÄ‡ rozbieÅ¼noÅ›ci z contractorem.</p>\n  <h2>Payslip to TwÃ³j gÅ‚Ã³wny dokument</h2>\n  <p>Co miesiÄ…c contractor powinien daÄ‡ Ci zestawienie CIS pokazujÄ…ce:</p>\n  <ul>\n    <li>Twoje wynagrodzenie brutto</li>\n    <li>KwotÄ™ i stawkÄ™ potrÄ…cenia CIS (20% lub 30%)</li>\n    <li>KwotÄ™ netto wypÅ‚aconÄ… Tobie</li>\n  </ul>\n  <p>Ten payslip to dokument potwierdzajÄ…cy TwÃ³j przychÃ³d. Zachowuj kaÅ¼dy. To TwÃ³j dowÃ³d przychodu brutto i dowÃ³d potrÄ…ceÅ„ juÅ¼ zapÅ‚aconych do HMRC.</p>\n  <p>Najbardziej praktyczne podejÅ›cie: gdy payslip przychodzi mailem, od razu go przekaÅ¼ do swojego systemu rekordÃ³w. Nie czekaj do terminu kwartalnego, Å¼eby szukaÄ‡ dwunastu payslipÃ³w od rÃ³Å¼nych contractorÃ³w po rÃ³Å¼nych skrzynkach mailowych.</p>\n  <h2>Co wchodzi do final declaration</h2>\n  <p>Final declaration to moment, w ktÃ³rym potrÄ…cenia CIS sÄ… formalnie rozliczone.</p>\n  <p>Klient moÅ¼e w kaÅ¼dej chwili zobaczyÄ‡ zestawienie wszystkich potrÄ…ceÅ„ CIS zgÅ‚oszonych do HMRC przez contractorÃ³w. Przed zÅ‚oÅ¼eniem final declaration sprawdzasz, czy ta kwota zgadza siÄ™ z Twoimi payslipami. JeÅ›li nie â€” moÅ¼esz podaÄ‡ wÅ‚aÅ›ciwÄ… kwotÄ™.</p>\n  <p>To jest powÃ³d, dla ktÃ³rego final declaration wymaga udziaÅ‚u profesjonalisty â€” TwÃ³j ksiÄ™gowy sprawdza kwotÄ™ potrÄ…ceÅ„ CIS wobec payslipÃ³w, prawidÅ‚owo rozlicza koszty i pilnuje, Å¼eby roczne obliczenie podatkowe byÅ‚o poprawne.</p>\n  <h2>Rekordy, ktÃ³re musisz prowadziÄ‡</h2>\n  <p>Dla kaÅ¼dej pracy / kaÅ¼dego contractora:</p>\n  <ul>\n    <li>Payslipy CIS z wynagrodzeniem brutto i potrÄ…ceniem</li>\n    <li>Remittance notices i zestawienia</li>\n    <li>Faktury, ktÃ³re wystawiÅ‚eÅ› (jeÅ›li dotyczy)</li>\n    <li>Wydatki: paliwo, narzÄ™dzia, materiaÅ‚y, BHP, wynajem sprzÄ™tu, pÅ‚atnoÅ›ci podwykonawcom</li>\n  </ul>\n  <p>Przy wydatkach zachowuj paragon lub inny dowÃ³d. Wydatki zmniejszajÄ… TwÃ³j dochÃ³d do opodatkowania â€” dlatego warto zapisywaÄ‡ je na bieÅ¼Ä…co przez caÅ‚y rok.</p>\n  <p>JeÅ›li TwÃ³j obrÃ³t z dziaÅ‚alnoÅ›ci jest poniÅ¼ej Â£90 000, moÅ¼esz korzystaÄ‡ z uproszczonej kategoryzacji â€” wpisujesz tylko, czy transakcja to przychÃ³d, czy wydatek, bez rozbijania na podkategorie. Zapytaj ksiÄ™gowego, czy to dotyczy Twojej sytuacji.</p>\n  <h2>MTD nie zastÄ™puje CIS</h2>\n  <p>CIS i MTD dziaÅ‚ajÄ… rÃ³wnolegle. MTD zmienia rytm raportowania â€” kwartalnie zamiast raz w roku â€” ale nie dotyka mechanizmu potrÄ…ceÅ„.</p>\n  <p>Contractorzy nadal potrÄ…cajÄ… podatek i raportujÄ… do HMRC co miesiÄ…c. Ty prowadzisz cyfrowe rekordy i wysyÅ‚asz kwartalne aktualizacje. Na koniec roku wszystko siÄ™ schodzi: przychÃ³d brutto, koszty, potrÄ…cenia CIS juÅ¼ zapÅ‚acone, ewentualne korekty i koÅ„cowy dochÃ³d do opodatkowania.</p>\n  <h2>Podsumowanie: co robiÄ‡</h2>\n  <p>1. <strong>Zachowuj kaÅ¼dy payslip</strong> jak tylko go dostaniesz â€” od razu przekaÅ¼ gdzieÅ› cyfrowo.</p>\n  <p>2. <strong>Wpisuj przychÃ³d brutto</strong> w raportach kwartalnych, nie kwotÄ™ netto.</p>\n  <p>3. <strong>Zapisuj wydatki</strong> na bieÅ¼Ä…co â€” paliwo, narzÄ™dzia, materiaÅ‚y, wszystko z paragonem.</p>\n  <p>4. <strong>WysyÅ‚aj cztery raporty kwartalne</strong> w terminach (7 sierpnia, 7 listopada, 7 lutego, 7 maja).</p>\n  <p>5. <strong>Przed final declaration</strong> sprawdÅº sumÄ™ potrÄ…ceÅ„ CIS wobec payslipÃ³w i oddaj resztÄ™ ksiÄ™gowemu.</p>\n  <p>W sprawach dotyczÄ…cych Twojej konkretnej sytuacji â€” zwÅ‚aszcza jeÅ›li pracujesz dla kilku contractorÃ³w, masz gotÃ³wkowe zlecenia obok CIS albo dziaÅ‚asz przez spÃ³Å‚kÄ™ â€” zapytaj ksiÄ™gowego. My nie udzielamy porad podatkowych.</p>\n  <h2>Gdzie w tym wszystkim TidGo</h2>\n  <p><a href=\"/pl\">TidGo</a> jest zbudowane dokÅ‚adnie dla tego rodzaju papierologii. PrzekaÅ¼ payslipy CIS i remittance notices mailem, wyÅ›lij zdjÄ™cia paragonÃ³w za wydatki na WhatsAppie i miej wszystko w jednym miejscu przez caÅ‚y rok. TidGo zapisuje przychÃ³d brutto z payslipÃ³w i przechowuje informacjÄ™ o potrÄ…ceniu osobno â€” Å¼eby Twoje kwartalne rekordy pokazywaÅ‚y wÅ‚aÅ›ciwe kwoty, a ksiÄ™gowy miaÅ‚ czyste dane do final declaration.</p>\n  <p>TidGo nie wysyÅ‚a nic do HMRC i nie udziela porad podatkowych. Zbiera i porzÄ…dkuje rekordy, Å¼eby ten, kto robi Twoje rozliczenie, miaÅ‚ z czego pracowaÄ‡.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html\" target=\"_blank\" rel=\"noopener\">HMRC MTD end-to-end service guide â€” making updates at tax year end</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/what-is-the-construction-industry-scheme\" target=\"_blank\" rel=\"noopener\">Construction Industry Scheme â€” guidance</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Sprawdzone: sierpieÅ„ 2026. Zweryfikuj na GOV.UK, jeÅ›li czytasz to pÃ³Åºniej.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "ro": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>MTD pentru subcontractorii CIS: venit brut, payslipuri È™i raportÄƒri trimestriale</h1>\n  <h2>MTD se aplicÄƒ subcontractorilor CIS?</h2>\n  <p>Da â€” la fel ca oricÄƒrui sole trader. DacÄƒ venitul tÄƒu brut depÄƒÈ™eÈ™te pragul relevant, Making Tax Digital pentru Income Tax È›i se aplicÄƒ de la data corespunzÄƒtoare.</p>\n  <p>Pragurile: peste Â£50.000 din aprilie 2026, peste Â£30.000 din aprilie 2027, peste Â£20.000 din aprilie 2028.</p>\n  <p>Qualifying income se bazeazÄƒ pe venitul brut CIS È™i pe orice venituri din proprietÄƒÈ›i, Ã®nainte de cheltuieli È™i Ã®nainte de deducerile CIS. Deducerile CIS nu reduc qualifying income.</p>\n  <p>Aceasta este capcana Ã®n care cad mulÈ›i. DacÄƒ antreprenorul Ã®È›i plÄƒteÈ™te Â£1.600 È™i deduce Â£400 CIS, qualifying income-ul tÄƒu Ã®n scopul pragului este Â£2.000 â€” nu Â£1.600. Deducerea este impozit plÄƒtit Ã®n avans, nu o reducere a venitului.</p>\n  <h2>Ce sunt deducerile CIS</h2>\n  <p>CIS nu este impozit Ã®ntr-un sistem separat. Este impozit pe venit plÄƒtit anticipat â€” Ã®n rate, pe tot parcursul anului, colectat de antreprenor Ã®n numele HMRC. CÃ¢nd antreprenorul deduce 20% sau 30% din plata ta, trimite acea sumÄƒ direct la HMRC È™i o raporteazÄƒ lunar.</p>\n  <p>PÃ¢nÄƒ cÃ¢nd depui declaraÈ›ia anualÄƒ, HMRC È™tie deja cÃ¢t s-a plÄƒtit Ã®n numele tÄƒu. Deducerea compenseazÄƒ impozitul pe care Ã®l datorezi pentru anul respectiv. DacÄƒ s-a dedus mai mult decÃ¢t datorezi â€” primeÈ™ti o rambursare.</p>\n  <p>MTD nu schimbÄƒ nimic din aceasta. SchimbÄƒ frecvenÈ›a cu care raportezi veniturile È™i cheltuielile â€” nu modul Ã®n care funcÈ›ioneazÄƒ deducerile CIS.</p>\n  <h2>Ce intrÄƒ Ã®n raportÄƒrile trimestriale: venitul brut</h2>\n  <p>Aceasta este partea care Ã®i deruteazÄƒ pe subcontractori â€” È™i pe unii contabili.</p>\n  <p>CÃ¢nd clientul trimite actualizÄƒri trimestriale la HMRC prin software-ul sÄƒu, nu i se va cere sÄƒ furnizeze suma deducerilor CIS. HMRC are deja cifrele din raportÄƒrile lunare ale antreprenorului.</p>\n  <p>Ce Ã®nregistrezi Ã®n raportÄƒrile trimestriale este <strong>venitul brut</strong> â€” suma totalÄƒ Ã®nainte de deducerea CIS. DacÄƒ payslip-ul aratÄƒ Â£2.000 brut È™i Â£400 dedus, Ã®nregistrezi Â£2.000 ca venit. Nu Â£1.600.</p>\n  <p>DupÄƒ trimiterea unei actualizÄƒri trimestriale, software-ul declanÈ™eazÄƒ calculul fiscal. Rezultatul acestui calcul va include deducerile CIS primite de antreprenor pentru trimestrul respectiv. Deci poziÈ›ia fiscalÄƒ netÄƒ pe care o vezi dupÄƒ fiecare trimestru include deja deducerile tale CIS â€” chiar dacÄƒ tu nu le-ai introdus.</p>\n  <h2>Payslip-ul este documentul tÄƒu principal</h2>\n  <p>ÃŽn fiecare lunÄƒ antreprenorul tÄƒu ar trebui sÄƒ Ã®È›i dea o declaraÈ›ie CIS care sÄƒ arate:</p>\n  <ul>\n    <li>Plata brutÄƒ</li>\n    <li>Suma È™i rata deducerii CIS (20% sau 30%)</li>\n    <li>Suma netÄƒ plÄƒtitÄƒ È›ie</li>\n  </ul>\n  <p>Acest payslip este documentul care susÈ›ine Ã®nregistrÄƒrile tale de venit. PÄƒstreazÄƒ-le pe toate. Sunt dovada ta de venit brut È™i dovada deducerilor deja plÄƒtite la HMRC.</p>\n  <p>Abordarea cea mai practicÄƒ: cÃ¢nd un payslip soseÈ™te pe email, transmite-l imediat Ã®n sistemul tÄƒu de evidenÈ›e. Nu aÈ™tepta pÃ¢nÄƒ la termenul trimestrial sÄƒ cauÈ›i douÄƒsprezece payslipuri de la diferiÈ›i antreprenori din conturi de email diferite.</p>\n  <h2>Ce intrÄƒ Ã®n final declaration</h2>\n  <p>Final declaration este momentul Ã®n care deducerile CIS sunt reconciliate formal.</p>\n  <p>Clientul poate oricÃ¢nd sÄƒ vadÄƒ o defalcare a tuturor deducerilor CIS raportate la HMRC de antreprenorii sÄƒi. ÃŽnainte de a depune final declaration, verifici dacÄƒ acea sumÄƒ corespunde payslip-urilor tale. DacÄƒ nu â€” poÈ›i trimite suma pe care o consideri corectÄƒ.</p>\n  <p>Acesta este motivul pentru care final declaration necesitÄƒ implicarea unui profesionist â€” contabilul tÄƒu verificÄƒ suma deducerilor CIS faÈ›Äƒ de payslipuri, revendicÄƒ cheltuielile deductibile corect È™i se asigurÄƒ cÄƒ calculul fiscal anual este corect.</p>\n  <h2>ÃŽnregistrÄƒrile pe care trebuie sÄƒ le È›ii</h2>\n  <p>Pentru fiecare lucrare / antreprenor:</p>\n  <ul>\n    <li>Payslipuri CIS cu plata brutÄƒ È™i deducerea</li>\n    <li>Remittance notices È™i declaraÈ›ii</li>\n    <li>Facturi emise (dacÄƒ este cazul)</li>\n    <li>Cheltuieli: combustibil, scule, materiale, echipamente de protecÈ›ie, Ã®nchiriere utilaje, plÄƒÈ›i cÄƒtre subcontractori</li>\n  </ul>\n  <p>Pentru cheltuieli, pÄƒstreazÄƒ bonul sau dovada. Cheltuielile reduc profitul tÄƒu impozabil â€” de aceea conteazÄƒ sÄƒ le Ã®nregistrezi corect pe tot parcursul anului.</p>\n  <h2>MTD nu Ã®nlocuieÈ™te CIS</h2>\n  <p>CIS È™i MTD funcÈ›ioneazÄƒ Ã®n paralel. MTD schimbÄƒ ritmul raportÄƒrii â€” trimestrial Ã®n loc de anual â€” dar nu atinge mecanismul deducerilor.</p>\n  <p>Antreprenorii continuÄƒ sÄƒ deducÄƒ impozit È™i sÄƒ raporteze la HMRC lunar. Tu È›ii evidenÈ›e digitale È™i trimiÈ›i actualizÄƒri trimestriale. La sfÃ¢rÈ™itul anului totul se reuneÈ™te: venit brut, cheltuieli, deduceri CIS deja plÄƒtite, ajustÄƒri necesare È™i profit impozabil final.</p>\n  <h2>Rezumat: ce sÄƒ faci</h2>\n  <p>1. <strong>PÄƒstreazÄƒ fiecare payslip</strong> cÃ¢nd Ã®l primeÈ™ti â€” transmite-l imediat undeva digital.</p>\n  <p>2. <strong>ÃŽnregistreazÄƒ venitul brut</strong> Ã®n raportÄƒrile trimestriale, nu suma netÄƒ.</p>\n  <p>3. <strong>ÃŽnregistreazÄƒ cheltuielile</strong> pe mÄƒsurÄƒ ce apar â€” combustibil, scule, materiale, orice cu bon.</p>\n  <p>4. <strong>Trimite patru raportÄƒri trimestriale</strong> la termenele scadente (7 august, 7 noiembrie, 7 februarie, 7 mai).</p>\n  <p>5. <strong>ÃŽnainte de final declaration</strong>, verificÄƒ totalul deducerilor CIS faÈ›Äƒ de payslipuri È™i lasÄƒ restul pe seama contabilului.</p>\n  <p>Pentru situaÈ›ia ta specificÄƒ â€” mai ales dacÄƒ lucrezi pentru mai mulÈ›i antreprenori, ai lucrÄƒri cash alÄƒturi de CIS sau operezi printr-o societate â€” consultÄƒ contabilul. AceastÄƒ paginÄƒ acoperÄƒ regulile generale.</p>\n  <h2>Unde se Ã®ncadreazÄƒ TidGo</h2>\n  <p><a href=\"/ro\">TidGo</a> este construit exact pentru acest tip de evidenÈ›e. Transmite payslipurile CIS È™i remittance notices prin email, trimite poze la bonurile de cheltuieli pe WhatsApp È™i È›ine totul Ã®ntr-un singur loc pe tot parcursul anului. TidGo Ã®nregistreazÄƒ venitul brut din payslipuri È™i stocheazÄƒ informaÈ›ia despre deducere separat â€” ca Ã®nregistrÄƒrile tale trimestriale sÄƒ arate cifrele corecte, iar contabilul sÄƒ aibÄƒ date curate pentru final declaration.</p>\n  <p>TidGo nu trimite nimic la HMRC È™i nu oferÄƒ consultanÈ›Äƒ fiscalÄƒ. ColecteazÄƒ È™i ordoneazÄƒ Ã®nregistrÄƒrile ca cel care face raportarea ta sÄƒ aibÄƒ ceva cu care sÄƒ lucreze.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html\" target=\"_blank\" rel=\"noopener\">HMRC MTD end-to-end service guide</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/what-is-the-construction-industry-scheme\" target=\"_blank\" rel=\"noopener\">Construction Industry Scheme â€” guidance</a></li>\n    </ul>\n    <p>*Verificat: august 2026. VerificÄƒ pe GOV.UK dacÄƒ citeÈ™ti mai tÃ¢rziu.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "lt": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>MTD CIS subkontraktorjams: bendrosios pajamos, payslipai ir ketvirtinÄ—s ataskaitos</h1>\n  <h2>Ar MTD taikomas CIS subkontraktorjams?</h2>\n  <p>Taip â€” taip pat kaip bet kuriam sole trader. Jei tavo bendrosios pajamos virÅ¡ija atitinkamÄ… ribÄ…, Making Tax Digital pajamÅ³ mokesÄiui taikomas nuo atitinkamos datos.</p>\n  <p>Ribos: virÅ¡ Â£50 000 nuo 2026 m. balandÅ¾io, virÅ¡ Â£30 000 nuo 2027 m. balandÅ¾io, virÅ¡ Â£20 000 nuo 2028 m. balandÅ¾io.</p>\n  <p>Qualifying income grindÅ¾iamas bendrosiomis CIS pajamomis ir bet kokiomis nuomos pajamomis, prieÅ¡ iÅ¡laidas ir prieÅ¡ CIS atskaitymus. CIS atskaitymai nemaÅ¾ina qualifying income.</p>\n  <p>Tai spÄ…stai, Ä¯ kuriuos pakliÅ«na daug Å¾moniÅ³. Jei rangovas moka tau Â£1 600 ir iÅ¡skaiÄiuoja Â£400 CIS, tavo qualifying income ribos tikslais yra Â£2 000, o ne Â£1 600. Atskaitymas yra iÅ¡ anksto sumokÄ—tas mokestis, o ne pajamÅ³ sumaÅ¾inimas.</p>\n  <h2>Kas yra CIS atskaitymai</h2>\n  <p>CIS nÄ—ra mokestis atskiroje sistemoje. Tai iÅ¡ anksto mokamas pajamÅ³ mokestis â€” dalimis, iÅ¡tisus metus, kurÄ¯ rangovas renka HMRC vardu. Kai rangovas iÅ¡skaiÄiuoja 20% ar 30% iÅ¡ tavo mokÄ—jimo, tÄ… sumÄ… siunÄia tiesiai Ä¯ HMRC ir kas mÄ—nesÄ¯ tai praneÅ¡a.</p>\n  <p>Kol pateiki metinÄ™ deklaracijÄ…, HMRC jau Å¾ino, kiek buvo sumokÄ—ta tavo vardu. Atskaitymas kompensuoja mokestÄ¯, kurÄ¯ esi skolingas uÅ¾ metus. Jei buvo iÅ¡skaiÄiuota daugiau nei tu esi skolingas â€” gauni grÄ…Å¾inamÄ…jÄ… iÅ¡mokÄ….</p>\n  <p>MTD to nekeiÄia. KeiÄia pajamÅ³ ir iÅ¡laidÅ³ ataskaitÅ³ teikimo daÅ¾numÄ… â€” ne CIS atskaitymÅ³ veikimÄ….</p>\n  <h2>Kas Ä¯raÅ¡oma Ä¯ ketvirtines ataskaitas: bendrosios pajamos</h2>\n  <p>Tai dalis, kuri glumina subkontraktoriuos â€” ir dalÄ¯ buhalteriÅ³.</p>\n  <p>Kai klientas per savo programinÄ™ Ä¯rangÄ… siunÄia ketvirtines atnaujinimus Ä¯ HMRC, jam nereikia nurodyti CIS atskaitymÅ³ sumos. HMRC jau turi tuos skaiÄius iÅ¡ rangovo mÄ—nesiniÅ³ ataskaitÅ³.</p>\n  <p>Ä® ketvirtines ataskaitas Ä¯raÅ¡ai <strong>bendrÄ…sias pajamas</strong> â€” visÄ… sumÄ… prieÅ¡ CIS atskaitymÄ…. Jei payslipe nurodyta Â£2 000 bruto ir Â£400 atskaitymo, Ä¯raÅ¡ai Â£2 000 kaip pajamas. Ne Â£1 600.</p>\n  <p>Pateikus ketvirtinÄ™ ataskaitÄ…, programinÄ— Ä¯ranga suaktyvina mokesÄiÅ³ skaiÄiavimÄ…. Å io skaiÄiavimo rezultatas apims CIS atskaitymus, kuriuos rangovas praneÅ¡Ä— uÅ¾ tÄ… ketvirtÄ¯. Taigi grynoji mokestinÄ— pozicija, kuriÄ… matai po kiekvieno ketvirÄio, jau atsiÅ¾velgia Ä¯ tavo CIS atskaitymus â€” net jei tu jÅ³ nepateikei.</p>\n  <h2>Payslipas yra pagrindinis tavo dokumentas</h2>\n  <p>KiekvienÄ… mÄ—nesÄ¯ rangovas turÄ—tÅ³ duoti tau CIS iÅ¡raÅ¡Ä…, kuriame nurodyta:</p>\n  <ul>\n    <li>Tavo bruto uÅ¾mokestis</li>\n    <li>CIS atskaitymo suma ir tarifas (20% ar 30%)</li>\n    <li>Tau iÅ¡mokÄ—ta grynoji suma</li>\n  </ul>\n  <p>Å is payslipas yra dokumentas, patvirtinantis tavo pajamas. Saugok kiekvienÄ…. Tai tavo bruto pajamÅ³ Ä¯rodymas ir Ä¯rodymÅ³, kad atskaitymai jau sumokÄ—ti Ä¯ HMRC.</p>\n  <p>PraktiÅ¡kiausias poÅ¾iÅ«ris: kai payslipas ateina el. paÅ¡tu, nedelsiant persiÅ³sk jÄ¯ Ä¯ savo Ä¯raÅ¡Å³ sistemÄ…. Nelaukk iki ketvirtinio termino ieÅ¡koti dvylikos payslipÅ³ iÅ¡ skirtingÅ³ rangovÅ³ skirtingose el. paÅ¡to paskyrose.</p>\n  <h2>Kas Ä¯eina Ä¯ final declaration</h2>\n  <p>Final declaration yra momentas, kai CIS atskaitymai yra formaliai suderinami.</p>\n  <p>Klientas bet kada gali perÅ¾iÅ«rÄ—ti visÅ³ CIS atskaitymÅ³, kuriuos HMRC praneÅ¡Ä— rangovai, iÅ¡klotinÄ™. PrieÅ¡ pateikiant final declaration, patikrink, ar ta suma atitinka tavo payslipus. Jei ne â€” gali pateikti, kiek manai esant teisinga.</p>\n  <p>Tai prieÅ¾astis, kodÄ—l final declaration reikalingas profesionalo dalyvavimas â€” tavo buhalteris patikrina CIS atskaitymÅ³ sumÄ… pagal payslipus, tinkamai reikalauja leistinÅ³ iÅ¡laidÅ³ ir pasirÅ«pina, kad metinis mokesÄiÅ³ skaiÄiavimas bÅ«tÅ³ teisingas.</p>\n  <h2>Ä®raÅ¡ai, kuriuos privalai tvarkyti</h2>\n  <p>Kiekvienam darbui / rangovui:</p>\n  <ul>\n    <li>CIS payslipai su bruto mokÄ—jimu ir atskaitymu</li>\n    <li>Remittance notices ir iÅ¡raÅ¡ai</li>\n    <li>IÅ¡raÅ¡ytos sÄ…skaitos faktÅ«ros (jei taikoma)</li>\n    <li>IÅ¡laidos: kuras, Ä¯rankiai, medÅ¾iagos, apsauginÄ—s priemonÄ—s, Ä¯rangos nuoma, mokÄ—jimai subkontraktorjams</li>\n  </ul>\n  <p>IÅ¡laidoms saugok kvitÄ… ar Ä¯rodymÄ…. IÅ¡laidos maÅ¾ina tavo apmokestinamÄ…jÄ¯ pelnÄ… â€” todÄ—l svarbu jas tiksliai registruoti iÅ¡tisus metus.</p>\n  <h2>MTD nepakeiÄia CIS</h2>\n  <p>CIS ir MTD veikia lygiagreÄiai. MTD keiÄia ataskaitÅ³ teikimo ritmÄ… â€” kas ketvirtÄ¯ vietoj kasmet â€” bet nelieÄia atskaitymÅ³ mechanizmo.</p>\n  <p>Rangovai toliau iÅ¡skaiÄiuoja mokestÄ¯ ir kas mÄ—nesÄ¯ praneÅ¡a HMRC. Tu tvarkai skaitmeninius Ä¯raÅ¡us ir siunti ketvirtines atnaujinimus. MetÅ³ pabaigoje viskas susijungia: bendrosios pajamos, iÅ¡laidos, jau sumokÄ—ti CIS atskaitymai, reikalingi patikslinimai ir galutinis apmokestinamasis pelnas.</p>\n  <h2>Santrauka: kÄ… daryti</h2>\n  <p>1. <strong>Saugok kiekvienÄ… payslipÄ…</strong> gavÄ™s â€” iÅ¡kart persiÅ³sk kur nors skaitmeniniu formatu.</p>\n  <p>2. <strong>Ä®raÅ¡yk bendrÄ…sias pajamas</strong> ketvirtinÄ—se ataskaitose, o ne grynÄ…jÄ… sumÄ….</p>\n  <p>3. <strong>Registruok iÅ¡laidas</strong> joms atsiradus â€” kuras, Ä¯rankiai, medÅ¾iagos, viskas su kvitu.</p>\n  <p>4. <strong>SiÅ³sk keturias ketvirtines ataskaitas</strong> per terminus (rugpjÅ«Äio 7, lapkriÄio 7, vasario 7, geguÅ¾Ä—s 7).</p>\n  <p>5. <strong>PrieÅ¡ final declaration</strong> patikrink bendrÄ… CIS atskaitymÅ³ sumÄ… pagal payslipus ir likusiÄ… dalÄ¯ palik buhalteriui.</p>\n  <p>DÄ—l savo konkreÄios situacijos â€” ypaÄ jei dirbi keliems rangovams, turi grynÅ³jÅ³ darbÅ³ Å¡alia CIS arba veiki per ribotos atsakomybÄ—s bendrovÄ™ â€” pasitark su buhalteriu.</p>\n  <h2>Kur Äia TidGo</h2>\n  <p><a href=\"/lt\">TidGo</a> sukurtas bÅ«tent Å¡iam dokumentÅ³ tvarkymo tipui. PersiÅ³sk CIS payslipus ir remittance notices el. paÅ¡tu, siÅ³sk iÅ¡laidÅ³ kvitÅ³ nuotraukas per WhatsApp ir laikyk viskÄ… vienoje vietoje iÅ¡tisus metus. TidGo registruoja bendrÄ…sias pajamas iÅ¡ payslipÅ³ ir saugo atskaitymo informacijÄ… atskirai â€” kad tavo ketvirtiniai Ä¯raÅ¡ai rodytÅ³ teisingas sumas, o buhalteris turÄ—tÅ³ Å¡varius duomenis final declaration.</p>\n  <p>TidGo nieko nesiunÄia Ä¯ HMRC ir neteikia mokesÄiÅ³ konsultacijÅ³. Renka ir tvarko Ä¯raÅ¡us, kad tas, kas teikia tavo ataskaitas, turÄ—tÅ³ iÅ¡ ko dirbti.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html\" target=\"_blank\" rel=\"noopener\">HMRC MTD end-to-end service guide</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/what-is-the-construction-industry-scheme\" target=\"_blank\" rel=\"noopener\">Construction Industry Scheme â€” guidance</a></li>\n    </ul>\n    <p>*Patikrinta: 2026 m. rugpjÅ«tis. Jei skaitai vÄ—liau, pasitikrink GOV.UK.*</p>\n  </div>\n  ${pageCta()}\n</article>"
};

function mtdCisArticle() {
  return (MTD_CIS_ARTICLES[state.marketingLanguage] || MTD_CIS_ARTICLES.en)
    .replaceAll('${mk("navMtd")}', mk("navMtd"))
    .replaceAll('${pageCta()}', pageCta());
}

const MTD_WHAT_ARTICLES = {
  "en": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>What is Making Tax Digital? And does it apply to me?</h1>\n  <h2>The one-sentence version</h2>\n  <p>Making Tax Digital for Income Tax is HMRC's requirement for self-employed people and landlords to keep their income and expense records digitally and report them to HMRC four times a year, instead of once.</p>\n  <p>That's the whole thing. Everything else is detail.</p>\n  <h2>Why HMRC is doing this</h2>\n  <p>The current system â€” keep whatever records you like all year, then add it all up in January â€” produces errors, late returns and unpaid tax. HMRC believes that people who record income and expenses as they happen, rather than reconstructing the year from a bag of receipts, will end up with more accurate returns.</p>\n  <p>There is also a revenue motive. More frequent reporting means HMRC spots problems earlier. That is their business, not yours â€” but it explains why this is not optional.</p>\n  <h2>Who does it apply to?</h2>\n  <p>Making Tax Digital for Income Tax applies to <a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">sole traders and landlords</a> whose qualifying income exceeds the relevant threshold.</p>\n  <p>The thresholds are being introduced in stages:</p>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>From</th>\n        <th>Threshold</th>\n        <th>Who is affected</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>April 2026</td>\n          <td>Â£50,000</td>\n          <td>Sole traders and landlords already in scope</td>\n        </tr>\n        <tr>\n          <td>April 2027</td>\n          <td>Â£30,000</td>\n          <td>Additional sole traders and landlords</td>\n        </tr>\n        <tr>\n          <td>April 2028</td>\n          <td>Â£20,000</td>\n          <td>Further sole traders and landlords</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p><strong>Qualifying income</strong> is not your profit. It is your gross income from self-employment and property, before expenses and before any CIS deductions, added together. A full explanation with examples is in the <a href=\"/mtd/qualifying-income\">qualifying income article</a>.</p>\n  <p>MTD does not apply to you if your qualifying income is <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Â£20,000 or less</a> â€” you are automatically exempt. Between Â£20,000 and the relevant threshold, you are not yet in scope but the rules will eventually reach you as thresholds fall.</p>\n  <p>Limited companies are not affected by these rules. MTD for Income Tax applies to individuals â€” sole traders and landlords â€” not to corporation tax.</p>\n  <h2>What changes</h2>\n  <p><strong>What you do now:</strong> keep records however you like, add them up once a year, submit a Self Assessment return by 31 January.</p>\n  <p><strong>What MTD requires:</strong></p>\n  <ol>\n    <li><strong>Digital records.</strong> Your income and expenses must be recorded digitally â€” in software that works with MTD â€” as they happen. Not in a notebook, not in a spreadsheet that isn't linked to anything, not in a carrier bag.</li>\n  \n    <li><strong>Four quarterly updates.</strong> Every three months, you send HMRC a summary of your income and expenses for that period. These are not full tax returns. They are running totals. <a href=\"/mtd/quarterly-updates\">More detail on quarterly updates is here</a>.</li>\n  \n    <li><strong>A final declaration.</strong> At the end of the tax year, you confirm your figures, add any other income (employment, savings, dividends) and submit your annual return. This replaces Self Assessment. It still happens once a year. This is where your accountant earns their fee â€” reliefs, allowances and the final tax calculation all happen here.</li>\n  </ol>\n  <h2>What does not change</h2>\n  <p>CIS deductions continue exactly as before â€” contractors deduct tax and report to HMRC monthly. MTD does not replace or change that.</p>\n  <p>You still need an accountant for the final declaration if your affairs are anything other than straightforward.</p>\n  <p>HMRC does not want your paper receipts or your photos. What has to be digital is the record of each transaction â€” the amount, the date and the category. <a href=\"/mtd/do-i-have-to-photograph-receipts\">What counts as a digital record is explained here</a>.</p>\n  <h2>What you need to get started</h2>\n  <p><strong>An account to sign in with.</strong> Government Gateway or GOV.UK One Login. If you already file Self Assessment online, you have one.</p>\n  <p><strong>A UTR.</strong> Your Unique Taxpayer Reference â€” the ten-digit number that identifies you to HMRC. If you've filed Self Assessment before, you have one. If not, you need to <a href=\"https://www.gov.uk/register-for-self-assessment\" target=\"_blank\" rel=\"noopener\">register for Self Assessment</a> first and wait for your UTR to arrive by post.</p>\n  <p><strong>MTD-compatible software.</strong> HMRC maintains <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">a list of software that works with MTD</a>. You need software that can send quarterly updates and final declarations to HMRC directly.</p>\n  <p><strong>Registration for MTD.</strong> Having a Government Gateway account is not enough. You <a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">sign up for MTD separately</a>. After sign-up, HMRC issues you a set of obligations â€” what to report and when. <a href=\"/mtd/government-gateway\">The full explanation of Government Gateway vs MTD sign-up is here</a>.</p>\n  <h2>The first year: no penalty points for late quarterly updates</h2>\n  <p>2026/27 is a transition year. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC has confirmed</a> that no penalty points will be issued for late quarterly updates during this first year. The full points-based penalty system starts from 2027/28: four points equals a Â£200 penalty, and each additional late submission after that triggers another Â£200.</p>\n  <p>Late payment of tax and late final declarations are penalised under existing rules, even in 2026/27.</p>\n  <h2>The plain version</h2>\n  <p>You need to record your income and expenses digitally throughout the year. Every three months, your software sends a summary to HMRC. At the end of the year, you or your accountant confirms the figures and submits the annual return.</p>\n  <p>If you already use accounting software and file your own Self Assessment, the change is manageable. If you currently hand a bag of receipts to your accountant in January, the change is bigger â€” but the underlying habit it requires (recording things as they happen, not twelve months later) is one that makes your accountant's job easier and your tax bill more accurate.</p>\n  <p>For your own situation â€” especially if you have multiple income sources, foreign income, or a business structure that isn't straightforward â€” speak to your accountant. This page covers the general rules. It is not tax advice.</p>\n  <h2>Where TidGo fits</h2>\n  <p><a href=\"/\">TidGo</a> handles the record-keeping layer: receipts and income proof captured as they happen, by WhatsApp, email or in the app, in eight languages. TidGo doesn't submit quarterly updates or final declarations to HMRC â€” that part goes through MTD-compatible software or your accountant. It makes sure the records exist and are tidy when they're needed.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Sign up for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Last checked: August 2026. Verify at GOV.UK if reading later.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "pl": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Co to jest Making Tax Digital? I czy mnie dotyczy?</h1>\n  <h2>Wersja w jednym zdaniu</h2>\n  <p>Making Tax Digital dla Income Tax to wymÃ³g HMRC, Å¼eby samozatrudnieni i landlordzi prowadzili ewidencjÄ™ przychodÃ³w i wydatkÃ³w cyfrowo i raportowali do HMRC cztery razy w roku â€” zamiast raz.</p>\n  <p>Tyle. Reszta to szczegÃ³Å‚y.</p>\n  <h2>Dlaczego HMRC to robi</h2>\n  <p>Obecny system â€” prowadÅº jakÄ… chcesz ewidencjÄ™ przez caÅ‚y rok, a potem zsumuj wszystko w styczniu â€” generuje bÅ‚Ä™dy, spÃ³Åºnione zeznania i niezapÅ‚acony podatek. HMRC uwaÅ¼a, Å¼e ludzie, ktÃ³rzy zapisujÄ… przychody i wydatki na bieÅ¼Ä…co, zamiast rekonstruowaÄ‡ rok z reklamÃ³wki paragonÃ³w, bÄ™dÄ… skÅ‚adaÄ‡ dokÅ‚adniejsze zeznania.</p>\n  <p>Jest teÅ¼ motyw finansowy. CzÄ™stsze raportowanie oznacza, Å¼e HMRC szybciej wykrywa problemy. To ich sprawa, nie Twoja â€” ale wyjaÅ›nia, dlaczego to nie jest dobrowolne.</p>\n  <h2>Kogo to dotyczy?</h2>\n  <p>Making Tax Digital dla Income Tax dotyczy <a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">samozatrudnionych i landlordÃ³w</a>, ktÃ³rych qualifying income przekracza odpowiedni prÃ³g.</p>\n  <p>Progi wchodzÄ… etapami:</p>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Od</th>\n        <th>PrÃ³g</th>\n        <th>Kogo dotyczy</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>KwiecieÅ„ 2026</td>\n          <td>Â£50 000</td>\n          <td>Samozatrudnieni i landlordzi juÅ¼ w systemie</td>\n        </tr>\n        <tr>\n          <td>KwiecieÅ„ 2027</td>\n          <td>Â£30 000</td>\n          <td>Kolejni samozatrudnieni i landlordzi</td>\n        </tr>\n        <tr>\n          <td>KwiecieÅ„ 2028</td>\n          <td>Â£20 000</td>\n          <td>NastÄ™pni samozatrudnieni i landlordzi</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p><strong>Qualifying income</strong> to nie TwÃ³j zysk. To przychÃ³d brutto z dziaÅ‚alnoÅ›ci i z wynajmu, przed kosztami i przed potrÄ…ceniami CIS, zsumowany razem. PeÅ‚ne wyjaÅ›nienie z przykÅ‚adami jest w <a href=\"/pl/mtd/qualifying-income\">artykule o qualifying income</a>.</p>\n  <p>MTD CiÄ™ nie dotyczy, jeÅ›li Twoje qualifying income wynosi <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Â£20 000 lub mniej</a> â€” jesteÅ› automatycznie zwolniony. MiÄ™dzy Â£20 000 a odpowiednim progiem nie jesteÅ› jeszcze w systemie, ale przepisy CiÄ™ dosiÄ™gnÄ…, gdy progi bÄ™dÄ… spadaÄ‡.</p>\n  <p>SpÃ³Å‚ki z o.o. (limited companies) te przepisy nie dotyczÄ…. MTD dla Income Tax dotyczy osÃ³b fizycznych â€” samozatrudnionych i landlordÃ³w â€” nie corporation tax.</p>\n  <h2>Co siÄ™ zmienia</h2>\n  <p><strong>Jak jest teraz:</strong> prowadzisz ewidencjÄ™ jak chcesz, sumujesz raz w roku, skÅ‚adasz Self Assessment do 31 stycznia.</p>\n  <p><strong>Co wymaga MTD:</strong></p>\n  <ol>\n    <li><strong>Cyfrowa ewidencja.</strong> Przychody i wydatki muszÄ… byÄ‡ zapisywane cyfrowo â€” w oprogramowaniu kompatybilnym z MTD â€” na bieÅ¼Ä…co. Nie w zeszycie, nie w arkuszu niepodÅ‚Ä…czonym do niczego, nie w reklamÃ³wce.</li>\n  \n    <li><strong>Cztery kwartalne raporty.</strong> Co trzy miesiÄ…ce wysyÅ‚asz HMRC podsumowanie przychodÃ³w i wydatkÃ³w za ten okres. To nie sÄ… peÅ‚ne zeznania podatkowe. To bieÅ¼Ä…ce sumy. <a href=\"/pl/mtd/quarterly-updates\">WiÄ™cej o kwartalnych raportach tutaj</a>.</li>\n  \n    <li><strong>Final declaration.</strong> Na koniec roku podatkowego potwierdzasz swoje cyfry, dodajesz inne przychody (z etatu, oszczÄ™dnoÅ›ci, dywidendy) i skÅ‚adasz roczne zeznanie. To zastÄ™puje Self Assessment. Nadal zdarza siÄ™ raz w roku. Tu TwÃ³j ksiÄ™gowy naprawdÄ™ siÄ™ przydaje â€” ulgi, odliczenia i koÅ„cowe obliczenie podatku dziejÄ… siÄ™ wÅ‚aÅ›nie tu.</li>\n  </ol>\n  <h2>Co siÄ™ nie zmienia</h2>\n  <p>PotrÄ…cenia CIS dziaÅ‚ajÄ… dokÅ‚adnie jak przed â€” contractorzy potrÄ…cajÄ… podatek i raportujÄ… do HMRC co miesiÄ…c. MTD tego nie zastÄ™puje ani nie zmienia.</p>\n  <p>Do final declaration nadal potrzebujesz ksiÄ™gowego, jeÅ›li Twoja sytuacja jest choÄ‡ trochÄ™ zÅ‚oÅ¼ona.</p>\n  <p>HMRC nie chce Twoich papierowych paragonÃ³w ani zdjÄ™Ä‡. Cyfrowy musi byÄ‡ zapis kaÅ¼dej transakcji â€” kwota, data i kategoria. <a href=\"/pl/mtd/do-i-have-to-photograph-receipts\">Co liczy siÄ™ jako cyfrowy rekord wyjaÅ›niamy tutaj</a>.</p>\n  <h2>Czego potrzebujesz, Å¼eby zaczÄ…Ä‡</h2>\n  <p><strong>Konto do logowania.</strong> Government Gateway lub GOV.UK One Login. JeÅ›li juÅ¼ skÅ‚adasz Self Assessment online, masz je.</p>\n  <p><strong>UTR.</strong> Unique Taxpayer Reference â€” dziesiÄ™ciocyfrowy numer, ktÃ³ry identyfikuje CiÄ™ w HMRC. JeÅ›li skÅ‚adaÅ‚eÅ› Self Assessment wczeÅ›niej, masz go. JeÅ›li nie â€” najpierw musisz <a href=\"https://www.gov.uk/register-for-self-assessment\" target=\"_blank\" rel=\"noopener\">zarejestrowaÄ‡ siÄ™ do Self Assessment</a> i poczekaÄ‡ na UTR pocztÄ….</p>\n  <p><strong>Oprogramowanie kompatybilne z MTD.</strong> HMRC prowadzi <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">listÄ™ oprogramowania kompatybilnego z MTD</a>. Potrzebujesz softu, ktÃ³ry moÅ¼e wysyÅ‚aÄ‡ kwartalne raporty i final declaration bezpoÅ›rednio do HMRC.</p>\n  <p><strong>Rejestracja do MTD.</strong> Posiadanie konta Government Gateway nie wystarczy. <a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Rejestrujesz siÄ™ do MTD osobno</a>. Po rejestracji HMRC wyznacza Ci zestaw obowiÄ…zkÃ³w â€” co i kiedy raportowaÄ‡. <a href=\"/pl/mtd/government-gateway\">PeÅ‚ne wyjaÅ›nienie Government Gateway vs rejestracja MTD jest tutaj</a>.</p>\n  <h2>Pierwszy rok: brak punktÃ³w karnych za spÃ³Åºnione raporty kwartalne</h2>\n  <p>Rok 2026/27 to rok przejÅ›ciowy. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC potwierdziÅ‚o</a>, Å¼e w pierwszym roku nie bÄ™dÄ… przyznawane punkty karne za spÃ³Åºnione kwartalne raporty. PeÅ‚ny system punktowy startuje od 2027/28: cztery punkty to kara Â£200, a kaÅ¼de kolejne spÃ³Åºnienie to kolejne Â£200.</p>\n  <p>SpÃ³Åºniona pÅ‚atnoÅ›Ä‡ podatku i spÃ³Åºniona final declaration podlegajÄ… karom wedÅ‚ug dotychczasowych zasad, nawet w 2026/27.</p>\n  <h2>Prosta wersja</h2>\n  <p>Musisz zapisywaÄ‡ przychody i wydatki cyfrowo przez caÅ‚y rok. Co trzy miesiÄ…ce Twoje oprogramowanie wysyÅ‚a podsumowanie do HMRC. Na koniec roku Ty albo TwÃ³j ksiÄ™gowy potwierdza cyfry i skÅ‚ada roczne zeznanie.</p>\n  <p>JeÅ›li juÅ¼ uÅ¼ywasz programu ksiÄ™gowego i sam skÅ‚adasz Self Assessment â€” zmiana jest do ogarniÄ™cia. JeÅ›li teraz przynosisz reklamÃ³wkÄ™ paragonÃ³w do ksiÄ™gowego w styczniu â€” zmiana jest wiÄ™ksza. Ale podstawowy nawyk, ktÃ³rego wymaga (zapisywanie rzeczy na bieÅ¼Ä…co, a nie dwanaÅ›cie miesiÄ™cy pÃ³Åºniej), sprawia, Å¼e praca Twojego ksiÄ™gowego jest Å‚atwiejsza, a rachunek podatkowy dokÅ‚adniejszy.</p>\n  <p>W sprawach dotyczÄ…cych Twojej konkretnej sytuacji â€” zwÅ‚aszcza jeÅ›li masz wiele ÅºrÃ³deÅ‚ przychodu, dochody z zagranicy albo zÅ‚oÅ¼onÄ… strukturÄ™ â€” zapytaj ksiÄ™gowego. Ta strona opisuje ogÃ³lne zasady. Nie jest poradÄ… podatkowÄ….</p>\n  <h2>Gdzie w tym wszystkim TidGo</h2>\n  <p><a href=\"/pl\">TidGo</a> zajmuje siÄ™ warstwÄ… zbierania rekordÃ³w: paragony i dowody przychodu zbierane na bieÅ¼Ä…co, przez WhatsApp, mail albo w aplikacji, w oÅ›miu jÄ™zykach. TidGo nie wysyÅ‚a kwartalnych raportÃ³w ani final declaration do HMRC â€” to robi kompatybilne oprogramowanie albo TwÃ³j ksiÄ™gowy. Sprawia tylko, Å¼e rekordy istniejÄ… i sÄ… uporzÄ…dkowane, gdy sÄ… potrzebne.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Sign up for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Sprawdzone: sierpieÅ„ 2026. Zweryfikuj na GOV.UK, jeÅ›li czytasz to pÃ³Åºniej.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "ro": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Ce este Making Tax Digital? È˜i È›i se aplicÄƒ?</h1>\n  <h2>Versiunea Ã®ntr-o singurÄƒ propoziÈ›ie</h2>\n  <p>Making Tax Digital pentru Income Tax este cerinÈ›a HMRC ca persoanele self-employed È™i landlords sÄƒ È›inÄƒ evidenÈ›a veniturilor È™i cheltuielilor digital È™i sÄƒ raporteze la HMRC de patru ori pe an â€” Ã®n loc de o datÄƒ.</p>\n  <p>AtÃ¢t. Restul sunt detalii.</p>\n  <h2>De ce face asta HMRC</h2>\n  <p>Sistemul actual â€” È›ii ce evidenÈ›e vrei pe tot parcursul anului, le aduni Ã®n ianuarie â€” produce erori, declaraÈ›ii Ã®ntÃ¢rziate È™i impozite neplÄƒtite. HMRC considerÄƒ cÄƒ oamenii care Ã®nregistreazÄƒ veniturile È™i cheltuielile pe mÄƒsurÄƒ ce apar, Ã®n loc sÄƒ reconstituie anul dintr-o pungÄƒ de bonuri, vor depune declaraÈ›ii mai exacte.</p>\n  <p>ExistÄƒ È™i un motiv financiar. Raportarea mai frecventÄƒ Ã®nseamnÄƒ cÄƒ HMRC identificÄƒ problemele mai devreme. Aceasta este treaba lor, nu a ta â€” dar explicÄƒ de ce nu este opÈ›ional.</p>\n  <h2>Cui i se aplicÄƒ?</h2>\n  <p>Making Tax Digital pentru Income Tax se aplicÄƒ <a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">persoanelor self-employed È™i landlords</a> al cÄƒror qualifying income depÄƒÈ™eÈ™te pragul relevant.</p>\n  <p>Pragurile sunt introduse Ã®n etape:</p>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Din</th>\n        <th>Prag</th>\n        <th>Cine este afectat</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>Aprilie 2026</td>\n          <td>Â£50.000</td>\n          <td>Persoane self-employed È™i landlords deja Ã®n sistem</td>\n        </tr>\n        <tr>\n          <td>Aprilie 2027</td>\n          <td>Â£30.000</td>\n          <td>Persoane self-employed È™i landlords suplimentare</td>\n        </tr>\n        <tr>\n          <td>Aprilie 2028</td>\n          <td>Â£20.000</td>\n          <td>Alte persoane self-employed È™i landlords</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p><strong>Qualifying income</strong> nu este profitul tÄƒu. Este venitul brut din activitate independentÄƒ È™i din proprietÄƒÈ›i, Ã®nainte de cheltuieli È™i Ã®nainte de deducerile CIS, adunat Ã®mpreunÄƒ. O explicaÈ›ie completÄƒ cu exemple este Ã®n <a href=\"/ro/mtd/qualifying-income\">articolul despre qualifying income</a>.</p>\n  <p>MTD nu È›i se aplicÄƒ dacÄƒ qualifying income este de <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Â£20.000 sau mai puÈ›in</a> â€” eÈ™ti scutit automat.</p>\n  <p>SocietÄƒÈ›ile cu rÄƒspundere limitatÄƒ nu sunt afectate de aceste reguli. MTD pentru Income Tax se aplicÄƒ persoanelor fizice â€” self-employed È™i landlords â€” nu corporation tax.</p>\n  <h2>Ce se schimbÄƒ</h2>\n  <p><strong>Cum este acum:</strong> È›ii evidenÈ›e cum vrei, le aduni o datÄƒ pe an, depui o declaraÈ›ie Self Assessment pÃ¢nÄƒ pe 31 ianuarie.</p>\n  <p><strong>Ce cere MTD:</strong></p>\n  <ol>\n    <li><strong>EvidenÈ›e digitale.</strong> Veniturile È™i cheltuielile trebuie Ã®nregistrate digital â€” Ã®n software compatibil cu MTD â€” pe mÄƒsurÄƒ ce apar.</li>\n  \n    <li><strong>Patru actualizÄƒri trimestriale.</strong> La fiecare trei luni, trimiÈ›i HMRC un rezumat al veniturilor È™i cheltuielilor pentru acea perioadÄƒ. Nu sunt declaraÈ›ii fiscale complete. Sunt totaluri curente. <a href=\"/ro/mtd/quarterly-updates\">Mai multe detalii despre actualizÄƒrile trimestriale aici</a>.</li>\n  \n    <li><strong>Final declaration.</strong> La sfÃ¢rÈ™itul anului fiscal, confirmi cifrele, adaugi orice alt venit È™i depui declaraÈ›ia anualÄƒ. Aceasta Ã®nlocuieÈ™te Self Assessment. Tot se Ã®ntÃ¢mplÄƒ o datÄƒ pe an. Aici contabilul tÄƒu cÃ¢È™tigÄƒ banii â€” scutiri, deduceri È™i calculul fiscal final se fac aici.</li>\n  </ol>\n  <h2>Ce nu se schimbÄƒ</h2>\n  <p>Deducerile CIS continuÄƒ exact ca Ã®nainte. MTD nu le Ã®nlocuieÈ™te È™i nu le modificÄƒ.</p>\n  <p>Ai Ã®n continuare nevoie de contabil pentru final declaration dacÄƒ situaÈ›ia ta nu este simplÄƒ.</p>\n  <p>HMRC nu vrea bonurile tale pe hÃ¢rtie sau fotografiile lor. Ce trebuie sÄƒ fie digital este Ã®nregistrarea fiecÄƒrei tranzacÈ›ii â€” suma, data È™i categoria. <a href=\"/ro/mtd/do-i-have-to-photograph-receipts\">Ce conteazÄƒ ca evidenÈ›Äƒ digitalÄƒ explicÄƒm aici</a>.</p>\n  <h2>De ce ai nevoie pentru a Ã®ncepe</h2>\n  <p><strong>Un cont de autentificare.</strong> Government Gateway sau GOV.UK One Login.</p>\n  <p><strong>UTR.</strong> Unique Taxpayer Reference â€” numÄƒrul din zece cifre care te identificÄƒ la HMRC.</p>\n  <p><strong>Software compatibil cu MTD.</strong> HMRC menÈ›ine <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">o listÄƒ de software compatibil cu MTD</a>.</p>\n  <p><strong>ÃŽnregistrarea la MTD.</strong> A avea un cont Government Gateway nu este suficient. <a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Te Ã®nregistrezi la MTD separat</a>. <a href=\"/ro/mtd/government-gateway\">ExplicaÈ›ia completÄƒ a diferenÈ›ei dintre Government Gateway È™i Ã®nregistrarea MTD este aici</a>.</p>\n  <h2>Primul an: fÄƒrÄƒ puncte de penalizare pentru raportÄƒri trimestriale Ã®ntÃ¢rziate</h2>\n  <p>2026/27 este un an de tranziÈ›ie. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC a confirmat</a> cÄƒ nu se vor acorda puncte de penalizare pentru actualizÄƒrile trimestriale Ã®ntÃ¢rziate Ã®n acest prim an. Sistemul complet de puncte Ã®ncepe din 2027/28.</p>\n  <h2>Versiunea simplÄƒ</h2>\n  <p>Trebuie sÄƒ Ã®nregistrezi veniturile È™i cheltuielile digital pe tot parcursul anului. La fiecare trei luni, software-ul tÄƒu trimite un rezumat la HMRC. La sfÃ¢rÈ™itul anului, tu sau contabilul tÄƒu confirmaÈ›i cifrele È™i depuneÈ›i declaraÈ›ia anualÄƒ.</p>\n  <p>Pentru situaÈ›ia ta specificÄƒ â€” mai ales dacÄƒ ai mai multe surse de venit sau o structurÄƒ complexÄƒ â€” consultÄƒ contabilul. AceastÄƒ paginÄƒ acoperÄƒ regulile generale. Nu este consultanÈ›Äƒ fiscalÄƒ.</p>\n  <h2>Unde se Ã®ncadreazÄƒ TidGo</h2>\n  <p><a href=\"/ro\">TidGo</a> se ocupÄƒ de stratul de colectare a evidenÈ›elor: bonuri È™i dovezi de venit colectate pe mÄƒsurÄƒ ce apar, prin WhatsApp, email sau Ã®n aplicaÈ›ie, Ã®n opt limbi. TidGo nu trimite actualizÄƒri trimestriale sau final declaration la HMRC â€” asta o face software-ul compatibil sau contabilul tÄƒu.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Sign up for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Verificat: august 2026. VerificÄƒ pe GOV.UK dacÄƒ citeÈ™ti mai tÃ¢rziu.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "lt": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Kas yra Making Tax Digital? Ar tai taikoma man?</h1>\n  <h2>Versija vienu sakiniu</h2>\n  <p>Making Tax Digital pajamÅ³ mokesÄiui yra HMRC reikalavimas, kad savarankiÅ¡kai dirbantys asmenys ir nuomotojai tvarkytÅ³ pajamÅ³ ir iÅ¡laidÅ³ apskaitas skaitmeniÅ¡kai ir teiktÅ³ ataskaitas HMRC keturis kartus per metus â€” vietoj vieno.</p>\n  <p>Tiek. Visa kita â€” detalÄ—s.</p>\n  <h2>KodÄ—l HMRC tai daro</h2>\n  <p>DabartinÄ— sistema â€” tvarkyk kokias nori apskaitas iÅ¡tisus metus, o paskui sausÄ¯ susumuok viskÄ… â€” sukuria klaidÅ³, pavÄ—luotÅ³ deklaracijÅ³ ir nesumokÄ—tÅ³ mokesÄiÅ³. HMRC mano, kad Å¾monÄ—s, kurie registruoja pajamas ir iÅ¡laidas iÅ¡ karto, o ne rekonstruoja metus iÅ¡ kvitÅ³ maiÅ¡o, teiks tikslesnes deklaracijas.</p>\n  <p>Yra ir finansinis motyvas. DaÅ¾nesnÄ—s ataskaitos reiÅ¡kia, kad HMRC anksÄiau pastebis problemas. Tai jÅ³ reikalas, ne tavo â€” bet tai paaiÅ¡kina, kodÄ—l tai nÄ—ra savanoriÅ¡ka.</p>\n  <h2>Kam tai taikoma?</h2>\n  <p>Making Tax Digital pajamÅ³ mokesÄiui taikomas <a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">savarankiÅ¡kai dirbantiems asmenims ir nuomotojams</a>, kuriÅ³ qualifying income virÅ¡ija atitinkamÄ… ribÄ….</p>\n  <p>Ribos Ä¯vedamos etapais:</p>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Nuo</th>\n        <th>Riba</th>\n        <th>Kam taikoma</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>2026 m. balandis</td>\n          <td>Â£50 000</td>\n          <td>SavarankiÅ¡kai dirbantys ir nuomotojai jau sistemoje</td>\n        </tr>\n        <tr>\n          <td>2027 m. balandis</td>\n          <td>Â£30 000</td>\n          <td>Papildomi savarankiÅ¡kai dirbantys ir nuomotojai</td>\n        </tr>\n        <tr>\n          <td>2028 m. balandis</td>\n          <td>Â£20 000</td>\n          <td>Kiti savarankiÅ¡kai dirbantys ir nuomotojai</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p><strong>Qualifying income</strong> yra ne tavo pelnas. Tai bendrosios pajamos iÅ¡ savarankiÅ¡kos veiklos ir nuomos, prieÅ¡ iÅ¡laidas ir prieÅ¡ CIS atskaitymus, sudÄ—tos kartu. IÅ¡samus paaiÅ¡kinimas su pavyzdÅ¾iais yra <a href=\"/lt/mtd/qualifying-income\">qualifying income straipsnyje</a>.</p>\n  <p>MTD tau netaikomas, jei qualifying income yra <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Â£20 000 ar maÅ¾iau</a> â€” esi automatiÅ¡kai atleistas.</p>\n  <p>Ribotos atsakomybÄ—s bendroviÅ³ Å¡ios taisyklÄ—s nelieÄia. MTD pajamÅ³ mokesÄiui taikomas fiziniams asmenims â€” savarankiÅ¡kai dirbantiems ir nuomotojams â€” ne corporation tax.</p>\n  <h2>Kas keiÄiasi</h2>\n  <p><strong>Kaip yra dabar:</strong> tvarkyk kokias nori apskaitas, susumuok kartÄ… per metus, pateik Self Assessment deklaracijÄ… iki sausio 31 d.</p>\n  <p><strong>Ko reikalauja MTD:</strong></p>\n  <ol>\n    <li><strong>SkaitmeninÄ—s apskaitos.</strong> Pajamos ir iÅ¡laidos turi bÅ«ti registruojamos skaitmeniÅ¡kai â€” su MTD suderintoje programinÄ—je Ä¯rangoje â€” iÅ¡ karto.</li>\n  \n    <li><strong>Keturios ketvirtinÄ—s ataskaitos.</strong> Kas tris mÄ—nesius siunti HMRC to laikotarpio pajamÅ³ ir iÅ¡laidÅ³ santraukÄ…. Tai ne pilnos mokesÄiÅ³ deklaracijos. Tai einamieji sumai. <a href=\"/lt/mtd/quarterly-updates\">Daugiau apie ketvirtines ataskaitas Äia</a>.</li>\n  \n    <li><strong>Final declaration.</strong> MokestiniÅ³ metÅ³ pabaigoje patvirtini skaiÄius, pridedi kitas pajamas ir pateiki metinÄ™ deklaracijÄ…. Tai pakeiÄia Self Assessment. Vis tiek vyksta kartÄ… per metus. ÄŒia tavo buhalteris uÅ¾dirba atlyginimÄ… â€” lengvatos, atskaitymai ir galutinis mokesÄiÅ³ skaiÄiavimas vyksta bÅ«tent Äia.</li>\n  </ol>\n  <h2>Kas nesikeiÄia</h2>\n  <p>CIS atskaitymai tÄ™siasi lygiai taip pat kaip anksÄiau. MTD jÅ³ nepakeiÄia.</p>\n  <p>Final declaration vis tiek reikia buhalterio, jei tavo reikalai nÄ—ra paprasti.</p>\n  <p>HMRC nenori tavo popieriniÅ³ kvitÅ³ ar jÅ³ nuotraukÅ³. Skaitmeninis turi bÅ«ti kiekvienos sandorio Ä¯raÅ¡as â€” suma, data ir kategorija. <a href=\"/lt/mtd/do-i-have-to-photograph-receipts\">Kas laikoma skaitmeniniu Ä¯raÅ¡u paaiÅ¡kiname Äia</a>.</p>\n  <h2>Ko reikia pradÄ—ti</h2>\n  <p><strong>Paskyra prisijungimui.</strong> Government Gateway arba GOV.UK One Login.</p>\n  <p><strong>UTR.</strong> Unique Taxpayer Reference â€” deÅ¡imties skaitmenÅ³ numeris, kuris identifikuoja tave HMRC sistemoje.</p>\n  <p><strong>Su MTD suderinama programinÄ— Ä¯ranga.</strong> HMRC tvarko <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">suderinamÅ³ programÅ³ sÄ…raÅ¡Ä…</a>.</p>\n  <p><strong>Registracija MTD.</strong> Government Gateway paskyros nepakanka. <a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Registruojiesi MTD atskirai</a>. <a href=\"/lt/mtd/government-gateway\">IÅ¡samus paaiÅ¡kinimas apie Government Gateway ir MTD registracijÄ… Äia</a>.</p>\n  <h2>Pirmieji metai: jokiÅ³ baudos taÅ¡kÅ³ uÅ¾ pavÄ—luotas ketvirtines ataskaitas</h2>\n  <p>2026/27 yra pereinamasis laikotarpis. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC patvirtino</a>, kad pirmaisiais metais baudos taÅ¡kai uÅ¾ pavÄ—luotas ketvirtines ataskaitas neskaiÄiuojami. Pilna taÅ¡kÅ³ sistema prasideda nuo 2027/28.</p>\n  <h2>Paprasta versija</h2>\n  <p>Privalai registruoti pajamas ir iÅ¡laidas skaitmeniÅ¡kai iÅ¡tisus metus. Kas tris mÄ—nesius programinÄ— Ä¯ranga siunÄia santraukÄ… Ä¯ HMRC. MetÅ³ pabaigoje tu arba tavo buhalteris patvirtina skaiÄius ir pateikia metinÄ™ deklaracijÄ….</p>\n  <p>DÄ—l savo konkreÄios situacijos â€” ypaÄ jei turi kelias pajamÅ³ Å¡altinius ar sudÄ—tingÄ… struktÅ«rÄ… â€” pasitark su buhalteriu. Å i puslapis apima bendras taisykles. Tai nÄ—ra mokesÄiÅ³ konsultacija.</p>\n  <h2>Kur Äia TidGo</h2>\n  <p><a href=\"/lt\">TidGo</a> rÅ«pinasi Ä¯raÅ¡Å³ rinkimo sluoksniu: kvitai ir pajamÅ³ Ä¯rodymai renkami iÅ¡ karto, per WhatsApp, el. paÅ¡tÄ… arba programÄ—lÄ—je, aÅ¡tuoniomis kalbomis. TidGo nesiunÄia ketvirtiniÅ³ ataskaitÅ³ ar final declaration Ä¯ HMRC â€” tai daro suderinama programinÄ— Ä¯ranga arba tavo buhalteris.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Sign up for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Patikrinta: 2026 m. rugpjÅ«tis. Jei skaitai vÄ—liau, pasitikrink GOV.UK.*</p>\n  </div>\n  ${pageCta()}\n</article>"
};

function mtdWhatArticle() {
  const relatedLinks = `
  <section class="article-related">
    <h2>MTD Knowledge Base</h2>
    <ul>
      <li><a href="${mtdKnowledgeHref("qualifying-income")}">${mk("mtdQualifyingIncome")}</a></li>
      <li><a href="${mtdKnowledgeHref("government-gateway")}">${mk("mtdGateway")}</a></li>
      <li><a href="${mtdKnowledgeHref("do-i-have-to-photograph-receipts")}">${mk("mtdReceiptsMyth")}</a></li>
      <li><a href="/mtd/digital-records">${mk("mtdDigitalRecords")}</a></li>
      <li><a href="/mtd/quarterly-updates">${mk("mtdQuarterlyUpdates")}</a></li>
      <li><a href="${mtdKnowledgeHref("cis")}">${mk("mtdCis")}</a></li>
    </ul>
  </section>
`;
  return (MTD_WHAT_ARTICLES[state.marketingLanguage] || MTD_WHAT_ARTICLES.en)
    .replaceAll('${mk("navMtd")}', mk("navMtd"))
    .replace('  <div class="article-sources">', `${relatedLinks}  <div class="article-sources">`)
    .replaceAll('${pageCta()}', pageCta());
}

function mtdKnowledgeHref(slug) {
  const localized = ["what-you-do-accountant-does", "automatically-signed-up", "qualifying-income", "government-gateway", "do-i-have-to-photograph-receipts", "digital-records", "cis", "cis-myths", "quarterly-updates"];
  if (state.marketingLanguage !== "en" && localized.includes(slug)) {
    return `/${state.marketingLanguage}/mtd/${slug}`;
  }
  return `/mtd/${slug}`;
}

function mtdQualifyingIncomeArticle() {
  if (state.marketingLanguage === "pl") return mtdQualifyingIncomeArticlePl();
  if (state.marketingLanguage === "ro") return mtdQualifyingIncomeArticleRO();
  if (state.marketingLanguage === "lt") return mtdQualifyingIncomeArticleLT();
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>What is qualifying income for Making Tax Digital? <span class="muted">(It isn't your profit)</span></h1>
      <h2>What is qualifying income?</h2>
      <p>Qualifying income is the figure HMRC uses to decide whether Making Tax Digital for Income Tax applies to you. It is your <strong>gross income from self-employment and property, before you take off any expenses.</strong></p>
      <p>That last part is where most people get caught out. It is not your profit. It is not what lands in your bank account after materials, fuel, tools and everything else. It is the total that came in.</p>
      <p>If you turned over Â£62,000 last year and Â£20,000 of that went on expenses, your qualifying income is Â£62,000, not Â£42,000.</p>

      <h2>Self-employment and property income are added together</h2>
      <p>This is the second trap, and it catches people who look at each source separately and conclude that neither one reaches the threshold.</p>
      <p>HMRC adds them up. In <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">their own worked example</a>, Â£25,000 of rental income plus Â£27,000 of self-employment income gives total qualifying income of Â£52,000.</p>
      <p>Neither figure on its own is anywhere near Â£50,000. Together they are over it. If you drive a van during the week and let out a flat, you need to add both before deciding whether this applies to you.</p>

      <h2>What does not count towards qualifying income?</h2>
      <p>Plenty of income sits outside this calculation entirely. Employment income through PAYE, pensions, savings interest, dividends and capital gains do not form part of qualifying income.</p>
      <p>So someone earning Â£70,000 in a job with Â£15,000 of freelance work on the side has qualifying income of Â£15,000. The salary is irrelevant to this particular test, though it still gets reported in the usual way.</p>
      <p>A few specific exclusions are worth knowing about, and <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC lists them</a>: income from UK REITs or Property Authorised Investment Funds doesn't count, qualifying care relief doesn't count towards your qualifying income, and averaging relief doesn't affect it, relevant if you're a farmer or a creative artist.</p>
      <p>One thing that does count and surprises people: a self-employment or property source that has <strong>ceased</strong> since your last tax return is still included in your qualifying income, as long as you have another continuing source.</p>

      <h2>What are the thresholds?</h2>
      <p>If your qualifying income was over Â£50,000 for the 2024 to 2025 tax year, <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">you should have started using Making Tax Digital for Income Tax from 6 April 2026</a>, and you can still sign up. Lower thresholds follow in the years after, bringing in progressively more people.</p>
      <p>At the other end, <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">you are automatically exempt</a> and do not need to use Making Tax Digital for Income Tax if your qualifying income is Â£20,000 or less.</p>

      <h2>How does HMRC work out your figure?</h2>
      <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC assesses your qualifying income</a> for a tax year by looking at the Self Assessment return you submitted in the previous tax year. If your income is above the relevant threshold, they will write to you confirming that you need to use Making Tax Digital for Income Tax by the start of the next tax year.</p>
      <p>Here is the part to pay attention to. Even if you do not receive a letter, you must still check your qualifying income yourself to find out whether you need to use the service and sign up.</p>
      <p><strong>No letter is not the same as no obligation.</strong> Letters get lost, addresses go out of date, and the responsibility stays with you either way.</p>

      <h2>How do I check my own position?</h2>
      <p>HMRC has <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">a tool that walks you through it</a>, based on the answers you give.</p>
      <p>If your situation is complicated, for example foreign income, several businesses, or a source that stopped partway through the year, this is a question for your accountant rather than a website. Including this one. We don't give tax advice.</p>

      <h2>The one thing worth doing today</h2>
      <p>Whether or not the threshold catches you this year, it will catch a lot of people in the years ahead as the figures come down.</p>
      <p>The habit that helps either way is boring and simple: keep your income and expense records digitally, as they happen, instead of in a carrier bag. If it turns out you're in scope, you're ready. If it turns out you're not, you've still got a tidier year behind you and a shorter conversation with your accountant.</p>
      <p>That's the part <a href="/">TidGo</a> is built for: receipts and income proof collected as you go, in eight languages, ready to hand over. It doesn't submit anything to HMRC, and it isn't tax advice. It just means the records exist when someone asks for them.</p>

      <section class="article-sources">
        <strong>Sources</strong>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income for Making Tax Digital for Income Tax â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if you can get an exemption from Making Tax Digital for Income Tax â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax â€” GOV.UK</a>
        <span>Last checked: August 2026. HMRC guidance changes, so verify figures at the links above.</span>
      </section>
      ${pageCta()}
    </article>
  `;
}

function mtdQualifyingIncomeArticlePl() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Qualifying income: co to wÅ‚aÅ›ciwie jest? <span class="muted">(To nie jest TwÃ³j zysk)</span></h1>

      <h2>Czym jest qualifying income?</h2>
      <p>Qualifying income to kwota, na podstawie ktÃ³rej HMRC decyduje, czy obejmie CiÄ™ Making Tax Digital. To TwÃ³j <strong>przychÃ³d brutto z dziaÅ‚alnoÅ›ci i z wynajmu, przed odliczeniem jakichkolwiek kosztÃ³w.</strong></p>
      <p>I wÅ‚aÅ›nie na tym wiÄ™kszoÅ›Ä‡ ludzi siÄ™ przejeÅ¼dÅ¼a. To nie jest zysk. To nie jest to, co zostaje na koncie po materiaÅ‚ach, paliwie, narzÄ™dziach i caÅ‚ej reszcie. To wszystko, co wpÅ‚ynÄ™Å‚o.</p>
      <p>JeÅ›li w zeszÅ‚ym roku miaÅ‚eÅ› Â£62,000 obrotu, a Â£20,000 poszÅ‚o na koszty, Twoje qualifying income wynosi Â£62,000, nie Â£42,000.</p>

      <h2>DziaÅ‚alnoÅ›Ä‡ i wynajem sumujÄ… siÄ™ razem</h2>
      <p>To druga puÅ‚apka i Å‚apie ludzi, ktÃ³rzy patrzÄ… na kaÅ¼de ÅºrÃ³dÅ‚o osobno i stwierdzajÄ…, Å¼e Å¼adne nie dobija do progu.</p>
      <p>HMRC je dodaje. W <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">przykÅ‚adzie z oficjalnej strony</a> Â£25,000 z wynajmu plus Â£27,000 z dziaÅ‚alnoÅ›ci daje razem qualifying income Â£52,000.</p>
      <p>Å»adna z tych kwot osobno nie zbliÅ¼a siÄ™ do Â£50,000. Razem prÃ³g przekraczajÄ…. JeÅ›li w tygodniu jeÅºdzisz vanem, a przy okazji wynajmujesz mieszkanie, musisz dodaÄ‡ jedno do drugiego, zanim uznasz, Å¼e CiÄ™ to nie dotyczy.</p>

      <h2>Co siÄ™ NIE liczy do qualifying income?</h2>
      <p>Sporo dochodÃ³w jest poza tym wyliczeniem. Wynagrodzenie z etatu (PAYE), emerytura, odsetki z oszczÄ™dnoÅ›ci, dywidendy i zyski kapitaÅ‚owe nie wchodzÄ… do qualifying income.</p>
      <p>Czyli ktoÅ›, kto zarabia Â£70,000 na etacie i dorabia Â£15,000 na wÅ‚asnej dziaÅ‚alnoÅ›ci, ma qualifying income Â£15,000. Pensja nie ma tu Å¼adnego znaczenia, choÄ‡ oczywiÅ›cie nadal rozlicza siÄ™ jÄ… normalnie.</p>
      <p>Warto znaÄ‡ teÅ¼ kilka konkretnych wyÅ‚Ä…czeÅ„, <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">ktÃ³re HMRC wymienia</a>: dochÃ³d z brytyjskich REIT-Ã³w i funduszy PAIF siÄ™ nie liczy, qualifying care relief siÄ™ nie liczy, a averaging relief nie ma wpÅ‚ywu na wynik. To akurat dotyczy rolnikÃ³w i twÃ³rcÃ³w.</p>
      <p>Jedna rzecz, ktÃ³ra siÄ™ liczy i ludzi zaskakuje: ÅºrÃ³dÅ‚o dochodu, ktÃ³re <strong>przestaÅ‚o istnieÄ‡</strong> od czasu Twojego ostatniego zeznania, i tak wchodzi do qualifying income, o ile masz jeszcze jakieÅ› inne, trwajÄ…ce ÅºrÃ³dÅ‚o.</p>

      <h2>Jakie sÄ… progi?</h2>
      <p>JeÅ›li Twoje qualifying income za rok podatkowy 2024/25 przekroczyÅ‚o Â£50,000, <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">powinieneÅ› zaczÄ…Ä‡ korzystaÄ‡ z MTD od 6 kwietnia 2026</a>, i nadal moÅ¼esz siÄ™ zarejestrowaÄ‡. W kolejnych latach progi schodzÄ… niÅ¼ej i obejmÄ… znacznie wiÄ™cej osÃ³b.</p>
      <p>Z drugiej strony: <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">jesteÅ› automatycznie zwolniony</a> i nie musisz korzystaÄ‡ z MTD, jeÅ›li Twoje qualifying income wynosi Â£20,000 lub mniej.</p>

      <h2>SkÄ…d HMRC bierze tÄ™ kwotÄ™?</h2>
      <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC wylicza Twoje qualifying income</a> na podstawie zeznania Self Assessment zÅ‚oÅ¼onego w poprzednim roku podatkowym. JeÅ›li kwota przekracza prÃ³g, urzÄ…d wysyÅ‚a list z informacjÄ…, Å¼e od poczÄ…tku kolejnego roku podatkowego musisz korzystaÄ‡ z MTD.</p>
      <p>I teraz najwaÅ¼niejsze. Nawet jeÅ›li <strong>nie dostaniesz listu</strong>, i tak musisz sam sprawdziÄ‡ swoje qualifying income i zarejestrowaÄ‡ siÄ™, jeÅ›li prÃ³g przekraczasz.</p>
      <p><strong>Brak listu to nie brak obowiÄ…zku.</strong> Listy ginÄ…, adresy siÄ™ dezaktualizujÄ…, a odpowiedzialnoÅ›Ä‡ i tak zostaje po Twojej stronie.</p>

      <h2>Jak sprawdziÄ‡ swojÄ… sytuacjÄ™?</h2>
      <p>HMRC udostÄ™pnia <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">narzÄ™dzie, ktÃ³re przeprowadza przez pytania</a> i podaje wynik na podstawie Twoich odpowiedzi.</p>
      <p>JeÅ›li Twoja sytuacja jest bardziej zÅ‚oÅ¼ona, na przykÅ‚ad dochÃ³d z zagranicy, kilka dziaÅ‚alnoÅ›ci albo ÅºrÃ³dÅ‚o, ktÃ³re zniknÄ™Å‚o w trakcie roku, to pytanie do ksiÄ™gowego, a nie do strony internetowej. ÅÄ…cznie z tÄ…. My nie udzielamy porad podatkowych.</p>

      <h2>Jedna rzecz, ktÃ³rÄ… warto zrobiÄ‡ juÅ¼ dziÅ›</h2>
      <p>NiezaleÅ¼nie od tego, czy prÃ³g Å‚apie CiÄ™ w tym roku, w kolejnych latach obejmie znacznie wiÄ™cej osÃ³b.</p>
      <p>Nawyk, ktÃ³ry pomaga w obu przypadkach, jest nudny i prosty: zapisuj przychody i wydatki cyfrowo, na bieÅ¼Ä…co, zamiast trzymaÄ‡ je w reklamÃ³wce. JeÅ›li okaÅ¼e siÄ™, Å¼e jesteÅ› w systemie, jesteÅ› gotowy. JeÅ›li nie, i tak masz za sobÄ… spokojniejszy rok i krÃ³tszÄ… rozmowÄ™ z ksiÄ™gowym.</p>
      <p>I dokÅ‚adnie do tego powstaÅ‚o <a href="/pl">TidGo</a>: paragony i dowody przychodu zbierane na bieÅ¼Ä…co, w oÅ›miu jÄ™zykach, gotowe do przekazania. TidGo niczego nie wysyÅ‚a do HMRC i nie jest poradÄ… podatkowÄ…. Sprawia tylko, Å¼e rekordy istniejÄ…, kiedy ktoÅ› o nie zapyta.</p>

      <section class="article-sources">
        <strong>Å¹rÃ³dÅ‚a</strong>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income for Making Tax Digital for Income Tax â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if you can get an exemption from Making Tax Digital for Income Tax â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax â€” GOV.UK</a>
        <span>Sprawdzone: sierpieÅ„ 2026. Wytyczne HMRC siÄ™ zmieniajÄ…, wiÄ™c jeÅ›li czytasz to pÃ³Åºniej, zweryfikuj kwoty pod powyÅ¼szymi linkami.</span>
      </section>
      ${pageCta()}
    </article>
  `;
}

function mtdQualifyingIncomeArticleRO() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Qualifying income â€” ce &#238;nseamnÄƒ de fapt? (Nu este profitul tÄƒu)</h1>
      <h2>Ce este qualifying income?</h2>
      <p>Qualifying income este suma pe baza cÄƒreia HMRC decide dacÄƒ Making Tax Digital È›i se aplicÄƒ. Este <strong>venitul tÄƒu brut din activitate independentÄƒ È™i din chirii â€” &#238;nainte sÄƒ scazi orice cheltuialÄƒ.</strong></p>
      <p>Exact aici se &#238;ncurcÄƒ majoritatea oamenilor. Nu este profitul. Nu este ce rÄƒm&#226;ne &#238;n cont dupÄƒ materiale, combustibil, scule È™i tot restul. Este tot ce a intrat.</p>
      <p>DacÄƒ anul trecut ai avut &#163;62.000 rulaj, iar &#163;20.000 s-au dus pe cheltuieli, qualifying income este &#163;62.000 â€” nu &#163;42.000.</p>
      <h2>Activitatea independentÄƒ È™i chiriile se adunÄƒ</h2>
      <p>Aceasta este a doua capcanÄƒ È™i &#238;i prinde pe cei care se uitÄƒ la fiecare sursÄƒ separat È™i trag concluzia cÄƒ niciuna nu atinge pragul.</p>
      <p>HMRC le adunÄƒ. &#206;n <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">exemplul de pe pagina oficialÄƒ</a>, &#163;25.000 din chirii plus &#163;27.000 din activitate independentÄƒ &#238;nseamnÄƒ un qualifying income total de &#163;52.000.</p>
      <p>Nicio sumÄƒ luatÄƒ separat nu se apropie de &#163;50.000. &#206;mpreunÄƒ trec pragul. DacÄƒ &#238;n timpul sÄƒptÄƒm&#226;nii conduci o furgonetÄƒ È™i &#238;n plus mai &#238;nchiriezi un apartament, trebuie sÄƒ le aduni &#238;nainte sÄƒ decizi cÄƒ nu te priveÈ™te.</p>
      <h2>Ce NU intrÄƒ &#238;n qualifying income?</h2>
      <p>Multe venituri rÄƒm&#226;n &#238;n afara acestui calcul. Venitul din angajare (PAYE), pensia, dob&#226;nzile din economii, dividendele È™i c&#226;È™tigurile de capital nu intrÄƒ &#238;n qualifying income.</p>
      <p>AÈ™adar, cineva care c&#226;È™tigÄƒ &#163;70.000 dintr-un job È™i mai are &#163;15.000 din activitate pe cont propriu are qualifying income de &#163;15.000. Salariul nu conteazÄƒ pentru acest test â€” deÈ™i, evident, se declarÄƒ &#238;n mod normal.</p>
      <p>MeritÄƒ È™tiute È™i c&#226;teva excluderi punctuale, <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">pe care HMRC le enumerÄƒ</a>: venitul din REIT-uri britanice È™i din fonduri PAIF nu se ia &#238;n calcul, qualifying care relief nu se ia &#238;n calcul, iar averaging relief nu &#238;l influenÈ›eazÄƒ (asta &#238;i priveÈ™te pe fermieri È™i pe artiÈ™ti).</p>
      <p>Un lucru care se ia &#238;n calcul È™i &#238;i surprinde pe oameni: o sursÄƒ de venit care <strong>a &#238;ncetat</strong> de la ultima ta declaraÈ›ie intrÄƒ totuÈ™i &#238;n qualifying income â€” at&#226;ta timp c&#226;t mai ai o altÄƒ sursÄƒ activÄƒ.</p>
      <h2>Care sunt pragurile?</h2>
      <p>DacÄƒ qualifying income pentru anul fiscal 2024/25 a depÄƒÈ™it &#163;50.000, <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">ar fi trebuit sÄƒ &#238;ncepi sÄƒ foloseÈ™ti MTD de la 6 aprilie 2026</a> â€” È™i &#238;ncÄƒ te poÈ›i &#238;nscrie. &#206;n anii urmÄƒtori pragurile coboarÄƒ È™i vor cuprinde mult mai mulÈ›i oameni.</p>
      <p>La celÄƒlalt capÄƒt: <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">eÈ™ti scutit automat</a> È™i nu trebuie sÄƒ foloseÈ™ti MTD dacÄƒ qualifying income este &#163;20.000 sau mai puÈ›in.</p>
      <h2>De unde ia HMRC aceastÄƒ sumÄƒ?</h2>
      <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC calculeazÄƒ qualifying income</a> pe baza declaraÈ›iei Self Assessment depuse &#238;n anul fiscal anterior. DacÄƒ suma depÄƒÈ™eÈ™te pragul, &#238;È›i trimite o scrisoare prin care confirmÄƒ cÄƒ trebuie sÄƒ foloseÈ™ti MTD de la &#238;nceputul anului fiscal urmÄƒtor.</p>
      <p>È˜i acum partea importantÄƒ. Chiar dacÄƒ <strong>nu primeÈ™ti nicio scrisoare</strong>, tot trebuie sÄƒ &#238;È›i verifici singur qualifying income È™i sÄƒ te &#238;nscrii dacÄƒ depÄƒÈ™eÈ™ti pragul.</p>
      <p><strong>Lipsa scrisorii nu &#238;nseamnÄƒ lipsa obligaÈ›iei.</strong> Scrisorile se pierd, adresele rÄƒm&#226;n neactualizate, iar rÄƒspunderea rÄƒm&#226;ne oricum la tine.</p>
      <h2>Cum &#238;mi verific situaÈ›ia?</h2>
      <p>HMRC pune la dispoziÈ›ie <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">un instrument care te trece prin &#238;ntrebÄƒri</a> È™i &#238;È›i dÄƒ rezultatul pe baza rÄƒspunsurilor tale.</p>
      <p>DacÄƒ situaÈ›ia ta este mai complicatÄƒ â€” venituri din strÄƒinÄƒtate, mai multe activitÄƒÈ›i, o sursÄƒ care a dispÄƒrut &#238;n cursul anului â€” asta este o &#238;ntrebare pentru contabilul tÄƒu, nu pentru un site. Inclusiv pentru acesta. Noi nu oferim consultanÈ›Äƒ fiscalÄƒ.</p>
      <h2>Un singur lucru pe care meritÄƒ sÄƒ &#238;l faci azi</h2>
      <p>Indiferent dacÄƒ pragul te prinde anul acesta, &#238;n anii urmÄƒtori va cuprinde mult mai multÄƒ lume.</p>
      <p>Obiceiul care ajutÄƒ &#238;n ambele cazuri este banal È™i simplu: noteazÄƒ-È›i veniturile È™i cheltuielile digital, pe mÄƒsurÄƒ ce apar, &#238;n loc sÄƒ le È›ii &#238;ntr-o pungÄƒ. DacÄƒ se dovedeÈ™te cÄƒ intri &#238;n sistem â€” eÈ™ti pregÄƒtit. DacÄƒ nu â€” tot ai &#238;n urmÄƒ un an mai ordonat È™i o discuÈ›ie mai scurtÄƒ cu contabilul.</p>
      <p>Exact pentru asta a fost fÄƒcut <a href="/ro" target="_blank" rel="noopener">TidGo</a> â€” bonuri È™i dovezi de venit str&#226;nse pe parcurs, &#238;n opt limbi, gata de predat. TidGo nu trimite nimic la HMRC È™i nu este consultanÈ›Äƒ fiscalÄƒ. Face doar ca &#238;nregistrÄƒrile sÄƒ existe atunci c&#226;nd cineva le cere.</p>
      <section class="article-sources">
        <strong>Surse</strong>
      <p>Toate cifrele de pe aceastÄƒ paginÄƒ provin din ghidurile oficiale HMRC. VerificÄƒ-le singur:</p>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income for Making Tax Digital for Income Tax</a> â€” GOV.UK
        <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> â€” GOV.UK
        <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if you can get an exemption from Making Tax Digital for Income Tax</a> â€” GOV.UK
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> â€” GOV.UK
      <p><em>Verificat: august 2026. Ghidurile HMRC se schimbÄƒ â€” dacÄƒ citeÈ™ti asta mult mai t&#226;rziu, verificÄƒ sumele la linkurile de mai sus.</em></p>
      </section>
      ${pageCta()}
    </article>
  `;
}

function mtdQualifyingIncomeArticleLT() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Qualifying income â€” kas tai iÅ¡ tikrÅ³jÅ³ yra? (Tai ne tavo pelnas)</h1>
      <h2>Kas yra qualifying income?</h2>
      <p>Qualifying income â€” tai suma, pagal kuriÄ… HMRC sprendÅ¾ia, ar tau taikomas Making Tax Digital. Tai tavo <strong>bendrosios pajamos iÅ¡ savarankiÅ¡kos veiklos ir iÅ¡ nuomos â€” prieÅ¡ atimant bet kokias iÅ¡laidas.</strong></p>
      <p>BÅ«tent Äia daugumai Å¾moniÅ³ ir nutinka klaida. Tai ne pelnas. Tai ne tai, kas lieka sÄ…skaitoje po medÅ¾iagÅ³, kuro, Ä¯rankiÅ³ ir viso kito. Tai viskas, kas Ä¯plaukÄ—.</p>
      <p>Jei pernai apyvarta buvo &#163;62 000, o &#163;20 000 nuÄ—jo iÅ¡laidoms, tavo qualifying income yra &#163;62 000 â€” ne &#163;42 000.</p>
      <h2>Veiklos ir nuomos pajamos sudedamos kartu</h2>
      <p>Tai antroji spÄ…stÅ³ vieta, ir ji pagauna tuos, kurie Å¾iÅ«ri Ä¯ kiekvienÄ… Å¡altinÄ¯ atskirai ir nusprendÅ¾ia, kad nÄ— vienas nesiekia ribos.</p>
      <p>HMRC juos sudeda. <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Oficialiame pavyzdyje</a> &#163;25 000 iÅ¡ nuomos plius &#163;27 000 iÅ¡ savarankiÅ¡kos veiklos duoda bendrÄ… qualifying income &#163;52 000.</p>
      <p>NÄ— viena suma atskirai net nesiartina prie &#163;50 000. Kartu ribÄ… perÅ¾engia. Jei savaitÄ—s dienomis vairuoji furgonÄ…, o be to dar nuomoji butÄ…, prieÅ¡ nusprÄ™sdamas, kad tavÄ™s tai nelieÄia, turi juos sudÄ—ti.</p>
      <h2>Kas NEÄ®EINA Ä¯ qualifying income?</h2>
      <p>NemaÅ¾ai pajamÅ³ lieka uÅ¾ Å¡io skaiÄiavimo ribÅ³. Pajamos iÅ¡ darbo santykiÅ³ (PAYE), pensija, palÅ«kanos uÅ¾ santaupas, dividendai ir kapitalo prieaugis Ä¯ qualifying income neÄ¯eina.</p>
      <p>Taigi Å¾mogus, uÅ¾dirbantis &#163;70 000 darbe ir dar &#163;15 000 iÅ¡ savarankiÅ¡kos veiklos, turi qualifying income &#163;15 000. Alga Å¡iam vertinimui neturi reikÅ¡mÄ—s â€” nors, Å¾inoma, ji vis tiek deklaruojama Ä¯prasta tvarka.</p>
      <p>Verta Å¾inoti ir kelias konkreÄias iÅ¡imtis, <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">kurias HMRC iÅ¡vardija</a>: pajamos iÅ¡ britÅ³ REIT ir PAIF fondÅ³ neskaiÄiuojamos, qualifying care relief neskaiÄiuojamas, o averaging relief rezultato nekeiÄia (tai aktualu Å«kininkams ir kÅ«rÄ—jams).</p>
      <p>Vienas dalykas, kuris skaiÄiuojamas ir Å¾mones nustebina: pajamÅ³ Å¡altinis, kuris <strong>nutrÅ«ko</strong> po paskutinÄ—s tavo deklaracijos, vis tiek Ä¯traukiamas Ä¯ qualifying income â€” jei turi kitÄ…, tebeveikiantÄ¯ Å¡altinÄ¯.</p>
      <h2>Kokios yra ribos?</h2>
      <p>Jei tavo qualifying income 2024/25 mokestiniais metais virÅ¡ijo &#163;50 000, <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">MTD turÄ—jai pradÄ—ti naudoti nuo 2026 m. balandÅ¾io 6 d.</a> â€” ir vis dar gali uÅ¾siregistruoti. VÄ—lesniais metais ribos leidÅ¾iasi Å¾emyn ir apims kur kas daugiau Å¾moniÅ³.</p>
      <p>Kitame gale: <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">esi automatiÅ¡kai atleistas</a> ir MTD naudoti neprivalai, jei tavo qualifying income yra &#163;20 000 arba maÅ¾iau.</p>
      <h2>IÅ¡ kur HMRC ima Å¡iÄ… sumÄ…?</h2>
      <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC apskaiÄiuoja tavo qualifying income</a> pagal Self Assessment deklaracijÄ…, pateiktÄ… praÄ—jusiais mokestiniais metais. Jei suma virÅ¡ija ribÄ…, HMRC atsiunÄia laiÅ¡kÄ…, patvirtinantÄ¯, kad nuo kitÅ³ mokestiniÅ³ metÅ³ pradÅ¾ios turi naudoti MTD.</p>
      <p>Ir dabar svarbiausia. Net jei <strong>laiÅ¡ko negausi</strong>, vis tiek privalai pats pasitikrinti savo qualifying income ir uÅ¾siregistruoti, jei ribÄ… virÅ¡iji.</p>
      <p><strong>LaiÅ¡ko nebuvimas nereiÅ¡kia prievolÄ—s nebuvimo.</strong> LaiÅ¡kai pasimeta, adresai pasensta, o atsakomybÄ— vis tiek lieka tau.</p>
      <h2>Kaip pasitikrinti savo situacijÄ…?</h2>
      <p>HMRC siÅ«lo <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Ä¯rankÄ¯, kuris perveda per klausimus</a> ir pateikia rezultatÄ… pagal tavo atsakymus.</p>
      <p>Jei tavo situacija sudÄ—tingesnÄ— â€” pajamos iÅ¡ uÅ¾sienio, kelios veiklos, Å¡altinis, kuris dingo metÅ³ viduryje â€” tai klausimas buhalteriui, o ne interneto svetainei. Ä®skaitant Å¡iÄ…. Mes mokesÄiÅ³ konsultacijÅ³ neteikiame.</p>
      <h2>Vienas dalykas, kurÄ¯ verta padaryti Å¡iandien</h2>
      <p>Nesvarbu, ar riba tave pagauna Å¡iais metais â€” ateinanÄiais metais ji apims kur kas daugiau Å¾moniÅ³.</p>
      <p>Ä®protis, kuris padeda abiem atvejais, yra nuobodus ir paprastas: fiksuok pajamas ir iÅ¡laidas skaitmeniniu bÅ«du iÅ¡ karto, o ne laikyk jas maiÅ¡elyje. Jei paaiÅ¡kÄ—s, kad esi sistemoje â€” esi pasiruoÅ¡Ä™s. Jei ne â€” vis tiek uÅ¾ nugaros turÄ—si tvarkingesnius metus ir trumpesnÄ¯ pokalbÄ¯ su buhalteriu.</p>
      <p>BÅ«tent tam ir sukurta <a href="/lt" target="_blank" rel="noopener">TidGo</a> â€” kvitai ir pajamÅ³ Ä¯rodymai renkami eigoje, aÅ¡tuoniomis kalbomis, paruoÅ¡ti perduoti. TidGo nieko nesiunÄia Ä¯ HMRC ir nÄ—ra mokesÄiÅ³ konsultacija. Ji tik pasirÅ«pina, kad Ä¯raÅ¡ai egzistuotÅ³ tada, kai kas nors jÅ³ papraÅ¡o.</p>
      <section class="article-sources">
        <strong>Å altiniai</strong>
      <p>Visi Å¡iame puslapyje pateikti skaiÄiai paimti iÅ¡ oficialiÅ³ HMRC gairiÅ³. Pasitikrink pats:</p>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income for Making Tax Digital for Income Tax</a> â€” GOV.UK
        <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> â€” GOV.UK
        <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if you can get an exemption from Making Tax Digital for Income Tax</a> â€” GOV.UK
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> â€” GOV.UK
      <p><em>Patikrinta: 2026 m. rugpjÅ«tis. HMRC gairÄ—s keiÄiasi â€” jei skaitai tai gerokai vÄ—liau, sumas pasitikrink pagal nuorodas aukÅ¡Äiau.</em></p>
      </section>
      ${pageCta()}
    </article>
  `;
}

const MTD_QUARTERLY_UPDATES_ARTICLES = {
  "en": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n<h1>MTD quarterly updates â€” what they are, when to send them, and what happens if you miss one</h1>\n<h2>What a quarterly update actually is</h2>\n<p>A quarterly update is a summary of your income and expenses for a period of the tax year, sent to HMRC through MTD-compatible software.</p>\n<p>It is not a tax return. It is not a payment. It is not a full accounting of everything you owe. It is a running total â€” HMRC uses it to build a picture of your likely tax position as the year progresses, not to calculate a final bill.</p>\n<p>Think of it like a progress report. You are telling HMRC where things stand at the end of each quarter. The actual tax calculation happens at the end of the year, in your final declaration.</p>\n<h2>How many updates and when</h2>\n<p>Four per tax year. The deadlines for the standard tax year quarters are:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Quarter</th>\n<th>Period covered</th>\n<th>Deadline</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Q1</td>\n<td>6 April â€“ 5 July</td>\n<td>7 August</td>\n</tr>\n<tr>\n<td>Q2</td>\n<td>6 April â€“ 5 October</td>\n<td>7 November</td>\n</tr>\n<tr>\n<td>Q3</td>\n<td>6 April â€“ 5 January</td>\n<td>7 February</td>\n</tr>\n<tr>\n<td>Q4</td>\n<td>6 April â€“ 5 April</td>\n<td>7 May</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>There is also a calendar quarter option â€” if you prefer to report January to March, April to June and so on instead of the tax year quarters â€” but you must elect for this, and not all software supports it. Check with your accountant before choosing.</p>\n<h2>The cumulative rule â€” and why it matters if you miss a deadline</h2>\n<p>This is the part most people do not know, and it changes how you should think about missed deadlines.</p>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Quarterly updates are cumulative</a>. Each update covers the period from the start of the tax year to the end of that quarter â€” not just the three months of that quarter.</p>\n<p>So Q1 covers 6 April to 5 July. Q2 covers 6 April to 5 October â€” it includes Q1's figures. Q3 covers 6 April to 5 January. Q4 covers the full year.</p>\n<p><strong>What this means if you miss Q1:</strong> your Q2 update will automatically include the figures from the Q1 period. You do not file Q1 separately. You catch up in Q2, and the total is complete.</p>\n<p>You should still send Q1 as soon as your records are ready â€” but the cumulative structure means a missed quarter does not create a gap in your annual figures. It creates a late submission, which in 2026/27 carries no penalty.</p>\n<h2>What goes into a quarterly update</h2>\n<p>The totals from your digital records for the period:</p>\n<ul>\n<li>Total income from each self-employment source</li>\n<li>Total expenses from each self-employment source</li>\n<li>Total income from property (if applicable)</li>\n<li>Total property expenses (if applicable)</li>\n</ul>\n<p>You do not enter individual receipts or transactions. You enter the totals. Your software reads the totals from your digital records and sends them. This is why keeping good records through the quarter matters â€” the update is only as accurate as the records behind it.</p>\n<p><strong>CIS subcontractors:</strong> you enter gross income â€” the full amount before the CIS deduction. <a href=\"/mtd/cis\">You do not enter the CIS deduction in your quarterly update</a>. HMRC already has that from your contractor's monthly returns and includes it automatically in the tax calculation.</p>\n<h2>What happens after you send a quarterly update</h2>\n<p>Your software triggers a tax calculation and shows you an indication of where your tax position stands for the year so far. This is not a bill â€” it is an estimate, based on the information submitted to date. The final bill comes with the final declaration.</p>\n<p>If you disagree with the CIS deduction figure HMRC is showing, query it with your contractor first. At the year end, you can correct it before submitting your final declaration.</p>\n<h2>What happens if you miss a deadline</h2>\n<p><strong>In 2026/27 â€” the transition year:</strong> <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC has confirmed a soft landing</a>. No penalty points are issued for late quarterly updates during this first year, regardless of how many you miss.</p>\n<p>You still need to send all four quarterly updates before you can submit your final declaration. Missing a deadline does not remove the obligation â€” it just means no penalty for being late in this first year.</p>\n<p><strong>From 2027/28 onwards:</strong> the points-based penalty system applies in full.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Points accumulated</th>\n<th>Consequence</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>1â€“3 points</td>\n<td>Points recorded, no financial penalty yet</td>\n</tr>\n<tr>\n<td>4 points</td>\n<td>Fixed Â£200 penalty</td>\n</tr>\n<tr>\n<td>5+ points</td>\n<td>Additional Â£200 per further late submission</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Points are reset to zero once you have submitted all outstanding updates and filed on time for a further period. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Full details of the penalty system are on GOV.UK</a>.</p>\n<p><strong>Late payment of tax</strong> is penalised separately, under existing rules, even in 2026/27. The soft landing covers late submissions, not late payments.</p>\n<p><strong>The final declaration</strong> is also penalised under existing rules if submitted after 31 January. The soft landing does not cover this.</p>\n<h2>What you cannot do: copy-paste between systems</h2>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Once a digital record has been included in a quarterly update</a>, you cannot manually transfer it to another system â€” not by retyping, not by copy-paste. If you use more than one piece of software, they must be digitally linked. This is the \"digital link\" requirement.</p>\n<h2>The quarterly update is not the hard part</h2>\n<p>Most people worry about the quarterly deadline. The harder part is keeping records clean through the quarter, so that when the deadline arrives, the figures are ready.</p>\n<p>A quarterly update submitted from tidy records takes minutes. A quarterly update submitted from a bag of unfiled receipts and unrecorded income takes most of a weekend.</p>\n<h2>Where TidGo fits</h2>\n<p><a href=\"/\">TidGo</a> collects receipts, income proof and CIS payslips as they happen â€” through WhatsApp, email or the app â€” so that by the end of each quarter the records behind your quarterly update are already there. TidGo doesn't submit quarterly updates to HMRC. That goes through your MTD software or accountant. It just means the records are ready when the deadline arrives.</p>\n<p>For the specific situation after the 7 August 2026 deadline, see <a href=\"/mtd/missed-7-august-deadline\">the missed deadline guide</a>.</p>\n<div class=\"article-sources\">\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” send quarterly updates</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” create digital records</a> â€” GOV.UK</li>\n</ul>\n<p><em>Last checked: August 2026. Verify at GOV.UK if reading later.</em></p>\n</div>\n  ${pageCta()}\n</article>",
  "pl": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n<h1>Kwartalne raporty MTD â€” czym sÄ…, kiedy je wysyÅ‚aÄ‡ i co siÄ™ stanie, jeÅ›li przegapisz termin</h1>\n<h2>Czym wÅ‚aÅ›ciwie jest kwartalny raport</h2>\n<p>Kwartalny raport to podsumowanie Twoich przychodÃ³w i wydatkÃ³w za dany okres roku podatkowego, wysÅ‚ane do HMRC przez oprogramowanie kompatybilne z MTD.</p>\n<p>To nie jest zeznanie podatkowe. To nie jest pÅ‚atnoÅ›Ä‡. To nie jest peÅ‚ne rozliczenie wszystkiego, co jesteÅ› winien. To bieÅ¼Ä…ca suma â€” HMRC uÅ¼ywa jej do budowania obrazu Twojej prawdopodobnej pozycji podatkowej w trakcie roku, a nie do obliczenia koÅ„cowego rachunku.</p>\n<p>PomyÅ›l o tym jak o raporcie postÄ™pu. MÃ³wisz HMRC, jak wyglÄ…dajÄ… sprawy na koniec kaÅ¼dego kwartaÅ‚u. WÅ‚aÅ›ciwe obliczenie podatku nastÄ™puje na koniec roku, w final declaration.</p>\n<h2>Ile raportÃ³w i kiedy</h2>\n<p>Cztery razy w roku podatkowym. Terminy dla standardowych kwartaÅ‚Ã³w roku podatkowego:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>KwartaÅ‚</th>\n<th>ObjÄ™ty okres</th>\n<th>Termin</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Q1</td>\n<td>6 kwietnia â€“ 5 lipca</td>\n<td>7 sierpnia</td>\n</tr>\n<tr>\n<td>Q2</td>\n<td>6 kwietnia â€“ 5 paÅºdziernika</td>\n<td>7 listopada</td>\n</tr>\n<tr>\n<td>Q3</td>\n<td>6 kwietnia â€“ 5 stycznia</td>\n<td>7 lutego</td>\n</tr>\n<tr>\n<td>Q4</td>\n<td>6 kwietnia â€“ 5 kwietnia</td>\n<td>7 maja</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Istnieje teÅ¼ opcja kwartaÅ‚Ã³w kalendarzowych â€” jeÅ›li wolisz raportowaÄ‡ styczeÅ„â€“marzec, kwiecieÅ„â€“czerwiec itd. zamiast kwartaÅ‚Ã³w roku podatkowego â€” ale musisz to wybraÄ‡, a nie wszystkie oprogramowania to obsÅ‚ugujÄ…. SprawdÅº z ksiÄ™gowym przed wyborem.</p>\n<h2>Zasada kumulatywnoÅ›ci â€” i dlaczego ma znaczenie przy przeoczonym terminie</h2>\n<p>To jest czÄ™Å›Ä‡, o ktÃ³rej wiÄ™kszoÅ›Ä‡ ludzi nie wie, a ktÃ³ra zmienia sposÃ³b myÅ›lenia o przeoczonych terminach.</p>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Kwartalne raporty sÄ… kumulatywne</a>. KaÅ¼dy raport obejmuje okres od poczÄ…tku roku podatkowego do koÅ„ca danego kwartaÅ‚u â€” nie tylko te trzy miesiÄ…ce.</p>\n<p>Q1 obejmuje 6 kwietnia â€“ 5 lipca. Q2 obejmuje 6 kwietnia â€“ 5 paÅºdziernika â€” zawiera cyfry z Q1. Q3 obejmuje 6 kwietnia â€“ 5 stycznia. Q4 obejmuje peÅ‚ny rok.</p>\n<p><strong>Co to znaczy, jeÅ›li przegapisz Q1:</strong> TwÃ³j raport Q2 automatycznie bÄ™dzie zawieraÅ‚ cyfry z okresu Q1. Nie skÅ‚adasz Q1 osobno. Nadrabiasz przy Q2, a Å‚Ä…czna suma jest kompletna.</p>\n<p>I tak powinieneÅ› wysÅ‚aÄ‡ Q1 jak najszybciej â€” ale kumulatywna struktura oznacza, Å¼e przeoczony kwartaÅ‚ nie tworzy luki w rocznych cyfrach. Tworzy spÃ³Åºnione zÅ‚oÅ¼enie, ktÃ³re w 2026/27 nie wiÄ…Å¼e siÄ™ z Å¼adnÄ… karÄ….</p>\n<h2>Co wchodzi do kwartalnego raportu</h2>\n<p>Sumy z Twoich cyfrowych rekordÃ³w za dany okres:</p>\n<ul>\n<li>ÅÄ…czny przychÃ³d z kaÅ¼dego ÅºrÃ³dÅ‚a dziaÅ‚alnoÅ›ci</li>\n<li>ÅÄ…czne wydatki z kaÅ¼dego ÅºrÃ³dÅ‚a dziaÅ‚alnoÅ›ci</li>\n<li>ÅÄ…czny przychÃ³d z wynajmu (jeÅ›li dotyczy)</li>\n<li>ÅÄ…czne wydatki na wynajem (jeÅ›li dotyczy)</li>\n</ul>\n<p>Nie wpisujesz pojedynczych paragonÃ³w ani transakcji. Wpisujesz sumy. Twoje oprogramowanie czyta sumy z Twoich cyfrowych rekordÃ³w i wysyÅ‚a je. Dlatego prowadzenie dobrej ewidencji przez caÅ‚y kwartaÅ‚ ma znaczenie â€” raport jest tylko tak dokÅ‚adny, jak rekordy za nim stojÄ…ce.</p>\n<p><strong>Podwykonawcy CIS:</strong> wpisujesz przychÃ³d brutto â€” peÅ‚nÄ… kwotÄ™ przed potrÄ…ceniem CIS. <a href=\"/pl/mtd/cis\">PotrÄ…cenia CIS nie wpisujesz w kwartalnym raporcie</a>. HMRC ma je juÅ¼ od miesiÄ™cznych raportÃ³w Twojego contractora i uwzglÄ™dnia je automatycznie w obliczeniu podatkowym.</p>\n<h2>Co siÄ™ dzieje po wysÅ‚aniu kwartalnego raportu</h2>\n<p>Twoje oprogramowanie uruchamia obliczenie podatkowe i pokazuje Ci orientacyjnÄ… pozycjÄ™ podatkowÄ… za rok do tej pory. To nie jest rachunek â€” to szacunek, oparty na dotychczas zÅ‚oÅ¼onych informacjach. KoÅ„cowy rachunek przychodzi z final declaration.</p>\n<h2>Co siÄ™ dzieje, jeÅ›li przegapisz termin</h2>\n<p><strong>W 2026/27 â€” rok przejÅ›ciowy:</strong> <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC potwierdziÅ‚o soft landing</a>. Za spÃ³Åºnione kwartalne raporty w tym pierwszym roku nie sÄ… przyznawane Å¼adne punkty karne, niezaleÅ¼nie od tego, ile ich przegapisz.</p>\n<p>Nadal musisz wysÅ‚aÄ‡ wszystkie cztery kwartalne raporty, zanim zÅ‚oÅ¼ysz final declaration. Przeoczenie terminu nie usuwa obowiÄ…zku â€” oznacza tylko brak kary za spÃ³Åºnienie w tym pierwszym roku.</p>\n<p><strong>Od 2027/28:</strong> system punktowy obowiÄ…zuje w peÅ‚ni.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Zebrane punkty</th>\n<th>Konsekwencja</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>1â€“3 punkty</td>\n<td>Punkty zapisane, na razie bez kary finansowej</td>\n</tr>\n<tr>\n<td>4 punkty</td>\n<td>StaÅ‚a kara Â£200</td>\n</tr>\n<tr>\n<td>5+ punktÃ³w</td>\n<td>Kolejne Â£200 za kaÅ¼de nastÄ™pne spÃ³Åºnienie</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Punkty sÄ… zerowane po zÅ‚oÅ¼eniu wszystkich zalegÅ‚ych raportÃ³w i terminowym skÅ‚adaniu przez kolejny okres.</p>\n<p><strong>SpÃ³Åºniona pÅ‚atnoÅ›Ä‡ podatku</strong> jest karana osobno, wedÅ‚ug dotychczasowych zasad, nawet w 2026/27. Soft landing obejmuje spÃ³Åºnione zÅ‚oÅ¼enia, nie spÃ³Åºnione pÅ‚atnoÅ›ci.</p>\n<p><strong>Final declaration</strong> teÅ¼ jest karana wedÅ‚ug dotychczasowych zasad, jeÅ›li zÅ‚oÅ¼ona po 31 stycznia. Soft landing tego nie obejmuje.</p>\n<h2>Kwartalny raport to nie jest ta trudna czÄ™Å›Ä‡</h2>\n<p>WiÄ™kszoÅ›Ä‡ ludzi martwi siÄ™ terminem kwartalnym. Trudniejsza czÄ™Å›Ä‡ to prowadzenie czystej ewidencji przez kwartaÅ‚, Å¼eby kiedy przyjdzie termin, cyfry byÅ‚y gotowe.</p>\n<p>Kwartalny raport zÅ‚oÅ¼ony z uporzÄ…dkowanych rekordÃ³w zajmuje kilka minut. Kwartalny raport zÅ‚oÅ¼ony z worka nieskatalogowanych paragonÃ³w i niezapisanych przychodÃ³w zajmuje wiÄ™kszoÅ›Ä‡ weekendu.</p>\n<h2>Gdzie w tym wszystkim TidGo</h2>\n<p><a href=\"/pl\">TidGo</a> zbiera paragony, dowody przychodu i payslipy CIS na bieÅ¼Ä…co â€” przez WhatsApp, mail albo w aplikacji â€” Å¼eby pod koniec kaÅ¼dego kwartaÅ‚u rekordy stojÄ…ce za kwartalnym raportem juÅ¼ tam byÅ‚y. TidGo nie wysyÅ‚a kwartalnych raportÃ³w do HMRC. To robi Twoje oprogramowanie MTD albo ksiÄ™gowy. Sprawia tylko, Å¼e rekordy sÄ… gotowe, gdy przyjdzie termin.</p>\n<p>JeÅ›li chodzi konkretnie o sytuacjÄ™ po terminie 7 sierpnia 2026, zobacz <a href=\"/pl/mtd/missed-7-august-deadline\">przewodnik o spÃ³Åºnionym terminie</a>.</p>\n<div class=\"article-sources\">\n<h2>Å¹rÃ³dÅ‚a</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” send quarterly updates</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” create digital records</a> â€” GOV.UK</li>\n</ul>\n<p><em>Sprawdzone: sierpieÅ„ 2026. Zweryfikuj na GOV.UK, jeÅ›li czytasz to pÃ³Åºniej.</em></p>\n</div>\n  ${pageCta()}\n</article>",
  "ro": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n<h1>ActualizÄƒri trimestriale MTD â€” ce sunt, cÃ¢nd le trimiÈ›i È™i ce se Ã®ntÃ¢mplÄƒ dacÄƒ ratezi termenul</h1>\n<h2>Ce este de fapt o actualizare trimestrialÄƒ</h2>\n<p>O actualizare trimestrialÄƒ este un rezumat al veniturilor È™i cheltuielilor tale pentru o perioadÄƒ a anului fiscal, trimis la HMRC prin software compatibil cu MTD.</p>\n<p>Nu este o declaraÈ›ie fiscalÄƒ. Nu este o platÄƒ. Este un total curent â€” HMRC Ã®l foloseÈ™te pentru a construi o imagine a poziÈ›iei tale fiscale probabile pe parcursul anului, nu pentru a calcula factura finalÄƒ.</p>\n<p>GÃ¢ndeÈ™te-te la ea ca la un raport de progres. ÃŽi spui HMRC unde stau lucrurile la sfÃ¢rÈ™itul fiecÄƒrui trimestru. Calculul fiscal real are loc la sfÃ¢rÈ™itul anului, Ã®n final declaration.</p>\n<h2>CÃ¢te actualizÄƒri È™i cÃ¢nd</h2>\n<p>Patru pe an fiscal. Termenele pentru trimestrele standard ale anului fiscal:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Trimestru</th>\n<th>PerioadÄƒ acoperitÄƒ</th>\n<th>Termen</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>T1</td>\n<td>6 aprilie â€“ 5 iulie</td>\n<td>7 august</td>\n</tr>\n<tr>\n<td>T2</td>\n<td>6 aprilie â€“ 5 octombrie</td>\n<td>7 noiembrie</td>\n</tr>\n<tr>\n<td>T3</td>\n<td>6 aprilie â€“ 5 ianuarie</td>\n<td>7 februarie</td>\n</tr>\n<tr>\n<td>T4</td>\n<td>6 aprilie â€“ 5 aprilie</td>\n<td>7 mai</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h2>Regula cumulativÄƒ â€” È™i de ce conteazÄƒ dacÄƒ ratezi un termen</h2>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">ActualizÄƒrile trimestriale sunt cumulative</a>. Fiecare actualizare acoperÄƒ perioada de la Ã®nceputul anului fiscal pÃ¢nÄƒ la sfÃ¢rÈ™itul acelui trimestru â€” nu doar cele trei luni ale acelui trimestru.</p>\n<p><strong>Ce Ã®nseamnÄƒ dacÄƒ ratezi T1:</strong> actualizarea T2 va include automat cifrele din perioada T1. Nu depui T1 separat. Recuperezi la T2, iar totalul este complet.</p>\n<h2>Ce intrÄƒ Ã®ntr-o actualizare trimestrialÄƒ</h2>\n<p>Totalurile din evidenÈ›ele tale digitale pentru perioadÄƒ: total venituri din fiecare sursÄƒ de activitate, total cheltuieli, total venituri din proprietÄƒÈ›i dacÄƒ este cazul.</p>\n<p>Nu introduci chitanÈ›e sau tranzacÈ›ii individuale. Introduci totalurile.</p>\n<p><strong>Subcontractorii CIS</strong> introduc venitul brut â€” suma completÄƒ Ã®nainte de deducerea CIS. <a href=\"/ro/mtd/cis\">Nu introduci deducerea CIS Ã®n actualizarea trimestrialÄƒ</a>.</p>\n<h2>Ce se Ã®ntÃ¢mplÄƒ dacÄƒ ratezi un termen</h2>\n<p><strong>ÃŽn 2026/27 â€” anul de tranziÈ›ie:</strong> <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC a confirmat un soft landing</a>. Nu se acordÄƒ puncte de penalizare pentru actualizÄƒri trimestriale Ã®ntÃ¢rziate Ã®n acest prim an.</p>\n<p>Trebuie totuÈ™i sÄƒ trimiÈ›i toate cele patru actualizÄƒri trimestriale Ã®nainte de a putea depune final declaration.</p>\n<p><strong>Din 2027/28:</strong> sistemul de puncte se aplicÄƒ complet. 4 puncte = amendÄƒ Â£200, fiecare Ã®ntÃ¢rziere ulterioarÄƒ = Ã®ncÄƒ Â£200.</p>\n<p>Plata Ã®ntÃ¢rziatÄƒ a impozitului È™i final declaration Ã®ntÃ¢rziatÄƒ sunt penalizate conform regulilor existente, chiar È™i Ã®n 2026/27.</p>\n<h2>Actualizarea trimestrialÄƒ nu este partea dificilÄƒ</h2>\n<p>Actualizarea trimestrialÄƒ depusÄƒ din evidenÈ›e ordonate dureazÄƒ minute. Din evidenÈ›e neordonate dureazÄƒ un weekend Ã®ntreg.</p>\n<h2>Unde se Ã®ncadreazÄƒ TidGo</h2>\n<p><a href=\"/ro\">TidGo</a> colecteazÄƒ bonuri, dovezi de venit È™i payslipuri CIS pe mÄƒsurÄƒ ce apar â€” prin WhatsApp, email sau Ã®n aplicaÈ›ie â€” ca la sfÃ¢rÈ™itul fiecÄƒrui trimestru evidenÈ›ele sÄƒ fie deja acolo. TidGo nu trimite actualizÄƒri trimestriale la HMRC. Asta o face software-ul tÄƒu MTD sau contabilul.</p>\n<p>Pentru situaÈ›ia specificÄƒ de dupÄƒ termenul de 7 august 2026, vezi <a href=\"/ro/mtd/missed-7-august-deadline\">ghidul despre termenul ratat</a>.</p>\n<div class=\"article-sources\">\n<h2>Surse</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” send quarterly updates</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>\n</ul>\n<p><em>Verificat: august 2026. VerificÄƒ pe GOV.UK dacÄƒ citeÈ™ti mai tÃ¢rziu.</em></p>\n</div>\n  ${pageCta()}\n</article>",
  "lt": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n<h1>MTD ketvirtinÄ—s ataskaitos â€” kas jos yra, kada siÅ³sti ir kas nutinka praleidus terminÄ…</h1>\n<h2>Kas iÅ¡ tikrÅ³jÅ³ yra ketvirtinÄ— ataskaita</h2>\n<p>KetvirtinÄ— ataskaita yra tavo pajamÅ³ ir iÅ¡laidÅ³ uÅ¾ mokestiniÅ³ metÅ³ laikotarpÄ¯ suvestinÄ—, siunÄiama Ä¯ HMRC per su MTD suderintÄ… programinÄ™ Ä¯rangÄ….</p>\n<p>Tai nÄ—ra mokesÄiÅ³ deklaracija. Tai nÄ—ra mokÄ—jimas. Tai einamasis sumai â€” HMRC jÄ¯ naudoja, kad susidaro vaizdÄ… apie tavo tikÄ—tinÄ… mokestinÄ™ pozicijÄ… metÅ³ eigoje, o ne galutinei sÄ…skaitai apskaiÄiuoti.</p>\n<p>Galvok apie tai kaip apie paÅ¾angos ataskaitÄ…. Kiekvieno ketvirÄio pabaigoje praneÅ¡ai HMRC, kaip viskas atrodo. Tikrasis mokesÄiÅ³ skaiÄiavimas vyksta metÅ³ pabaigoje, final declaration metu.</p>\n<h2>Kiek ataskaitÅ³ ir kada</h2>\n<p>Keturios per mokestinius metus. StandartiniÅ³ mokestiniÅ³ metÅ³ ketvirÄiÅ³ terminai:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Ketvirtis</th>\n<th>Apimamas laikotarpis</th>\n<th>Terminas</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>K1</td>\n<td>BalandÅ¾io 6 â€“ liepos 5</td>\n<td>RugpjÅ«Äio 7</td>\n</tr>\n<tr>\n<td>K2</td>\n<td>BalandÅ¾io 6 â€“ spalio 5</td>\n<td>LapkriÄio 7</td>\n</tr>\n<tr>\n<td>K3</td>\n<td>BalandÅ¾io 6 â€“ sausio 5</td>\n<td>Vasario 7</td>\n</tr>\n<tr>\n<td>K4</td>\n<td>BalandÅ¾io 6 â€“ balandÅ¾io 5</td>\n<td>GeguÅ¾Ä—s 7</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h2>Kumuliacinis taisyklÄ— â€” ir kodÄ—l ji svarbi praleidus terminÄ…</h2>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">KetvirtinÄ—s ataskaitos yra kumuliacinÄ—s</a>. Kiekviena ataskaita apima laikotarpÄ¯ nuo mokestiniÅ³ metÅ³ pradÅ¾ios iki to ketvirÄio pabaigos â€” ne tik tuos tris mÄ—nesius.</p>\n<p><strong>KÄ… tai reiÅ¡kia, jei praleidi K1:</strong> tavo K2 ataskaita automatiÅ¡kai apims K1 laikotarpio skaiÄius. K1 neteiki atskirai. Pasiveji K2 metu, o bendra suma bus pilna.</p>\n<h2>Kas Ä¯eina Ä¯ ketvirtinÄ™ ataskaitÄ…</h2>\n<p>Bendrieji sumai iÅ¡ tavo skaitmeniniÅ³ Ä¯raÅ¡Å³ uÅ¾ laikotarpÄ¯: bendrosios pajamos iÅ¡ kiekvieno veiklos Å¡altinio, bendros iÅ¡laidos, bendros nuomos pajamos jei taikoma.</p>\n<p>NeÄ¯vedi atskirÅ³ kvitÅ³ ar operacijÅ³. Ä®vedi bendrus sumus.</p>\n<p><strong>CIS subkontraktoriai</strong> Ä¯veda bendrÄ…sias pajamas â€” visÄ… sumÄ… prieÅ¡ CIS atskaitymÄ…. <a href=\"/lt/mtd/cis\">CIS atskaitymo neÄ¯vedi ketvirtinÄ—je ataskaitoje</a>.</p>\n<h2>Kas nutinka praleidus terminÄ…</h2>\n<p><strong>2026/27 metais â€” pereinamasis laikotarpis:</strong> <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC patvirtino soft landing</a>. Pirmaisiais metais baudos taÅ¡kai uÅ¾ pavÄ—luotas ketvirtines ataskaitas neskaiÄiuojami.</p>\n<p>Vis tiek privalai iÅ¡siÅ³sti visas keturias ketvirtines ataskaitas prieÅ¡ galÄ—damas pateikti final declaration.</p>\n<p><strong>Nuo 2027/28:</strong> taÅ¡kÅ³ sistema galioja visa apimtimi. 4 taÅ¡kai = Â£200 bauda, kiekvienas kitas pavÄ—lavimas = dar Â£200.</p>\n<p>PavÄ—luotas mokesÄiÅ³ mokÄ—jimas ir pavÄ—luota final declaration baudÅ¾iami pagal esamas taisykles net 2026/27 metais.</p>\n<h2>KetvirtinÄ— ataskaita nÄ—ra sunkioji dalis</h2>\n<p>KetvirtinÄ— ataskaita, pateikta iÅ¡ tvarkingÅ³ Ä¯raÅ¡Å³, uÅ¾trunka minutes. IÅ¡ netvarkingÅ³ Ä¯raÅ¡Å³ â€” savaitgalÄ¯.</p>\n<h2>Kur Äia TidGo</h2>\n<p><a href=\"/lt\">TidGo</a> renka kvitus, pajamÅ³ Ä¯rodymus ir CIS payslipus iÅ¡ karto â€” per WhatsApp, el. paÅ¡tÄ… arba programÄ—lÄ—je â€” kad kiekvieno ketvirÄio pabaigoje Ä¯raÅ¡ai jau bÅ«tÅ³ ten. TidGo nesiunÄia ketvirtiniÅ³ ataskaitÅ³ Ä¯ HMRC. Tai daro tavo MTD programinÄ— Ä¯ranga arba buhalteris.</p>\n<p>DÄ—l konkretios situacijos po 2026 m. rugpjÅ«Äio 7 d. termino Å¾r. <a href=\"/lt/mtd/missed-7-august-deadline\">praleisto termino vadovÄ…</a>.</p>\n<div class=\"article-sources\">\n<h2>Å altiniai</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” send quarterly updates</a> â€” GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>\n</ul>\n<p><em>Patikrinta: 2026 m. rugpjÅ«tis. Jei skaitai vÄ—liau, pasitikrink GOV.UK.</em></p>\n</div>\n  ${pageCta()}\n</article>"
};

function mtdQuarterlyUpdatesHref() {
  return mtdKnowledgeHref("quarterly-updates");
}

function mtdMissedDeadlineHref() {
  return state.marketingLanguage === "en" ? "/mtd/missed-7-august-deadline" : `/${state.marketingLanguage}/mtd/missed-7-august-deadline`;
}

function mtdMissedDeadlineQuarterlyLink() {
  const href = mtdQuarterlyUpdatesHref();
  const copy = {
    en: `For a full explanation of how quarterly updates work, what goes into them and the deadline schedule, see the <a href="${href}">quarterly updates guide</a>.`,
    pl: `PeÅ‚ne wyjaÅ›nienie, jak dziaÅ‚ajÄ… raporty kwartalne, co do nich trafia i jakie sÄ… terminy, znajdziesz w <a href="${href}">przewodniku po raportach kwartalnych</a>.`,
    ro: `Pentru explicaÈ›ia completÄƒ despre cum funcÈ›ioneazÄƒ actualizÄƒrile trimestriale, ce intrÄƒ Ã®n ele È™i care este calendarul termenelor, vezi <a href="${href}">ghidul despre actualizÄƒrile trimestriale</a>.`,
    lt: `IÅ¡samÅ³ paaiÅ¡kinimÄ…, kaip veikia ketvirtinÄ—s ataskaitos, kas Ä¯ jas Ä¯traukiama ir kokie yra terminai, rasi <a href="${href}">ketvirtiniÅ³ ataskaitÅ³ vadove</a>.`
  };
  return `<p>${copy[state.marketingLanguage] || copy.en}</p>`;
}

function mtdQuarterlyUpdatesArticle() {
  return (MTD_QUARTERLY_UPDATES_ARTICLES[state.marketingLanguage] || MTD_QUARTERLY_UPDATES_ARTICLES.en)
    .replaceAll('${mk("navMtd")}', mk("navMtd"))
    .replaceAll('${pageCta()}', pageCta());
}

const MTD_MISSED_DEADLINE_ARTICLES = {
  en: `<h1>Missed the 7 August MTD deadline? Here's what actually happens</h1>
<h2>The short answer</h2>
<p>If you missed yesterday's 7 August 2026 deadline for your first Making Tax Digital quarterly update, <strong>no penalty points are coming</strong>. HMRC has confirmed a soft landing for the entire 2026/27 tax year: no penalty points will be issued for late quarterly updates during this first year, no matter how many you miss.</p>
<p>No letter demanding money. No immediate fine. A clean slate going into next year.</p>
<p>That is not the same as saying the obligation has gone away. It hasn't. But the consequences are far smaller than some posts circulating today suggest.</p>
<h2>What the soft landing actually covers</h2>
<p>During the 2026/27 tax year, no penalty points will be issued for late quarterly updates. This means that even if you miss one â€” or all four â€” of your quarterly deadlines in this first year, you won't receive penalty points.</p>
<p>Miss one, miss two, miss all four â€” you enter 2027/28 with a clean slate.</p>
<p>This applies to the April 2026 cohort only â€” sole traders and landlords with qualifying income above Â£50,000. It applies only to the 2026-27 tax year, not to an individual's first year of MTD. Therefore, if you join MTD in 2027-28 because your qualifying income exceeds Â£30,000, penalty points will apply from your first quarterly update.</p>
<h2>What the soft landing does NOT cover</h2>
<p>Three things still apply in full, and mixing them up is how people get into trouble:</p>
<p><strong>1. The final declaration.</strong> The soft landing does not apply to your digital tax return. If you submit your 2026/27 digital tax return late â€” after 31 January 2028 â€” penalty points may apply under the standard rules.</p>
<p><strong>2. Late payment penalties.</strong> The soft landing also does not protect against late payment penalties, which operate on a separate regime. Your 2026/27 tax is still due by 31 January 2028 regardless of quarterly filing.</p>
<p><strong>3. Non-digital records.</strong> If you're not keeping digital records at all, that's a separate issue with its own penalty regime â€” up to Â£3,000 per quarter.</p>
<h2>The obligation hasn't disappeared â€” it's stacked</h2>
<p>The work doesn't disappear â€” it stacks. Updates are cumulative: the Q2 update due 7 November 2026 covers 6 April to 5 October.</p>
<p>This is actually good news if you missed Q1: the cumulative method means each update runs from the beginning of the tax year to the end of the relevant period. Your Q2 submission will include Q1's figures automatically. You don't file Q1 separately â€” you catch up in Q2, and the figures are complete.</p>
<p>Send Q1 as soon as you can anyway. The soft landing is a one-year grace period, not a permanent exemption, and HMRC expects genuine engagement with the system, not indefinite delay.</p>
<h2>The point-based system from 2027/28</h2>
<p>From the 2027/28 tax year onwards, the points-based penalty system kicks in fully. Each late quarterly update earns a penalty point. Hit four points, and HMRC issues a fixed Â£200 penalty. Every additional missed deadline after that triggers another Â£200 fine.</p>
<p>So the soft landing isn't just a free pass â€” it's a year to build the habit before the system bites.</p>
<h2>What to do if you haven't sent Q1 yet</h2>
<ol>
<li>Send it as soon as your records are ready. No penalty for being late in 2026/27, but you must send all four quarterly updates before you can submit your final declaration in January 2028.</li>
<li>If your software isn't set up, set it up now â€” not before Q2 in November.</li>
<li>If you're not sure whether you're even in scope, check <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">GOV.UK's qualifying income guidance</a> or ask your accountant.</li>
</ol>
<p>The 7 November deadline for Q2 is the one to focus on now. Use the time between now and then to get your records clean.</p>
<h2>Where TidGo fits</h2>
<p><a href="/">TidGo</a> collects receipts, income proof and CIS payslips as they happen, so your records are ready before the next quarterly deadline rather than scrambled together the night before. It doesn't submit to HMRC â€” that part goes through your accountant or MTD-compatible software. It just means the records exist when you need them.</p>
<section class="article-sources">
<strong>Sources</strong>
<ul>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/government/publications/changes-to-making-tax-digital-for-income-tax-penalty-points" target="_blank" rel="noopener">Penalty reform for MTD ITSA â€” soft landing</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax â€” send quarterly updates</a> â€” GOV.UK</li>
</ul>
<p><em>Last checked: 8 August 2026. Verify at GOV.UK if reading later.</em></p>
</section>`,
  pl: `<h1>Nie wysÅ‚aÅ‚eÅ› raportu MTD do 7 sierpnia? Co siÄ™ naprawdÄ™ dzieje</h1>
<h2>KrÃ³tka odpowiedÅº</h2>
<p>JeÅ›li przegapiÅ‚eÅ› wczorajszy termin 7 sierpnia 2026 â€” pierwszy raport kwartalny Making Tax Digital â€” <strong>Å¼adne punkty karne nie idÄ… w TwojÄ… stronÄ™</strong>. HMRC potwierdziÅ‚o period przejÅ›ciowy (soft landing) na caÅ‚y rok podatkowy 2026/27: za spÃ³Åºnione raporty kwartalne w tym pierwszym roku nie bÄ™dÄ… przyznawane Å¼adne punkty karne, niezaleÅ¼nie od tego, ile ich przegapisz.</p>
<p>Å»adnego listu z Å¼Ä…daniem zapÅ‚aty. Å»adnej natychmiastowej kary. Czysty rekord na wejÅ›cie do nastÄ™pnego roku.</p>
<p>To nie znaczy, Å¼e obowiÄ…zek zniknÄ…Å‚. Nie zniknÄ…Å‚. Ale konsekwencje sÄ… znacznie mniejsze, niÅ¼ sugerujÄ… niektÃ³re posty krÄ…Å¼Ä…ce dziÅ› po internecie.</p>
<h2>Co soft landing faktycznie obejmuje</h2>
<p>W roku podatkowym 2026/27 nie bÄ™dÄ… przyznawane punkty karne za spÃ³Åºnione raporty kwartalne. Nawet jeÅ›li przegapisz jeden raport, dwa albo wszystkie cztery â€” do roku 2027/28 wchodzisz z czystym kontem.</p>
<p>Dotyczy to wyÅ‚Ä…cznie pierwszej grupy â€” czyli sole traderÃ³w i landlordÃ³w z qualifying income powyÅ¼ej Â£50 000, ktÃ³rzy weszli do MTD w kwietniu 2026. Soft landing obejmuje tylko rok 2026/27, nie pierwszy rok kaÅ¼dego podatnika indywidualnie. JeÅ›li wejdziesz do MTD w 2027/28, bo TwÃ³j qualifying income przekroczy Â£30 000 â€” punkty karne obowiÄ…zujÄ… od pierwszego raportu.</p>
<h2>Czego soft landing NIE obejmuje</h2>
<p>Trzy rzeczy nadal obowiÄ…zujÄ… w peÅ‚ni i ich mylenie moÅ¼e byÄ‡ kosztowne:</p>
<p><strong>1. Final declaration â€” roczne zeznanie MTD.</strong> Soft landing nie chroni Twojego rocznego rozliczenia. JeÅ›li zÅ‚oÅ¼ysz je po terminie (po 31 stycznia 2028), mogÄ… naliczyÄ‡ siÄ™ punkty karne wedÅ‚ug standardowych zasad.</p>
<p><strong>2. Kary za spÃ³ÅºnionÄ… pÅ‚atnoÅ›Ä‡.</strong> To osobny system i soft landing go nie obejmuje. TwÃ³j podatek za 2026/27 jest naleÅ¼ny do 31 stycznia 2028 niezaleÅ¼nie od tego, czy wysyÅ‚asz raporty kwartalne na czas.</p>
<p><strong>3. Brak cyfrowych rekordÃ³w.</strong> JeÅ›li w ogÃ³le nie prowadzisz rekordÃ³w cyfrowo, to jest osobna kwestia z wÅ‚asnym systemem kar â€” do Â£3 000 za kwartaÅ‚.</p>
<h2>ObowiÄ…zek nie zniknÄ…Å‚ â€” nakÅ‚ada siÄ™</h2>
<p>Raporty kwartalne MTD sÄ… kumulatywne. Raport Q2 (termin 7 listopada 2026) obejmuje dane od 6 kwietnia do 5 paÅºdziernika. To znaczy, Å¼e jeÅ›li nie wysÅ‚aÅ‚eÅ› Q1, TwÃ³j Q2 i tak bÄ™dzie zawieraÅ‚ dane z tego okresu. Nie musisz skÅ‚adaÄ‡ Q1 osobno â€” nadrabiasz automatycznie przy Q2, a Å‚Ä…czne liczby wychodzÄ… kompletne.</p>
<p>WyÅ›lij Q1 jak najszybciej mimo to. Soft landing to roczna ulga, a nie trwaÅ‚e zwolnienie â€” HMRC oczekuje realnego zaangaÅ¼owania, a nie odkÅ‚adania w nieskoÅ„czonoÅ›Ä‡.</p>
<h2>System punktowy od 2027/28</h2>
<p>Od roku podatkowego 2027/28 system punktowy wchodzi w peÅ‚ni. KaÅ¼de spÃ³Åºnienie z raportem kwartalnym to jeden punkt. Po czterech punktach kara Â£200, a kaÅ¼de kolejne spÃ³Åºnienie powyÅ¼ej progu to kolejne Â£200.</p>
<p>Soft landing to nie darmowy przejazd â€” to rok na zbudowanie nawyku, zanim system zacznie gryÅºÄ‡.</p>
<h2>Co zrobiÄ‡, jeÅ›li nie wysÅ‚aÅ‚eÅ› Q1</h2>
<ol>
<li>WyÅ›lij go najszybciej, jak rekordy sÄ… gotowe. W 2026/27 nie ma kary za spÃ³Åºnienie, ale musisz wysÅ‚aÄ‡ wszystkie cztery raporty kwartalne, zanim zÅ‚oÅ¼ysz final declaration w styczniu 2028.</li>
<li>JeÅ›li oprogramowanie nie jest jeszcze skonfigurowane â€” skonfiguruj teraz, a nie przed Q2 w listopadzie.</li>
<li>JeÅ›li nie masz pewnoÅ›ci, czy w ogÃ³le jesteÅ› objÄ™ty â€” sprawdÅº <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">wytyczne HMRC o qualifying income</a> albo zapytaj ksiÄ™gowego.</li>
</ol>
<p>Termin Q2 to 7 listopada. Czas miÄ™dzy teraz a nim â€” na porzÄ…dkowanie rekordÃ³w.</p>
<h2>Gdzie w tym wszystkim TidGo</h2>
<p><a href="/pl">TidGo</a> zbiera paragony, dowody przychodu i CIS payslipy na bieÅ¼Ä…co, Å¼eby rekordy byÅ‚y gotowe przed kolejnym terminem kwartalnym, a nie skÅ‚adane naprÄ™dce w ostatniej chwili. TidGo nie wysyÅ‚a nic do HMRC â€” to robi TwÃ³j ksiÄ™gowy albo kompatybilne oprogramowanie. Pilnuje tylko, Å¼eby rekordy istniaÅ‚y, gdy sÄ… potrzebne.</p>
<h3>Å¹rÃ³dÅ‚a</h3>
<ul>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/government/publications/changes-to-making-tax-digital-for-income-tax-penalty-points" target="_blank" rel="noopener">Penalty reform for MTD ITSA â€” soft landing</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax â€” send quarterly updates</a> â€” GOV.UK</li>
</ul>
<p><em>Sprawdzone: 8 sierpnia 2026. Zweryfikuj na GOV.UK, jeÅ›li czytasz to pÃ³Åºniej.</em></p>`,
  ro: `<h1>Nu ai trimis raportarea MTD pÃ¢nÄƒ pe 7 august? IatÄƒ ce se Ã®ntÃ¢mplÄƒ</h1>
<h2>RÄƒspunsul scurt</h2>
<p>DacÄƒ ai ratat termenul de ieri, 7 august 2026 â€” prima raportare trimestrialÄƒ Making Tax Digital â€” <strong>niciun punct de penalizare nu vine spre tine</strong>. HMRC a confirmat o perioadÄƒ de tranziÈ›ie (soft landing) pentru Ã®ntregul an fiscal 2026/27: nu se vor acorda puncte de penalizare pentru raportÄƒrile trimestriale Ã®ntÃ¢rziate Ã®n acest prim an, indiferent de cÃ¢te ratezi.</p>
<p>Nicio scrisoare care sÄƒ cearÄƒ bani. Nicio amendÄƒ imediatÄƒ. Un slate curat la intrarea Ã®n anul urmÄƒtor.</p>
<p>Asta nu Ã®nseamnÄƒ cÄƒ obligaÈ›ia a dispÄƒrut. Nu a dispÄƒrut. Dar consecinÈ›ele sunt mult mai mici decÃ¢t sugereazÄƒ unele postÄƒri care circulÄƒ astÄƒzi.</p>
<h2>Ce acoperÄƒ soft landing-ul</h2>
<p>ÃŽn anul fiscal 2026/27, nu se acordÄƒ puncte de penalizare pentru raportÄƒrile trimestriale Ã®ntÃ¢rziate. Chiar dacÄƒ ratezi una, douÄƒ sau toate patru â€” intri Ã®n 2027/28 cu un dosar curat.</p>
<p>Aceasta se aplicÄƒ doar primei cohorte â€” sole traderi È™i landlords cu qualifying income peste Â£50.000, care au intrat Ã®n MTD Ã®n aprilie 2026. Soft landing-ul se aplicÄƒ doar anului 2026/27, nu primului an individual al fiecÄƒrui contribuabil. DacÄƒ intri Ã®n MTD Ã®n 2027/28, pentru cÄƒ qualifying income-ul tÄƒu depÄƒÈ™eÈ™te Â£30.000 â€” punctele de penalizare se aplicÄƒ de la prima raportare.</p>
<h2>Ce NU acoperÄƒ soft landing-ul</h2>
<p>Trei lucruri se aplicÄƒ Ã®n continuare Ã®n totalitate È™i confundarea lor poate fi costisitoare:</p>
<p><strong>1. Final declaration â€” declaraÈ›ia anualÄƒ MTD.</strong> Soft landing-ul nu protejeazÄƒ declaraÈ›ia ta anualÄƒ. DacÄƒ o depui dupÄƒ termen (dupÄƒ 31 ianuarie 2028), punctele de penalizare se pot aplica conform regulilor standard.</p>
<p><strong>2. PenalitÄƒÈ›ile pentru plata Ã®ntÃ¢rziatÄƒ.</strong> Acesta este un sistem separat È™i soft landing-ul nu Ã®l acoperÄƒ. Taxa ta pentru 2026/27 este datoratÄƒ pÃ¢nÄƒ la 31 ianuarie 2028, indiferent dacÄƒ trimiÈ›i raportÄƒrile trimestriale la timp.</p>
<p><strong>3. Lipsa Ã®nregistrÄƒrilor digitale.</strong> DacÄƒ nu È›ii deloc evidenÈ›e digitale, aceasta este o problemÄƒ separatÄƒ cu propriul sistem de penalitÄƒÈ›i â€” pÃ¢nÄƒ la Â£3.000 pe trimestru.</p>
<h2>ObligaÈ›ia nu a dispÄƒrut â€” se acumuleazÄƒ</h2>
<p>RaportÄƒrile trimestriale MTD sunt cumulative. Raportarea Q2 (termen 7 noiembrie 2026) acoperÄƒ datele de la 6 aprilie la 5 octombrie. Asta Ã®nseamnÄƒ cÄƒ dacÄƒ nu ai trimis Q1, raportarea Q2 va include oricum datele din acea perioadÄƒ. Nu trebuie sÄƒ depui Q1 separat â€” recuperezi automat la Q2, iar totalurile cumulate vor fi complete.</p>
<p>Trimite Q1 cÃ¢t mai curÃ¢nd oricum. Soft landing-ul este o facilitate de un an, nu o scutire permanentÄƒ â€” HMRC se aÈ™teaptÄƒ la o implicare realÄƒ Ã®n sistem, nu la amÃ¢nare la nesfÃ¢rÈ™it.</p>
<h2>Sistemul de puncte din 2027/28</h2>
<p>Din anul fiscal 2027/28, sistemul de puncte intrÄƒ Ã®n vigoare complet. Fiecare Ã®ntÃ¢rziere la o raportare trimestrialÄƒ Ã®nseamnÄƒ un punct. La patru puncte, penalitate Â£200, iar fiecare Ã®ntÃ¢rziere ulterioarÄƒ peste prag Ã®nseamnÄƒ Ã®ncÄƒ Â£200.</p>
<p>Soft landing-ul nu este un abonament gratuit â€” este un an pentru a construi obiceiul Ã®nainte ca sistemul sÄƒ Ã®nceapÄƒ sÄƒ muÈ™te.</p>
<h2>Ce faci dacÄƒ nu ai trimis Q1</h2>
<ol>
<li>Trimite-l cÃ¢t mai curÃ¢nd ce Ã®nregistrÄƒrile sunt gata. ÃŽn 2026/27 nu existÄƒ penalitate pentru Ã®ntÃ¢rziere, dar trebuie sÄƒ trimiÈ›i toate cele patru raportÄƒri trimestriale Ã®nainte de a putea depune final declaration Ã®n ianuarie 2028.</li>
<li>DacÄƒ software-ul nu este configurat â€” configureazÄƒ-l acum, nu Ã®nainte de Q2 Ã®n noiembrie.</li>
<li>DacÄƒ nu eÈ™ti sigur cÄƒ eÈ™ti Ã®n scope â€” verificÄƒ <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">ghidul HMRC despre qualifying income</a> sau Ã®ntreabÄƒ contabilul.</li>
</ol>
<p>Termenul pentru Q2 este 7 noiembrie. FoloseÈ™te timpul dintre acum È™i atunci pentru a-È›i organiza Ã®nregistrÄƒrile.</p>
<h2>Unde se Ã®ncadreazÄƒ TidGo</h2>
<p><a href="/ro">TidGo</a> strÃ¢nge bonuri, dovezi de venit È™i payslipuri CIS pe parcurs, ca Ã®nregistrÄƒrile sÄƒ fie gata Ã®naintea urmÄƒtorului termen trimestrial, nu asamblate Ã®n grabÄƒ Ã®n ultima clipÄƒ. TidGo nu trimite nimic la HMRC â€” asta o face contabilul tÄƒu sau software-ul compatibil. Se asigurÄƒ doar cÄƒ Ã®nregistrÄƒrile existÄƒ cÃ¢nd ai nevoie de ele.</p>
<section class="article-sources">
<strong>Surse</strong>
<ul>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/government/publications/changes-to-making-tax-digital-for-income-tax-penalty-points" target="_blank" rel="noopener">Penalty reform for MTD ITSA â€” soft landing</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax â€” send quarterly updates</a> â€” GOV.UK</li>
</ul>
<p><em>Verificat: 8 august 2026. VerificÄƒ pe GOV.UK dacÄƒ citeÈ™ti mai tÃ¢rziu.</em></p>
</section>`,
  lt: `<h1>Praleidai MTD terminÄ… rugpjÅ«Äio 7 d.? Å tai kas iÅ¡ tikrÅ³jÅ³ vyksta</h1>
<h2>Trumpas atsakymas</h2>
<p>Jei praleidai vakarykÅ¡tÄ¯ 2026 m. rugpjÅ«Äio 7 d. terminÄ… â€” pirmÄ…jÄ… Making Tax Digital ketvirtinÄ™ ataskaitÄ… â€” <strong>jokiÅ³ baudos taÅ¡kÅ³ nesulauksi</strong>. HMRC patvirtino pereinamÄ…jÄ¯ laikotarpÄ¯ (soft landing) visam 2026/27 mokestiniÅ³ metÅ³ laikotarpiui: pavÄ—luotoms ketvirtinÄ—ms ataskaitoms Å¡iais pirmaisiais metais baudos taÅ¡kai neskaiÄiuojami, nesvarbu, kiek jÅ³ praleisi.</p>
<p>Jokio laiÅ¡ko su pinigÅ³ reikalavimu. Jokios skubios baudos. Å vari pradÅ¾ia kitais metais.</p>
<p>Tai nereiÅ¡kia, kad prievolÄ— dingo. Nedingo. TaÄiau pasekmÄ—s yra daug maÅ¾esnÄ—s, nei siÅ«lo kai kurie Å¡iandien internete cirkuliuojantys Ä¯raÅ¡ai.</p>
<h2>KÄ… iÅ¡ tikrÅ³jÅ³ apima soft landing</h2>
<p>2026/27 mokestiniais metais baudos taÅ¡kai uÅ¾ pavÄ—luotas ketvirtines ataskaitas neskaiÄiuojami. Net jei praleisi vienÄ…, dvi ar visas keturias â€” Ä¯ 2027/28 metus Ä¯eini Å¡variai.</p>
<p>Tai taikoma tik pirmajai kohortai â€” sole trader ir landlord su qualifying income virÅ¡ Â£50 000, kurie Ä¯ MTD Ä¯stojo 2026 m. balandÄ¯. Soft landing taikomas tik 2026/27 metams, o ne pirmiesiems kiekvieno mokesÄiÅ³ mokÄ—tojo MTD metams. Jei Ä¯ MTD Ä¯stosi 2027/28, nes tavo qualifying income virÅ¡ys Â£30 000 â€” baudos taÅ¡kai skaiÄiuojami nuo pirmos ataskaitos.</p>
<h2>Ko soft landing NEAPIMA</h2>
<p>Trys dalykai vis dar galioja visa apimtimi ir jÅ³ painiojimas gali brangiai kainuoti:</p>
<p><strong>1. Final declaration â€” metinÄ— MTD deklaracija.</strong> Soft landing neapsaugo tavo metinÄ—s deklaracijos. Jei jÄ… pateiksi pavÄ—luotai (po 2028 m. sausio 31 d.), baudos taÅ¡kai gali bÅ«ti taikomi pagal standartines taisykles.</p>
<p><strong>2. Baudos uÅ¾ pavÄ—luotÄ… mokÄ—jimÄ….</strong> Tai atskira sistema, kurios soft landing neapima. Tavo 2026/27 mokestis vis tiek turi bÅ«ti sumokÄ—tas iki 2028 m. sausio 31 d., nepaisant to, ar siunti ketvirtines ataskaitas laiku.</p>
<p><strong>3. SkaitmeniniÅ³ Ä¯raÅ¡Å³ nebuvimas.</strong> Jei apskritai netvarkai skaitmeniniÅ³ Ä¯raÅ¡Å³, tai atskiras klausimas su sava baudÅ³ sistema â€” iki Â£3 000 per ketvirtÄ¯.</p>
<h2>PrievolÄ— nedingo â€” ji kaupiasi</h2>
<p>MTD ketvirtinÄ—s ataskaitos yra kumuliacinÄ—s. Q2 ataskaita (terminas 2026 m. lapkriÄio 7 d.) apima duomenis nuo balandÅ¾io 6 d. iki spalio 5 d. Tai reiÅ¡kia, kad jei nesiuntei Q1, tavo Q2 vis tiek apims to laikotarpio duomenis. Nereikia pateikti Q1 atskirai â€” automatiÅ¡kai pasivejami Q2, o bendros sumos bus pilnos.</p>
<p>Vis tiek iÅ¡siÅ³sk Q1 kuo greiÄiau. Soft landing yra vieneriÅ³ metÅ³ lengvata, o ne nuolatinÄ— iÅ¡imtis â€” HMRC tikisi realaus dalyvavimo sistemoje, o ne vilkinimo iki begalybÄ—s.</p>
<h2>TaÅ¡kÅ³ sistema nuo 2027/28</h2>
<p>Nuo 2027/28 mokestiniÅ³ metÅ³ taÅ¡kÅ³ sistema Ä¯sigalioja visa apimtimi. Kiekvienas pavÄ—luotas ketvirtinis praneÅ¡imas â€” vienas taÅ¡kas. Surinkus keturis taÅ¡kus â€” Â£200 bauda, o kiekvienas kitas praleidimas virÅ¡ ribos â€” dar Â£200.</p>
<p>Soft landing nÄ—ra nemokamas bilietas â€” tai metai Ä¯proÄiui suformuoti, kol sistema nepradÄ—jo gelti.</p>
<h2>KÄ… daryti, jei Q1 nesiuntei</h2>
<ol>
<li>IÅ¡siÅ³sk jÄ¯ kuo greiÄiau, kai Ä¯raÅ¡ai bus paruoÅ¡ti. 2026/27 metais baudos uÅ¾ pavÄ—lavimÄ… nÄ—ra, taÄiau privalai iÅ¡siÅ³sti visas keturias ketvirtines ataskaitas, prieÅ¡ galÄ—damas pateikti final declaration 2028 m. sausÄ¯.</li>
<li>Jei programinÄ— Ä¯ranga dar nesukonfigÅ«ruota â€” konfigÅ«ruok dabar, o ne prieÅ¡ Q2 lapkritÄ¯.</li>
<li>Jei nesi tikras, ar apskritai esi scope â€” patikrink <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC qualifying income gaires</a> arba paklausk buhalterio.</li>
</ol>
<p>Q2 terminas â€” lapkriÄio 7 d. Laikas nuo dabar iki tada â€” Ä¯raÅ¡ams sutvarkyti.</p>
<h2>Kur Äia TidGo</h2>
<p><a href="/lt">TidGo</a> renka kvitus, pajamÅ³ Ä¯rodymus ir CIS payslipus eigoje, kad Ä¯raÅ¡ai bÅ«tÅ³ paruoÅ¡ti prieÅ¡ kitÄ… ketvirtinÄ¯ terminÄ…, o ne surinkti skubotai paskutinÄ™ minutÄ™. TidGo nieko nesiunÄia Ä¯ HMRC â€” tai daro tavo buhalteris arba suderinama programinÄ— Ä¯ranga. Tik pasirÅ«pina, kad Ä¯raÅ¡ai egzistuotÅ³, kai jÅ³ reikia.</p>
<h3>Å altiniai</h3>
<ul>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/government/publications/changes-to-making-tax-digital-for-income-tax-penalty-points" target="_blank" rel="noopener">Penalty reform for MTD ITSA â€” soft landing</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax â€” send quarterly updates</a> â€” GOV.UK</li>
</ul>
<p><em>Patikrinta: 2026 m. rugpjÅ«Äio 8 d. Jei skaitai vÄ—liau, patikrink GOV.UK.</em></p>`
};

function mtdMissedDeadlineArticle() {
  const html = MTD_MISSED_DEADLINE_ARTICLES[state.marketingLanguage] || MTD_MISSED_DEADLINE_ARTICLES.en;
  const withQuarterlyLink = html.replace(/(<(?:section class="article-sources"|h3)[^>]*>)/, `${mtdMissedDeadlineQuarterlyLink()}$1`);
  return `<article class="marketing-page-card marketing-article"><span class="eyebrow">${mk("navMtd")}</span>${withQuarterlyLink}${pageCta()}</article>`;
}

const MTD_DIGITAL_RECORDS_ARTICLES = {
  "en": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>What digital records do I need to keep for MTD?</h1>\n  <h2>The minimum requirement</h2>\n  <p>For each transaction, <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC requires you to record</a>:</p>\n  <ul>\n    <li>The <strong>date</strong> of the transaction</li>\n    <li>The <strong>amount</strong></li>\n    <li>The <strong>category</strong> â€” whether it is income or an expense, and what type</li>\n  </ul>\n  <p>That is the digital record. Three pieces of information, created in software that works with Making Tax Digital, as close to the time of the transaction as practical.</p>\n  <p>Nothing else is required to be digital. Not photos of receipts. Not scanned invoices. Not bank statements uploaded to an app. The transaction record itself â€” those three fields â€” is what the law requires to be digital.</p>\n  <h2>Simplified categorisation if your turnover is under Â£90,000</h2>\n  <p>If your turnover from a self-employment source is <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">under Â£90,000</a>, you can use simplified categorisation. This means you only need to record whether each transaction is <strong>income or an expense</strong> â€” not which subcategory it falls into.</p>\n  <p>No splitting fuel from tools from materials. Just in or out.</p>\n  <p>Two exceptions to watch:</p>\n  <p><strong>Landlords with UK residential property:</strong> you must additionally record whether an expense is a <a href=\"https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change\" target=\"_blank\" rel=\"noopener\">restricted finance cost</a> â€” mortgage interest restrictions apply differently and HMRC needs to see this.</p>\n  <p><strong>If your turnover reaches Â£90,000:</strong> you must switch to full categorisation, including records from the start of that tax year, before you can submit a quarterly update. If you are close to the threshold, categorise in full from the start. Redoing a year of records is worse than doing it right once.</p>\n  <h2>What you must still keep â€” the supporting documents</h2>\n  <p>Here is the part the short answer leaves out.</p>\n  <p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC requires you to continue keeping records as you normally would for Self Assessment</a>. That means original documents or copies â€” receipts, invoices, bank statements, CIS payslips â€” that prove the figures in your digital records.</p>\n  <p>These must be kept for <a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">at least five years after the 31 January deadline</a> for the relevant tax year.</p>\n  <p>So the law does not say \"photograph every receipt\". It says \"keep the receipt for five years\". A thermal till receipt fades in two. That is the practical case for photos â€” not a legal requirement, but the only realistic way to meet one.</p>\n  <p><a href=\"/mtd/do-i-have-to-photograph-receipts\">A full explanation of the photography question is here</a>.</p>\n  <h2>What counts as a digital record in practice</h2>\n  <p>A row in a spreadsheet â€” date, amount, category â€” is a digital record, if that spreadsheet is linked to your MTD software. A note in a notebook is not. A photo of a receipt is not a digital record on its own â€” it is a supporting document. The digital record is what you enter into the software.</p>\n  <p>One rule that catches people: <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">you cannot manually transfer records between programs</a> after they have been submitted in a quarterly update. No retyping figures from one spreadsheet into another. No copy-paste into a different system. If you use more than one piece of software, they must be digitally linked. This is the \"digital link\" requirement and it is strict.</p>\n  <h2>What records to keep for different income types</h2>\n  <p><strong>Self-employment income:</strong></p>\n  <ul>\n    <li>Date and amount of each payment received</li>\n    <li>Who paid you (merchant or client name)</li>\n    <li>Invoices issued, if applicable</li>\n  </ul>\n  <p><strong>Self-employment expenses:</strong></p>\n  <ul>\n    <li>Date, amount and what it was for</li>\n    <li>Supporting document (receipt, invoice, bank statement)</li>\n    <li>Common categories: materials, fuel, tools, equipment, subcontractor payments, insurance, phone, work clothing where applicable</li>\n  </ul>\n  <p><strong>CIS income:</strong></p>\n  <ul>\n    <li>Your gross pay (not net after deduction) â€” the full amount before the CIS deduction</li>\n    <li>The CIS deduction amount â€” keep this separately, it is not an expense</li>\n    <li>The payslip or remittance notice that shows both figures</li>\n    <li><a href=\"/mtd/cis\">Full explanation of CIS records for MTD is here</a></li>\n  </ul>\n  <p><strong>Property income (landlords):</strong></p>\n  <ul>\n    <li>Rental income received â€” date and amount per property</li>\n    <li>Expenses â€” date, amount and whether each is a restricted finance cost</li>\n    <li>All UK properties are treated as one business â€” separate records per property are not required for reporting, but keeping them makes the final declaration easier</li>\n  </ul>\n  <h2>How long to keep records</h2>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Document type</th>\n        <th>Minimum period</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>Self-employment records</td>\n          <td>5 years after 31 January following the tax year</td>\n        </tr>\n        <tr>\n          <td>Property records</td>\n          <td>5 years after 31 January following the tax year</td>\n        </tr>\n        <tr>\n          <td>Business records if tax return filed late</td>\n          <td>Longer â€” until HMRC's enquiry window closes</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p>If HMRC opens an enquiry, you may need to produce records going back further. Keep everything.</p>\n  <h2>What software to use</h2>\n  <p>Your digital records must be created and stored in <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">software that is compatible with Making Tax Digital</a>. You can still prepare MTD without business bank account connections if your records are complete and digitally kept. HMRC maintains a list. The software must be able to send your quarterly updates directly to HMRC â€” not via you retyping the figures somewhere else.</p>\n  <p>Spreadsheets are allowed if they are connected to HMRC via recognised bridging software. Using a spreadsheet alone, without a digital link to HMRC, is not compliant.</p>\n  <h2>The practical summary</h2>\n  <p>Record each transaction â€” date, amount, category â€” in your MTD software as it happens. Keep the receipt or invoice behind it for five years. Make sure it will still be readable when someone asks for it.</p>\n  <p>For your specific situation, ask your accountant. This page covers the general rules and is not tax advice.</p>\n  <h2>Where TidGo fits</h2>\n  <p><a href=\"/\">TidGo</a> captures receipts, income proof and CIS payslips as they happen â€” by WhatsApp photo, forwarded email or in the app â€” and creates the digital record behind each one. You confirm the details before they are trusted. Your accountant gets clean, tidy records instead of a collection of photos across WhatsApp, email and a kitchen drawer.</p>\n  <p>TidGo does not submit to HMRC. It handles the collection and organisation layer, so that whatever software or accountant does your quarterly updates and final declaration has something accurate to work from.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” Create digital records</a></li>\n      <li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Last checked: August 2026. Verify at GOV.UK if reading later.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "pl": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>JakÄ… cyfrowÄ… ewidencjÄ™ trzeba prowadziÄ‡ dla MTD?</h1>\n  <h2>Minimalny wymÃ³g</h2>\n  <p>Dla kaÅ¼dej transakcji <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC wymaga zapisania</a>:</p>\n  <ul>\n    <li><strong>Daty</strong> transakcji</li>\n    <li><strong>Kwoty</strong></li>\n    <li><strong>Kategorii</strong> â€” czy to przychÃ³d czy wydatek i jakiego rodzaju</li>\n  </ul>\n  <p>To jest cyfrowy rekord. Trzy informacje, zapisane w oprogramowaniu kompatybilnym z Making Tax Digital, moÅ¼liwie blisko daty transakcji.</p>\n  <p>Nic innego nie musi byÄ‡ cyfrowe. Nie zdjÄ™cia paragonÃ³w. Nie zeskanowane faktury. Nie wyciÄ…gi bankowe wgrywane do aplikacji. Sam zapis transakcji â€” te trzy pola â€” to wÅ‚aÅ›nie to, czego prawo wymaga w formie cyfrowej.</p>\n  <h2>Uproszczona kategoryzacja przy obrotach poniÅ¼ej Â£90 000</h2>\n  <p>JeÅ›li TwÃ³j obrÃ³t z dziaÅ‚alnoÅ›ci wynosi <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">poniÅ¼ej Â£90 000</a>, moÅ¼esz korzystaÄ‡ z uproszczonej kategoryzacji. Oznacza to, Å¼e wystarczy zapisaÄ‡, czy kaÅ¼da transakcja to <strong>przychÃ³d czy wydatek</strong> â€” bez rozbijania na podkategorie.</p>\n  <p>Bez dzielenia paliwa od narzÄ™dzi od materiaÅ‚Ã³w. Po prostu do Å›rodka albo na zewnÄ…trz.</p>\n  <p>Dwa wyjÄ…tki, o ktÃ³rych warto wiedzieÄ‡:</p>\n  <p><strong>Landlordzi z UK residential property:</strong> musisz dodatkowo oznaczyÄ‡, czy wydatek to <a href=\"https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change\" target=\"_blank\" rel=\"noopener\">restricted finance cost</a> â€” ograniczenia odliczenia odsetek od kredytu dziaÅ‚ajÄ… inaczej i HMRC musi to widzieÄ‡.</p>\n  <p><strong>JeÅ›li obrÃ³t przekroczy Â£90 000:</strong> musisz przejÅ›Ä‡ na peÅ‚nÄ… kategoryzacjÄ™, wÅ‚Ä…cznie z rekordami od poczÄ…tku danego roku podatkowego, zanim wyÅ›lesz raport kwartalny. JeÅ›li zbliÅ¼asz siÄ™ do progu, kategoryzuj w peÅ‚ni od poczÄ…tku. Poprawianie roku wstecz jest gorsze niÅ¼ zrobienie tego porzÄ…dnie za pierwszym razem.</p>\n  <h2>Co musisz nadal przechowywaÄ‡ â€” dokumenty ÅºrÃ³dÅ‚owe</h2>\n  <p>I tu jest ta czÄ™Å›Ä‡, ktÃ³rÄ… krÃ³tka odpowiedÅº pomija.</p>\n  <p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC wymaga, Å¼ebyÅ› nadal prowadziÅ‚ ewidencjÄ™ tak jak dotÄ…d na potrzeby Self Assessment</a>. Oznacza to oryginalne dokumenty lub kopie â€” paragony, faktury, wyciÄ…gi bankowe, payslipy CIS â€” ktÃ³re potwierdzajÄ… cyfry w Twoich cyfrowych rekordach.</p>\n  <p>MuszÄ… byÄ‡ przechowywane przez <a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">co najmniej piÄ™Ä‡ lat po terminie 31 stycznia</a> za dany rok podatkowy.</p>\n  <p>Prawo nie mÃ³wi wiÄ™c \"sfotografuj kaÅ¼dy paragon\". MÃ³wi \"przechowuj paragon przez piÄ™Ä‡ lat\". Termiczny paragon z kasy blaknie po dwÃ³ch. To jest praktyczny argument za zdjÄ™ciami â€” nie wymÃ³g prawny, ale jedyny realny sposÃ³b na speÅ‚nienie wymogu przechowywania.</p>\n  <p><a href=\"/pl/mtd/do-i-have-to-photograph-receipts\">PeÅ‚ne wyjaÅ›nienie kwestii fotografowania jest tutaj</a>.</p>\n  <h2>Jakie rekordy prowadziÄ‡ dla rÃ³Å¼nych typÃ³w przychodÃ³w</h2>\n  <p><strong>Przychody z dziaÅ‚alnoÅ›ci:</strong></p>\n  <ul>\n    <li>Data i kwota kaÅ¼dej otrzymanej pÅ‚atnoÅ›ci</li>\n    <li>Od kogo (nazwa klienta lub kontrahenta)</li>\n    <li>Faktury, ktÃ³re wystawiÅ‚eÅ› (jeÅ›li dotyczy)</li>\n  </ul>\n  <p><strong>Wydatki z dziaÅ‚alnoÅ›ci:</strong></p>\n  <ul>\n    <li>Data, kwota i za co</li>\n    <li>Dokument ÅºrÃ³dÅ‚owy (paragon, faktura, wyciÄ…g)</li>\n    <li>Typowe kategorie: materiaÅ‚y, paliwo, narzÄ™dzia, sprzÄ™t, pÅ‚atnoÅ›ci podwykonawcom, ubezpieczenie, telefon, odzieÅ¼ robocza tam gdzie dotyczy</li>\n  </ul>\n  <p><strong>Przychody CIS:</strong></p>\n  <ul>\n    <li>Twoje wynagrodzenie brutto (nie kwota netto po potrÄ…ceniu) â€” peÅ‚na kwota przed potrÄ…ceniem CIS</li>\n    <li>Kwota potrÄ…cenia CIS â€” przechowuj osobno, to nie jest wydatek</li>\n    <li>Payslip lub remittance notice pokazujÄ…ce obie kwoty</li>\n    <li><a href=\"/pl/mtd/cis\">PeÅ‚ne wyjaÅ›nienie rekordÃ³w CIS dla MTD jest tutaj</a></li>\n  </ul>\n  <p><strong>Przychody z wynajmu (landlordzi):</strong></p>\n  <ul>\n    <li>Otrzymany czynsz â€” data i kwota</li>\n    <li>Wydatki â€” data, kwota i czy to restricted finance cost</li>\n    <li>Wszystkie nieruchomoÅ›ci w UK traktowane sÄ… jako jeden biznes â€” osobnych rekordÃ³w per nieruchomoÅ›Ä‡ HMRC nie wymaga do raportowania, ale prowadzenie ich uÅ‚atwia final declaration</li>\n  </ul>\n  <h2>Jak dÅ‚ugo przechowywaÄ‡ rekordy</h2>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Typ dokumentu</th>\n        <th>Minimalny okres</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>Rekordy z dziaÅ‚alnoÅ›ci</td>\n          <td>5 lat po 31 stycznia nastÄ™pujÄ…cym po roku podatkowym</td>\n        </tr>\n        <tr>\n          <td>Rekordy z wynajmu</td>\n          <td>5 lat po 31 stycznia nastÄ™pujÄ…cym po roku podatkowym</td>\n        </tr>\n        <tr>\n          <td>Rekordy gdy zeznanie zÅ‚oÅ¼one pÃ³Åºno</td>\n          <td>DÅ‚uÅ¼ej â€” do zamkniÄ™cia okna kontrolnego HMRC</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p>JeÅ›li HMRC otworzy postÄ™powanie, moÅ¼esz potrzebowaÄ‡ dokumentÃ³w sprzed wielu lat. Zachowuj wszystko.</p>\n  <h2>Jakiego oprogramowania uÅ¼ywaÄ‡</h2>\n  <p>Twoje cyfrowe rekordy muszÄ… byÄ‡ tworzone i przechowywane w <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">oprogramowaniu kompatybilnym z Making Tax Digital</a>. HMRC prowadzi listÄ™. Oprogramowanie musi umieÄ‡ wysyÅ‚aÄ‡ kwartalne raporty bezpoÅ›rednio do HMRC â€” nie przez Ciebie przepisujÄ…cego cyfry gdzieÅ› indziej.</p>\n  <p>Arkusze kalkulacyjne sÄ… dozwolone, jeÅ›li sÄ… podÅ‚Ä…czone do HMRC przez uznane oprogramowanie pomostowe (bridging software). Sam arkusz bez cyfrowego poÅ‚Ä…czenia z HMRC nie jest zgodny z przepisami.</p>\n  <h2>Praktyczne podsumowanie</h2>\n  <p>Zapisuj kaÅ¼dÄ… transakcjÄ™ â€” datÄ™, kwotÄ™, kategoriÄ™ â€” w swoim oprogramowaniu MTD na bieÅ¼Ä…co. Zachowaj paragon lub fakturÄ™ przez piÄ™Ä‡ lat. Zadbaj, Å¼eby po tych piÄ™ciu latach daÅ‚o siÄ™ je odczytaÄ‡.</p>\n  <p>W sprawach dotyczÄ…cych Twojej konkretnej sytuacji zapytaj ksiÄ™gowego. Ta strona opisuje ogÃ³lne zasady i nie jest poradÄ… podatkowÄ….</p>\n  <h2>Gdzie w tym wszystkim TidGo</h2>\n  <p><a href=\"/pl\">TidGo</a> zbiera paragony, dowody przychodu i payslipy CIS na bieÅ¼Ä…co â€” przez zdjÄ™cie na WhatsAppie, przekazany mail albo w aplikacji â€” i tworzy cyfrowy rekord za kaÅ¼dym z nich. Potwierdzasz szczegÃ³Å‚y przed zaufaniem danym. TwÃ³j ksiÄ™gowy dostaje czyste, uporzÄ…dkowane rekordy zamiast kolekcji zdjÄ™Ä‡ porozrzucanych po WhatsAppie, mailach i szufladzie w kuchni.</p>\n  <p>TidGo nie wysyÅ‚a nic do HMRC. Zajmuje siÄ™ warstwÄ… zbierania i porzÄ…dkowania, Å¼eby jakiekolwiek oprogramowanie lub ksiÄ™gowy robiÄ…cy Twoje kwartalne raporty i final declaration miaÅ‚ z czego pracowaÄ‡.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” Create digital records</a></li>\n      <li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Sprawdzone: sierpieÅ„ 2026. Zweryfikuj na GOV.UK, jeÅ›li czytasz to pÃ³Åºniej.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "ro": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Ce evidenÈ›e digitale trebuie sÄƒ pÄƒstrez pentru MTD?</h1>\n  <h2>CerinÈ›a minimÄƒ</h2>\n  <p>Pentru fiecare tranzacÈ›ie, <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC cere sÄƒ Ã®nregistrezi</a>:</p>\n  <ul>\n    <li><strong>Data</strong> tranzacÈ›iei</li>\n    <li><strong>Suma</strong></li>\n    <li><strong>Categoria</strong> â€” dacÄƒ este venit sau cheltuialÄƒ È™i de ce tip</li>\n  </ul>\n  <p>Aceasta este evidenÈ›a digitalÄƒ. Trei informaÈ›ii, create Ã®n software compatibil cu Making Tax Digital, cÃ¢t mai aproape de momentul tranzacÈ›iei.</p>\n  <p>Nimic altceva nu trebuie sÄƒ fie digital. Nu fotografii ale bonurilor. Nu facturi scanate. Nu extrase bancare Ã®ncÄƒrcate Ã®n aplicaÈ›ie. ÃŽnregistrarea tranzacÈ›iei Ã®n sine â€” acele trei cÃ¢mpuri â€” este ceea ce legea cere sÄƒ fie digital.</p>\n  <h2>Categorisire simplificatÄƒ dacÄƒ cifra de afaceri este sub Â£90.000</h2>\n  <p>DacÄƒ cifra ta de afaceri dintr-o sursÄƒ de activitate este <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">sub Â£90.000</a>, poÈ›i folosi categorisirea simplificatÄƒ. Aceasta Ã®nseamnÄƒ cÄƒ trebuie sÄƒ Ã®nregistrezi doar dacÄƒ fiecare tranzacÈ›ie este <strong>venit sau cheltuialÄƒ</strong> â€” fÄƒrÄƒ subcategorii.</p>\n  <p>FÄƒrÄƒ separarea combustibilului de scule de materiale. Doar intrare sau ieÈ™ire.</p>\n  <p>DouÄƒ excepÈ›ii de urmÄƒrit: landlords cu proprietÄƒÈ›i rezidenÈ›iale UK trebuie sÄƒ marcheze dacÄƒ o cheltuialÄƒ este restricted finance cost. DacÄƒ cifra de afaceri atinge Â£90.000, trebuie sÄƒ treci la categorisire completÄƒ.</p>\n  <h2>Ce trebuie sÄƒ mai pÄƒstrezi â€” documentele justificative</h2>\n  <p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC cere sÄƒ continui sÄƒ È›ii evidenÈ›e cum faci Ã®n mod normal pentru Self Assessment</a>. AdicÄƒ documente originale sau copii â€” bonuri, facturi, extrase bancare, payslipuri CIS.</p>\n  <p>Acestea trebuie pÄƒstrate <a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">cel puÈ›in cinci ani dupÄƒ termenul de 31 ianuarie</a> al anului fiscal relevant.</p>\n  <p>Legea nu spune \"fotografiazÄƒ fiecare bon\". Spune \"pÄƒstreazÄƒ bonul cinci ani\". Un bon termic de casÄƒ se decoloreazÄƒ Ã®n doi. Acesta este argumentul practic pentru fotografii â€” nu o cerinÈ›Äƒ legalÄƒ, ci singurul mod realist de a respecta una.</p>\n  <p><a href=\"/ro/mtd/do-i-have-to-photograph-receipts\">ExplicaÈ›ia completÄƒ a Ã®ntrebÄƒrii despre fotografiere este aici</a>.</p>\n  <h2>Ce evidenÈ›e sÄƒ È›ii pentru diferite tipuri de venituri</h2>\n  <p><strong>Venituri din activitate independentÄƒ:</strong> data È™i suma fiecÄƒrei plÄƒÈ›i primite, de la cine, facturi emise dacÄƒ este cazul.</p>\n  <p><strong>Cheltuieli din activitate:</strong> data, suma È™i pentru ce, document justificativ, categorii comune: materiale, combustibil, scule, echipamente, plÄƒÈ›i cÄƒtre subcontractori, asigurare, telefon.</p>\n  <p><strong>Venituri CIS:</strong> venitul brut (nu net dupÄƒ deducere), suma deducerii CIS â€” separat, nu ca cheltuialÄƒ, payslipul sau remittance notice. <a href=\"/ro/mtd/cis\">ExplicaÈ›ia completÄƒ a evidenÈ›elor CIS pentru MTD este aici</a>.</p>\n  <p><strong>Venituri din proprietÄƒÈ›i:</strong> chiria primitÄƒ â€” datÄƒ È™i sumÄƒ, cheltuieli cu marcarea restricted finance cost, toate proprietÄƒÈ›ile UK tratate ca o singurÄƒ afacere.</p>\n  <h2>CÃ¢t timp sÄƒ pÄƒstrezi evidenÈ›ele</h2>\n  <p>Minim 5 ani dupÄƒ 31 ianuarie urmÄƒtor anului fiscal, mai mult dacÄƒ HMRC deschide o anchetÄƒ. PÄƒstreazÄƒ tot.</p>\n  <h2>Rezumat practic</h2>\n  <p>ÃŽnregistreazÄƒ fiecare tranzacÈ›ie â€” datÄƒ, sumÄƒ, categorie â€” Ã®n software-ul tÄƒu MTD pe mÄƒsurÄƒ ce apare. PÄƒstreazÄƒ bonul sau factura din spate timp de cinci ani. AsigurÄƒ-te cÄƒ peste cinci ani se mai poate citi.</p>\n  <p>Pentru situaÈ›ia ta specificÄƒ, consultÄƒ contabilul. AceastÄƒ paginÄƒ acoperÄƒ regulile generale È™i nu este consultanÈ›Äƒ fiscalÄƒ.</p>\n  <h2>Unde se Ã®ncadreazÄƒ TidGo</h2>\n  <p><a href=\"/ro\">TidGo</a> colecteazÄƒ bonuri, dovezi de venit È™i payslipuri CIS pe mÄƒsurÄƒ ce apar â€” prin fotografie pe WhatsApp, email transmis mai departe sau Ã®n aplicaÈ›ie â€” È™i creeazÄƒ Ã®nregistrarea digitalÄƒ Ã®n spatele fiecÄƒruia. Confirmi detaliile Ã®nainte ca acestea sÄƒ fie de Ã®ncredere. Contabilul tÄƒu primeÈ™te evidenÈ›e curate È™i ordonate.</p>\n  <p>TidGo nu trimite nimic la HMRC. Se ocupÄƒ de stratul de colectare È™i organizare.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” Create digital records</a></li>\n      <li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Verificat: august 2026. VerificÄƒ pe GOV.UK dacÄƒ citeÈ™ti mai tÃ¢rziu.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "lt": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Kokius skaitmeninius Ä¯raÅ¡us privalau saugoti MTD tikslais?</h1>\n  <h2>Minimalus reikalavimas</h2>\n  <p>Kiekvienai operacijai <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC reikalauja uÅ¾registruoti</a>:</p>\n  <ul>\n    <li>Operacijos <strong>datÄ…</strong></li>\n    <li><strong>SumÄ…</strong></li>\n    <li><strong>KategorijÄ…</strong> â€” ar tai pajamos, ar iÅ¡laidos, ir kokio tipo</li>\n  </ul>\n  <p>Tai ir yra skaitmeninis Ä¯raÅ¡as. Trys informacijos vienetai, sukurti su MTD suderintoje programinÄ—je Ä¯rangoje, kuo arÄiau operacijos laiko.</p>\n  <p>Niekas kita neturi bÅ«ti skaitmeninio formato. Ne kvitÅ³ nuotraukos. Ne nuskaitytos sÄ…skaitos faktÅ«ros. Ne banko iÅ¡raÅ¡ai, Ä¯kelti Ä¯ programÄ—lÄ™. Pats operacijos Ä¯raÅ¡as â€” tie trys laukai â€” tai ir yra tai, ko Ä¯statymas reikalauja skaitmeninio formato.</p>\n  <h2>Supaprastinta kategorizacija, jei apyvarta maÅ¾esnÄ— nei Â£90 000</h2>\n  <p>Jei tavo apyvarta iÅ¡ savarankiÅ¡kos veiklos Å¡altinio yra <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">maÅ¾esnÄ— nei Â£90 000</a>, gali naudoti supaprastintÄ… kategorizacijÄ…. Tai reiÅ¡kia, kad tereikia uÅ¾registruoti, ar kiekviena operacija yra <strong>pajamos ar iÅ¡laidos</strong> â€” be subkategorijÅ³.</p>\n  <p>Nereikia atskirti kuro nuo Ä¯rankiÅ³ nuo medÅ¾iagÅ³. Tiesiog Ä¯eina ar iÅ¡eina.</p>\n  <p>Du iÅ¡imtini atvejai: nuomotojai su UK gyvenamosios paskirties nekilnojamuoju turtu turi papildomai paÅ¾ymÄ—ti, ar iÅ¡laidos yra restricted finance cost. Jei apyvarta pasieks Â£90 000 â€” reikÄ—s pereiti prie pilnos kategorizacijos.</p>\n  <h2>KÄ… vis dar privalai saugoti â€” pagrindÅ¾iantys dokumentai</h2>\n  <p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC reikalauja toliau tvarkyti apskaitas taip, kaip Ä¯prastai darai Self Assessment tikslais</a>. Tai reiÅ¡kia originalius dokumentus arba kopijas â€” kvitus, sÄ…skaitas faktÅ«ras, banko iÅ¡raÅ¡us, CIS payslipus.</p>\n  <p>Jie turi bÅ«ti saugomi <a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">bent penkerius metus po sausio 31 d. termino</a> atitinkamais mokestiniais metais.</p>\n  <p>Ä®statymas nesako \"nufotografuok kiekvienÄ… kvitÄ…\". Sako \"saugok kvitÄ… penkerius metus\". Terminis kasos kvitas iÅ¡blunka per dvejus. Tai praktinis argumentas fotografijai â€” ne teisinis reikalavimas, o vienintelis realus bÅ«das jÄ¯ Ä¯vykdyti.</p>\n  <p><a href=\"/lt/mtd/do-i-have-to-photograph-receipts\">IÅ¡samus fotografavimo klausimo paaiÅ¡kinimas Äia</a>.</p>\n  <h2>Kokius Ä¯raÅ¡us tvarkyti skirtingÅ³ pajamÅ³ tipams</h2>\n  <p><strong>Pajamos iÅ¡ savarankiÅ¡kos veiklos:</strong> kiekvieno gauto mokÄ—jimo data ir suma, iÅ¡ ko (kliento ar rangovos pavadinimas), iÅ¡raÅ¡ytos sÄ…skaitos faktÅ«ros, jei taikoma.</p>\n  <p><strong>IÅ¡laidos iÅ¡ veiklos:</strong> data, suma ir uÅ¾ kÄ…, pagrindÅ¾iantis dokumentas, Ä¯prastos kategorijos: medÅ¾iagos, kuras, Ä¯rankiai, Ä¯ranga, mokÄ—jimai subkontraktorjams, draudimas, telefonas.</p>\n  <p><strong>CIS pajamos:</strong> bruto uÅ¾mokestis (ne neto po atskaitymo), CIS atskaitymo suma â€” atskirai, ne kaip iÅ¡laida, payslipas arba remittance notice. <a href=\"/lt/mtd/cis\">IÅ¡samas CIS Ä¯raÅ¡Å³ MTD paaiÅ¡kinimas Äia</a>.</p>\n  <p><strong>Pajamos iÅ¡ nuomos:</strong> gauta nuoma â€” data ir suma, iÅ¡laidos su restricted finance cost Å¾ymÄ—jimu, visi UK objektai laikomi vienu verslu.</p>\n  <h2>Kiek laiko saugoti Ä¯raÅ¡us</h2>\n  <p>MaÅ¾iausiai 5 metus po sausio 31 d., einanÄio po mokestiniÅ³ metÅ³, ilgiau, jei HMRC pradeda tyrimus. Saugok viskÄ….</p>\n  <h2>PraktinÄ— santrauka</h2>\n  <p>Registruok kiekvienÄ… operacijÄ… â€” datÄ…, sumÄ…, kategorijÄ… â€” savo MTD programinÄ—je Ä¯rangoje iÅ¡ karto. Saugok uÅ¾ jos esantÄ¯ kvitÄ… ar sÄ…skaitÄ… penkerius metus. PasirÅ«pink, kad po penkeriÅ³ metÅ³ juos dar bÅ«tÅ³ galima perskaityti.</p>\n  <p>DÄ—l savo konkreÄios situacijos pasitark su buhalteriu. Å i puslapis apima bendras taisykles ir nÄ—ra mokesÄiÅ³ konsultacija.</p>\n  <h2>Kur Äia TidGo</h2>\n  <p><a href=\"/lt\">TidGo</a> renka kvitus, pajamÅ³ Ä¯rodymus ir CIS payslipus iÅ¡ karto â€” WhatsApp nuotrauka, persiuntimu el. paÅ¡tu arba programÄ—lÄ—je â€” ir kuria skaitmeninÄ¯ Ä¯raÅ¡Ä… uÅ¾ kiekvienÄ… iÅ¡ jÅ³. Patvirtini duomenis prieÅ¡ jiems tampant patikimais. Tavo buhalteris gauna tvarkingus, Å¡varius Ä¯raÅ¡us.</p>\n  <p>TidGo nieko nesiunÄia Ä¯ HMRC. RÅ«pinasi rinkimo ir tvarkymo sluoksniu.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax â€” Create digital records</a></li>\n      <li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Patikrinta: 2026 m. rugpjÅ«tis. Jei skaitai vÄ—liau, pasitikrink GOV.UK.*</p>\n  </div>\n  ${pageCta()}\n</article>"
};

function mtdDigitalRecordsArticle() {
  return (MTD_DIGITAL_RECORDS_ARTICLES[state.marketingLanguage] || MTD_DIGITAL_RECORDS_ARTICLES.en)
    .replaceAll('${mk("navMtd")}', mk("navMtd"))
    .replaceAll('${pageCta()}', pageCta());
}

const MTD_RECEIPTS_MYTH_ARTICLES = {
  en: `<h1>Receipt photos and MTD: what HMRC actually requires</h1>
<h2>The short answer</h2>
<p>No. HMRC does not require you to scan, photograph or upload individual receipts and invoices for Making Tax Digital.</p>
<p>What has to be digital is the <strong>record</strong> of each transaction: <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">the amount, the date, and the category</a>. That's it. Three pieces of information, created and stored in software that works with Making Tax Digital.</p>
<p>If plenty of apps have told you otherwise, that's worth knowing about â€” the companies selling scanning have an interest in the myth.</p>
<h2>But you still have to keep the receipts</h2>
<p>Here's the part the short answer leaves out, and it matters more than the headline.</p>
<p>HMRC guidance is explicit: you must continue <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">keeping records the way you normally do for Self Assessment</a>. You still need the original records or supporting documents â€” bank statements, invoices, receipts â€” that you used to prepare your return.</p>
<p>And you need to keep them for <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">at least five years after the 31 January submission deadline</a> for that tax year.</p>
<p>So the obligation isn't <em>photograph everything</em>. The obligation is <em>still have it in five years if HMRC asks</em>.</p>
<h2>Which is where paper becomes the problem</h2>
<p>A thermal till receipt from a builders' merchant is unreadable long before five years are up. Anyone who has emptied a bag of receipts in January knows what a two-year-old fuel receipt looks like: a blank slip of shiny paper.</p>
<p>Photographing a receipt isn't a legal requirement. It's just the only realistic way of meeting a legal requirement that lasts five years, using paper that lasts about two.</p>
<p>You can keep the paper in a folder if you prefer, and HMRC is perfectly happy with that. It just has to still say something when someone reads it.</p>
<h2>Is any of this new?</h2>
<p>No â€” and this is worth being clear about, because a lot of the noise around MTD implies otherwise.</p>
<p>The requirement to keep supporting documents for five years existed long before Making Tax Digital. Nothing about that has changed.</p>
<p>What MTD added is narrower than most people think: <strong>the record itself â€” amount, date, category â€” now has to be digital, and created in compatible software.</strong> The supporting document behind it can stay on paper.</p>
<h2>Good news most people haven't heard: you may not need categories at all</h2>
<p>Buried in the same guidance is something that makes this far less work than people expect.</p>
<p>If your turnover from a source of self-employment is <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">under Â£90,000</a>, you can use simpler categorisation. For a sole trader that means you only need to record <strong>whether a transaction is income or an expense</strong>. Not fuel, not tools, not office costs â€” just in or out.</p>
<p>Two things to watch. If you receive UK residential property income, you have to go one step further and record whether an expense is a <a href="https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change" target="_blank" rel="noopener">restricted finance cost</a>. And if your turnover later reaches Â£90,000, you'll need to categorise that source in full â€” including records from the start of that tax year â€” before you can send a quarterly update.</p>
<p>If you're unsure whether you'll cross the threshold, categorise in full from the start. Redoing a year of records is worse than doing it properly once.</p>
<h2>Two more rules worth knowing</h2>
<p><strong>Several businesses means several sets of records.</strong> If you have more than one sole trader business, each one needs <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">its own digital records and its own quarterly updates</a>. An electrician who also does driving instruction keeps two sets, not one.</p>
<p>Property works differently: all your UK properties count as a single UK property business, so no separate records per property. Foreign properties are the exception â€” those need separate records for each one.</p>
<p><strong>No copying and pasting between programs.</strong> Once a digital record has been sent to HMRC in a quarterly update, you <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">must not manually move it</a> â€” no retyping it into another cell or another program, no cut and paste. If you use more than one piece of software, they have to be digitally linked.</p>
<p>This one catches people who keep records in a spreadsheet and then type the totals into something else. That's exactly what the rule prohibits.</p>
<h2>So what should you actually do?</h2>
<p>Keep it simple:</p>
<p>Record the amount, the date and (if your turnover requires it) the category, as close to the transaction as you can. Keep the receipt or invoice behind it â€” paper or digital, your choice â€” for five years. Make sure it'll still be readable when that five years is up.</p>
<p>For anything specific to your own situation, ask your accountant or check GOV.UK. We don't give tax advice, and a website can't see your books.</p>
<h2>Where TidGo fits</h2>
<p><a href="/">TidGo</a> exists for the second half of that: receipts and income proof captured as they happen, so the evidence is still there in five years and your accountant isn't working from a bag of blank paper.</p>
<p>We're telling you HMRC doesn't require photos even though photos are what we do, because the honest version of the argument is the better one. The paper fades. That's reason enough.</p>
<p>TidGo doesn't submit anything to HMRC and it isn't tax advice. It collects and tidies records so that whoever does your submission has something clean to work from.</p>
<section class="article-sources">
<strong>Sources</strong>
<ul>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax â€” Create digital records</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/keeping-your-pay-tax-records" target="_blank" rel="noopener">Keeping your pay and tax records</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>
</ul>
<p><em>Last checked: August 2026, against guidance updated 16 July 2026. HMRC guidance changes â€” verify at the links above if you're reading this later.</em></p>
</section>`,
  pl: `<h1>ZdjÄ™cia paragonÃ³w i MTD: czego naprawdÄ™ wymaga HMRC</h1>
<h2>KrÃ³tka odpowiedÅº</h2>
<p>Nie. HMRC nie wymaga skanowania, fotografowania ani wgrywania pojedynczych paragonÃ³w i faktur na potrzeby Making Tax Digital.</p>
<p>Cyfrowy musi byÄ‡ <strong>zapis transakcji</strong>: <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">kwota, data i kategoria</a>. Tyle. Trzy informacje, utworzone i przechowywane w oprogramowaniu kompatybilnym z MTD.</p>
<p>JeÅ›li sporo aplikacji mÃ³wiÅ‚o Ci co innego â€” warto wiedzieÄ‡, Å¼e firmy sprzedajÄ…ce skanowanie majÄ… interes w podtrzymywaniu tego mitu.</p>
<h2>Ale paragony i tak musisz mieÄ‡</h2>
<p>I to jest ta czÄ™Å›Ä‡, ktÃ³rÄ… krÃ³tka odpowiedÅº pomija, a ktÃ³ra znaczy wiÄ™cej niÅ¼ sam nagÅ‚Ã³wek.</p>
<p>Wytyczne HMRC mÃ³wiÄ… wprost: musisz nadal <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">prowadziÄ‡ dokumentacjÄ™ tak jak dotÄ…d na potrzeby Self Assessment</a>. Nadal potrzebujesz oryginalnych dokumentÃ³w albo ich kopii â€” wyciÄ…gÃ³w bankowych, faktur, paragonÃ³w â€” na podstawie ktÃ³rych przygotowaÅ‚eÅ› rozliczenie.</p>
<p>I musisz je przechowywaÄ‡ przez <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">co najmniej piÄ™Ä‡ lat od terminu 31 stycznia</a> dla danego roku podatkowego.</p>
<p>Czyli obowiÄ…zek nie brzmi <em>sfotografuj wszystko</em>. Brzmi <em>miej to za piÄ™Ä‡ lat, gdyby HMRC zapytaÅ‚o</em>.</p>
<h2>I tu papier staje siÄ™ problemem</h2>
<p>Paragon z kasy termicznej ze skÅ‚adu budowlanego jest nieczytelny na dÅ‚ugo przed upÅ‚ywem piÄ™ciu lat. KaÅ¼dy, kto kiedyÅ› wysypaÅ‚ reklamÃ³wkÄ™ paragonÃ³w w styczniu, wie, jak wyglÄ…da dwuletni paragon za paliwo: bÅ‚yszczÄ…ca, pusta kartka.</p>
<p>Fotografowanie paragonu nie jest wymogiem prawnym. Jest po prostu jedynym realnym sposobem speÅ‚nienia wymogu, ktÃ³ry trwa piÄ™Ä‡ lat, przy papierze, ktÃ³ry wytrzymuje dwa.</p>
<p>MoÅ¼esz trzymaÄ‡ papier w segregatorze, jeÅ›li wolisz â€” HMRC nie ma z tym problemu. Musi tylko coÅ› na nim byÄ‡ widaÄ‡, kiedy ktoÅ› siÄ™gnie.</p>
<h2>Czy to coÅ› nowego?</h2>
<p>Nie â€” i warto to powiedzieÄ‡ jasno, bo szum wokÃ³Å‚ MTD sugeruje coÅ› innego.</p>
<p>ObowiÄ…zek przechowywania dokumentÃ³w przez piÄ™Ä‡ lat istniaÅ‚ na dÅ‚ugo przed Making Tax Digital. W tej kwestii nic siÄ™ nie zmieniÅ‚o.</p>
<p>MTD dodaÅ‚o coÅ› wÄ™Å¼szego, niÅ¼ wiÄ™kszoÅ›Ä‡ ludzi sÄ…dzi: <strong>sam zapis â€” kwota, data, kategoria â€” musi byÄ‡ teraz cyfrowy i utworzony w kompatybilnym oprogramowaniu.</strong> Dokument ÅºrÃ³dÅ‚owy moÅ¼e zostaÄ‡ papierowy.</p>
<h2>Dobra wiadomoÅ›Ä‡, o ktÃ³rej maÅ‚o kto sÅ‚yszaÅ‚: kategorie mogÄ… nie byÄ‡ potrzebne</h2>
<p>W tych samych wytycznych jest coÅ›, co czyni caÅ‚Ä… sprawÄ™ znacznie prostszÄ…, niÅ¼ ludzie siÄ™ spodziewajÄ….</p>
<p>JeÅ›li obrÃ³t z Twojej dziaÅ‚alnoÅ›ci nie przekracza <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Â£90 000</a>, moÅ¼esz korzystaÄ‡ z uproszczonej kategoryzacji. Dla sole tradera oznacza to, Å¼e wystarczy zapisaÄ‡, <strong>czy transakcja to przychÃ³d, czy wydatek</strong>. Nie paliwo, nie narzÄ™dzia, nie koszty biura â€” po prostu do Å›rodka albo na zewnÄ…trz.</p>
<p>Dwie rzeczy do pilnowania. JeÅ›li masz przychÃ³d z wynajmu nieruchomoÅ›ci mieszkalnej w UK, musisz dodatkowo oznaczyÄ‡, czy wydatek to <a href="https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change" target="_blank" rel="noopener">restricted finance cost</a>. A jeÅ›li obrÃ³t pÃ³Åºniej osiÄ…gnie Â£90 000, trzeba bÄ™dzie skategoryzowaÄ‡ to ÅºrÃ³dÅ‚o w peÅ‚ni â€” Å‚Ä…cznie z rekordami od poczÄ…tku danego roku podatkowego â€” zanim wyÅ›lesz raport kwartalny.</p>
<p>JeÅ›li nie masz pewnoÅ›ci, czy przekroczysz prÃ³g, kategoryzuj od poczÄ…tku. Poprawianie roku wstecz jest gorsze niÅ¼ zrobienie tego porzÄ…dnie za pierwszym razem.</p>
<h2>Dwie zasady, o ktÃ³rych warto wiedzieÄ‡</h2>
<p><strong>Kilka dziaÅ‚alnoÅ›ci to kilka zestawÃ³w rekordÃ³w.</strong> JeÅ›li prowadzisz wiÄ™cej niÅ¼ jednÄ… dziaÅ‚alnoÅ›Ä‡ jako sole trader, kaÅ¼da potrzebuje <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">wÅ‚asnych rekordÃ³w cyfrowych i wÅ‚asnych raportÃ³w kwartalnych</a>. Elektryk, ktÃ³ry dodatkowo uczy jazdy, prowadzi dwa zestawy, nie jeden.</p>
<p>Z nieruchomoÅ›ciami jest inaczej: wszystkie Twoje nieruchomoÅ›ci w UK liczÄ… siÄ™ jako jeden â€žUK property business", wiÄ™c nie ma osobnych rekordÃ³w per mieszkanie. WyjÄ…tkiem sÄ… nieruchomoÅ›ci zagraniczne â€” dla kaÅ¼dej trzeba prowadziÄ‡ osobne rekordy.</p>
<p><strong>Zakaz kopiuj-wklej miÄ™dzy programami.</strong> Kiedy rekord cyfrowy zostaÅ‚ juÅ¼ wysÅ‚any do HMRC w raporcie kwartalnym, <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">nie wolno przenosiÄ‡ go rÄ™cznie</a> â€” ani przepisujÄ…c do innej komÃ³rki czy programu, ani przez kopiuj-wklej. JeÅ›li uÅ¼ywasz wiÄ™cej niÅ¼ jednego programu, muszÄ… byÄ‡ poÅ‚Ä…czone cyfrowo.</p>
<p>Ta zasada Å‚apie ludzi, ktÃ³rzy prowadzÄ… rekordy w arkuszu, a potem przepisujÄ… sumy gdzie indziej. To jest dokÅ‚adnie to, czego przepis zabrania.</p>
<h2>Co wiÄ™c realnie robiÄ‡?</h2>
<p>Prosto:</p>
<p>Zapisz kwotÄ™, datÄ™ i â€” jeÅ›li TwÃ³j obrÃ³t tego wymaga â€” kategoriÄ™, moÅ¼liwie blisko daty transakcji. Zachowaj paragon albo fakturÄ™, ktÃ³ra za tym stoi â€” papierowo albo cyfrowo, TwÃ³j wybÃ³r â€” przez piÄ™Ä‡ lat. I zadbaj, Å¼eby po tych piÄ™ciu latach daÅ‚o siÄ™ to jeszcze odczytaÄ‡.</p>
<p>W sprawach dotyczÄ…cych Twojej konkretnej sytuacji zapytaj ksiÄ™gowego albo sprawdÅº GOV.UK. My nie udzielamy porad podatkowych, a strona internetowa nie zajrzy Ci w papiery.</p>
<h2>Gdzie w tym wszystkim TidGo</h2>
<p><a href="/pl">TidGo</a> istnieje dla tej drugiej poÅ‚owy: paragony i dowody przychodu zbierane na bieÅ¼Ä…co, Å¼eby dowÃ³d nadal istniaÅ‚ za piÄ™Ä‡ lat, a ksiÄ™gowy nie pracowaÅ‚ na torbie pustych kartek.</p>
<p>MÃ³wimy Ci, Å¼e HMRC nie wymaga zdjÄ™Ä‡, mimo Å¼e zdjÄ™cia to nasza robota â€” bo uczciwa wersja tego argumentu jest lepsza. Papier blaknie. To wystarczajÄ…cy powÃ³d.</p>
<p>TidGo niczego nie wysyÅ‚a do HMRC i nie jest poradÄ… podatkowÄ…. Zbiera i porzÄ…dkuje rekordy, Å¼eby ten, kto robi Twoje rozliczenie, miaÅ‚ z czego pracowaÄ‡.</p>
<h3>Å¹rÃ³dÅ‚a</h3>
<ul>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax â€” Create digital records</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/keeping-your-pay-tax-records" target="_blank" rel="noopener">Keeping your pay and tax records</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>
</ul>
<p><em>Sprawdzone: sierpieÅ„ 2026, wobec wytycznych zaktualizowanych 16 lipca 2026. Wytyczne HMRC siÄ™ zmieniajÄ… â€” jeÅ›li czytasz to pÃ³Åºniej, zweryfikuj pod powyÅ¼szymi linkami.</em></p>`,
  ro: `<h1>Poze cu bonuri È™i MTD: ce cere de fapt HMRC</h1>
<h2>RÄƒspunsul scurt</h2>
<p>Nu. HMRC nu cere sÄƒ scanezi, sÄƒ fotografiezi sau sÄƒ Ã®ncarci bonuri È™i facturi individuale pentru Making Tax Digital.</p>
<p>Ce trebuie sÄƒ fie digital este <strong>Ã®nregistrarea tranzacÈ›iei</strong>: <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">suma, data È™i categoria</a>. AtÃ¢t. Trei informaÈ›ii, create È™i pÄƒstrate Ã®ntr-un software compatibil cu Making Tax Digital.</p>
<p>DacÄƒ multe aplicaÈ›ii È›i-au spus altceva, meritÄƒ sÄƒ È™tii: firmele care vÃ¢nd scanare au un interes Ã®n menÈ›inerea acestui mit.</p>
<h2>Dar bonurile tot trebuie pÄƒstrate</h2>
<p>Aici e partea pe care rÄƒspunsul scurt o omite È™i care conteazÄƒ mai mult decÃ¢t titlul.</p>
<p>Ghidul HMRC este explicit: trebuie sÄƒ continui <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">sÄƒ È›ii evidenÈ›a aÈ™a cum o faci Ã®n mod normal pentru Self Assessment</a>. Ai Ã®n continuare nevoie de documentele originale sau de copii ale lor â€” extrase bancare, facturi, bonuri â€” pe baza cÄƒrora È›i-ai pregÄƒtit declaraÈ›ia.</p>
<p>È˜i trebuie sÄƒ le pÄƒstrezi <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">cel puÈ›in cinci ani de la termenul de 31 ianuarie</a> al anului fiscal respectiv.</p>
<p>Deci obligaÈ›ia nu este <em>fotografiazÄƒ tot</em>. ObligaÈ›ia este <em>sÄƒ le mai ai peste cinci ani, dacÄƒ HMRC Ã®ntreabÄƒ</em>.</p>
<h2>È˜i aici hÃ¢rtia devine problema</h2>
<p>Un bon de casÄƒ termic de la un depozit de materiale devine ilizibil cu mult Ã®nainte sÄƒ treacÄƒ cinci ani. Oricine a rÄƒsturnat vreodatÄƒ o pungÄƒ de bonuri Ã®n ianuarie È™tie cum aratÄƒ un bon de combustibil de doi ani: o hÃ¢rtie lucioasÄƒ, goalÄƒ.</p>
<p>Fotografierea bonului nu este o cerinÈ›Äƒ legalÄƒ. Este pur È™i simplu singura metodÄƒ realistÄƒ de a respecta o cerinÈ›Äƒ care È›ine cinci ani, cu o hÃ¢rtie care rezistÄƒ vreo doi.</p>
<p>PoÈ›i È›ine hÃ¢rtiile Ã®ntr-un dosar, dacÄƒ preferi â€” HMRC nu are nimic Ã®mpotrivÄƒ. Trebuie doar sÄƒ se mai vadÄƒ ceva pe ele cÃ¢nd cineva le citeÈ™te.</p>
<h2>Este ceva nou?</h2>
<p>Nu â€” È™i meritÄƒ spus clar, pentru cÄƒ zgomotul din jurul MTD sugereazÄƒ altceva.</p>
<p>ObligaÈ›ia de a pÄƒstra documentele justificative cinci ani exista cu mult Ã®nainte de Making Tax Digital. Nimic nu s-a schimbat aici.</p>
<p>Ce a adÄƒugat MTD este mai Ã®ngust decÃ¢t cred majoritatea: <strong>Ã®nregistrarea Ã®n sine â€” sumÄƒ, datÄƒ, categorie â€” trebuie acum sÄƒ fie digitalÄƒ È™i creatÄƒ Ã®ntr-un software compatibil.</strong> Documentul justificativ din spate poate rÄƒmÃ¢ne pe hÃ¢rtie.</p>
<h2>Vestea bunÄƒ de care puÈ›ini au auzit: s-ar putea sÄƒ nu ai nevoie de categorii</h2>
<p>ÃŽn acelaÈ™i ghid se aflÄƒ ceva ce face totul mult mai simplu decÃ¢t se aÈ™teaptÄƒ lumea.</p>
<p>DacÄƒ cifra de afaceri dintr-o sursÄƒ de activitate independentÄƒ este sub <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Â£90.000</a>, poÈ›i folosi categorisirea simplificatÄƒ. Pentru un sole trader asta Ã®nseamnÄƒ cÄƒ trebuie doar sÄƒ Ã®nregistrezi <strong>dacÄƒ o tranzacÈ›ie este venit sau cheltuialÄƒ</strong>. Nu combustibil, nu scule, nu costuri de birou â€” doar intrare sau ieÈ™ire.</p>
<p>DouÄƒ lucruri de urmÄƒrit. DacÄƒ ai venituri din Ã®nchirierea unei locuinÈ›e Ã®n UK, trebuie sÄƒ mergi un pas mai departe È™i sÄƒ Ã®nregistrezi dacÄƒ o cheltuialÄƒ este <a href="https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change" target="_blank" rel="noopener">restricted finance cost</a>. Iar dacÄƒ cifra de afaceri ajunge ulterior la Â£90.000, va trebui sÄƒ categoriseÈ™ti complet acea sursÄƒ â€” inclusiv Ã®nregistrÄƒrile de la Ã®nceputul acelui an fiscal â€” Ã®nainte de a putea trimite o raportare trimestrialÄƒ.</p>
<p>DacÄƒ nu eÈ™ti sigur cÄƒ vei depÄƒÈ™i pragul, categoriseÈ™te complet de la Ã®nceput. Refacerea unui an Ã®ntreg de Ã®nregistrÄƒri e mai rea decÃ¢t sÄƒ faci lucrurile ca lumea din prima.</p>
<h2>ÃŽncÄƒ douÄƒ reguli de È™tiut</h2>
<p><strong>Mai multe activitÄƒÈ›i Ã®nseamnÄƒ mai multe seturi de Ã®nregistrÄƒri.</strong> DacÄƒ ai mai mult de o activitate ca sole trader, fiecare are nevoie de <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">propriile Ã®nregistrÄƒri digitale È™i propriile raportÄƒri trimestriale</a>. Un electrician care predÄƒ È™i È™coala de È™oferi È›ine douÄƒ seturi, nu unul.</p>
<p>Cu proprietÄƒÈ›ile e altfel: toate proprietÄƒÈ›ile tale din UK conteazÄƒ ca o singurÄƒ â€žUK property business", deci nu ai nevoie de Ã®nregistrÄƒri separate pentru fiecare. ExcepÈ›ia o fac proprietÄƒÈ›ile din strÄƒinÄƒtate â€” pentru fiecare sunt necesare Ã®nregistrÄƒri separate.</p>
<p><strong>FÄƒrÄƒ copy-paste Ã®ntre programe.</strong> DupÄƒ ce o Ã®nregistrare digitalÄƒ a fost trimisÄƒ la HMRC Ã®ntr-o raportare trimestrialÄƒ, <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">nu ai voie sÄƒ o muÈ›i manual</a> â€” nici rescriind-o Ã®n altÄƒ celulÄƒ sau alt program, nici prin copy-paste. DacÄƒ foloseÈ™ti mai multe programe, ele trebuie legate digital.</p>
<p>Regula asta Ã®i prinde pe cei care È›in evidenÈ›a Ã®ntr-un spreadsheet È™i apoi tasteazÄƒ totalurile Ã®n altÄƒ parte. Exact asta interzice regula.</p>
<h2>Ce ai de fÄƒcut, concret?</h2>
<p>Simplu:</p>
<p>ÃŽnregistreazÄƒ suma, data È™i â€” dacÄƒ cifra ta de afaceri o cere â€” categoria, cÃ¢t mai aproape de data tranzacÈ›iei. PÄƒstreazÄƒ bonul sau factura din spate â€” pe hÃ¢rtie sau digital, cum vrei â€” timp de cinci ani. È˜i asigurÄƒ-te cÄƒ peste cinci ani se mai poate citi.</p>
<p>Pentru orice È›ine de situaÈ›ia ta concretÄƒ, Ã®ntreabÄƒ-È›i contabilul sau verificÄƒ GOV.UK. Noi nu oferim consultanÈ›Äƒ fiscalÄƒ, iar un site nu Ã®È›i poate vedea actele.</p>
<h2>Unde se Ã®ncadreazÄƒ TidGo</h2>
<p><a href="/ro">TidGo</a> existÄƒ pentru a doua jumÄƒtate: bonuri È™i dovezi de venit strÃ¢nse pe parcurs, ca dovada sÄƒ existe È™i peste cinci ani, iar contabilul sÄƒ nu lucreze cu o pungÄƒ de hÃ¢rtii goale.</p>
<p>ÃŽÈ›i spunem cÄƒ HMRC nu cere fotografii, deÈ™i fotografiile sunt exact ce facem noi â€” pentru cÄƒ versiunea onestÄƒ a argumentului este cea mai bunÄƒ. HÃ¢rtia se decoloreazÄƒ. AtÃ¢t e de ajuns.</p>
<p>TidGo nu trimite nimic la HMRC È™i nu este consultanÈ›Äƒ fiscalÄƒ. StrÃ¢nge È™i ordoneazÄƒ Ã®nregistrÄƒrile, ca cel care face raportarea sÄƒ aibÄƒ ceva curat de la care sÄƒ porneascÄƒ.</p>
<section class="article-sources">
<strong>Surse</strong>
<ul>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax â€” Create digital records</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/keeping-your-pay-tax-records" target="_blank" rel="noopener">Keeping your pay and tax records</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>
</ul>
<p><em>Verificat: august 2026, faÈ›Äƒ de ghidul actualizat la 16 iulie 2026. Ghidurile HMRC se schimbÄƒ â€” dacÄƒ citeÈ™ti mai tÃ¢rziu, verificÄƒ la linkurile de mai sus.</em></p>
</section>`,
  lt: `<h1>KvitÅ³ nuotraukos ir MTD: ko iÅ¡ tikrÅ³jÅ³ reikalauja HMRC</h1>
<h2>Trumpas atsakymas</h2>
<p>Ne. HMRC nereikalauja skenuoti, fotografuoti ar Ä¯kelti atskirÅ³ kvitÅ³ ir sÄ…skaitÅ³ dÄ—l Making Tax Digital.</p>
<p>Skaitmeninis turi bÅ«ti <strong>sandorio Ä¯raÅ¡as</strong>: <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">suma, data ir kategorija</a>. Tiek. Trys duomenys, sukurti ir saugomi su MTD suderinamoje programinÄ—je Ä¯rangoje.</p>
<p>Jei nemaÅ¾ai programÄ—liÅ³ tau sakÄ— kitaip â€” verta Å¾inoti, kad skenavimÄ… parduodanÄios Ä¯monÄ—s yra suinteresuotos Å¡iuo mitu.</p>
<h2>Bet kvitus vis tiek privalai turÄ—ti</h2>
<p>Å tai dalis, kuriÄ… trumpas atsakymas praleidÅ¾ia ir kuri svarbesnÄ— uÅ¾ antraÅ¡tÄ™.</p>
<p>HMRC gairÄ—s aiÅ¡kios: privalai toliau <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">tvarkyti apskaitÄ… taip, kaip Ä¯prastai darai Self Assessment tikslais</a>. Tau vis tiek reikia originaliÅ³ dokumentÅ³ arba jÅ³ kopijÅ³ â€” banko iÅ¡raÅ¡Å³, sÄ…skaitÅ³, kvitÅ³ â€” pagal kuriuos parengei deklaracijÄ….</p>
<p>Ir privalai juos saugoti <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">bent penkerius metus po tÅ³ mokestiniÅ³ metÅ³ sausio 31 d. termino</a>.</p>
<p>Taigi prievolÄ— yra ne <em>nufotografuok viskÄ…</em>. PrievolÄ— yra <em>turÄ—k tai po penkeriÅ³ metÅ³, jei HMRC paklaus</em>.</p>
<h2>Ir Äia popierius tampa problema</h2>
<p>Terminis kasos kvitas iÅ¡ statybiniÅ³ medÅ¾iagÅ³ sandÄ—lio tampa neÄ¯skaitomas gerokai anksÄiau nei praeina penkeri metai. Kiekvienas, kas kada nors sausÄ¯ iÅ¡vertÄ— maiÅ¡Ä… kvitÅ³, Å¾ino, kaip atrodo dvejÅ³ metÅ³ senumo kuro kvitas: blizgus, tuÅ¡Äias lapelis.</p>
<p>Kvito fotografavimas nÄ—ra teisinis reikalavimas. Tai tiesiog vienintelis realus bÅ«das Ä¯vykdyti penkerius metus galiojantÄ¯ reikalavimÄ… naudojant popieriÅ³, kuris iÅ¡silaiko maÅ¾daug dvejus.</p>
<p>PopieriÅ³ gali laikyti segtuve, jei taip patogiau â€” HMRC tam neprieÅ¡tarauja. Tik ant jo dar turi kaÅ¾kas matytis, kai kas nors Ä¯ jÄ¯ paÅ¾iÅ«rÄ—s.</p>
<h2>Ar tai kas nors nauja?</h2>
<p>Ne â€” ir tai verta pasakyti aiÅ¡kiai, nes triukÅ¡mas aplink MTD leidÅ¾ia manyti kitaip.</p>
<p>PrievolÄ— saugoti pagrindÅ¾ianÄius dokumentus penkerius metus egzistavo gerokai anksÄiau nei Making Tax Digital. Å ioje vietoje niekas nepasikeitÄ—.</p>
<p>MTD pridÄ—jo kai kÄ… siauresnio, nei dauguma mano: <strong>pats Ä¯raÅ¡as â€” suma, data, kategorija â€” dabar turi bÅ«ti skaitmeninis ir sukurtas suderinamoje programinÄ—je Ä¯rangoje.</strong> UÅ¾ jo esantis dokumentas gali likti popierinis.</p>
<h2>Gera Å¾inia, apie kuriÄ… maÅ¾ai kas girdÄ—jo: kategorijÅ³ gali ir neprireikti</h2>
<p>Tose paÄiose gairÄ—se yra kai kas, kas visÄ… reikalÄ… padaro kur kas paprastesnÄ¯, nei Å¾monÄ—s tikisi.</p>
<p>Jei tavo savarankiÅ¡kos veiklos Å¡altinio apyvarta maÅ¾esnÄ— nei <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Â£90 000</a>, gali naudoti supaprastintÄ… kategorizavimÄ…. Sole trader atveju tai reiÅ¡kia, kad tereikia uÅ¾fiksuoti, <strong>ar sandoris yra pajamos, ar iÅ¡laidos</strong>. Ne kuras, ne Ä¯rankiai, ne biuro iÅ¡laidos â€” tiesiog Ä¯ vidÅ³ arba Ä¯ iÅ¡orÄ™.</p>
<p>Du dalykai, kuriuos verta stebÄ—ti. Jei gauni pajamÅ³ iÅ¡ gyvenamosios paskirties nuomos UK, turi Å¾engti dar vienÄ… Å¾ingsnÄ¯ ir nurodyti, ar iÅ¡laida yra <a href="https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change" target="_blank" rel="noopener">restricted finance cost</a>. O jei apyvarta vÄ—liau pasieks Â£90 000, tÄ… Å¡altinÄ¯ reikÄ—s sukategorizuoti visa apimtimi â€” Ä¯skaitant Ä¯raÅ¡us nuo tÅ³ mokestiniÅ³ metÅ³ pradÅ¾ios â€” prieÅ¡ siunÄiant ketvirtinÄ™ ataskaitÄ….</p>
<p>Jei nesi tikras, ar perÅ¾engsi ribÄ…, kategorizuok iÅ¡ karto pilnai. Perdaryti metÅ³ Ä¯raÅ¡us blogiau, nei vienÄ… kartÄ… padaryti kaip reikia.</p>
<h2>Dar dvi taisyklÄ—s, kurias verta Å¾inoti</h2>
<p><strong>Kelios veiklos â€” keli Ä¯raÅ¡Å³ rinkiniai.</strong> Jei turi daugiau nei vienÄ… sole trader veiklÄ…, kiekvienai reikia <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">savÅ³ skaitmeniniÅ³ Ä¯raÅ¡Å³ ir savÅ³ ketvirtiniÅ³ ataskaitÅ³</a>. Elektrikas, kuris dar moko vairuoti, veda du rinkinius, ne vienÄ….</p>
<p>Su nekilnojamuoju turtu kitaip: visi tavo objektai UK laikomi viena â€žUK property business", tad atskirÅ³ Ä¯raÅ¡Å³ kiekvienam nereikia. IÅ¡imtis â€” uÅ¾sienyje esantis turtas: kiekvienam objektui reikia atskirÅ³ Ä¯raÅ¡Å³.</p>
<p><strong>Jokio kopijuoti-Ä¯klijuoti tarp programÅ³.</strong> Kai skaitmeninis Ä¯raÅ¡as jau iÅ¡siÅ³stas HMRC ketvirtinÄ—je ataskaitoje, <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">negalima jo perkelti rankiniu bÅ«du</a> â€” nei perraÅ¡ant Ä¯ kitÄ… langelÄ¯ ar kitÄ… programÄ…, nei kopijuojant ir Ä¯klijuojant. Jei naudoji daugiau nei vienÄ… programÄ…, jos turi bÅ«ti susietos skaitmeniÅ¡kai.</p>
<p>Å i taisyklÄ— pagauna tuos, kurie veda Ä¯raÅ¡us skaiÄiuoklÄ—je, o paskui sumas surenka kitur. BÅ«tent tai ir draudÅ¾iama.</p>
<h2>Tai kÄ… realiai daryti?</h2>
<p>Paprastai:</p>
<p>UÅ¾fiksuok sumÄ…, datÄ… ir â€” jei to reikalauja tavo apyvarta â€” kategorijÄ… kuo arÄiau sandorio datos. IÅ¡saugok uÅ¾ jo esantÄ¯ kvitÄ… ar sÄ…skaitÄ… â€” popieriuje ar skaitmeniÅ¡kai, tavo pasirinkimas â€” penkerius metus. Ir pasirÅ«pink, kad po tÅ³ penkeriÅ³ metÅ³ dar bÅ«tÅ³ Ä¯manoma perskaityti.</p>
<p>DÄ—l visko, kas susijÄ™ su tavo konkreÄia situacija, pasitark su buhalteriu arba patikrink GOV.UK. Mes mokesÄiÅ³ konsultacijÅ³ neteikiame, o interneto svetainÄ— Ä¯ tavo dokumentus nepaÅ¾iÅ«rÄ—s.</p>
<h2>Kur Äia TidGo</h2>
<p><a href="/lt">TidGo</a> egzistuoja dÄ—l antrosios dalies: kvitai ir pajamÅ³ Ä¯rodymai renkami eigoje, kad Ä¯rodymas dar egzistuotÅ³ po penkeriÅ³ metÅ³, o buhalteris nedirbtÅ³ su maiÅ¡u tuÅ¡ÄiÅ³ lapeliÅ³.</p>
<p>Sakome tau, kad HMRC nereikalauja nuotraukÅ³, nors nuotraukos â€” bÅ«tent tai, kÄ… mes darome. Nes sÄ…Å¾ininga argumento versija yra geresnÄ—. Popierius iÅ¡blunka. To pakanka.</p>
<p>TidGo nieko nesiunÄia Ä¯ HMRC ir nÄ—ra mokesÄiÅ³ konsultacija. Ji surenka ir sutvarko Ä¯raÅ¡us, kad tas, kas teiks tavo ataskaitas, turÄ—tÅ³ nuo ko pradÄ—ti.</p>
<h3>Å altiniai</h3>
<ul>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax â€” Create digital records</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/keeping-your-pay-tax-records" target="_blank" rel="noopener">Keeping your pay and tax records</a> â€” GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> â€” GOV.UK</li>
</ul>
<p><em>Patikrinta: 2026 m. rugpjÅ«tis, pagal 2026 m. liepos 16 d. atnaujintas gaires. HMRC gairÄ—s keiÄiasi â€” jei skaitai vÄ—liau, pasitikrink pagal nuorodas aukÅ¡Äiau.</em></p>`
};

function mtdReceiptsMythArticle() {
  const html = MTD_RECEIPTS_MYTH_ARTICLES[state.marketingLanguage] || MTD_RECEIPTS_MYTH_ARTICLES.en;
  return `<article class="marketing-page-card marketing-article"><span class="eyebrow">${mk("navMtd")}</span>${html}${pageCta()}</article>`;
}

const MTD_CIS_MYTHS_ARTICLES = {
  en: {
    title: "Common Tax and MTD myths for UK tradespeople: what many accounting apps get wrong about CIS",
    lead: "Working under the Construction Industry Scheme? Do not let overcomplicated software create the wrong records before Making Tax Digital rules apply.",
    html: `
      <h2>Why this matters</h2>
      <p>When you work on site or on the road, the tax system is already heavy enough. With Making Tax Digital for Income Tax on the way, many apps are selling features that sound useful but do not always match how CIS subcontractors actually work.</p>
      <p>The danger is simple: if software pushes you toward the wrong record-keeping habit, your accountant has to untangle it later. CIS needs clean records, not a fake corporate workflow.</p>

      <h2>Myth 1: you need to send formal sales invoices to your main contractor</h2>
      <p>Some accounting apps push every self-employed person toward invoice creation. In real CIS work, that is often not how the paperwork arrives.</p>
      <p>If you are a CIS subcontractor working under a main contractor, the contractor normally calculates your pay, deducts CIS tax at source, and gives you a CIS payment and deduction statement or remittance note. That document matters. It proves the gross amount, the deduction and the net payment.</p>
      <p>The trap is paying for an invoicing suite when what you really need is a fast way to store remittance slips, payslips, fuel receipts, tool receipts and materials proof where your accountant can find them.</p>

      <h2>Myth 2: MTD quarterly records should use net CIS income</h2>
      <p>This is the expensive mistake. For MTD records, your income is the gross amount before CIS tax is deducted. If the statement shows &pound;2,000 gross, &pound;400 CIS deducted and &pound;1,600 paid to you, the income record starts from &pound;2,000, not &pound;1,600.</p>
      <p>The CIS deduction is tax already suffered. It is not an ordinary business expense and it should not quietly reduce your turnover in the records used for quarterly updates.</p>
      <p>HMRC already receives CIS deduction information from contractors. Your accountant can reconcile those figures at year end. TidGo's job is to help keep the gross income proof and the deduction evidence together, so the person doing the submission has clean records to work from.</p>

      <h2>Myth 3: you need a big accounting suite to be ready for MTD</h2>
      <p>MTD does not mean every tradesperson needs a dashboard full of stock tracking, customer portals and invoice templates. The practical first layer is simpler: keep digital records of income, expenses and supporting proof.</p>
      <p>For many CIS subcontractors, that means fuel, parking, tools, materials, phone bills, CIS statements and income proof. If those records are tidy, your accountant or MTD-compatible software can do the formal work with less mess.</p>

      <h2>Where TidGo fits</h2>
      <p>TidGo is built around the paperwork people actually have: WhatsApp receipt photos, email payslips, remittance notes, manual income entries and clean English PDF/CSV exports for the accountant.</p>
      <p>It does not replace your accountant and it does not promise to calculate your final CIS tax position for you. It helps capture the right evidence in the right shape: gross income recorded clearly, CIS deduction proof kept beside it, and expenses stored as they happen.</p>
      <p>For the deeper rule explanation, read the <a href="__CIS_HREF__">MTD for CIS subcontractors guide</a>, the <a href="__QUALIFYING_HREF__">qualifying income guide</a> and the <a href="__DIGITAL_RECORDS_HREF__">digital records guide</a>.</p>
    `,
    sourcesChecked: "Last checked: August 2026. Verify at GOV.UK if reading later."
  },
  pl: {
    title: "Mity CIS i MTD: co wiele aplikacji ksiegowych robi zle",
    lead: "Pracujesz pod Construction Industry Scheme? Nie pozwol, zeby zbyt skomplikowany program pomieszal Ci rekordy zanim MTD zacznie dotyczyc Twojej pracy.",
    html: `
      <h2>Dlaczego to ma znaczenie</h2>
      <p>CIS nie dziala tak samo jak zwykla mala firma wysylajaca faktury klientom. Jezeli aplikacja wymusza zly sposob zapisu, ksiÄ™gowy musi to pozniej odkrecaÄ‡.</p>

      <h2>Mit 1: musisz wystawiac formalne faktury main contractorowi</h2>
      <p>W wielu przypadkach CIS subcontractor nie pracuje jak klasyczna firma B2B z pelnym procesem fakturowania. Main contractor wylicza zaplate, potraca CIS u zrodla i wystawia CIS payment and deduction statement albo remittance note.</p>
      <p>To ten dokument jest kluczowy. Pokazuje kwote brutto, potracenie CIS i kwote netto wyplacona Tobie. Dlatego praktycznie potrzebujesz prostego miejsca na payslipy, remittance slips, paragony za paliwo, narzedzia i materialy, a nie wielkiego systemu do fakturowania po kazdej zmianie.</p>

      <h2>Mit 2: do MTD wpisuje sie dochod netto po CIS</h2>
      <p>To najgrozniejsza pomylka. Do rekordow MTD przychodem jest kwota brutto przed potraceniem CIS. Jezeli dokument pokazuje &pound;2,000 brutto, &pound;400 potracenia CIS i &pound;1,600 wyplaty, rekord przychodu zaczyna sie od &pound;2,000, nie od &pound;1,600.</p>
      <p>Potracenie CIS to podatek zaplacony z gory. Nie jest zwyklym kosztem biznesowym i nie powinien po cichu zmniejszac obrotu w rekordach pod kwartalne aktualizacje.</p>
      <p>HMRC dostaje informacje o potraceniach CIS od contractorow. KsieÌ¨gowy moze to uzgodnic na koniec roku. TidGo pomaga trzymac dowod przychodu brutto i informacje o potraceniu razem, zeby dane byly czyste.</p>

      <h2>Mit 3: potrzebujesz drogiego kombajnu ksiegowego</h2>
      <p>MTD nie oznacza, ze kazdy tradesperson potrzebuje panelu ze stock tracking, customer portal i rozbudowanymi szablonami faktur. Pierwsza praktyczna warstwa jest prostsza: cyfrowe rekordy przychodow, wydatkow i dowodow.</p>
      <p>Dla wielu osob w CIS oznacza to paliwo, parking, narzedzia, materialy, telefon, CIS statements i dowody przychodu. Jezeli to jest uporzadkowane, ksiÄ™gowy albo software MTD ma z czego pracowac.</p>

      <h2>Gdzie pasuje TidGo</h2>
      <p>TidGo jest zbudowane pod dokumenty, ktore ludzie realnie maja: zdjecia paragonow z WhatsAppa, payslipy z maila, remittance notes, reczne wpisy przychodu i czyste PDF/CSV po angielsku dla ksiegowego.</p>
      <p>TidGo nie zastepuje ksiegowego i nie obiecuje automatycznego wyliczania koncowego podatku CIS. Pomaga zapisac wlasciwy dowod we wlasciwej formie: przychod brutto jasno zapisany, potracenie CIS obok jako informacja i wydatki zebrane na biezaco.</p>
      <p>Wiecej szczegolow znajdziesz w <a href="__CIS_HREF__">poradniku MTD dla CIS</a>, <a href="__QUALIFYING_HREF__">poradniku o qualifying income</a> i <a href="__DIGITAL_RECORDS_HREF__">poradniku o cyfrowych rekordach</a>.</p>
    `,
    sourcesChecked: "Sprawdzone: sierpien 2026. Zweryfikuj na GOV.UK, jesli czytasz pozniej."
  },
  ro: {
    title: "Mituri CIS si MTD: ce gresesc multe aplicatii de contabilitate",
    lead: "Lucrezi sub Construction Industry Scheme? Nu lasa un software complicat sa iti strice evidentele inainte ca regulile MTD sa se aplice.",
    html: `
      <h2>De ce conteaza</h2>
      <p>CIS nu functioneaza intotdeauna ca o mica firma care emite facturi clientilor. Daca aplicatia te impinge spre un obicei gresit, contabilul trebuie sa repare mai tarziu.</p>

      <h2>Mitul 1: trebuie sa trimiti facturi formale contractorului principal</h2>
      <p>In multe situatii, main contractor calculeaza plata, deduce CIS la sursa si iti da un CIS payment and deduction statement sau remittance note.</p>
      <p>Acest document este important: arata suma bruta, deducerea CIS si suma neta platita. De multe ori ai nevoie de un loc simplu pentru remittance slips, payslipuri, bonuri de combustibil, scule si materiale, nu de o suita mare de facturare.</p>

      <h2>Mitul 2: pentru MTD folosesti venitul net dupa CIS</h2>
      <p>Aceasta este eroarea scumpa. Pentru evidentele MTD, venitul este suma bruta inainte de deducerea CIS. Daca documentul arata &pound;2,000 brut, &pound;400 CIS dedus si &pound;1,600 platit, inregistrarea de venit porneste de la &pound;2,000, nu de la &pound;1,600.</p>
      <p>Deducerea CIS este impozit deja retinut. Nu este o cheltuiala obisnuita si nu ar trebui sa reduca cifra de afaceri folosita pentru actualizarile trimestriale.</p>

      <h2>Mitul 3: ai nevoie de software contabil scump</h2>
      <p>MTD nu inseamna ca fiecare tradesperson are nevoie de stock tracking, customer portals si modele complicate de facturi. Primul strat practic este mai simplu: evidente digitale pentru venituri, cheltuieli si documente justificative.</p>

      <h2>Unde intra TidGo</h2>
      <p>TidGo este construit pentru documentele reale: poze cu bonuri pe WhatsApp, payslipuri pe email, remittance notes, venit introdus manual si exporturi PDF/CSV curate in engleza pentru contabil.</p>
      <p>TidGo nu inlocuieste contabilul si nu promite sa calculeze automat pozitia finala CIS. Ajuta sa pastrezi venitul brut, dovada deducerii CIS si cheltuielile in acelasi loc.</p>
      <p>Citeste si <a href="__CIS_HREF__">ghidul MTD pentru CIS</a>, <a href="__QUALIFYING_HREF__">ghidul despre qualifying income</a> si <a href="__DIGITAL_RECORDS_HREF__">ghidul despre evidente digitale</a>.</p>
    `,
    sourcesChecked: "Verificat: august 2026. Verifica pe GOV.UK daca citesti mai tarziu."
  },
  lt: {
    title: "CIS ir MTD mitai: ka daznai klaidingai daro apskaitos programeles",
    lead: "Dirbate pagal Construction Industry Scheme? Neleiskite per sudetingai programai sujaukti irasu pries MTD taisykliu taikyma.",
    html: `
      <h2>Kodel tai svarbu</h2>
      <p>CIS ne visada veikia kaip iprasta smulki imone, kuri klientams siuncia saskaitas. Jei programele stumia i klaidinga procesa, buhalteris veliau turi tai taisyti.</p>

      <h2>Mitas 1: privalote siusti oficialias saskaitas pagrindiniam rangovui</h2>
      <p>Daznai main contractor apskaiciuoja uzmokesti, isskaiciuoja CIS mokesti ir pateikia CIS payment and deduction statement arba remittance note.</p>
      <p>Tas dokumentas yra svarbiausias: jis rodo bruto suma, CIS atskaityma ir neto ismoka. Praktiskai jums reikia paprastos vietos payslipams, remittance slips, kuro, irankiu ir medziagu kvitams, o ne dideles saskaitu sistemos.</p>

      <h2>Mitas 2: MTD irasams naudojamos neto pajamos po CIS</h2>
      <p>Tai brangi klaida. MTD irasams pajamos yra bruto suma pries CIS atskaityma. Jei dokumente yra &pound;2,000 bruto, &pound;400 CIS atskaityta ir &pound;1,600 ismoketa, pajamu irasas prasideda nuo &pound;2,000, ne nuo &pound;1,600.</p>
      <p>CIS atskaitymas yra jau sumoketas mokestis. Tai nera iprasta verslo islaida ir neturetu tyliai mazinti apyvartos ketvirtiniu atnaujinimu irasuose.</p>

      <h2>Mitas 3: reikia brangios buhalterines sistemos</h2>
      <p>MTD nereiskia, kad kiekvienam tradesperson reikia stock tracking, customer portal ir sudetingu saskaitu sablonu. Pirmas praktinis sluoksnis yra paprastesnis: skaitmeniniai pajamu, islaidu ir irodymu irasai.</p>

      <h2>Kur tinka TidGo</h2>
      <p>TidGo sukurtas realiems dokumentams: WhatsApp kvitu nuotraukoms, el. pastu gautiems payslipams, remittance notes, ranka ivestoms pajamoms ir tvarkingiems anglisku PDF/CSV eksportams buhalteriui.</p>
      <p>TidGo nepakeicia buhalterio ir nezada automatiskai apskaiciuoti galutines CIS mokescio pozicijos. Jis padeda laikyti bruto pajamas, CIS atskaitymo irodyma ir islaidas vienoje vietoje.</p>
      <p>Skaitykite ir <a href="__CIS_HREF__">MTD CIS gida</a>, <a href="__QUALIFYING_HREF__">qualifying income gida</a> ir <a href="__DIGITAL_RECORDS_HREF__">skaitmeniniu irasu gida</a>.</p>
    `,
    sourcesChecked: "Patikrinta: 2026 m. rugpjutis. Jei skaitote veliau, pasitikrinkite GOV.UK."
  }
};

function mtdCisMythsArticle() {
  const copy = MTD_CIS_MYTHS_ARTICLES[state.marketingLanguage] || MTD_CIS_MYTHS_ARTICLES.en;
  const articleHtml = copy.html
    .replaceAll("__CIS_HREF__", mtdKnowledgeHref("cis"))
    .replaceAll("__QUALIFYING_HREF__", mtdKnowledgeHref("qualifying-income"))
    .replaceAll("__DIGITAL_RECORDS_HREF__", mtdKnowledgeHref("digital-records"));
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>${copy.title}</h1>
      <p>${copy.lead}</p>
      ${articleHtml}
      <div class="article-sources">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.gov.uk/what-is-the-construction-industry-scheme" target="_blank" rel="noopener">Construction Industry Scheme - GOV.UK</a></li>
          <li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax - GOV.UK</a></li>
          <li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Create digital records for MTD - GOV.UK</a></li>
          <li><a href="https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html" target="_blank" rel="noopener">HMRC Income Tax MTD end-to-end service guide</a></li>
        </ul>
        <p><em>${copy.sourcesChecked}</em></p>
      </div>
      ${pageCta()}
    </article>
  `;
}

const MTD_AUTO_SIGNUP_ARTICLES = {
  en: {
    title: "Automatically signed up for MTD by HMRC? What it means and what to do next",
    lead: "HMRC may sign some taxpayers up to Making Tax Digital automatically from September 2026. That does not connect TidGo, Xero, FreeAgent or any other software.",
    checked: "Last checked: August 2026. HMRC guidance is still evolving, so verify on GOV.UK if reading later.",
    html: `
      <h2>The short version</h2>
      <p>If HMRC sends you a letter saying you have been automatically signed up for Making Tax Digital for Income Tax, it means HMRC has put you into the MTD system because your latest Self Assessment return shows qualifying income above the threshold.</p>
      <p>It does <strong>not</strong> mean any app has been connected for you. Automatic sign-up does not connect TidGo, Xero, FreeAgent or any other application.</p>
      <p>You still need to choose compatible software, connect it to HMRC, keep digital records and send any quarterly updates that are due.</p>

      <h2>Why HMRC may do this</h2>
      <p>For 2026/27, MTD for Income Tax starts with people whose qualifying income is above &pound;50,000. HMRC has said it may automatically sign up people who should be in MTD but have not signed up themselves.</p>
      <p>This is based on your latest tax return information. It is about your HMRC status, not your software.</p>

      <h2>HMRC enrolment is not software authorisation</h2>
      <p>There are two separate layers:</p>
      <p><strong>HMRC enrolment:</strong> HMRC decides you are in MTD and creates obligations for you.</p>
      <p><strong>Software authorisation:</strong> you open your chosen software, choose â€œconnect to HMRCâ€, sign in with your Government Gateway or GOV.UK One Login details, and give permission for that software to talk to HMRC.</p>
      <p>Without that second step, your software cannot read your obligations or submit updates.</p>

      <h2>What to do after receiving the letter</h2>
      <ol>
        <li>Read the HMRC letter carefully and check the tax year and income threshold.</li>
        <li>Log in to HMRC online services and check your Self Assessment and MTD details.</li>
        <li>Choose compatible software or speak to your accountant.</li>
        <li>Authorise the software through HMRC using the connect flow.</li>
        <li>Check open obligations and catch up on any missed quarterly updates.</li>
      </ol>

      <h2>If you already missed the first quarterly deadline</h2>
      <p>The first 2026/27 quarterly update deadline was 7 August 2026. HMRC says no penalty points apply for late quarterly updates in 2026/27, but missed updates still need to be submitted before the year-end return.</p>
      <p>For the specific 7 August deadline situation, read our <a href="__MISSED_HREF__">missed quarterly update guide</a>.</p>

      <h2>Where TidGo fits</h2>
      <p>TidGo helps you keep digital records: receipts, income proof, CIS payslips and tidy summaries. TidGo is testing MTD connection flows, pending HMRC production approval. Until that approval is in place, TidGo is the record-keeping and accountant handoff layer.</p>
      <p>The important habit is the same either way: collect the proof now, keep dates and amounts tidy, and give your accountant clean records before the quarterly pressure arrives.</p>

      <h2>Note about GOV.UK wording</h2>
      <p>Some older GOV.UK pages may still say HMRC will not sign clients up automatically. Newer HMRC guidance includes automatic sign-up wording and a sample letter. Always check the latest HMRC guidance linked below.</p>
    `
  },
  pl: {
    title: "HMRC automatycznie zapisaÅ‚o CiÄ™ do MTD? Co to znaczy i co zrobiÄ‡ dalej",
    lead: "Od wrzeÅ›nia 2026 HMRC moÅ¼e automatycznie zapisaÄ‡ czÄ™Å›Ä‡ podatnikÃ³w do Making Tax Digital. To nie oznacza, Å¼e jakakolwiek aplikacja zostaÅ‚a podÅ‚Ä…czona za Ciebie.",
    checked: "Sprawdzone: sierpieÅ„ 2026. Guidance HMRC nadal siÄ™ zmienia, wiÄ™c jeÅ›li czytasz pÃ³Åºniej, sprawdÅº aktualnÄ… wersjÄ™ na GOV.UK.",
    html: `
      <h2>KrÃ³tka wersja</h2>
      <p>JeÅ›li HMRC wysÅ‚aÅ‚o Ci list, Å¼e zostaÅ‚eÅ› automatycznie zapisany do Making Tax Digital for Income Tax, oznacza to, Å¼e HMRC umieÅ›ciÅ‚o CiÄ™ w systemie MTD na podstawie ostatniego Self Assessment i qualifying income powyÅ¼ej progu.</p>
      <p>To <strong>nie</strong> znaczy, Å¼e TidGo, Xero, FreeAgent albo jakakolwiek inna aplikacja zostaÅ‚a automatycznie podÅ‚Ä…czona.</p>
      <p>Nadal musisz wybraÄ‡ compatible software, poÅ‚Ä…czyÄ‡ je z HMRC, prowadziÄ‡ cyfrowe rekordy i wysÅ‚aÄ‡ zalegÅ‚e albo bieÅ¼Ä…ce quarterly updates.</p>

      <h2>Dlaczego HMRC moÅ¼e to zrobiÄ‡</h2>
      <p>Dla roku 2026/27 MTD for Income Tax zaczyna siÄ™ od osÃ³b z qualifying income powyÅ¼ej &pound;50,000. HMRC informuje, Å¼e moÅ¼e automatycznie zapisaÄ‡ osoby, ktÃ³re powinny byÄ‡ w MTD, ale same siÄ™ nie zapisaÅ‚y.</p>
      <p>To dotyczy Twojego statusu w HMRC. Nie dotyczy automatycznego wyboru programu.</p>

      <h2>HMRC enrolment to nie software authorisation</h2>
      <p>SÄ… dwie osobne warstwy:</p>
      <p><strong>HMRC enrolment:</strong> HMRC decyduje, Å¼e jesteÅ› w MTD i tworzy obowiÄ…zki kwartalne.</p>
      <p><strong>Software authorisation:</strong> otwierasz wybrane oprogramowanie, wybierasz â€œconnect to HMRCâ€, logujesz siÄ™ przez Government Gateway albo GOV.UK One Login i dajesz zgodÄ™, Å¼eby program komunikowaÅ‚ siÄ™ z HMRC.</p>
      <p>Bez tego drugiego kroku program nie odczyta obligations i nie wyÅ›le updates.</p>

      <h2>Co zrobiÄ‡ po otrzymaniu listu</h2>
      <ol>
        <li>Przeczytaj list HMRC i sprawdÅº rok podatkowy oraz prÃ³g dochodu.</li>
        <li>Zaloguj siÄ™ do HMRC online services i sprawdÅº Self Assessment oraz MTD details.</li>
        <li>Wybierz compatible software albo porozmawiaj z ksiÄ™gowym.</li>
        <li>Autoryzuj software przez HMRC w procesie connect.</li>
        <li>SprawdÅº open obligations i nadrÃ³b zalegÅ‚e quarterly updates.</li>
      </ol>

      <h2>JeÅ›li pierwszy termin juÅ¼ minÄ…Å‚</h2>
      <p>Pierwszy termin quarterly update za 2026/27 minÄ…Å‚ 7 sierpnia 2026. HMRC mÃ³wi, Å¼e w 2026/27 nie bÄ™dzie penalty points za spÃ³Åºnione quarterly updates, ale zalegÅ‚e updates nadal trzeba wysÅ‚aÄ‡ przed rocznym zeznaniem.</p>
      <p>O sytuacji po terminie 7 sierpnia piszemy osobno w <a href="__MISSED_HREF__">artykule o missed quarterly update</a>.</p>

      <h2>Gdzie w tym TidGo</h2>
      <p>TidGo pomaga trzymaÄ‡ cyfrowe rekordy: paragony, dowody przychodu, CIS payslips i uporzÄ…dkowane summary. TidGo testuje poÅ‚Ä…czenie MTD, czekajÄ…c na production approval HMRC. Do czasu zatwierdzenia TidGo jest warstwÄ… zbierania rekordÃ³w i przekazania ksiÄ™gowemu.</p>
      <p>NajwaÅ¼niejszy nawyk jest ten sam: zbieraj dowody na bieÅ¼Ä…co, pilnuj dat i kwot, i daj ksiÄ™gowemu czyste rekordy zanim przyjdzie kwartalna presja.</p>

      <h2>Uwaga o GOV.UK</h2>
      <p>NiektÃ³re starsze strony GOV.UK mogÄ… nadal mÃ³wiÄ‡, Å¼e HMRC nie bÄ™dzie automatycznie zapisywaÄ‡ klientÃ³w. Nowsze guidance HMRC zawiera juÅ¼ wording o automatic sign-up i wzÃ³r listu. Zawsze sprawdzaj najnowsze guidance HMRC z linkÃ³w poniÅ¼ej.</p>
    `
  },
  ro: {
    title: "Inscris automat la MTD de HMRC? Ce inseamna si ce trebuie sa faci",
    lead: "Din septembrie 2026, HMRC poate inscrie automat unii contribuabili la Making Tax Digital. Asta nu conecteaza automat nicio aplicatie.",
    checked: "Verificat: august 2026. Ghidurile HMRC inca evolueaza, deci verifica GOV.UK daca citesti mai tarziu.",
    html: `
      <h2>Versiunea scurta</h2>
      <p>Daca HMRC iti trimite o scrisoare ca ai fost inscris automat la Making Tax Digital for Income Tax, inseamna ca HMRC te-a pus in sistemul MTD pe baza ultimului Self Assessment si a qualifying income peste prag.</p>
      <p>Asta <strong>nu</strong> inseamna ca TidGo, Xero, FreeAgent sau alta aplicatie a fost conectata automat pentru tine.</p>
      <p>Tot trebuie sa alegi software compatibil, sa il conectezi la HMRC, sa tii evidente digitale si sa trimiti quarterly updates restante sau curente.</p>

      <h2>De ce poate face HMRC asta</h2>
      <p>Pentru 2026/27, MTD for Income Tax incepe cu persoanele care au qualifying income peste &pound;50,000. HMRC a spus ca poate inscrie automat persoane care ar trebui sa fie in MTD, dar nu s-au inscris singure.</p>
      <p>Asta tine de statutul tau la HMRC, nu de software-ul tau.</p>

      <h2>Inscrierea HMRC nu este autorizarea software-ului</h2>
      <p>Sunt doua straturi separate:</p>
      <p><strong>HMRC enrolment:</strong> HMRC decide ca esti in MTD si creeaza obligatiile trimestriale.</p>
      <p><strong>Software authorisation:</strong> deschizi software-ul ales, alegi â€œconnect to HMRCâ€, te autentifici cu Government Gateway sau GOV.UK One Login si dai permisiune software-ului sa comunice cu HMRC.</p>
      <p>Fara al doilea pas, software-ul nu poate citi obligations si nu poate trimite updates.</p>

      <h2>Ce faci dupa ce primesti scrisoarea</h2>
      <ol>
        <li>Citeste scrisoarea HMRC si verifica anul fiscal si pragul de venit.</li>
        <li>Autentifica-te in HMRC online services si verifica Self Assessment si MTD details.</li>
        <li>Alege software compatibil sau vorbeste cu contabilul tau.</li>
        <li>Autorizeaza software-ul prin fluxul HMRC connect.</li>
        <li>Verifica open obligations si recupereaza orice quarterly updates ratate.</li>
      </ol>

      <h2>Daca ai ratat primul termen</h2>
      <p>Primul termen quarterly update pentru 2026/27 a fost 7 august 2026. HMRC spune ca in 2026/27 nu exista penalty points pentru quarterly updates intarziate, dar updates restante trebuie totusi trimise inainte de declaratia de final de an.</p>
      <p>Pentru situatia specifica dupa 7 august, citeste <a href="__MISSED_HREF__">ghidul despre missed quarterly update</a>.</p>

      <h2>Unde se incadreaza TidGo</h2>
      <p>TidGo te ajuta sa tii evidente digitale: bonuri, dovezi de venit, payslipuri CIS si rezumate ordonate. TidGo testeaza conexiunea MTD, in asteptarea aprobarii HMRC pentru productie. Pana atunci, TidGo este stratul de colectare a evidentelor si predare catre contabil.</p>

      <h2>Nota despre GOV.UK</h2>
      <p>Unele pagini GOV.UK mai vechi pot spune inca faptul ca HMRC nu va inscrie automat clientii. Ghidurile mai noi HMRC includ automatic sign-up si un model de scrisoare. Verifica mereu cele mai recente linkuri HMRC de mai jos.</p>
    `
  },
  lt: {
    title: "HMRC automatiÅ¡kai Ä¯traukÄ— jus Ä¯ MTD? KÄ… tai reiÅ¡kia ir kÄ… daryti",
    lead: "Nuo 2026 m. rugsÄ—jo HMRC gali automatiÅ¡kai Ä¯traukti kai kuriuos mokesÄiÅ³ mokÄ—tojus Ä¯ Making Tax Digital. Tai automatiÅ¡kai neprijungia jokios programos.",
    checked: "Patikrinta: 2026 m. rugpjÅ«tis. HMRC gairÄ—s dar keiÄiasi, todÄ—l jei skaitote vÄ—liau, pasitikrinkite GOV.UK.",
    html: `
      <h2>Trumpa versija</h2>
      <p>Jei HMRC atsiuntÄ— laiÅ¡kÄ…, kad jus automatiÅ¡kai Ä¯traukÄ— Ä¯ Making Tax Digital for Income Tax, tai reiÅ¡kia, kad HMRC Ä¯traukÄ— jus Ä¯ MTD sistemÄ… pagal paskutinÄ™ Self Assessment deklaracijÄ… ir qualifying income virÅ¡ ribos.</p>
      <p>Tai <strong>nereiÅ¡kia</strong>, kad TidGo, Xero, FreeAgent ar kita programa buvo automatiÅ¡kai prijungta uÅ¾ jus.</p>
      <p>Vis tiek turite pasirinkti suderinamÄ… programinÄ™ Ä¯rangÄ…, prijungti jÄ… prie HMRC, tvarkyti skaitmeninius Ä¯raÅ¡us ir pateikti einamus arba praleistus quarterly updates.</p>

      <h2>KodÄ—l HMRC gali tai padaryti</h2>
      <p>2026/27 metais MTD for Income Tax prasideda Å¾monÄ—ms, kuriÅ³ qualifying income virÅ¡ija &pound;50,000. HMRC nurodo, kad gali automatiÅ¡kai Ä¯traukti Å¾mones, kurie turÄ—tÅ³ bÅ«ti MTD sistemoje, bet patys neuÅ¾siregistravo.</p>
      <p>Tai susijÄ™ su jÅ«sÅ³ HMRC statusu, o ne su jÅ«sÅ³ pasirinkta programa.</p>

      <h2>HMRC Ä¯traukimas nÄ—ra programos autorizavimas</h2>
      <p>Yra du atskiri sluoksniai:</p>
      <p><strong>HMRC enrolment:</strong> HMRC nusprendÅ¾ia, kad esate MTD sistemoje, ir sukuria ketvirtines obligations.</p>
      <p><strong>Software authorisation:</strong> atidarote pasirinktÄ… programÄ…, pasirenkate â€œconnect to HMRCâ€, prisijungiate su Government Gateway arba GOV.UK One Login ir leidÅ¾iate programai bendrauti su HMRC.</p>
      <p>Be antro Å¾ingsnio programa negali perskaityti obligations ir pateikti updates.</p>

      <h2>KÄ… daryti gavus laiÅ¡kÄ…</h2>
      <ol>
        <li>Perskaitykite HMRC laiÅ¡kÄ… ir patikrinkite mokestinius metus bei pajamÅ³ ribÄ….</li>
        <li>Prisijunkite prie HMRC online services ir patikrinkite Self Assessment bei MTD details.</li>
        <li>Pasirinkite suderinamÄ… programÄ… arba pasikalbÄ—kite su buhalteriu.</li>
        <li>Autorizuokite programÄ… per HMRC connect procesÄ….</li>
        <li>Patikrinkite open obligations ir pateikite praleistus quarterly updates.</li>
      </ol>

      <h2>Jei pirmasis terminas jau praÄ—jo</h2>
      <p>Pirmasis 2026/27 quarterly update terminas buvo 2026 m. rugpjÅ«Äio 7 d. HMRC sako, kad 2026/27 metais penalty points uÅ¾ pavÄ—luotus quarterly updates netaikomi, bet praleisti updates vis tiek turi bÅ«ti pateikti prieÅ¡ metÅ³ pabaigos deklaracijÄ….</p>
      <p>Apie rugpjÅ«Äio 7 d. situacijÄ… skaitykite <a href="__MISSED_HREF__">missed quarterly update gide</a>.</p>

      <h2>Kur Äia TidGo</h2>
      <p>TidGo padeda tvarkyti skaitmeninius Ä¯raÅ¡us: kvitus, pajamÅ³ Ä¯rodymus, CIS payslipus ir tvarkingas suvestines. TidGo testuoja MTD jungtÄ¯ ir laukia HMRC production approval. Kol jo nÄ—ra, TidGo yra Ä¯raÅ¡Å³ rinkimo ir perdavimo buhalteriui sluoksnis.</p>

      <h2>Pastaba apie GOV.UK</h2>
      <p>Kai kurie senesni GOV.UK puslapiai dar gali sakyti, kad HMRC automatiÅ¡kai neÄ¯trauks klientÅ³. NaujesnÄ—s HMRC gairÄ—s jau mini automatic sign-up ir laiÅ¡ko pavyzdÄ¯. Visada tikrinkite naujausias HMRC nuorodas Å¾emiau.</p>
    `
  }
};


const MTD_RESPONSIBILITIES_ARTICLES = {
  en: {
    title: "MTD: what you do and what your accountant does",
    lead: "Making Tax Digital for Income Tax creates more regular record-keeping and quarterly updates. It does not create a quarterly tax return.",
    intro: "This is the simple split most people need before they panic-buy software or pay for bookkeeping they may not need.",
    headers: ["Task", "Required for MTD?", "Must an accountant do it?"],
    rows: [
      ["Keep digital income records", "&#10003; Yes", "&#10005; No"],
      ["Keep digital expense records", "&#10003; Yes", "&#10005; No"],
      ["Keep source documents and proof", "&#10003; Yes*", "&#10005; No"],
      ["Put records into basic categories", "&#10003; Yes", "&#10005; No"],
      ["Send a quarterly update/summary", "&#10003; Yes", "&#10005; No"],
      ["Do formal accounting adjustments before each quarterly update", "&#10005; No", "&#10005; No"],
      ["Do formal tax adjustments before each quarterly update", "&#10005; No", "&#10005; No"],
      ["Submit a quarterly tax return", "&#10005; No - it does not exist", "&#10005; No"],
      ["Use a bookkeeping service", "&#10005; No", "&#63; Optional"],
      ["Use accountant support", "&#10005; No", "&#63; Optional"],
      ["Get tax advice", "&#10005; No", "&#63; Optional"],
      ["Submit the annual tax return / final declaration", "&#10003; Yes, once a year", "Can be outsourced"]
    ],
    note: "*HMRC requires digital records and supporting evidence to be kept. It does not mean you must photograph every receipt, but your proof must survive and be findable.",
    body: `
      <h2>The important bit</h2>
      <p>A quarterly update is a summary of income and expenses created from your digital records. It is not a full tax return, and HMRC says you do not need to make accounting or tax adjustments before sending it.</p>
      <p>Your accountant may still be very useful, especially for the year-end declaration, tax planning, corrections, allowances and anything complicated. But MTD itself does not mean every receipt needs to be touched by an accountant every quarter.</p><p>This does not mean mistakes stay frozen. If you spot a wrong amount, date or category, correct the digital record as soon as possible. The next cumulative quarterly update includes the corrected record totals.</p><p>This does not mean mistakes stay frozen. If you spot a wrong amount, date or category, correct the digital record as soon as possible. The next cumulative quarterly update includes the corrected record totals.</p>
      <h2>Where TidGo fits</h2>
      <p>TidGo is built for the record-keeping layer: income, expenses, source documents and tidy summaries. The accountant's heavier work remains where it belongs: judgement, review and year-end tax work.</p>
    `,
    checked: "Last checked: August 2026. Check GOV.UK if reading later."
  },
  pl: {
    title: "MTD: co robisz Ty, a co robi ksi&#281;gowy",
    lead: "Making Tax Digital dla Income Tax oznacza regularne cyfrowe rekordy i quarterly updates. Nie oznacza kwartalnego zeznania podatkowego.",
    intro: "To prosty podzia&#322;, kt&#243;rego ludzie potrzebuj&#261;, zanim kupi&#261; za du&#380;y program albo zap&#322;ac&#261; za us&#322;ug&#281;, kt&#243;rej wcale nie musz&#261; potrzebowa&#263;.",
    headers: ["Czynno&#347;&#263;", "Czy wymaga tego MTD?", "Czy musi zrobi&#263; to ksi&#281;gowy?"],
    rows: [
      ["Prowadzenie cyfrowych rekord&#243;w przychod&#243;w", "&#10003; Tak", "&#10005; Nie"],
      ["Prowadzenie cyfrowych rekord&#243;w wydatk&#243;w", "&#10003; Tak", "&#10005; Nie"],
      ["Przechowywanie paragon&#243;w, faktur i innych dowod&#243;w", "&#10003; Tak*", "&#10005; Nie"],
      ["Przypisywanie rekord&#243;w do podstawowych kategorii", "&#10003; Tak", "&#10005; Nie"],
      ["Wys&#322;anie kwartalnego podsumowania do HMRC", "&#10003; Tak", "&#10005; Nie"],
      ["Formalne korekty ksi&#281;gowe przed ka&#380;dym quarterly update", "&#10005; Nie", "&#10005; Nie"],
      ["Formalne korekty podatkowe przed ka&#380;dym quarterly update", "&#10005; Nie", "&#10005; Nie"],
      ["Kwartalne zeznanie podatkowe", "&#10005; Nie - takie co&#347; nie istnieje", "&#10005; Nie"],
      ["Us&#322;uga prowadzenia bookkeeping", "&#10005; Nie", "&#63; Opcjonalnie"],
      ["Wsparcie ksi&#281;gowego", "&#10005; Nie", "&#63; Opcjonalnie"],
      ["Porada podatkowa", "&#10005; Nie", "&#63; Opcjonalnie"],
      ["Roczne zeznanie podatkowe / final declaration", "&#10003; Tak, raz w roku", "Mo&#380;na zleci&#263;"]
    ],
    note: "*HMRC wymaga cyfrowych rekord&#243;w i dowod&#243;w &#378;r&#243;d&#322;owych. To nie znaczy, &#380;e musisz fotografowa&#263; ka&#380;dy paragon, ale dow&#243;d musi przetrwa&#263; i da&#263; si&#281; znale&#378;&#263;.",
    body: `
      <h2>Najwa&#380;niejsza rzecz</h2>
      <p>Quarterly update to podsumowanie przychod&#243;w i wydatk&#243;w stworzone z cyfrowych rekord&#243;w. To nie jest pe&#322;ne zeznanie podatkowe, a HMRC m&#243;wi, &#380;e przed jego wys&#322;aniem nie trzeba robi&#263; korekt ksi&#281;gowych ani podatkowych.</p>
      <p>Ksi&#281;gowy nadal mo&#380;e by&#263; bardzo potrzebny, zw&#322;aszcza przy final declaration, planowaniu podatkowym, poprawkach, ulgach i trudniejszych przypadkach. Ale samo MTD nie oznacza, &#380;e ka&#380;dy paragon musi przej&#347;&#263; przez ksi&#281;gowego co kwarta&#322;.</p><p>To nie znaczy, &#380;e b&#322;&#281;dy zostaj&#261; zamro&#380;one. Je&#347;li zauwa&#380;ysz z&#322;&#261; kwot&#281;, dat&#281; albo kategori&#281;, popraw cyfrowy rekord jak najszybciej. Nast&#281;pny cumulative quarterly update uwzgl&#281;dni poprawione sumy.</p><p>To nie znaczy, &#380;e b&#322;&#281;dy zostaj&#261; zamro&#380;one. Je&#347;li zauwa&#380;ysz z&#322;&#261; kwot&#281;, dat&#281; albo kategori&#281;, popraw cyfrowy rekord jak najszybciej. Nast&#281;pny cumulative quarterly update uwzgl&#281;dni poprawione sumy.</p>
      <h2>Gdzie w tym jest TidGo</h2>
      <p>TidGo jest od warstwy rekord&#243;w: przychody, wydatki, dokumenty &#378;r&#243;d&#322;owe i czytelne podsumowania. Ci&#281;&#380;sza praca ksi&#281;gowego zostaje tam, gdzie jej miejsce: ocena, review i roczne rozliczenie podatkowe.</p>
    `,
    checked: "Sprawdzone: sierpie&#324; 2026. Je&#347;li czytasz p&#243;&#378;niej, sprawd&#378; GOV.UK."
  },
  ro: {
    title: "MTD: ce faci tu si ce face contabilul",
    lead: "Making Tax Digital pentru Income Tax inseamna evidente digitale regulate si quarterly updates. Nu inseamna o declaratie fiscala trimestriala.",
    intro: "Acesta este impartirea simpla de care multi oameni au nevoie inainte sa cumpere software prea mare sau sa plateasca pentru servicii de care poate nu au nevoie.",
    headers: ["Sarcina", "Cere MTD?", "Trebuie facut de contabil?"],
    rows: [
      ["Pastrezi evidente digitale pentru venituri", "&#10003; Da", "&#10005; Nu"],
      ["Pastrezi evidente digitale pentru cheltuieli", "&#10003; Da", "&#10005; Nu"],
      ["Pastrezi bonuri, facturi si alte dovezi", "&#10003; Da*", "&#10005; Nu"],
      ["Pui evidentele in categorii de baza", "&#10003; Da", "&#10005; Nu"],
      ["Trimiti un rezumat trimestrial catre HMRC", "&#10003; Da", "&#10005; Nu"],
      ["Faci ajustari contabile formale inainte de fiecare quarterly update", "&#10005; Nu", "&#10005; Nu"],
      ["Faci ajustari fiscale formale inainte de fiecare quarterly update", "&#10005; Nu", "&#10005; Nu"],
      ["Depui o declaratie fiscala trimestriala", "&#10005; Nu - nu exista", "&#10005; Nu"],
      ["Folosesti un serviciu de bookkeeping", "&#10005; Nu", "&#63; Optional"],
      ["Folosesti sprijin de la contabil", "&#10005; Nu", "&#63; Optional"],
      ["Ceri consultanta fiscala", "&#10005; Nu", "&#63; Optional"],
      ["Depui declaratia anuala / final declaration", "&#10003; Da, o data pe an", "Poate fi externalizat"]
    ],
    note: "*HMRC cere evidente digitale si documente justificative. Nu inseamna ca trebuie sa fotografiezi fiecare bon, dar dovada trebuie pastrata si usor de gasit.",
    body: `
      <h2>Partea importanta</h2>
      <p>Un quarterly update este un rezumat al veniturilor si cheltuielilor creat din evidentele tale digitale. Nu este o declaratie fiscala completa, iar HMRC spune ca nu trebuie sa faci ajustari contabile sau fiscale inainte de trimitere.</p>
      <p>Contabilul poate ramane foarte util, mai ales pentru final declaration, planificare fiscala, corectii, allowances si situatii complicate. Dar MTD nu inseamna ca fiecare bon trebuie verificat de contabil in fiecare trimestru.</p><p>Asta nu inseamna ca greselile raman blocate. Daca observi o suma, data sau categorie gresita, corecteaza evidenta digitala cat mai repede. Urmatorul cumulative quarterly update include totalurile corectate.</p><p>Asta nu inseamna ca greselile raman blocate. Daca observi o suma, data sau categorie gresita, corecteaza evidenta digitala cat mai repede. Urmatorul cumulative quarterly update include totalurile corectate.</p>
      <h2>Unde se potriveste TidGo</h2>
      <p>TidGo este pentru stratul de evidenta: venituri, cheltuieli, documente sursa si rezumate clare. Munca mai grea a contabilului ramane acolo unde conteaza: analiza, review si partea fiscala de final de an.</p>
    `,
    checked: "Verificat: august 2026. Verifica GOV.UK daca citesti mai tarziu."
  },
  lt: {
    title: "MTD: ka darote jus ir ka daro buhalteris",
    lead: "Making Tax Digital pajamu mokesciui reiskia reguliarius skaitmeninius irasus ir quarterly updates. Tai nereiskia ketvirtines mokesciu deklaracijos.",
    intro: "Tai paprastas padalijimas, kurio daugeliui reikia pries perkant per didele apskaitos programa ar mokant uz paslauga, kurios galbut nereikia.",
    headers: ["Veiksmas", "Ar reikalauja MTD?", "Ar privalo daryti buhalteris?"],
    rows: [
      ["Tvarkyti skaitmeninius pajamu irasus", "&#10003; Taip", "&#10005; Ne"],
      ["Tvarkyti skaitmeninius islaidu irasus", "&#10003; Taip", "&#10005; Ne"],
      ["Saugoti kvitus, saskaitas ir kitus irodymus", "&#10003; Taip*", "&#10005; Ne"],
      ["Priskirti irasus pagrindinems kategorijoms", "&#10003; Taip", "&#10005; Ne"],
      ["Siusti ketvirtine suvestine HMRC", "&#10003; Taip", "&#10005; Ne"],
      ["Daryti oficialias apskaitos korekcijas pries kiekviena quarterly update", "&#10005; Ne", "&#10005; Ne"],
      ["Daryti oficialias mokestines korekcijas pries kiekviena quarterly update", "&#10005; Ne", "&#10005; Ne"],
      ["Pateikti ketvirtine mokesciu deklaracija", "&#10005; Ne - ji neegzistuoja", "&#10005; Ne"],
      ["Naudoti bookkeeping paslauga", "&#10005; Ne", "&#63; Pasirinktinai"],
      ["Naudoti buhalterio pagalba", "&#10005; Ne", "&#63; Pasirinktinai"],
      ["Gauti mokesciu konsultacija", "&#10005; Ne", "&#63; Pasirinktinai"],
      ["Pateikti metine deklaracija / final declaration", "&#10003; Taip, karta per metus", "Galima perduoti"]
    ],
    note: "*HMRC reikalauja skaitmeniniu irasu ir pagrindzianciu dokumentu saugojimo. Tai nereiskia, kad privalote fotografuoti kiekviena kvita, bet irodymas turi islikti ir buti randamas.",
    body: `
      <h2>Svarbiausia dalis</h2>
      <p>Quarterly update yra pajamu ir islaidu suvestine, sukurta is jusu skaitmeniniu irasu. Tai nera pilna mokesciu deklaracija, o HMRC sako, kad pries siunciant nereikia daryti apskaitos ar mokestiniu korekciju.</p>
      <p>Buhalteris vis tiek gali buti labai naudingas, ypac final declaration, mokesciu planavimui, pataisoms, allowances ir sudetingoms situacijoms. Bet MTD nereiskia, kad kiekvienas kvitas kas ketvirti turi buti patikrintas buhalterio.</p><p>Tai nereiskia, kad klaidos lieka uzrakintos. Jei pastebite neteisinga suma, data ar kategorija, kuo greiciau pataisykite skaitmenini irasa. Kitas cumulative quarterly update itrauks pataisytas sumas.</p><p>Tai nereiskia, kad klaidos lieka uzrakintos. Jei pastebite neteisinga suma, data ar kategorija, kuo greiciau pataisykite skaitmenini irasa. Kitas cumulative quarterly update itrauks pataisytas sumas.</p>
      <h2>Kur tinka TidGo</h2>
      <p>TidGo skirtas irasu sluoksniui: pajamos, islaidos, saltinio dokumentai ir tvarkingos suvestines. Sunkesnis buhalterio darbas lieka ten, kur jo reikia: ivertinimas, review ir metu pabaigos mokesciai.</p>
    `,
    checked: "Patikrinta: 2026 m. rugpjutis. Jei skaitote veliau, patikrinkite GOV.UK."
  }
};
function mtdResponsibilitiesArticle() {
  const copy = MTD_RESPONSIBILITIES_ARTICLES[state.marketingLanguage] || MTD_RESPONSIBILITIES_ARTICLES.en;
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>${copy.title}</h1>
      <p>${copy.lead}</p>
      <p>${copy.intro}</p>
      <div class="article-table-wrap">
        <table class="article-table">
          <thead>
            <tr>${copy.headers.map((header) => `<th>${header}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${copy.rows.map((row) => `<tr>${row.map((cell) => `<td class="${cell.includes('&#10003;') ? 'yes-cell' : cell.includes('&#10005;') ? 'no-cell' : cell.includes('&#63;') ? 'maybe-cell' : ''}">${cell}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
      <p><em>${copy.note}</em></p>
      ${copy.body}
      <div class="article-sources">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/before-you-use-this-guide" target="_blank" rel="noopener">GOV.UK: Use Making Tax Digital for Income Tax - before you use this guide</a></li>
          <li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">GOV.UK: Create digital records</a></li>
          <li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">GOV.UK: Send quarterly updates</a></li>
        </ul>
        <p><em>${copy.checked}</em></p>
      </div>
      ${pageCta()}
    </article>
  `;
}
function mtdAutoSignupArticle() {
  const copy = MTD_AUTO_SIGNUP_ARTICLES[state.marketingLanguage] || MTD_AUTO_SIGNUP_ARTICLES.en;
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>${copy.title}</h1>
      <p>${copy.lead}</p>
      ${copy.html.replaceAll("__MISSED_HREF__", state.marketingLanguage === "en" ? "/mtd/missed-7-august-deadline" : `/${state.marketingLanguage}/mtd/missed-7-august-deadline`)}
      <div class="article-sources">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.gov.uk/guidance/get-ready-for-mtd-an-agent-toolkit/guidance-and-other-useful-information" target="_blank" rel="noopener">HMRC guidance and sample automatic sign-up letter</a></li>
          <li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/get-your-software-ready" target="_blank" rel="noopener">HMRC guidance: get your software ready and connect to HMRC</a></li>
          <li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a></li>
        </ul>
        <p><em>${copy.checked}</em></p>
      </div>
      ${pageCta()}
    </article>
  `;
}

function mtdGovernmentGatewayArticle() {
  if (state.marketingLanguage === "pl") return mtdGovernmentGatewayArticlePL();
  if (state.marketingLanguage === "ro") return mtdGovernmentGatewayArticleRO();
  if (state.marketingLanguage === "lt") return mtdGovernmentGatewayArticleLT();
  return mtdGovernmentGatewayArticleEN();
}

function mtdGovernmentGatewayArticleEN() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Government Gateway and MTD: having an account is not the same as signing up</h1>

      
      <p>If you're reading this because you couldn't find where to log in for MTD â€” you're in the right place, just for the wrong reason.</p><h2>Does having a Government Gateway account mean I'm signed up for MTD?</h2>
      <p>No. These are two completely separate things, and assuming otherwise is one of the most common mistakes people make right now.</p>
      <p>A Government Gateway account is <strong>a login</strong>. It's the username and password that get you into HMRC's online services, nothing more. It doesn't register you for anything, doesn't tell HMRC what you do, and doesn't put you into Making Tax Digital.</p>
      <p>Signing up for Making Tax Digital is <strong>a separate action</strong>, done through a separate service, after which HMRC issues you a specific set of obligations. Until you do it, you are not in the system, no matter how long you've had your login.</p>

      <h2>What is a Government Gateway account, in plain terms?</h2>
      <p>Think of it as the front door key to HMRC online. If you've ever filed a Self Assessment return online, used the HMRC app, or claimed tax-free childcare, you already have one.</p>
      <p>It's just credentials: a user ID and a password. What sits behind that door depends entirely on what you've separately registered for.</p>
      <p>One thing worth knowing: HMRC is gradually moving new users over to <a href="https://www.gov.uk/guidance/accessing-hmrc-online-services-using-govuk-one-login" target="_blank" rel="noopener">GOV.UK One Login</a>, which is replacing Government Gateway across government services. If you're setting up an account now, you may see One Login instead. The principle is identical: it's a way of signing in, not a registration.</p>

      <h2>The three steps people confuse</h2>
      <p>Almost everyone mixes these up, so here they are separately, in order:</p>
      <p><strong>1. An account to sign in with</strong>: Government Gateway or GOV.UK One Login. Just credentials.</p>
      <p><strong>2. Registration for Self Assessment</strong>: this tells HMRC you have income to report. It gets you a UTR, a 10-digit number that stays with you for life.</p>
      <p><strong>3. Signing up for Making Tax Digital</strong>: a separate service, done after the first two, which puts you into quarterly reporting.</p>
      <p>You can have step 1 and not step 2. You can have steps 1 and 2 and not step 3. Most people who think they're "all set up" have done one and two, and assume three happened by itself.</p>

      <h2>If you already have a Government Gateway account</h2>
      <p>You're past step 1. What's left:</p>
      <p><strong>Check that you're registered for Self Assessment.</strong> If you file a tax return every year, you are. If you've never filed one, you probably aren't, and you'll need to register first.</p>
      <p><strong>Check whether MTD applies to you.</strong> That depends on your <a href="/mtd/qualifying-income">qualifying income</a>, which is your gross income before expenses, with self-employment and property added together. It isn't your profit.</p>
      <p><strong>Sign up for MTD, using the same login.</strong> <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">The sign-up service is on GOV.UK</a>. You use the same user ID and password you got when you registered for Self Assessment. HMRC checks your eligibility from the details you provide. If you have an accountant with an agent services account, they can sign you up instead.</p>

      <h2>If you don't have a Government Gateway account</h2>
      <p>Plenty of people don't, and there's nothing unusual about that. If you've always worked PAYE, or you're new to self-employment, or someone else has always handled your tax, you've had no reason to create one.</p>
      <p>The order matters here:</p>
      <p><strong>First, create an account.</strong> Go to <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">HMRC's sign-in page</a> and choose to create sign-in details. You'll need an email address you actually check. HMRC sends a confirmation code to it. As a sole trader, choose the individual or personal account type; legally you and your business are the same person.</p>
      <p><strong>Then register for Self Assessment.</strong> This is <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">done on GOV.UK</a>. Have your National Insurance number ready, along with the date you started working for yourself and a short description of what you do.</p>
      <p><strong>Then wait for your UTR.</strong> This is the part that catches people out: your Unique Taxpayer Reference usually arrives later. GOV.UK now says you may be able to get it sooner through the HMRC app or your personal tax account, but you should still plan time for the registration to complete.</p>
      <p><strong>Then sign up for MTD</strong>, if your qualifying income means it applies to you.</p>
      <p>If you're starting from zero, plan for a few weeks, not an afternoon.</p>

      <h2>What happens after you sign up for MTD?</h2>
      <p>Once you're signed up, HMRC issues you <strong>obligations</strong>: a defined list of what you have to report and when. Crucially, these are issued per income source. Two businesses and one rental property means separate sets of reporting obligations, not one combined return.</p>
      <p>Each one needs its own figures, filled from your own records, and submitted through MTD-compatible software. There's no HMRC web form to type them into.</p>
      <p>Which leads to the consequence people miss entirely: once you're in MTD, the annual return also has to go through compatible software or an accountant. The old route of doing it yourself on the HMRC website isn't available to you any more. That applies whether the rules caught you automatically or you volunteered early.</p>
      <p>That's not a reason to avoid signing up. For most people it's not optional anyway. But it's worth knowing before you do it, particularly if you were planning to volunteer ahead of your deadline.</p>

      <h2>What if I've missed something?</h2>
      <p>If you're not sure where you stand, the honest answer is that a website can't tell you, including this one. Your accountant can check your position in minutes, and HMRC's own guidance covers the eligibility rules.</p>
      <p>We don't give tax advice. What we can say is that none of this gets easier by leaving it, and registration steps mean the calendar is not entirely under your control.</p>

      <h2>Getting your records ready in the meantime</h2>
      <p>While you're waiting for a UTR to land or working out whether the threshold catches you, there's one thing you can do that helps in every scenario: start keeping your income and expenses digitally now, rather than in a bag under the seat.</p>
      <p>That's what <a href="/">TidGo</a> is for: receipts, income proof and CIS payslips collected as they happen, in eight languages, ready to hand to whoever ends up doing your submission. TidGo doesn't submit to HMRC and it isn't tax advice. It just means that when the deadline arrives, the records exist.</p>

      <section class="article-sources">
        <strong>Sources</strong>
        <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">HMRC online services: sign in or set up an account â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/accessing-hmrc-online-services-using-govuk-one-login" target="_blank" rel="noopener">Accessing HMRC online services using GOV.UK One Login â€” GOV.UK</a>
        <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">Check how to register for Self Assessment â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/use-software-to-send-income-tax-updates" target="_blank" rel="noopener">Use software to send Income Tax updates â€” GOV.UK</a>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income â€” GOV.UK</a>
        <span>Last checked: August 2026. HMRC guidance and sign-in systems are changing, so verify at the links above if you're reading this later.</span>
      </section>
      ${pageCta()}
    </article>
  `;
}

function mtdGovernmentGatewayArticlePL() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Government Gateway a MTD: posiadanie konta to nie to samo co rejestracja</h1>
            
      <p>JeÅ›li tu trafiÅ‚eÅ› bo szukaÅ‚eÅ› gdzie siÄ™ zalogowaÄ‡ do MTD â€” jesteÅ› we wÅ‚aÅ›ciwym miejscu, tylko z niewÅ‚aÅ›ciwego powodu.</p><h2>Czy jeÅ›li mam Government Gateway, to jestem juÅ¼ zapisany do MTD?</h2>
            <p>Nie. To dwie zupeÅ‚nie rÃ³Å¼ne rzeczy, a mylenie ich to obecnie jeden z najczÄ™stszych bÅ‚Ä™dÃ³w.</p>
            <p>Konto Government Gateway to <strong>login</strong>. Nazwa uÅ¼ytkownika i hasÅ‚o, ktÃ³re wpuszczajÄ… CiÄ™ do usÅ‚ug online HMRC â€” i tyle. Nie rejestruje CiÄ™ do niczego, nie mÃ³wi urzÄ™dowi, czym siÄ™ zajmujesz, i nie umieszcza CiÄ™ w Making Tax Digital.</p>
            <p>Rejestracja do MTD to <strong>osobna czynnoÅ›Ä‡</strong>, wykonywana w osobnej usÅ‚udze, po ktÃ³rej HMRC wyznacza Ci konkretne obowiÄ…zki. DopÃ³ki jej nie zrobisz, nie ma CiÄ™ w systemie â€” niezaleÅ¼nie od tego, ile lat masz to konto.</p>
            <h2>Czym wÅ‚aÅ›ciwie jest Government Gateway?</h2>
            <p>NajproÅ›ciej: to klucz do drzwi wejÅ›ciowych HMRC online. JeÅ›li kiedykolwiek skÅ‚adaÅ‚eÅ› Self Assessment przez internet, korzystaÅ‚eÅ› z aplikacji HMRC albo wnioskowaÅ‚eÅ› o tax-free childcare â€” juÅ¼ je masz.</p>
            <p>To po prostu dane logowania. Co jest za tymi drzwiami, zaleÅ¼y wyÅ‚Ä…cznie od tego, do czego osobno siÄ™ zarejestrowaÅ‚eÅ›.</p>
            <p>Jedna rzecz warta uwagi: HMRC stopniowo przenosi nowych uÅ¼ytkownikÃ³w na <strong>GOV.UK One Login</strong>, ktÃ³ry zastÄ™puje Government Gateway w usÅ‚ugach rzÄ…dowych. JeÅ›li zakÅ‚adasz konto teraz, moÅ¼esz zobaczyÄ‡ wÅ‚aÅ›nie One Login. Zasada jest identyczna â€” to sposÃ³b logowania, nie rejestracja.</p>
            <h2>Trzy kroki, ktÃ³re ludzie mylÄ…</h2>
            <p>Prawie wszyscy je ze sobÄ… mieszajÄ…, wiÄ™c rozpiszmy je osobno, po kolei:</p>
            <p><strong>Konto do logowania</strong> â€” Government Gateway albo GOV.UK One Login. Same dane dostÄ™powe.</p>
            <p><strong>Rejestracja do Self Assessment</strong> â€” to informuje HMRC, Å¼e masz dochÃ³d do rozliczenia. Dostajesz UTR, dziesiÄ™ciocyfrowy numer, ktÃ³ry zostaje z TobÄ… na caÅ‚e Å¼ycie.</p>
            <p><strong>Rejestracja do Making Tax Digital</strong> â€” osobna usÅ‚uga, po pierwszych dwÃ³ch krokach, ktÃ³ra wprowadza CiÄ™ w raportowanie kwartalne.</p>
            <p>MoÅ¼esz mieÄ‡ krok 1 bez kroku 2. MoÅ¼esz mieÄ‡ kroki 1 i 2 bez kroku 3. WiÄ™kszoÅ›Ä‡ ludzi, ktÃ³rzy myÅ›lÄ…, Å¼e â€žmajÄ… wszystko zaÅ‚atwione", zrobiÅ‚a pierwszy i drugi, a zakÅ‚ada, Å¼e trzeci zrobiÅ‚ siÄ™ sam.</p>
            <h2>JeÅ›li masz juÅ¼ konto Government Gateway</h2>
            <p>Krok 1 masz za sobÄ…. Zostaje:</p>
            <p><strong>SprawdÅº, czy jesteÅ› zarejestrowany do Self Assessment.</strong> JeÅ›li co roku skÅ‚adasz zeznanie â€” jesteÅ›. JeÅ›li nigdy nie skÅ‚adaÅ‚eÅ›, najprawdopodobniej nie jesteÅ› i trzeba zaczÄ…Ä‡ od rejestracji.</p>
            <p><strong>SprawdÅº, czy MTD w ogÃ³le CiÄ™ dotyczy.</strong> To zaleÅ¼y od Twojego <a href="/pl/mtd/qualifying-income">qualifying income</a> â€” czyli przychodu brutto przed kosztami, przy czym dziaÅ‚alnoÅ›Ä‡ i wynajem sumujÄ… siÄ™ razem. To nie jest TwÃ³j zysk.</p>
            <p><strong>Zarejestruj siÄ™ do MTD, uÅ¼ywajÄ…c tego samego loginu.</strong> <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">UsÅ‚uga rejestracji jest na GOV.UK</a>. UÅ¼ywasz tej samej nazwy uÅ¼ytkownika i hasÅ‚a, ktÃ³re dostaÅ‚eÅ› przy rejestracji do Self Assessment. HMRC sprawdza Twoje uprawnienia na podstawie podanych danych. JeÅ›li masz ksiÄ™gowego z agent services account, moÅ¼e zarejestrowaÄ‡ CiÄ™ za Ciebie.</p>
            <h2>JeÅ›li nie masz konta Government Gateway</h2>
            <p>Sporo osÃ³b go nie ma i nie ma w tym nic dziwnego â€” jeÅ›li zawsze pracowaÅ‚eÅ› na etacie, dopiero zaczynasz na swoim albo ktoÅ› inny zawsze zajmowaÅ‚ siÄ™ Twoimi podatkami, nie byÅ‚o powodu, Å¼eby je zakÅ‚adaÄ‡.</p>
            <p>Tutaj kolejnoÅ›Ä‡ ma znaczenie:</p>
            <p><strong>Najpierw zaÅ‚Ã³Å¼ konto.</strong> WejdÅº na <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">stronÄ™ logowania HMRC</a> i wybierz utworzenie danych dostÄ™powych. Potrzebujesz adresu e-mail, ktÃ³ry faktycznie sprawdzasz â€” HMRC wyÅ›le na niego kod potwierdzajÄ…cy. Jako sole trader wybierz konto typu indywidualnego/osobistego; formalnie Ty i Twoja dziaÅ‚alnoÅ›Ä‡ to ta sama osoba.</p>
            <p><strong>Potem zarejestruj siÄ™ do Self Assessment.</strong> <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">Robi siÄ™ to na GOV.UK</a> i zajmuje jakieÅ› piÄ™tnaÅ›cie minut. Przygotuj numer National Insurance, datÄ™ rozpoczÄ™cia pracy na swoim i jednozdaniowy opis tego, czym siÄ™ zajmujesz â€” â€žhydraulik" albo â€žkierowca vana" w zupeÅ‚noÅ›ci wystarczy.</p>
            <p><strong>Potem czekaj na UTR, ktÃ³ry przyjdzie pocztÄ….</strong> To jest ten moment, ktÃ³ry ludzi zaskakuje: Unique Taxpayer Reference przychodzi na papierze, zwykle w ciÄ…gu okoÅ‚o dziesiÄ™ciu dni roboczych, dÅ‚uÅ¼ej jeÅ›li mieszkasz za granicÄ…. Bez niego nie zamkniesz caÅ‚oÅ›ci, a odÅ›wieÅ¼anie strony nic nie przyspieszy.</p>
            <p><strong>Potem zarejestruj siÄ™ do MTD</strong>, jeÅ›li Twoje qualifying income oznacza, Å¼e CiÄ™ to dotyczy.</p>
            <p>JeÅ›li zaczynasz od zera, zaplanuj kilka tygodni â€” nie jedno popoÅ‚udnie.</p>
            <h2>Co siÄ™ dzieje po rejestracji do MTD?</h2>
            <p>To jest czÄ™Å›Ä‡, ktÃ³rej prawie nikt nie tÅ‚umaczy, wiÄ™c proszÄ™ bardzo.</p>
            <p>Po rejestracji HMRC wyznacza Ci <strong>obowiÄ…zki (obligations)</strong> â€” konkretnÄ… listÄ™ tego, co masz raportowaÄ‡ i kiedy. I rzecz kluczowa: sÄ… one wyznaczane <strong>osobno dla kaÅ¼dego ÅºrÃ³dÅ‚a dochodu</strong>. Dwie dziaÅ‚alnoÅ›ci i jedna nieruchomoÅ›Ä‡ to trzy osobne zestawy obowiÄ…zkÃ³w raportowych, a nie jedno wspÃ³lne rozliczenie.</p>
            <p>KaÅ¼dy z nich wymaga wÅ‚asnych kwot, uzupeÅ‚nionych z Twoich rekordÃ³w i wysÅ‚anych przez oprogramowanie kompatybilne z MTD. Nie ma formularza na stronie HMRC, w ktÃ³ry daÅ‚oby siÄ™ je wpisaÄ‡.</p>
            <p>Z czego wynika konsekwencja, ktÃ³rÄ… ludzie kompletnie przeoczajÄ…: <strong>kiedy juÅ¼ jesteÅ› w MTD, roczne rozliczenie teÅ¼ musi przejÅ›Ä‡ przez kompatybilne oprogramowanie albo przez ksiÄ™gowego.</strong> Dawna droga â€žzrobiÄ™ to sam na stronie HMRC" przestaje byÄ‡ dla Ciebie dostÄ™pna. Dotyczy to zarÃ³wno tych, ktÃ³rych przepisy zÅ‚apaÅ‚y automatycznie, jak i tych, ktÃ³rzy zgÅ‚osili siÄ™ wczeÅ›niej dobrowolnie.</p>
            <p>To nie jest powÃ³d, Å¼eby unikaÄ‡ rejestracji â€” dla wiÄ™kszoÅ›ci ludzi i tak nie jest ona dobrowolna. Ale warto o tym wiedzieÄ‡ wczeÅ›niej, zwÅ‚aszcza jeÅ›li planujesz zgÅ‚osiÄ‡ siÄ™ przed swoim terminem.</p>
            <h2>A jeÅ›li coÅ› przeoczyÅ‚em?</h2>
            <p>JeÅ›li nie masz pewnoÅ›ci, na czym stoisz, uczciwa odpowiedÅº brzmi: strona internetowa Ci tego nie powie â€” Å‚Ä…cznie z tÄ…. KsiÄ™gowy sprawdzi TwojÄ… sytuacjÄ™ w kilka minut, a zasady znajdziesz w oficjalnych wytycznych HMRC.</p>
            <p>My nie udzielamy porad podatkowych. MoÅ¼emy natomiast powiedzieÄ‡ jedno: nic z tego nie robi siÄ™ Å‚atwiejsze przez odkÅ‚adanie, a etap â€žlist przychodzi pocztÄ…" sprawia, Å¼e kalendarz nie jest w peÅ‚ni pod TwojÄ… kontrolÄ….</p>
            <h2>Co moÅ¼na zrobiÄ‡ w miÄ™dzyczasie</h2>
            <p>Kiedy czekasz na UTR albo zastanawiasz siÄ™, czy prÃ³g CiÄ™ Å‚apie, jest jedna rzecz, ktÃ³ra pomaga w kaÅ¼dym scenariuszu: zacznij zapisywaÄ‡ przychody i wydatki cyfrowo juÅ¼ teraz, zamiast trzymaÄ‡ je w reklamÃ³wce pod siedzeniem.</p>
            <p>Do tego wÅ‚aÅ›nie sÅ‚uÅ¼y <a href="/pl">TidGo</a> â€” paragony, dowody przychodu i CIS payslipy zbierane na bieÅ¼Ä…co, w oÅ›miu jÄ™zykach, gotowe do przekazania temu, kto ostatecznie bÄ™dzie wysyÅ‚aÅ‚ raporty. TidGo niczego nie wysyÅ‚a do HMRC i nie jest poradÄ… podatkowÄ…. Sprawia tylko, Å¼e kiedy przyjdzie termin, rekordy istniejÄ….</p>
            <section class="article-sources">
              <strong>Å¹rÃ³dÅ‚a</strong>
                    <p><a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/use-software-to-send-income-tax-updates" target="_blank" rel="noopener">Use software to send Income Tax updates</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income</a> â€” GOV.UK</p>
                    <span><em>Sprawdzone: sierpieÅ„ 2026. Wytyczne HMRC i systemy logowania siÄ™ zmieniajÄ… â€” jeÅ›li czytasz to pÃ³Åºniej, zweryfikuj pod powyÅ¼szymi linkami.</em></span>
                  </section>
      ${pageCta()}
    </article>
  `;
}

function mtdGovernmentGatewayArticleRO() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Government Gateway È™i MTD: sÄƒ ai cont nu Ã®nseamnÄƒ cÄƒ eÈ™ti Ã®nscris</h1>
            
      <p>DacÄƒ ai ajuns aici pentru cÄƒ nu gÄƒseai unde sÄƒ te loghezi pentru MTD â€” eÈ™ti Ã®n locul potrivit, doar din motivul greÈ™it.</p><h2>DacÄƒ am cont Government Gateway, Ã®nseamnÄƒ cÄƒ sunt Ã®nscris Ã®n MTD?</h2>
            <p>Nu. Sunt douÄƒ lucruri complet diferite, iar confuzia dintre ele este acum una dintre cele mai frecvente greÈ™eli.</p>
            <p>Contul Government Gateway este <strong>o autentificare</strong>. Numele de utilizator È™i parola care Ã®È›i dau acces la serviciile online HMRC â€” atÃ¢t. Nu te Ã®nregistreazÄƒ la nimic, nu Ã®i spune fiscului cu ce te ocupi È™i nu te introduce Ã®n Making Tax Digital.</p>
            <p>ÃŽnscrierea Ã®n MTD este <strong>o acÈ›iune separatÄƒ</strong>, fÄƒcutÄƒ printr-un serviciu separat, dupÄƒ care HMRC Ã®È›i stabileÈ™te obligaÈ›ii concrete. PÃ¢nÄƒ nu o faci, nu eÈ™ti Ã®n sistem â€” indiferent de cÃ¢È›i ani ai contul.</p>
            <h2>Ce este, pe scurt, Government Gateway?</h2>
            <p>GÃ¢ndeÈ™te-te la el ca la cheia de la uÈ™a din faÈ›Äƒ a HMRC online. DacÄƒ ai depus vreodatÄƒ o declaraÈ›ie Self Assessment online, ai folosit aplicaÈ›ia HMRC sau ai cerut tax-free childcare â€” deja ai unul.</p>
            <p>Sunt doar date de acces. Ce se aflÄƒ dincolo de uÈ™Äƒ depinde exclusiv de ce ai Ã®nregistrat separat.</p>
            <p>Un lucru de È™tiut: HMRC mutÄƒ treptat utilizatorii noi pe <strong>GOV.UK One Login</strong>, care Ã®nlocuieÈ™te Government Gateway Ã®n serviciile guvernamentale. DacÄƒ Ã®È›i faci cont acum, s-ar putea sÄƒ vezi One Login. Principiul e identic â€” este o metodÄƒ de autentificare, nu o Ã®nregistrare.</p>
            <h2>Cei trei paÈ™i pe care lumea Ã®i confundÄƒ</h2>
            <p>Aproape toatÄƒ lumea Ã®i amestecÄƒ, aÈ™a cÄƒ iatÄƒ-i separat, Ã®n ordine:</p>
            <p><strong>Un cont de autentificare</strong> â€” Government Gateway sau GOV.UK One Login. Doar credenÈ›iale.</p>
            <p><strong>ÃŽnregistrarea la Self Assessment</strong> â€” Ã®i spune HMRC cÄƒ ai venituri de declarat. PrimeÈ™ti un UTR, un numÄƒr din zece cifre care rÄƒmÃ¢ne al tÄƒu pe viaÈ›Äƒ.</p>
            <p><strong>ÃŽnscrierea Ã®n Making Tax Digital</strong> â€” serviciu separat, dupÄƒ primii doi paÈ™i, care te introduce Ã®n raportarea trimestrialÄƒ.</p>
            <p>PoÈ›i avea pasul 1 fÄƒrÄƒ pasul 2. PoÈ›i avea paÈ™ii 1 È™i 2 fÄƒrÄƒ pasul 3. Majoritatea celor care cred cÄƒ â€žau totul pus la punct" au fÄƒcut primii doi È™i presupun cÄƒ al treilea s-a Ã®ntÃ¢mplat de la sine.</p>
            <h2>DacÄƒ ai deja cont Government Gateway</h2>
            <p>Pasul 1 este bifat. Mai rÄƒmÃ¢ne:</p>
            <p><strong>VerificÄƒ dacÄƒ eÈ™ti Ã®nregistrat la Self Assessment.</strong> DacÄƒ depui declaraÈ›ie Ã®n fiecare an, eÈ™ti. DacÄƒ nu ai depus niciodatÄƒ, cel mai probabil nu eÈ™ti È™i trebuie sÄƒ Ã®ncepi cu Ã®nregistrarea.</p>
            <p><strong>VerificÄƒ dacÄƒ MTD È›i se aplicÄƒ.</strong> Depinde de <a href="/ro/mtd/qualifying-income">qualifying income</a> â€” venitul brut Ã®nainte de cheltuieli, cu activitatea independentÄƒ È™i chiriile adunate. Nu este profitul tÄƒu.</p>
            <p><strong>ÃŽnscrie-te Ã®n MTD, folosind aceleaÈ™i date de autentificare.</strong> <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Serviciul de Ã®nscriere este pe GOV.UK</a>. FoloseÈ™ti acelaÈ™i user ID È™i aceeaÈ™i parolÄƒ primite la Ã®nregistrarea pentru Self Assessment. HMRC verificÄƒ eligibilitatea pe baza datelor furnizate. DacÄƒ ai contabil cu agent services account, te poate Ã®nscrie el.</p>
            <h2>DacÄƒ nu ai cont Government Gateway</h2>
            <p>MulÈ›i oameni nu au È™i nu e nimic neobiÈ™nuit â€” dacÄƒ ai lucrat mereu pe PAYE, dacÄƒ abia Ã®ncepi pe cont propriu sau dacÄƒ altcineva s-a ocupat mereu de impozitele tale, nu ai avut motiv sÄƒ Ã®È›i faci unul.</p>
            <p>Aici ordinea conteazÄƒ:</p>
            <p><strong>ÃŽntÃ¢i fÄƒ-È›i cont.</strong> IntrÄƒ pe <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">pagina de autentificare HMRC</a> È™i alege crearea datelor de acces. ÃŽÈ›i trebuie o adresÄƒ de email pe care chiar o verifici â€” HMRC trimite acolo un cod de confirmare. Ca sole trader, alege tipul de cont individual/personal; legal, tu È™i activitatea ta sunteÈ›i aceeaÈ™i persoanÄƒ.</p>
            <p><strong>Apoi Ã®nregistreazÄƒ-te la Self Assessment.</strong> <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">Se face pe GOV.UK</a> È™i dureazÄƒ cam cincisprezece minute. PregÄƒteÈ™te numÄƒrul de National Insurance, data la care ai Ã®nceput pe cont propriu È™i o descriere de o frazÄƒ a activitÄƒÈ›ii â€” â€žinstalator" sau â€žÈ™ofer de furgonetÄƒ" este suficient.</p>
            <p><strong>Apoi aÈ™teaptÄƒ UTR-ul, care vine prin poÈ™tÄƒ.</strong> Aici se Ã®mpiedicÄƒ lumea: Unique Taxpayer Reference vine pe hÃ¢rtie, de obicei Ã®n aproximativ zece zile lucrÄƒtoare, mai mult dacÄƒ locuieÈ™ti Ã®n afara È›Äƒrii. FÄƒrÄƒ el nu poÈ›i Ã®nchide procesul, iar reÃ®mprospÄƒtarea paginii nu grÄƒbeÈ™te nimic.</p>
            <p><strong>Apoi Ã®nscrie-te Ã®n MTD</strong>, dacÄƒ qualifying income Ã®nseamnÄƒ cÄƒ È›i se aplicÄƒ.</p>
            <p>DacÄƒ porneÈ™ti de la zero, planificÄƒ cÃ¢teva sÄƒptÄƒmÃ¢ni â€” nu o dupÄƒ-amiazÄƒ.</p>
            <h2>Ce se Ã®ntÃ¢mplÄƒ dupÄƒ Ã®nscrierea Ã®n MTD?</h2>
            <p>Aceasta este partea pe care aproape nimeni nu o explicÄƒ.</p>
            <p>DupÄƒ Ã®nscriere, HMRC Ã®È›i stabileÈ™te <strong>obligaÈ›ii (obligations)</strong> â€” o listÄƒ concretÄƒ cu ce trebuie sÄƒ raportezi È™i cÃ¢nd. EsenÈ›ial: ele se stabilesc <strong>separat pentru fiecare sursÄƒ de venit</strong>. DouÄƒ activitÄƒÈ›i È™i o proprietate Ã®nchiriatÄƒ Ã®nseamnÄƒ trei seturi separate de obligaÈ›ii de raportare, nu o declaraÈ›ie comunÄƒ.</p>
            <p>Fiecare cere propriile cifre, completate din Ã®nregistrÄƒrile tale È™i trimise printr-un software compatibil cu MTD. Nu existÄƒ niciun formular pe site-ul HMRC Ã®n care sÄƒ le poÈ›i introduce.</p>
            <p>De aici rezultÄƒ consecinÈ›a pe care lumea o rateazÄƒ complet: <strong>odatÄƒ intrat Ã®n MTD, È™i declaraÈ›ia anualÄƒ trebuie sÄƒ treacÄƒ printr-un software compatibil sau prin contabil.</strong> Vechea variantÄƒ â€žo fac singur pe site-ul HMRC" nu Ã®È›i mai este disponibilÄƒ. Asta este valabil atÃ¢t dacÄƒ regulile te-au prins automat, cÃ¢t È™i dacÄƒ te-ai Ã®nscris voluntar mai devreme.</p>
            <p>Nu e un motiv sÄƒ eviÈ›i Ã®nscrierea â€” pentru majoritatea oamenilor oricum nu este opÈ›ionalÄƒ. Dar meritÄƒ sÄƒ È™tii Ã®nainte, mai ales dacÄƒ plÄƒnuieÈ™ti sÄƒ te Ã®nscrii Ã®naintea termenului tÄƒu.</p>
            <h2>DacÄƒ am ratat ceva?</h2>
            <p>DacÄƒ nu eÈ™ti sigur unde te afli, rÄƒspunsul onest este cÄƒ un site nu Ã®È›i poate spune â€” inclusiv acesta. Contabilul tÄƒu Ã®È›i verificÄƒ situaÈ›ia Ã®n cÃ¢teva minute, iar regulile sunt Ã®n ghidurile oficiale HMRC.</p>
            <p>Noi nu oferim consultanÈ›Äƒ fiscalÄƒ. Putem spune Ã®nsÄƒ un lucru: nimic din toate astea nu devine mai uÈ™or dacÄƒ amÃ¢ni, iar etapa â€žscrisoarea vine prin poÈ™tÄƒ" face ca termenele sÄƒ nu fie complet sub controlul tÄƒu.</p>
            <h2>Ce poÈ›i face Ã®ntre timp</h2>
            <p>CÃ¢t aÈ™tepÈ›i UTR-ul sau te lÄƒmureÈ™ti dacÄƒ pragul te prinde, existÄƒ un lucru care ajutÄƒ Ã®n orice scenariu: Ã®ncepe sÄƒ Ã®È›i notezi veniturile È™i cheltuielile digital chiar acum, Ã®n loc sÄƒ le È›ii Ã®ntr-o pungÄƒ sub scaun.</p>
            <p>Exact pentru asta existÄƒ <a href="/ro">TidGo</a> â€” bonuri, dovezi de venit È™i payslipuri CIS strÃ¢nse pe parcurs, Ã®n opt limbi, gata de predat celui care va face raportarea. TidGo nu trimite nimic la HMRC È™i nu este consultanÈ›Äƒ fiscalÄƒ. Face doar ca, atunci cÃ¢nd vine termenul, Ã®nregistrÄƒrile sÄƒ existe.</p>
            <section class="article-sources">
              <strong>Surse</strong>
                    <p><a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/use-software-to-send-income-tax-updates" target="_blank" rel="noopener">Use software to send Income Tax updates</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income</a> â€” GOV.UK</p>
                    <span><em>Verificat: august 2026. Ghidurile HMRC È™i sistemele de autentificare se schimbÄƒ â€” dacÄƒ citeÈ™ti mai tÃ¢rziu, verificÄƒ la linkurile de mai sus.</em></span>
                  </section>
      ${pageCta()}
    </article>
  `;
}

function mtdGovernmentGatewayArticleLT() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Government Gateway ir MTD: turÄ—ti paskyrÄ… nereiÅ¡kia bÅ«ti uÅ¾siregistravus</h1>
            
      <p>Jei Äia patekote todÄ—l, kad neradote kur prisijungti prie MTD â€” esate tinkamoje vietoje, tik dÄ—l netinkamos prieÅ¾asties.</p><h2>Jei turiu Government Gateway paskyrÄ…, ar jau esu uÅ¾siregistravÄ™s MTD?</h2>
            <p>Ne. Tai du visiÅ¡kai skirtingi dalykai, o jÅ³ painiojimas Å¡iuo metu yra viena daÅ¾niausiÅ³ klaidÅ³.</p>
            <p>Government Gateway paskyra â€” tai <strong>prisijungimas</strong>. Naudotojo vardas ir slaptaÅ¾odis, kurie Ä¯leidÅ¾ia tave Ä¯ HMRC internetines paslaugas â€” ir tiek. Ji tavÄ™s niekur neuÅ¾registruoja, nepasako mokesÄiÅ³ inspekcijai, kuo uÅ¾siimi, ir neÄ¯traukia tavÄ™s Ä¯ Making Tax Digital.</p>
            <p>Registracija MTD â€” tai <strong>atskiras veiksmas</strong>, atliekamas atskiroje paslaugoje, po kurio HMRC nustato tau konkreÄias prievoles. Kol jos neatliksi, sistemoje tavÄ™s nÄ—ra â€” nesvarbu, kiek metÅ³ turi tÄ… paskyrÄ….</p>
            <h2>Kas iÅ¡ tikrÅ³jÅ³ yra Government Gateway?</h2>
            <p>PaprasÄiausiai â€” tai raktas nuo HMRC internetiniÅ³ durÅ³. Jei kada nors pildei Self Assessment deklaracijÄ… internetu, naudojaisi HMRC programÄ—le ar teikei praÅ¡ymÄ… dÄ—l tax-free childcare â€” paskyrÄ… jau turi.</p>
            <p>Tai tiesiog prisijungimo duomenys. Kas yra uÅ¾ tÅ³ durÅ³, priklauso tik nuo to, kur atskirai uÅ¾siregistravai.</p>
            <p>Vienas dalykas, kurÄ¯ verta Å¾inoti: HMRC palaipsniui perkelia naujus naudotojus Ä¯ <strong>GOV.UK One Login</strong>, kuris keiÄia Government Gateway visose valstybÄ—s paslaugose. Jei paskyrÄ… kuri dabar, gali matyti bÅ«tent One Login. Principas tas pats â€” tai prisijungimo bÅ«das, ne registracija.</p>
            <h2>Trys Å¾ingsniai, kuriuos Å¾monÄ—s painioja</h2>
            <p>Beveik visi juos sumaiÅ¡o, tad Å¡tai jie atskirai, iÅ¡ eilÄ—s:</p>
            <p><strong>Paskyra prisijungimui</strong> â€” Government Gateway arba GOV.UK One Login. Tik prisijungimo duomenys.</p>
            <p><strong>Registracija Self Assessment</strong> â€” ja praneÅ¡i HMRC, kad turi deklaruotinÅ³ pajamÅ³. Gauni UTR â€” deÅ¡imties skaitmenÅ³ numerÄ¯, kuris lieka tau visam gyvenimui.</p>
            <p><strong>Registracija Making Tax Digital</strong> â€” atskira paslauga po pirmÅ³ dviejÅ³ Å¾ingsniÅ³, kuri Ä¯traukia tave Ä¯ ketvirtinÄ¯ raportavimÄ….</p>
            <p>Gali turÄ—ti 1 Å¾ingsnÄ¯ be 2. Gali turÄ—ti 1 ir 2 be 3. Dauguma tÅ³, kurie mano, kad â€žviskas sutvarkyta", atliko pirmus du ir daro prielaidÄ…, kad treÄias Ä¯vyko savaime.</p>
            <h2>Jei jau turi Government Gateway paskyrÄ…</h2>
            <p>Pirmas Å¾ingsnis atliktas. Lieka:</p>
            <p><strong>Patikrink, ar esi uÅ¾siregistravÄ™s Self Assessment.</strong> Jei kasmet teiki deklaracijÄ… â€” esi. Jei niekada neteikei, greiÄiausiai nesi ir reikia pradÄ—ti nuo registracijos.</p>
            <p><strong>Patikrink, ar MTD apskritai tau taikomas.</strong> Tai priklauso nuo tavo <a href="/lt/mtd/qualifying-income">qualifying income</a> â€” bendrÅ³jÅ³ pajamÅ³ prieÅ¡ iÅ¡laidas, sudedant veiklos ir nuomos pajamas kartu. Tai ne tavo pelnas.</p>
            <p><strong>UÅ¾siregistruok MTD naudodamas tuos paÄius prisijungimo duomenis.</strong> <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Registracijos paslauga yra GOV.UK</a>. Naudoji tÄ… patÄ¯ user ID ir slaptaÅ¾odÄ¯, kuriuos gavai registruodamasis Self Assessment. HMRC patikrina tinkamumÄ… pagal pateiktus duomenis. Jei turi buhalterÄ¯ su agent services account, jis gali uÅ¾registruoti tave.</p>
            <h2>Jei Government Gateway paskyros neturi</h2>
            <p>Daug kas jos neturi ir tai visiÅ¡kai normalu â€” jei visada dirbai pagal PAYE, tik pradedi savarankiÅ¡kai arba tavo mokesÄiais visada rÅ«pinosi kas nors kitas, prieÅ¾asties jÄ… kurti ir nebuvo.</p>
            <p>ÄŒia eiliÅ¡kumas svarbus:</p>
            <p><strong>Pirmiausia susikurk paskyrÄ….</strong> Eik Ä¯ <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">HMRC prisijungimo puslapÄ¯</a> ir pasirink prisijungimo duomenÅ³ kÅ«rimÄ…. ReikÄ—s el. paÅ¡to, kurÄ¯ tikrai tikrini â€” HMRC atsiÅ³s Ä¯ jÄ¯ patvirtinimo kodÄ…. Kaip sole trader rinkis individualaus/asmeninio tipo paskyrÄ…; teisiÅ¡kai tu ir tavo veikla esate tas pats asmuo.</p>
            <p><strong>Tada uÅ¾siregistruok Self Assessment.</strong> <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">Tai daroma GOV.UK</a> ir uÅ¾trunka apie penkiolika minuÄiÅ³. PasiruoÅ¡k National Insurance numerÄ¯, savarankiÅ¡kos veiklos pradÅ¾ios datÄ… ir vieno sakinio veiklos apraÅ¡ymÄ… â€” â€žsantechnikas" arba â€žfurgono vairuotojas" visiÅ¡kai pakanka.</p>
            <p><strong>Tada lauk UTR, kuris ateis paÅ¡tu.</strong> BÅ«tent Äia Å¾monÄ—s suklumpa: Unique Taxpayer Reference ateina popieriuje, paprastai per maÅ¾daug deÅ¡imt darbo dienÅ³, ilgiau jei gyveni uÅ¾sienyje. Be jo proceso neuÅ¾baigsi, o puslapio atnaujinimas nieko nepagreitins.</p>
            <p><strong>Tada registruokis MTD</strong>, jei qualifying income reiÅ¡kia, kad jis tau taikomas.</p>
            <p>Jei pradedi nuo nulio, planuok kelias savaites â€” ne vienÄ… popietÄ™.</p>
            <h2>Kas vyksta po registracijos MTD?</h2>
            <p>Tai dalis, kurios beveik niekas nepaaiÅ¡kina.</p>
            <p>UÅ¾siregistravus HMRC nustato tau <strong>prievoles (obligations)</strong> â€” konkretÅ³ sÄ…raÅ¡Ä…, kÄ… ir kada turi raportuoti. Ir svarbiausia: jos nustatomos <strong>atskirai kiekvienam pajamÅ³ Å¡altiniui</strong>. Dvi veiklos ir vienas nuomojamas bÅ«stas reiÅ¡kia tris atskirus raportavimo prievoliÅ³ rinkinius, o ne vienÄ… bendrÄ… deklaracijÄ….</p>
            <p>Kiekvienam reikia savÅ³ skaiÄiÅ³, uÅ¾pildytÅ³ iÅ¡ tavo Ä¯raÅ¡Å³ ir pateiktÅ³ per su MTD suderinamÄ… programinÄ™ Ä¯rangÄ…. Jokios formos HMRC svetainÄ—je, Ä¯ kuriÄ… juos galÄ—tum tiesiog Ä¯raÅ¡yti, nÄ—ra.</p>
            <p>IÅ¡ to kyla pasekmÄ—, kuriÄ… Å¾monÄ—s visiÅ¡kai praleidÅ¾ia: <strong>patekus Ä¯ MTD, ir metinÄ— deklaracija turi eiti per suderinamÄ… programinÄ™ Ä¯rangÄ… arba per buhalterÄ¯.</strong> Senasis kelias â€žpadarysiu pats HMRC svetainÄ—je" tau nebeprieinamas. Tai galioja ir tiems, kuriuos taisyklÄ—s pagavo automatiÅ¡kai, ir tiems, kurie uÅ¾siregistravo savanoriÅ¡kai anksÄiau.</p>
            <p>Tai nÄ—ra prieÅ¾astis vengti registracijos â€” daugumai Å¾moniÅ³ ji vis tiek nÄ—ra pasirinkimas. Bet verta Å¾inoti iÅ¡ anksto, ypaÄ jei planuoji registruotis prieÅ¡ savo terminÄ….</p>
            <h2>O jei kÄ… nors praleidau?</h2>
            <p>Jei nesi tikras, kokia tavo padÄ—tis, sÄ…Å¾iningas atsakymas toks: interneto svetainÄ— tau to nepasakys â€” Ä¯skaitant Å¡iÄ…. Buhalteris tavo situacijÄ… patikrins per kelias minutes, o taisyklÄ—s yra oficialiose HMRC gairÄ—se.</p>
            <p>Mes mokesÄiÅ³ konsultacijÅ³ neteikiame. Bet vienÄ… dalykÄ… pasakyti galime: niekas iÅ¡ to nepalengvÄ—ja atidÄ—liojant, o etapas â€žlaiÅ¡kas ateina paÅ¡tu" reiÅ¡kia, kad kalendorius nÄ—ra visiÅ¡kai tavo rankose.</p>
            <h2>KÄ… galima padaryti tuo tarpu</h2>
            <p>Kol lauki UTR arba aiÅ¡kiniesi, ar riba tave pagauna, yra vienas dalykas, kuris padeda bet kuriuo atveju: pradÄ—k fiksuoti pajamas ir iÅ¡laidas skaitmeniniu bÅ«du jau dabar, o ne laikyk jas maiÅ¡elyje po sÄ—dyne.</p>
            <p>BÅ«tent tam ir yra <a href="/lt">TidGo</a> â€” kvitai, pajamÅ³ Ä¯rodymai ir CIS payslipai renkami eigoje, aÅ¡tuoniomis kalbomis, paruoÅ¡ti perduoti tam, kas galiausiai teiks ataskaitas. TidGo nieko nesiunÄia Ä¯ HMRC ir nÄ—ra mokesÄiÅ³ konsultacija. Ji tik pasirÅ«pina, kad atÄ—jus terminui Ä¯raÅ¡ai egzistuotÅ³.</p>
            <section class="article-sources">
              <strong>Å altiniai</strong>
                    <p><a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/use-software-to-send-income-tax-updates" target="_blank" rel="noopener">Use software to send Income Tax updates</a> â€” GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income</a> â€” GOV.UK</p>
                    <span><em>Patikrinta: 2026 m. rugpjÅ«tis. HMRC gairÄ—s ir prisijungimo sistemos keiÄiasi â€” jei skaitai vÄ—liau, pasitikrink pagal nuorodas aukÅ¡Äiau.</em></span>
                  </section>
      ${pageCta()}
    </article>
  `;
}

function mtdSources() {
  return `
    <section class="article-sources">
      <strong>Sources</strong>
      <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax" target="_blank" rel="noopener noreferrer">GOV.UK: Use Making Tax Digital for Income Tax</a>
      <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener noreferrer">GOV.UK: Create digital records</a>
      <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener noreferrer">GOV.UK: Send quarterly updates</a>
    </section>
  `;
}

function pageCta() {
  return `
    <div class="marketing-page-actions">
      <a class="primary landing-link marketing-open-app" href="/app/">${mk("openApp")}</a>
      <a class="secondary landing-link marketing-open-portal" href="/accountant/">${mk("openPortal")}</a>
      <button class="secondary landing-link marketing-share" type="button" data-action="shareTidGo">${mk("shareTidGo")}</button>
      <a class="secondary landing-link marketing-back-home" href="/">${mk("backHome")}</a>
    </div>
  `;
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

function loadAnalytics() {
  if (window.tidgoAnalyticsLoaded || !GA_MEASUREMENT_ID) return;
  window.tidgoAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

function applyCookieChoice() {
  if (read("tg_cookie_choice", "") === "analytics") loadAnalytics();
}

function cookieConsentBanner() {
  if (read("tg_cookie_choice", "")) return "";
  return `
    <div class="cookie-consent" role="dialog" aria-live="polite" aria-label="${escapeAttr(t("cookieTitle"))}">
      <div>
        <strong>${t("cookieTitle")}</strong>
        <span>${t("cookieText")}</span>
      </div>
      <div class="cookie-actions">
        <button class="secondary" type="button" data-cookie-choice="essential">${t("cookieDecline")}</button>
        <button class="primary" type="button" data-cookie-choice="analytics">${t("cookieAccept")}</button>
      </div>
    </div>
  `;
}

function renderCookieConsent() {
  let holder = document.getElementById("cookieConsentHost");
  if (!holder) {
    holder = document.createElement("div");
    holder.id = "cookieConsentHost";
    document.body.appendChild(holder);
  }
  holder.innerHTML = cookieConsentBanner();
  applyCookieChoice();
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

function clearWhatsAppSessionState() {
  state.whatsappChangeCodeSent = false;
  state.whatsappChangeUnlocked = false;
  state.whatsappChangeOpen = false;
  state.whatsappChangeEmail = "";
  state.pendingSignupWhatsApp = "";
  forget("rb_pending_signup_whatsapp");
}

async function clearSignedInUserSession() {
  await deviceForget("rb_user");
  await deviceForget("rb_last_user");
  forget("rb_pending_signup_email");
  forget("rb_pending_income_sources");
  write("rb_signed_out", true);
  clearWhatsAppSessionState();
  state.pendingSignupEmail = "";
  state.pendingSignupIncomeSources = [];
  state.user = null;
  state.receipts = [];
  state.income = [];
  state.accountantConsents = [];
  state.selected = null;
}

async function requestWhatsAppUnlinkForUser(userId) {
  if (!userId) return;
  try {
    await api("/api/whatsapp/unlink", {
      method: "POST",
      timeoutMs: 6000,
      body: JSON.stringify({ user_id: userId })
    });
  } catch {
    // Older API deploys do not have this endpoint yet; local sign-out must still work.
  }
}

function cleanIncomeSources(values) {
  return Array.isArray(values) ? values.filter((value) => INCOME_SOURCE_KEYS.includes(value)) : [];
}

function userIncomeSourceKey(user = state.user) {
  return user?.id ? `rb_income_sources_${user.id}` : "rb_pending_income_sources";
}

function readIncomeSources(user = state.user) {
  const fromUser = cleanIncomeSources(user?.income_sources);
  if (fromUser.length) return fromUser;
  return cleanIncomeSources(read(userIncomeSourceKey(user), []));
}

function writeIncomeSources(user, sources) {
  const clean = cleanIncomeSources(sources);
  write(userIncomeSourceKey(user), clean);
  return clean;
}

function formIncomeSources(data) {
  return INCOME_SOURCE_KEYS.filter((key) => data[`income_source_${key}`]);
}

function businessSlotsKey(user = state.user) {
  return user?.id ? `rb_business_slots_${user.id}` : "rb_business_slots_guest";
}

function defaultBusinessSlots(user = state.user) {
  const sources = readIncomeSources(user);
  const trade = String(user?.trade || "").trim();
  const slots = [];
  if (sources.some((source) => source !== "landlord")) {
    slots.push({ id: "se-1", type: "self-employment", label: trade || t("businessSelfEmployment") });
  }
  if (sources.includes("landlord")) {
    slots.push({ id: "uk-property", type: "uk-property", label: t("businessProperty") });
  }
  return slots.length ? slots : [{ id: "se-1", type: "self-employment", label: t("businessSelfEmployment") }];
}

function cleanBusinessSlots(slots, user = state.user) {
  const sources = readIncomeSources(user);
  const hasSelfEmployment = sources.some((source) => source !== "landlord");
  const hasProperty = sources.includes("landlord");
  const sourceSlots = Array.isArray(slots) ? slots : [];
  const out = [];
  if (hasSelfEmployment) {
    ["se-1", "se-2", "se-3"].forEach((id) => {
      const existing = sourceSlots.find((slot) => slot?.id === id);
      const label = String(existing?.label || "").trim();
      if (id === "se-1" || label) {
        out.push({ id, type: "self-employment", label: label || (id === "se-1" ? (user?.trade || t("businessSelfEmployment")) : "") });
      }
    });
  }
  if (hasProperty) out.push({ id: "uk-property", type: "uk-property", label: t("businessProperty") });
  return out.length ? out : defaultBusinessSlots(user);
}

function readBusinessSlots(user = state.user) {
  const storedRaw = read(businessSlotsKey(user), []);
  if (Array.isArray(storedRaw) && storedRaw.length) return cleanBusinessSlots(storedRaw, user);
  if (Array.isArray(user?.business_slots) && user.business_slots.length) return cleanBusinessSlots(user.business_slots, user);
  return defaultBusinessSlots(user);
}

function writeBusinessSlots(user, slots) {
  const clean = cleanBusinessSlots(slots, user);
  write(businessSlotsKey(user), clean);
  return clean;
}

function formBusinessSlots(data) {
  const slots = [];
  ["se-1", "se-2", "se-3"].forEach((id) => {
    const label = String(data[`business_slot_${id}`] || "").trim();
    if (id === "se-1" || label) slots.push({ id, type: "self-employment", label });
  });
  if (readIncomeSources().includes("landlord")) slots.push({ id: "uk-property", type: "uk-property", label: t("businessProperty") });
  return cleanBusinessSlots(slots);
}

function businessSlotById(id, fallbackType = "") {
  const slots = readBusinessSlots();
  return slots.find((slot) => slot.id === id) || slots.find((slot) => slot.type === fallbackType) || slots[0] || defaultBusinessSlots()[0];
}

function recordBusinessMeta(id) {
  return id ? (state.recordBusinessMeta[id] || {}) : {};
}

function saveRecordBusinessMeta(id, slot) {
  if (!id || !slot) return;
  state.recordBusinessMeta[id] = { business_type: slot.type, business_slot_id: slot.id, business_slot_label: slot.label };
  write("rb_record_business_meta", state.recordBusinessMeta);
}

function applyRecordBusinessMeta(item = {}) {
  const meta = recordBusinessMeta(item.id);
  const slot = businessSlotById(meta.business_slot_id || item.business_slot_id, meta.business_type || item.business_type);
  return {
    ...item,
    business_type: meta.business_type || item.business_type || slot?.type,
    business_slot_id: meta.business_slot_id || item.business_slot_id || slot?.id,
    business_slot_label: meta.business_slot_label || item.business_slot_label || slot?.label
  };
}

function normalizeReceiptResponse(response = {}) {
  const receipt = response.receipt || response.data || response;
  const id = receipt.id || receipt.receipt_id || receipt._id || response.id || response.receipt_id || response._id;
  return id ? { ...receipt, id: String(id) } : receipt;
}

function upsertReceiptLocal(receipt = {}, fallback = {}) {
  if (!receipt?.id && !fallback?.id) return null;
  const existing = state.receipts.find((item) => item.id === (receipt.id || fallback.id)) || {};
  const merged = applyRecordBusinessMeta({
    ...existing,
    ...fallback,
    ...receipt,
    timestamp: receipt.timestamp || receipt.created_at || fallback.timestamp || fallback.created_at || existing.timestamp || new Date().toISOString()
  });
  state.receipts = [merged, ...state.receipts.filter((item) => item.id !== merged.id)];
  return merged;
}

function replaceReceiptLocal(receiptId, receipt = {}, fallback = {}) {
  if (!receiptId) return null;
  const existing = state.receipts.find((item) => item.id === receiptId) || {};
  const merged = applyRecordBusinessMeta({
    ...existing,
    ...fallback,
    ...receipt,
    id: receipt.id || receiptId,
    timestamp: receipt.timestamp || receipt.created_at || fallback.timestamp || fallback.created_at || existing.timestamp
  });
  state.receipts = state.receipts.map((item) => item.id === receiptId ? merged : item);
  if (!state.receipts.some((item) => item.id === merged.id)) state.receipts = [merged, ...state.receipts];
  return merged;
}

function removeReceiptLocal(receiptId) {
  if (!receiptId) return;
  state.receipts = state.receipts.filter((item) => item.id !== receiptId);
}

function removeIncomeLocal(incomeId) {
  if (!incomeId) return;
  state.income = state.income.filter((item) => item.id !== incomeId);
}

function businessLabelForRecord(item = {}) {
  const meta = recordBusinessMeta(item.id);
  return meta.business_slot_label || item.business_slot_label || businessSlotById(meta.business_slot_id || item.business_slot_id, meta.business_type || item.business_type)?.label || "";
}

function selectedBusinessTypeLabel() {
  const slot = businessSlotById(state.pendingBusinessSlotId, normalizeBusinessType(state.pendingBusinessType));
  return slot?.label || (normalizeBusinessType(state.pendingBusinessType) === "uk-property" ? t("businessProperty") : t("businessSelfEmployment"));
}

function defaultBusinessType() {
  return businessSlotById(readBusinessSlots()[0]?.id)?.type || "self-employment";
}

function defaultBusinessSlotId() {
  return readBusinessSlots()[0]?.id || "se-1";
}

function shouldAskBusinessType() {
  return readBusinessSlots().length > 1;
}

function startRecordFlow(kind) {
  state.pendingRecordKind = kind;
  state.pendingBusinessType = "";
  state.pendingBusinessSlotId = "";
  if (shouldAskBusinessType()) return go("businessTypeChoice");
  const slot = businessSlotById(defaultBusinessSlotId());
  state.pendingBusinessType = slot.type;
  state.pendingBusinessSlotId = slot.id;
  return go(kind === "income" ? "incomeForm" : "expenseChoice");
}

async function rememberUser(user) {
  const incomeSources = writeIncomeSources(user, user?.income_sources || readIncomeSources(user));
  const businessSlots = writeBusinessSlots({ ...user, income_sources: incomeSources }, user?.business_slots || readBusinessSlots({ ...user, income_sources: incomeSources }));
  const storedUser = { ...user, income_sources: incomeSources, business_slots: businessSlots };
  state.user = storedUser;
  forget("rb_signed_out");
  await deviceSet("rb_user", storedUser);
  await deviceSet("rb_last_user", {
    id: storedUser.id,
    first_name: storedUser.first_name,
    email: storedUser.email || "",
    income_sources: incomeSources,
    business_slots: businessSlots,
    language: storedUser.language || state.language
  });
}

async function restoreDeviceUser() {
  if (state.user?.id) return;
  if (read("rb_signed_out", false)) {
    state.user = null;
    forget("rb_user");
    return;
  }
  const user = await deviceGet("rb_user", null);
  if (user?.id) {
    state.user = { ...user, income_sources: readIncomeSources(user) };
    write("rb_user", state.user);
    if (user.language) state.language = user.language;
  }
}

function uiLocale() {
  return UI_LOCALES[state.language] || "en-GB";
}

function money(amount, currency = "GBP") {
  const code = (currency || "GBP").toUpperCase();
  const value = Number(amount || 0);
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };
  if (code === "GBP") {
    const formatted = new Intl.NumberFormat(uiLocale(), options).format(Number.isFinite(value) ? value : 0);
    return `Â£${formatted}`;
  }
  const formatted = new Intl.NumberFormat(uiLocale(), options).format(Number.isFinite(value) ? value : 0);
  return `${formatted} ${code}`;
}

function appDate(value) {
  if (!value) return new Date();
  if (value instanceof Date) return value;
  const text = String(value);
  const dateOnly = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (dateOnly) {
    return new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]), 12);
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function appDateKey(value) {
  const date = appDate(value);
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function day(value) {
  return appDate(value).toLocaleDateString(uiLocale(), { day: "2-digit", month: "short" });
}

function dateInputValue(value) {
  return appDateKey(value || Date.now());
}

function focusSummaryOnRecord(record) {
  const rawDate = record?.timestamp || record?.created_at || record?.date;
  const date = appDate(rawDate);
  if (Number.isNaN(date.getTime())) return;
  state.summaryDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function anchorSummaryDateToMonthStart() {
  state.summaryDate = new Date(state.summaryDate.getFullYear(), state.summaryDate.getMonth(), 1);
}

function monthLabel(date = state.summaryDate) {
  return date.toLocaleDateString(uiLocale(), { month: "long", year: "numeric" });
}

function quarterRange(date = state.summaryDate) {
  if (state.quarterMode === "mtd_running") return mtdRunningQuarterRange(date);
  if (state.quarterMode === "uk_tax") return ukTaxQuarterRange(date);
  const year = date.getFullYear();
  const quarter = Math.floor(date.getMonth() / 3);
  const start = new Date(year, quarter * 3, 1);
  const end = new Date(year, quarter * 3 + 3, 0);
  const endExclusive = new Date(year, quarter * 3 + 3, 1);
  return { start, end, endExclusive, quarter: quarter + 1, year, mode: "calendar" };
}

function ukTaxQuarterRange(date = state.summaryDate) {
  const value = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const starts = [
    new Date(value.getFullYear() - 1, 9, 6),
    new Date(value.getFullYear(), 0, 6),
    new Date(value.getFullYear(), 3, 6),
    new Date(value.getFullYear(), 6, 6),
    new Date(value.getFullYear(), 9, 6),
    new Date(value.getFullYear() + 1, 0, 6),
    new Date(value.getFullYear() + 1, 3, 6)
  ].sort((a, b) => a - b);
  let start = starts[0];
  let endExclusive = starts[1];
  for (let index = 0; index < starts.length - 1; index += 1) {
    if (value >= starts[index] && value < starts[index + 1]) {
      start = starts[index];
      endExclusive = starts[index + 1];
      break;
    }
  }
  const taxYearStartYear = start >= new Date(start.getFullYear(), 3, 6) ? start.getFullYear() : start.getFullYear() - 1;
  const quarter = Math.floor(((start.getMonth() - 3 + 12) % 12) / 3) + 1;
  return {
    start,
    end: new Date(endExclusive.getFullYear(), endExclusive.getMonth(), endExclusive.getDate() - 1),
    endExclusive,
    quarter,
    year: taxYearStartYear,
    mode: "uk_tax"
  };
}

function mtdRunningQuarterRange(date = state.summaryDate) {
  const period = ukTaxQuarterRange(date);
  return {
    ...period,
    start: new Date(period.year, 3, 6),
    mode: "mtd_running"
  };
}

function periodLabel(date = state.summaryDate) {
  if (state.summaryPeriod !== "quarter") return monthLabel(date);
  const range = quarterRange(date);
  if (range.mode === "mtd_running") return `MTD running Q${range.quarter} ${range.year}/${String(range.year + 1).slice(-2)}`;
  if (range.mode === "uk_tax") return `UK tax Q${range.quarter} ${range.year}/${String(range.year + 1).slice(-2)}`;
  return `Q${range.quarter} ${range.year}`;
}

function periodRangeLabel(date = state.summaryDate) {
  if (state.summaryPeriod !== "quarter") return "";
  const range = quarterRange(date);
  const format = (value) => value.toLocaleDateString(uiLocale(), { day: "numeric", month: "short", year: "numeric" });
  return `${format(range.start)} - ${format(range.end)}`;
}

function periodSwitcherLabel() {
  const range = periodRangeLabel();
  return `<span class="period-switcher-label"><strong>${periodLabel()}</strong>${range ? `<small>${range}</small>` : ""}</span>`;
}

function shiftSummaryPeriod(direction) {
  if (state.summaryPeriod === "quarter" && (state.quarterMode === "uk_tax" || state.quarterMode === "mtd_running")) {
    const range = ukTaxQuarterRange(state.summaryDate);
    if (direction > 0) {
      state.summaryDate = new Date(range.endExclusive.getFullYear(), range.endExclusive.getMonth(), range.endExclusive.getDate(), 12);
      return;
    }
    const previousDate = new Date(range.start);
    previousDate.setDate(previousDate.getDate() - 1);
    state.summaryDate = new Date(previousDate.getFullYear(), previousDate.getMonth(), previousDate.getDate(), 12);
    return;
  }
  state.summaryDate.setMonth(state.summaryDate.getMonth() + (state.summaryPeriod === "quarter" ? direction * 3 : direction));
}

function periodFilePart() {
  return periodLabel().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "summary";
}

function quarterModeControls() {
  if (state.summaryPeriod !== "quarter") return "";
  const hint = state.quarterMode === "mtd_running" ? t("mtdRunningHint") : state.quarterMode === "uk_tax" ? t("taxQuarterHint") : t("calendarQuarterHint");
  return `
    <p class="hint quarter-hint">${hint}</p>
    ${state.quarterMode === "mtd_running" ? `<p class="summary-disclaimer">${t("mtdRunningDisclaimer")}</p>` : ""}
  `;
}

function summaryPeriodControls() {
  return `
    <div class="segmented segmented-four">
      <button class="${state.summaryPeriod === "month" ? "active" : ""}" data-action="setSummaryView" data-summary-view="month">${t("monthly")}</button>
      <button class="${state.summaryPeriod === "quarter" && state.quarterMode === "calendar" ? "active" : ""}" data-action="setSummaryView" data-summary-view="calendar">${t("quarterly")}</button>
      <button class="${state.summaryPeriod === "quarter" && state.quarterMode === "uk_tax" ? "active" : ""}" data-action="setSummaryView" data-summary-view="uk_tax">${t("ukTaxQuarterly")}</button>
      <button class="${state.summaryPeriod === "quarter" && state.quarterMode === "mtd_running" ? "active" : ""}" data-action="setSummaryView" data-summary-view="mtd_running">${t("mtdRunning")}</button>
    </div>
    ${quarterModeControls()}
  `;
}

function normalizeAmount(value) {
  const amount = Number(String(value || "").replace(",", ".").trim());
  return Number.isFinite(amount) ? amount : NaN;
}

function proofForIncome(id) {
  return state.incomeProofs?.[id] || null;
}

function dataUrlFromMaybeBase64(value) {
  if (!value || typeof value !== "string") return "";
  if (value.startsWith("data:image/") || value.startsWith("http://") || value.startsWith("https://")) return value;
  if (value.startsWith("/9j/")) return `data:image/jpeg;base64,${value}`;
  if (value.startsWith("iVBOR")) return `data:image/png;base64,${value}`;
  if (value.startsWith("UklGR")) return `data:image/webp;base64,${value}`;
  return "";
}

function incomeProofImage(item = {}, proof = null) {
  const candidates = [
    proof?.preview,
    item.proof_preview,
    item.proof_image_base64,
    item.proof_base64,
    item.income_proof_base64,
    item.attachment_base64,
    item.file_base64,
    item.document_base64,
    item.image_base64,
    item.proof_url,
    item.attachment_url,
    item.file_url,
    item.document_url
  ];
  return candidates.map(dataUrlFromMaybeBase64).find(Boolean) || "";
}

function incomeProofName(item = {}, proof = null) {
  return proof?.name || item.proof_name || item.attachment_name || item.file_name || item.document_name || item.filename || "";
}

function incomeProofFileUrl(item = {}, proof = null) {
  const candidates = [
    proof?.url,
    proof?.file_url,
    item.image_url,
    item.image_base64,
    item.proof_url,
    item.attachment_url,
    item.file_url,
    item.document_url
  ];
  return candidates.find((value) => typeof value === "string" && value.trim()) || "";
}

function incomeProofIsPdf(item = {}, url = "", proof = null) {
  const mime = String(item.image_mime_type || item.proof_mime_type || item.attachment_mime_type || proof?.type || "").toLowerCase();
  const attachmentType = String(item.email_attachment_type || item.attachment_type || "").toLowerCase();
  return mime.includes("pdf") || attachmentType === "pdf" || String(url || "").toLowerCase().includes(".pdf");
}

function reviewBadge(item = {}) {
  if (recordPossibleDuplicate(item)) {
    return `<span class="needs-review-badge" title="${escapeAttr(t("possibleDuplicate"))}" aria-label="${escapeAttr(t("possibleDuplicate"))}">!</span>`;
  }
  if (recordNeedsReview(item)) {
    return `<span class="needs-review-badge" title="${escapeAttr(t("needsReview"))}" aria-label="${escapeAttr(t("needsReview"))}">!</span>`;
  }
  return "";
}

function incomeProofPickerField(label = t("attachProof")) {
  return `
    <div class="field">
      <span>${label}</span>
      <div class="drop-zone" data-drop-upload="income-proof">
        <strong>${t("proofDropTitle")}</strong>
        <span>${t("proofDropHint")}</span>
      </div>
      <div class="proof-actions">
        <button class="secondary" type="button" data-action="pickIncomeProofPhoto">${t("takePhoto")}</button>
        <button class="secondary" type="button" data-action="pickIncomeProofFile">${t("uploadFile")}</button>
      </div>
      <span class="hint">${t("proofHint")}</span>
      <div class="card muted proof-preview" data-proof-preview hidden></div>
      <input class="hidden" type="file" name="proof_photo" accept="image/*" capture="environment">
      <input class="hidden" type="file" name="proof_file" accept="image/*,.pdf">
    </div>
  `;
}

function receiptReplaceField() {
  return `
    <div class="field">
      <span>${t("replaceReceiptPhoto")}</span>
      <div class="drop-zone" data-drop-upload="receipt-replace">
        <strong>${t("dragDropTitle")}</strong>
        <span>${t("dragDropHint")}</span>
      </div>
      <div class="proof-actions">
        <button class="secondary" type="button" data-action="pickReceiptReplacePhoto">${t("takePhoto")}</button>
        <button class="secondary" type="button" data-action="pickReceiptReplaceFile">${t("uploadFile")}</button>
      </div>
      <span class="hint">${t("replaceReceiptHint")}</span>
      <input class="hidden" type="file" name="receipt_replace_photo" accept="image/*" capture="environment">
      <input class="hidden" type="file" name="receipt_replace_file" accept="image/*,.pdf">
    </div>
  `;
}

function lastPhoneDigits(value = "") {
  const digits = String(value || "").replace(/\D/g, "");
  return digits ? digits.slice(-3).padStart(Math.min(3, digits.length), "*") : "***";
}

function recoveryEmailForUser() {
  return (state.user?.email || state.user?.recovery_email || "").trim();
}

function compactIncomeProofs(proofs = {}) {
  return Object.fromEntries(Object.entries(proofs || {}).map(([id, proof]) => [id, {
    name: proof?.name || proof?.proof_name || "Income proof",
    type: proof?.type || proof?.proof_type || "",
    attached: Boolean(proof?.attached || proof?.name || proof?.proof_name || proof?.data),
    description: proof?.description || "",
    preview: typeof proof?.preview === "string" && proof.preview.startsWith("data:image/") ? proof.preview : ""
  }]));
}

function incomeProofMeta(file, description = "", preview = "") {
  return {
    name: file?.name || "Income proof",
    type: file?.type || "",
    attached: true,
    description: description || "",
    preview: preview || ""
  };
}

function saveIncomeMeta(id, updates = {}) {
  if (!id) return;
  state.incomeProofs[id] = { ...(state.incomeProofs[id] || {}), ...updates };
  try {
    write("rb_income_proofs", state.incomeProofs);
  } catch {
    state.incomeProofs = compactIncomeProofs(state.incomeProofs);
    write("rb_income_proofs", state.incomeProofs);
  }
}

function attachIncomeProofs(items) {
  return (items || []).map((item) => {
    const proof = proofForIncome(item.id);
    const description = item.description || item.note || item.details || proof?.description || "";
    return proof ? { ...item, description, proof_name: proof.name, proof_type: proof.type, proof_preview: proof.preview || "" } : { ...item, description };
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
  state.routeMotion = "back";
  state.screen = route.screen || "home";
  state.selected = route.selected || null;
  render();
}

function navigate(screen, extra = {}) {
  state.routeMotion = "forward";
  state.screen = screen;
  if ("selected" in extra) {
    state.selected = extra.selected;
  }
  history.pushState(routeState(), "", location.pathname + location.search);
  render();
}

function shell(content) {
  const accountantMode = state.screen === "accountantLanding" || state.screen === "accountantDemoClient";
  const landingMode = ["landing", "marketingPage", "appDemo", "accountantDemo"].includes(state.screen);
  const motionClass = state.routeMotion ? ` route-enter route-${state.routeMotion}` : "";
  const previousShell = state.routeMotion && !landingMode && !state.imageViewer ? app.querySelector(".shell") : null;
  const exitShell = previousShell ? previousShell.cloneNode(true) : null;
  app.innerHTML = `<main class="shell ${accountantMode ? "accountant-shell" : ""} ${landingMode ? "landing-shell" : ""}${motionClass}">${content}</main><section id="printRoot" class="print-root"></section>${imageViewerOverlay()}`;
  if (exitShell) {
    exitShell.setAttribute("aria-hidden", "true");
    exitShell.classList.remove("route-enter", "route-forward", "route-back");
    exitShell.classList.add("route-exit", state.routeMotion === "back" ? "route-exit-back" : "route-exit-forward");
    app.prepend(exitShell);
    window.setTimeout(() => exitShell.remove(), 280);
  }
  if (state.routeMotion && !landingMode && !state.imageViewer) {
    window.scrollTo(0, 0);
  }
  state.routeMotion = "";
}

function imagePreviewButton(src, alt = "Photo") {
  if (!src) return "";
  return `
    <button class="image-preview-button" type="button" data-action="viewImage" data-image-src="${escapeAttr(src)}" aria-label="${escapeAttr(t("tapToView"))}">
      <img class="receipt-preview" src="${escapeAttr(src)}" alt="${escapeAttr(alt)}">
      <span>${t("tapToView")}</span>
    </button>
  `;
}

function imageViewerOverlay() {
  if (!state.imageViewer) return "";
  const rotation = Number(state.imageRotation || 0);
  return `
    <div class="image-viewer-backdrop" role="dialog" aria-modal="true" aria-label="${escapeAttr(t("tapToView"))}">
      <div class="image-viewer-stage">
        <img src="${escapeAttr(state.imageViewer)}" alt="" style="transform: rotate(${rotation}deg)">
      </div>
      <div class="image-viewer-footer">
        <button class="secondary" type="button" data-action="rotateImage">${t("rotate")}</button>
        <span>${t("pinchToZoom")}</span>
        <button class="secondary" type="button" data-action="closeImageViewer">${t("close")}</button>
      </div>
    </div>
  `;
}

function topbar(title, back = false) {
  const accountantMode = state.screen === "accountantLanding" || state.screen === "accountantDemoClient";
  return `
    <div class="topbar">
      ${back ? `<button class="icon-btn" data-action="back" aria-label="Back">â†</button>` : `<div class="brand app-brand"><img src="/icon-192.png" alt=""><span>TidGo<sup>TM</sup></span></div>`}
      <strong>${title || ""}</strong>
      ${state.user && !back && !accountantMode ? `<button class="icon-btn" data-action="settings" aria-label="${t("settings")}">âš™</button>` : `<span style="width:44px"></span>`}
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

function scanLabel() {
  const labels = {
    en: "Reading your receipt...",
    pl: "Czytam Twoj paragon...",
    ro: "Citesc bonul tau...",
    uk: "Chytaiu vash chek...",
    lt: "Skaitau jusu kvita...",
    lv: "Lasu jusu ceku...",
    es: "Leyendo tu recibo...",
    bg: "Cheta kasovata belezhka..."
  };
  return labels[state.language] || labels.en;
}

function scanPhotoReceivedLabel() {
  const labels = {
    en: "Photo received.",
    pl: "Zdjecie przyjete.",
    ro: "Poza primita.",
    uk: "Foto otrymano.",
    lt: "Nuotrauka gauta.",
    lv: "Foto sanemts.",
    es: "Foto recibida.",
    bg: "Snimkata e prieta."
  };
  return labels[state.language] || labels.en;
}

function scanStillWorkingLabel() {
  const labels = {
    en: "Reading the details...",
    pl: "Czytam szczegoly...",
    ro: "Inca lucrez...",
    uk: "Shche pratsiuie...",
    lt: "Dar dirbu...",
    lv: "Vel stradaju...",
    es: "Aun trabajando...",
    bg: "Oshte rabotya..."
  };
  return labels[state.language] || labels.en;
}

function scanLongerLabel() {
  const labels = {
    en: "Almost there. Keep this open while TidGo finishes reading the receipt.",
    pl: "Prawie gotowe. Zostaw to okno otwarte, az TidGo skonczy czytac paragon.",
    ro: "Aproape gata. Tine fereastra deschisa pana termina TidGo.",
    uk: "Maizhe hotovo. Zalyshte vikno vidkrytym, doky TidGo zakinchyt.",
    lt: "Beveik baigta. Palikite langa atidaryta, kol TidGo baigs.",
    lv: "Gandriz gatavs. Atstajiet logu atvertu, kamer TidGo pabeidz.",
    es: "Casi listo. Deja esta ventana abierta hasta que TidGo termine.",
    bg: "Pochti gotovo. Ostavete prozoretsa otvoren, dokato TidGo priklyuchi."
  };
  return labels[state.language] || labels.en;
}

function showScanOverlay(imageDataUrl) {
  hideScanOverlay();
  const node = document.createElement("div");
  node.className = "scan-overlay";
  node.innerHTML = `
    <div class="scan-card" role="status" aria-live="polite">
      <div class="scan-frame">
        ${imageDataUrl ? `<img src="${escapeAttr(imageDataUrl)}" alt="">` : `<div class="scan-placeholder"></div>`}
        <span class="scan-tint"></span>
        <span class="scan-line"></span>
        <span class="scan-corner tl"></span>
        <span class="scan-corner tr"></span>
        <span class="scan-corner bl"></span>
        <span class="scan-corner br"></span>
      </div>
      <strong data-scan-title>${escapeHtml(scanLabel())}</strong>
      <p data-scan-detail></p>
    </div>
  `;
  document.body.appendChild(node);
  const title = node.querySelector("[data-scan-title]");
  const detail = node.querySelector("[data-scan-detail]");
  node._scanTimers = [
    window.setTimeout(() => {
      if (title) title.textContent = scanPhotoReceivedLabel();
    }, 520),
    window.setTimeout(() => {
      node.classList.add("scan-waiting");
      if (title) title.textContent = scanStillWorkingLabel();
    }, 1700),
    window.setTimeout(() => {
      node.classList.add("scan-slow");
      if (title) title.textContent = scanStillWorkingLabel();
      if (detail) detail.textContent = scanLongerLabel();
    }, 5600)
  ];
}

function updateScanOverlayImage(imageDataUrl) {
  const image = document.querySelector(".scan-overlay .scan-frame img");
  const placeholder = document.querySelector(".scan-overlay .scan-placeholder");
  if (!imageDataUrl) return;
  if (image) {
    image.src = imageDataUrl;
    return;
  }
  if (placeholder) {
    const img = document.createElement("img");
    img.src = imageDataUrl;
    img.alt = "";
    placeholder.replaceWith(img);
  }
}

function hideScanOverlay() {
  document.querySelectorAll(".scan-overlay").forEach((node) => {
    (node._scanTimers || []).forEach((timer) => window.clearTimeout(timer));
    node.remove();
  });
}

function playSuccessPing() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const playTone = (frequency, start, duration) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.14, start + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.03);
    };
    const now = ctx.currentTime;
    playTone(660, now, 0.13);
    playTone(880, now + 0.1, 0.2);
    window.setTimeout(() => ctx.close?.(), 700);
  } catch {}
}

function showSuccessPing(message = t("saved"), delayToast = true) {
  document.querySelector(".success-ping")?.remove();
  const node = document.createElement("div");
  node.className = "success-ping";
  node.innerHTML = `
    <div class="success-ping-circle" role="status" aria-live="polite">
      <span>âœ“</span>
    </div>
  `;
  document.body.appendChild(node);
  playSuccessPing();
  if (delayToast) window.setTimeout(() => toast(message), 780);
  window.setTimeout(() => node.remove(), 1150);
}

function confirmDownload(kind = "user") {
  const old = document.querySelector(".modal-backdrop");
  if (old) old.remove();
  const node = document.createElement("div");
  node.className = "modal-backdrop";
  node.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="downloadCheckTitle">
      <h2 id="downloadCheckTitle">${escapeHtml(dt("title"))}</h2>
      <p class="hint">${escapeHtml(kind === "accountant" ? dt("accountantText") : dt("userText"))}</p>
      <div class="modal-actions">
        <button class="secondary" type="button" data-download-cancel>${escapeHtml(dt("cancel"))}</button>
        <button class="primary" type="button" data-download-ok>${escapeHtml(dt("ok"))}</button>
      </div>
    </div>
  `;
  document.body.appendChild(node);
  return new Promise((resolve) => {
    const close = (result) => {
      node.remove();
      resolve(result);
    };
    node.querySelector("[data-download-ok]").addEventListener("click", () => close(true));
    node.querySelector("[data-download-cancel]").addEventListener("click", () => close(false));
    node.addEventListener("click", (event) => {
      if (event.target === node) close(false);
    });
  });
}

async function api(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 18000);
  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(options.headers || {})
      }
    });
    state.apiUnavailable = false;
  } catch (error) {
    state.apiUnavailable = true;
    throw new Error(t("backendDown"));
  } finally {
    clearTimeout(timeout);
  }
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

async function whatsappLinkMessage() {
  try {
    const response = await api("/api/whatsapp/link-code", {
      method: "POST",
      body: JSON.stringify({ user_id: state.user.id })
    });
    const code = response?.code || response?.link_code || response?.token;
    if (response?.message) return response.message;
    if (code) return `LINK TIDGO ${code}`;
  } catch {
    toast(t("connectWhatsAppFallback"));
  }
  return "LINK TIDGO";
}

async function openWhatsAppConnect() {
  const message = await whatsappLinkMessage();
  const url = `https://wa.me/${TIDGO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}

function openWhatsAppRecovery() {
  const url = `https://wa.me/${TIDGO_WHATSAPP_NUMBER}?text=${encodeURIComponent("RECOVER TIDGO")}`;
  window.location.href = url;
}

async function shareTidGo() {
  const marketingScreen = ["landing", "marketingPage", "appDemo", "accountantDemo"].includes(state.screen);
  const title = marketingScreen ? mk("shareTitle") : "TidGo";
  const text = marketingScreen ? mk("shareText") : t("shareText");
  const url = `${location.origin || "https://tidgo.co.uk"}/`;
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      toast(marketingScreen ? mk("shareCopied") : t("shareCopied"));
      return;
    }
    toast(url);
  } catch (error) {
    if (error?.name !== "AbortError") toast(marketingScreen ? mk("shareCopied") : t("shareCopied"));
  }
}

async function loadAccountantClients(email = state.accountantPortalEmail) {
  const cleanEmail = (email || "").trim();
  if (!cleanEmail) {
    state.accountantClients = [];
    return [];
  }
  const clients = await api(`/api/accountant/clients?accountant_email=${encodeURIComponent(cleanEmail)}`);
  state.accountantPortalEmail = cleanEmail;
  write("rb_accountant_portal_email", cleanEmail);
  state.accountantClients = clients || [];
  return state.accountantClients;
}

async function adminApi(path, options = {}) {
  const headers = {
    ...(state.adminToken ? { Authorization: `Bearer ${state.adminToken}` } : {}),
    ...(options.headers || {})
  };
  return api(path, { ...options, headers });
}

async function requestAdminCode(email) {
  const cleanEmail = (email || "").trim();
  if (!cleanEmail) throw new Error("Enter admin email");
  await api("/api/admin/auth/request", {
    method: "POST",
    body: JSON.stringify({ email: cleanEmail })
  });
  state.adminPendingEmail = cleanEmail;
  state.adminCodeSent = true;
  write("tg_admin_pending_email", cleanEmail);
}

async function verifyAdminCode(email, code) {
  const cleanEmail = (email || "").trim();
  const cleanCode = (code || "").trim();
  if (!cleanEmail) throw new Error("Enter admin email");
  if (!cleanCode) throw new Error("Enter login code");
  const response = await api("/api/admin/auth/verify", {
    method: "POST",
    body: JSON.stringify({ email: cleanEmail, code: cleanCode })
  });
  state.adminEmail = response.admin_email || cleanEmail;
  state.adminPendingEmail = "";
  state.adminCodeSent = false;
  state.adminToken = response.token || "";
  state.adminError = "";
  write("tg_admin_email", state.adminEmail);
  forget("tg_admin_pending_email");
  if (state.adminToken) sessionStorage.setItem("tg_admin_token", state.adminToken);
  return loadAdminUsers();
}

async function loadAdminUsers() {
  const users = await adminApi("/api/admin/users");
  state.adminUsers = Array.isArray(users) ? users : (users?.users || []);
  state.adminError = "";
  return state.adminUsers;
}

function adminUserPatchFromForm(data) {
  return {
    account_plan: data.account_plan || "early_access",
    account_status: data.account_status || "active",
    free_until: data.free_until || null,
    lifetime_free: Boolean(data.lifetime_free),
    admin_notes: data.admin_notes || ""
  };
}

async function updateAdminUser(userId, data) {
  if (!userId) throw new Error("Missing user id");
  const updated = await adminApi(`/api/admin/users/${encodeURIComponent(userId)}`, {
    method: "PATCH",
    body: JSON.stringify(adminUserPatchFromForm(data))
  });
  state.adminUsers = state.adminUsers.map((user) => String(user.id || user.user_id || user._id) === String(userId) ? { ...user, ...updated } : user);
  return updated;
}

async function requestAccountantCode(email) {
  const cleanEmail = (email || "").trim();
  if (!cleanEmail) throw new Error("Enter accountant email");
  await api("/api/accountant/auth/request", {
    method: "POST",
    body: JSON.stringify({ email: cleanEmail })
  });
  state.accountantPendingEmail = cleanEmail;
  state.accountantCodeSent = true;
  write("rb_accountant_pending_email", cleanEmail);
}

async function verifyAccountantCode(email, code) {
  const cleanEmail = (email || "").trim();
  const cleanCode = (code || "").trim();
  if (!cleanEmail) throw new Error("Enter accountant email");
  if (!cleanCode) throw new Error("Enter the code");
  const response = await api("/api/accountant/auth/verify", {
    method: "POST",
    body: JSON.stringify({ email: cleanEmail, code: cleanCode })
  });
  const accountantEmail = response.accountant_email || cleanEmail;
  state.accountantPortalEmail = accountantEmail;
  state.accountantPendingEmail = "";
  state.accountantCodeSent = false;
  forget("rb_accountant_pending_email");
  await deviceSet("rb_accountant_portal_email", accountantEmail);
  return loadAccountantClients(accountantEmail);
}

async function restoreAccountantSession() {
  if (state.accountantPortalEmail) return;
  const email = await deviceGet("rb_accountant_portal_email", "");
  if (email) {
    state.accountantPortalEmail = email;
    write("rb_accountant_portal_email", email);
  }
  const displayName = await deviceGet("rb_accountant_display_name", "");
  if (displayName) {
    state.accountantDisplayName = displayName;
    write("rb_accountant_display_name", displayName);
  }
}

async function loadAccountantClientRecords(clientId) {
  const accountantEmail = (state.accountantPortalEmail || "").trim();
  if (!accountantEmail) throw new Error("Enter accountant email first");
  const [receipts, income] = await Promise.all([
    api(`/api/accountant/clients/${clientId}/receipts?accountant_email=${encodeURIComponent(accountantEmail)}`),
    api(`/api/accountant/clients/${clientId}/income?accountant_email=${encodeURIComponent(accountantEmail)}`)
  ]);
  state.accountantSelectedClientId = clientId;
  state.accountantClientRecords = { receipts: receipts || [], income: income || [] };
  return state.accountantClientRecords;
}

function accountantRequestMessage(client) {
  const name = client?.first_name || "there";
  return `Hi ${name}, could you add the missing income proof or receipts in TidGo when you can? It helps prepare your records without the deadline panic.`;
}

async function sendAccountantRequestDocs() {
  const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
  if (!client) throw new Error(at("showClientsFirst"));
  const message = accountantRequestMessage(client);
  try {
    await api("/api/accountant/request-docs", {
      method: "POST",
      body: JSON.stringify({
        accountant_email: state.accountantPortalEmail,
        client_user_id: client.user_id,
        client_email: client.email || null,
        message
      })
    });
    toast(at("requestDocsSent"));
  } catch (error) {
    try {
      await navigator.clipboard.writeText(message);
      toast(at("requestDocsFailed"));
    } catch {
      toast(message);
    }
  }
}

function accountantClientConsentId(client) {
  return client?.consent_id || client?.consentId || client?.accountant_consent_id || client?.connection_id || client?.access_id || (client?.id && client.id !== client.user_id ? client.id : "");
}

async function refresh() {
  if (!state.user?.id) return;
  state.recordsLoading = true;
  try {
    const [profile, receipts, income, consents] = await Promise.all([
      api(`/api/users/${state.user.id}`).catch(() => null),
      api(`/api/receipts/${state.user.id}`),
      api(`/api/income/${state.user.id}`),
      api(`/api/accountant/consents/client/${state.user.id}`).catch(() => [])
    ]);
    if (profile?.id) {
      await rememberUser({
        ...state.user,
        ...profile,
        income_sources: readIncomeSources(state.user)
      });
      if (profile.language) {
        state.language = profile.language;
        write("rb_language", state.language);
      }
    }
    state.receipts = (receipts || []).map(applyRecordBusinessMeta);
    state.income = attachIncomeProofs((income || []).map(applyRecordBusinessMeta));
    state.accountantConsents = consents || [];
  } catch (error) {
    state.apiUnavailable = true;
    toast(error.message || t("backendDown"));
  } finally {
    state.recordsLoading = false;
  }
}

async function refreshReceiptsOnly() {
  if (!state.user?.id) return [];
  try {
    const receipts = await api(`/api/receipts/${state.user.id}`);
    state.receipts = (receipts || []).map(applyRecordBusinessMeta);
    return state.receipts;
  } catch (error) {
    state.apiUnavailable = true;
    toast(error.message || t("backendDown"));
    return state.receipts || [];
  }
}

function serverUnavailableCard() {
  if (!state.apiUnavailable) return "";
  return `
    <div class="status-card server-unavailable-card">
      <strong>${t("serverUnavailableTitle")}</strong>
      <span>${t("serverUnavailableText")}</span>
      <button class="secondary" data-action="retryRefresh">${t("tryAgain")}</button>
    </div>
  `;
}

function render() {
  const publicScreens = ["landing", "marketingPage", "appDemo", "accountantDemo", "accountantLanding", "accountantDemoClient", "adminLanding"];
  const legalScreens = ["legalConsent", "privacy", "terms"];
  if (!publicScreens.includes(state.screen) && !state.user) {
    state.screen = state.screen === "recover" || state.screen === "verifySignup" ? state.screen : "onboarding";
  }
  if (state.screen === "boot") state.screen = "home";
  if (state.user && !publicScreens.includes(state.screen) && !legalScreens.includes(state.screen) && read("rb_legal_agreed", "") !== "true") {
    state.screen = "legalConsent";
  }
  const routes = {
    landing,
    marketingPage,
    appDemo,
    accountantDemo,
    accountantLanding,
    accountantDemoClient,
    adminLanding,
    onboarding,
    legalConsent,
    verifySignup,
    recover,
    home,
    businessTypeChoice,
    expenseChoice,
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
  renderCookieConsent();
}

function qrCodeUrl(target) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=12&data=${encodeURIComponent(target)}`;
}

function landingSocialLinks() {
  return `
    <div class="social-links contact-social" aria-label="${escapeAttr(mk("socialTitle"))}">
      <button class="secondary share-button" type="button" data-action="shareTidGo">${mk("shareTidGo")}</button>
      <a class="social-icon social-x" href="https://x.com/TidGoApp" target="_blank" rel="noopener noreferrer" aria-label="TidGo on X">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h4.7l4.1 5.9L18 4h2.1l-6.3 7.2L21 20h-4.7l-4.6-6.6L6 20H3.9l6.8-7.8L4 4Zm3.7 1.6 9.4 12.8h1.7L9.4 5.6H7.7Z"/></svg>
      </a>
      <a class="social-icon social-facebook" href="https://www.facebook.com/TidGo" target="_blank" rel="noopener noreferrer" aria-label="TidGo on Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.4V6.8c0-.8.3-1.2 1.3-1.2H17V2.8c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.2v1.6H7.7v3.2h2.7V21H14v-9.4h2.7l.5-3.2H14Z"/></svg>
      </a>
      <a class="social-icon social-instagram" href="https://www.instagram.com/tidgouk/" target="_blank" rel="noopener noreferrer" aria-label="TidGo on Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9a4.7 4.7 0 0 1-4.7 4.7h-9a4.7 4.7 0 0 1-4.7-4.7v-9a4.7 4.7 0 0 1 4.7-4.7Zm0 3A1.7 1.7 0 0 0 5.8 7.5v9a1.7 1.7 0 0 0 1.7 1.7h9a1.7 1.7 0 0 0 1.7-1.7v-9a1.7 1.7 0 0 0-1.7-1.7h-9Zm4.5 2.8a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8Zm0 2.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm4.1-3.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"/></svg>
      </a>
      <a class="social-icon social-whatsapp" href="https://wa.me/447466382511" target="_blank" rel="noopener noreferrer" aria-label="TidGo on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2a8.5 8.5 0 0 0-7.2 13l-.9 3.4 3.5-.9A8.5 8.5 0 1 0 12 3.2Zm0 2a6.5 6.5 0 0 1 5.4 10.1 6.5 6.5 0 0 1-8.9 1.5l-.4-.2-1.5.4.4-1.5-.3-.4A6.5 6.5 0 0 1 12 5.2Zm-2.2 3.2c-.2 0-.5.1-.7.3-.3.3-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.2 1.6 2.5 3.9 3.4 1.9.8 2.3.6 2.7.6.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3l-1.5-.7c-.2-.1-.4-.1-.6.2l-.6.8c-.1.2-.3.2-.5.1-.3-.1-1-.4-1.8-1.1-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.2.2-.4.1-.1.1-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.2Z"/></svg>
      </a>
    </div>
  `;
}

function landing() {
  const origin = location.origin;
  const appUrl = `${origin}/app/`;
  const accountantUrl = `${origin}/accountant/`;
  shell(`
    <section class="landing-screen">
      ${landingHeader()}
      <div class="landing-layout">
        <div class="landing-main">
          <div class="landing-hero">
            <span class="eyebrow">${mk("heroEyebrow")}</span>
            <h1>${mk("heroTitle")}</h1>
            <p>${mk("heroText")}</p>
          </div>
          <div class="landing-mobile-quick-actions" aria-label="Quick TidGo links">
            <a class="primary landing-link" href="/app/">${mk("openApp")}</a>
            <a class="secondary landing-link" href="${accountantUrl}">${mk("openPortal")}</a>
          </div>
          <section class="landing-news" aria-label="${escapeAttr(mk("whatsNewTitle"))}">
            <span class="new-badge"><span class="new-flame" aria-hidden="true">&#128293;</span>${mk("whatsNewBadge")}</span>
            <div>
              <strong>${mk("whatsNewTitle")}</strong>
              <span class="landing-news-line landing-news-intake">${mk("whatsNewIntake")}</span>
              <span class="landing-news-line landing-news-mtd">${mk("whatsNewMtd")}</span>
              <small>${mk("whatsNewCta")}</small>
            </div>
          </section>
          ${youtubeVideosSection()}
          ${earlyAccessBanner()}
          <section class="landing-trust-strip" aria-label="TidGo basics">
            <span>${mk("trustSimple")}</span>
            <span>${mk("trustControl")}</span>
            <span>${mk("trustEarly")}</span>
          </section>
          <section class="landing-cis" aria-label="${escapeAttr(mk("cisTitle"))}">
            <span class="landing-cis-badge">CIS</span>
            <div>
              <strong>${mk("cisTitle")}</strong>
              <span>${mk("cisText")}</span>
            </div>
          </section>
          <section class="landing-simple-value" aria-label="${escapeAttr(mk("simpleValueTitle"))}">
            <strong>${mk("simpleValueTitle")}</strong>
            <span>${mk("simpleValueText")}</span>
          </section>
          <section class="landing-limits" aria-label="${escapeAttr(mk("notDoTitle"))}">
            <strong>${mk("notDoTitle")}</strong>
            <span>${mk("notDoText")}</span>
          </section>
          <section class="landing-strip">
            <span>${mk("stepSnap")}</span>
            <span>${mk("stepTidy")}</span>
            <span>${mk("stepPack")}</span>
          </section>
          <section class="landing-showcase">
            <img src="/assets/demo/landing-receipts-banner.png" alt="Receipts in, tidy records out with TidGo">
            <div>
              <strong>${mk("howTitle")}</strong>
              <span>${mk("howText")}</span>
              <div class="landing-showcase-links">
                <a href="/how-it-works">${mk("navHow")}</a>
                <a href="/how-intake-works">${mk("navIntake")}</a>
                <a href="/find-accountant">${mk("navFindAccountant")}</a>
              </div>
            </div>
          </section>
          ${androidTesterCallout("landing-tester-callout")}

          <section class="landing-contact" id="contact">
            <div class="landing-contact-copy">
              <div>
                <strong>${mk("contactTitle")}</strong>
                <span>${mk("contactText")}</span>
              </div>
              ${landingSocialLinks()}
            </div>
            <form class="landing-contact-form" id="landingContactForm">
              <input class="input" name="from_email" type="email" placeholder="${escapeAttr(mk("yourEmail"))}">
              <select class="input" name="role">
                <option value="${escapeAttr(mk("roleSelf"))}">${mk("roleSelf")}</option>
                <option value="${escapeAttr(mk("roleAccountant"))}">${mk("roleAccountant")}</option>
                <option value="${escapeAttr(mk("roleCurious"))}">${mk("roleCurious")}</option>
              </select>
              <textarea class="input" name="message" rows="3" placeholder="${escapeAttr(mk("message"))}"></textarea>
              <div class="contact-submit-row">
                <button class="primary" type="submit">${mk("sendMessage")}</button>
              </div>
            </form>
          </section>
        </div>
        <aside class="landing-actions">
          <article class="landing-card">
            <span class="landing-card-label">${mk("selfLabel")}</span>
            <h2>${mk("selfTitle")}</h2>
            <p>${mk("selfText")}</p>
          <div class="qr-panel">
            <img class="qr-code" src="${qrCodeUrl(appUrl)}" alt="QR code for TidGo app">
            <small>${mk("scanApp")}</small>
          </div>
            <a class="primary landing-link" href="/app/">${mk("openApp")}</a>
            <a class="secondary landing-link" href="/app-demo">${mk("viewDemo")}</a>
            <div class="try-safe-note">${mk("trySafe")}</div>
            <div class="platform-note"><strong>${mk("platformNow")}</strong><span>${mk("platformSoon")}</span></div>
          </article>
          <article class="landing-card">
            <span class="landing-card-label">${mk("accountantLabel")}</span>
            <h2>${mk("accountantTitle")}</h2>
            <p>${mk("accountantText")}</p>
          <div class="qr-panel">
            <img class="qr-code" src="${qrCodeUrl(accountantUrl)}" alt="QR code for accountant portal">
            <small>${mk("scanPortal")}</small>
          </div>
            <a class="primary landing-link" href="${accountantUrl}">${mk("openPortal")}</a>
            <a class="secondary landing-link" href="/accountant-demo">${mk("viewDemo")}</a>
            <div class="platform-note"><strong>${mk("platformNow")}</strong><span>${mk("platformSoon")}</span></div>
          </article>
        </aside>
      </div>
      ${landingFooter()}
    </section>
  `);
}


const TIDGO_YOUTUBE_VIDEOS = [
  {
    id: "_88PJe4njt8",
    titleKey: "videoWhatsAppTitle",
    textKey: "videoWhatsAppText"
  },
  {
    id: "yNG5Jhb3c9Y",
    titleKey: "videoAccountantTitle",
    textKey: "videoAccountantText"
  },
  {
    id: "BdD7mZcR8zc",
    titleKey: "videoLanguagesTitle",
    textKey: "videoLanguagesText"
  }
];

function youtubeVideosSection() {
  return `
    <section class="landing-videos" aria-label="${escapeAttr(mk("videoSectionTitle"))}">
      <div class="landing-section-heading">
        <strong>${mk("videoSectionTitle")}</strong>
        <span>${mk("videoSectionText")}</span>
      </div>
      <div class="landing-video-grid">
        ${TIDGO_YOUTUBE_VIDEOS.map((video) => `
          <a class="landing-video-card" href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener noreferrer">
            <span class="landing-video-thumb">
              <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${escapeAttr(mk(video.titleKey))}" loading="lazy">
              <span class="landing-video-play" aria-hidden="true">Play</span>
            </span>
            <strong>${mk(video.titleKey)}</strong>
            <span>${mk(video.textKey)}</span>
            <em>${mk("videoWatch")}</em>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function earlyAccessBanner() {
  const copy = EARLY_ACCESS_BANNER_COPY[state.marketingLanguage] || EARLY_ACCESS_BANNER_COPY.en;
  return `
          <section class="early-access-banner" aria-label="${escapeAttr(copy.title)}">
            <div>
              <span class="early-access-kicker">Early Access</span>
              <strong>${escapeHtml(copy.title)}</strong>
              <p>${escapeHtml(copy.text)}</p>
            </div>
            <a class="early-access-button" href="/app/">${escapeHtml(copy.button)}</a>
          </section>
  `;
}

function findAccountantPage() {
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader("findAccountant")}
      <main class="marketing-page-shell">
        <section class="marketing-page-card">
          <span class="eyebrow">${mk("navFindAccountant")}</span>
          <h1>${mk("findAccountantTitle")}</h1>
          <p>${mk("findAccountantText")}</p>
        </section>
        <section class="intro-directory-grid">
          <article class="marketing-page-card intro-form-card">
            <h2>${mk("needAccountantTitle")}</h2>
            <p>${mk("needAccountantText")}</p>
            <form class="stack intro-request-form" data-intro-form="need-accountant">
              <input type="hidden" name="role" value="Find accountant request">
              <label class="field"><span>${mk("yourName")}</span><input class="input" name="name" required></label>
              <label class="field"><span>${mk("yourEmail")}</span><input class="input" name="from_email" type="email" required></label>
              <label class="field"><span>${mk("businessType")}</span><input class="input" name="business_type" placeholder="CIS, landlord, builder, driver..."></label>
              <label class="field"><span>${mk("location")}</span><input class="input" name="location" placeholder="London, Northampton, online..."></label>
              <label class="field"><span>${mk("preferredLanguage")}</span><input class="input" name="language_preference" placeholder="English, Polish, Romanian..."></label>
              <label class="field"><span>${mk("message")}</span><textarea class="input" name="message" rows="4" required></textarea></label>
              <button class="primary landing-link" type="submit">${mk("submitIntroRequest")}</button>
            </form>
          </article>
          <article class="marketing-page-card intro-form-card">
            <h2>${mk("accountantJoinTitle")}</h2>
            <p>${mk("accountantJoinText")}</p>
            <form class="stack intro-request-form" data-intro-form="accountant-join">
              <input type="hidden" name="role" value="Accountant directory request">
              <label class="field"><span>${mk("yourName")}</span><input class="input" name="name" required></label>
              <label class="field"><span>${mk("yourEmail")}</span><input class="input" name="from_email" type="email" required></label>
              <label class="field"><span>${mk("accountantFirm")}</span><input class="input" name="firm_name"></label>
              <label class="field"><span>${mk("location")}</span><input class="input" name="location" placeholder="Town, region or online"></label>
              <label class="field"><span>${mk("servicesOffered")}</span><textarea class="input" name="services" rows="3" placeholder="Self Assessment, CIS, bookkeeping, landlords, MTD..."></textarea></label>
              <label class="field"><span>${mk("phoneOptional")}</span><input class="input" name="phone"></label>
              <button class="primary landing-link" type="submit">${mk("submitIntroRequest")}</button>
            </form>
          </article>
        </section>
        <section class="marketing-page-card">
          <p>${mk("introDisclaimer")}</p>
        </section>
        <article class="marketing-page-card marketing-article accountant-pack-inline">
          <span class="eyebrow">${mk("navAccountantPack")}</span>
          <h2>TidGo for accountants and bookkeepers</h2>
          <p>If you already have an accountant, copy the message below and send it to them. If you need one, use the form above and TidGo may help with an introduction.</p>
          <blockquote><strong>${mk("accountantMessageTitle")}</strong><br><br>${mk("accountantMessageText")}</blockquote>
          <button class="secondary landing-link" type="button" data-copy-text="${encodeURIComponent(mk("accountantMessageText"))}">Copy message</button>
          <div class="marketing-card-grid accountant-explainer-grid">
            <article>
              <strong>Read-only access</strong>
              <span>Your accountant can view records and download PDF/CSV packs, but cannot edit or delete your data.</span>
            </article>
            <article>
              <strong>Free for accountants</strong>
              <span>Accountant access is free. TidGo is paid for by the client account, not the practice.</span>
            </article>
            <article>
              <strong>What they see</strong>
              <span>Receipt photos, income proof, CIS documents, review flags, summaries and export packs.</span>
            </article>
            <article>
              <strong>What TidGo does not do</strong>
              <span>TidGo does not submit to HMRC, replace accountants, do VAT, payroll, limited company accounts or tax advice.</span>
            </article>
          </div>
          <p><a href="/accountant-demo">Open the accountant demo</a> with sample client data, or <a href="/show-this-to-your-accountant">read the full accountant overview</a>.</p>
        </article>
        ${pageCta()}
      </main>
      ${landingFooter()}
    </section>
  `);
}

function accountantPackPage() {
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader("accountantPack")}
      <main class="marketing-page-shell">
        <article class="marketing-page-card marketing-article">
          <span class="eyebrow">For accountants and bookkeepers</span>
          <h1>TidGo for accountants</h1>
          <p>TidGo gives your client a simple way to collect receipts, income proof and CIS documents during the year. You get free read-only access, flagged items and clean PDF/CSV packs when it is time to work.</p>
          <section class="accountant-priority-section">
          <h2>What TidGo collects. What you still do.</h2>
          <p>TidGo collects what has a receipt, payslip or document - captured as it happens through WhatsApp, email or the app. That covers most of the day-to-day: fuel, materials, CIS payslips, invoices and income proof.</p>
          <p><strong>What TidGo does not replace - and does not try to:</strong></p>
          <ul><li>Bank statement analysis for direct debits, subscriptions and expenses without a separate receipt.</li><li>Proportion calculations for mixed-use expenses such as phone, car and home office.</li><li>Relief claims, capital allowances, CGT and anything requiring professional judgement.</li><li>The final annual declaration - that stays with you.</li></ul>
          <p>Your client arrives with the receipts and payslips already organised. You collect the rest from bank statements at year end, as always. The difference is that the first part arrives tidy instead of in a bag.</p>
          <p><strong>We actively recommend that every TidGo user works with an accountant at least once a year.</strong> Not because the software is incomplete, but because tax optimisation requires a professional who can see the full picture.</p>
          </section>
          <h2>Part 1 - Sending this to your accountant?</h2>
          <p>Copy the message below and send it to your accountant or bookkeeper. Everything they need to evaluate TidGo is on this page.</p>
          <blockquote><strong>Message to copy</strong><br><br>Hi,<br><br>I'm using TidGo to keep my receipts and income proof in one place during the year. It gives you free read-only access to my records. You can view everything and download a PDF/CSV pack, but nothing can be changed from your side, and I can revoke access at any time.<br><br>It doesn't replace anything you do. It just means I stop sending you photos across WhatsApp and email.<br><br>There's a demo and full details here: https://tidgo.co.uk/show-this-to-your-accountant</blockquote>
          <button class="secondary landing-link" type="button" data-copy-text="Hi,%0A%0AI'm using TidGo to keep my receipts and income proof in one place during the year. It gives you free read-only access to my records. You can view everything and download a PDF/CSV pack, but nothing can be changed from your side, and I can revoke access at any time.%0A%0AIt doesn't replace anything you do. It just means I stop sending you photos across WhatsApp and email.%0A%0AThere's a demo and full details here: https://tidgo.co.uk/show-this-to-your-accountant">Copy message</button>
          <h2>Part 2 - For accountants and bookkeepers</h2>
          <h3>What is TidGo?</h3>
          <p>TidGo is a record collection layer that sits before your accounting workflow. Clients send receipts, income proof and CIS payslips by photo, WhatsApp or email during the year. You get a read-only view of tidy, English-language records and a clean export pack when you need it.</p>
          <p>We tell users clearly that TidGo is not a substitute for professional tax judgement. It is the front-end collection layer, not the accountant.</p>
          <p>It is not accounting software. It does not submit to HMRC. It does not do bookkeeping, VAT, payroll or company accounts. It does one job: your client arrives organised instead of arriving with a carrier bag.</p>
          <h3>What does it cost accountants?</h3>
          <p>Nothing. Accountant access is free and always will be. TidGo is paid for by the client's own subscription. There is no per-client fee, no practice licence, no commission on referrals, and no paid placement on our accountant directory.</p>
          <h3>What can you see?</h3>
          <ul><li>Receipt photos and income proof, with extracted date, amount, merchant and category.</li><li>Monthly, calendar-quarter and UK tax-quarter summaries.</li><li>CIS payslips, remittance notices and other forwarded documents, with the original attached.</li><li>PDF and CSV export packs.</li></ul>
          <p>You cannot edit or delete anything. The client can revoke access at any time.</p>
          <h3>Where the Needs Review flag helps you</h3>
          <p>When extraction is not confident about a figure, a date or a merchant, the record is flagged for review rather than filed silently. For you, uncertain items are already marked, so you know where to look instead of spot-checking everything.</p>
          <h3>How your client sends records</h3>
          <p>Clients can use WhatsApp, email forwarding, in-app photo upload or typed entries. They confirm what was extracted. You review the records when it is time to work.</p>
          <h3>Data protection</h3>
          <p>TidGo Ltd is registered with the ICO. Structured data is held in the EU, documents and images are stored in EU object storage, and the client controls who sees their records. Full detail: <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms</a>.</p>
          <h3>What TidGo does not do</h3>
          <p>TidGo does not submit to HMRC, does not replace accountants, does not do bookkeeping, VAT returns, payroll, limited company accounts or corporation tax, and does not give tax advice.</p>
          <p>The quarterly submission and the final declaration stay where they belong - with you, or with MTD-compatible software. The final declaration is where reliefs, allowances and other income sources come in. That is professional work, and we do not pretend an app should be doing it.</p>
          <h3>Try it before you commit</h3>
          <p><a href="/accountant-demo">See the accountant demo</a> with sample client data. If it is not useful, tell your client to disconnect you. Nothing is locked in either direction.</p>
          <h3>Questions?</h3>
          <p>Email <a href="mailto:hello@tidgo.co.uk">hello@tidgo.co.uk</a>. Blunt feedback from accountants is genuinely more useful to us than praise.</p>
          ${pageCta()}
        </article>
      </main>
      ${landingFooter()}
    </section>
  `);
}

function launchPricingPage() {
  const copy = PRICING_PAGE_COPY[state.marketingLanguage] || PRICING_PAGE_COPY.en;
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader("pricing")}
      <main class="marketing-page-layout pricing-page">
        <article class="marketing-page-card pricing-hero-card">
          <span class="eyebrow">${mk("navPricing")}</span>
          <h1>${escapeHtml(copy.title)}</h1>
          <p class="marketing-lead">${escapeHtml(copy.lead)}</p>
          <div class="pricing-price-box">
            <strong>${escapeHtml(copy.price)}</strong>
            <span>${escapeHtml(copy.intro)}</span>
          </div>
          <p>${escapeHtml(copy.ownership)}</p>
          <div class="marketing-page-actions">
            <a class="primary landing-link" href="/app/">${escapeHtml((EARLY_ACCESS_BANNER_COPY[state.marketingLanguage] || EARLY_ACCESS_BANNER_COPY.en).button)}</a>
          </div>
        </article>
        <section class="marketing-page-card">
          <h2>${escapeHtml(copy.includedTitle)}</h2>
          <div class="marketing-card-grid pricing-feature-grid">
            ${copy.sections.map(([title, text]) => `
              <article>
                <strong>${escapeHtml(title)}</strong>
                <span>${escapeHtml(text)}</span>
              </article>
            `).join("")}
          </div>
        </section>
        <section class="marketing-page-card pricing-mtd-card">
          <span class="eyebrow">MTD</span>
          <h2>${escapeHtml(copy.comingTitle)}</h2>
          <p><strong>${escapeHtml(copy.comingText)}</strong></p>
          <p>${escapeHtml(copy.comingScope)}</p>
          <p>${escapeHtml(copy.comingNote)}</p>
        </section>
        <section class="marketing-page-card pricing-early-card">
          <h2>${escapeHtml(copy.earlyTitle)}</h2>
          <p>${escapeHtml(copy.earlyText)}</p>
          <p><strong>${escapeHtml(copy.earlyNow)}</strong></p>
          <p>${escapeHtml(copy.earlyExisting)}</p>
        </section>
        <section class="marketing-page-card pricing-faq-card">
          <h2>${escapeHtml(copy.faqTitle)}</h2>
          <div class="pricing-faq-list">
            ${copy.faqs.map(([question, answer]) => `
              <article>
                <strong>${escapeHtml(question)}</strong>
                <span>${escapeHtml(answer)}</span>
              </article>
            `).join("")}
          </div>
        </section>
      </main>
      ${landingFooter()}
    </section>
  `);
}

function marketingPage() {
  const slug = marketingPageSlug();
  if (slug === "privacy" || slug === "terms") return marketingLegalPage(slug);
  if (slug === "deleteAccountInfo") return deleteAccountInfoPage();
  if (slug === "story") return ourStoryPage();
  if (slug === "androidTesters") return androidTestersPage();
  if (slug === "findAccountant") return findAccountantPage();
  if (slug === "accountantPack") return accountantPackPage();
  if (slug === "pricing") return launchPricingPage();
  const simplePages = {
    how: {
      active: "how",
      eyebrow: mk("navHow"),
      title: mk("howTitle"),
      text: mk("howText"),
      cards: [
        [mk("stepSnap"), mk("demoReceiptText")],
        [mk("stepTidy"), mk("demoDetailsText")],
        [mk("stepPack"), mk("demoSummaryText")]
      ]
    },
    who: {
      active: "who",
      eyebrow: mk("navWho"),
      title: mk("whoTitle"),
      text: mk("whoText"),
      cards: [
        [mk("selfLabel"), mk("selfText")],
        [mk("accountantLabel"), mk("accountantText")],
        [mk("scopeFitTitle"), mk("scopeFitText")],
        [mk("scopeNotForTitle"), mk("scopeNotForText")]
      ]
    },
    intake: {
      active: "intake",
      eyebrow: mk("navIntake"),
      title: mk("intakeTitle"),
      text: mk("intakeText"),
      cards: [
        [mk("intakeWhatsAppTitle"), mk("intakeWhatsAppText")],
        [mk("intakeEmailTitle"), mk("intakeEmailText")],
        [mk("intakeFutureTitle"), mk("intakeFutureText")]
      ]
    },
    pricing: {
      active: "pricing",
      eyebrow: mk("navPricing"),
      title: mk("launchTabTitle"),
      text: mk("launchPricingFullText"),
      cards: [
        [mk("earlyTitle"), mk("earlyText")],
        [mk("pricingTitle"), mk("pricingText")]
      ]
    },
    faq: {
      active: "faq",
      eyebrow: mk("navFaq"),
      title: mk("faqBuildTitle"),
      text: mk("faqBuildText"),
      cards: [
        [mk("faqHmrcTitle"), mk("faqHmrcText")],
        [mk("faqSoftwareTitle"), mk("faqSoftwareText")],
        [mk("faqMettleTitle"), mk("faqMettleText")],
        [mk("faqBuildTitle"), mk("faqBuildText")]
      ]
    }
  };
  const mtdTopic = mtdTopics().find((topic) => topic[0] === slug);
  let body = "";
  let active = simplePages[slug]?.active || "mtd";
  if (slug === "mtd") {
    body = `
      <section class="marketing-page-card">
        <span class="eyebrow">${mk("navMtd")}</span>
        <h1>${mk("mtdTitle").replace(":", "")}</h1>
        <p class="marketing-lead">${mk("mtdLead")}</p>
        <p>${mk("mtdText")}</p>
        <div class="marketing-card-grid mtd-highlight-grid">
          <article>
            <strong>${mk("mtdTestingTitle")}</strong>
            <span>${mk("mtdTestingText")}</span>
          </article>
          <a class="mtd-highlight-link" href="${state.marketingLanguage === "en" ? "/mtd/missed-7-august-deadline" : `/${state.marketingLanguage}/mtd/missed-7-august-deadline`}">
            <strong>${mk("mtdLateTitle")}</strong>
            <span>${mk("mtdLateText")}</span>
          </a>
        </div>
        <div class="mtd-topic-grid marketing-topic-grid">
          ${mtdTopics().map(([titleKey, textKey, href]) => `
            <a class="marketing-topic" href="${href}">
              <strong>${mk(titleKey)}</strong>
              <span>${mk(textKey)}</span>
            </a>
          `).join("")}
        </div>
        ${mtdSources()}
        ${pageCta()}
      </section>
    `;
  } else if (slug === "mtdResponsibilities") {
    body = mtdResponsibilitiesArticle();
  } else if (slug === "mtdWhat") {
    body = mtdWhatArticle();
  } else if (slug === "mtdAutoSignup") {
    body = mtdAutoSignupArticle();
  } else if (slug === "mtdWho") {
    body = mtdWhoNeedsArticle();
  } else if (slug === "mtdQualifyingIncome") {
    body = mtdQualifyingIncomeArticle();
  } else if (slug === "mtdGateway") {
    body = mtdGovernmentGatewayArticle();
  } else if (slug === "mtdSpreadsheets") {
    body = mtdSpreadsheetsArticle();
  } else if (slug === "mtdQuarterlyUpdates") {
    body = mtdQuarterlyUpdatesArticle();
  } else if (slug === "mtdMissedDeadline") {
    body = mtdMissedDeadlineArticle();
  } else if (slug === "mtdReceiptsMyth") {
    body = mtdReceiptsMythArticle();
  } else if (slug === "mtdCis") {
    body = mtdCisArticle();
  } else if (slug === "mtdCisMyths") {
    body = mtdCisMythsArticle();
  } else if (slug === "mtdDigitalRecords") {
    body = mtdDigitalRecordsArticle();
  } else if (mtdTopic) {
    const [titleKey, textKey] = mtdTopic;
    const detail = mk(`${titleKey}Detail`);
    body = `
      <article class="marketing-page-card marketing-article">
        <span class="eyebrow">${mk("navMtd")}</span>
        <h1>${mk(titleKey)}</h1>
        <p>${mk(textKey)}</p>
        <p>${detail === `${titleKey}Detail` ? mk("mtdText") : detail}</p>
        ${mtdSources()}
        ${pageCta()}
      </article>
    `;
  } else {
    const page = simplePages[slug] || simplePages.how;
    active = page.active;
    if (slug === "who") {
      body = `
        <section class="marketing-page-card who-page-card">
          <span class="eyebrow">${page.eyebrow}</span>
          <h1>${page.title}</h1>
          <p>${page.text}</p>
          <div class="who-door-grid">
            <article class="who-door-card who-self-door">
              <strong>${mk("selfLabel")}</strong>
              <span>${mk("selfText")}</span>
              <div class="who-door-note">
                <b>${mk("scopeFitTitle")}</b>
                <span>${mk("scopeFitText")}</span>
              </div>
              <a class="primary landing-link who-door-action" href="/app/">${mk("openApp")}</a>
            </article>
            <article class="who-door-card who-accountant-door">
              <strong>${mk("accountantLabel")}</strong>
              <span>${mk("accountantText")}</span>
              <div class="who-door-note">
                <b>${mk("scopeNotForTitle")}</b>
                <span>${mk("scopeNotForText")}</span>
              </div>
              <a class="secondary landing-link who-door-action marketing-open-portal" href="/accountant/">${mk("openPortal")}</a>
            </article>
          </div>
          <div class="who-page-bottom-actions">
            <button class="secondary landing-link marketing-share" type="button" data-action="shareTidGo">${mk("shareTidGo")}</button>
            <a class="secondary landing-link marketing-back-home" href="/">${mk("backHome")}</a>
          </div>
        </section>
      `;
    } else {
      body = `
        <section class="marketing-page-card">
          <span class="eyebrow">${page.eyebrow}</span>
          <h1>${page.title}</h1>
          <p>${page.text}</p>
          <div class="marketing-card-grid">
            ${page.cards.map(([title, text]) => `
              <article>
                <strong>${title}</strong>
                <span>${text}</span>
              </article>
            `).join("")}
          </div>
          ${pageCta()}
        </section>
      `;
    }
  }
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader(active)}
      <div class="marketing-page-layout">
        ${body}
      </div>
      ${landingFooter()}
    </section>
  `);
}

const STORY_COPY = {
  "en": {
    "eyebrow": "Our Story",
    "html": "<h1>From a carrier bag in the van to a simple tool â€” the TidGo story</h1>\n<h2>31 January, 9pm. Sound familiar?</h2>\n<p>You know the drill. The bag comes out. Receipts everywhere â€” dashboard, pockets, jacket you wore in November, that one from the builders' merchant you definitely need but can't read anymore because thermal paper has the lifespan of... hmm... an open beer?</p>\n<p>You sit there with a beer, hoping you'll file before midnight. Your partner gives you the look. Same look, every year.</p>\n<p>That was me. For years.</p>\n<h2>Who's behind this</h2>\n<p>Polish immigrant. Arrived in the UK 25 years ago without a word of English â€” well, I knew &quot;f**k you&quot;, but that didn't help much in job interviews. Started on building sites, worked on CIS, spent years as a tradesman before moving behind the wheel â€” van, HGV, and at some point a forkie on site.</p>\n<p>You know how it is with the forkie. The machine appears when someone needs it, disappears the moment someone else does. Busy all day, queue of brickies complaining the blocks aren't there. Not saying I never accepted a little &quot;incentive&quot; to prioritise certain deliveries. Site economics. The brickies understood.</p>\n<p>The receipts though. Always a nightmare. Carrier bag, glove box, random pockets. Every January, same story.</p>\n<p>Earlier this year the doctor grounded me. No more machinery, no more HGV. So instead of sitting around feeling sorry for myself, I figured I'd learn to code. And while I was at it, I got deep into Making Tax Digital â€” because that's what people like me need to understand right now.</p>\n<h2>Why I didn't just use the big accounting software</h2>\n<p>I went through them all. Xero, QuickBooks, Sage, FreeAgent. Genuinely good tools. Built for accountants. Not for someone who's just come off a ten-hour shift and wants to deal with a receipt before they forget what it was for.</p>\n<p>And then there's the language thing. Tax is hard enough in your own language. In a second one, it's a wall. That's why TidGo works in eight languages â€” while everything your accountant sees is in English. Nobody has to translate anything.</p>\n<p><a href=\"/how-it-works\">More about how TidGo works â†’</a></p>\n<h2>What TidGo doesn't do â€” and why I say it out loud</h2>\n<p>TidGo does not submit anything to HMRC. It doesn't replace your accountant. It does one job: keeps your digital records clean and ready before they reach the people who need them.</p>\n<p>I say this because I've seen too many adverts that promise everything and then the person behind them is afraid to answer the phone. I'd rather tell you where the line is upfront.</p>\n<h2>Built for us. By one of us.</h2>\n<p>No big team. No investors from Silicon Valley or the City of London.</p>\n<p>Just me â€” someone who's driven the same roads, worked the same sites, queued at the same builders' merchants and spent too many January evenings on the floor with a carrier bag wondering why nobody had built something simpler.</p>\n<p>I know what a ten-hour shift feels like. I know what it's like to get a CIS payslip by email and have no idea where to put it. I know what it's like to do business in your second language and hit a wall every time someone mentions &quot;reconciliation&quot; or &quot;accruals&quot;.</p>\n<p>TidGo was built from that. Not from a gap in the market spotted in a spreadsheet. From years of doing the actual job and knowing exactly where the pain is.</p>\n<p>If that sounds like someone worth trusting with your records â€” I'm here.</p>\n<p>TidGo is free during Early Access. After that, Â£4.99 a month. Cancel any time, no questions asked. Your records are always yours.</p>\n<p>Have a look around â€” there's plenty of information here about MTD and how it all works. And if you can't find the answer you're looking for, just ask. I reply to everything.</p>\n<p>Looking for 20 founding testers right now â€” people who'll use it for real and tell me honestly what's wrong. If that's you, <a href=\"/founding-tester\">you know where to find me â†’</a></p>"
  },
  "pl": {
    "eyebrow": "Nasza historia",
    "html": "<h1>Z reklamÃ³wki w vanie do prostego narzÄ™dzia â€” historia TidGo</h1>\n<h2>31 stycznia, godzina dwudziesta pierwsza. Brzmi znajomo?</h2>\n<p>Wiesz jak to jest. ReklamÃ³wka wylatuje. Paragony wszÄ™dzie â€” deska rozdzielcza, kieszenie, ta kurtka co jÄ… miaÅ‚eÅ› w listopadzie, ten jeden ze skÅ‚adu budowlanego ktÃ³ry na pewno ci potrzebny ale juÅ¼ go nie odczytasz bo papier termiczny ma Å¼ywotnoÅ›Ä‡... hmm... otwartego piwa?</p>\n<p>Siedzisz z piwem, liczysz Å¼e zdÄ…Å¼ysz przed pÃ³Å‚nocÄ…. Partnerka rzuca spojrzenie. To samo spojrzenie, kaÅ¼dy rok.</p>\n<p>Tak byÅ‚o u mnie. Przez lata.</p>\n<h2>Kto za tym stoi</h2>\n<p>Emigrant z Polski. PrzyjechaÅ‚em do UK 25 lat temu bez sÅ‚owa po angielsku â€” no, &quot;f**k you&quot; umiaÅ‚em, ale to jakoÅ› nie pomagaÅ‚o na rozmowach kwalifikacyjnych. ZaczÄ…Å‚em na budowach, CIS, lata jako fachowiec zanim wsiadÅ‚em za kÃ³Å‚ko â€” van, HGV, a w pewnym momencie zostaÅ‚em operatorem telehandlera na budowie.</p>\n<p>Wiecie jak jest z forkie'm. Maszyna pojawia siÄ™ kiedy ktoÅ› potrzebuje, znika kiedy potrzebuje ktoÅ› inny. CaÅ‚y dzieÅ„ zapierdzielasz a i tak stoi kolejka murarzy Å¼e cegieÅ‚ nie ma na czas. Nie powiem Å¼e nie zdarzaÅ‚o mi siÄ™ przyjÄ…Ä‡ jakiejÅ› &quot;zachÄ™ty&quot;. Ekonomia budowlana. Murarze rozumieli.</p>\n<p>Paragony zawsze byÅ‚y koszmarem. ReklamÃ³wka, schowek, kieszenie po rÃ³Å¼nych kurtkach. Co styczeÅ„ ta sama historia.</p>\n<p>Na poczÄ…tku tego roku lekarz mnie uziemiÅ‚. Koniec z maszynami, koniec z HGV. Zamiast siedzieÄ‡ i siÄ™ mazgaiÄ‡, postanowiÅ‚em nauczyÄ‡ siÄ™ programowaÄ‡. A przy okazji wkopaÅ‚em siÄ™ po uszy w Making Tax Digital â€” bo to jest coÅ› co ludzie tacy jak ja muszÄ… teraz ogarniaÄ‡.</p>\n<h2>Czemu nie wziÄ…Å‚em po prostu tego duÅ¼ego oprogramowania</h2>\n<p>PrzeszedÅ‚em przez wszystkie. Xero, QuickBooks, Sage, FreeAgent. NaprawdÄ™ dobre narzÄ™dzia. Zrobione dla ksiÄ™gowych. Nie dla kogoÅ› kto wychodzi po dziesiÄ™ciu godzinach na budowie i chce ogarnÄ…Ä‡ paragon zanim zapomni co to byÅ‚o.</p>\n<p>No i jeszcze ta kwestia jÄ™zykowa. Podatki sÄ… trudne w swoim jÄ™zyku. W obcym to juÅ¼ Å›ciana. Dlatego TidGo dziaÅ‚a w oÅ›miu jÄ™zykach â€” a wszystko co widzi twÃ³j ksiÄ™gowy jest po angielsku. Nikt nic nie musi tÅ‚umaczyÄ‡.</p>\n<p><a href=\"/how-it-works\">WiÄ™cej o tym jak to dziaÅ‚a â†’</a></p>\n<h2>Czego TidGo nie robi â€” i dlaczego mÃ³wiÄ™ to gÅ‚oÅ›no</h2>\n<p>TidGo nie wysyÅ‚a nic do HMRC. Nie zastÄ™puje ksiÄ™gowego. Robi jednÄ… rzecz: zbiera i porzÄ…dkuje twoje cyfrowe rekordy zanim trafiÄ… do ludzi ktÃ³rzy ich potrzebujÄ….</p>\n<p>MÃ³wiÄ™ to wprost bo widziaÅ‚em za duÅ¼o reklam ktÃ³re obiecujÄ… wszystko a potem czÅ‚owiek za nimi boi siÄ™ odebraÄ‡ telefon. WolÄ™ powiedzieÄ‡ gdzie jest granica z gÃ³ry.</p>\n<h2>Zbudowane dla nas. Przez jednego z nas.</h2>\n<p>Å»adnego wielkiego teamu. Å»adnych inwestorÃ³w z Doliny Krzemowej ani z londyÅ„skiego City.</p>\n<p>Tylko ja â€” ktoÅ› kto jeÅºdziÅ‚ tymi samymi drogami, pracowaÅ‚ na tych samych budowach, staÅ‚ w tej samej kolejce w skÅ‚adzie budowlanym i spÄ™dziÅ‚ za duÅ¼o wieczorÃ³w w styczniu na podÅ‚odze z reklamÃ³wkÄ… zastanawiajÄ…c siÄ™ czemu jeszcze nikt nie zrobiÅ‚ czegoÅ› prostszego.</p>\n<p>Wiem jak wyglÄ…da dziesiÄ™Ä‡ godzin na budowie. Wiem jak to jest dostaÄ‡ payslip CIS mailem i nie wiedzieÄ‡ gdzie go wrzuciÄ‡. Wiem jak to jest prowadziÄ‡ biznes w obcym jÄ™zyku i trafiaÄ‡ na Å›cianÄ™ za kaÅ¼dym razem kiedy ktoÅ› mÃ³wi &quot;reconciliation&quot; albo &quot;accruals&quot;.</p>\n<p>TidGo powstaÅ‚o z tego. Nie z analizy rynku w arkuszu kalkulacyjnym. Z lat robienia tej roboty i wiedzenia dokÅ‚adnie gdzie boli.</p>\n<p>JeÅ›li brzmi to jak ktoÅ› komu moÅ¼esz zaufaÄ‡ ze swoimi rekordami â€” jestem tutaj.</p>\n<p>TidGo jest bezpÅ‚atne podczas Early Access. Potem Â£4.99 miesiÄ™cznie. Anulujesz kiedy chcesz, bez pytaÅ„, twoje rekordy zawsze sÄ… twoje.</p>\n<p>Przejrzyj stronÄ™ â€” znajdziesz tu duÅ¼o informacji o MTD i o tym jak to wszystko dziaÅ‚a. A jeÅ›li nie znajdziesz odpowiedzi na swoje pytanie â€” napisz Å›miaÅ‚o, odpisujÄ™ na wszystko.</p>\n<p>Szukam teraz 20 founding testerÃ³w â€” ludzi ktÃ³rzy uÅ¼yjÄ… tego naprawdÄ™ i powiedzÄ… mi szczerze co jest nie tak. Jak brzmi to jak coÅ› dla Ciebie, <a href=\"/pl/founding-tester\">wiesz gdzie mnie szukaÄ‡ â†’</a></p>"
  },
  "ro": {
    "eyebrow": "Povestea noastra",
    "html": "<h1>De la o pungÄƒ Ã®n dubÄƒ la un instrument simplu â€” povestea TidGo</h1>\n<h2>31 ianuarie, ora 21:00. SunÄƒ familiar?</h2>\n<p>È˜tii cum e. Iese punga. Bonuri peste tot â€” bord, buzunare, jacheta pe care ai purtat-o Ã®n noiembrie, Äƒla de la depozitul de materiale de care ai sigur nevoie dar pe care nu-l mai poÈ›i citi pentru cÄƒ hÃ¢rtia termicÄƒ are o duratÄƒ de viaÈ›Äƒ de... hmm... o bere deschisÄƒ?</p>\n<p>Stai cu o bere, sperÃ¢nd cÄƒ vei depune Ã®nainte de miezul nopÈ›ii. Partenera aruncÄƒ privirea. AceeaÈ™i privire, Ã®n fiecare an.</p>\n<p>AÈ™a a fost la mine. Ani la rÃ¢nd.</p>\n<h2>Cine e Ã®n spatele acestui proiect</h2>\n<p>Emigrant din Polonia. Am ajuns Ã®n UK acum 25 de ani fÄƒrÄƒ un cuvÃ¢nt Ã®n englezÄƒ â€” ei bine, È™tiam &quot;f**k you&quot;, dar asta nu prea m-a ajutat la interviuri. Am Ã®nceput pe È™antiere, am lucrat pe CIS, ani ca meseriaÈ™ Ã®nainte sÄƒ mÄƒ urc la volan â€” dubÄƒ, camion, È™i la un moment dat am ajuns operator de telehandler pe È™antier.</p>\n<p>È˜tiÈ›i cum e cu operatorul de telehandler. MaÈ™ina apare cÃ¢nd cineva are nevoie, dispare cÃ¢nd are nevoie altcineva. ToatÄƒ ziua dai din greu È™i tot e o coadÄƒ de zidari cÄƒ nu le-au venit cÄƒrÄƒmizile. Nu zic cÄƒ nu mi s-a Ã®ntÃ¢mplat sÄƒ accept cÃ¢te o &quot;stimulentÄƒ&quot; pentru a prioritiza anumite livrÄƒri. Economie de È™antier. Zidarii Ã®nÈ›elegeau.</p>\n<p>Bonurile au fost mereu un coÈ™mar. PungÄƒ, torpedou, buzunare prin diverse jachete. ÃŽn fiecare ianuarie, aceeaÈ™i poveste.</p>\n<p>La Ã®nceputul acestui an medicul m-a scos din joc. Gata cu utilajele, gata cu camionul. ÃŽn loc sÄƒ stau È™i sÄƒ mÄƒ vÄƒicÄƒresc, am hotÄƒrÃ¢t sÄƒ Ã®nvÄƒÈ› sÄƒ programez. È˜i Ã®n timp ce mÄƒ ocupam de asta, m-am adÃ¢ncit Ã®n Making Tax Digital â€” pentru cÄƒ asta e ce trebuie sÄƒ Ã®nÈ›eleagÄƒ oameni ca mine acum.</p>\n<h2>De ce n-am luat pur È™i simplu software-ul contabil mare</h2>\n<p>Le-am Ã®ncercat pe toate. Xero, QuickBooks, Sage, FreeAgent. Instrumente cu adevÄƒrat bune. FÄƒcute pentru contabili. Nu pentru cineva care tocmai a ieÈ™it dupÄƒ zece ore de muncÄƒ È™i vrea sÄƒ rezolve un bon Ã®nainte sÄƒ uite pentru ce era.</p>\n<p>È˜i mai e chestia cu limba. Taxele sunt suficient de grele Ã®n propria ta limbÄƒ. ÃŽntr-una strÄƒinÄƒ, e un zid. De aceea TidGo funcÈ›ioneazÄƒ Ã®n opt limbi â€” Ã®n timp ce tot ce vede contabilul tÄƒu e Ã®n englezÄƒ. Nimeni nu trebuie sÄƒ traducÄƒ nimic.</p>\n<p><a href=\"/how-it-works\">Mai multe despre cum funcÈ›ioneazÄƒ TidGo â†’</a></p>\n<h2>Ce nu face TidGo â€” È™i de ce o spun cu voce tare</h2>\n<p>TidGo nu trimite nimic la HMRC. Nu Ã®nlocuieÈ™te contabilul. Face un singur lucru: colecteazÄƒ È™i ordoneazÄƒ evidenÈ›ele tale digitale Ã®nainte sÄƒ ajungÄƒ la oamenii care au nevoie de ele.</p>\n<p>Spun asta pentru cÄƒ am vÄƒzut prea multe reclame care promit totul È™i apoi omul din spatele lor se teme sÄƒ rÄƒspundÄƒ la telefon. Prefer sÄƒ spun de la Ã®nceput unde e linia.</p>\n<h2>Construit pentru noi. De unul dintre noi.</h2>\n<p>Nicio echipÄƒ mare. Niciun investitor din Silicon Valley sau City of London.</p>\n<p>Doar eu â€” cineva care a condus pe aceleaÈ™i drumuri, a lucrat pe aceleaÈ™i È™antiere, a stat la aceeaÈ™i coadÄƒ la depozitul de materiale È™i a petrecut prea multe seri de ianuarie pe podea cu o pungÄƒ Ã®ntrebÃ¢ndu-se de ce nu a construit nimeni ceva mai simplu.</p>\n<p>È˜tiu cum aratÄƒ zece ore pe È™antier. È˜tiu cum e sÄƒ primeÈ™ti un payslip CIS pe email È™i sÄƒ nu È™tii unde sÄƒ-l pui. È˜tiu cum e sÄƒ faci afaceri Ã®ntr-o limbÄƒ strÄƒinÄƒ È™i sÄƒ dai de un zid de fiecare datÄƒ cÃ¢nd cineva menÈ›ioneazÄƒ &quot;reconciliation&quot; sau &quot;accruals&quot;.</p>\n<p>TidGo s-a nÄƒscut din asta. Nu dintr-un gol de piaÈ›Äƒ observat Ã®ntr-un tabel. Din ani de muncÄƒ realÄƒ È™i de È™tiut exact unde doare.</p>\n<p>DacÄƒ È›i se pare cÄƒ eÈ™ti genul de om cÄƒruia Ã®i poÈ›i Ã®ncredinÈ›a evidenÈ›ele â€” sunt aici.</p>\n<p>TidGo e gratuit Ã®n perioada Early Access. Apoi Â£4.99 pe lunÄƒ. Anulezi oricÃ¢nd, fÄƒrÄƒ Ã®ntrebÄƒri, evidenÈ›ele tale sunt mereu ale tale.</p>\n<p>UitÄƒ-te prin site â€” gÄƒseÈ™ti multe informaÈ›ii despre MTD È™i despre cum funcÈ›ioneazÄƒ totul. Iar dacÄƒ nu gÄƒseÈ™ti rÄƒspunsul la Ã®ntrebarea ta â€” scrie fÄƒrÄƒ sÄƒ te sfiieÈ™ti, rÄƒspund la orice.</p>\n<p>Caut acum 20 de founding testeri â€” oameni care sÄƒ Ã®l foloseascÄƒ cu adevÄƒrat È™i sÄƒ Ã®mi spunÄƒ sincer ce nu merge. DacÄƒ È›i se pare cÄƒ eÈ™ti tu, <a href=\"/ro/founding-tester\">È™tii unde sÄƒ mÄƒ gÄƒseÈ™ti â†’</a></p>"
  },
  "lt": {
    "eyebrow": "Musu istorija",
    "html": "<h1>Nuo maiÅ¡o furgone iki paprasto Ä¯rankio â€” TidGo istorija</h1>\n<h2>Sausio 31-oji, 21:00. Skamba paÅ¾Ä¯stamai?</h2>\n<p>Å½inai kaip bÅ«na. IÅ¡lenda maiÅ¡as. Kvitai visur â€” prietaisÅ³ skydelis, kiÅ¡enÄ—s, striukÄ— kuriÄ… vilkÄ—jai lapkritÄ¯, tas vienas iÅ¡ statybiniÅ³ medÅ¾iagÅ³ parduotuvÄ—s kurio tikrai reikia bet kurio nebegalima perskaityti nes termininis popierius turi tokiÄ… pat gyvavimo trukmÄ™ kaip... hmm... atidarytas alus?</p>\n<p>SÄ—di su alumi, tikÄ—damasis pateikti iki vidurnakÄio. PartnerÄ— meta Å¾vilgsnÄ¯. Tas pats Å¾vilgsnis, kiekvienais metais.</p>\n<p>Taip buvo pas mane. MetÅ³ metus.</p>\n<h2>Kas uÅ¾ to stovi</h2>\n<p>Emigrantas iÅ¡ Lenkijos. Atvykau Ä¯ UK prieÅ¡ 25 metus be Å¾odÅ¾io angliÅ¡kai â€” na, &quot;f**k you&quot; mokÄ—jau, bet tai nelabai padÄ—jo pokalbiuose dÄ—l darbo. PradÄ—jau statybose, dirbau CIS, metai kaip amatininkas prieÅ¡ sÄ—dant prie vairo â€” furgonas, sunkveÅ¾imis, o tam tikru momentu tapau telehandlerio operatoriumi statybvietÄ—je.</p>\n<p>Å½inote kaip yra su forkie. MaÅ¡ina pasirodo kai kam nors reikia, dingsta kai reikia kitam. VisÄ… dienÄ… diri iÅ¡ peties o vis tiek eilÄ— mÅ«rininkÅ³ kad plytÅ³ nÄ—ra laiku. Nesakysiu kad man nepasitaikÄ— priimti kokio &quot;paskatinimo&quot; tam tikroms pristatymams prioritizuoti. StatybvietÄ—s ekonomika. MÅ«rininkai suprato.</p>\n<p>Kvitai visada buvo koÅ¡maras. MaiÅ¡as, pirÅ¡tiniÅ³ skyrius, kiÅ¡enÄ—s po Ä¯vairiomis striukÄ—mis. KiekvienÄ… sausÄ¯ ta pati istorija.</p>\n<p>Å iÅ³ metÅ³ pradÅ¾ioje gydytojas mane prikaustÄ— prie Å¾emÄ—s. Pabaiga su maÅ¡inomis, pabaiga su sunkveÅ¾imiu. Vietoj to kad sÄ—dÄ—Äiau ir verkÅ¡lentum, nusprendÅ¾iau iÅ¡mokti programuoti. O tuo metu giliai pasinÄ—riau Ä¯ Making Tax Digital â€” nes tai yra tai kÄ… tokie Å¾monÄ—s kaip aÅ¡ dabar turi suprasti.</p>\n<h2>KodÄ—l tiesiog nepasiÄ—miau didelÄ—s apskaitos programinÄ—s Ä¯rangos</h2>\n<p>IÅ¡bandÅ¾iau visas. Xero, QuickBooks, Sage, FreeAgent. Tikrai geri Ä¯rankiai. Sukurti buhalteriams. Ne kaÅ¾kam kuris tik iÅ¡Ä—jo po deÅ¡imties valandÅ³ darbo ir nori susitvarkyti kvitÄ… kol neuÅ¾mirÅ¡o kam jis buvo.</p>\n<p>Ir dar ta kalbos problema. MokesÄiai yra pakankamai sunkÅ«s savo kalba. Svetima â€” tai siena. TodÄ—l TidGo veikia aÅ¡tuoniomis kalbomis â€” o viskas kÄ… mato tavo buhalteris yra angliÅ¡kai. Niekas nieko neturi versti.</p>\n<p><a href=\"/how-it-works\">Daugiau apie tai kaip TidGo veikia â†’</a></p>\n<h2>Ko TidGo nedaro â€” ir kodÄ—l tai sakau garsiai</h2>\n<p>TidGo nieko nesiunÄia Ä¯ HMRC. NepakeiÄia buhalterio. Daro vienÄ… dalykÄ…: renka ir tvarko tavo skaitmeninius Ä¯raÅ¡us prieÅ¡ jiems patenkant pas Å¾mones kuriems jÅ³ reikia.</p>\n<p>Tai sakau nes maÄiau per daug reklamÅ³ kurios Å¾ada viskÄ… o paskui Å¾mogus uÅ¾ jÅ³ bijo atsiliepti Ä¯ telefonÄ…. VerÄiau iÅ¡ anksto pasakysiu kur yra riba.</p>\n<h2>Sukurta mums. Vieno iÅ¡ mÅ«sÅ³.</h2>\n<p>Jokios didelÄ—s komandos. JokiÅ³ investuotojÅ³ iÅ¡ Silicio slÄ—nio ar Londono City.</p>\n<p>Tik aÅ¡ â€” kaÅ¾kas kuris vaÅ¾iavo tais paÄiais keliais, dirbo tose paÄiose statybvietÄ—se, stovÄ—jo toje paÄioje eilÄ—je statybiniÅ³ medÅ¾iagÅ³ parduotuvÄ—je ir praleido per daug sausio vakarÅ³ ant grindÅ³ su maiÅ¡u galvodamas kodÄ—l niekas nesukÅ«rÄ— kaÅ¾ko paprastesnio.</p>\n<p>Å½inau kaip atrodo deÅ¡imt valandÅ³ statybvietÄ—je. Å½inau kaip yra gauti CIS payslipÄ… el. paÅ¡tu ir neÅ¾inoti kur jÄ¯ dÄ—ti. Å½inau kaip yra vesti verslÄ… svetima kalba ir atsitrenkti Ä¯ sienÄ… kiekvienÄ… kartÄ… kai kaÅ¾kas pamini &quot;reconciliation&quot; ar &quot;accruals&quot;.</p>\n<p>TidGo gimÄ— iÅ¡ to. Ne iÅ¡ rinkos spragos pastebÄ—tos lentelÄ—je. IÅ¡ metÅ³ realaus darbo ir tikslaus Å¾inojimo kur skauda.</p>\n<p>Jei tai skamba kaip kaÅ¾kas kuriam gali patikÄ—ti savo Ä¯raÅ¡us â€” esu Äia.</p>\n<p>TidGo yra nemokamas Early Access laikotarpiu. Po to Â£4.99 per mÄ—nesÄ¯. AtÅ¡auk kada nori, be klausimÅ³, tavo Ä¯raÅ¡ai visada yra tavo.</p>\n<p>ApÅ¾velk svetainÄ™ â€” rasi daug informacijos apie MTD ir apie tai kaip viskas veikia. O jei nerasi atsakymo Ä¯ savo klausimÄ… â€” raÅ¡yk drÄ…siai, atsakau Ä¯ viskÄ….</p>\n<p>Dabar ieÅ¡kau 20 founding testeriÅ³ â€” Å¾moniÅ³ kurie tikrai naudos ir nuoÅ¡irdÅ¾iai pasakys kas ne taip. Jei tai skamba kaip tu, <a href=\"/lt/founding-tester\">Å¾inai kur mane rasti â†’</a></p>"
  }
};
function storyArticleHtml() {
  const story = STORY_COPY[state.marketingLanguage] || STORY_COPY.en;
  return `
          <span class="eyebrow">${escapeHtml(story.eyebrow)}</span>
${story.html}
  `;
}

function ourStoryPage() {
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader("story")}
      <div class="marketing-page-layout story-layout">
        <article class="marketing-page-card marketing-article story-article">
          ${storyArticleHtml()}
          ${androidTesterCallout()}
          ${pageCta()}
        </article>
      </div>
      ${landingFooter()}
    </section>
  `);
}

const FOUNDING_TESTER_COPY = {
  en: {
    eyebrow: "Founding Tester",
    title: "Become a TidGo Founding Tester",
    lead: "TidGo works in your browser right now. The Android app is in closed testing, and the iPhone version is in development.",
    introOne: "I'm looking for 20 UK sole traders, CIS subcontractors and tradespeople, with landlords who keep simple records welcome too, who will use TidGo for real and tell me honestly what works, what does not, and what could be simpler.",
    introTwo: "Setup takes about ten minutes. All I ask is that you send receipts the way you normally would, and tell me when something annoys you at least a couple of times over a few weeks.",
    termsTitle: "Founding Tester terms",
    termsText: "Active Founding Testers receive access to the TidGo Core plan at no monthly charge, for as long as the Core plan exists. It is personal, non-transferable and fair use applies.",
    activeTitle: "What active means",
    activeText: "Use TidGo for at least a few weeks and send feedback at least twice. No minimum number of receipts.",
    praiseTitle: "No fake praise",
    praiseText: "No positive review, stars or public promotion required. Honest feedback is the point.",
    fallback: "If the form misbehaves, email",
    formEyebrow: "Founding Tester form",
    name: "Name",
    namePlaceholder: "Your name",
    googleEmail: "Google account email used on your Android phone",
    googleHint: "This must be the Google account on your Android phone, otherwise the test link will not work for you.",
    workType: "What do you do?",
    chooseOne: "Choose one",
    contactEmail: "Contact email, if different",
    optional: "Optional",
    whatsapp: "WhatsApp number",
    useApp: "I agree to use TidGo for at least a few weeks during testing.",
    feedback: "I agree to send short honest feedback at least twice or report problems I find.",
    consentPrefix: "I agree to TidGo's",
    privacy: "Privacy Policy",
    andText: "and",
    terms: "Terms",
    submit: "Become a Founding Tester",
    options: ["sole trader", "CIS subcontractor", "tradesperson", "landlord", "other"]
  },
  pl: {
    eyebrow: "Founding Tester",
    title: "ZostaÅ„ Founding Testerem TidGo",
    lead: "TidGo dziaÅ‚a juÅ¼ w przeglÄ…darce. Aplikacja Android jest w zamkniÄ™tych testach, a wersja na iPhone jest w przygotowaniu.",
    introOne: "Szukam 20 osÃ³b w UK: sole traders, CIS subcontractors, tradespeople oraz landlordÃ³w prowadzÄ…cych proste rekordy, ktÃ³rzy uÅ¼yjÄ… TidGo naprawdÄ™ i powiedzÄ… uczciwie, co dziaÅ‚a, co przeszkadza i co moÅ¼na uproÅ›ciÄ‡.",
    introTwo: "Start zajmuje okoÅ‚o dziesiÄ™ciu minut. Chodzi tylko o to, Å¼eby wysyÅ‚aÄ‡ paragony tak jak zwykle i daÄ‡ szczery feedback kilka razy w trakcie testÃ³w.",
    termsTitle: "Warunki Founding Tester",
    termsText: "Aktywni Founding Testerzy dostajÄ… dostÄ™p do planu TidGo Core bez miesiÄ™cznej opÅ‚aty tak dÅ‚ugo, jak plan Core istnieje. DostÄ™p jest osobisty, nieprzenoszalny i objÄ™ty zasadÄ… fair use.",
    activeTitle: "Co znaczy aktywny tester",
    activeText: "UÅ¼ywaj TidGo przez co najmniej kilka tygodni i wyÅ›lij feedback co najmniej dwa razy. Nie ma minimalnej liczby paragonÃ³w.",
    praiseTitle: "Bez sztucznego zachwalania",
    praiseText: "Nie wymagamy pozytywnej opinii, gwiazdek ani publicznej promocji. Liczy siÄ™ uczciwy feedback.",
    fallback: "JeÅ›li formularz nie dziaÅ‚a, napisz na",
    formEyebrow: "Formularz Founding Tester",
    name: "ImiÄ™ i nazwisko",
    namePlaceholder: "Twoje imiÄ™ i nazwisko",
    googleEmail: "Adres konta Google uÅ¼ywany na telefonie z Androidem",
    googleHint: "To musi byÄ‡ konto Google uÅ¼ywane na Twoim telefonie z Androidem, inaczej link testowy nie zadziaÅ‚a.",
    workType: "Czym siÄ™ zajmujesz?",
    chooseOne: "Wybierz",
    contactEmail: "Kontaktowy email, jeÅ›li inny",
    optional: "Opcjonalnie",
    whatsapp: "Numer WhatsApp",
    useApp: "Zgadzam siÄ™ uÅ¼ywaÄ‡ TidGo przez co najmniej kilka tygodni w trakcie testÃ³w.",
    feedback: "Zgadzam siÄ™ wysÅ‚aÄ‡ krÃ³tki uczciwy feedback co najmniej dwa razy albo zgÅ‚osiÄ‡ znalezione problemy.",
    consentPrefix: "AkceptujÄ™",
    privacy: "Privacy Policy",
    andText: "oraz",
    terms: "Terms",
    submit: "ZostaÅ„ Founding Testerem",
    options: ["sole trader", "CIS subcontractor", "tradesperson", "landlord", "inne"]
  },
  ro: {
    eyebrow: "Founding Tester",
    title: "Devino Founding Tester TidGo",
    lead: "TidGo functioneaza deja in browser. Aplicatia Android este in testare inchisa, iar versiunea pentru iPhone este in dezvoltare.",
    introOne: "Caut 20 de utilizatori din UK: sole traders, subcontractori CIS, meseriasi si proprietari care tin evidente simple, dispusi sa foloseasca TidGo pe bune si sa spuna sincer ce merge, ce nu merge si ce poate fi mai simplu.",
    introTwo: "Configurarea dureaza aproximativ zece minute. Te rog doar sa trimiti bonuri asa cum ai face-o normal si sa imi spui de cateva ori in timpul testarii ce te incurca.",
    termsTitle: "Conditii Founding Tester",
    termsText: "Testerii activi primesc acces la planul TidGo Core fara taxa lunara, atat timp cat planul Core exista. Accesul este personal, netransferabil si se aplica fair use.",
    activeTitle: "Ce inseamna activ",
    activeText: "Foloseste TidGo cel putin cateva saptamani si trimite feedback de cel putin doua ori. Nu exista un numar minim de bonuri.",
    praiseTitle: "Fara laude false",
    praiseText: "Nu cerem recenzii pozitive, stele sau promovare publica. Feedbackul sincer este scopul.",
    fallback: "Daca formularul nu functioneaza, trimite email la",
    formEyebrow: "Formular Founding Tester",
    name: "Nume",
    namePlaceholder: "Numele tau",
    googleEmail: "Emailul contului Google folosit pe telefonul Android",
    googleHint: "Trebuie sa fie contul Google de pe telefonul tau Android, altfel linkul de test nu va functiona.",
    workType: "Cu ce te ocupi?",
    chooseOne: "Alege",
    contactEmail: "Email de contact, daca este diferit",
    optional: "Optional",
    whatsapp: "Numar WhatsApp",
    useApp: "Sunt de acord sa folosesc TidGo cel putin cateva saptamani in timpul testarii.",
    feedback: "Sunt de acord sa trimit feedback sincer de cel putin doua ori sau sa raportez problemele gasite.",
    consentPrefix: "Sunt de acord cu",
    privacy: "Privacy Policy",
    andText: "si",
    terms: "Terms",
    submit: "Devino Founding Tester",
    options: ["sole trader", "subcontractor CIS", "meserias", "landlord", "altceva"]
  },
  lt: {
    eyebrow: "Founding Tester",
    title: "Tapk TidGo Founding Testeriu",
    lead: "TidGo jau veikia narÅ¡yklÄ—je. Android programÄ—lÄ— yra uÅ¾darame testavime, o iPhone versija kuriama.",
    introOne: "IeÅ¡kau 20 Å¾moniÅ³ JungtinÄ—je KaralystÄ—je: sole traders, CIS subcontractors, tradespeople ir landlordÅ³, kurie tvarko paprastus Ä¯raÅ¡us, naudotÅ³ TidGo realiai ir pasakytÅ³, kas veikia, kas trukdo ir kÄ… galima supaprastinti.",
    introTwo: "PradÅ¾ia uÅ¾trunka apie deÅ¡imt minuÄiÅ³. Tereikia siÅ³sti kvitus taip, kaip Ä¯prastai, ir kelis kartus testavimo metu duoti sÄ…Å¾iningÄ… atsiliepimÄ….",
    termsTitle: "Founding Tester sÄ…lygos",
    termsText: "AktyvÅ«s Founding Testeriai gauna prieigÄ… prie TidGo Core plano be mÄ—nesinio mokesÄio tol, kol Core planas egzistuoja. Prieiga yra asmeninÄ—, neperduodama ir taikomas fair use.",
    activeTitle: "KÄ… reiÅ¡kia aktyvus testeris",
    activeText: "Naudok TidGo bent kelias savaites ir atsiÅ³sk atsiliepimÄ… bent du kartus. Minimalaus kvitÅ³ skaiÄiaus nÄ—ra.",
    praiseTitle: "Be netikrÅ³ pagyrimÅ³",
    praiseText: "Nereikalaujame teigiamo atsiliepimo, Å¾vaigÅ¾duÄiÅ³ ar vieÅ¡os reklamos. Tikslas yra sÄ…Å¾iningas feedbackas.",
    fallback: "Jei forma neveikia, paraÅ¡yk el. paÅ¡tu",
    formEyebrow: "Founding Tester forma",
    name: "Vardas",
    namePlaceholder: "Tavo vardas",
    googleEmail: "Google paskyros el. paÅ¡tas, naudojamas Android telefone",
    googleHint: "Tai turi bÅ«ti Google paskyra tavo Android telefone, kitaip testavimo nuoroda neveiks.",
    workType: "Kuo uÅ¾siimi?",
    chooseOne: "Pasirink",
    contactEmail: "Kontaktinis el. paÅ¡tas, jei kitas",
    optional: "NebÅ«tina",
    whatsapp: "WhatsApp numeris",
    useApp: "Sutinku naudoti TidGo bent kelias savaites testavimo metu.",
    feedback: "Sutinku bent du kartus atsiÅ³sti trumpÄ… sÄ…Å¾iningÄ… atsiliepimÄ… arba praneÅ¡ti apie rastas problemas.",
    consentPrefix: "Sutinku su TidGo",
    privacy: "Privacy Policy",
    andText: "ir",
    terms: "Terms",
    submit: "Tapti Founding Testeriu",
    options: ["sole trader", "CIS subcontractor", "tradesperson", "landlord", "kita"]
  }
};

function foundingTesterCopy() {
  return FOUNDING_TESTER_COPY[state.marketingLanguage] || FOUNDING_TESTER_COPY.en;
}

function androidTestersPage() {
  const c = foundingTesterCopy();
  const options = c.options.map((option) => `<option>${escapeHtml(option)}</option>`).join("");
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader("foundingTester")}
      <div class="marketing-page-layout tester-layout">
        <article class="marketing-page-card marketing-article tester-intro">
          <span class="eyebrow">${escapeHtml(c.eyebrow)}</span>
          <h1>${escapeHtml(c.title)}</h1>
          <p class="marketing-lead">${escapeHtml(c.lead)}</p>
          <p>${escapeHtml(c.introOne)}</p>
          <p>${escapeHtml(c.introTwo)}</p>
          <div class="tester-reward">
            <strong>${escapeHtml(c.termsTitle)}</strong>
            <span>${escapeHtml(c.termsText)}</span>
          </div>
          <div class="marketing-card-grid tester-conditions">
            <article><strong>${escapeHtml(c.activeTitle)}</strong><span>${escapeHtml(c.activeText)}</span></article>
            <article><strong>${escapeHtml(c.praiseTitle)}</strong><span>${escapeHtml(c.praiseText)}</span></article>
          </div>
          <p>${escapeHtml(c.fallback)} <a href="mailto:hello@tidgo.co.uk">hello@tidgo.co.uk</a>.</p>
        </article>

        <form class="marketing-page-card tester-form" id="androidTesterForm">
          <span class="eyebrow">${escapeHtml(c.formEyebrow)}</span>
          <label class="field"><span>${escapeHtml(c.name)}</span><input class="input" name="tester_name" required autocomplete="name" placeholder="${escapeHtml(c.namePlaceholder)}"></label>
          <label class="field"><span>${escapeHtml(c.googleEmail)}</span><input class="input" name="google_email" type="email" required autocomplete="email" placeholder="yourname@gmail.com"></label>
          <p class="hint tester-hint">${escapeHtml(c.googleHint)}</p>
          <label class="field"><span>${escapeHtml(c.workType)}</span><select class="select" name="business_type" required>
            <option value="">${escapeHtml(c.chooseOne)}</option>
            ${options}
          </select></label>
          <label class="field"><span>${escapeHtml(c.contactEmail)}</span><input class="input" name="contact_email" type="email" placeholder="${escapeHtml(c.optional)}"></label>
          <label class="field"><span>${escapeHtml(c.whatsapp)}</span><input class="input" name="whatsapp_number" placeholder="${escapeHtml(c.optional)}"></label>
          <label class="check-row legal-agree-row"><input type="checkbox" name="use_14_days" required><span>${escapeHtml(c.useApp)}</span></label>
          <label class="check-row legal-agree-row"><input type="checkbox" name="send_feedback" required><span>${escapeHtml(c.feedback)}</span></label>
          <label class="check-row legal-agree-row"><input type="checkbox" name="privacy_consent" required><span>${escapeHtml(c.consentPrefix)} <a href="/privacy/" target="_blank" rel="noopener">${escapeHtml(c.privacy)}</a> ${escapeHtml(c.andText)} <a href="/terms/" target="_blank" rel="noopener">${escapeHtml(c.terms)}</a>.</span></label>
          <button class="primary" type="submit">${escapeHtml(c.submit)}</button>
        </form>
      </div>
      ${landingFooter()}
    </section>
  `);
}

function deleteAccountInfoPage() {
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader("")}
      <div class="marketing-page-layout">
        <article class="marketing-page-card marketing-article">
          <span class="eyebrow">TidGo</span>
          <h1>Delete your TidGo account</h1>
          <p>You can delete individual receipts, income records and attached proof photos inside the app without deleting your whole account. Open the record, then use the delete option for that item.</p>
          <p>You can delete your TidGo account inside the app:</p>
          <ol>
            <li>Open TidGo.</li>
            <li>Go to Settings.</li>
            <li>Tap "Delete account and all data".</li>
            <li>Confirm the deletion.</li>
          </ol>
          <p>When you delete your account, TidGo deletes your active account profile, receipt records, income records, stored receipt photos/proof files, summaries, WhatsApp link information and accountant access permissions from our live systems.</p>
          <p>Some limited technical logs and backups may remain for up to 30 days before automatic deletion, unless we are legally required to keep them for longer.</p>
          <p>If you cannot access the app, contact us at <a href="mailto:hello@tidgo.co.uk">hello@tidgo.co.uk</a> and request account deletion from the email address linked to your TidGo account.</p>
          ${pageCta()}
        </article>
      </div>
      ${landingFooter()}
    </section>
  `);
}

function marketingLegalPage(kind) {
  const title = marketingLegalTitle(kind);
  const copy = legalCopy(kind);
  const fullDocument = FULL_LEGAL_MARKDOWN[kind] ? markdownToLegalHtml(FULL_LEGAL_MARKDOWN[kind]) : `
    <h2>${escapeHtml(t("legalShort"))}</h2>
    <p>${escapeHtml(copy.short)}</p>
    <h2>${escapeHtml(t("legalFull"))}</h2>
    <p>${escapeHtml(copy.details)}</p>
  `;
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader("")}
      <div class="marketing-page-layout">
        <article class="marketing-page-card marketing-article">
          <span class="eyebrow">TidGo</span>
          <h1>${escapeHtml(title)}</h1>
          ${marketingOfficialLegalNotice()}
          <div class="legal-document">
            ${fullDocument}
          </div>
          ${pageCta()}
        </article>
      </div>
      ${landingFooter()}
    </section>
  `);
}

function demoShell(kind, title, subtitle, steps, ctaHref, ctaLabel, mode = "web") {
  shell(`
    <section class="landing-screen demo-screen ${mode === "app" ? "app-demo-screen" : "accountant-demo-screen"}">
      <header class="landing-head">
        <a class="brand landing-brand demo-brand" href="/"><img src="/icon-192.png" alt=""><span>TidGo<sup>TM</sup></span></a>
        <div class="landing-head-actions">
          <nav class="landing-nav" aria-label="Demo navigation">
            <a href="/">${mk("home")}</a>
            <a href="/app-demo">${mk("appDemo")}</a>
            <a href="/accountant-demo">${mk("accountantDemo")}</a>
          </nav>
          ${marketingLanguagePicker()}
        </div>
      </header>
      <div class="demo-layout">
        <div class="landing-hero">
          <span class="eyebrow">${escapeHtml(kind)}</span>
          <h1>${escapeHtml(title)}</h1>
          <p>${escapeHtml(subtitle)}</p>
          <div class="demo-cta">
            <a class="primary landing-link" href="${ctaHref}">${escapeHtml(ctaLabel)}</a>
            <a class="secondary landing-link" href="/">${mk("backHome")}</a>
          </div>
        </div>
        <div class="demo-steps">
          ${steps.map((step, index) => `
            <article class="demo-card">
              <div class="demo-copy">
                <span class="landing-card-label">${mk("step")} ${index + 1}</span>
                <h2>${escapeHtml(step.title)}</h2>
                <p>${escapeHtml(step.text)}</p>
              </div>
              <div class="demo-preview ${step.tone}">
                <span class="demo-screen-label">${escapeHtml(step.screen)}</span>
                <div class="demo-visual">
                  ${step.visual}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
      ${landingFooter()}
    </section>
  `);
}

function appDemo() {
  demoShell(
    mk("appDemoKind"),
    mk("appDemoTitle"),
    mk("appDemoText"),
    [
      {
        screen: mk("demoHomeScreen"),
        title: mk("demoHomeTitle"),
        text: mk("demoHomeText"),
        tone: "blue",
        visual: "<img class='demo-shot' src='/assets/demo/user-home.jpg' alt='TidGo app home screen'>"
      },
      {
        screen: mk("demoReceiptScreen"),
        title: mk("demoReceiptTitle"),
        text: mk("demoReceiptText"),
        tone: "green",
        visual: `<img class='demo-shot' src='/assets/demo/user-receipt-photo.jpg' alt='Receipt photo screen'><span class='demo-callout'>${escapeHtml(mk("demoReceiptCallout"))}</span>`
      },
      {
        screen: mk("demoDetailsScreen"),
        title: mk("demoDetailsTitle"),
        text: mk("demoDetailsText"),
        tone: "green",
        visual: "<img class='demo-shot' src='/assets/demo/user-edit-details.jpg' alt='Receipt details screen'>"
      },
      {
        screen: mk("demoSummaryScreen"),
        title: mk("demoSummaryTitle"),
        text: mk("demoSummaryText"),
        tone: "soft",
        visual: "<img class='demo-shot' src='/assets/demo/user-summary.jpg' alt='Monthly summary screen'>"
      }
    ],
    "/app/",
    mk("selfTitle"),
    "app"
  );
}

function accountantDemo() {
  const accountantHref = "/accountant/";
  demoShell(
    mk("accountantDemoKind"),
    mk("accountantDemoTitle"),
    mk("accountantDemoText"),
    [
      {
        screen: mk("demoAccessScreen"),
        title: mk("demoAccessTitle"),
        text: mk("demoAccessText"),
        tone: "blue",
        visual: "<img class='demo-shot' src='/assets/demo/accountant-login.jpg' alt='Accountant portal login screen'>"
      },
      {
        screen: mk("demoClientsScreen"),
        title: mk("demoClientsTitle"),
        text: mk("demoClientsText"),
        tone: "green",
        visual: "<img class='demo-shot' src='/assets/demo/accountant-client-list.jpg' alt='Connected clients list'>"
      },
      {
        screen: mk("demoRecordsScreen"),
        title: mk("demoRecordsTitle"),
        text: mk("demoRecordsText"),
        tone: "soft",
        visual: "<img class='demo-shot' src='/assets/demo/accountant-client-record.jpg' alt='Client records screen'>"
      }
    ],
    accountantHref,
    mk("accountantTitle"),
    "web"
  );
}

function adminMetric(label, value) {
  return `
    <div class="admin-metric">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function adminUserId(user) {
  return String(user.id || user.user_id || user._id || "");
}

function adminDisplayEmail(user) {
  return user.email_masked || user.email || user.recovery_email || "-";
}

function adminNumber(value) {
  const number = Number(value || 0);
  return Number.isFinite(number) ? number.toLocaleString("en-GB") : "0";
}

function adminUserCard(user) {
  const userId = adminUserId(user);
  const plan = user.account_plan || user.plan || "early_access";
  const status = user.account_status || user.subscription_status || "active";
  const freeUntil = user.free_until ? String(user.free_until).slice(0, 10) : "";
  const lifetime = Boolean(user.lifetime_free);
  return `
    <form class="admin-user-card" data-admin-user-form="${escapeAttr(userId)}">
      <div class="admin-user-head">
        <div>
          <strong>${escapeHtml(user.customer_ref || userId || "User")}</strong>
          <span>${escapeHtml(adminDisplayEmail(user))}</span>
        </div>
        <small>${escapeHtml(user.last_active_at ? `Last active ${String(user.last_active_at).slice(0, 10)}` : "No recent activity")}</small>
      </div>
      <div class="admin-user-stats">
        ${adminMetric("Receipts", adminNumber(user.receipts_count || user.usage_receipts_total))}
        ${adminMetric("Income", adminNumber(user.income_count || user.usage_income_total))}
        ${adminMetric("WhatsApp", adminNumber(user.whatsapp_records_count || user.usage_whatsapp_total))}
        ${adminMetric("Storage", `${adminNumber(user.storage_mb || user.usage_storage_mb)} MB`)}
      </div>
      <div class="admin-controls">
        <label class="field"><span>Plan</span>
          <select class="input" name="account_plan">
            ${["early_access", "free_trial", "paid", "lifetime_free", "blocked"].map((item) => `<option value="${item}" ${plan === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <label class="field"><span>Status</span>
          <select class="input" name="account_status">
            ${["active", "payment_required", "tester", "suspicious", "blocked"].map((item) => `<option value="${item}" ${status === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <label class="field"><span>Free until</span><input class="input" name="free_until" type="date" value="${escapeAttr(freeUntil)}"></label>
        <label class="checkbox-row admin-checkbox"><input type="checkbox" name="lifetime_free" ${lifetime ? "checked" : ""}> <span>Lifetime free</span></label>
      </div>
      <label class="field"><span>Admin notes</span><textarea class="input" name="admin_notes" rows="2" placeholder="Tester notes, support notes, why this user is free...">${escapeHtml(user.admin_notes || "")}</textarea></label>
      <div class="admin-actions">
        <button class="primary" type="submit">Save user</button>
        <span class="hint">${escapeHtml(user.accountant_connected ? "Accountant connected" : "No accountant connected")}</span>
      </div>
    </form>
  `;
}

function adminLanding() {
  const users = state.adminUsers || [];
  const search = (state.adminSearch || "").trim().toLowerCase();
  const filtered = users.filter((user) => {
    if (!search) return true;
    return [adminUserId(user), user.customer_ref, user.email, user.email_masked, user.first_name, user.trade, user.account_plan, user.account_status]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(search);
  });
  shell(`
    <section class="screen admin-screen">
      <div class="admin-hero">
        <span class="eyebrow">TidGo Admin</span>
        <h1>Control Room</h1>
      </div>
      <form class="card stack admin-login-card" id="adminLoginForm">
        <h2>${state.adminEmail && state.adminToken ? "Admin Access" : "Sign in"}</h2>
        ${state.adminEmail && state.adminToken ? `<span class="hint">Signed in as ${escapeHtml(state.adminEmail)}</span>` : ""}
        ${state.adminEmail && state.adminToken ? `
          <div class="total-row"><span>Admin email</span><strong>${escapeHtml(state.adminEmail)}</strong></div>
          <div class="button-row">
            <button class="primary" type="submit" name="step" value="load">Load users</button>
            <button class="secondary" type="button" data-action="signOutAdmin">Sign out</button>
          </div>
        ` : `
          <label class="field"><span>Admin email</span><input class="input" name="admin_email" type="email" value="${escapeAttr(state.adminPendingEmail || state.adminEmail || "")}" required></label>
          ${state.adminCodeSent || state.adminPendingEmail ? `<label class="field"><span>Login code</span><input class="input" name="code" inputmode="numeric" autocomplete="one-time-code" placeholder="123456"></label>` : ""}
          <div class="button-row">
            <button class="primary" type="submit" name="step" value="${state.adminCodeSent || state.adminPendingEmail ? "verify" : "request"}">${state.adminCodeSent || state.adminPendingEmail ? "Verify code" : "Send login code"}</button>
            ${state.adminCodeSent || state.adminPendingEmail ? `<button class="secondary" type="submit" name="step" value="request">Send again</button>` : ""}
          </div>
        `}
        ${state.adminError ? `<div class="empty">${escapeHtml(state.adminError)}</div>` : ""}
      </form>
      ${state.adminEmail && state.adminToken ? `
        <section class="admin-summary">
          ${adminMetric("Users", adminNumber(users.length))}
          ${adminMetric("Receipts", adminNumber(users.reduce((sum, user) => sum + Number(user.receipts_count || user.usage_receipts_total || 0), 0)))}
          ${adminMetric("WhatsApp records", adminNumber(users.reduce((sum, user) => sum + Number(user.whatsapp_records_count || user.usage_whatsapp_total || 0), 0)))}
          ${adminMetric("Lifetime free", adminNumber(users.filter((user) => user.lifetime_free || user.account_plan === "lifetime_free").length))}
        </section>
        <section class="card stack">
          <div class="admin-list-head">
            <div>
              <h2>Users</h2>
              <span class="hint">Search by email, customer ref, plan, trade or user id.</span>
            </div>
            <button class="secondary" type="button" data-action="loadAdminUsers">Refresh</button>
          </div>
          <form class="admin-search-row" id="adminSearchForm">
            <label class="field"><span>Search users</span><input class="input" name="admin_search" data-admin-search value="${escapeAttr(state.adminSearchDraft || state.adminSearch)}" placeholder="Search by name, email or customer ref"></label>
            <button class="primary" type="submit">Find</button>
            <button class="secondary" type="button" data-action="clearAdminSearch">Clear</button>
          </form>
          <div class="admin-user-list">
            ${filtered.length ? filtered.map(adminUserCard).join("") : `<div class="empty">${users.length ? "No users match this search." : "No users loaded yet."}</div>`}
          </div>
        </section>
      ` : ""}
    </section>
  `);
}

function onboarding() {
  shell(`
    <section class="screen">
      ${topbar("")}
      <div class="onboarding-hero-card">
        <span class="eyebrow">TidGo</span>
        <h1 class="title">${t("intro")}</h1>
      </div>
      <form class="stack onboarding-form" id="onboardingForm">
        <div class="field language-field">
          <span>${t("chooseLanguage")}</span>
          ${languageFlagPicker("onboarding-language-picker")}
        </div>
        <label class="field"><span>${t("firstName")}</span><input class="input" name="first_name" autocomplete="given-name" required></label>
        <label class="field"><span>${t("trade")}</span><input class="input" name="trade" autocomplete="organization-title"></label>
        <div class="field">
          <span>${t("incomeSources")}</span>
          ${incomeSourceChoices(state.pendingSignupIncomeSources)}
          <p class="hint">${t("incomeSourcesHint")}</p>
        </div>
        <label class="field"><span>${t("email")}</span><input class="input" name="email" type="email" autocomplete="email" required></label>
        <p class="hint">${t("emailHint")}</p>
        <div class="intake-card onboarding-whatsapp-note">
          <strong>${t("whatsappOnboardingTitle")}</strong>
          <span>${t("whatsappOnboardingText")}</span>
        </div>
        ${shortPrivacyNoticeBlock(true)}
        <label class="check-row">
          <input type="checkbox" name="legal_agree" required>
          <span>${t("agreeLegal")} <a href="/privacy/" target="_blank" rel="noopener">${t("privacyTitle")}</a> / <a href="/terms/" target="_blank" rel="noopener">${t("termsTitle")}</a></span>
        </label>
        <button class="primary" type="submit">${t("start")}</button>
      </form>
      <button class="link-btn" data-action="recover">${t("haveAccount")}</button>
      <p class="hint">${t("installHint")}</p>
    </section>
  `);
}

function legalConsent() {
  shell(`
    <section class="screen">
      ${topbar("")}
      <h1 class="title">${t("legalConsentTitle")}</h1>
      <p class="subtitle">${t("legalConsentText")}</p>
      <form class="stack" id="legalConsentForm">
        ${shortPrivacyNoticeBlock(true)}
        <label class="check-row legal-agree-row">
          <input type="checkbox" name="legal_agree" required>
          <span>${t("legalSettingsAgree")}</span>
        </label>
        <button class="primary" type="submit">${t("continueToApp")}</button>
      </form>
      <div class="grid-2" style="margin-top:12px">
        <button class="secondary" type="button" data-action="privacy">${t("privacyTitle")}</button>
        <button class="secondary" type="button" data-action="terms">${t("termsTitle")}</button>
      </div>
    </section>
  `);
}

function verifySignup() {
  shell(`
    <section class="screen">
      ${topbar(t("verifyEmail"), true)}
      <p class="subtitle">${t("verifyEmailHint")}</p>
      <form class="stack" id="signupVerifyForm">
        <label class="field"><span>${t("email")}</span><input class="input" name="email" type="email" required autocomplete="email" value="${escapeAttr(state.pendingSignupEmail)}"></label>
        <label class="field"><span>${t("code")}</span><input class="input" name="code" inputmode="numeric" maxlength="6" autocomplete="one-time-code"></label>
        <button class="primary" name="step" value="verify">${t("verifyAndStart")}</button>
        <button class="secondary" name="step" value="request">${t("sendCodeAgain")}</button>
      </form>
    </section>
  `);
}

function recover() {
  shell(`
    <section class="screen">
      ${topbar(t("recover"), true)}
      <form class="stack" id="recoveryForm">
        <div class="card stack recovery-block recovery-panel">
          <strong>${t("recoveryEmail")}</strong>
          <label class="field recovery-field"><span>${t("email")}</span><input class="input recovery-input" name="email" type="email" autocomplete="email" placeholder="you@example.com"></label>
          <button class="secondary recovery-send" name="step" value="request">${t("sendCode")}</button>
          <div class="recovery-code-box">
            <label class="field recovery-field"><span>${t("code")}</span><input class="input recovery-input recovery-code-input" name="code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="123456"></label>
            <button class="primary recovery-login" name="step" value="verify">${t("login")}</button>
          </div>
        </div>
        <div class="card stack recovery-block recovery-panel">
          <strong>${t("recoveryWhatsApp")}</strong>
          <p class="hint">${t("recoveryWhatsAppIntro")}</p>
          <button class="secondary whatsapp-connect-btn" type="button" data-action="openWhatsAppRecovery"><span class="wa-icon" aria-hidden="true">WA</span>${t("openWhatsAppRecovery")}</button>
          <label class="field recovery-field"><span>${t("whatsappRecoveryNumber")}</span><input class="input recovery-input" name="whatsapp_phone" inputmode="tel" autocomplete="tel" placeholder="+44..."></label>
          <div class="recovery-code-box">
            <label class="field recovery-field"><span>${t("whatsappCode")}</span><input class="input recovery-input recovery-code-input" name="whatsapp_code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="123456"></label>
            <button class="primary recovery-login" name="step" value="verify_whatsapp">${t("verifyWhatsAppCode")}</button>
          </div>
        </div>
      </form>
    </section>
  `);
}

function home() {
  const items = transactions();
  const transactionLimit = Math.max(4, state.transactionLimit || 4);
  const visibleItems = items.slice(0, transactionLimit);
  shell(`
    <section class="screen">
      ${topbar("")}
      <h1 class="title">${t("hello")}, ${escapeHtml(state.user.first_name)}.</h1>
      ${serverUnavailableCard()}
      <button class="nav-row" data-action="summary">
        <span><span class="summary-icon" aria-hidden="true"></span> ${t("summary")}</span><strong>â€º</strong>
      </button>
      <div class="grid-2" style="margin-top:14px">
        <button class="action blue" data-action="startExpense"><span>${t("addExpense")}</span><small>${t("photoDone")}</small></button>
        <button class="action green" data-action="startIncome"><span>${t("addIncome")}</span><small>${t("amountNote")}</small></button>
      </div>
      <button class="secondary share-inline app-share-button" type="button" data-action="shareTidGo">${t("shareTidGo")}</button>
      <div class="list">
        ${state.recordsLoading && !items.length ? recordSkeletonRows() : items.length ? visibleItems.map(itemRow).join("") : `<div class="empty">${t("empty")}</div>`}
        ${items.length > transactionLimit ? `<button class="link-btn see-all-btn" data-action="showMoreTransactions">${t("seeMore")}</button>` : ""}
        ${transactionLimit > 4 ? `<button class="link-btn see-all-btn" data-action="showLessTransactions">${t("showLess")}</button>` : ""}
      </div>
    </section>
  `);
}

function businessTypeChoice() {
  const nextLabel = state.pendingRecordKind === "income" ? t("addIncome") : t("addExpense");
  const slots = readBusinessSlots();
  shell(`
    <section class="screen">
      ${topbar(nextLabel, true)}
      <div class="card stack">
        <strong>${t("businessTypeTitle")}</strong>
        ${slots.map((slot) => `<button class="secondary" type="button" data-action="chooseBusinessType" data-business-type="${escapeAttr(slot.type)}" data-business-slot-id="${escapeAttr(slot.id)}">${escapeHtml(slot.label)}</button>`).join("")}
      </div>
    </section>
  `);
}

function expenseChoice() {
  shell(`
    <section class="screen">
      ${topbar(t("addExpense"), true)}
      <div class="card stack">
        <strong>${t("addExpense")}</strong>
        ${shouldAskBusinessType() ? `<span class="hint">${escapeHtml(selectedBusinessTypeLabel())}</span>` : ""}
        <span class="hint">${t("expenseHint")}</span>
        <div class="drop-zone" data-drop-upload="expense">
          <strong>${t("dragDropTitle")}</strong>
          <span>${t("dragDropHint")}</span>
        </div>
        <label class="primary file-label">
          ${t("takePhoto")}
          <input class="hidden" type="file" name="expense_photo" accept="image/*" capture="environment">
        </label>
        <label class="secondary file-label">
          ${t("uploadFile")}
          <input class="hidden" type="file" name="expense_file" accept="image/*,.pdf">
        </label>
      </div>
    </section>
  `);
}

function receipt() {
  const receipt = state.receipts.find((item) => item.id === state.selected);
  if (!receipt) return go("home");
  const receiptMeta = recordBusinessMeta(receipt.id);
  const showBusinessMove = shouldAskBusinessType() || Boolean(receipt.business_slot_id || receiptMeta.business_slot_id);
  shell(`
    <section class="screen">
      ${topbar(t("expenses"), true)}
      ${imagePreviewButton(receipt.image_base64, "Receipt photo")}
      ${recordPossibleDuplicate(receipt) ? duplicateReviewCard() : ""}
      ${recordDateNeedsReview(receipt) ? dateReviewCard() : ""}
      <form class="stack" id="receiptForm" style="margin-top:14px">
        ${receiptReplaceField()}
        ${businessTypeField(receiptMeta.business_type || receipt.business_type || defaultBusinessType(), receiptMeta.business_slot_id || receipt.business_slot_id || "", showBusinessMove)}
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" value="${receipt.amount || 0}"></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency" disabled>${currencyOptions(receipt.currency || "GBP")}</select></label>
        <label class="field"><span>${t("merchant")}</span><input class="input" name="merchant" value="${escapeAttr(receipt.merchant || "")}"></label>
        <label class="field"><span>${t("date")}</span><input class="input" type="date" name="date" value="${dateInputValue(receipt.timestamp || receipt.created_at)}"></label>
        <label class="field"><span>${t("category")}</span><div class="chip-row">${categoryChips(receipt.category)}</div></label>
        ${receipt.ai_comment ? `<div class="card muted">${escapeHtml(receipt.ai_comment)}</div>` : ""}
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
        ${shouldAskBusinessType() ? `<p class="hint">${escapeHtml(selectedBusinessTypeLabel())}</p>` : ""}
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" required></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency">${currencyOptions("GBP")}</select></label>
        <label class="field"><span>${t("description")}</span><textarea class="textarea" name="description"></textarea></label>
        <label class="field"><span>${t("date")}</span><input class="input" type="date" name="date" value="${dateInputValue()}"></label>
        ${normalizeBusinessType(state.pendingBusinessType || defaultBusinessType()) === "uk-property" ? `<p class="hint income-manual-check">${t("propertyIncomeHint")}</p>` : ""}
        ${incomeProofPickerField()}
        <button class="primary" type="submit">${t("save")}</button>
        <p class="hint income-manual-check">${t("incomeManualCheck")}</p>
      </form>
    </section>
  `);
}

function incomeDetail() {
  const entry = state.income.find((item) => item.id === state.selected);
  if (!entry) return go("home");
  const entryMeta = recordBusinessMeta(entry.id);
  const showBusinessMove = shouldAskBusinessType() || Boolean(entry.business_slot_id || entryMeta.business_slot_id);
  const proof = proofForIncome(entry.id);
  const proofUrl = incomeProofFileUrl(entry, proof);
  const proofIsPdf = incomeProofIsPdf(entry, proofUrl, proof);
  const proofImage = proofIsPdf ? "" : incomeProofImage(entry, proof);
  const proofName = incomeProofName(entry, proof) || (proofIsPdf ? "PDF proof" : "");
  shell(`
    <section class="screen">
      ${topbar(t("income"), true)}
      <form class="stack" id="incomeEditForm">
        ${businessTypeField(entryMeta.business_type || entry.business_type || defaultBusinessType(), entryMeta.business_slot_id || entry.business_slot_id || "", showBusinessMove)}
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" value="${entry.amount || 0}"></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency">${currencyOptions(entry.currency || "GBP")}</select></label>
        <label class="field"><span>${t("description")}</span><textarea class="textarea" name="description">${escapeHtml(entry.description || "")}</textarea></label>
        ${recordDateNeedsReview(entry) ? dateReviewCard() : ""}
        <label class="field"><span>${t("date")}</span><input class="input" type="date" name="date" value="${dateInputValue(entry.timestamp || entry.created_at)}"></label>
        ${proofName ? `<div class="card muted">${t("proofAttached")}: ${escapeHtml(proofName)}</div>` : ""}
        ${proofIsPdf && proofUrl ? `<a class="secondary proof-link" href="${escapeAttr(proofUrl)}" target="_blank" rel="noopener">${t("proofAttached")} - ${t("openPdf")}</a>` : ""}
        ${proofImage ? imagePreviewButton(proofImage, t("proofAttached")) : ""}
        ${incomeProofPickerField(proofImage || proofName || proofUrl ? t("replaceProof") : t("attachProof"))}
      </form>
      <button class="danger" style="width:100%;margin-top:12px" data-action="deleteIncome">${t("delete")}</button>
    </section>
  `);
}

function summary() {
  const { receipts, income } = monthEntries();
  const subtitle = state.summaryPeriod === "quarter" && state.quarterMode === "mtd_running"
    ? t("mtdRunningReady")
    : state.summaryPeriod === "quarter"
      ? t("quarterReady")
      : t("note");
  shell(`
    <section class="screen">
      ${topbar(t("summary"), true)}
      ${summaryPeriodControls()}
      ${summaryBusinessScopeControls()}
      <div class="month-switcher">
        <button class="icon-btn" data-action="prevMonth">â€¹</button>
        ${periodSwitcherLabel()}
        <button class="icon-btn" data-action="nextMonth">â€º</button>
      </div>
      <div class="total-box">
        <div class="total-row"><span>${t("income")}</span><strong>${formatTotals(income)}</strong></div>
        <div class="total-row"><span>${t("expenses")}</span><strong>${formatTotals(receipts)}</strong></div>
      </div>
      <p class="subtitle">${subtitle}</p>
      <button class="primary" data-action="sharePdf">${t("emailPdf")}</button>
      <button class="secondary" style="width:100%;margin-top:10px" data-action="downloadUserCsv">${t("downloadCsv")}</button>
      <button class="secondary" style="width:100%;margin-top:10px" data-action="printPdf">${t("printPdf")}</button>
      <div class="list">${[...income.map(incomeSummaryRow), ...receipts.map(receiptSummaryRow)].join("") || `<div class="empty">${t("noEntries")}</div>`}</div>
    </section>
  `);
}

function clientConnectionCard() {
  const consents = state.accountantConsents || [];
  if (consents.length) {
    return `
      <div class="card stack" style="margin-top:18px">
        <strong>${t("connectAccountant")}</strong>
        ${consents.map((consent) => `
          <div class="connection-row">
            <span>
              <small>${t("activeConnection")}</small>
              <strong>${escapeHtml(consent.accountant_name || consent.accountant_email || "-")}</strong>
              <small>${escapeHtml(consent.accountant_email || "")}</small>
            </span>
            <button class="danger mini-btn" type="button" data-revoke-consent="${escapeAttr(consent.id)}">${t("revokeOrChangeAccountant")}</button>
          </div>
        `).join("")}
      </div>
    `;
  }
  return `
    <form class="card stack" id="clientConnectionForm" style="margin-top:18px">
      <strong>${t("connectAccountant")}</strong>
      <span class="hint">${t("connectAccountantHint")}</span>
      <span class="hint">${t("noConnection")}</span>
      <label class="field"><span>${t("accountantEmail")}</span><input class="input" name="accountant_email" type="email"></label>
      <button class="secondary" type="submit">${t("createInvite")}</button>
    </form>
  `;
}

function settingsWhatsAppSection(existingWhatsApp = "") {
  const whatsappConnectedText = t("whatsappConnectedText").replace("{last3}", lastPhoneDigits(existingWhatsApp));
  const email = recoveryEmailForUser();
  const changeEmail = state.whatsappChangeEmail || email;
  if (!existingWhatsApp) {
    return `
      <div class="whatsapp-connect-box">
        <p>${t("whatsappAddOnceHint")}</p>
        <button class="secondary whatsapp-connect-btn" type="button" data-action="connectWhatsApp"><span class="wa-icon" aria-hidden="true">WA</span>${t("connectWhatsApp")}</button>
      </div>
    `;
  }
  return `
    <div class="whatsapp-connect-box whatsapp-connected-box">
      <strong>${t("whatsappConnectedTitle")}</strong>
      <p>${escapeHtml(whatsappConnectedText)}</p>
      ${!state.whatsappChangeOpen ? `<button class="secondary" type="button" data-action="startWhatsAppChange">${t("changeWhatsAppNumber")}</button>` : `
        <div class="stack whatsapp-change-box">
          <p class="hint">${t("changeWhatsAppIntro")}</p>
          <label class="field"><span>${t("email")}</span><input class="input" name="whatsapp_change_email" type="email" value="${escapeAttr(changeEmail)}" placeholder="you@email.com"></label>
          ${!state.whatsappChangeUnlocked ? `
            <p class="hint">${state.whatsappChangeCodeSent ? t("whatsappChangeCodeHint") : t("changeWhatsAppEmailHint")}</p>
            ${state.whatsappChangeCodeSent ? `<label class="field"><span>${t("code")}</span><input class="input" name="whatsapp_change_code" inputmode="numeric" autocomplete="one-time-code" placeholder="123456"></label>` : ""}
            <div class="button-row">
              <button class="secondary" type="button" data-action="requestWhatsAppChangeCode">${state.whatsappChangeCodeSent ? t("sendCodeAgain") : t("sendCode")}</button>
              ${state.whatsappChangeCodeSent ? `<button class="primary" type="button" data-action="verifyWhatsAppChangeCode">${t("unlockWhatsAppChange")}</button>` : ""}
              <button class="secondary" type="button" data-action="cancelWhatsAppChange">${t("cancel")}</button>
            </div>
          ` : `
            <p class="hint">${t("whatsappChangeUnlocked")}</p>
            <button class="secondary whatsapp-connect-btn" type="button" data-action="connectWhatsApp"><span class="wa-icon" aria-hidden="true">WA</span>${t("connectWhatsApp")}</button>
            <button class="secondary" type="button" data-action="cancelWhatsAppChange">${t("cancel")}</button>
          `}
        </div>
      `}
    </div>
  `;
}

function settingsEmailChangeSection() {
  const newEmail = state.emailChangeNewEmail || "";
  if (!state.emailChangeOpen) {
    return `<button class="secondary" type="button" data-action="startEmailChange">${t("changeEmailTitle")}</button>`;
  }
  return `
    <div class="stack email-change-box">
      <p class="hint">${t("changeEmailHint")}</p>
      <label class="field"><span>${t("newEmail")}</span><input class="input" name="new_email" type="email" value="${escapeAttr(newEmail)}" placeholder="new@email.com"></label>
      <p class="hint">${state.emailChangeCodeSent ? t("emailChangeCodeHint") : t("emailChangeCodeHint")}</p>
      ${state.emailChangeCodeSent ? `<label class="field"><span>${t("code")}</span><input class="input" name="email_change_code" inputmode="numeric" autocomplete="one-time-code" placeholder="123456"></label>` : ""}
      <div class="button-row">
        <button class="secondary" type="button" data-action="requestEmailChangeCode">${state.emailChangeCodeSent ? t("sendCodeAgain") : t("requestEmailChange")}</button>
        ${state.emailChangeCodeSent ? `<button class="primary" type="button" data-action="verifyEmailChangeCode">${t("verifyEmailChange")}</button>` : ""}
        <button class="secondary" type="button" data-action="cancelEmailChange">${t("cancel")}</button>
      </div>
    </div>
  `;
}

function settingsBusinessRecordsSection() {
  const slots = readBusinessSlots();
  const byId = Object.fromEntries(slots.map((slot) => [slot.id, slot]));
  const hasSelfEmployment = readIncomeSources().some((source) => source !== "landlord");
  const selfEmploymentFields = ["se-1", "se-2", "se-3"].map((id, index) => {
    const slot = byId[id];
    const isFirst = id === "se-1";
    const isVisible = isFirst || Boolean(slot?.label);
    const label = t(`selfEmploymentBusiness${index + 1}`);
    const value = slot?.label || (isFirst ? state.user.trade || "" : "");
    return `
      <div class="business-slot-row ${isVisible ? "" : "business-slot-collapsed"}" data-business-slot-row="${id}">
        <label class="field">
          <span>${label}</span>
          <input class="input" name="business_slot_${id}" value="${escapeAttr(value)}" placeholder="${escapeAttr(t("businessNamePlaceholder"))}"${isVisible ? "" : " disabled"}>
        </label>
        ${isVisible && !isFirst ? `<button class="secondary mini-btn remove-business-btn" type="button" data-action="removeBusinessSlot" data-business-slot-id="${id}">${t("removeBusiness")}</button>` : ""}
        ${!isVisible ? `<button class="secondary mini-btn add-business-btn" type="button" data-action="addBusinessSlot" data-business-slot-id="${id}">${t("addBusiness")}</button>` : ""}
      </div>
    `;
  }).join("");
  if (!hasSelfEmployment && !readIncomeSources().includes("landlord")) return "";
  return `
    <div class="card stack">
      <strong>${t("businessRecordsTitle")}</strong>
      <p class="hint">${t("businessRecordsHint")}</p>
      ${hasSelfEmployment ? selfEmploymentFields : ""}
      ${readIncomeSources().includes("landlord") ? `<div class="intake-card"><strong>${t("businessProperty")}</strong><span>${t("propertyIncomeHint")}</span></div>` : ""}
    </div>
  `;
}

function settings() {
  const existingWhatsApp = state.user.whatsapp_phone_normalized || state.user.whatsapp_phone || "";
  const notificationPreference = state.user.notification_preference || "none";
  const legalAgreed = read("rb_legal_agreed", "") === "true";
  shell(`
    <section class="screen">
      ${topbar(t("settings"), true)}
      <form class="stack" id="settingsForm">
        <label class="field"><span>${t("chooseLanguage")}</span>${languageSelect()}</label>
        <label class="field"><span>${t("firstName")}</span><input class="input" name="first_name" value="${escapeAttr(state.user.first_name)}" required></label>
        <label class="field"><span>${t("trade")}</span><input class="input" name="trade" value="${escapeAttr(state.user.trade || "")}"></label>
        <div class="field">
          <span>${t("incomeSources")}</span>
          ${incomeSourceChoices(readIncomeSources())}
          <p class="hint">${t("incomeSourcesHint")}</p>
        </div>
        ${settingsBusinessRecordsSection()}
        <button class="primary settings-save-button" type="submit">${t("save")}</button>
        <label class="field"><span>${t("email")}</span><input class="input" name="email" type="email" value="${escapeAttr(state.user.email || "")}" readonly></label>
        ${settingsEmailChangeSection()}
        ${settingsWhatsAppSection(existingWhatsApp)}
        <div class="field">
          <span>${t("notificationsTitle")}</span>
          <p class="hint">${t("notificationsHint")}</p>
          ${notificationPreferenceChoices(notificationPreference)}
        </div>
        <div class="intake-card">
          <strong>${t("intakeTitle")}</strong>
          <span><strong>${t("emailIntakeLabel")}</strong> ${t("emailIntakeText")}</span>
          <span class="intake-address">intake@tidgo.co.uk</span>
        </div>
        <label class="field"><span>${t("humour")}</span><select class="select" name="humour">
          <option value="funny"${state.humour === "funny" ? " selected" : ""}>${t("subtle")}</option>
          <option value="sarcastic"${state.humour === "sarcastic" ? " selected" : ""}>${t("dry")}</option>
          <option value="serious"${state.humour === "serious" ? " selected" : ""}>${t("serious")}</option>
        </select></label>
      </form>
      ${clientConnectionCard()}
      <button class="primary settings-save-button" type="submit" form="settingsForm">${t("save")}</button>
      <div class="card stack" style="margin-top:18px">
        <strong>${t("feedbackTitle")}</strong>
        <span class="hint">${t("feedbackHint")}</span>
        <form class="stack" id="settingsFeedbackForm">
          <textarea class="textarea" name="message" rows="3" placeholder="${escapeAttr(t("feedbackPlaceholder"))}" required></textarea>
          <button class="secondary" type="submit">${t("sendMessage")}</button>
        </form>
      </div>
      <div class="card stack" style="margin-top:18px">
        <strong>${t("legalSettingsTitle")}</strong>
        <span class="hint">${t("legalSettingsText")}</span>
        <div class="intake-card">
          <strong>${t("importantNotesTitle")}</strong>
          <span>${t("importantNotesText")}</span>
        </div>
        ${shortPrivacyNoticeBlock(false)}
        <label class="check-row legal-agree-row">
          <input type="checkbox" name="legal_agree_settings"${legalAgreed ? " checked" : ""}>
          <span>${t("legalSettingsAgree")}</span>
        </label>
        <a class="secondary legal-link-button" href="/privacy/" target="_blank" rel="noopener">${t("privacyTitle")}</a>
        <a class="secondary legal-link-button" href="/terms/" target="_blank" rel="noopener">${t("termsTitle")}</a>
        <a class="secondary legal-link-button" href="/delete-account/" target="_blank" rel="noopener">${t("deleteAccountInfoTitle")}</a>
      </div>
      <div class="card stack" style="margin-top:18px">
        <strong>${t("signOutDevice")}</strong>
        <span class="hint">${t("signOutHint")}</span>
        <button class="secondary" type="button" data-action="signOutDevice">${t("signOutDevice")}</button>
      </div>
      <div class="card stack" style="margin-top:18px">
        <strong>${t("deleteAccount")}</strong>
        <span class="hint">${t("deleteWarning")}</span>
        <label class="check-row delete-confirm-row">
          <input type="checkbox" name="delete_confirm">
          <span>${t("deleteConfirmText")}</span>
        </label>
        <button class="danger" data-action="deleteAccount" data-delete-account-button disabled>${t("deleteAccount")}</button>
      </div>
    </section>
  `);
}

function accountantLanding() {
  const clients = state.accountantClients || [];
  shell(`
    <section class="screen accountant-screen">
      ${topbar("")}
      <div class="accountant-hero">
        <span class="eyebrow">${at("forAccountants")}</span>
        <h1 class="title">${at("heroTitle")}</h1>
        <p class="subtitle">${at("heroSubtitle")}</p>
      </div>
      <form class="card stack" id="accountantLoginForm">
        <strong>${at("accessTitle")}</strong>
        <label class="field"><span>${t("chooseLanguage")}</span>${languageSelect()}</label>
        <span class="hint">${state.accountantPortalEmail ? at("signedInHint") : at("signedOutHint")}</span>
        ${state.accountantPortalEmail ? `
          <div class="total-row"><span>${at("connectedAccount")}</span><strong>${escapeHtml(state.accountantDisplayName || "Accountant")}</strong></div>
          <div class="total-row"><span>${at("email")}</span><strong>${escapeHtml(state.accountantPortalEmail)}</strong></div>
        ` : `
          <label class="field"><span>${at("nameOrPractice")}</span><input class="input" name="display_name" value="${escapeAttr(state.accountantDisplayName || "")}" placeholder="ABC Accounting"></label>
          <label class="field"><span>${at("accountantEmail")} ${infoTip(at("accountantEmailInfo"))}</span><input class="input" name="accountant_email" type="email" value="${escapeAttr(state.accountantPendingEmail || "")}" required></label>
        `}
        ${state.accountantPortalEmail ? `
          <div class="grid-2">
            <button class="primary" type="button" data-action="openAccountantClientList">${at("openClientList")}</button>
            <button class="secondary accountant-signout-button" type="button" data-action="signOutAccountant">${at("signOut")}</button>
          </div>
        ` : `
          <button class="primary" type="submit" name="step" value="request">${at("sendLoginCode")}</button>
          ${state.accountantCodeSent || state.accountantPendingEmail ? `
            <label class="field"><span>${at("loginCode")}</span><input class="input" name="code" inputmode="numeric" maxlength="6" autocomplete="one-time-code"></label>
            <button class="secondary" type="submit" name="step" value="verify">${at("verifyCode")}</button>
          ` : ""}
        `}
      </form>
      <button class="secondary share-inline accountant-share-button" type="button" data-action="shareTidGo">${t("shareTidGo")}</button>
      <div class="card stack">
        <strong>${at("handoffTitle")}</strong>
        <span class="hint">${at("handoffText")}</span>
        <div class="total-row"><span>${at("clientAccess")}</span><strong>${at("readOnly")}</strong></div>
        <div class="total-row"><span>${at("clientPermission")}</span><strong>${at("required")}</strong></div>
      </div>
      <div class="card stack">
        <div class="total-row"><span>${at("connectedClients")} ${infoTip(at("connectedClientsInfo"))}</span><strong>${clients.length}</strong></div>
      </div>
      ${state.accountantClientListOpen ? `
        <div class="card stack">
          <strong>${at("clientList")}</strong>
          <label class="field"><span>${at("searchClients")}</span><input class="input" name="accountant_client_search" data-accountant-client-search value="${escapeAttr(state.accountantClientSearch)}" placeholder="Dan, builder, email"></label>
          ${clients.length ? clients.map((client, index) => {
            const searchText = [client.first_name, client.trade, client.email].map((value) => String(value || "")).join(" ").toLowerCase();
            const visible = !state.accountantClientSearch || searchText.includes(state.accountantClientSearch.trim().toLowerCase());
            return `
            <button class="list-item ${visible ? "" : "hidden"}" type="button" data-open-accountant-client="${escapeAttr(client.user_id)}" data-accountant-client-row data-search-text="${escapeAttr(searchText)}">
              <span class="list-main">
                <span class="list-title">${index + 1}. ${escapeHtml(client.first_name || "Client")}</span>
                <span class="list-meta">${escapeHtml(client.trade || at("noTrade"))} | ${escapeHtml(client.email || at("noEmail"))}</span>
              </span>
              <span class="pill">${Number(client.receipt_count || 0) + Number(client.income_count || 0)} ${at("records")}</span>
            </button>
          `}).join("") : ""}
          <div class="empty ${clients.length ? "hidden" : ""}" data-accountant-client-empty>${state.accountantPortalEmail ? at("noClients") : at("signInFirst")}</div>
          <button class="secondary" type="button" data-action="closeAccountantClientList">${at("backToOverview")}</button>
        </div>
      ` : ""}
      <div class="card stack">
        <strong>${at("howAccessWorks")}</strong>
        <div class="total-row"><span>${at("clientAddsEmail")}</span><strong>${at("consentFirst")}</strong></div>
        <div class="total-row"><span>${at("youSeeRecords")}</span><strong>${at("readOnly")}</strong></div>
        <div class="total-row"><span>${at("youDownloadPack")}</span><strong>${at("csvPdf")}</strong></div>
      </div>
    </section>
  `);
}

function accountantDemoClient() {
  const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
  const records = state.accountantClientRecords || { receipts: [], income: [] };
  const receipts = (records.receipts || []).filter((item) => !item.is_client_expense).filter(recordInCurrentPeriod);
  const income = attachIncomeProofs(records.income || []).filter(recordInCurrentPeriod);
  const rows = [
    ...income.map((item) => ({ ...item, type: "income", timestamp: item.timestamp || item.created_at })),
    ...receipts.map((item) => ({ ...item, type: "expense", timestamp: item.timestamp || item.created_at }))
  ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  if (!client) {
    return shell(`
      <section class="screen accountant-screen">
        ${topbar(at("clientRecords"), true)}
        <div class="empty">${at("showClientsFirst")}</div>
      </section>
    `);
  }
  shell(`
    <section class="screen accountant-screen">
      ${topbar(at("clientRecords"), true)}
      <div class="card stack">
        <div class="portal-head">
          <span>
            <strong>${escapeHtml(client.first_name || "Client")}</strong>
            <small>${escapeHtml(client.email)}</small>
          </span>
          <span class="pill">${at("readOnly")}</span>
        </div>
        <div class="total-row"><span>${at("trade")}</span><strong>${escapeHtml(client.trade || at("noTrade"))}</strong></div>
        <div class="total-row"><span>${at("connected")}</span><strong>${day(client.consented_at)}</strong></div>
      </div>
      ${summaryPeriodControls()}
      <div class="month-switcher">
        <button class="icon-btn" data-action="prevMonth">&#8249;</button>
        ${periodSwitcherLabel()}
        <button class="icon-btn" data-action="nextMonth">&#8250;</button>
      </div>
      <div class="insight-grid">
        <div class="insight-card"><span>${at("income")}</span><strong>${formatTotals(income)}</strong></div>
        <div class="insight-card"><span>${at("expenses")}</span><strong>${formatTotals(receipts)}</strong></div>
        <div class="insight-card"><span>${at("records")}</span><strong>${rows.length}</strong></div>
      </div>
      <div class="grid-2" style="margin:12px 0">
        <button class="secondary" type="button" data-action="downloadAccountantClientCsv">${at("downloadCsv")}</button>
        <button class="secondary" type="button" data-action="downloadAccountantClientPdf">${at("downloadPdf")}</button>
      </div>
      <div class="action-with-tip">
        <button class="secondary" type="button" data-action="requestDemoDocs">${at("requestDocs")}</button>
        ${infoTip(at("requestDocsInfo"))}
      </div>
      <button class="danger" style="width:100%;margin-bottom:12px" type="button" data-action="removeAccountantClient">${at("removeClient")}</button>
      <div class="total-box">
        <div class="total-row"><span>${at("income")}</span><strong>${formatTotals(income)}</strong></div>
        <div class="total-row"><span>${at("expenses")}</span><strong>${formatTotals(receipts)}</strong></div>
      </div>
      <div class="list">
        ${rows.length ? rows.map(accountantRecordRow).join("") : `<div class="empty">${at("noRecords")}</div>`}
      </div>
    </section>
  `);
}

function accountantPortal() {
  const { receipts, income } = monthEntries();
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
        ${flags.length ? `<div class="flag-list">${flags.slice(0, 6).map(reviewFlagNode).join("")}</div><span class="hint">${t("duplicateHint")}</span>` : `<span class="hint">${t("ok")}</span>`}
      </div>
      ${summaryPeriodControls()}
      <div class="month-switcher">
        <button class="icon-btn" data-action="prevMonth">&#8249;</button>
        ${periodSwitcherLabel()}
        <button class="icon-btn" data-action="nextMonth">&#8250;</button>
      </div>
      <div class="total-box">
        <div class="total-row"><span>${t("income")}</span><strong>${formatTotals(income)}</strong></div>
        <div class="total-row"><span>${t("expenses")}</span><strong>${formatTotals(receipts)}</strong></div>
      </div>
      <div class="list">${[...income.map(incomeSummaryRow), ...receipts.map(receiptSummaryRow)].join("") || `<div class="empty">${t("noEntries")}</div>`}</div>
    </section>
  `);
}

function legalCopy(kind) {
  return (LEGAL_TEXT[state.language] || LEGAL_TEXT.en)[kind] || LEGAL_TEXT.en[kind];
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function markdownTableToHtml(lines) {
  const rows = lines
    .filter((line) => !/^\|\s*-+/.test(line))
    .map((line) => line.split("|").slice(1, -1).map((cell) => inlineMarkdown(cell.trim())));
  if (!rows.length) return "";
  const [head, ...body] = rows;
  return `
    <div class="legal-table-wrap">
      <table class="legal-table">
        <thead><tr>${head.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
        <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td class="${cell.includes('&#10003;') ? 'yes-cell' : cell.includes('&#10005;') ? 'no-cell' : cell.includes('&#63;') ? 'maybe-cell' : ''}">${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function markdownToLegalHtml(markdown) {
  const lines = String(markdown || "").replace(/\r/g, "").split("\n");
  const html = [];
  let paragraph = [];
  let list = [];
  let quote = [];
  let table = [];
  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  };
  const flushQuote = () => {
    if (!quote.length) return;
    html.push(`<blockquote>${quote.map((item) => `<p>${inlineMarkdown(item)}</p>`).join("")}</blockquote>`);
    quote = [];
  };
  const flushTable = () => {
    if (!table.length) return;
    html.push(markdownTableToHtml(table));
    table = [];
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
    flushQuote();
    flushTable();
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || line === "---") {
      flushAll();
      return;
    }
    if (line.startsWith("|") && line.endsWith("|")) {
      flushParagraph();
      flushList();
      flushQuote();
      table.push(line);
      return;
    }
    flushTable();
    if (line.startsWith("# ")) {
      flushAll();
      return;
    }
    if (line.startsWith("## ")) {
      flushAll();
      html.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
      return;
    }
    if (line.startsWith("### ")) {
      flushAll();
      html.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
      return;
    }
    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      quote.push(line.slice(2));
      return;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      flushQuote();
      list.push(line.slice(2));
      return;
    }
    flushList();
    flushQuote();
    paragraph.push(line);
  });
  flushAll();
  return html.join("");
}

function legalPage(kind) {
  const title = kind === "privacy" ? t("privacyTitle") : t("termsTitle");
  const copy = legalCopy(kind);
  const fullPath = kind === "privacy" ? "/privacy/" : "/terms/";
  const fullUrl = `https://tidgo.co.uk${fullPath}`;
  shell(`
    <section class="screen">
      ${topbar(title, true)}
      <div class="card legal-card">
        <span class="eyebrow">${t("legalShort")}</span>
        <p>${escapeHtml(copy.short)}</p>
        <span class="eyebrow">${t("legalFull")}</span>
        <p>${escapeHtml(copy.details)}</p>
        <a class="secondary app-full-legal-link" href="${fullPath}" target="_blank" rel="noopener">${t("legalOpenFull")}: ${escapeHtml(fullUrl)}</a>
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

function languageFlagPicker(className = "") {
  return `
    <div class="app-language-picker ${className}">
      <input type="hidden" name="language" value="${escapeAttr(state.language)}">
      ${Object.entries(LANGUAGES).map(([code, name]) => `
        <button class="app-language-option ${state.language === code ? "active" : ""}" type="button" data-app-language="${code}">
          <span class="flag flag-${LANGUAGE_FLAGS[code] || "gb"}" aria-hidden="true"></span>
          <span>${escapeHtml(name)}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function infoTip(text) {
  return `<span class="info-tip" tabindex="0" role="note" aria-label="${escapeAttr(text)}" title="${escapeAttr(text)}">i<span>${escapeHtml(text)}</span></span>`;
}

function currencyOptions(active) {
  return CURRENCIES.map((currency) => `<option value="${currency}"${active === currency ? " selected" : ""}>${currency}</option>`).join("");
}

function categoryChips(active = "other") {
  return CATEGORIES.map((category) => `<button class="chip ${active === category ? "active" : ""}" type="button" data-category="${category}">${t(category)}</button>`).join("");
}

function normalizeBusinessType(value) {
  return value === "uk-property" ? "uk-property" : "self-employment";
}

function businessSlotOptions(activeId = "", activeType = "") {
  const slots = readBusinessSlots();
  const selected = activeId || businessSlotById("", normalizeBusinessType(activeType))?.id || slots[0]?.id || "se-1";
  const hasSelected = slots.some((slot) => slot.id === selected);
  const options = slots.map((slot) => `<option value="${escapeAttr(slot.id)}"${selected === slot.id ? " selected" : ""}>${escapeHtml(slot.label)}</option>`);
  if (selected && !hasSelected) {
    const label = recordBusinessMeta(state.selected)?.business_slot_label || t("archivedBusiness");
    options.unshift(`<option value="${escapeAttr(selected)}" selected>${escapeHtml(label)} (${escapeHtml(t("archivedBusiness"))})</option>`);
  }
  return options.join("");
}

function businessTypeField(active = "self-employment", activeSlotId = "", force = false) {
  if (!force && !shouldAskBusinessType()) return "";
  return `
    <label class="field">
      <span>${t("businessCategory")}</span>
      <select class="select" name="business_slot_id">${businessSlotOptions(activeSlotId || businessSlotById("", normalizeBusinessType(active))?.id, active)}</select>
      <small>${t("moveRecordHint")}</small>
    </label>
  `;
}

function currentSummaryBusinessSlotId() {
  const slots = readBusinessSlots();
  if (state.summaryBusinessSlotId === "all") return "all";
  return slots.some((slot) => slot.id === state.summaryBusinessSlotId) ? state.summaryBusinessSlotId : "all";
}

function summaryBusinessScopeLabel() {
  const id = currentSummaryBusinessSlotId();
  if (id === "all") return t("allBusinessRecords");
  return businessSlotById(id)?.label || t("allBusinessRecords");
}

function recordMatchesSummaryBusiness(item = {}) {
  const id = currentSummaryBusinessSlotId();
  if (id === "all") return true;
  const selected = businessSlotById(id);
  const meta = recordBusinessMeta(item.id);
  const explicitSlotId = meta.business_slot_id || item.business_slot_id || "";
  if (explicitSlotId) return explicitSlotId === id;
  const type = normalizeBusinessType(meta.business_type || item.business_type || selected?.type);
  if (selected?.type === "uk-property") return type === "uk-property";
  return selected?.type === type && id === defaultBusinessSlotId();
}

function summaryBusinessScopeControls() {
  const slots = readBusinessSlots();
  if (slots.length <= 1) return "";
  const active = currentSummaryBusinessSlotId();
  return `
    <div class="summary-business-filter">
      <strong>${t("summaryBusinessFilter")}</strong>
      <div class="segmented summary-business-segmented">
        <button class="${active === "all" ? "active" : ""}" type="button" data-action="setSummaryBusinessSlot" data-business-slot-id="all">${t("allBusinessRecords")}</button>
        ${slots.map((slot) => `<button class="${active === slot.id ? "active" : ""}" type="button" data-action="setSummaryBusinessSlot" data-business-slot-id="${escapeAttr(slot.id)}">${escapeHtml(slot.label)}</button>`).join("")}
      </div>
      <p class="hint">${t("summaryBusinessHint")}</p>
    </div>
  `;
}

function incomeSourceChoices(selected = []) {
  const active = new Set(cleanIncomeSources(selected));
  const labels = {
    self_employed: t("incomeSelfEmployed"),
    cis: t("incomeCis"),
    landlord: t("incomeLandlord"),
    paye_side: t("incomePayeSide"),
    other: t("incomeOther")
  };
  return `
    <div class="source-grid">
      ${INCOME_SOURCE_KEYS.map((key) => `
        <label class="source-pill">
          <input type="checkbox" name="income_source_${key}" value="1"${active.has(key) ? " checked" : ""}>
          <i aria-hidden="true"></i>
          <span>${escapeHtml(labels[key])}</span>
        </label>
      `).join("")}
    </div>
  `;
}

function notificationPreferenceChoices(active = "none") {
  const options = [
    ["email", t("notifyEmail")],
    ["push", t("notifyPush")],
    ["none", t("notifyNone")]
  ];
  const selected = ["email", "push", "none"].includes(active) ? active : "none";
  return `
    <div class="preference-toggle" role="radiogroup" aria-label="${escapeAttr(t("notificationsTitle"))}">
      ${options.map(([value, label]) => `
        <label class="preference-pill">
          <input type="radio" name="notification_preference" value="${value}"${selected === value ? " checked" : ""}>
          <span>${escapeHtml(label)}</span>
        </label>
      `).join("")}
    </div>
  `;
}

function transactions() {
  return [
    ...state.receipts.filter((item) => !item.is_client_expense).map((item) => ({ type: "receipt", timestamp: item.timestamp, sortTimestamp: recordSortDate(item), item })),
    ...state.income.map((item) => ({ type: "income", timestamp: item.timestamp, sortTimestamp: recordSortDate(item), item }))
  ].sort((a, b) => sortTime(b.sortTimestamp) - sortTime(a.sortTimestamp));
}

function recordSortDate(item = {}) {
  return item.timestamp || item.date || item.receipt_date || item.record_date || item.created_at || item.createdAt || item.uploaded_at || item.uploadedAt || item.updated_at || "";
}

function sortTime(value) {
  const date = appDate(value);
  const time = date.getTime();
  return Number.isNaN(time) ? 0 : time;
}

function dateReviewStorageKey() {
  return `rb_date_review_confirmed_${state.user?.id || "guest"}`;
}

function dateReviewConfirmedIds() {
  const ids = read(dateReviewStorageKey(), []);
  return Array.isArray(ids) ? ids.map(String) : [];
}

function dateReviewConfirmed(item = {}) {
  const id = item.id || item._id || item.receipt_id || item.receiptId;
  return Boolean(id && dateReviewConfirmedIds().includes(String(id)));
}

function rememberDateReviewConfirmed(id) {
  if (!id) return;
  const ids = new Set(dateReviewConfirmedIds());
  ids.add(String(id));
  write(dateReviewStorageKey(), Array.from(ids).slice(-500));
}

function recordDateNeedsReview(item = {}) {
  if (dateReviewConfirmed(item)) return false;
  return Boolean(
    item.date_needs_review ||
    item.dateNeedsReview ||
    item.needs_date_review ||
    item.ocr_date_needs_review ||
    item.date_confidence === "low" ||
    Number(item.date_confidence || item.dateConfidence || 1) < 0.65
  );
}

function recordPossibleDuplicate(item = {}) {
  return Boolean(item.possible_duplicate || item.possibleDuplicate || item.duplicate_of_receipt_id || item.duplicateOfReceiptId);
}

function recordNeedsReview(item = {}) {
  return Boolean(recordDateNeedsReview(item) || recordPossibleDuplicate(item) || item.status === "needs_review" || item.needs_review || item.needsReview);
}

function clearDateReviewFields(item = {}) {
  return {
    ...item,
    date_needs_review: false,
    dateNeedsReview: false,
    needs_date_review: false,
    ocr_date_needs_review: false,
    date_confidence: 1,
    dateConfidence: 1
  };
}

function dateReviewCard() {
  return `
    <div class="status-card date-review-card">
      <strong>${t("dateNeedsReview")}</strong>
      <span>${t("dateNeedsReviewHint")}</span>
    </div>
  `;
}

function duplicateReviewCard() {
  return `
    <div class="status-card duplicate-review-card">
      <strong>${t("duplicateReviewTitle")}</strong>
      <span>${t("duplicateReviewHint")}</span>
    </div>
  `;
}

function itemRow(row) {
  if (row.type === "income") {
    const item = row.item;
    const businessLabel = businessLabelForRecord(item);
    return `<button class="list-item record-income" data-open-income="${item.id}">
      <span class="list-main">
        <span class="list-title">${escapeHtml(item.description || t("income"))}${reviewBadge(item)}</span>
        <span class="list-meta">${day(item.timestamp)}${businessLabel ? ` - ${escapeHtml(businessLabel)}` : ""}</span>
      </span>
      <span class="amount income">${money(item.amount, item.currency)}</span>
    </button>`;
  }
  const item = row.item;
  const businessLabel = businessLabelForRecord(item);
  return `<button class="list-item record-expense record-category-${item.category || "other"}" data-open-receipt="${item.id}">
    <span class="list-main">
      <span class="list-title">${escapeHtml(item.merchant || t("unknown"))}${reviewBadge(item)}</span>
      <span class="list-meta">${t(item.category)} - ${day(item.timestamp)}${businessLabel ? ` - ${escapeHtml(businessLabel)}` : ""}</span>
    </span>
    <span class="amount expense">${money(item.amount, item.currency)}</span>
  </button>`;
}

function monthEntries() {
  return {
    receipts: state.receipts.filter((item) => !item.is_client_expense).filter(recordInCurrentPeriod).filter(recordMatchesSummaryBusiness),
    income: state.income.filter(recordInCurrentPeriod).filter(recordMatchesSummaryBusiness)
  };
}

function recordInCurrentPeriod(item) {
  const rawDate = item?.timestamp || item?.created_at;
  const date = appDate(rawDate);
  if (Number.isNaN(date.getTime())) return false;
  if (state.summaryPeriod === "quarter") {
    const range = quarterRange();
    return date >= range.start && date < range.endExclusive;
  }
  return date.getFullYear() === state.summaryDate.getFullYear() && date.getMonth() === state.summaryDate.getMonth();
}

function daysSince(value) {
  if (!value) return Infinity;
  return Math.floor((Date.now() - appDate(value).getTime()) / 86400000);
}

function monthKey(date) {
  const value = appDate(date);
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}`;
}

function shortMonthLabel(date) {
  return appDate(date).toLocaleDateString(uiLocale(), { month: "short", year: "numeric" });
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
    if (!item.merchant) flags.push({ label: t("missingMerchant"), receiptId: item.id });
    if (!item.category || item.category === "other") flags.push({ label: t("missingCategory"), receiptId: item.id });
    if (recordPossibleDuplicate(item)) flags.push({ label: t("possibleDuplicate"), receiptId: item.id, detail: t("duplicateHint") });
  });
  income.forEach((item) => {
    if (!incomeProofImage(item, proofForIncome(item.id)) && !incomeProofName(item, proofForIncome(item.id))) flags.push({ label: t("incomeWithoutProof"), incomeId: item.id });
  });
  const seen = new Map();
  receipts.forEach((item) => {
    const key = [dateInputValue(item.timestamp), item.amount, item.currency, item.merchant || ""].join("|");
    if (seen.has(key)) {
      flags.push({ label: t("possibleDuplicate"), receiptId: item.id, detail: t("duplicateHint") });
    } else {
      seen.set(key, item.id);
    }
  });
  return flags;
}

function reviewFlagNode(flag) {
  const label = escapeHtml(flag.label || String(flag));
  const detail = flag.detail ? ` title="${escapeAttr(flag.detail)}"` : "";
  if (flag.receiptId) return `<button type="button" data-open-receipt="${escapeAttr(flag.receiptId)}"${detail}>${label}</button>`;
  if (flag.incomeId) return `<button type="button" data-open-income="${escapeAttr(flag.incomeId)}"${detail}>${label}</button>`;
  return `<span${detail}>${label}</span>`;
}

function accountantRecordRow(item) {
  const label = item.type === "paid_for_client" ? at("paidForClient") : item.type === "income" ? at("income") : at("expense");
  const detail = item.description || item.merchant || item.category || at("record");
  const proof = item.type === "income"
    ? (incomeProofImage(item, proofForIncome(item.id)) || incomeProofName(item, proofForIncome(item.id)) ? at("proofAttached") : at("proofMissing"))
    : (item.image_base64 ? at("receiptPhotoAttached") : at("noReceiptPhoto"));
  return `<div class="list-item record-row">
    <span class="list-main">
      <span class="list-title">${escapeHtml(label)} - ${escapeHtml(detail)}</span>
      <span class="list-meta">${day(item.timestamp)} | ${escapeHtml(proof)}</span>
    </span>
    <span class="amount ${item.type === "income" ? "income" : item.type === "paid_for_client" ? "client" : "expense"}">${money(item.amount, item.currency)}</span>
  </div>`;
}

function accountantClientCsv() {
  const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
  const records = state.accountantClientRecords || { receipts: [], income: [] };
  const income = (records.income || []).filter(recordInCurrentPeriod);
  const receipts = (records.receipts || []).filter((item) => !item.is_client_expense).filter(recordInCurrentPeriod);
  const rows = [
    ["client", "period", "type", "date", "amount", "currency", "description", "proof_available", "accountant_notes"],
    ...income.map((item) => [
      client?.first_name || "Client",
      periodLabel(),
      "income",
      dateInputValue(item.timestamp || item.created_at),
      Number(item.amount || 0).toFixed(2),
      item.currency || "GBP",
      item.description || "",
      incomeProofImage(item, proofForIncome(item.id)) || incomeProofName(item, proofForIncome(item.id)) ? "yes" : "no",
      ""
    ]),
    ...receipts.map((item) => [
      client?.first_name || "Client",
      periodLabel(),
      "expense",
      dateInputValue(item.timestamp || item.created_at),
      Number(item.amount || 0).toFixed(2),
      item.currency || "GBP",
      item.merchant || item.category || "",
      item.image_base64 ? "yes" : "no",
      ""
    ])
  ];
  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

function createAccountantClientPdfFile() {
  const jsPdf = window.jspdf?.jsPDF;
  if (!jsPdf) {
    throw new Error(t("pdfLoading"));
  }

  const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
  const records = state.accountantClientRecords || { receipts: [], income: [] };
  const receipts = (records.receipts || []).filter((item) => !item.is_client_expense).filter(recordInCurrentPeriod);
  const income = (records.income || []).filter(recordInCurrentPeriod);
  const doc = new jsPdf({ unit: "pt", format: "a4" });
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
  line(`TidGo accountant pack - ${periodLabel()}`, 22, "bold");
  line([client?.first_name || "Client", client?.trade || "", client?.email || ""].filter(Boolean).join(" | "), 11);
  y += 8;
  line("Income: " + formatTotals(income), 12, "bold");
  line("Expenses: " + formatTotals(receipts), 12, "bold");
  y += 10;
  if (state.summaryPeriod === "quarter" && state.quarterMode === "mtd_running") {
    line(t("mtdRunningDisclaimer"), 10, "bold");
    y += 4;
  }
  line(dt("pdfLine"), 9);
  y += 14;

  const rows = [
    ...income.map((item) => [day(item.timestamp || item.created_at), "Income", item.description || "Income", money(item.amount, item.currency)]),
    ...receipts.map((item) => [day(item.timestamp || item.created_at), "Expense", item.merchant || item.category || "Expense", money(item.amount, item.currency)])
  ];

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Date", margin, y);
  doc.text("Type", margin + 68, y);
  doc.text("Description", margin + 168, y);
  doc.text("Amount", pageWidth - margin - 90, y);
  y += 14;
  doc.setDrawColor(216, 222, 232);
  doc.line(margin, y, pageWidth - margin, y);
  y += 14;
  doc.setFont("helvetica", "normal");

  if (!rows.length) {
    line("No records yet.", 11);
  }

  for (const row of rows) {
    if (y > pageHeight - 60) {
      doc.addPage();
      y = 48;
    }
    doc.text(String(row[0]), margin, y);
    doc.text(String(row[1]), margin + 68, y);
    doc.text(doc.splitTextToSize(String(row[2]), 180), margin + 168, y);
    doc.text(String(row[3]), pageWidth - margin - 90, y);
    y += 24;
  }

  for (const receipt of receipts) {
    if (!receipt.image_base64) continue;
    doc.addPage();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(`${receipt.merchant || receipt.category || "Receipt"} - ${money(receipt.amount, receipt.currency)}`, margin, 36);
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

  for (const item of income) {
    const proofImage = incomeProofImage(item, proofForIncome(item.id));
    if (!proofImage) continue;
    doc.addPage();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(`${item.description || "Income proof"} - ${money(item.amount, item.currency)}`, margin, 36);
    try {
      const props = doc.getImageProperties(proofImage);
      const maxW = pageWidth - margin * 2;
      const maxH = pageHeight - 90;
      const scale = Math.min(maxW / props.width, maxH / props.height);
      const w = props.width * scale;
      const h = props.height * scale;
      doc.addImage(proofImage, props.fileType || "JPEG", (pageWidth - w) / 2, 58, w, h);
    } catch {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("Income proof could not be added to this PDF.", margin, 70);
    }
  }

  const safeName = (client?.first_name || "client").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "client";
  return doc.output("blob", { filename: `TidGo-${safeName}-${periodFilePart()}-accountant-pack.pdf` });
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function accountantCsv() {
  const { receipts, income } = monthEntries();
  const rows = [
    ["type", "date", "amount", "currency", "merchant_or_description", "tidgo_category", "proof_available", "needs_review", "accountant_category", "accountant_notes", "approved"],
    ...income.map((item) => [
      "income",
      dateInputValue(item.timestamp),
      Number(item.amount || 0).toFixed(2),
      item.currency || "GBP",
      item.description || "",
      "",
      incomeProofImage(item, proofForIncome(item.id)) || incomeProofName(item, proofForIncome(item.id)) ? "yes" : "no",
      incomeProofImage(item, proofForIncome(item.id)) || incomeProofName(item, proofForIncome(item.id)) ? "" : t("incomeWithoutProof"),
      "",
      "",
      ""
    ]),
    ...receipts.map((item) => [
      "expense",
      dateInputValue(item.timestamp),
      Number(item.amount || 0).toFixed(2),
      item.currency || "GBP",
      item.merchant || "",
      item.category || "",
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
  return `<button class="list-item record-income" type="button" data-open-income="${escapeAttr(item.id)}">
    <span class="list-main">
      <span class="list-title">${t("income")}${reviewBadge(item)}</span>
      <span class="list-meta">${day(item.timestamp)} Â· ${escapeHtml(item.description || "")}</span>
    </span>
    <span class="amount income">${money(item.amount, item.currency)}</span>
  </button>`;
}

function receiptSummaryRow(item) {
  return `<button class="list-item record-expense record-category-${item.category || "other"}" type="button" data-open-receipt="${escapeAttr(item.id)}">
    <span class="list-main">
      <span class="list-title">${t("expenses")}${reviewBadge(item)}</span>
      <span class="list-meta">${day(item.timestamp)} Â· ${escapeHtml(item.merchant || t(item.category))}</span>
    </span>
    <span class="amount expense">${money(item.amount, item.currency)}</span>
  </button>`;
}

function recordSkeletonRows(count = 4) {
  return Array.from({ length: count }, (_, index) => `
    <div class="list-item skeleton-row" aria-hidden="true" style="--skeleton-delay:${index * 70}ms">
      <span class="list-main">
        <span class="skeleton-line skeleton-title"></span>
        <span class="skeleton-line skeleton-meta"></span>
      </span>
      <span class="skeleton-pill"></span>
    </div>
  `).join("");
}

function go(screen) {
  navigate(screen);
}

async function uploadReceipt(file, isClientExpense) {
  if (!file || !state.user?.id) return;
  if (!file.type?.startsWith("image/")) {
    toast(t("expensePdfUnsupported"));
    return;
  }
  setBusy(true);
  try {
    showScanOverlay("");
    const image_base64 = await receiptImageDataUrl(file);
    updateScanOverlayImage(image_base64);
    const slot = businessSlotById(state.pendingBusinessSlotId || defaultBusinessSlotId(), normalizeBusinessType(state.pendingBusinessType || defaultBusinessType()));
    const receiptResponse = await api("/api/receipts", {
      method: "POST",
      body: JSON.stringify({
        user_id: state.user.id,
        image_base64,
        is_client_expense: isClientExpense,
        business_type: slot.type,
        business_slot_id: slot.id,
        business_slot_label: slot.label,
        humour_style: state.humour,
        language: state.language
      })
    });
    const receipt = normalizeReceiptResponse(receiptResponse);
    saveRecordBusinessMeta(receipt.id, slot);
    const localReceipt = upsertReceiptLocal(receipt, {
      user_id: state.user.id,
      image_base64,
      is_client_expense: isClientExpense,
      business_type: slot.type,
      business_slot_id: slot.id,
      business_slot_label: slot.label
    });
    const receipts = await refreshReceiptsOnly();
    const storedReceipt = receipts.find((item) => item.id === receipt.id) || localReceipt || receipts[0] || receipt;
    focusSummaryOnRecord(storedReceipt);
    state.selected = storedReceipt.id || receipt.id;
    state.screen = "receipt";
    render();
    showSuccessPing(receipt.ai_comment || t("saved"));
  } catch (error) {
    toast(error.message || t("backendDown"));
  } finally {
    hideScanOverlay();
    setBusy(false);
  }
}

async function replaceReceiptImage(file) {
  if (!file || !state.user?.id || !state.selected) return;
  if (!file.type?.startsWith("image/")) {
    toast(t("expensePdfUnsupported"));
    return;
  }
  const oldReceiptId = state.selected;
  const oldReceipt = state.receipts.find((item) => item.id === oldReceiptId);
  setBusy(true);
  try {
    showScanOverlay("");
    const image_base64 = await receiptImageDataUrl(file);
    updateScanOverlayImage(image_base64);
    const slot = businessSlotById(oldReceipt?.business_slot_id, oldReceipt?.business_type || defaultBusinessType());
    const receiptResponse = await api("/api/receipts", {
      method: "POST",
      body: JSON.stringify({
        user_id: state.user.id,
        image_base64,
        is_client_expense: false,
        business_type: slot.type,
        business_slot_id: slot.id,
        business_slot_label: slot.label,
        humour_style: state.humour,
        language: state.language
      })
    });
    const receipt = normalizeReceiptResponse(receiptResponse);
    saveRecordBusinessMeta(receipt.id, slot);
    await api(`/api/receipts/${oldReceiptId}`, { method: "DELETE" });
    removeReceiptLocal(oldReceiptId);
    const localReceipt = upsertReceiptLocal(receipt, {
      user_id: state.user.id,
      image_base64,
      is_client_expense: false,
      business_type: slot.type,
      business_slot_id: slot.id,
      business_slot_label: slot.label
    });
    const receipts = await refreshReceiptsOnly();
    const storedReceipt = receipts.find((item) => item.id === receipt.id) || localReceipt || receipts[0] || receipt;
    focusSummaryOnRecord(storedReceipt);
    state.selected = storedReceipt.id || receipt.id;
    state.screen = "receipt";
    render();
    showSuccessPing(receipt.ai_comment || t("saved"));
  } catch (error) {
    toast(error.message || t("backendDown"));
  } finally {
    hideScanOverlay();
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

async function receiptImageDataUrl(file) {
  const compressed = await imageThumbnailDataUrl(file, 1400, 0.72);
  return compressed || await fileToDataUrl(file);
}

async function imageThumbnailDataUrl(file, maxSize = 520, quality = 0.72) {
  if (!file?.type?.startsWith("image/")) return "";
  const dataUrl = await fileToDataUrl(file);
  return await new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    image.onerror = () => resolve("");
    image.src = dataUrl;
  });
}

function incomeProofFile(form) {
  return form.elements.proof_photo?.files?.[0] || form.elements.proof_file?.files?.[0] || null;
}

function buildPrintHtml() {
  const { receipts, income } = monthEntries();
  const rows = [
    ...income.map((item) => ({ date: day(item.timestamp), type: t("income"), label: item.description || t("income"), amount: money(item.amount, item.currency) })),
    ...receipts.map((item) => ({ date: day(item.timestamp), type: t("expenses"), label: item.merchant || t(item.category), amount: money(item.amount, item.currency) }))
  ];
  const tableRows = rows.length
    ? rows.map((row) => `<tr><td>${escapeHtml(row.date)}</td><td>${escapeHtml(row.type)}</td><td>${escapeHtml(row.label)}</td><td class="print-money">${escapeHtml(row.amount)}</td></tr>`).join("")
    : `<tr><td colspan="4">${t("noEntries")}</td></tr>`;
  const photos = receipts.map((item) => `<section class="photo-page"><div class="photo-caption">${escapeHtml(item.merchant || t(item.category))} | ${escapeHtml(money(item.amount, item.currency))}</div><img src="${item.image_base64}" alt=""></section>`).join("");
  return `
    <h1>TidGo - ${escapeHtml(periodLabel())}</h1>
    <p>${escapeHtml(state.user?.first_name || "")} ${state.user?.trade ? " Â· " + escapeHtml(state.user.trade) : ""}</p>
    <p>${escapeHtml(t("summaryBusinessFilter"))}: ${escapeHtml(summaryBusinessScopeLabel())}</p>
    <p>${escapeHtml(t("note"))}</p>
    ${state.summaryPeriod === "quarter" && state.quarterMode === "mtd_running" ? `<p>${escapeHtml(t("mtdRunningDisclaimer"))}</p>` : ""}
    <p>${escapeHtml(dt("pdfLine"))}</p>
    <table><thead><tr><th>Date</th><th>Type</th><th>Description</th><th class="print-money">Amount</th></tr></thead><tbody>${tableRows}</tbody></table>
    ${photos}
  `;
}

async function createSummaryPdfFile() {
  const jsPdf = window.jspdf?.jsPDF;
  if (!jsPdf) {
    throw new Error(t("pdfLoading"));
  }

  const doc = new jsPdf({ unit: "pt", format: "a4" });
  const { receipts, income } = monthEntries();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 42;
  let y = 48;
  const pdfText = {
    income: "Income",
    expenses: "Expenses",
    noEntries: "No records for this period.",
    note: "A tidy bag of receipts for the selected period. Your accountant can handle the clever tax part.",
    pdfLine: "TidGo helps organise records, but it does not verify every receipt item. Please check amounts, categories and documents before using this pack. This is a record summary, not VAT, payroll or corporation tax advice."
  };
  const pdfDay = (value) => {
    const date = new Date(value || Date.now());
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

  const line = (text, size = 11, weight = "normal") => {
    doc.setFont("helvetica", weight);
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(String(text || ""), pageWidth - margin * 2);
    doc.text(lines, margin, y);
    y += lines.length * (size + 5);
  };

  doc.setTextColor(23, 32, 51);
  line("TidGo - " + periodLabel(), 22, "bold");
  line([state.user?.first_name, state.user?.trade].filter(Boolean).join(" | "), 11);
  line(`${t("summaryBusinessFilter")}: ${summaryBusinessScopeLabel()}`, 10, "bold");
  y += 8;
  line(pdfText.income + ": " + formatTotals(income), 12, "bold");
  line(pdfText.expenses + ": " + formatTotals(receipts), 12, "bold");
  y += 12;
  line(pdfText.note, 10);
  y += 6;
  if (state.summaryPeriod === "quarter" && state.quarterMode === "mtd_running") {
    line(t("mtdRunningDisclaimer"), 10, "bold");
    y += 4;
  }
  line(pdfText.pdfLine, 9);
  y += 14;

  const rows = [
    ...income.map((item) => [pdfDay(item.timestamp), pdfText.income, item.description || pdfText.income, money(item.amount, item.currency)]),
    ...receipts.map((item) => [pdfDay(item.timestamp), pdfText.expenses, item.merchant || item.category || pdfText.expenses, money(item.amount, item.currency)])
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
    line(pdfText.noEntries, 11);
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
    doc.text(`${receipt.merchant || receipt.category || pdfText.expenses} - ${money(receipt.amount, receipt.currency)}`, margin, 36);
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

  const bytes = doc.output("arraybuffer");
  const fileName = `TidGo-${periodFilePart()}.pdf`;
  return new File([bytes], fileName, { type: "application/pdf" });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function shortPrivacyNoticeBlock(framed = false) {
  const paragraphs = String(t("shortPrivacyNoticeText"))
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  const className = framed ? "card stack short-privacy-notice" : "short-privacy-notice";
  return `
    <div class="${className}">
      <strong>${t("shortPrivacyNoticeTitle")}</strong>
      ${paragraphs}
    </div>
  `;
}

document.addEventListener("click", async (event) => {
  const cookieChoiceButton = event.target.closest("[data-cookie-choice]");
  if (cookieChoiceButton) {
    const choice = cookieChoiceButton.dataset.cookieChoice === "analytics" ? "analytics" : "essential";
    write("tg_cookie_choice", choice);
    renderCookieConsent();
    return;
  }

  const marketingLanguageButton = event.target.closest("[data-marketing-language]");
  if (marketingLanguageButton) {
    state.marketingLanguage = marketingLanguageButton.dataset.marketingLanguage;
    write("tg_marketing_language", state.marketingLanguage);
    render();
    return;
  }

  const appLanguageButton = event.target.closest("[data-app-language]");
  if (appLanguageButton) {
    state.language = appLanguageButton.dataset.appLanguage;
    write("rb_language", state.language);
    render();
    return;
  }

  const scrollLink = event.target.closest("[data-scroll-target]");
  if (scrollLink) {
    event.preventDefault();
    document.getElementById(scrollLink.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const copyButton = event.target.closest("[data-copy-text]");
  if (copyButton) {
    const text = decodeURIComponent(copyButton.dataset.copyText || "");
    try {
      await navigator.clipboard.writeText(text);
      toast("Message copied.");
    } catch {
      toast("Copy failed. Select the message manually.");
    }
    return;
  }

  const target = event.target.closest("button, [data-open-receipt], [data-open-income], [data-open-accountant-client]");
  if (!target) return;

  if (target.dataset.category) {
    document.querySelectorAll("[data-category]").forEach((item) => item.classList.remove("active"));
    target.classList.add("active");
    return;
  }
  if (target.dataset.action === "connectWhatsApp") {
    setBusy(true);
    try {
      await openWhatsAppConnect();
    } catch (error) {
      toast(error.message || t("backendDown"));
    } finally {
      setBusy(false);
    }
    return;
  }
  if (target.dataset.action === "openWhatsAppRecovery") {
    openWhatsAppRecovery();
    return;
  }
  if (target.dataset.action === "startEmailChange") {
    state.emailChangeOpen = true;
    state.emailChangeCodeSent = false;
    state.emailChangeNewEmail = "";
    return render();
  }
  if (target.dataset.action === "cancelEmailChange") {
    state.emailChangeOpen = false;
    state.emailChangeCodeSent = false;
    state.emailChangeNewEmail = "";
    return render();
  }
  if (target.dataset.openReceipt) {
    return navigate("receipt", { selected: target.dataset.openReceipt });
  }
  if (target.dataset.openIncome) {
    return navigate("incomeDetail", { selected: target.dataset.openIncome });
  }
  if (target.dataset.openAccountantClient) {
    try {
      await loadAccountantClientRecords(target.dataset.openAccountantClient);
      return navigate("accountantDemoClient");
    } catch (error) {
      toast(error.message || "Could not load client records");
      return;
    }
  }
  if (target.dataset.revokeConsent) {
    try {
      await api(`/api/accountant/consents/${target.dataset.revokeConsent}?client_user_id=${encodeURIComponent(state.user.id)}`, { method: "DELETE" });
      await refresh();
      toast(t("accessRevoked"));
      return render();
    } catch (error) {
      toast(error.message || t("backendDown"));
      return;
    }
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
  if (action === "shareTidGo") {
    await shareTidGo();
    return;
  }
  if (action === "signOutAdmin") {
    state.adminEmail = "";
    state.adminPendingEmail = "";
    state.adminCodeSent = false;
    state.adminToken = "";
    state.adminUsers = [];
    state.adminError = "";
    state.adminSearch = "";
    state.adminSearchDraft = "";
    forget("tg_admin_email");
    forget("tg_admin_pending_email");
    sessionStorage.removeItem("tg_admin_token");
    toast("Signed out.");
    return render();
  }
  if (action === "loadAdminUsers") {
    try {
      setBusy(true);
      await loadAdminUsers();
      toast("Users loaded.");
    } catch (error) {
      state.adminError = error.message || "Admin API is not connected yet.";
      toast(state.adminError);
    } finally {
      setBusy(false);
    }
    return render();
  }
  if (action === "clearAdminSearch") {
    state.adminSearch = "";
    state.adminSearchDraft = "";
    return go("adminLanding");
  }
  if (action === "recover") return go("recover");
  if (action === "settings") return go("settings");
  if (action === "retryRefresh") {
    try {
      setBusy(true);
      await refresh();
      return render();
    } catch (error) {
      toast(error.message || t("backendDown"));
    } finally {
      setBusy(false);
    }
    return;
  }
  if (action === "viewImage") {
    state.imageViewer = target.dataset.imageSrc || "";
    state.imageRotation = 0;
    return render();
  }
  if (action === "rotateImage") {
    state.imageRotation = (Number(state.imageRotation || 0) + 90) % 360;
    return render();
  }
  if (action === "closeImageViewer") {
    state.imageViewer = null;
    state.imageRotation = 0;
    return render();
  }
  if (action === "startWhatsAppChange") {
    state.whatsappChangeOpen = true;
    state.whatsappChangeCodeSent = false;
    state.whatsappChangeUnlocked = false;
    state.whatsappChangeEmail = recoveryEmailForUser();
    return render();
  }
  if (action === "cancelWhatsAppChange") {
    state.whatsappChangeOpen = false;
    state.whatsappChangeCodeSent = false;
    state.whatsappChangeUnlocked = false;
    state.whatsappChangeEmail = "";
    return render();
  }
  if (action === "requestWhatsAppChangeCode") {
    const box = target.closest(".whatsapp-change-box");
    const email = (box?.querySelector("[name='whatsapp_change_email']")?.value || state.whatsappChangeEmail || "").trim();
    if (!email) return toast(t("email"));
    try {
      setBusy(true);
      await api("/api/auth/recovery/request", { method: "POST", body: JSON.stringify({ email }) });
      state.whatsappChangeEmail = email;
      state.whatsappChangeCodeSent = true;
      toast(t("codeSent"));
      return render();
    } catch (error) {
      toast(error.message || t("backendDown"));
    } finally {
      setBusy(false);
    }
    return;
  }
  if (action === "verifyWhatsAppChangeCode") {
    const box = target.closest(".whatsapp-change-box");
    const email = (box?.querySelector("[name='whatsapp_change_email']")?.value || state.whatsappChangeEmail || "").trim();
    const code = (box?.querySelector("[name='whatsapp_change_code']")?.value || "").trim();
    if (!email || !code) return toast(t("code"));
    const currentEmail = recoveryEmailForUser().toLowerCase();
    if (currentEmail && email.toLowerCase() !== currentEmail) return toast(t("email"));
    try {
      setBusy(true);
      const user = await api("/api/auth/recovery/verify", { method: "POST", body: JSON.stringify({ email, code }) });
      state.whatsappChangeEmail = email;
      state.whatsappChangeUnlocked = true;
      if (user?.email || user?.recovery_email) {
        await rememberUser({ ...state.user, ...user, id: state.user.id });
      }
      toast(t("whatsappChangeUnlocked"));
      return render();
    } catch (error) {
      toast(error.message || t("backendDown"));
    } finally {
      setBusy(false);
    }
    return;
  }
  if (action === "requestEmailChangeCode") {
    const box = target.closest(".email-change-box");
    const newEmail = (box?.querySelector("[name='new_email']")?.value || state.emailChangeNewEmail || "").trim();
    if (!newEmail) return toast(t("newEmail"));
    try {
      setBusy(true);
      await api(`/api/users/${state.user.id}/email-change/request`, {
        method: "POST",
        body: JSON.stringify({ new_email: newEmail })
      });
      state.emailChangeNewEmail = newEmail;
      state.emailChangeCodeSent = true;
      toast(t("codeSent"));
      return render();
    } catch (error) {
      toast(error.message || t("backendDown"));
    } finally {
      setBusy(false);
    }
    return;
  }
  if (action === "verifyEmailChangeCode") {
    const box = target.closest(".email-change-box");
    const newEmail = (box?.querySelector("[name='new_email']")?.value || state.emailChangeNewEmail || "").trim();
    const code = (box?.querySelector("[name='email_change_code']")?.value || "").trim();
    if (!newEmail || !code) return toast(t("code"));
    try {
      setBusy(true);
      const user = await api(`/api/users/${state.user.id}/email-change/verify`, {
        method: "POST",
        body: JSON.stringify({ new_email: newEmail, code })
      });
      state.emailChangeOpen = false;
      state.emailChangeCodeSent = false;
      state.emailChangeNewEmail = "";
      await rememberUser({ ...state.user, ...user });
      toast(t("emailChanged"));
      return render();
    } catch (error) {
      toast(error.message || t("backendDown"));
    } finally {
      setBusy(false);
    }
    return;
  }
  if (action === "accountantLanding") return go("accountantLanding");
  if (action === "accountantDemoClient") return go("accountantDemoClient");
  if (action === "signOutAccountant") {
    state.accountantPortalEmail = "";
    state.accountantPendingEmail = "";
    state.accountantDisplayName = "";
    state.accountantCodeSent = false;
    state.accountantClientListOpen = false;
    state.accountantClientSearch = "";
    state.accountantClients = [];
    state.accountantClientRecords = null;
    state.accountantSelectedClientId = null;
    forget("rb_accountant_portal_email");
    forget("rb_accountant_pending_email");
    forget("rb_accountant_display_name");
    await deviceForget("rb_accountant_portal_email");
    await deviceForget("rb_accountant_display_name");
    toast("Signed out.");
    return render();
  }
  if (action === "openAccountantClientList") {
    state.accountantClientListOpen = true;
    if (state.accountantPortalEmail && !state.accountantClients.length) {
      await loadAccountantClients(state.accountantPortalEmail);
    }
    return render();
  }
  if (action === "closeAccountantClientList") {
    state.accountantClientListOpen = false;
    state.accountantClientSearch = "";
    return render();
  }
  if (action === "downloadAccountantClientCsv") {
    if (!(await confirmDownload("accountant"))) return;
    const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
    const safeName = (client?.first_name || "client").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "client";
    downloadFile(`TidGo-${safeName}-${periodFilePart()}-records.csv`, accountantClientCsv(), "text/csv");
    toast("Client CSV downloaded.");
    return;
  }
  if (action === "downloadAccountantClientPdf") {
    try {
      if (!(await confirmDownload("accountant"))) return;
      const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
      const safeName = (client?.first_name || "client").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "client";
      const blob = createAccountantClientPdfFile();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `TidGo-${safeName}-${periodFilePart()}-accountant-pack.pdf`;
      link.click();
      URL.revokeObjectURL(url);
      toast("Client PDF downloaded.");
    } catch (error) {
      toast(error.message || t("pdfCreateFailed"));
    }
    return;
  }
  if (action === "removeAccountantClient") {
    try {
      const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
      const consentId = accountantClientConsentId(client);
      if (!client || !consentId) throw new Error(at("removeNeedsBackend"));
      if (!confirm(at("removeClientConfirm"))) return;
      await api(`/api/accountant/consents/${encodeURIComponent(consentId)}?client_user_id=${encodeURIComponent(client.user_id)}`, { method: "DELETE" });
      state.accountantClientRecords = null;
      state.accountantSelectedClientId = null;
      await loadAccountantClients();
      toast(at("clientRemoved"));
      return go("accountantLanding");
    } catch (error) {
      toast(error.message || at("removeNeedsBackend"));
    }
    return;
  }
  if (action === "requestDemoDocs") {
    await sendAccountantRequestDocs();
    return;
  }
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
  if (action === "privacy") return go("privacy");
  if (action === "terms") return go("terms");
  if (action === "summary") return go("summary");
  if (action === "startExpense") return startRecordFlow("expense");
  if (action === "startIncome") return startRecordFlow("income");
  if (action === "chooseBusinessType") {
    const slot = businessSlotById(target.dataset.businessSlotId, target.dataset.businessType);
    state.pendingBusinessType = slot.type;
    state.pendingBusinessSlotId = slot.id;
    return go(state.pendingRecordKind === "income" ? "incomeForm" : "expenseChoice");
  }
  if (action === "incomeForm") return startRecordFlow("income");
  if (action === "pickIncomeProofPhoto" || action === "pickIncomeProofFile") {
    const form = target.closest("form");
    const field = action === "pickIncomeProofPhoto" ? "proof_photo" : "proof_file";
    if (form?.elements[field]) form.elements[field].value = "";
    form?.elements[field]?.click();
    return;
  }
  if (action === "pickReceiptReplacePhoto" || action === "pickReceiptReplaceFile") {
    const form = target.closest("form");
    const field = action === "pickReceiptReplacePhoto" ? "receipt_replace_photo" : "receipt_replace_file";
    if (form?.elements[field]) form.elements[field].value = "";
    form?.elements[field]?.click();
    return;
  }
  if (action === "showMoreTransactions") {
    state.transactionLimit = Math.min(transactions().length, Math.max(4, state.transactionLimit || 4) + 10);
    return render();
  }
  if (action === "showLessTransactions") {
    state.transactionLimit = 4;
    return render();
  }
  if (action === "expenseChoice") return startRecordFlow("expense");
  if (action === "pickExpensePhoto") {
    if (expensePhotoPicker) expensePhotoPicker.value = "";
    return expensePhotoPicker?.click();
  }
  if (action === "pickExpenseFile") {
    if (expenseFilePicker) expenseFilePicker.value = "";
    return expenseFilePicker?.click();
  }
  if (action === "prevMonth" || action === "nextMonth") {
    shiftSummaryPeriod(action === "prevMonth" ? -1 : 1);
    return render();
  }
  if (action === "setSummaryPeriod") {
    const previousPeriod = state.summaryPeriod;
    state.summaryPeriod = target.dataset.period === "quarter" ? "quarter" : "month";
    write("rb_summary_period", state.summaryPeriod);
    if (previousPeriod === "month" && state.summaryPeriod === "quarter") anchorSummaryDateToMonthStart();
    return render();
  }
  if (action === "setSummaryView") {
    const view = target.dataset.summaryView;
    if (view === "month") {
      state.summaryPeriod = "month";
    } else {
      const previousPeriod = state.summaryPeriod;
      state.summaryPeriod = "quarter";
      state.quarterMode = view === "uk_tax" ? "uk_tax" : view === "mtd_running" ? "mtd_running" : "calendar";
      if (previousPeriod === "month") anchorSummaryDateToMonthStart();
    }
    write("rb_summary_period", state.summaryPeriod);
    write("rb_quarter_mode", state.quarterMode);
    return render();
  }
  if (action === "setQuarterMode") {
    state.quarterMode = target.dataset.quarterMode === "uk_tax" ? "uk_tax" : target.dataset.quarterMode === "mtd_running" ? "mtd_running" : "calendar";
    write("rb_quarter_mode", state.quarterMode);
    if (state.quarterMode === "uk_tax" || state.quarterMode === "mtd_running") anchorSummaryDateToMonthStart();
    return render();
  }
  if (action === "setSummaryBusinessSlot") {
    const slotId = target.dataset.businessSlotId || "all";
    state.summaryBusinessSlotId = slotId === "all" || readBusinessSlots().some((slot) => slot.id === slotId) ? slotId : "all";
    write("rb_summary_business_slot_id", state.summaryBusinessSlotId);
    return render();
  }
  if (action === "addBusinessSlot") {
    const row = target.closest("[data-business-slot-row]");
    const input = row?.querySelector("input");
    if (row && input) {
      row.classList.remove("business-slot-collapsed");
      input.disabled = false;
      target.remove();
      input.focus();
    }
    return;
  }
  if (action === "removeBusinessSlot") {
    if (!confirm(t("removeBusinessConfirm"))) return;
    const row = target.closest("[data-business-slot-row]");
    const input = row?.querySelector("input");
    const slotId = target.dataset.businessSlotId || "";
    if (row && input && slotId) {
      input.value = "";
      input.disabled = true;
      row.classList.add("business-slot-collapsed");
      target.remove();
      row.insertAdjacentHTML("beforeend", `<button class="secondary mini-btn add-business-btn" type="button" data-action="addBusinessSlot" data-business-slot-id="${escapeAttr(slotId)}">${t("addBusiness")}</button>`);
      if (state.summaryBusinessSlotId === slotId) {
        state.summaryBusinessSlotId = "all";
        write("rb_summary_business_slot_id", "all");
      }
    }
    return;
  }
  if (action === "printPdf") {
    if (!(await confirmDownload("user"))) return;
    document.querySelector("#printRoot").innerHTML = buildPrintHtml();
    window.print();
    return;
  }
  if (action === "downloadAccountantCsv") {
    const fileName = `TidGo-${state.user.first_name || "client"}-${periodFilePart()}.csv`;
    downloadFile(fileName, accountantCsv(), "text/csv");
    toast(t("accountantHeroToast"));
    return;
  }
  if (action === "downloadUserCsv") {
    if (!(await confirmDownload("user"))) return;
    const fileName = `TidGo-${state.user.first_name || "records"}-${periodFilePart()}.csv`;
    downloadFile(fileName, accountantCsv(), "text/csv");
    toast(t("downloadCsv"));
    return;
  }
  if (action === "downloadAccountantPack") {
    const fileName = `TidGo-accountant-pack-${state.user.first_name || "client"}-${periodFilePart()}.csv`;
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
      if (!(await confirmDownload("user"))) return;
      setBusy(true);
      const file = await createSummaryPdfFile();
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: `TidGo ${periodLabel()}`,
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
        toast(t("pdfSavedNoShare"));
      }
    } catch (error) {
      toast(error.message || t("pdfCreateFailed"));
    } finally {
      setBusy(false);
    }
    return;
  }
  if (action === "emailPdf") {
    const subject = encodeURIComponent(`TidGo ${periodLabel()}`);
    const body = encodeURIComponent(t("emailBody"));
    location.href = `mailto:?subject=${subject}&body=${body}`;
    return;
  }
  if (action === "deleteReceipt" && confirm(t("deleteReceiptWarning"))) {
    await api(`/api/receipts/${state.selected}`, { method: "DELETE" });
    removeReceiptLocal(state.selected);
    return go("home");
  }
  if (action === "deleteIncome" && confirm(t("deleteIncomeWarning"))) {
    await api(`/api/income/${state.selected}`, { method: "DELETE" });
    removeIncomeLocal(state.selected);
    return go("home");
  }
  if (action === "deleteAccount") {
    const confirmed = document.querySelector('input[name="delete_confirm"]')?.checked;
    if (!confirmed) {
      toast(t("deleteConfirmRequired"));
      return;
    }
    if (!confirm(t("deleteWarning"))) return;
    await api(`/api/users/${state.user.id}`, { method: "DELETE" });
    await clearSignedInUserSession();
    return go("onboarding");
  }
  if (action === "signOutDevice") {
    if (!confirm(t("signOutConfirm"))) return;
    const signedOutUserId = state.user?.id;
    await requestWhatsAppUnlinkForUser(signedOutUserId);
    await clearSignedInUserSession();
    return go("recover");
  }
});

document.addEventListener("change", async (event) => {
  if (event.target.name === "language") {
    state.language = event.target.value;
    write("rb_language", state.language);
    render();
  }
  if (event.target.name === "proof_photo" || event.target.name === "proof_file") {
    const form = event.target.closest("form");
    const otherName = event.target.name === "proof_photo" ? "proof_file" : "proof_photo";
    if (form?.elements[otherName]) form.elements[otherName].value = "";
    const file = event.target.files?.[0];
    const preview = form?.querySelector("[data-proof-preview]");
    if (preview && file) {
      preview.hidden = false;
      const imagePreview = await imageThumbnailDataUrl(file, 360, 0.68);
      preview.innerHTML = `${escapeHtml(t("proofAttached"))}: ${escapeHtml(file.name || t("attachProof"))}${imagePreview ? `<img class="receipt-preview" src="${imagePreview}" alt="${escapeAttr(t("proofAttached"))}">` : ""}`;
    }
  }
  if (event.target.name === "expense_photo" || event.target.name === "expense_file") {
    await uploadReceipt(event.target.files?.[0], false);
  }
  if (event.target.name === "receipt_replace_photo" || event.target.name === "receipt_replace_file") {
    await replaceReceiptImage(event.target.files?.[0]);
  }
  if (event.target.name === "delete_confirm") {
    const button = document.querySelector("[data-delete-account-button]");
    if (button) button.disabled = !event.target.checked;
  }
  if (event.target.name === "legal_agree_settings") {
    write("rb_legal_agreed", event.target.checked ? "true" : "false");
    if (!event.target.checked) {
      state.screen = "legalConsent";
      return render();
    }
    toast(t("saved"));
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-accountant-client-search]")) {
    const query = (event.target.value || "").trim().toLowerCase();
    state.accountantClientSearch = event.target.value || "";
    let visibleCount = 0;
    document.querySelectorAll("[data-accountant-client-row]").forEach((row) => {
      const matches = !query || (row.dataset.searchText || "").includes(query);
      row.classList.toggle("hidden", !matches);
      if (matches) visibleCount += 1;
    });
    const empty = document.querySelector("[data-accountant-client-empty]");
    if (empty) empty.classList.toggle("hidden", visibleCount > 0);
  }
  if (event.target.matches("[data-admin-search]")) {
    state.adminSearchDraft = event.target.value || "";
  }
});

document.addEventListener("dragover", (event) => {
  const dropZone = event.target.closest("[data-drop-upload]");
  if (!dropZone) return;
  event.preventDefault();
  dropZone.classList.add("drag-active");
  dropZone.querySelector("span").textContent = dropZone.dataset.dropUpload === "income-proof" ? t("proofDropActive") : t("dropActive");
});

document.addEventListener("dragleave", (event) => {
  const dropZone = event.target.closest("[data-drop-upload]");
  if (!dropZone || dropZone.contains(event.relatedTarget)) return;
  dropZone.classList.remove("drag-active");
  dropZone.querySelector("span").textContent = dropZone.dataset.dropUpload === "income-proof" ? t("proofDropHint") : t("dragDropHint");
});

document.addEventListener("drop", async (event) => {
  const dropZone = event.target.closest("[data-drop-upload]");
  if (!dropZone) return;
  event.preventDefault();
  dropZone.classList.remove("drag-active");
  dropZone.querySelector("span").textContent = dropZone.dataset.dropUpload === "income-proof" ? t("proofDropHint") : t("dragDropHint");
  const file = event.dataTransfer?.files?.[0];
  if (dropZone.dataset.dropUpload === "income-proof") {
    const form = dropZone.closest("form");
    const input = form?.elements?.proof_file;
    if (file && input) {
      const transfer = new DataTransfer();
      transfer.items.add(file);
      input.files = transfer.files;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
    return;
  }
  if (dropZone.dataset.dropUpload === "receipt-replace") {
    await replaceReceiptImage(file);
    return;
  }
  await uploadReceipt(file, false);
});

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form).entries());
  setBusy(true);
  try {
    if (form.matches("[data-intro-form]")) {
      const details = [
        data.name ? `Name: ${data.name}` : "",
        data.business_type ? `Work type: ${data.business_type}` : "",
        data.firm_name ? `Firm: ${data.firm_name}` : "",
        data.location ? `Location: ${data.location}` : "",
        data.language_preference ? `Preferred language: ${data.language_preference}` : "",
        data.services ? `Services: ${data.services}` : "",
        data.phone ? `Phone/WhatsApp: ${data.phone}` : "",
        data.message ? `Message: ${data.message}` : ""
      ].filter(Boolean).join("\n");
      try {
        await api("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            from_email: data.from_email || "",
            role: data.role || "Accountant introduction request",
            message: details
          })
        });
        form.reset();
        toast(mk("introSent"));
      } catch (error) {
        toast(mk("introPending"));
      }
      return;
    }
    if (form.id === "adminLoginForm") {
      const step = event.submitter?.value || "request";
      const adminEmail = ((data.admin_email || state.adminEmail || state.adminPendingEmail || "")).trim();
      if (!adminEmail) throw new Error("Enter admin email");
      if (step === "request") {
        await requestAdminCode(adminEmail);
        toast("Admin login code sent.");
      } else if (step === "verify") {
        await verifyAdminCode(adminEmail, data.code || "");
        toast("Admin signed in.");
      } else {
        await loadAdminUsers();
        toast("Users loaded.");
      }
      return render();
    }
    if (form.id === "adminSearchForm") {
      state.adminSearchDraft = data.admin_search || "";
      state.adminSearch = state.adminSearchDraft;
      return go("adminLanding");
    }
    if (form.matches("[data-admin-user-form]")) {
      await updateAdminUser(form.dataset.adminUserForm, data);
      toast("User updated.");
      await loadAdminUsers();
      return render();
    }
    if (form.id === "androidTesterForm") {
      try {
        const message = [
          "Founding Tester application",
          `Name: ${data.tester_name || ""}`,
          `Google Play Gmail: ${data.google_email || ""}`,
          `Contact email: ${data.contact_email || data.google_email || ""}`,
          `Business type: ${data.business_type || ""}`,
          `WhatsApp number: ${data.whatsapp_number || ""}`,
          "Agreed to 14 days: yes",
          "Agreed to feedback: yes",
          "Privacy/terms consent: yes"
        ].join("\n");
        await api("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            from_email: data.contact_email || data.google_email || null,
            role: "Founding Tester",
            message
          })
        });
        form.reset();
        toast(mk("messageSent"));
      } catch (error) {
        toast(mk("messagePending"));
      }
      return;
    }
    if (form.id === "landingContactForm" || form.id === "settingsFeedbackForm") {
      try {
        await api("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            from_email: data.from_email || state.user?.email || null,
            role: data.role || (form.id === "settingsFeedbackForm" ? "TidGo app settings feedback" : null),
            message: data.message || ""
          })
        });
        form.reset();
        toast(form.id === "settingsFeedbackForm" ? t("feedbackSent") : mk("messageSent"));
      } catch (error) {
        toast(form.id === "settingsFeedbackForm" ? t("feedbackFailed") : mk("messagePending"));
      }
      return;
    }
    if (form.id === "onboardingForm") {
      state.language = data.language || state.language;
      const email = (data.email || "").trim();
      if (!email) throw new Error(t("email"));
      if (data.legal_agree !== "on") throw new Error(t("legalConsentText"));
      await api("/api/users", {
        method: "POST",
        body: JSON.stringify({
          first_name: data.first_name,
          trade: data.trade || null,
          email,
          language: state.language,
          terms_accepted: true,
          privacy_accepted: true,
          legal_accepted: true,
          legal_version: "0.9"
        })
      });
      await api("/api/auth/recovery/request", { method: "POST", body: JSON.stringify({ email }) });
      state.pendingSignupEmail = email;
      state.pendingSignupWhatsApp = "";
      state.pendingSignupIncomeSources = formIncomeSources(data);
      write("rb_pending_signup_email", email);
      write("rb_pending_signup_whatsapp", state.pendingSignupWhatsApp);
      write("rb_pending_income_sources", state.pendingSignupIncomeSources);
      write("rb_language", state.language);
      write("rb_legal_agreed", "true");
      toast(t("codeSent"));
      return go("verifySignup");
    }
    if (form.id === "signupVerifyForm") {
      const submitter = event.submitter?.value;
      const email = (data.email || state.pendingSignupEmail || "").trim();
      if (!email) throw new Error(t("email"));
      if (submitter === "request") {
        await api("/api/auth/recovery/request", { method: "POST", body: JSON.stringify({ email }) });
        state.pendingSignupEmail = email;
        write("rb_pending_signup_email", email);
        return toast(t("codeSent"));
      }
      const user = await api("/api/auth/recovery/verify", { method: "POST", body: JSON.stringify({ email, code: data.code }) });
      const signupIncomeSources = cleanIncomeSources(state.pendingSignupIncomeSources || read("rb_pending_income_sources", []));
      const rememberedUser = {
        ...user,
        income_sources: signupIncomeSources
      };
      state.language = user.language || state.language;
      state.pendingSignupEmail = "";
      state.pendingSignupWhatsApp = "";
      state.pendingSignupIncomeSources = [];
      forget("rb_pending_signup_email");
      forget("rb_pending_signup_whatsapp");
      forget("rb_pending_income_sources");
      await rememberUser(rememberedUser);
      write("rb_language", state.language);
      await refresh();
      return go("home");
    }
    if (form.id === "recoveryForm") {
      const submitter = event.submitter?.value;
      if (submitter === "request") {
        await api("/api/auth/recovery/request", { method: "POST", body: JSON.stringify({ email: data.email }) });
        return toast(t("codeSentIfExists"));
      }
      if (submitter === "verify_whatsapp") {
        const user = await api("/api/recovery/whatsapp/verify", {
          method: "POST",
          body: JSON.stringify({ whatsapp_phone: data.whatsapp_phone, code: data.whatsapp_code })
        });
        state.language = user.language || state.language;
        await rememberUser(user);
        write("rb_language", state.language);
        await refresh();
        return go("home");
      }
      const user = await api("/api/auth/recovery/verify", { method: "POST", body: JSON.stringify({ email: data.email, code: data.code }) });
      state.language = user.language || state.language;
      await rememberUser(user);
      write("rb_language", state.language);
      await refresh();
      return go("home");
    }
    if (form.id === "legalConsentForm") {
      write("rb_legal_agreed", "true");
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "receiptForm") {
      const receipt = state.receipts.find((item) => item.id === state.selected) || {};
      const category = document.querySelector("[data-category].active")?.dataset.category || "other";
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount < 0) throw new Error(t("validAmount"));
      const receiptMeta = recordBusinessMeta(state.selected);
      const slot = businessSlotById(data.business_slot_id || receiptMeta.business_slot_id || receipt.business_slot_id, receiptMeta.business_type || receipt.business_type || defaultBusinessType());
      const updatedReceipt = await api(`/api/receipts/${state.selected}`, {
        method: "PATCH",
        body: JSON.stringify({
          amount,
          merchant: data.merchant || null,
          category,
          business_type: slot.type,
          business_slot_id: slot.id,
          business_slot_label: slot.label,
          date: data.date ? new Date(`${data.date}T12:00:00`).toISOString() : null,
          date_needs_review: false,
          needs_date_review: false,
          ocr_date_needs_review: false,
          date_confidence: 1,
          date_confirmed: true
        })
      });
      saveRecordBusinessMeta(state.selected, slot);
      rememberDateReviewConfirmed(state.selected);
      const localReceipt = replaceReceiptLocal(state.selected, clearDateReviewFields(updatedReceipt), {
        amount,
        merchant: data.merchant || "",
        category,
        business_type: slot.type,
        business_slot_id: slot.id,
        business_slot_label: slot.label,
        timestamp: data.date ? new Date(`${data.date}T12:00:00`).toISOString() : receipt.timestamp
      });
      focusSummaryOnRecord(localReceipt || clearDateReviewFields(updatedReceipt));
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "incomeCreateForm") {
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount <= 0) throw new Error(t("validAmount"));
      const slot = businessSlotById(state.pendingBusinessSlotId || defaultBusinessSlotId(), normalizeBusinessType(state.pendingBusinessType || defaultBusinessType()));
      const created = await api("/api/income", {
        method: "POST",
        body: JSON.stringify({
          user_id: state.user.id,
          amount,
          currency: data.currency,
          description: data.description || null,
          date: data.date ? new Date(`${data.date}T12:00:00`).toISOString() : null,
          business_type: slot.type,
          business_slot_id: slot.id,
          business_slot_label: slot.label
        })
      });
      saveRecordBusinessMeta(created.id, slot);
      const proof = incomeProofFile(form);
      if (proof && created?.id) {
        const preview = await imageThumbnailDataUrl(proof);
        saveIncomeMeta(created.id, incomeProofMeta(proof, data.description || "", preview));
      } else if (created?.id && data.description) {
        saveIncomeMeta(created.id, { description: data.description });
      }
      if (created?.id) {
        const localIncome = {
          ...created,
          amount,
          currency: data.currency,
          description: data.description || created.description || "",
          business_type: slot.type,
          business_slot_id: slot.id,
          business_slot_label: slot.label,
          timestamp: created.timestamp || created.created_at || (data.date ? new Date(`${data.date}T12:00:00`).toISOString() : new Date().toISOString())
        };
        state.income = attachIncomeProofs([...state.income.filter((item) => item.id !== created.id), localIncome]);
      }
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "incomeEditForm") {
      const entry = state.income.find((item) => item.id === state.selected) || {};
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount <= 0) throw new Error(t("validAmount"));
      const entryMeta = recordBusinessMeta(state.selected);
      const slot = businessSlotById(data.business_slot_id || entryMeta.business_slot_id || entry.business_slot_id, entryMeta.business_type || entry.business_type || defaultBusinessType());
      const updated = await api(`/api/income/${state.selected}`, {
        method: "PATCH",
        body: JSON.stringify({ amount, currency: data.currency, description: data.description || null, business_type: slot.type, business_slot_id: slot.id, business_slot_label: slot.label, date: data.date ? new Date(`${data.date}T12:00:00`).toISOString() : null })
      });
      saveRecordBusinessMeta(state.selected, slot);
      const proof = incomeProofFile(form);
      if (proof && state.selected) {
        const preview = await imageThumbnailDataUrl(proof);
        saveIncomeMeta(state.selected, incomeProofMeta(proof, data.description || "", preview));
      } else if (state.selected) {
        saveIncomeMeta(state.selected, { description: data.description || "" });
      }
      state.income = attachIncomeProofs(state.income.map((item) => item.id === state.selected ? {
        ...item,
        ...updated,
        amount,
        currency: data.currency,
        description: data.description || "",
        business_type: slot.type,
        business_slot_id: slot.id,
        business_slot_label: slot.label,
        timestamp: updated?.timestamp || item.timestamp
      } : item));
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "clientConnectionForm") {
      const accountantEmail = (data.accountant_email || "").trim();
      if (!accountantEmail) throw new Error(t("accountantEmail"));
      await api("/api/accountant/consents", {
        method: "POST",
        body: JSON.stringify({
          client_user_id: state.user.id,
          accountant_email: accountantEmail
        })
      });
      await refresh();
      toast(t("inviteCreated"));
      return render();
    }
    if (form.id === "accountantLoginForm") {
      state.language = data.language || state.language;
      write("rb_language", state.language);
      const step = event.submitter?.value || "request";
      const accountantEmail = ((data.accountant_email || state.accountantPortalEmail || state.accountantPendingEmail || "")).trim();
      if (!accountantEmail) throw new Error(at("accountantEmail"));
      const displayName = (data.display_name || "").trim();
      if (displayName) {
        state.accountantDisplayName = displayName;
        write("rb_accountant_display_name", displayName);
        await deviceSet("rb_accountant_display_name", displayName);
      }
      if (step === "request") {
        await requestAccountantCode(accountantEmail);
        toast("Login code sent.");
      } else if (step === "verify") {
        await verifyAccountantCode(accountantEmail, data.code || "");
        state.accountantClientListOpen = false;
        state.accountantClientSearch = "";
        toast("Signed in.");
      } else {
        await loadAccountantClients(accountantEmail);
        state.accountantClientListOpen = true;
        state.accountantClientSearch = "";
        toast("Clients loaded.");
      }
      return render();
    }
    if (form.id === "settingsForm") {
      state.language = data.language;
      state.humour = data.humour;
      const incomeSources = formIncomeSources(data);
      const businessSlots = cleanBusinessSlots(formBusinessSlots(data), { ...state.user, income_sources: incomeSources, trade: data.trade || state.user.trade || "" });
      const patchBody = {
        first_name: data.first_name,
        trade: data.trade || null,
        language: state.language,
        notification_preference: data.notification_preference || "none",
        income_sources: incomeSources,
        business_slots: businessSlots
      };
      const user = await api(`/api/users/${state.user.id}`, {
        method: "PATCH",
        body: JSON.stringify(patchBody)
      });
      await rememberUser({
        ...state.user,
        ...user,
        whatsapp_phone: user.whatsapp_phone || state.user.whatsapp_phone || "",
        whatsapp_phone_normalized: user.whatsapp_phone_normalized || state.user.whatsapp_phone_normalized || "",
        whatsapp_linked_at: user.whatsapp_linked_at || state.user.whatsapp_linked_at || "",
        notification_preference: user.notification_preference || data.notification_preference || "none",
        income_sources: incomeSources,
        business_slots: businessSlots
      });
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

expensePhotoPicker?.addEventListener("change", (event) => uploadReceipt(event.target.files?.[0], false));
expenseFilePicker?.addEventListener("change", (event) => uploadReceipt(event.target.files?.[0], false));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(() => {});
}

window.addEventListener("popstate", (event) => {
  applyRoute(event.state || { screen: state.user ? "home" : "onboarding" });
});

(async function boot() {
  showSplash();
  if (isFastPublicScreen()) {
    history.replaceState(routeState(), "", location.pathname + location.search);
    render();
    return;
  }
  await restoreDeviceUser();
  if (isAccountantRoute()) await restoreAccountantSession();
  if (isAccountantRoute() && state.accountantPortalEmail) {
    try {
      await loadAccountantClients(state.accountantPortalEmail);
    } catch {
      state.accountantClients = [];
    }
  }
  if (state.screen === "boot") {
    state.screen = state.user ? "home" : "onboarding";
  }
  if (state.user?.id && !isAccountantRoute()) {
    state.recordsLoading = true;
  }
  history.replaceState(routeState(), "", location.pathname + location.search);
  render();
  if (state.user?.id && !isAccountantRoute()) {
    refresh().then(render).catch(() => {});
  }
})();

