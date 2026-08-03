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
  ro: "Română",
  uk: "Українська",
  lt: "Lietuvių",
  lv: "Latviešu",
  es: "Español",
  bg: "Български"
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
    navHow: "How it works", navWho: "Who is it for?", navStory: "Founder story", navIntake: "How intake works", navFindAccountant: "Find an accountant", navAccountantPack: "Show your accountant", navPricing: "Launch & pricing", navFaq: "FAQ", navMtd: "MTD Learning Centre", navContact: "Contact",
    heroEyebrow: "Receipts in. Tidy records out.", heroTitle: "One simple place for receipts.", heroText: "For self-employed people who need records tidy, and accountants who would rather not chase plastic bags full of receipts.",
    stepSnap: "Snap receipts", stepTidy: "Keep records tidy", stepPack: "Send a clean pack",
    trustSimple: "No complicated registration. Just email sign-in.",
    trustControl: "Your records stay under your control.",
    trustEarly: "Free during early access.",
    earlyTitle: "Early access:", earlyText: "TidGo is live for a small group of early users. It is free while we collect feedback, improve the app and add clearer guides for self-employed people and accountants.",
    pricingTitle: "Launch & pricing:", pricingText: "Official launch date: to be announced after early-access testing. TidGo is free during early access. If paid plans are introduced, users will be told clearly in advance and will always be able to export or delete their records.",
    mtdTitle: "MTD records without the accounting chaos", mtdLead: "The first step in Making Tax Digital is not sending receipt photos to HMRC. It is keeping your income, expenses and proof in digital form.", mtdText: "TidGo does not replace your accountant and does not submit your tax returns. It helps you keep receipts, income proof and summaries in one tidy place, so you or your accountant can prepare the quarterly summary without the last-minute scramble.", faqTitle: "FAQ:", faqText: "More answers are coming soon. For now, try the app, open the accountant portal, or send a message below.",
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
    navHow: "Jak to działa", navWho: "Dla kogo?", navStory: "Historia twórcy", navIntake: "Jak dodawać dokumenty", navFindAccountant: "Znajdź księgowego", navAccountantPack: "Pokaż księgowemu", navPricing: "Start i ceny", navFaq: "FAQ", navMtd: "Centrum wiedzy MTD", navContact: "Kontakt",
    heroEyebrow: "Paragony wchodzą. Porządek wychodzi.", heroTitle: "Jedno proste miejsce na paragony.", heroText: "Dla self-employed, którzy chcą mieć rekordy w porządku, i dla księgowych, którzy nie chcą gonitwy za reklamówką paragonów.",
    stepSnap: "Zrób zdjęcie", stepTidy: "Trzymaj porządek", stepPack: "Wyślij czystą paczkę",
    trustSimple: "Bez skomplikowanej rejestracji. Tylko logowanie emailem.",
    trustControl: "Twoje rekordy zostają pod Twoją kontrolą.",
    trustEarly: "Darmowe w trakcie early access.",
    earlyTitle: "Early access:", earlyText: "TidGo działa dla małej grupy pierwszych użytkowników. Teraz jest darmowe, zbieramy feedback, poprawiamy aplikację i dopisujemy jasne instrukcje.",
    pricingTitle: "Start i ceny:", pricingText: "Oficjalna data startu będzie ogłoszona po testach early access. TidGo jest darmowe w trakcie early access. Jeśli wprowadzimy płatne plany, użytkownicy dostaną jasną informację z wyprzedzeniem i zawsze będą mogli wyeksportować albo usunąć swoje rekordy.",
    mtdTitle: "Rekordy MTD bez chaosu księgowego", mtdLead: "Pierwszy krok w Making Tax Digital to nie wysyłanie zdjęć paragonów do HMRC. To trzymanie przychodów, wydatków i dowodów w cyfrowej formie.", mtdText: "TidGo nie zastępuje księgowego i nie wysyła Twoich deklaracji podatkowych. Pomaga trzymać paragony, dowody przychodu i podsumowania w jednym uporządkowanym miejscu, żeby Ty albo księgowy mogli przygotować kwartalne summary bez paniki na ostatnią chwilę.", faqTitle: "FAQ:", faqText: "Więcej odpowiedzi wkrótce. Na razie zobacz aplikację, portal księgowego albo wyślij wiadomość poniżej.",
    contactTitle: "Chcesz przetestować albo zapytać?", contactText: "Wyślij krótką wiadomość. Bez lejka sprzedażowego, normalna odpowiedź od człowieka.", yourEmail: "Twój email", roleSelf: "Pracuję na siebie", roleAccountant: "Jestem księgowym", roleCurious: "Tylko sprawdzam", message: "Wiadomość", sendMessage: "Wyślij wiadomość", messageSent: "Wiadomość wysłana. Dziękuję.", messagePending: "Automatyczny kontakt jest podpinany. Spróbuj po następnym deployu API.",
    selfLabel: "Pracuję na siebie", selfTitle: "Otwórz aplikację TidGo", selfText: "Rób zdjęcia paragonów, dodawaj przychody i trzymaj miesięczne rekordy gotowe dla księgowego.", scanApp: "Skanuj app", openApp: "Otwórz app",
    accountantLabel: "Jestem księgowym", accountantTitle: "Otwórz portal księgowego", accountantText: "Zobacz rekordy klientów, pobierz CSV/PDF i ogranicz panikę przed terminem.", scanPortal: "Skanuj portal", openPortal: "Otwórz portal księgowego", viewDemo: "Zobacz szybkie demo",
    footer: "TidGo pomaga porządkować rekordy. To nie jest księgowość, porada podatkowa ani payroll.", companyFooter: "TidGo Ltd. Company number 17356146. 128 City Road, London, EC1V 2NX. hello@tidgo.co.uk", home: "Start", appDemo: "Demo app", accountantDemo: "Demo księgowego", deleteAccountLink: "Usuń konto", backHome: "Wróć na stronę główną", step: "Krok", foundingTester: "Zostań Founding Tester", testerCalloutTitle: "Chcesz pomóc dopracować TidGo?", testerCalloutText: "Dołącz do zamkniętych testów Androida, używaj aplikacji przez co najmniej 14 dni i wyślij szczery feedback. Nie wymagamy pozytywnej opinii.", testerCalloutButton: "Zostań testerem Androida", findAccountantTitle: "Znajdź księgowego, który rozumie uporządkowane cyfrowe rekordy", findAccountantText: "TidGo buduje małą listę kontaktową dla self-employed, landlordów, CIS workers, księgowych i bookkeeperów. Na razie bez publicznego rankingu. Napisz, czego potrzebujesz, a spróbujemy sensownie połączyć strony.", needAccountantTitle: "Szukam księgowego lub bookkeepera", needAccountantText: "Napisz, gdzie jesteś, czym się zajmujesz i w jakim języku wolisz rozmawiać. TidGo może pomóc w kontakcie, ale nie świadczy usług księgowych i nie gwarantuje usług firm trzecich.", accountantJoinTitle: "Jestem księgowym albo bookkeeperem", accountantJoinText: "Dołącz do wczesnej listy TidGo. Szukamy osób, które pomagają przy Self Assessment, CIS, landlordach, rekordach MTD i prostej księgowości.", yourName: "Imię i nazwisko", businessType: "Rodzaj pracy lub firmy", location: "Miasto lub okolica", preferredLanguage: "Preferowany język", phoneOptional: "Telefon lub WhatsApp (opcjonalnie)", accountantFirm: "Nazwa firmy", servicesOffered: "Usługi", submitIntroRequest: "Wyślij zgłoszenie", introSent: "Zgłoszenie wysłane. Dziękuję.", introPending: "Nie udało się wysłać. Napisz proszę na hello@tidgo.co.uk.", introDisclaimer: "TidGo może pomagać w kontaktach, ale nie jest księgowym, doradcą podatkowym ani brokerem. Sam wybierasz i sprawdzasz księgowego.",
    trySafe: "Sprawdź bez stresu: zrób zdjęcie, zobacz wynik, pobierz summary i usuń konto/dane w dowolnym momencie w ustawieniach.",
    appDemoKind: "Dla self-employed", appDemoTitle: "Zobacz flow paragonu bez logowania.", appDemoText: "TidGo opiera się na jednym prostym nawyku: zrób zdjęcie teraz, wyślij czystszą paczkę później.",
    accountantDemoKind: "Dla księgowych", accountantDemoTitle: "Zobacz przekazanie klienta bez logowania.", accountantDemoText: "Portal księgowego jest tylko do odczytu. Klient trzyma rekordy w porządku, a ty dostajesz czystszą paczkę do pracy.",
    demoHomeScreen: "Start", demoHomeTitle: "Prosty ekran główny", demoHomeText: "Najważniejsze akcje są od razu widoczne: wydatek, przychód, koszt dla klienta i monthly summary.",
    demoReceiptScreen: "Zdjęcie paragonu", demoReceiptTitle: "Zrób zdjęcie paragonu", demoReceiptText: "Zrób albo wgraj zdjęcie. TidGo potwierdza, że paragon został odebrany.", demoReceiptCallout: "Przyjazne potwierdzenie po odebraniu paragonu.",
    demoDetailsScreen: "Sprawdź dane", demoDetailsTitle: "Sprawdź przed zapisem", demoDetailsText: "Możesz poprawić kwotę, kategorię, walutę albo sklep przed zapisaniem.",
    demoSummaryScreen: "Podsumowanie", demoSummaryTitle: "Wyślij paczkę", demoSummaryText: "Przychody, wydatki i koszty dla klienta są pogrupowane według waluty i gotowe dla księgowego.",
    demoAccessScreen: "Dostęp księgowego", demoAccessTitle: "Logowanie emailem księgowego", demoAccessText: "Portal używa kodu email, a potem pokazuje połączone konto księgowego na tym urządzeniu.",
    demoClientsScreen: "Lista klientów", demoClientsTitle: "Zobacz połączonych klientów", demoClientsText: "Na liście są tylko klienci, którzy dali zgodę. Każdego klienta otwierasz z prostego widoku.",
    demoRecordsScreen: "Rekordy klienta", demoRecordsTitle: "Pobierz paczkę klienta", demoRecordsText: "Otwórz klienta, sprawdź sumy, poproś o brakujące dokumenty i pobierz CSV lub PDF."
  }
};
MARKETING_COPY.ro = { ...MARKETING_COPY.en,
  navHow: "Cum functioneaza", navWho: "Pentru cine?", navStory: "Povestea fondatorului", navFindAccountant: "Gaseste un contabil", navPricing: "Lansare si pret", navFaq: "FAQ", navMtd: "Centrul MTD", navContact: "Contact",
  navIntake: "Cum adaugi documente", navAccountantPack: "Arata contabilului",
  heroEyebrow: "Bonuri inauntru. Evidente ordonate afara.", heroTitle: "Un loc simplu pentru bonuri.", heroText: "Pentru persoane self-employed care vor evidente ordonate si contabili care nu vor sa alerge dupa pungi cu bonuri.",
  stepSnap: "Fotografiaza bonuri", stepTidy: "Tine evidenta ordonata", stepPack: "Trimite pachetul curat",
  trustSimple: "Fara inregistrare complicata. Doar login cu email.",
  trustControl: "Evidentele raman sub controlul tau.",
  trustEarly: "Gratuit in early access.",
  earlyTitle: "Acces timpuriu:", earlyText: "TidGo este live pentru un grup mic de utilizatori. Este gratuit cat timp strangem feedback, imbunatatim aplicatia si adaugam ghiduri clare.",
  pricingTitle: "Lansare si pret:", pricingText: "Data lansarii oficiale va fi anuntata dupa testele early access. TidGo este gratuit in perioada de testare. Daca apar planuri platite, utilizatorii vor fi anuntati clar din timp si vor putea mereu exporta sau sterge inregistrarile.",
  mtdTitle: "Evidente MTD fara haos contabil", mtdLead: "Primul pas in Making Tax Digital nu este trimiterea pozelor cu bonuri la HMRC. Este pastrarea veniturilor, cheltuielilor si dovezilor in format digital.", mtdText: "TidGo nu inlocuieste contabilul si nu trimite declaratiile tale fiscale. Te ajuta sa pastrezi bonuri, dovezi de venit si rezumate intr-un singur loc ordonat, ca tu sau contabilul tau sa pregatiti sumarul trimestrial fara panica de ultim moment.", faqTitle: "FAQ:", faqText: "Mai multe raspunsuri vin curand. Deocamdata poti incerca aplicatia, portalul contabilului sau trimite un mesaj.",
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
  navHow: "Kaip veikia", navWho: "Kam skirta?", navStory: "Kūrėjo istorija", navFindAccountant: "Rasti buhalterį", navPricing: "Startas ir kaina", navFaq: "DUK", navMtd: "MTD žinių centras", navContact: "Kontaktai",
  navIntake: "Kaip prideti dokumentus", navAccountantPack: "Parodyti buhalteriui",
  heroEyebrow: "Kvitai vidun. Tvarkingi irasai lauk.", heroTitle: "Viena paprasta vieta kvitams.", heroText: "Dirbantiems sau, kuriems reikia tvarkingu irasu, ir buhalteriams, kurie nenori gaudyti maisu su kvitais.",
  stepSnap: "Nufotografuok kvita", stepTidy: "Laikyk irasus tvarkingai", stepPack: "Issiusk tvarkinga paketa",
  trustSimple: "Jokios sudetingos registracijos. Tik prisijungimas el. pastu.",
  trustControl: "Jusu irasai lieka jusu kontroleje.",
  trustEarly: "Nemokama early access metu.",
  earlyTitle: "Ankstyva prieiga:", earlyText: "TidGo jau veikia mazai pirmuju vartotoju grupei. Dabar programa nemokama, kol renkame atsiliepimus, taisome detales ir rengiame paprastus paaiskinimus.",
  pricingTitle: "Startas ir kaina:", pricingText: "Oficiali starto data bus paskelbta po ankstyvos prieigos testu. TidGo dabar nemokama. Jei bus ivesti mokami planai, vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus.",
  mtdTitle: "MTD irasai be buhalterinio chaoso", mtdLead: "Pirmas Making Tax Digital zingsnis nera kvitu nuotrauku siuntimas HMRC. Tai pajamu, islaidu ir irodymu laikymas skaitmenine forma.", mtdText: "TidGo nepakeicia buhalterio ir neteikia jusu mokesciu deklaraciju. Jis padeda laikyti kvitus, pajamu irodymus ir suvestines vienoje tvarkingoje vietoje, kad jus arba buhalteris galetumete paruosti ketvircio suvestine be paskutines minutes panikos.", faqTitle: "DUK:", faqText: "Daugiau atsakymu bus greitai. Kol kas galite isbandyti programa, buhalterio portala arba parasyti zinute.",
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
  mtdIntro: "MTD guides are being written as short, practical pages.",
  mtdWhat: "What is MTD?",
  mtdWho: "Who needs MTD?",
  mtdWhen: "When does MTD start?",
  mtdRecords: "What records do I need?",
  mtdPaper: "What if I still keep paper receipts?",
  mtdPhotos: "Can I use photos?",
  mtdSubmit: "Does TidGo submit to HMRC?",
  mtdAccountant: "Do I still need an accountant?",
  mtdGettingStarted: "Getting started with MTD",
  mtdSoleTraders: "MTD for sole traders",
  mtdLandlords: "MTD for landlords",
  mtdCis: "MTD for CIS workers",
  mtdDigitalRecords: "Digital records",
  mtdQuarterlyUpdates: "Quarterly updates",
  mtdFaqs: "MTD FAQs",
  mtdWhatText: "Making Tax Digital is HMRC's move toward keeping tax records digitally and using approved software for parts of the tax process.",
  mtdWhoText: "It can affect self-employed people and landlords in the UK, depending on income level and start dates. Check HMRC or your accountant for your exact case.",
  mtdWhenText: "MTD rules are being introduced in stages. The important habit is simple: start keeping records digitally before the deadline panic arrives.",
  mtdRecordsText: "You should keep clear digital records of income, expenses and proof such as receipts or invoices. GOV.UK says self-employed records are normally kept for at least 5 years after the 31 January deadline for that tax year.",
  mtdPaperText: "Paper receipts may still exist, but once MTD applies to you, relying only on a bag of paper is not a good plan. Photos and digital records make handoff easier.",
  mtdPhotosText: "Photos can help create a digital record. TidGo stores receipt photos with the basic details so you can review them and share a cleaner pack.",
  mtdSubmitText: "No. TidGo does not submit returns to HMRC. It helps prepare and organise records before they go to you, your accountant or other software.",
  mtdAccountantText: "Usually yes. TidGo is not tax advice or accounting software. It helps you keep records ready so your accountant has less chaos to fix.",
  mtdGettingStartedText: "Start with the first practical layer: keep income, expenses and supporting documents in digital form before the quarterly deadline pressure arrives.",
  mtdSoleTradersText: "For sole traders, MTD starts with clear digital records for self-employment income and expenses, not with complicated dashboards.",
  mtdLandlordsText: "Landlords need a simple way to keep property income, expenses and proof together, especially when receipts arrive by email or WhatsApp.",
  mtdCisText: "CIS workers often have fuel, tools, materials, remittance notices and scattered proof. TidGo is built for that kind of messy record flow.",
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
  copyright: "© 2026 TidGo. All rights reserved."
});

Object.assign(MARKETING_COPY.pl, {
  howTitle: "TidGo jest mostem między zapracowanymi ludźmi a porządnymi rekordami gotowymi do księgowości.",
  howText: "Self-employed robi zdjęcia paragonów przez miesiąc. Księgowy dostaje czytelniejszy podgląd tylko do odczytu, kiedy klient da zgodę.",
  whoTitle: "Dwie proste drogi.",
  whoText: "Otwórz aplikację, jeśli pracujesz na siebie. Otwórz portal księgowego, jeśli pomagasz klientom trzymać rekordy bez paniki z reklamówką.",
  scopeFitTitle: "Dobre dopasowanie",
  scopeFitText: "Proste rekordy self-employed, landlord, CIS i dodatkowego dochodu: paragony, dowody przychodu i czytelne podsumowania.",
  scopeNotForTitle: "Nie do tego",
  scopeNotForText: "VAT returns, konta LTD/company accounts, payroll, corporation tax ani pełne procesy księgowe.",
  mtdIntro: "Poradniki MTD będą krótkimi, praktycznymi stronami.",
  mtdWhat: "Co to jest MTD?",
  mtdWho: "Kogo dotyczy MTD?",
  mtdWhen: "Kiedy startuje MTD?",
  mtdRecords: "Jakie rekordy trzeba mieć?",
  mtdPaper: "Co jeśli dalej mam papierowe paragony?",
  mtdPhotos: "Czy mogę używać zdjęć?",
  mtdSubmit: "Czy TidGo wysyła do HMRC?",
  mtdAccountant: "Czy dalej potrzebuję księgowego?",
  mtdWhatText: "Making Tax Digital to przechodzenie HMRC na cyfrowe rekordy i używanie odpowiedniego oprogramowania w części procesu podatkowego.",
  mtdWhoText: "Może dotyczyć self-employed i landlordów w UK, zależnie od poziomu przychodu i dat wejścia zasad. Dokładny przypadek sprawdź z HMRC albo księgowym.",
  mtdWhenText: "Zasady MTD wchodzą etapami. Najważniejszy nawyk jest prosty: zacznij trzymać rekordy cyfrowo zanim przyjdzie panika przed terminem.",
  mtdRecordsText: "Trzymaj jasne cyfrowe rekordy przychodów, wydatków i dowody: paragony albo faktury. GOV.UK podaje, że self-employed zwykle trzyma rekordy co najmniej 5 lat po terminie 31 stycznia dla danego roku podatkowego.",
  mtdPaperText: "Papierowe paragony mogą dalej istnieć, ale sama reklamówka papieru to słaby plan. Zdjęcia i cyfrowe rekordy ułatwiają przekazanie danych.",
  mtdPhotosText: "Zdjęcia pomagają stworzyć cyfrowy rekord. TidGo przechowuje zdjęcia paragonów z podstawowymi danymi, żebyś mógł je sprawdzić i wysłać czystszą paczkę.",
  mtdSubmitText: "Nie. TidGo nie wysyła deklaracji do HMRC. Pomaga przygotować i uporządkować rekordy przed przekazaniem ich Tobie, księgowemu albo innemu programowi.",
  mtdAccountantText: "Zwykle tak. TidGo nie jest poradą podatkową ani pełną księgowością. Pomaga trzymać rekordy gotowe, żeby księgowy miał mniej chaosu do ratowania.",
  mtdGettingStarted: "Pierwsze kroki z MTD",
  mtdSoleTraders: "MTD dla sole traders",
  mtdLandlords: "MTD dla landlordów",
  mtdCis: "MTD dla CIS workers",
  mtdDigitalRecords: "Cyfrowe rekordy",
  mtdQuarterlyUpdates: "Quarterly updates",
  mtdFaqs: "FAQ MTD",
  mtdGettingStartedText: "Zacznij od praktycznej podstawy: przychody, wydatki i dowody w cyfrowej formie zanim przyjdzie presja terminu.",
  mtdSoleTradersText: "Dla sole traderów MTD zaczyna się od jasnych cyfrowych rekordów przychodów i kosztów, nie od skomplikowanych dashboardów.",
  mtdLandlordsText: "Landlord potrzebuje prostego sposobu na trzymanie przychodów z najmu, kosztów i dowodów w jednym miejscu.",
  mtdCisText: "CIS workers często mają paliwo, narzędzia, materiały, remittance notices i rozrzucone dowody. TidGo pasuje do takiego chaosu.",
  mtdDigitalRecordsText: "Cyfrowe rekordy to fundament: daty, kwoty, kategorie i dowody zapisane tak, żeby można było je sprawdzić i wysłać.",
  mtdQuarterlyUpdatesText: "Quarterly updates to podsumowania przychodów i wydatków. To nie są pełne tax returns, ale rekordy za nimi muszą być uporządkowane.",
  mtdFaqsText: "Krótkie odpowiedzi na pytania, które ludzie realnie zadają przed rozmową z HMRC, księgowym albo software providerem.",
  mtdGettingStartedDetail: "Making Tax Digital dla Income Tax wchodzi etapami dla sole traderów i landlordów. Pierwszy praktyczny krok to nie kupowanie ogromnego programu księgowego w panice, tylko trzymanie przychodów, wydatków i dowodów cyfrowo, możliwie blisko daty transakcji.",
  mtdSoleTradersDetail: "Jeśli jesteś sole traderem, praktyczna rutyna MTD zaczyna się od zwykłych nawyków: zapisuj paragony, trzymaj dowody przychodu, sprawdzaj daty i kwoty oraz miej wszystko gotowe dla księgowego albo software zgodnego z MTD.",
  mtdLandlordsDetail: "Dla landlordów MTD może obejmować property income i property expenses. Praktyczny problem to często nie teoria podatkowa, tylko faktury, naprawy, agent statements i paragony w jednym miejscu.",
  mtdCisDetail: "CIS workers często zbierają dowody z vana, budowy, telefonu, maila i WhatsAppa. TidGo ma być prostym wejściem dla takich dokumentów zanim staną się problemem przed terminem.",
  mtdDigitalRecordsDetail: "Według HMRC cyfrowe rekordy służą do tworzenia kwartalnych totalów. Dobry rekord to nie przypadkowa fotka w galerii: potrzebuje daty, kwoty, kategorii i dowodu, który da się później znaleźć.",
  mtdQuarterlyUpdatesDetail: "HMRC opisuje quarterly updates jako podsumowania przychodów i wydatków dla każdej działalności self-employment albo property business. TidGo nie wysyła ich do HMRC, ale pomaga przygotować rekordy i summary dla księgowego albo kompatybilnego software.",
  mtdFaqsDetail: "Krótko: TidGo pomaga z cyfrowymi rekordami i przekazaniem księgowemu. Nie wysyła do HMRC, nie zastępuje księgowego i nie obsługuje VAT, payroll, LTD accounts ani corporation tax.",
  faqBuildTitle: "Prawdziwe pytania robią lepsze FAQ.",
  faqBuildText: "Wyślij nam, co jest niejasne: start, paragony, PDF, dostęp księgowego, MTD, cokolwiek. Budujemy FAQ z prawdziwych pytań, nie z firmowej mgły.",
  launchTabTitle: "Start i ceny",
  launchTabText: "TidGo jest w early access i jest darmowe podczas testów z prawdziwymi użytkownikami. Płatne plany są spodziewane później, z jasną informacją przed zmianami.",
  launchPricingFullText: "TidGo jest w early access dla małej grupy prawdziwych użytkowników. Jest darmowe, kiedy zbieramy feedback, poprawiamy aplikację i przygotowujemy jaśniejsze poradniki. Jeśli wprowadzimy płatne plany, użytkownicy dostaną jasną informację z wyprzedzeniem i zawsze będą mogli wyeksportować albo usunąć swoje rekordy.",
  intakeTitle: "Jak działa dodawanie dokumentów",
  intakeText: "TidGo rozpoznaje Cię po zarejestrowanym adresie email i podłączonym numerze WhatsApp. Nie musisz pamiętać żadnego specjalnego osobistego adresu.",
  intakeWhatsAppTitle: "WhatsApp intake",
  intakeWhatsAppText: "Podłącz numer WhatsApp w TidGo, a potem sam rozpocznij rozmowę wysyłając gotową wiadomość LINK. Po tym zdjęcia paragonów z tego numeru mogą być dopasowane do Twojego konta. Nieznane numery nie są przypisywane do kont.",
  intakeEmailTitle: "Email intake",
  intakeEmailText: "Przekaż dokumenty z tego samego adresu email, którego używasz w TidGo, na intake@tidgo.co.uk. W temacie wpisz expense albo income, jeśli chcesz pomóc TidGo szybciej to przypisać.",
  intakeFutureTitle: "Później: osobiste adresy intake",
  intakeFutureText: "Unikalne osobiste adresy intake są w roadmapie. Na teraz TidGo używa zarejestrowanego adresu nadawcy i podłączonego numeru WhatsApp.",
  notDoTitle: "Czego TidGo nie robi",
  notDoText: "TidGo nie wysyła danych do HMRC, nie zastępuje księgowego i nie obsługuje VAT returns, kont LTD, payroll ani corporation tax.",
  faqHmrcTitle: "Czy TidGo wysyła do HMRC?",
  faqHmrcText: "Nie. Tak jest celowo. TidGo pomaga trzymać cyfrowe rekordy w porządku, zanim trafią do księgowego albo programu zgodnego z MTD.",
  faqSoftwareTitle: "Czy mogę używać TidGo z FreeAgent, Xero albo QuickBooks?",
  faqSoftwareText: "Tak. TidGo jest przed tymi narzędziami. Zbieraj w nim paragony, maile, zdjęcia z WhatsAppa i dowody przychodu, a potem eksportuj albo udostępnij czystszą paczkę.",
  faqMettleTitle: "Dlaczego nie darmowy FreeAgent przez Mettle?",
  faqMettleText: "Jeśli to działa dla Ciebie, świetnie. TidGo jest dla ludzi, którzy potrzebują jeszcze prostszego wejścia dla chaotycznych paragonów, WhatsAppa, maili i przekazania księgowemu.",
  accountantShareTitle: "Pokaż to księgowemu",
  accountantShareText: "Użyj tej krótkiej wiadomości, jeśli chcesz, żeby księgowy albo zaufany bookkeeper zrozumiał TidGo zanim go podłączysz.",
  accountantMessageTitle: "Wiadomość do skopiowania",
  accountantMessageText: "Cześć, testuję TidGo do trzymania paragonów i dowodów przychodu w jednym miejscu. Jest tam portal księgowego tylko do odczytu, więc jeśli podłączę Twój email, możesz zobaczyć moje rekordy i pobrać PDF/CSV pack, ale nie możesz zmieniać moich danych. Demo portalu: https://tidgo.co.uk/accountant-demo",
  accountantDemoPackTitle: "Co księgowy widzi",
  accountantDemoPackText: "Tylko rekordy, na które dasz zgodę: zdjęcia paragonów, dowody przychodu, podsumowania miesięczne/kwartalne i eksporty. Dostęp jest tylko do odczytu i można go cofnąć.",
  platformNow: "Użyj web app teraz.",
  platformSoon: "Wersje Android i iOS są rozwijane równolegle z TidGo.",
  socialTitle: "Obserwuj nas",
  privacyNote: "Bez cookie-labiryntu: TidGo używa tylko danych potrzebnych do działania aplikacji. Podstawowa analityka działa tylko po zgodzie. Nie sprzedajemy danych użytkowników.",
  copyright: "© 2026 TidGo. Wszelkie prawa zastrzeżone."
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
  copyright: "© 2026 TidGo. Toate drepturile rezervate."
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
  copyright: "© 2026 TidGo. Visos teises saugomos."
});

Object.assign(MARKETING_COPY.en, {
  heroTitle: "If you can use WhatsApp, you can use TidGo.",
  heroText: "Send receipt photos, forward CIS payslips, or type a quick income amount. TidGo keeps your records tidy, flags what needs checking, and prepares a clean handoff for your accountant.",
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
  shareTidGo: "Share TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo keeps receipts, income proof and simple records tidy for self-employed people and accountants.",
  shareCopied: "TidGo link copied.",
  mtdTestingTitle: "MTD connection testing",
  mtdTestingText: "TidGo helps you keep digital records and quarter-ready summaries for your accountant's MTD workflow. It does not submit tax returns to HMRC yet.",
  mtdLateTitle: "Missed a quarterly update?",
  mtdLateText: "HMRC guidance says quarterly updates use cumulative totals. A later update can include earlier-quarter figures, but a missed deadline can still create a penalty point. TidGo's job is to help get the records tidy again before the next handoff.",
  mtdSourceTitle: "Official source",
  mtdSourceText: "Source: HMRC Developer Hub, Income Tax MTD end-to-end service guide for quarterly updates and cumulative obligations.",
  launchPricingFullText: "TidGo is in early access for a small group of real users. It is free while we collect feedback, improve the app and prepare clearer guides. Users will be told clearly in advance and will always be able to export or delete their records.",
  pricingText: "TidGo is free during early access. If paid plans are introduced, users will be told clearly in advance and will always be able to export or delete their records."
});

Object.assign(MARKETING_COPY.pl, {
  heroTitle: "Jeśli umiesz używać WhatsAppa, umiesz używać TidGo.",
  heroText: "Wyślij zdjęcie paragonu, przekaż CIS payslip albo wpisz szybką kwotę przychodu. TidGo trzyma rekordy w porządku, pokazuje co trzeba sprawdzić i szykuje czystą paczkę dla księgowego.",
  stepSnap: "Wyślij po swojemu",
  stepTidy: "Sprawdź co wymaga uwagi",
  stepPack: "Przekaż porządne rekordy",
  trustSimple: "Bez konta firmowego w banku.",
  trustControl: "Bez podłączania banku.",
  trustEarly: "Bez nauki programu księgowego.",
  whatsNewTitle: "Co nowego w TidGo",
  whatsNewBadge: "Nowe",
  whatsNewIntake: "WhatsApp receipt intake już działa: wysyłaj zdjęcia paragonów do TidGo bez otwierania aplikacji. Email intake też jest dostępny.",
  whatsNewMtd: "TidGo pomaga trzymać cyfrowe rekordy gotowe do kwartalnego workflow MTD u księgowego. TidGo jeszcze nie wysyła danych do HMRC.",
  whatsNewCta: "Zobacz więcej po zalogowaniu.",
  cisTitle: "Także pod dokumenty CIS",
  cisText: "Przekazuj payslipy, remittance notes i dowody przychodu. W razie potrzeby wpisz kwotę ręcznie, trzymaj dokument podpięty i daj księgowemu porządne rekordy po angielsku.",
  simpleValueTitle: "Bez nadmuchanego kombajnu księgowego",
  simpleValueText: "TidGo skupia się na pracy, której małe firmy naprawdę potrzebują: paragony, dowody przychodu, porządne summary i przekazanie księgowemu. Bez wykresów dla samych wykresów. Bez płacenia za funkcje, których nigdy nie otwierasz.",
  selfText: "Wysyłaj zdjęcia paragonów, zapisuj przychód i podpinaj dokumenty CIS, kiedy je masz. TidGo trzyma wszystko w porządku dla księgowego: miesięcznie albo kwartalnie.",
  accountantText: "Zobacz rekordy klienta za jego zgodą, sprawdź co wymaga uwagi i pobierz czytelny angielski CSV/PDF pack bez gonienia za reklamówkami paragonów przed terminem.",
  howTitle: "Ty ogarniasz WhatsAppa. Księgowy ogarnia MTD.",
  howText: "Wysyłaj paragony i informacje o przychodzie tak, jak już wysyłasz wiadomości. TidGo układa wszystko w czytelne angielskie rekordy do kwartalnego sprawdzenia przez księgowego.",
  shareTidGo: "Udostępnij TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo trzyma paragony, dowody przychodu i proste rekordy w porządku dla self-employed i księgowych.",
  shareCopied: "Link TidGo skopiowany.",
  mtdTestingTitle: "Testy połączenia MTD",
  mtdTestingText: "TidGo pomaga trzymać cyfrowe rekordy i kwartalne podsumowania dla workflow MTD u księgowego. Jeszcze nie wysyła deklaracji do HMRC.",
  mtdLateTitle: "Termin kwartalnego update'u już minął?",
  mtdLateText: "Według HMRC quarterly updates używają sum narastających. Późniejszy update może objąć dane z wcześniejszego kwartału, ale spóźniony termin nadal może oznaczać penalty point. Zadaniem TidGo jest pomóc szybko uporządkować rekordy przed następnym przekazaniem.",
  mtdSourceTitle: "Oficjalne źródło",
  mtdSourceText: "Źródło: HMRC Developer Hub, Income Tax MTD end-to-end service guide dotyczący quarterly updates i sum narastających.",
  launchPricingFullText: "TidGo jest w early access dla małej grupy prawdziwych użytkowników. Jest darmowe, kiedy zbieramy feedback, poprawiamy aplikację i przygotowujemy jaśniejsze poradniki. Użytkownicy dostaną jasną informację z wyprzedzeniem i zawsze będą mogli wyeksportować albo usunąć swoje rekordy.",
  pricingText: "TidGo jest darmowe w trakcie early access. Jeśli wprowadzimy płatne plany, użytkownicy dostaną jasną informację z wyprzedzeniem i zawsze będą mogli wyeksportować albo usunąć swoje rekordy."
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
  shareTidGo: "Distribuie TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo tine bonuri, dovezi de venit si evidente simple ordonate pentru self-employed si contabili.",
  shareCopied: "Linkul TidGo a fost copiat.",
  mtdTestingTitle: "Testare conexiune MTD",
  mtdTestingText: "TidGo te ajuta sa pastrezi evidente digitale si rezumate trimestriale pentru workflow-ul MTD al contabilului. Inca nu trimite declaratii fiscale la HMRC.",
  mtdLateTitle: "Ai ratat un quarterly update?",
  mtdLateText: "Ghidul HMRC spune ca quarterly updates folosesc totaluri cumulative. Un update ulterior poate include cifre dintr-un trimestru anterior, dar un termen ratat poate crea in continuare un penalty point. TidGo te ajuta sa readuci evidentele in ordine inainte de urmatorul handoff.",
  mtdSourceTitle: "Sursa oficiala",
  mtdSourceText: "Sursa: HMRC Developer Hub, Income Tax MTD end-to-end service guide pentru quarterly updates si obligatii cumulative.",
  launchPricingFullText: "TidGo este in early access pentru un grup mic de utilizatori reali. Este gratuit cat timp strangem feedback, imbunatatim aplicatia si pregatim ghiduri mai clare. Utilizatorii vor fi anuntati clar din timp si vor putea mereu exporta sau sterge inregistrarile.",
  pricingText: "TidGo este gratuit in early access. Daca apar planuri platite, utilizatorii vor fi anuntati clar din timp si vor putea mereu exporta sau sterge inregistrarile."
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
  shareTidGo: "Dalintis TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo tvarko kvitus, pajamu irodymus ir paprastus irasus self-employed zmonems ir buhalteriams.",
  shareCopied: "TidGo nuoroda nukopijuota.",
  mtdTestingTitle: "MTD connection testavimas",
  mtdTestingText: "TidGo padeda laikyti skaitmeninius irasus ir ketvircio suvestines buhalterio MTD workflow. Dar neteikia deklaraciju HMRC.",
  mtdLateTitle: "Praleidote quarterly update?",
  mtdLateText: "HMRC gidas sako, kad quarterly updates naudoja kaupiamuosius totalus. Velesnis update gali itraukti ankstesnio ketvircio skaicius, bet praleistas terminas vis tiek gali sukelti penalty point. TidGo padeda vel sutvarkyti irasus iki kito perdavimo.",
  mtdSourceTitle: "Oficialus saltinis",
  mtdSourceText: "Saltinis: HMRC Developer Hub, Income Tax MTD end-to-end service guide apie quarterly updates ir cumulative obligations.",
  launchPricingFullText: "TidGo yra early access mazai tikru vartotoju grupei. Programa nemokama, kol renkame atsiliepimus, geriname ja ir ruosiame aiskesnius gidus. Vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus.",
  pricingText: "TidGo nemokama early access metu. Jei bus ivesti mokami planai, vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus."
});

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
    forAccountants: "TidGo dla księgowych",
    heroTitle: "Paragony wchodzą. Porządek wychodzi.",
    heroSubtitle: "Prosty podgląd tylko do odczytu dla sole traders, którzy są świetni w pracy, ale nie zawsze w pilnowaniu paragonów.",
    accessTitle: "Dostęp księgowego",
    signedInHint: "To urządzenie jest zalogowane dla poniższego emaila księgowego.",
    signedOutHint: "Wpisz email księgowego. Wyślemy krótki kod logowania przed pokazaniem połączonych klientów.",
    connectedAccount: "Połączone konto",
    email: "Email",
    nameOrPractice: "Imię lub nazwa biura",
    accountantEmail: "Email księgowego",
    showConnectedClients: "Pokaż połączonych klientów",
    openClientList: "Otwórz listę klientów",
    backToOverview: "Wróć do podglądu",
    searchClients: "Szukaj klientów",
    signOut: "Wyloguj",
    sendLoginCode: "Wyślij kod logowania",
    loginCode: "Kod logowania",
    verifyCode: "Sprawdź kod",
    handoffTitle: "Zrobione pod przekazanie księgowemu",
    handoffText: "Klienci trzymają paragony i dowody przychodu w porządku przez miesiąc. Ty dostajesz podgląd tylko do odczytu i czystą paczkę do pracy.",
    clientAccess: "Dostęp klienta",
    readOnly: "Tylko odczyt",
    clientPermission: "Zgoda klienta",
    required: "Wymagana",
    connectedClients: "Połączeni klienci",
    clientList: "Lista klientów",
    noClients: "Żaden klient nie połączył jeszcze tego emaila.",
    signInFirst: "Najpierw zaloguj się kodem na email księgowego.",
    noTrade: "Brak zawodu",
    noEmail: "Brak emaila",
    records: "wpisów",
    howAccessWorks: "Jak działa dostęp",
    clientAddsEmail: "1. Klient dodaje twój email",
    consentFirst: "Najpierw zgoda",
    youSeeRecords: "2. Widzisz rekordy",
    youDownloadPack: "3. Pobierasz paczkę",
    csvPdf: "CSV + PDF",
    clientRecords: "Rekordy klienta",
    showClientsFirst: "Najpierw pokaż połączonych klientów.",
    trade: "Zawód",
    connected: "Połączono",
    income: "Przychody",
    expenses: "Wydatki",
    paidForClient: "Do odzyskania",
    downloadCsv: "Pobierz CSV",
    downloadPdf: "Pobierz PDF",
    requestDocs: "Poproś o dokumenty",
    noRecords: "Brak rekordów.",
    expense: "Wydatek",
    proofAttached: "Dowód dodany",
    proofMissing: "Brak dowodu",
    receiptPhotoAttached: "Zdjęcie paragonu dodane",
    noReceiptPhoto: "Brak zdjęcia paragonu",
    record: "Rekord",
    removeClient: "Usuń klienta",
    removeClientConfirm: "Usunąć tego klienta z listy księgowego?",
    clientRemoved: "Klient usunięty.",
    removeNeedsBackend: "Tego połączenia nie da się jeszcze usunąć od strony księgowego. Klient może cofnąć dostęp w ustawieniach TidGo.",
    accountantEmailInfo: "Użyj adresu email, który klienci podłączają w swoich ustawieniach TidGo.",
    connectedClientsInfo: "Tutaj widać tylko klientów, którzy pozwolili temu emailowi księgowego na dostęp.",
    requestDocsInfo: "Wysyła albo przygotowuje krótką prośbę, gdy brakuje dokumentu.",
    requestDocsSent: "Prośba wysłana.",
    requestDocsCopied: "Wiadomość skopiowana.",
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
    userText: "TidGo pomaga przygotować rekordy, ale nie sprawdza każdej pozycji na paragonie. Sprawdź, czy kwoty, kategorie i dokumenty są poprawne dla Twojej sytuacji.",
    accountantText: "TidGo daje paczkę klienta tylko do odczytu. Nie sprawdza każdej pozycji na paragonie. Sprawdź rekordy przed użyciem ich do księgowości albo wysyłki dalej.",
    pdfLine: "TidGo pomaga uporządkować rekordy, ale nie sprawdza każdej pozycji na paragonie. Sprawdź kwoty, kategorie i dokumenty przed użyciem tej paczki. To jest podsumowanie rekordów, nie porada VAT, payroll ani corporation tax.",
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
    intro: "Paragony wchodzą. Porządne rekordy wychodzą. Gotowe dla księgowego.",
    chooseLanguage: "Wybierz język",
    firstName: "Imię, nazwisko albo nazwa firmy",
    trade: "Zawód",
    incomeSources: "Źródła przychodu",
    incomeSourcesHint: "To pomaga TidGo zrozumieć Twoje rekordy. Dochód PAYE jest rozliczany osobno; TidGo trzyma rekordy dla self-employment, CIS, landlord albo dodatkowej pracy. To nie jest software do VAT ani księgowości LTD.",
    incomeSelfEmployed: "Self-employed",
    incomeCis: "CIS",
    incomeLandlord: "Landlord",
    incomePayeSide: "PAYE + dodatkowy dochód",
    incomeOther: "Inne",
    email: "Email do odzyskania",
    emailHint: "Email jest wymagany do dostępu do konta, odzyskiwania i email intake.",
    whatsappPhone: "Numer WhatsApp",
    whatsappPhoneHint: "Opcjonalnie. Dodaj go, jeśli później chcesz wysyłać zdjęcia paragonów do TidGo przez WhatsApp.",
    whatsappConnectedTitle: "WhatsApp połączony",
    whatsappConnectedText: "Numer WhatsApp zakończony na {last3} jest przypisany do tego konta.",
    changeWhatsAppNumber: "Zmień numer WhatsApp",
    changeWhatsAppIntro: "Dla bezpieczeństwa najpierw potwierdź email odzyskiwania. Nie wpisujesz tutaj nowego numeru; TidGo odczyta go z wiadomości WhatsApp wysłanej z nowego telefonu.",
    changeWhatsAppEmailHint: "Wyślemy kod na email odzyskiwania TidGo.",
    whatsappChangeCodeHint: "Wpisz kod z emaila, potem możesz połączyć nowy numer WhatsApp.",
    unlockWhatsAppChange: "Odblokuj zmianę",
    whatsappChangeUnlocked: "Email potwierdzony. Otwórz TidGo na telefonie z nowym numerem WhatsApp, potem kliknij ten przycisk i wyślij gotową wiadomość LINK.",
    whatsappAddOnceHint: "Dodaj numer, z którego chcesz wysyłać paragony. Połącz go raz, potem wyślij gotową wiadomość LINK w WhatsAppie.",
    connectWhatsApp: "Połącz WhatsApp",
    connectWhatsAppHint: "Otwórz WhatsApp i wyślij gotową wiadomość LINK. TidGo użyje jej, żeby połączyć ten telefon z kontem.",
    connectWhatsAppFallback: "Otwieram WhatsApp z podstawową wiadomością LINK. Jeśli nie połączy, spróbuj po następnym deployu API.",
    intakeTitle: "Sposoby dodawania rekordów",
    whatsappIntakeText: "WhatsApp intake: połącz numer, potem wysyłaj zdjęcia paragonów do TidGo z WhatsAppa.",
    emailIntakeLabel: "Email intake:",
    emailIntakeText: "Możesz też wysyłać rekordy income i expense z tego samego emaila, którego używasz w TidGo. Prześlij mail dalej albo wyślij zwykły email z załącznikiem. W temacie wpisz income albo expense, jeśli możesz.",
    dragDropTitle: "Upuść paragon tutaj",
    dragDropHint: "Na komputerze przeciągnij zdjęcie paragonu albo screenshot do tego pola.",
    dropActive: "Puść, żeby dodać ten paragon.",
    proofDropTitle: "Upuść dowód przychodu tutaj",
    proofDropHint: "Na komputerze przeciągnij payslip, remittance note albo screenshot do tego pola.",
    proofDropActive: "Puść, żeby dodać ten dowód.",
    incomeManualCheck: "Sprawdź i wpisz kwotę oraz datę ręcznie, żeby uniknąć pomyłek z dokumentów pełnych różnych liczb.",
    start: "Start",
    haveAccount: "Mam już konto",
    recover: "Odzyskaj konto",
    sendCode: "Wyślij kod",
    code: "Kod z emaila",
    restore: "Odzyskaj",
    login: "Login",
    cookieTitle: "Zgoda cookies",
    cookieText: "TidGo potrzebuje podstawowego zapisu danych, żeby aplikacja działała. Podstawowa analityka jest opcjonalna i pomaga nam ulepszać produkt.",
    cookieAccept: "Zgadzam się na analitykę",
    cookieDecline: "Tylko niezbędne",
    recoveryEmail: "Odzyskiwanie emailem",
    recoveryWhatsApp: "Odzyskiwanie przez WhatsApp",
    recoveryWhatsAppIntro: "Jeśli numer WhatsApp jest już połączony z TidGo, wyślij RECOVER TIDGO do TidGo na WhatsAppie. Potem wpisz ten numer i kod, który otrzymasz.",
    openWhatsAppRecovery: "Otwórz odzyskiwanie WhatsApp",
    whatsappRecoveryNumber: "Połączony numer WhatsApp",
    whatsappCode: "Kod z WhatsAppa",
    verifyWhatsAppCode: "Odzyskaj kodem WhatsApp",
    changeEmailTitle: "Zmień email odzyskiwania",
    changeEmailHint: "Użyj tego, jeśli chcesz przenieść odzyskiwanie konta i email intake na nowy adres email.",
    newEmail: "Nowy email",
    emailChangeCodeHint: "Wyślemy kod na nowy email zanim go zmienimy.",
    requestEmailChange: "Wyślij kod zmiany",
    verifyEmailChange: "Potwierdź nowy email",
    emailChanged: "Email zmieniony.",
    verifyEmail: "Potwierdź email",
    verifyEmailHint: "Wysłaliśmy 6-cyfrowy kod na twój email. Wpisz go, żeby dokończyć start TidGo na tym urządzeniu.",
    verifyAndStart: "Potwierdź i start",
    agreeLegal: "Zgadzam się z Polityką prywatności i Regulaminem TidGo.",
    sendCodeAgain: "Wyślij kod ponownie",
    codeSent: "Kod wysłany. Sprawdź email.",
    codeSentIfExists: "Kod wysłany, jeśli ten email istnieje.",
    validAmount: "Wpisz poprawną kwotę.",
    pdfLoading: "Narzędzie PDF jeszcze się ładuje. Spróbuj za kilka sekund.",
    pdfCreateFailed: "Nie udało się utworzyć PDF.",
    pdfSavedNoShare: "PDF zapisany. Ta przeglądarka nie może otworzyć udostępniania plików.",
    openPdf: "Otwórz PDF",
    expensePdfUnsupported: "Na razie wydatek wymaga zdjęcia albo screenshota. PDF wymaga jeszcze backend storage.",
    hello: "Cześć",
    summary: "Podsumowania",
    monthly: "Miesięczne",
    quarterly: "Kwartalne",
    taxQuarterly: "Kwartały UK tax",
    ukTaxQuarterly: "Kwartalnie dla podatników UK",
    quarterReady: "Rekordy gotowe kwartalnie",
    addExpense: "Dodaj wydatek",
    addIncome: "Dodaj przychód",
    photoDone: "Zrób zdjęcie",
    expenseHint: "Zrób zdjęcie paragonu albo wgraj screenshot/obraz paragonu.",
    amountNote: "Kwota i opis",
    paidForClient: "Zapłacone za klienta",
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
    delete: "Usuń",
    edit: "Edytuj",
    close: "Zamknij",
    tapToView: "Tapnij, żeby zobaczyć",
    rotate: "Obróć",
    pinchToZoom: "Zoom palcami",
    cancel: "Anuluj",
    photoReady: "Fotka gotowa. Wysyłam do reklamówki.",
    subtle: "Lekki",
    dry: "Suchy",
    serious: "Poważny",
    humour: "Styl komentarza",
    profile: "Profil",
    deleteAccount: "Usuń konto i wszystkie dane",
    deleteWarning: "To trwale usunie profil, paragony, zdjęcia paragonów i przychody.",
    deleteReceiptWarning: "To usunie tylko ten paragon i jego zdjęcie.",
    deleteIncomeWarning: "To usunie tylko ten wpis przychodu.",
    printPdf: "Zapisz PDF",
    emailPdf: "Wyślij summary PDF",
    submissionHint: "W publicznej wersji HTTPS tworzy PDF i otwiera opcje telefonu: email, WhatsApp, Drive, SMS i inne.",
    secureShareRequired: "Wysyłanie PDF przez opcje telefonu wymaga publicznej wersji HTTPS. Lokalnie przez http działa tylko Zapisz PDF.",
    emailBody: "Miesięczne podsumowanie TidGo PDF",
    noEntries: "Brak wpisów",
    loadingRecords: "Ładuję rekordy...",
    note: "Porządna miesięczna reklamówka. Podatki i mądre sztuczki zostają dla księgowego.",
    businessTypeTitle: "Czego dotyczy ten wpis?",
    businessSelfEmployment: "Self-employment / CIS / side income",
    businessProperty: "UK property / landlord",
    backendDown: "Nie mogę teraz połączyć się z API TidGo. Render może się budzić; spróbuj za moment.",
    serverUnavailableTitle: "TidGo jest chwilowo niedostępne",
    serverUnavailableText: "Aplikacja na tym urządzeniu jest w porządku. Serwer TidGo teraz nie odpowiada, prawdopodobnie przez deploy albo restart. Spróbuj ponownie za chwilę.",
    tryAgain: "Spróbuj ponownie",
    dateNeedsReview: "Sprawdź datę",
    dateNeedsReviewHint: "TidGo nie ma pełnej pewności co do daty z paragonu. Popraw ją tutaj przed użyciem rekordu.",
    installHint: "Na iPhonie: Udostępnij, potem Dodaj do ekranu początkowego.",
    seeAll: "Pokaż wszystkie",
    seeMore: "Pokaż więcej",
    showLess: "Pokaż mniej",
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
    intro: "Фото чека всередину, місячний підсумок назовні. Без бухгалтерського хаосу.",
    chooseLanguage: "Оберіть мову",
    firstName: "Ім'я або назва бізнесу",
    trade: "Професія",
    email: "Email для відновлення",
    emailHint: "Email потрібен для доступу до акаунта, відновлення та email intake.",
    start: "Запустити TidGo",
    haveAccount: "У мене вже є акаунт",
    recover: "Відновити акаунт",
    sendCode: "Надіслати код",
    code: "Код з email",
    restore: "Відновити",
    hello: "Привіт",
    summary: "Підсумок місяця",
    monthly: "Місячно",
    quarterly: "Квартально",
    quarterReady: "Записи готові до кварталу",
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
    seeMore: "Показати більше",
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
    firstName: "Vardas arba verslo pavadinimas",
    trade: "Profesija",
    email: "Atkūrimo el. paštas",
    emailHint: "El. paštas reikalingas paskyros prieigai, atkūrimui ir email intake.",
    start: "Pradėti TidGo",
    haveAccount: "Jau turiu paskyrą",
    recover: "Atkurti paskyrą",
    sendCode: "Siųsti kodą",
    code: "Kodas iš el. pašto",
    restore: "Atkurti",
    hello: "Sveiki",
    summary: "Mėnesio suvestinė",
    monthly: "Menesio",
    quarterly: "Ketvircio",
    quarterReady: "Ketvirciui paruosti irasai",
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
    seeMore: "Rodyti daugiau",
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
    firstName: "Vārds vai uzņēmuma nosaukums",
    trade: "Profesija",
    email: "Atjaunošanas e-pasts",
    emailHint: "E-pasts ir vajadzīgs konta piekļuvei, atjaunošanai un email intake.",
    start: "Sākt TidGo",
    haveAccount: "Man jau ir konts",
    recover: "Atjaunot kontu",
    sendCode: "Sūtīt kodu",
    code: "E-pasta kods",
    restore: "Atjaunot",
    hello: "Sveiki",
    summary: "Mēneša kopsavilkums",
    monthly: "Menesa",
    quarterly: "Ceturksna",
    quarterReady: "Ceturksnim gatavi ieraksti",
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
    seeMore: "Rādīt vairāk",
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
    firstName: "Nombre o nombre del negocio",
    trade: "Oficio",
    email: "Email de recuperación",
    emailHint: "El email es necesario para acceder a la cuenta, recuperarla y usar email intake.",
    start: "Empezar TidGo",
    haveAccount: "Ya tengo cuenta",
    recover: "Recuperar cuenta",
    sendCode: "Enviar código",
    code: "Código de email",
    restore: "Recuperar",
    hello: "Hola",
    summary: "Resumen mensual",
    monthly: "Mensual",
    quarterly: "Trimestral",
    quarterReady: "Registros listos por trimestre",
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
    seeMore: "Ver más",
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
    firstName: "Име или име на бизнеса",
    trade: "Професия",
    email: "Email за възстановяване",
    emailHint: "Email е необходим за достъп до акаунта, възстановяване и email intake.",
    start: "Стартирай TidGo",
    haveAccount: "Вече имам акаунт",
    recover: "Възстанови акаунт",
    sendCode: "Изпрати код",
    code: "Код от email",
    restore: "Възстанови",
    hello: "Здравейте",
    summary: "Месечно обобщение",
    monthly: "Месечно",
    quarterly: "Тримесечно",
    quarterReady: "Записи готови за тримесечие",
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
    seeMore: "Покажи още",
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
    signOutHint: "Use this only when you want to test recovery or move to another account. It does not delete your receipts.",
    signOutConfirm: "This will sign you out on this device and show the email recovery screen. Your receipts will not be deleted.",
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
    replaceReceiptHint: "Use this if OCR asked for a clearer photo. The new photo will be read again and replace this receipt record.",
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
  requestDocsBackendNeeded: "Request email needs a backend Resend endpoint before it can send to the client automatically.",
  mtdRunning: "MTD running summary",
  mtdRunningReady: "Running MTD record summary",
  mtdRunningHint: "Covers records from the start of the tax year to the end of this update period.",
  mtdRunningDisclaimer: "For your accountant. TidGo does not submit this to HMRC."
});

Object.assign(COPY.pl, {
  privacyTitle: "Polityka prywatności",
  termsTitle: "Regulamin",
  deleteAccountInfoTitle: "Instrukcja usunięcia konta",
  legalShort: "Krótko",
  legalFull: "Proste szczegóły",
  legalOpenFull: "Otwórz pełną wersję",
  legalBack: "Wróć do ustawień",
    feedbackTitle: "Wyślij feedback",
    feedbackHint: "Coś wygląda dziwnie? Wyślij nam szybką wiadomość.",
    feedbackPlaceholder: "Napisz, co się stało, co było niejasne albo co powinno działać lepiej.",
    sendMessage: "Wyślij wiadomość",
    feedbackSent: "Wiadomość wysłana. Dziękuję.",
    feedbackFailed: "Nie udało się wysłać wiadomości. Spróbuj później.",
    deleteConfirmText: "Rozumiem, że to trwale usunie mój profil, paragony, zdjęcia i przychody.",
    deleteConfirmRequired: "Najpierw zaznacz potwierdzenie.",
    copyEmail: "Kopiuj email",
    emailCopied: "Email skopiowany.",
    openEmailApp: "Otwórz email",
    feedbackSubject: "TidGo feedback",
    feedbackBody: "Cześć, testowałem TidGo i zauważyłem:",
    recordsTitle: "Sprawdź moje rekordy",
    recordsHint: "Zobacz, co wygląda gotowe dla księgowego, a gdzie może brakować dowodu albo drugiego spojrzenia.",
    connectAccountant: "Połącz księgowego",
    connectAccountantHint: "Dodaj email księgowego. Udostępnianie rekordów będzie wymagało Twojej zgody.",
    accountantEmail: "Email księgowego",
    createInvite: "Zapisz księgowego",
    connectionStatus: "Status połączenia",
    pendingAccountant: "Zapisane do połączenia",
    pendingClient: "Czeka na zgodę klienta",
    activeConnection: "Połączone",
    allowAccess: "Zezwól na dostęp",
    declineAccess: "Odmów",
    revokeAccess: "Cofnij dostęp",
    noConnection: "Na tym urządzeniu nie ma jeszcze połączonego księgowego.",
    inviteCreated: "Księgowy zapisany.",
    accessAllowed: "Dostęp zatwierdzony.",
    accessDeclined: "Dostęp odrzucony.",
    accessRevoked: "Dostęp cofnięty.",
    signOutDevice: "Wyloguj na tym urządzeniu",
    signOutHint: "Użyj tylko, gdy chcesz przetestować odzyskiwanie albo przejść na inne konto. To nie usuwa paragonów.",
    signOutConfirm: "To wyloguje Cię na tym urządzeniu i pokaże ekran odzyskiwania emailem. Paragony nie zostaną usunięte.",
    accountantAccess: "Dostęp dla księgowego",
    accountantEmail: "Email księgowego",
    accountantHint: "Portal księgowego będzie później. Na razie sprawdź rekordy przed wysłaniem dalej.",
    saveAccountant: "Zapisz księgowego",
    inviteAccountant: "Zaproś księgowego",
    previewAccountant: "Sprawdź moje rekordy",
    revokeAccess: "Cofnij dostęp",
    revokeOrChangeAccountant: "Cofnij dostęp / zmień księgowego",
    accountantView: "Co zobaczy księgowy",
    readOnly: "Tylko do odczytu",
    lastReceipt: "Ostatni paragon",
    status: "Status",
    ok: "OK",
    chase: "Pogonić",
    downloadCsv: "Pobierz CSV",
    accountantInviteSubject: "Dostęp księgowego TidGo",
    accountantInviteBody: "Cześć, używam TidGo do porządkowania paragonów i przychodów. Chciałbym połączyć moje rekordy z Tobą, kiedy dostęp dla księgowego będzie gotowy.",
    accountantHeroToast: "Tryb bohatera odblokowany. Rekordy są w porządku, reklamówka może iść na emeryturę.",
    missingMonths: "Brakujące miesiące",
    needsReview: "Do sprawdzenia",
    chaseClient: "Pogoń klienta",
    accountantPack: "Pobierz paczkę księgowego",
    noRecords: "Brak rekordów",
    missingMerchant: "Brakuje sklepu",
    missingCategory: "Brakuje kategorii",
    possibleDuplicate: "Możliwy duplikat",
    incomeWithoutProof: "Brakuje dowodu przychodu",
    chaseSubject: "Brakujące rekordy TidGo",
    chaseBody: "Cześć, dodaj proszę brakujące paragony i dowody przychodu w TidGo, kiedy możesz. To pomoże przygotować rekordy bez paniki na ostatnią chwilę.",
    accountantPackToast: "Paczka księgowego ruszyła. CSV dzisiaj, spokojniejszy styczeń jutro.",
    addClient: "Dodaj klienta",
    importClientEmails: "Importuj emaile klientow",
    inviteClients: "Zapros klientow",
    clientEmails: "Emaile klientów",
    accountantDemoHint: "Demo księgowego: wklej jeden lub wiele emaili klientów, potem zaproś ich do TidGo.",
    attachProof: "Dodaj dowód",
    proofAttached: "Dowód dodany",
    viewProof: "Zobacz dowód",
    replaceProof: "Zmień dowód",
    takePhoto: "Zrób zdjęcie",
    uploadFile: "Wgraj plik",
    proofHint: "Dodaj payslip, CIS statement, remittance note albo screenshot. Kwotę wpisujesz ręcznie.",
    replaceReceiptPhoto: "Zrób ponownie albo zamień zdjęcie",
    replaceReceiptHint: "Użyj tego, jeśli OCR poprosił o wyraźniejsze zdjęcie. Nowe zdjęcie zostanie odczytane ponownie i zastąpi ten paragon.",
    legalSettingsTitle: "Legal",
    legalSettingsText: "Pełne wersje są dostępne na TidGo.co.uk. Używając tej aplikacji, zgadzasz się z Polityką prywatności i Regulaminem poniżej. Jeśli się nie zgadzasz, usuń konto i przestań używać TidGo.",
    legalSettingsAgree: "Zgadzam się z Polityką prywatności i Regulaminem TidGo.",
    shortPrivacyNoticeTitle: "Krótka informacja prywatności",
    shortPrivacyNoticeText: "TidGo przechowuje dane konta, zdjęcia paragonów, rekordy przychodów i podsumowania, żebyś mógł trzymać proste rekordy self-employed albo landlord w jednym miejscu.\n\nTidGo służy tylko do prostego prowadzenia rekordów. Nie obsługuje kont limited company, VAT returns, payroll ani corporation tax.\n\nUżywamy emaila do dostępu do konta, odzyskiwania, wiadomości bezpieczeństwa i email intake. Email jest wymagany do utworzenia i używania konta TidGo. Jeśli wybierzesz powiadomienia email, możemy też wysyłać okazjonalne informacje o zmianach w TidGo.\n\nJeśli połączysz WhatsApp albo wysyłasz maile do TidGo, używamy tych kanałów tylko do dodawania rekordów do Twojego konta.\n\nZdjęcia paragonów mogą być przetwarzane przez OpenAI w naszym imieniu, żeby odczytać daty, kwoty, sklepy i kategorie. Nie sprzedajemy Twoich danych.\n\nMożesz usunąć konto i aktywne dane w Settings. Niektóre backupy i logi techniczne mogą zostać do 30 dni.\n\nTworząc konto, zgadzasz się z Polityką prywatności i Regulaminem TidGo.",
    importantNotesTitle: "Ważne informacje",
    importantNotesText: "TidGo jest do prostych rekordów self-employed, landlord i dodatkowego dochodu. To nie jest software do VAT, kont LTD/company accounts, payroll ani corporation tax.",
    legalConsentTitle: "Zanim przejdziesz dalej",
    legalConsentText: "Potwierdź proszę, że zgadzasz się z Polityką prywatności i Regulaminem TidGo. Pełne wersje możesz otworzyć poniżej.",
    continueToApp: "Przejdź do TidGo",
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
  duplicateHint: "Te rekordy wyglądają podobnie. Otwórz jeden i porównaj zdjęcia paragonów.",
  requestDocsBackendNeeded: "Wysyłka request email wymaga endpointu Resend w backendzie, zanim pójdzie automatycznie do klienta.",
  mtdRunning: "MTD running summary",
  mtdRunningReady: "Narastające MTD record summary",
  mtdRunningHint: "Obejmuje rekordy od początku roku podatkowego do końca tego okresu.",
  mtdRunningDisclaimer: "Dla Twojego księgowego. TidGo nie wysyła tego do HMRC."
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
  feedbackBody: "Sveiki, es testēju TidGo un pamaniju:"
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
  ukTaxQuarterly: "Ceturksni UK nodoklu maksatājiem"
});

Object.assign(COPY.es, {
  summary: "Resúmenes",
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
  whatsappAddOnceHint: "Pridėkite numeri, is kurio siusite kvitus. Prijunkite ji viena karta, tada issiuskite LINK zinute WhatsApp.",
  intakeTitle: "Būdai pridėti įrašus",
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
  whatsappAddOnceHint: "Pievienojiet numuru, no kura sūtisiet čekus. Piesledziet to vienu reizi, pec tam nosutiet LINK zinu WhatsApp.",
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
  shareTidGo: "Udostępnij TidGo",
  shareText: "TidGo trzyma paragony, dowody przychodu i proste rekordy w porządku dla self-employed i księgowych.",
  shareCopied: "Link TidGo skopiowany.",
  whatsappOnboardingTitle: "WhatsApp intake jest dostępny",
  whatsappOnboardingText: "Po utworzeniu konta wejdź w Ustawienia i połącz WhatsApp. Potem możesz wysyłać zdjęcia paragonów do TidGo bez otwierania aplikacji."
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
      short: "TidGo przechowuje tylko dane potrzebne do zapisania Twoich przychodów, wydatków i miesięcznego podsumowania. Zdjęcia paragonów i dane konta są używane do działania aplikacji, nie do reklam ani profilowania.",
      details: "Przechowujemy profil, email do odzyskania, zdjęcia paragonów, dane paragonów, przychody i ustawienia. Aplikacja używa API TidGo, MongoDB Atlas, Render, OpenAI do czytania paragonów, Resend do emaili odzyskiwania oraz, jeśli wyrazisz zgodę na analitykę, Google Analytics do zrozumienia użycia aplikacji. Konto i dane możesz usunąć w Ustawieniach."
    },
    terms: {
      short: "TidGo pomaga uporządkować paragony i przygotować miesięczne podsumowanie dla księgowego. To nie jest księgowość, doradztwo podatkowe, payroll ani porada prawna.",
      details: "Przed wysłaniem podsumowania sprawdź wpisy. Oryginały dokumentów trzymaj tam, gdzie wymaga tego księgowy albo lokalne przepisy. TidGo jest prostym pomocnikiem do porządkowania danych i nie zastępuje księgowego."
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
      details: "Perevirte zapysy pered nadsyllannyam. Zberihayte oryhinaly, yakshcho tse potribno bukhhalteru abo mistsevym pravyłam. TidGo ye prostym pomichnykom i ne zaminyuye kvalifikovanoho bukhhaltera."
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
**Version:** 0.9 — Closed Testing / Beta

> **Beta notice:** TidGo is currently in closed testing (Google Play closed testing) and the PWA is under continuous development until the service is formally launched as a subscription product. This policy reflects how we handle your data during closed testing. We will review and update it before public launch if our infrastructure or processing activities change.

## 1. Who we are

TidGo ("TidGo", "we", "us", "our") is a record-keeping app designed for **self-employed individuals, sole traders, landlords, and individuals with simple income and expense records** (including those keeping records under Making Tax Digital). It helps you collect receipt photos and income proof documents, and produce simple monthly or quarterly summaries.

TidGo is **record-keeping software supporting an accountant-led workflow**. It is not a full accounting system, tax filing service or substitute for an accountant. It does not support limited company accounts, VAT returns, payroll or corporation tax.

TidGo is **not** accounting software, **not** tax advice, and does **not** submit tax returns to HMRC or any tax authority.

**Important — accuracy of extracted data:** TidGo uses AI/OCR technology to read receipt and document details automatically. This technology does its best, but it does not verify every item and may occasionally produce inaccurate results. You are responsible for checking that amounts, categories and documents are correct for your situation before using them for any tax, accounting or other official purpose. TidGo displays a reminder of this when you export a monthly or quarterly summary as a PDF.

The data controller for your personal data is:

> **TidGo Ltd**
> Company number: **17356146** (England and Wales)
> 128 City Road, London, EC1V 2NX
> Email: **hello@tidgo.co.uk** / **support@tidgo.co.uk**
> ICO registration number: **ZC205408** (registered 22 July 2026, expires 21 July 2027)

If you have any questions about this policy or how we handle your data, contact us at the email above.

## 2. What data we collect

Depending on how you use TidGo, we may collect:

- **Account and recovery data** — your email address. Your email address is required to create and recover your TidGo account, send account security messages, link incoming email records to your account, and contact you about important service matters.
- **Profile data** — such as your first name, trade/job and income source.
- **WhatsApp phone number (optional)** — only if you choose to connect WhatsApp as an intake channel.
- **Email intake data (optional)** — if you send documents to TidGo by email, we process the sender email address (to match the message to your account), the message and its attachments (e.g. payslips or PDFs).
- **Receipt photos and uploaded files** — images and documents you upload or send to TidGo.
- **Income proof files** — such as payslips, remittance notes or screenshots you upload.
- **Extracted receipt details** — such as amount, currency, merchant, category and date, produced automatically from your receipts using OCR/AI.
- **Accountant connection data** — if you choose to connect an accountant to your account.
- **Basic usage and analytics data** — such as how the app is used, to help us maintain and improve TidGo.

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

- **MongoDB Atlas** — database storage for account data, structured record details and extracted receipt data. Hosted on **AWS, Ireland (eu-west-1)** — data remains within the EU/EEA, no international transfer applies. Note: automated Atlas backups are currently inactive during the testing phase; the backup retention policy will be updated when backups are enabled before production launch.
- **Render** — application hosting and API (backend). Hosted in **Oregon, United States**. International transfer applies — covered by Render's Data Processing Agreement incorporating SCCs with the UK Addendum.
- **OpenAI (API)** — receipt reading (OCR) and classification. US-based — international transfer safeguards apply (see Section 5). API data is not used to train OpenAI's models by default; abuse-monitoring logs are retained for up to 30 days.
- **IONOS** (IONOS Cloud Limited) — domain registration and administrative email services for tidgo.co.uk. Data processed in the **UK or EEA**. Covered by IONOS Data Processing Agreement v2.0 (03/2026), subject to English law. IONOS holds ISO 27001 certification. No international transfer applies.
- **Resend** — outbound service and account recovery emails, and inbound email receiving (emails sent to our intake address are received by Resend and delivered to our backend via webhook). US-based — certified under the **EU-US Data Privacy Framework (DPF) and UK Extension to the EU-US DPF**, and SOC 2 and GDPR compliant. DPA available at resend.com/legal/dpa.
- **Scaleway Object Storage (EU)** — stores receipt photos, income proof documents and generated PDF reports. Scaleway is a French company (Scaleway S.A.S., Paris) — all services are located within the European Union by default; no international transfer applies. When you view a receipt or download a report, our backend generates a short-lived signed URL; your device downloads the file directly from Scaleway without passing through our application servers. When you generate a monthly or quarterly PDF report, TidGo may temporarily retrieve stored receipt and proof files from Scaleway to create the report. Generated reports may also be stored in Scaleway so they can be downloaded again without regenerating them. Covered by Scaleway Data Processing Agreement (version June 1st, 2024), governed by French law.
- **Meta / WhatsApp** — WhatsApp message and document intake, only if you choose to connect WhatsApp. Your use of WhatsApp is also governed by WhatsApp's own terms and privacy policy.
- **Google Analytics** — website and PWA usage analytics. Data may be processed in the United States — covered by Google Ads Data Processing Terms (privacy.google.com/businesses/processorterms), governed by English law, incorporating SCCs for international transfers.

We also share your records with **your accountant**, but only if and when you choose to connect one (see Section 8).

We may disclose data where required by law, regulation or valid legal process.

## 5. International data transfers

Some of our providers process data outside the UK. Our database (MongoDB Atlas) is hosted in Ireland (EU) — no international transfer applies. The following providers process data in the United States:

- **Render** (backend/API hosting, Oregon) — transfers covered by UK SCCs with UK Addendum
- **OpenAI** (OCR/AI processing) — transfers covered by UK SCCs with UK Addendum
- **Resend** (email) — certified under the EU-US Data Privacy Framework and **UK Extension to the EU-US DPF**
- **Meta** (WhatsApp, where applicable) — transfers covered by Meta's Data Processing Terms (effective 23 August 2025) incorporating the **UK Data Transfer Addendum** for UK GDPR transfers

Each provider listed above has a Data Processing Agreement or equivalent data processing terms in place, providing appropriate safeguards for UK GDPR compliance.

Where data is transferred outside the UK, we rely on safeguards recognised under UK law, such as UK adequacy regulations, the UK Extension to the EU–US Data Privacy Framework, or the UK International Data Transfer Agreement / Addendum (IDTA), as applicable to each provider.

## 6. How long we keep your data (retention)

- Your data is kept **while your account is active**.
- When you delete your account, we delete your active account data, receipts, income records and stored files from our live systems. Some limited technical logs or backups may remain for up to **30 days** before automatic deletion, unless we are legally required to keep them longer.
- Abuse-monitoring logs held by OpenAI are retained by OpenAI for up to 30 days (see Section 3).

**Please note:** if you use TidGo to keep business records, UK law (HMRC) may require *you* to keep your own copies of business records for several years. Deleting your TidGo account deletes your data from TidGo — it does not fulfil or remove your own record-keeping obligations.

## 7. Account deletion

You can delete your account and all your data at any time from **Settings → Delete account**. Once deleted from our live systems, your data cannot be recovered.

## 8. Accountant access

Accountant access is **optional and fully consent-based**. Here is how it works:

- You enter your accountant's email address in the app.
- Your accountant receives an email invitation asking if they want access to your records.
- If they accept, a six-digit access code is sent to the email address you provided.
- From that point, your accountant has **read-only** access — they can view and download your records as CSV or PDF exports, but cannot make any changes.
- You can revoke access or change your accountant at any time from Settings → Connect accountant → Revoke access.

Your accountant's email address is processed solely to send the invitation and access code. We do not use it for any other purpose.

If you connect an accountant, your accountant is independently responsible for how they handle any data they access or export in the course of providing services to you.

## 9. How you can send documents to TidGo (intake channels)

You can add documents to your TidGo account in several ways:

- **In-app photo/upload** — taking a photo or uploading a file in the Android app or the PWA (on your phone, desktop or browser).
- **WhatsApp (optional)** — sending a receipt photo or document by WhatsApp.
- **Email (optional)** — sending an email with an attachment (e.g. a payslip or PDF) to your TidGo intake address.

**WhatsApp intake:**

- We use your phone number solely to match incoming WhatsApp receipt photos and documents to the correct TidGo account.
- You start the connection yourself by sending a **LINK** message.
- We do not use WhatsApp for marketing.
- You can disconnect WhatsApp at any time from within the app (Settings → disconnect WhatsApp), or by deleting your account.
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

To exercise any of these rights, contact us at **support@tidgo.co.uk** or use the tools in the app (e.g. Settings → Delete account). We will respond within one month.

## 12. Children

TidGo is a business tool intended for users aged **18 or over**. We do not knowingly collect data from children.

## 13. Analytics and cookies

**PWA and website (tidgo.co.uk)**

The TidGo website and PWA use Google Analytics to understand how the service is used and to improve it. Google Analytics uses cookies and device identifiers and may process data in the United States — covered by Google Ads Data Processing Terms (privacy.google.com/businesses/processorterms), governed by English law, incorporating SCCs for international transfers.

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
**Version:** 0.10 — Closed Testing / Beta

Please read these Terms & Conditions ("Terms") carefully before using TidGo. You accept these Terms by ticking the acceptance box when creating an account, and by continuing to use TidGo. If you do not agree, please do not use the service.

## 1. Who we are

TidGo is operated by:

> **TidGo Ltd**
> Company number: **17356146** (England and Wales)
> 128 City Road, London, EC1V 2NX
> Email: **hello@tidgo.co.uk** / **support@tidgo.co.uk**

## 2. What TidGo is — and what it is not

TidGo is a record-keeping app designed for **self-employed individuals, sole traders, landlords, and individuals with simple income and expense records** (including those keeping records under Making Tax Digital). It helps you collect receipt photos and income proof documents, and produce simple monthly or quarterly summaries for your own records or to share with your accountant.

**TidGo is designed for simple record-keeping only. It does not support limited company accounts, VAT returns, payroll or corporation tax.** If you need any of these, please use appropriate accounting software.

**TidGo is NOT:**

- accounting software,
- tax, legal or financial advice,
- a tax filing service — TidGo does **not** submit tax returns to HMRC or any other tax authority,
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

## 7. Accuracy — your responsibility to check

TidGo uses OCR and AI to read receipt details (amounts, merchants, dates, categories). **OCR/AI may make mistakes.**

You are responsible for checking all amounts, categories, dates, receipt contents and summaries **before** using, exporting, sharing or relying on them — including before sharing with an accountant or using them for any tax or business purpose.

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

UK law may require you to keep your own business records (for example, HMRC generally expects self-employed records to be kept for at least 5–6 years). TidGo is a convenience tool — it does not replace your legal obligation to retain your own records. We strongly recommend keeping your own copies/exports of important documents.

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
- During any free or early-access period, our total liability to you in connection with the service is limited to **£100**. Once paid plans apply, our total liability is limited to the amount you paid to TidGo in the **previous 12 months**.

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
  marketingLanguage: MARKETING_LANGUAGES[read("tg_marketing_language", "en")] ? read("tg_marketing_language", "en") : "en",
  marketingSection: read("tg_marketing_section", "how"),
  incomeProofs: read("rb_income_proofs", {}),
  screen: initialScreen(),
  receipts: [],
  income: [],
  recordsLoading: false,
  pendingRecordKind: "",
  pendingBusinessType: "",
  apiUnavailable: false,
  selected: null,
  imageViewer: null,
  imageRotation: 0,
  summaryDate: new Date(),
  summaryPeriod: read("rb_summary_period", "month") === "quarter" ? "quarter" : "month",
  quarterMode: ["calendar", "uk_tax", "mtd_running"].includes(read("rb_quarter_mode", "calendar")) ? read("rb_quarter_mode", "calendar") : "calendar",
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
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const routes = {
    "/how-it-works": "how",
    "/who-is-it-for": "who",
    "/how-intake-works": "intake",
    "/find-accountant": "findAccountant",
    "/show-this-to-your-accountant": "accountantPack",
    "/launch-pricing": "pricing",
    "/faq": "faq",
    "/our-story": "story",
    "/founding-tester": "androidTesters",
    "/android-testers": "androidTesters",
    "/mtd": "mtd",
    "/mtd/getting-started": "mtdGettingStarted",
    "/mtd/sole-traders": "mtdSoleTraders",
    "/mtd/landlords": "mtdLandlords",
    "/mtd/cis": "mtdCis",
    "/mtd/digital-records": "mtdDigitalRecords",
    "/mtd/quarterly-updates": "mtdQuarterlyUpdates",
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
    pl: { privacy: "Polityka prywatności", terms: "Regulamin" },
    ro: { privacy: "Politica de confidențialitate", terms: "Termeni" },
    lt: { privacy: "Privatumo politika", terms: "Sąlygos" }
  };
  const languageTitles = titles[state.marketingLanguage] || titles.en;
  return languageTitles[kind] || titles.en[kind] || kind;
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
    ["mtdGettingStarted", "mtdGettingStartedText", "/mtd/getting-started"],
    ["mtdSoleTraders", "mtdSoleTradersText", "/mtd/sole-traders"],
    ["mtdLandlords", "mtdLandlordsText", "/mtd/landlords"],
    ["mtdCis", "mtdCisText", "/mtd/cis"],
    ["mtdDigitalRecords", "mtdDigitalRecordsText", "/mtd/digital-records"],
    ["mtdQuarterlyUpdates", "mtdQuarterlyUpdatesText", "/mtd/quarterly-updates"],
    ["mtdFaqs", "mtdFaqsText", "/mtd/faqs"],
    ["mtdWhat", "mtdWhatText", "/mtd/what-is-mtd"],
    ["mtdWho", "mtdWhoText", "/mtd/who-needs-mtd"],
    ["mtdWhen", "mtdWhenText", "/mtd/when-does-mtd-start"],
    ["mtdRecords", "mtdRecordsText", "/mtd/what-records-do-i-need"],
    ["mtdPaper", "mtdPaperText", "/mtd/paper-receipts"],
    ["mtdPhotos", "mtdPhotosText", "/mtd/can-i-use-photos"],
    ["mtdSubmit", "mtdSubmitText", "/mtd/does-tidgo-submit-to-hmrc"],
    ["mtdAccountant", "mtdAccountantText", "/mtd/do-i-need-an-accountant"]
  ];
}

function mtdSources() {
  return `
    <section class="article-sources">
      <strong>Sources</strong>
      <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax" target="_blank" rel="noopener noreferrer">GOV.UK: Use Making Tax Digital for Income Tax</a>
      <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener noreferrer">GOV.UK: Create digital records</a>
      <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener noreferrer">GOV.UK: Send quarterly updates</a>
      <a href="https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/" target="_blank" rel="noopener noreferrer">HMRC Developer Hub: Income Tax MTD service guide</a>
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

function selectedBusinessTypeLabel() {
  return state.pendingBusinessType === "uk-property" ? t("businessProperty") : t("businessSelfEmployment");
}

function defaultBusinessType() {
  const sources = readIncomeSources();
  return sources.includes("landlord") && sources.length === 1 ? "uk-property" : "self-employment";
}

function shouldAskBusinessType() {
  const sources = readIncomeSources();
  return sources.includes("landlord") && sources.some((source) => source !== "landlord");
}

function startRecordFlow(kind) {
  state.pendingRecordKind = kind;
  state.pendingBusinessType = "";
  if (shouldAskBusinessType()) return go("businessTypeChoice");
  state.pendingBusinessType = defaultBusinessType();
  return go(kind === "income" ? "incomeForm" : "expenseChoice");
}

async function rememberUser(user) {
  const incomeSources = writeIncomeSources(user, user?.income_sources || readIncomeSources(user));
  const storedUser = { ...user, income_sources: incomeSources };
  state.user = storedUser;
  forget("rb_signed_out");
  await deviceSet("rb_user", storedUser);
  await deviceSet("rb_last_user", {
    id: storedUser.id,
    first_name: storedUser.first_name,
    email: storedUser.email || "",
    whatsapp_phone: storedUser.whatsapp_phone || "",
    whatsapp_phone_normalized: storedUser.whatsapp_phone_normalized || "",
    whatsapp_linked_at: storedUser.whatsapp_linked_at || "",
    income_sources: incomeSources,
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
    return `£${formatted}`;
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
  if (!recordDateNeedsReview(item)) return "";
  return `<span class="needs-review-badge" title="${escapeAttr(t("dateNeedsReview"))}" aria-label="${escapeAttr(t("dateNeedsReview"))}">!</span>`;
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
  app.innerHTML = `<main class="shell ${accountantMode ? "accountant-shell" : ""} ${landingMode ? "landing-shell" : ""}${motionClass}">${content}</main><section id="printRoot" class="print-root"></section>${imageViewerOverlay()}`;
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
      ${back ? `<button class="icon-btn" data-action="back" aria-label="Back">←</button>` : `<div class="brand app-brand"><img src="/icon-192.png" alt=""><span>TidGo<sup>TM</sup></span></div>`}
      <strong>${title || ""}</strong>
      ${state.user && !back && !accountantMode ? `<button class="icon-btn" data-action="settings" aria-label="${t("settings")}">⚙</button>` : `<span style="width:44px"></span>`}
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
    state.receipts = receipts || [];
    state.income = attachIncomeProofs(income);
    state.accountantConsents = consents || [];
  } catch (error) {
    state.apiUnavailable = true;
    toast(error.message || t("backendDown"));
  } finally {
    state.recordsLoading = false;
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
                <a href="/show-this-to-your-accountant">${mk("navAccountantPack")}</a>
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
        ${pageCta()}
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
    accountantPack: {
      active: "accountantPack",
      eyebrow: mk("navAccountantPack"),
      title: mk("accountantShareTitle"),
      text: mk("accountantShareText"),
      cards: [
        [mk("accountantMessageTitle"), mk("accountantMessageText")],
        [mk("accountantDemoPackTitle"), mk("accountantDemoPackText")],
        [mk("accountantDemoKind"), mk("accountantDemoText")]
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
          <article>
            <strong>${mk("mtdLateTitle")}</strong>
            <span>${mk("mtdLateText")}</span>
          </article>
          <article>
            <strong>${mk("mtdSourceTitle")}</strong>
            <span>${mk("mtdSourceText")}</span>
          </article>
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
    "eyebrow": "TidGo story",
    "html": "          <h1>From a carrier bag in the van to a simple tool — the TidGo story</h1>\n          <h2>31 January, 9pm — sound familiar?</h2>\n          <p>For years I was self-employed, driving a van around the UK and across Europe. And like most of us, I had exactly the same problem with paperwork.</p>\n          <p>Receipts were everywhere: in my pockets, on the dashboard, and eventually in one big carrier bag in the van. When Self Assessment came round, at 9pm on 31 January I'd tip the whole bag out on the floor. The result?</p>\n          <ul>\n            <li>Half the receipts had faded to nothing — those costs were simply lost.</li>\n            <li>Sitting there with a beer, stressed about whether I'd file before midnight and avoid a penalty.</li>\n            <li>A worried partner who had to help me through the same chaos every single year.</li>\n          </ul>\n          <p>That's when I came up with my first, very basic trick: I started photographing receipts and dropping them into a folder on my phone. Not perfect, but at least the proof didn't fade away with the ink.</p>\n          <h2>Why did accounting software feel too complicated for the way I worked?</h2>\n          <p>When health problems kept me at home for a while, Making Tax Digital was suddenly all over the news. I thought: right, time to take this seriously.</p>\n          <p>I went through the big accounting packages — Xero, QuickBooks, Sage, FreeAgent. Large, global companies. Genuinely good tools. And to me one thing became obvious very quickly: <strong>they felt built for accountants, not for builders, drivers, painters or plumbers.</strong></p>\n          <p>They're packed with features. Charts, forecasts, bank reconciliation, ten tabs you'll never open. I could see exactly why an accountant or a larger business would value all of it. But for the one job I needed doing every day, it was far too much. After ten hours of physical work, none of us wants to sit down and learn that. I know people who paid a year's subscription for one of these and logged in twice.</p>\n          <p>And there's something those companies don't seem to think about at all: <strong>some of us aren't only fighting the paperwork — we're fighting the language too.</strong> If tax is hard in your own language, in a second one it becomes a wall. That's why TidGo currently works in eight languages — the ones spoken by many of the people it was built for — while the core records your accountant sees are presented in English. Nobody has to translate anything.</p>\n          <p>So I decided to build something different. A simple tool for ordinary people, made by someone who spent years behind the wheel and knows exactly what having no time feels like.</p>\n          <h2>How do you collect receipts by WhatsApp? This is how TidGo works</h2>\n          <p>I designed TidGo so you spend as little time on paperwork as possible.</p>\n          <p><strong>No passwords.</strong> You enter your email, enter the code from the message, and you're in. Nothing complicated to remember.</p>\n          <p><strong>Receipts by WhatsApp — the most important part.</strong> You link your number once, then you just send a photo of the receipt on WhatsApp, like any other message. TidGo reads the amount, the date and the merchant, and files the expense against your account. <strong>Then you give it a quick look to confirm it's right — because it's your data and your responsibility — and your accountant can review the records too.</strong> Three sets of eyes, instead of blindly trusting a machine.</p>\n          <p>Day to day, you don't even need to open the app.</p>\n          <p><strong>CIS payslips straight from your inbox.</strong> Getting payslips, remittance notes or CIS statements by email? Forward the message to TidGo. It keeps the document attached and helps you record the income, asking you to check or add the amount when needed. For CIS subcontractors this is usually the biggest pile of paper of the year.</p>\n          <p><strong>A view for your accountant.</strong> One click connects your accountant using just their email address. They get read-only access — they can see the records and download what they need, but they can't change anything. You can revoke that access whenever you like.</p>\n          <h2>What TidGo doesn't do — and why I say it out loud</h2>\n          <p>This matters as much as the feature list.</p>\n          <p>TidGo <strong>does not submit anything to HMRC</strong>. It doesn't replace your accountant. It doesn't handle VAT, limited company accounts, payroll or corporation tax. It isn't accounting software, and it isn't trying to become one.</p>\n          <p>TidGo does one job: <strong>it collects and tidies your digital records before they reach your accountant.</strong> You or your accountant submit to HMRC using MTD-compatible software. My job is making sure there's something clean to work from.</p>\n          <p>I say this plainly because I've seen too many adverts that promise everything, and then the person behind them is afraid to answer the phone. I'd rather tell you where the line is up front.</p>\n          <h2>MTD starts with keeping records digital</h2>\n          <p>Making Tax Digital for Income Tax is already live — the first group of self-employed people and landlords came into scope in 2026, and the thresholds drop further in the years that follow. Millions of people will be affected.</p>\n          <p>The heart of it is simple: <strong>MTD requires your relevant income and expenses to be recorded digitally, including the date, amount and category.</strong> A carrier bag of paper receipts alone is not a digital record.</p>\n          <p>You don't need to understand MTD. You just need to stop losing receipts. For anything specific to your situation, ask your accountant or check GOV.UK — I don't give tax advice.</p>\n          <h2>I built this for us</h2>\n          <p>TidGo wasn't built to bury you in charts and jargon. It was built so you never have to tip a carrier bag onto the floor at nine in the evening on 31 January.</p>\n          <p>There's no big team behind this and no investors with a pitch deck. Just me — someone who drove a van for fifteen years, had this exact problem, and decided to fix it the simplest way he knew how.</p>\n          <p>TidGo is free during Early Access. After that, the planned price for TidGo Core is £4.99 a month, and you'll get clear notice before any payment begins. Your records are always yours: you can export or delete them at any time.</p>\n          <p>Right now I'm looking for 20 founding testers — people who'll use TidGo for real and tell me honestly what's wrong with it. If that sounds like you, <a href=\"/founding-tester\">here's what it involves</a>.</p>\n          <p>Have a look at how simple receipts by WhatsApp can be. And tell me what's wrong with it — honestly. That's exactly why I'm doing this.</p>"
  },
  "pl": {
    "eyebrow": "Historia TidGo",
    "html": "          <h1>Od reklamówki w vanie do prostego narzędzia — historia TidGo</h1>\n          <h2>31 stycznia, 21:00 — znasz ten scenariusz?</h2>\n          <p>Przez lata pracowałem jako samozatrudniony, jeżdżąc vanem po Wielkiej Brytanii i całej Europie. I jak większość z nas — miałem dokładnie ten sam problem z papierologią.</p>\n          <p>Paragony były wszędzie: w kieszeniach, na desce rozdzielczej, a w końcu w jednej wielkiej reklamówce w vanie. Kiedy przychodził czas na Self Assessment, 31 stycznia o dziewiątej wieczorem wysypywałem całą reklamówkę na podłogę. Efekt?</p>\n          <ul>\n            <li>Połowa paragonów była wyblakła do zera — te koszty po prostu przepadały.</li>\n            <li>Siedzenie przy piwie i stres, czy zdążę wysłać deklarację przed północą i uniknąć kary.</li>\n            <li>Zmartwiona partnerka, która co roku musiała mi pomagać w tym samym chaosie.</li>\n          </ul>\n          <p>Wtedy wymyśliłem swój pierwszy, bardzo prosty patent: zacząłem fotografować paragony i wrzucać je do osobnego folderu w telefonie. Nie było to idealne, ale przynajmniej dowód nie blakł razem z atramentem.</p>\n          <h2>Dlaczego programy księgowe wydały mi się za skomplikowane do mojej pracy?</h2>\n          <p>Kiedy z powodów zdrowotnych musiałem na jakiś czas zostać w domu, w mediach zrobiło się głośno o Making Tax Digital. Pomyślałem: dobrze, czas zająć się tym na poważnie.</p>\n          <p>Przejrzałem duże programy księgowe — Xero, QuickBooks, Sage, FreeAgent. Wielkie, globalne firmy. Naprawdę dobre narzędzia. I dla mnie jedno stało się szybko oczywiste: <strong>wydały mi się zbudowane dla księgowych, a nie dla budowlańców, kierowców, malarzy czy hydraulików.</strong></p>\n          <p>Są przeładowane funkcjami. Wykresy, prognozy, uzgadnianie transakcji bankowych, dziesięć zakładek, których nigdy nie otworzysz. Doskonale rozumiem, dlaczego księgowy albo większa firma to wszystko docenia. Ale do tej jednej rzeczy, której potrzebowałem codziennie, było tego zdecydowanie za dużo. Po dziesięciu godzinach fizycznej pracy nikomu z nas nie chce się tego uczyć. Znam ludzi, którzy zapłacili roczny abonament za taki program i zalogowali się dwa razy.</p>\n          <p>Jest też coś, o czym te firmy chyba wcale nie myślą: <strong>część z nas walczy nie tylko z papierami — walczy jeszcze z językiem.</strong> Jeśli podatki są trudne w Twoim własnym języku, to w obcym stają się murem. Dlatego TidGo działa w ośmiu językach — tych, którymi mówi wielu ludzi, dla których to narzędzie powstało — a podstawowe rekordy, które widzi księgowy, są po angielsku. Nikt nie musi niczego tłumaczyć.</p>\n          <p>Postanowiłem więc zbudować coś innego. Proste narzędzie dla zwykłych ludzi, zrobione przez kogoś, kto spędził lata za kółkiem i wie, czym jest brak czasu.</p>\n          <h2>Jak zbierać paragony przez WhatsApp? Tak działa TidGo</h2>\n          <p>Zaprojektowałem TidGo tak, żebyś poświęcał na papiery jak najmniej czasu.</p>\n          <p><strong>Bez haseł.</strong> Wpisujesz e-mail, wpisujesz kod z wiadomości i jesteś w środku. Nic skomplikowanego do zapamiętania.</p>\n          <p><strong>Paragony przez WhatsApp — najważniejsza rzecz.</strong> Podłączasz swój numer raz, a potem po prostu wysyłasz zdjęcie paragonu na WhatsAppie, jak każdą inną wiadomość. TidGo odczytuje kwotę, datę i sprzedawcę i przypisuje wydatek do Twojego konta. <strong>Potem rzucasz okiem, czy wszystko się zgadza — bo to Twoje dane i Twoja odpowiedzialność — a księgowy też może przejrzeć rekordy.</strong> Trzy pary oczu zamiast ślepego zaufania automatowi.</p>\n          <p>Na co dzień nie musisz nawet otwierać aplikacji.</p>\n          <p><strong>CIS payslipy prosto ze skrzynki.</strong> Dostajesz payslipy, remittance notes albo CIS statements na maila? Przekaż wiadomość dalej do TidGo. Dokument zostaje dołączony jako dowód, a system pomaga zapisać przychód — jeśli trzeba, poprosi Cię o sprawdzenie albo wpisanie kwoty. Dla podwykonawców w CIS to zwykle największa kupa papierów w roku.</p>\n          <p><strong>Podgląd dla księgowego.</strong> Jednym kliknięciem podłączasz księgowego, podając tylko jego adres e-mail. Dostaje dostęp tylko do odczytu — widzi rekordy i pobiera to, co potrzebuje, ale nic nie zmieni. Dostęp możesz odebrać w każdej chwili.</p>\n          <h2>Czego TidGo nie robi — i dlaczego mówię o tym wprost</h2>\n          <p>To równie ważne jak lista funkcji.</p>\n          <p>TidGo <strong>nie wysyła niczego do HMRC</strong>. Nie zastępuje księgowego. Nie obsługuje VAT-u, spółek Ltd, payrolla ani corporation tax. To nie jest program księgowy i nie próbuje się nim stać.</p>\n          <p>TidGo robi jedną rzecz: <strong>zbiera i porządkuje Twoje cyfrowe rekordy, zanim trafią do księgowego.</strong> Do HMRC składasz Ty albo Twój księgowy, przez oprogramowanie kompatybilne z MTD. Moje zadanie to dopilnować, żeby było z czego składać.</p>\n          <p>Mówię o tym wprost, bo widziałem za dużo reklam, które obiecują wszystko, a potem człowiek boi się odebrać telefon. Wolę od razu powiedzieć, gdzie jest granica.</p>\n          <h2>MTD zaczyna się od cyfrowych rekordów</h2>\n          <p>Making Tax Digital dla podatku dochodowego już działa — pierwsza grupa samozatrudnionych i wynajmujących została objęta w 2026 roku, a progi w kolejnych latach schodzą coraz niżej. Dotknie to milionów ludzi.</p>\n          <p>Sedno jest proste: <strong>MTD wymaga, żeby Twoje przychody i wydatki były zapisane cyfrowo — z datą, kwotą i kategorią.</strong> Sama reklamówka paragonów nie jest cyfrowym rekordem.</p>\n          <p>Nie musisz rozumieć MTD. Musisz tylko przestać gubić paragony. W sprawach dotyczących Twojej konkretnej sytuacji zapytaj księgowego albo sprawdź GOV.UK — ja nie udzielam porad podatkowych.</p>\n          <h2>Zbudowałem to dla nas</h2>\n          <p>TidGo nie powstało, żeby zasypać Cię wykresami i żargonem. Powstało, żebyś nigdy nie musiał wysypywać reklamówki na podłogę o dziewiątej wieczorem 31 stycznia.</p>\n          <p>Nie stoi za tym duży zespół ani inwestorzy z prezentacją. Tylko ja — ktoś, kto przez piętnaście lat jeździł vanem, miał dokładnie ten problem i postanowił rozwiązać go najprostszym sposobem, jaki znał.</p>\n          <p>TidGo jest bezpłatne w fazie Early Access. Potem planowana cena TidGo Core to £4.99 miesięcznie, a o rozpoczęciu opłat dowiesz się z wyraźnym wyprzedzeniem. Twoje rekordy zawsze należą do Ciebie: możesz je w każdej chwili wyeksportować albo usunąć.</p>\n          <p>Szukam teraz 20 founding testerów — ludzi, którzy naprawdę użyją TidGo i powiedzą mi szczerze, co jest nie tak. Jeśli to brzmi jak Ty, <a href=\"/founding-tester\">tutaj są szczegóły</a>.</p>\n          <p>Sprawdź, jak prosto można ogarnąć paragony przez WhatsAppa. I napisz mi, co jest nie tak — szczerze. Właśnie po to to robię.</p>"
  },
  "ro": {
    "eyebrow": "Povestea TidGo",
    "html": "          <h1>De la o pungă de bonuri în furgonetă la o unealtă simplă — povestea TidGo</h1>\n          <h2>31 ianuarie, ora 21:00 — îți sună cunoscut?</h2>\n          <p>Am lucrat ani la rând ca self-employed, conducând o furgonetă prin Marea Britanie și prin toată Europa. Și ca majoritatea dintre noi, aveam exact aceeași problemă cu actele.</p>\n          <p>Bonurile erau peste tot: în buzunare, pe bord și, în final, într-o pungă mare în furgonetă. Când venea vremea pentru Self Assessment, pe 31 ianuarie la nouă seara răsturnam toată punga pe jos. Rezultatul?</p>\n          <ul>\n            <li>Jumătate din bonuri se decoloraseră complet — cheltuielile acelea erau pur și simplu pierdute.</li>\n            <li>Stăteam cu o bere, stresat dacă reușesc să depun declarația înainte de miezul nopții și să evit penalizarea.</li>\n            <li>O partenerâ îngrijorată, care trebuia să mă ajute prin același haos în fiecare an.</li>\n          </ul>\n          <p>Atunci am găsit primul meu truc, foarte simplu: am început să fotografiez bonurile și să le pun într-un folder separat pe telefon. Nu era perfect, dar cel puțin dovada nu se ștergea odată cu cerneala.</p>\n          <h2>De ce programele de contabilitate mi s-au părut prea complicate pentru felul în care lucram?</h2>\n          <p>Când probleme de sănătate m-au ținut o vreme acasă, Making Tax Digital era subiectul zilei în presă. M-am gândit: bine, e timpul să mă ocup serios de asta.</p>\n          <p>Am trecut prin programele mari de contabilitate — Xero, QuickBooks, Sage, FreeAgent. Companii mari, globale. Unelte cu adevărat bune. Și pentru mine un lucru a devenit repede evident: <strong>mi s-au părut construite pentru contabili, nu pentru constructori, șoferi, zugravi sau instalatori.</strong></p>\n          <p>Sunt încărcate de funcții. Grafice, prognoze, reconciliere bancară, zece taburi pe care nu le vei deschide niciodată. Înțeleg perfect de ce un contabil sau o firmă mai mare apreciază toate acestea. Dar pentru singurul lucru de care aveam nevoie în fiecare zi, era mult prea mult. După zece ore de muncă fizică, niciunul dintre noi nu are chef să învețe asta. Cunosc oameni care au plătit un abonament anual pentru un astfel de program și s-au logat de două ori.</p>\n          <p>Și mai e ceva la care aceste companii nu se gândesc deloc: <strong>unii dintre noi nu se luptă doar cu actele — se luptă și cu limba.</strong> Dacă taxele sunt grele în limba ta, într-o limbă străină devin un perete. De aceea TidGo funcționează în opt limbi — cele vorbite de mulți dintre oamenii pentru care a fost construit — iar înregistrările principale pe care le vede contabilul sunt în engleză. Nimeni nu trebuie să traducă nimic.</p>\n          <p>Așa că am decis să construiesc altceva. O unealtă simplă pentru oameni obișnuiți, făcută de cineva care a petrecut ani la volan și știe exact ce înseamnă să nu ai timp.</p>\n          <h2>Cum trimiți bonuri pe WhatsApp? Așa funcționează TidGo</h2>\n          <p>Am proiectat TidGo ca să pierzi cât mai puțin timp cu actele.</p>\n          <p><strong>Fără parole.</strong> Introduci adresa de email, introduci codul din mesaj și ești înăuntru. Nimic complicat de ținut minte.</p>\n          <p><strong>Bonuri pe WhatsApp — partea cea mai importantă.</strong> Îți conectezi numărul o singură dată, apoi trimiți poza bonului pe WhatsApp, ca orice alt mesaj. TidGo citește suma, data și comerciantul și înregistrează cheltuiala în contul tău. <strong>Apoi arunci o privire ca să confirmi că e corect — pentru că sunt datele tale și responsabilitatea ta — iar contabilul poate verifica și el înregistrările.</strong> Trei perechi de ochi, în loc să te încrezi orbește într-un automat.</p>\n          <p>Zi de zi, nici nu trebuie să deschizi aplicația.</p>\n          <p><strong>Payslipuri CIS direct din inbox.</strong> Primești payslipuri, remittance notes sau CIS statements pe email? Forwardează mesajul către TidGo. Documentul rămâne atașat ca dovadă, iar sistemul te ajută să înregistrezi venitul — dacă e nevoie, îți cere să verifici sau să adaugi suma. Pentru subcontractorii din CIS acesta e de obicei cel mai mare morman de hârtii din an.</p>\n          <p><strong>Acces pentru contabil.</strong> Cu un click îți conectezi contabilul, folosind doar adresa lui de email. Primește acces doar de citire — vede înregistrările și descarcă ce are nevoie, dar nu poate schimba nimic. Poți retrage accesul oricând.</p>\n          <h2>Ce nu face TidGo — și de ce o spun deschis</h2>\n          <p>Asta contează la fel de mult ca lista de funcții.</p>\n          <p>TidGo <strong>nu trimite nimic la HMRC</strong>. Nu îți înlocuiește contabilul. Nu se ocupă de VAT, de conturi de firmă Ltd, de payroll sau de corporation tax. Nu este un program de contabilitate și nici nu încearcă să devină unul.</p>\n          <p>TidGo face un singur lucru: <strong>strânge și ordonează înregistrările tale digitale înainte să ajungă la contabil.</strong> Depunerea la HMRC o faci tu sau contabilul tău, folosind software compatibil cu MTD. Treaba mea e să mă asigur că există ceva ordonat de la care să pornească.</p>\n          <p>Spun asta deschis pentru că am văzut prea multe reclame care promit totul, iar apoi omul din spatele lor se teme să răspundă la telefon. Prefer să spun de la început unde e limita.</p>\n          <h2>MTD începe cu înregistrări digitale</h2>\n          <p>Making Tax Digital pentru Income Tax este deja activ — primul grup de persoane self-employed și de proprietari care închiriază a intrat în scop în 2026, iar plafoanele scad în anii următori. Va afecta milioane de oameni.</p>\n          <p>Esența e simplă: <strong>MTD cere ca veniturile și cheltuielile relevante să fie înregistrate digital — cu dată, sumă și categorie.</strong> O pungă cu bonuri pe hârtie nu este, în sine, o înregistrare digitală.</p>\n          <p>Nu trebuie să înțelegi MTD. Trebuie doar să nu mai pierzi bonuri. Pentru orice ține de situația ta concretă, întreabă-ți contabilul sau verifică GOV.UK — eu nu ofer consultanță fiscală.</p>\n          <h2>Am construit asta pentru noi</h2>\n          <p>TidGo nu a fost construit ca să te îngroape în grafice și jargon. A fost construit ca să nu mai fii nevoit să răstorni o pungă de bonuri pe jos la nouă seara, pe 31 ianuarie.</p>\n          <p>Nu e nicio echipă mare în spate și niciun investitor cu prezentare. Doar eu — cineva care a condus o furgonetă cincisprezece ani, a avut exact această problemă și a decis să o rezolve în cel mai simplu mod pe care îl știa.</p>\n          <p>TidGo este gratuit în perioada Early Access. După aceea, prețul planificat pentru TidGo Core este £4.99 pe lună, iar vei fi anunțat clar înainte de începerea oricărei plăți. Înregistrările tale îți aparțin întotdeauna: le poți exporta sau șterge oricând.</p>\n          <p>Caut acum 20 de founding testers — oameni care vor folosi TidGo pe viu și îmi vor spune sincer ce nu e în regulă. Dacă asta sună ca tine, <a href=\"/founding-tester\">aici sunt detaliile</a>.</p>\n          <p>Vezi cât de simplu poate fi cu bonurile pe WhatsApp. Și spune-mi ce nu e în regulă — sincer. Exact de asta fac asta.</p>"
  },
  "lt": {
    "eyebrow": "TidGo istorija",
    "html": "          <h1>Nuo kvitų maišelio furgone iki paprasto įrankio — TidGo istorija</h1>\n          <h2>Sausio 31, 21:00 — pažįstama?</h2>\n          <p>Daug metų dirbau savarankiškai, vairuodamas furgoną po Didžiąją Britaniją ir visą Europą. Ir kaip dauguma mūsų, turėjau lygiai tą pačią problemą su dokumentais.</p>\n          <p>Kvitai buvo visur: kišenėse, ant prietaisų skydelio, o galiausiai viename dideliame maišelyje furgone. Kai atėjo laikas Self Assessment, sausio 31 dieną devintą vakaro išpildavau visą maišelį ant grindų. Rezultatas?</p>\n          <ul>\n            <li>Pusė kvitų buvo visiškai išblukę — tos išlaidos tiesiog prapuolė.</li>\n            <li>Sėdėjau su alumi ir nervinausi, ar suspėsiu pateikti deklaraciją iki vidurnakčio ir išvengti baudos.</li>\n            <li>Susirūpinusi partnerė, kuri kasmet turėjo padėti man per tą patį chaosą.</li>\n          </ul>\n          <p>Tada sugalvojau savo pirmąjį, visiškai paprastą triuką: pradėjau fotografuoti kvitus ir mesti juos į atskirą telefono aplanką. Netobula, bet bent jau įrodymas nebeišbluko kartu su rašalu.</p>\n          <h2>Kodėl buhalterinės programos man pasirodė per sudėtingos mano darbui?</h2>\n          <p>Kai dėl sveikatos problemų kuriam laikui teko likti namuose, žiniasklaidoje visur buvo kalbama apie Making Tax Digital. Pamaniau: gerai, laikas tuo užsiimti rimtai.</p>\n          <p>Peržiūrėjau didžiąsias buhalterines programas — Xero, QuickBooks, Sage, FreeAgent. Didelės, pasaulinės kompanijos. Tikrai geri įrankiai. Ir man vienas dalykas greitai tapo akivaizdus: <strong>jos man pasirodė sukurtos buhalteriams, o ne statybininkams, vairuotojams, dažytojams ar santechnikams.</strong></p>\n          <p>Jos perkrautos funkcijomis. Grafikai, prognozės, banko operacijų suderinimas, dešimt skirtukų, kurių niekada neatidarysi. Puikiai suprantu, kodėl buhalteris ar didesnė įmonė visa tai vertina. Bet tam vienam darbui, kurio man reikėjo kasdien, to buvo kur kas per daug. Po dešimties valandų fizinio darbo nė vienam iš mūsų nesinori to mokytis. Pažįstu žmonių, kurie sumokėjo metinę prenumeratą už tokią programą ir prisijungė du kartus.</p>\n          <p>Ir dar yra kažkas, apie ką tos kompanijos, atrodo, visai nepagalvoja: <strong>kai kurie iš mūsų kovoja ne tik su dokumentais — kovoja dar ir su kalba.</strong> Jei mokesčiai sunkūs tavo gimtąja kalba, tai užsienio kalba jie tampa siena. Todėl TidGo veikia aštuoniomis kalbomis — tomis, kuriomis kalba daugelis žmonių, kuriems ji sukurta — o pagrindiniai įrašai, kuriuos mato buhalteris, yra angliškai. Niekam nieko nereikia versti.</p>\n          <p>Taigi nusprendžiau sukurti kažką kitą. Paprastą įrankį paprastiems žmonėms, sukurtą to, kuris pats praleido metus prie vairo ir žino, ką reiškia neturėti laiko.</p>\n          <h2>Kaip siųsti kvitus per WhatsApp? Taip veikia TidGo</h2>\n          <p>TidGo sukūriau taip, kad dokumentams sugaištum kuo mažiau laiko.</p>\n          <p><strong>Be slaptažodžių.</strong> Įvedi el. paštą, įvedi kodą iš žinutės ir esi viduje. Nieko sudėtingo, ką reikėtų atsiminti.</p>\n          <p><strong>Kvitai per WhatsApp — svarbiausia dalis.</strong> Vieną kartą prijungi savo numerį, o paskui tiesiog išsiunti kvito nuotrauką per WhatsApp, kaip bet kurią kitą žinutę. TidGo nuskaito sumą, datą ir pardavėją ir priskiria išlaidą tavo paskyrai. <strong>Tada trumpai peržiūri, ar viskas teisinga — nes tai tavo duomenys ir tavo atsakomybė — o buhalteris taip pat gali peržiūrėti įrašus.</strong> Trys akių poros, o ne aklas pasitikėjimas automatu.</p>\n          <p>Kasdien tau net nereikia atidaryti programėlės.</p>\n          <p><strong>CIS payslipai tiesiai iš el. pašto.</strong> Gauni payslipus, remittance notes ar CIS statements el. paštu? Persiųsk žinutę į TidGo. Dokumentas lieka prisegtas kaip įrodymas, o sistema padeda įrašyti pajamas — jei reikia, paprašys patikrinti arba įrašyti sumą. CIS subkontraktoriams tai paprastai didžiausia metų dokumentų kaugė.</p>\n          <p><strong>Prieiga buhalteriui.</strong> Vienu paspaudimu prijungi savo buhalterį, nurodydamas tik jo el. paštą. Jis gauna tik skaitymo prieigą — mato įrašus ir atsisiunčia, ko reikia, bet nieko negali pakeisti. Prieigą gali atšaukti bet kada.</p>\n          <h2>Ko TidGo nedaro — ir kodėl pasakau tai atvirai</h2>\n          <p>Tai ne mažiau svarbu už funkcijų sąrašą.</p>\n          <p>TidGo <strong>nieko nesiunčia į HMRC</strong>. Nepakeičia tavo buhalterio. Netvarko VAT, Ltd įmonių apskaitos, payroll ar corporation tax. Tai nėra buhalterinė programa ir ji nesiekia ja tapti.</p>\n          <p>TidGo daro vieną dalyką: <strong>surenka ir sutvarko tavo skaitmeninius įrašus, kol jie dar nepasiekė buhalterio.</strong> Į HMRC pateiki tu arba tavo buhalteris, naudodami su MTD suderinamą programinę įrangą. Mano darbas — pasirūpinti, kad būtų iš ko pateikti.</p>\n          <p>Sakau tai atvirai, nes mačiau per daug reklamų, kurios pažada viską, o paskui žmogus už jų bijo atsakyti telefonu. Verčiau iš karto pasakysiu, kur yra riba.</p>\n          <h2>MTD pradedamas nuo skaitmeninių įrašų</h2>\n          <p>Making Tax Digital pajamų mokesčiui jau veikia — pirmoji savarankiškai dirbančiųjų ir nuomotojų grupė pateko į jo apimtį 2026 metais, o slenksčiai artimiausiais metais leidžiasi vis žemiau. Tai palies milijonus žmonių.</p>\n          <p>Esmė paprasta: <strong>MTD reikalauja, kad atitinkamos pajamos ir išlaidos būtų registruojamos skaitmeniniu būdu — su data, suma ir kategorija.</strong> Vien maišelis popierinių kvitų nėra skaitmeninis įrašas.</p>\n          <p>Tau nereikia suprasti MTD. Tau tereikia nebepamesti kvitų. Dėl visko, kas susiję su tavo konkrečia situacija, pasitark su buhalteriu arba patikrink GOV.UK — aš mokesčių konsultacijų neteikiu.</p>\n          <h2>Sukūriau tai mums</h2>\n          <p>TidGo sukurta ne tam, kad užverstų tave grafikais ir žargonu. Ji sukurta tam, kad tau daugiau nereikėtų sausio 31 dieną devintą vakaro pilti kvitų maišelio ant grindų.</p>\n          <p>Už to nestovi didelė komanda ir jokie investuotojai su pristatymu. Tik aš — žmogus, kuris penkiolika metų vairavo furgoną, turėjo būtent šią problemą ir nusprendė ją išspręsti pačiu paprasčiausiu būdu, kokį žinojo.</p>\n          <p>TidGo yra nemokama Early Access laikotarpiu. Vėliau planuojama TidGo Core kaina — £4.99 per mėnesį, ir apie bet kokių mokėjimų pradžią būsi aiškiai informuotas iš anksto. Tavo įrašai visada priklauso tau: bet kada gali juos eksportuoti arba ištrinti.</p>\n          <p>Šiuo metu ieškau 20 founding testerių — žmonių, kurie realiai naudos TidGo ir nuoširdžiai pasakys, kas ne taip. Jei tai skamba kaip apie tave, <a href=\"/founding-tester\">štai detalės</a>.</p>\n          <p>Pažiūrėk, kaip paprasta gali būti su kvitais per WhatsApp. Ir pasakyk man, kas ne taip — nuoširdžiai. Būtent dėl to visa tai ir darau.</p>"
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

function androidTestersPage() {
  shell(`
    <section class="landing-screen marketing-page-screen">
      ${landingHeader("story")}
      <div class="marketing-page-layout tester-layout">
        <article class="marketing-page-card marketing-article tester-intro">
          <span class="eyebrow">Android closed testing</span>
          <h1>Become a TidGo Android tester</h1>
          <p class="marketing-lead">TidGo works in your browser right now. The Android app is in Google Play closed testing, and I am looking for 20 UK sole traders, CIS subcontractors, tradespeople and simple landlords who will test it properly.</p>
          <p>Testing is simple: join the closed test, use TidGo for real for at least 14 days, send receipts the way you normally would, and tell me honestly what works, what breaks, and what could be simpler.</p>
          <div class="tester-reward">
            <strong>Tester reward</strong>
            <span>Active Android testers get free access to the TidGo Core plan for as long as the service remains available. Non-transferable; optional future paid add-ons are not included.</span>
          </div>
          <div class="marketing-card-grid tester-conditions">
            <article><strong>What counts as active?</strong><span>Join the closed test, remain a tester for at least 14 days, actually try the app, and send short feedback or bug notes.</span></article>
            <article><strong>No fake praise</strong><span>We do not require a positive review, stars or public promotion. Honest feedback is the point.</span></article>
          </div>
        </article>

        <form class="marketing-page-card tester-form" id="androidTesterForm">
          <span class="eyebrow">Tester form</span>
          <label class="field"><span>Name</span><input class="input" name="tester_name" required autocomplete="name" placeholder="Your name"></label>
          <label class="field"><span>Gmail used in Google Play</span><input class="input" name="google_email" type="email" required autocomplete="email" placeholder="yourname@gmail.com"></label>
          <p class="hint tester-hint">This must be the Google account on your Android phone, otherwise the test link will not work for you.</p>
          <label class="field"><span>Business type</span><select class="select" name="business_type" required>
            <option value="">Choose one</option>
            <option>Sole trader</option>
            <option>CIS subcontractor</option>
            <option>Tradesperson</option>
            <option>Landlord</option>
            <option>Other</option>
          </select></label>
          <label class="field"><span>Phone model</span><input class="input" name="phone_model" required placeholder="Samsung S23, Pixel 8, etc."></label>
          <label class="field"><span>Contact email, if different</span><input class="input" name="contact_email" type="email" placeholder="Optional"></label>
          <label class="field"><span>WhatsApp number</span><input class="input" name="whatsapp_number" placeholder="Optional"></label>
          <label class="check-row legal-agree-row"><input type="checkbox" name="use_14_days" required><span>I agree to use the TidGo Android app for at least 14 days during closed testing.</span></label>
          <label class="check-row legal-agree-row"><input type="checkbox" name="send_feedback" required><span>I agree to send short honest feedback or report problems I find. Positive reviews are not required.</span></label>
          <label class="check-row legal-agree-row"><input type="checkbox" name="privacy_consent" required><span>I agree to TidGo's <a href="/privacy/" target="_blank" rel="noopener">Privacy Policy</a> and <a href="/terms/" target="_blank" rel="noopener">Terms</a>.</span></label>
          <button class="primary" type="submit">Apply to test TidGo Android</button>
          <p class="hint tester-hint">If the form misbehaves, email hello@tidgo.co.uk from the address you want to use.</p>
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
        <span><span class="summary-icon" aria-hidden="true"></span> ${t("summary")}</span><strong>›</strong>
      </button>
      <div class="grid-2" style="margin-top:14px">
        <button class="action blue" data-action="startExpense"><span>${t("addExpense")}</span><small>${t("photoDone")}</small></button>
        <button class="action green" data-action="startIncome"><span>${t("addIncome")}</span><small>${t("amountNote")}</small></button>
      </div>
      <button class="secondary share-inline app-share-button" type="button" data-action="shareTidGo">${t("shareTidGo")}</button>
      <div class="list">
        ${state.recordsLoading && !items.length ? `<div class="empty">${t("loadingRecords")}</div>` : items.length ? visibleItems.map(itemRow).join("") : `<div class="empty">${t("empty")}</div>`}
        ${items.length > transactionLimit ? `<button class="link-btn see-all-btn" data-action="showMoreTransactions">${t("seeMore")}</button>` : ""}
        ${transactionLimit > 4 ? `<button class="link-btn see-all-btn" data-action="showLessTransactions">${t("showLess")}</button>` : ""}
      </div>
    </section>
  `);
}

function businessTypeChoice() {
  const nextLabel = state.pendingRecordKind === "income" ? t("addIncome") : t("addExpense");
  shell(`
    <section class="screen">
      ${topbar(nextLabel, true)}
      <div class="card stack">
        <strong>${t("businessTypeTitle")}</strong>
        <button class="secondary" type="button" data-action="chooseBusinessType" data-business-type="self-employment">${t("businessSelfEmployment")}</button>
        <button class="secondary" type="button" data-action="chooseBusinessType" data-business-type="uk-property">${t("businessProperty")}</button>
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
  shell(`
    <section class="screen">
      ${topbar(t("expenses"), true)}
      ${imagePreviewButton(receipt.image_base64, "Receipt photo")}
      ${recordDateNeedsReview(receipt) ? dateReviewCard() : ""}
      <form class="stack" id="receiptForm" style="margin-top:14px">
        ${receiptReplaceField()}
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" value="${receipt.amount || 0}"></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency" disabled>${currencyOptions(receipt.currency || "GBP")}</select></label>
        <label class="field"><span>${t("merchant")}</span><input class="input" name="merchant" value="${escapeAttr(receipt.merchant || "")}"></label>
        <label class="field"><span>${t("date")}</span><input class="input" type="date" name="date" value="${dateInputValue(receipt.timestamp || receipt.created_at)}"></label>
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
        ${shouldAskBusinessType() ? `<p class="hint">${escapeHtml(selectedBusinessTypeLabel())}</p>` : ""}
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" required></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency">${currencyOptions("GBP")}</select></label>
        <label class="field"><span>${t("description")}</span><textarea class="textarea" name="description"></textarea></label>
        <label class="field"><span>${t("date")}</span><input class="input" type="date" name="date" value="${dateInputValue()}"></label>
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
  const proof = proofForIncome(entry.id);
  const proofUrl = incomeProofFileUrl(entry, proof);
  const proofIsPdf = incomeProofIsPdf(entry, proofUrl, proof);
  const proofImage = proofIsPdf ? "" : incomeProofImage(entry, proof);
  const proofName = incomeProofName(entry, proof) || (proofIsPdf ? "PDF proof" : "");
  shell(`
    <section class="screen">
      ${topbar(t("income"), true)}
      <form class="stack" id="incomeEditForm">
        <label class="field"><span>${t("amount")}</span><input class="input" name="amount" inputmode="decimal" value="${entry.amount || 0}"></label>
        <label class="field"><span>${t("currency")}</span><select class="select" name="currency">${currencyOptions(entry.currency || "GBP")}</select></label>
        <label class="field"><span>${t("description")}</span><textarea class="textarea" name="description">${escapeHtml(entry.description || "")}</textarea></label>
        ${recordDateNeedsReview(entry) ? dateReviewCard() : ""}
        <label class="field"><span>${t("date")}</span><input class="input" type="date" name="date" value="${dateInputValue(entry.timestamp || entry.created_at)}"></label>
        ${proofName ? `<div class="card muted">${t("proofAttached")}: ${escapeHtml(proofName)}</div>` : ""}
        ${proofIsPdf && proofUrl ? `<a class="secondary proof-link" href="${escapeAttr(proofUrl)}" target="_blank" rel="noopener">${t("proofAttached")} - ${t("openPdf")}</a>` : ""}
        ${proofImage ? imagePreviewButton(proofImage, t("proofAttached")) : ""}
        ${incomeProofPickerField(proofImage || proofName || proofUrl ? t("replaceProof") : t("attachProof"))}
        <button class="primary" type="submit">${t("save")}</button>
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
      <div class="month-switcher">
        <button class="icon-btn" data-action="prevMonth">‹</button>
        ${periodSwitcherLabel()}
        <button class="icon-btn" data-action="nextMonth">›</button>
      </div>
      <div class="total-box">
        <div class="total-row"><span>${t("income")}</span><strong>${formatTotals(income)}</strong></div>
        <div class="total-row"><span>${t("expenses")}</span><strong>${formatTotals(receipts)}</strong></div>
      </div>
      <p class="subtitle">${subtitle}</p>
      <button class="primary" data-action="sharePdf">${t("emailPdf")}</button>
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
        <label class="field"><span>${t("email")}</span><input class="input" name="email" type="email" value="${escapeAttr(state.user.email || "")}" readonly></label>
        ${settingsEmailChangeSection()}
        ${settingsWhatsAppSection(existingWhatsApp)}
        <div class="field">
          <span>${t("notificationsTitle")}</span>
          <p class="hint">${t("notificationsHint")}</p>
          <select class="select" name="notification_preference">
          <option value="email"${notificationPreference === "email" ? " selected" : ""}>${t("notifyEmail")}</option>
          <option value="push"${notificationPreference === "push" ? " selected" : ""}>${t("notifyPush")}</option>
          <option value="none"${notificationPreference === "none" ? " selected" : ""}>${t("notifyNone")}</option>
          </select>
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
        <button class="primary" type="submit">${t("save")}</button>
      </form>
      ${clientConnectionCard()}
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
        <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
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
          <span>${escapeHtml(labels[key])}</span>
        </label>
      `).join("")}
    </div>
  `;
}

function transactions() {
  return [
    ...state.receipts.filter((item) => !item.is_client_expense).map((item) => ({ type: "receipt", timestamp: item.timestamp, sortTimestamp: recordAddedAt(item), item })),
    ...state.income.map((item) => ({ type: "income", timestamp: item.timestamp, sortTimestamp: recordAddedAt(item), item }))
  ].sort((a, b) => sortTime(b.sortTimestamp) - sortTime(a.sortTimestamp));
}

function recordAddedAt(item = {}) {
  return item.created_at || item.createdAt || item.uploaded_at || item.uploadedAt || item.updated_at || item.timestamp || item.date || "";
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

function itemRow(row) {
  if (row.type === "income") {
    const item = row.item;
    return `<button class="list-item" data-open-income="${item.id}">
      <span class="list-main">
        <span class="list-title">${escapeHtml(item.description || t("income"))}${reviewBadge(item)}</span>
        <span class="list-meta">${day(item.timestamp)}</span>
      </span>
      <span class="amount income">${money(item.amount, item.currency)}</span>
    </button>`;
  }
  const item = row.item;
  return `<button class="list-item" data-open-receipt="${item.id}">
    <span class="list-main">
      <span class="list-title">${escapeHtml(item.merchant || t("unknown"))}${reviewBadge(item)}</span>
      <span class="list-meta">${t(item.category)} - ${day(item.timestamp)}</span>
    </span>
    <span class="amount expense">${money(item.amount, item.currency)}</span>
  </button>`;
}

function monthEntries() {
  return {
    receipts: state.receipts.filter((item) => !item.is_client_expense).filter(recordInCurrentPeriod),
    income: state.income.filter(recordInCurrentPeriod)
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
  return `<div class="list-item"><span><strong>${t("income")}</strong><br><span class="list-meta">${day(item.timestamp)} · ${escapeHtml(item.description || "")}</span></span><span class="amount income">${money(item.amount, item.currency)}</span></div>`;
}

function receiptSummaryRow(item) {
  return `<div class="list-item"><span><strong>${t("expenses")}</strong><br><span class="list-meta">${day(item.timestamp)} · ${escapeHtml(item.merchant || t(item.category))}</span></span><span class="amount expense">${money(item.amount, item.currency)}</span></div>`;
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
  toast(t("photoReady"));
  try {
    const image_base64 = await fileToDataUrl(file);
    const receipt = await api("/api/receipts", {
      method: "POST",
      body: JSON.stringify({
        user_id: state.user.id,
        image_base64,
        is_client_expense: isClientExpense,
        business_type: state.pendingBusinessType || defaultBusinessType(),
        humour_style: state.humour,
        language: state.language
      })
    });
    await refresh();
    focusSummaryOnRecord(state.receipts.find((item) => item.id === receipt.id) || receipt);
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

async function replaceReceiptImage(file) {
  if (!file || !state.user?.id || !state.selected) return;
  if (!file.type?.startsWith("image/")) {
    toast(t("expensePdfUnsupported"));
    return;
  }
  const oldReceiptId = state.selected;
  setBusy(true);
  toast(t("photoReady"));
  try {
    const image_base64 = await fileToDataUrl(file);
    const receipt = await api("/api/receipts", {
      method: "POST",
      body: JSON.stringify({
        user_id: state.user.id,
        image_base64,
        is_client_expense: false,
        humour_style: state.humour,
        language: state.language
      })
    });
    await api(`/api/receipts/${oldReceiptId}`, { method: "DELETE" });
    await refresh();
    focusSummaryOnRecord(state.receipts.find((item) => item.id === receipt.id) || receipt);
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
    <p>${escapeHtml(state.user?.first_name || "")} ${state.user?.trade ? " · " + escapeHtml(state.user.trade) : ""}</p>
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
    state.pendingBusinessType = target.dataset.businessType === "uk-property" ? "uk-property" : "self-employment";
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
    await refresh();
    return go("home");
  }
  if (action === "deleteIncome" && confirm(t("deleteIncomeWarning"))) {
    await api(`/api/income/${state.selected}`, { method: "DELETE" });
    await refresh();
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
    await deviceForget("rb_user");
    await deviceForget("rb_last_user");
    forget("rb_pending_signup_email");
    forget("rb_pending_signup_whatsapp");
    forget("rb_pending_income_sources");
    write("rb_signed_out", true);
    state.pendingSignupEmail = "";
    state.pendingSignupWhatsApp = "";
    state.pendingSignupIncomeSources = [];
    state.user = null;
    return go("onboarding");
  }
  if (action === "signOutDevice") {
    if (!confirm(t("signOutConfirm"))) return;
    await deviceForget("rb_user");
    await deviceForget("rb_last_user");
    forget("rb_pending_signup_email");
    forget("rb_pending_signup_whatsapp");
    forget("rb_pending_income_sources");
    write("rb_signed_out", true);
    state.pendingSignupEmail = "";
    state.pendingSignupWhatsApp = "";
    state.pendingSignupIncomeSources = [];
    state.user = null;
    state.receipts = [];
    state.income = [];
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
          "Android closed tester application",
          `Name: ${data.tester_name || ""}`,
          `Google Play Gmail: ${data.google_email || ""}`,
          `Contact email: ${data.contact_email || data.google_email || ""}`,
          `Business type: ${data.business_type || ""}`,
          `Phone model: ${data.phone_model || ""}`,
          `WhatsApp number: ${data.whatsapp_number || ""}`,
          "Agreed to 14 days: yes",
          "Agreed to feedback: yes",
          "Privacy/terms consent: yes"
        ].join("\n");
        await api("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            from_email: data.contact_email || data.google_email || null,
            role: "Android closed tester",
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
      const category = document.querySelector("[data-category].active")?.dataset.category || "other";
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount < 0) throw new Error(t("validAmount"));
      const updatedReceipt = await api(`/api/receipts/${state.selected}`, {
        method: "PATCH",
        body: JSON.stringify({
          amount,
          merchant: data.merchant || null,
          category,
          date: data.date ? new Date(`${data.date}T12:00:00`).toISOString() : null,
          date_needs_review: false,
          needs_date_review: false,
          ocr_date_needs_review: false,
          date_confidence: 1,
          date_confirmed: true
        })
      });
      await refresh();
      rememberDateReviewConfirmed(state.selected);
      state.receipts = state.receipts.map((item) => item.id === state.selected ? clearDateReviewFields({ ...item, ...updatedReceipt }) : item);
      focusSummaryOnRecord(state.receipts.find((item) => item.id === state.selected) || clearDateReviewFields(updatedReceipt));
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "incomeCreateForm") {
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount <= 0) throw new Error(t("validAmount"));
      const created = await api("/api/income", {
        method: "POST",
        body: JSON.stringify({
          user_id: state.user.id,
          amount,
          currency: data.currency,
          description: data.description || null,
          date: data.date ? new Date(`${data.date}T12:00:00`).toISOString() : null,
          business_type: state.pendingBusinessType || defaultBusinessType()
        })
      });
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
          timestamp: created.timestamp || created.created_at || (data.date ? new Date(`${data.date}T12:00:00`).toISOString() : new Date().toISOString())
        };
        state.income = attachIncomeProofs([...state.income.filter((item) => item.id !== created.id), localIncome]);
      }
      toast(t("saved"));
      return go("home");
    }
    if (form.id === "incomeEditForm") {
      const amount = normalizeAmount(data.amount);
      if (!Number.isFinite(amount) || amount <= 0) throw new Error(t("validAmount"));
      const updated = await api(`/api/income/${state.selected}`, {
        method: "PATCH",
        body: JSON.stringify({ amount, currency: data.currency, description: data.description || null })
      });
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
      const patchBody = {
        first_name: data.first_name,
        trade: data.trade || null,
        language: state.language,
        notification_preference: data.notification_preference || "none",
        income_sources: incomeSources
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
        income_sources: incomeSources
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
