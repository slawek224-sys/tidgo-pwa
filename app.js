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
    navHow: "How it works", navWho: "Who is it for?", navStory: "Founder story", navIntake: "How intake works", navFindAccountant: "Find an accountant", navAccountantPack: "For accountants", navPricing: "Launch & pricing", navFaq: "FAQ", navMtd: "MTD Knowledge Base", navContact: "Contact",
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
    navHow: "Jak to działa", navWho: "Dla kogo?", navStory: "Historia twórcy", navIntake: "Jak dodawać dokumenty", navFindAccountant: "Znajdź księgowego", navAccountantPack: "Dla księgowych", navPricing: "Start i ceny", navFaq: "FAQ", navMtd: "Baza wiedzy MTD", navContact: "Kontakt",
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
  navHow: "Cum functioneaza", navWho: "Pentru cine?", navStory: "Povestea fondatorului", foundingTester: "Devino Founding Tester", navFindAccountant: "Gaseste un contabil", navPricing: "Lansare si pret", navFaq: "FAQ", navMtd: "Baza de cunostinte MTD", navContact: "Contact",
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
  navHow: "Kaip veikia", navWho: "Kam skirta?", navStory: "Kūrėjo istorija", foundingTester: "Tapk Founding Testeriu", navFindAccountant: "Rasti buhalterį", navPricing: "Startas ir kaina", navFaq: "DUK", navMtd: "MTD žinių bazė", navContact: "Kontaktai",
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
  mtdQualifyingIncome: "Co to jest qualifying income?",
  mtdQualifyingIncomeText: "Qualifying income decyduje, czy obejmie Cię MTD. To przychód brutto przed kosztami, nie zysk.",
  mtdGateway: "Government Gateway a MTD",
  mtdGatewayText: "Konto Government Gateway albo GOV.UK One Login to tylko login. Rejestracja do Making Tax Digital to osobny krok.",
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
  mtdCisMyths: "Mity CIS, ktore aplikacje ksiegowe czesto robia zle",
  mtdDigitalRecords: "Cyfrowe rekordy",
  mtdQuarterlyUpdates: "Quarterly updates",
  mtdFaqs: "FAQ MTD",
  mtdGettingStartedText: "Zacznij od praktycznej podstawy: przychody, wydatki i dowody w cyfrowej formie zanim przyjdzie presja terminu.",
  mtdSoleTradersText: "Dla sole traderów MTD zaczyna się od jasnych cyfrowych rekordów przychodów i kosztów, nie od skomplikowanych dashboardów.",
  mtdLandlordsText: "Landlord potrzebuje prostego sposobu na trzymanie przychodów z najmu, kosztów i dowodów w jednym miejscu.",
  mtdCisText: "CIS workers często mają paliwo, narzędzia, materiały, remittance notices i rozrzucone dowody. TidGo pasuje do takiego chaosu.",
  mtdCisMythsText: "Niepotrzebne faktury, pulapka kwoty netto i drogie narzedzia zbudowane do pracy, ktorej CIS subcontractor czesto nie potrzebuje.",
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
  copyright: "© 2026 TidGo. Visos teises saugomos."
});

Object.assign(MARKETING_COPY.en, {
  heroTitle: "If you can use WhatsApp, you can use TidGo.",
  heroText: "Send receipt photos, forward CIS payslips, or type a quick income amount. TidGo keeps your records tidy, flags what needs checking, and prepares a clean handoff for your accountant — an MTD receipt app without open banking.",
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
   videoSectionTitle: "Zobacz TidGo w 30 sekund",
  videoSectionText: "Trzy krotkie filmy: paragony przez WhatsApp, TidGo w roznych jezykach i czystsza paczka dla ksiegowego.",
  videoWhatsAppTitle: "Wysylaj paragony przez WhatsApp",
  videoWhatsAppText: "Zrob zdjecie, wyslij, trzymaj razem z rekordami.",
  videoLanguagesTitle: "Uzywaj TidGo w swoim jezyku",
  videoLanguagesText: "Prostsza aplikacja do rekordow dla ludzi, ktorzy mysla w wiecej niz jednym jezyku.",
  videoAccountantTitle: "Ksiegowy dostaje czystsza paczke",
  videoAccountantText: "Mniej papierowego chaosu, czytelniejsze podsumowania miesieczne i kwartalne.",
  videoWatch: "Obejrzyj na YouTube", shareTidGo: "Udostępnij TidGo",
  shareTitle: "TidGo",
  shareText: "TidGo trzyma paragony, dowody przychodu i proste rekordy w porządku dla self-employed i księgowych.",
  shareCopied: "Link TidGo skopiowany.",
  mtdTestingTitle: "Testy wysyłki MTD",
  mtdTestingText: "TidGo testuje obecnie po&#322;&#261;czenie MTD w sandboxie HMRC. Kwartalne wysy&#322;ki MTD s&#261; w trakcie developmentu i czekaj&#261; na produkcyjne zatwierdzenie HMRC. Kolejny update HMRC jest spodziewany do ko&#324;ca wrze&#347;nia 2026.",
  mtdLateTitle: "Termin kwartalnego update'u już minął?",
  mtdLateText: "Termin 7 sierpnia min&#261;&#322;? W roku 2026/27 nie ma penalty points. Zobacz, co naprawd&#281; dzieje si&#281; dalej.",
  mtdResponsibilities: "MTD: co robisz Ty, a co robi ksi\u0119gowy",
  mtdResponsibilitiesText: "Prosta tabela pokazuj\u0105ca, czego MTD naprawd\u0119 wymaga, co jest opcjonalne i dlaczego quarterly update nie jest kwartalnym tax return.",  mtdAutoSignup: "HMRC automatycznie zapisało Cię do MTD?",
  mtdAutoSignupText: "Dostałeś list, że HMRC zapisało Cię automatycznie do MTD? Zobacz, co to znaczy i co zrobić dalej.",
  mtdSourceTitle: "Oficjalne źródło",
  mtdSourceText: "Przeczytaj publiczne GOV.UK guidance o Making Tax Digital for Income Tax i quarterly updates.",
  launchPricingFullText: "TidGo jest w early access dla małej grupy prawdziwych użytkowników. Jest darmowe, kiedy zbieramy feedback, poprawiamy aplikację i przygotowujemy jaśniejsze poradniki. Użytkownicy dostaną jasną informację z wyprzedzeniem i zawsze będą mogli wyeksportować albo usunąć swoje rekordy.",
  pricingText: "TidGo jest darmowe w trakcie early access. Jeśli wprowadzimy płatne plany, użytkownicy dostaną jasną informację z wyprzedzeniem i zawsze będą mogli wyeksportować albo usunąć swoje rekordy.",
  mtdWho: "Czy MTD dotyczy Ciebie?",
  mtdWhoText: "Progi, zwolnienia i proste wyjaśnienie, co Making Tax Digital naprawdę oznacza.",
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
  mtdWho: "Ți se aplică MTD?",
  mtdWhoText: "Praguri, scutiri și explicația simplă a ceea ce înseamnă Making Tax Digital.",
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
  mtdResponsibilitiesText: "Paprasta lentele apie tai, ko MTD is tikruju reikalauja, kas neprivaloma ir kodel quarterly update nera ketvirtine mokesciu deklaracija.",  mtdAutoSignup: "HMRC automatiškai įtraukė jus į MTD?",
  mtdAutoSignupText: "Gavote laišką, kad HMRC automatiškai įtraukė jus į MTD? Štai ką tai reiškia ir ką daryti toliau.",
  mtdSourceTitle: "Oficialus saltinis",
  mtdSourceText: "Skaitykite viesas GOV.UK gaires apie Making Tax Digital for Income Tax ir quarterly updates.",
  launchPricingFullText: "TidGo yra early access mazai tikru vartotoju grupei. Programa nemokama, kol renkame atsiliepimus, geriname ja ir ruosiame aiskesnius gidus. Vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus.",
  pricingText: "TidGo nemokama early access metu. Jei bus ivesti mokami planai, vartotojai bus aiskiai informuoti is anksto ir visada gales eksportuoti arba istrinti savo irasus.",
  mtdWho: "Ar MTD taikomas tau?",
  mtdWhoText: "Ribos, išimtys ir paprastas paaiškinimas, ką Making Tax Digital iš tikrųjų reiškia.",
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
    price: "£4.99 per month",
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
    earlyText: "TidGo is free during Early Access until 1 September 2026. After paid plans begin, every subscription starts with 14 days free, then £4.99 per month.",
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
    price: "£4.99 miesiecznie",
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
    earlyText: "TidGo jest bezplatne w Early Access do 1 wrzesnia 2026. Gdy zaczna sie platne plany, kazda subskrypcja zacznie sie od 14 dni za darmo, potem £4.99 miesiecznie.",
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
    price: "£4.99 pe luna",
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
    earlyText: "TidGo este gratuit in Early Access pana la 1 septembrie 2026. Dupa inceperea planurilor platite, fiecare abonament incepe cu 14 zile gratuite, apoi £4.99 pe luna.",
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
    price: "£4.99 per menesi",
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
    earlyText: "TidGo yra nemokama Early Access laikotarpiu iki 2026 m. rugsejo 1 d. Kai prasides mokami planai, kiekviena prenumerata prasides nuo 14 dienu nemokamo laikotarpio, tada £4.99 per menesi.",
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
    businessCategory: "Przypisz do biznesu",
    summaryBusinessFilter: "Podsumowanie dla",
    allBusinessRecords: "Wszystkie rekordy",
    summaryBusinessHint: "Wszystkie rekordy dla ksiegowego. Jeden biznes dla liczb pod MTD.",
    addBusiness: "Dodaj biznes",
    removeBusiness: "Usuń biznes",
    removeBusinessConfirm: "Usunąć ten biznes z aktywnej listy? Istniejące rekordy nie zostaną usunięte. Zostaną w Wszystkie rekordy, dopóki nie przeniesiesz ich do innego biznesu.",
    archivedBusiness: "Archiwalny biznes",
    moveRecordHint: "Przenieś ten rekord do innego aktywnego biznesu, jeśli trafił w złe miejsce.",
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
    signOutHint: "Użyj, gdy chcesz przetestować odzyskiwanie albo przejść na inne konto. To czyści sesję na tym urządzeniu i odłącza WhatsApp dla tego konta, jeśli API już to obsługuje. To nie usuwa paragonów.",
    signOutConfirm: "To wyloguje Cię na tym urządzeniu, wyczyści zapisaną sesję WhatsApp i pokaże ekran odzyskiwania emailem. Paragony nie zostaną usunięte.",
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
    replaceReceiptHint: "Użyj tego, jeśli TidGo poprosiło o wyraźniejsze zdjęcie. Nowe zdjęcie zostanie odczytane ponownie i zastąpi ten paragon.",
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
  duplicateReviewTitle: "To wygląda jak możliwy duplikat",
  duplicateReviewHint: "TidGo znalazło bardzo podobny paragon zapisany już na tym koncie. Sprawdź zdjęcie, datę, kwotę i sprzedawcę przed użyciem tego rekordu w podsumowaniu.",
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
  duplicateReviewTitle: "Tai gali būti dublikatas",
  duplicateReviewHint: "TidGo rado labai panašų kvitą, jau išsaugotą šioje paskyroje. Patikrink nuotrauką, datą, sumą ir pardavėją prieš naudodamas šį įrašą suvestinėje.",
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
  duplicateReviewTitle: "Це може бути дублікат",
  duplicateReviewHint: "TidGo знайшов дуже схожий чек, уже збережений у цьому акаунті. Перевірте фото, дату, суму й продавця перед використанням цього запису у підсумку.",
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
  duplicateReviewTitle: "Tas var būt dublikāts",
  duplicateReviewHint: "TidGo atrada ļoti līdzīgu čeku, kas jau ir saglabāts šajā kontā. Pirms izmantošanas kopsavilkumā pārbaudi foto, datumu, summu un tirgotāju.",
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
  duplicateReviewTitle: "Това може да е дубликат",
  duplicateReviewHint: "TidGo намери много подобна бележка, която вече е записана в този акаунт. Проверете снимката, датата, сумата и търговеца, преди да използвате този запис в справка.",
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
    pl: { privacy: "Polityka prywatności", terms: "Regulamin" },
    ro: { privacy: "Politica de confidențialitate", terms: "Termeni" },
    lt: { privacy: "Privatumo politika", terms: "Sąlygos" }
  };
  const languageTitles = titles[state.marketingLanguage] || titles.en;
  return languageTitles[kind] || titles.en[kind] || kind;
}

function marketingOfficialLegalNotice() {
  if (state.marketingLanguage === "en") return "";
  const titles = {
    pl: "Oficjalna wersja angielska",
    ro: "Versiunea oficială în engleză",
    lt: "Oficiali angliška versija"
  };
  const notices = {
    pl: "Pełny dokument prawny jest dostępny po angielsku, ponieważ TidGo jest firmą zarejestrowaną w UK, a wersja angielska jest oficjalną wersją prawną.",
    ro: "Documentul juridic complet este disponibil în limba engleză, deoarece TidGo este o companie înregistrată în UK, iar versiunea în limba engleză este versiunea juridică oficială.",
    lt: "Pilnas teisinis dokumentas pateikiamas anglų kalba, nes TidGo yra JK registruota įmonė, o angliška versija yra oficiali teisinė versija."
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
    "html": "<h2>I've used Excel for twenty years. It worked. Why is it suddenly a problem?</h2>\n<p>It isn't. Not exactly.</p>\n<p>Excel is not banned under Making Tax Digital. HMRC has not sent anyone a letter saying &quot;delete your spreadsheets immediately or face consequences.&quot; If someone told you that, they were wrong.</p>\n<p>But — and this is the bit nobody explains clearly — Excel on its own is not enough anymore. Not because your spreadsheet is wrong. Because of how it connects to everything else.</p>\n<p>Here's the actual rule: your digital records must flow to HMRC through a <strong>digital link</strong>. No manual retyping. No copy-paste between systems. No printing it out and typing the numbers in somewhere else. The data has to move digitally, end to end.</p>\n<p>Excel doesn't talk to HMRC directly. So if you want to keep your spreadsheet, you need something in the middle — a <strong>bridging software</strong> — that reads your Excel and sends the numbers to HMRC without you touching them.</p>\n<p>That's it. Excel plus bridging software equals legal. Excel alone equals not compliant.</p>\n<h2>So what's bridging software then?</h2>\n<p>Think of it as a translator. Your Excel speaks &quot;spreadsheet.&quot; HMRC speaks &quot;API.&quot; Bridging software sits between them, reads your numbers and sends them in the right format.</p>\n<p>There are plenty of options — some free, some cheap, some part of bigger packages. HMRC keeps <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">a list of compatible software</a> and bridging tools are on there.</p>\n<h2>The bit Excel can't help you with: keeping the actual receipts</h2>\n<p>Here's the part that often gets lost in the Excel conversation.</p>\n<p>Even if your spreadsheet is perfectly connected and fully compliant, <strong>you still need to keep the receipts, invoices and payslips behind those numbers for five years.</strong></p>\n<p>Not in Excel. The actual documents.</p>\n<p>HMRC doesn't want your spreadsheet as proof. HMRC wants the receipt that proves the number in the spreadsheet is real. Your digital record (date, amount, category) is what MTD requires. The supporting document (the receipt, the invoice, the bank statement) is what the law has always required — and still does.</p>\n<p>A thermal receipt from a builders' merchant is unreadable long before five years are up. Paper fades. <a href=\"/mtd/do-i-have-to-photograph-receipts\">The full explanation of what HMRC actually requires — and why photos help even though they're not mandatory — is here.</a></p>\n<p><strong>TidGo collects receipts, CIS payslips and income proof as they happen — by WhatsApp photo, forwarded email or in the app. Works alongside your spreadsheet, not instead of it. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Try free, no card needed →</a></strong></p>\n<h2>The copy-paste rule — this one catches people out</h2>\n<p>Once you've submitted a quarterly update, you cannot manually transfer those records to another system. Not by retyping. Not by copy-paste. Not by screenshotting and entering manually somewhere else.</p>\n<p>If you use more than one piece of software — say, Excel for recording and something else for submitting — they must be <strong>digitally linked</strong>. Meaning the data flows automatically, not through your fingers.</p>\n<p>One practical example: you keep a spreadsheet, do your quarterly totals, copy them into a different program to submit. That's exactly what the rule prohibits. The spreadsheet needs to feed the submission software directly — formula, data connection, export. Not Ctrl+C, Ctrl+V.</p>\n<p><strong>The digital link between your records and your submission is the part most people get wrong. TidGo handles the record side — tidy, dated, categorised — so whoever does your submission has something clean to work from. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">See how it works →</a></strong></p>\n<h2>What if my turnover is under £90,000?</h2>\n<p>Good news. Below £90,000 turnover from a self-employment source, you can use <strong>simplified categorisation</strong> — meaning you only record whether each transaction is income or an expense. No subcategories, no splitting fuel from materials from tools.</p>\n<p>For a lot of sole traders, that's a very short spreadsheet. Which makes the bridging software conversation a lot simpler.</p>\n<h2>Where to keep the actual documents</h2>\n<p>Cloud storage. Your computer. An external drive. A USB stick. Wherever you can find them in five years and they'll still be readable.</p>\n<p>A floppy disc, if you still have a machine that reads them — HMRC hasn't specifically banned those either. CD-ROM is also technically fine. Though we'd gently suggest a backup plan. And a backup of the backup. On something made after 2005.</p>\n<h2>Honestly — should you bother with Excel at all?</h2>\n<p>If you're already comfortable with spreadsheets and your records are clean — keeping Excel with a bridging tool is a perfectly reasonable choice. It costs less than full accounting software, you understand it, and it works.</p>\n<p>If you're not really using Excel properly anyway — just throwing numbers in somewhere and hoping for the best — this might be the moment to try something simpler. Not because the law requires it. Because a mess in Excel is still a mess, just a digital one.</p>\n<p>For your specific situation, ask your accountant. This covers the general rules. Not tax advice.</p>\n<p><strong>TidGo works with your accountant, not instead of them. Works with your spreadsheet, not instead of it. Works before HMRC asks questions — not instead of answering them.</strong> <strong>Not a replacement for any of them. Just the layer that was missing.</strong> <strong><a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Start free — no card needed →</a></strong></p>\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital — create digital records</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find compatible software</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a> — GOV.UK</li>\n</ul>"
  },
  "pl": {
    "title": "Czy muszę wyrzucić Excela? Arkusze, MTD i bridging software po ludzku",
    "html": "<h2>Mam Excela od dwudziestu lat. Działał. Dlaczego nagle jest problemem?</h2>\n<p>Nie jest. Nie do końca.</p>\n<p>Excel nie jest zakazany przez Making Tax Digital. HMRC nie wysłało nikomu listu z napisem &quot;usuń arkusze natychmiast albo grożą konsekwencje&quot;. Jeśli ktoś Ci tak powiedział — mylił się.</p>\n<p>Ale — i tu jest ta część, której nikt nie tłumaczy wprost — sam Excel już nie wystarczy. Nie dlatego że Twój arkusz jest zły. Dlatego jak się łączy z resztą świata.</p>\n<p>Zasada jest taka: Twoje cyfrowe rekordy muszą płynąć do HMRC przez <strong>cyfrowe połączenie</strong>. Żadnego ręcznego przepisywania. Żadnego copy-paste między programami. Żadnego drukowania i wpisywania na nowo gdzieś indziej. Dane muszą płynąć cyfrowo, od początku do końca.</p>\n<p>Excel sam w sobie nie rozmawia z HMRC. Więc jeśli chcesz zatrzymać arkusz, potrzebujesz czegoś pośrodku — <strong>bridging software</strong> — które czyta Twój Excel i wysyła liczby do HMRC bez Twojej ręki pomiędzy.</p>\n<p>Tyle. Excel plus bridging software równa się legalnie. Sam Excel równa się niezgodnie z przepisami.</p>\n<h2>No to czym jest ten bridging software?</h2>\n<p>Tłumaczem. Twój Excel mówi po &quot;arkuszowemu&quot;. HMRC mówi po &quot;API&quot;. Bridging software siedzi między nimi, czyta Twoje liczby i wysyła je we właściwym formacie.</p>\n<p>Jest sporo opcji — niektóre darmowe, niektóre tanie, niektóre jako część większych pakietów. HMRC prowadzi <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">listę kompatybilnego oprogramowania</a> i narzędzia bridging są tam uwzględnione.</p>\n<h2>Część, z którą Excel Ci nie pomoże: prawdziwe dowody</h2>\n<p>I tu jest rzecz, która ginie w tej całej rozmowie o Excelu.</p>\n<p>Nawet jeśli Twój arkusz jest perfekcyjnie podłączony i w pełni zgodny z przepisami — <strong>i tak musisz trzymać paragony, faktury i payslipy za tymi liczbami przez pięć lat.</strong></p>\n<p>Nie w Excelu. Prawdziwe dokumenty.</p>\n<p>HMRC nie chce Twojego arkusza jako dowodu. Chce paragonu, który udowadnia że liczba w arkuszu jest prawdziwa. Twój cyfrowy rekord (data, kwota, kategoria) to co wymaga MTD. Dokument źródłowy (paragon, faktura, wyciąg bankowy) to co prawo zawsze wymagało — i nadal wymaga.</p>\n<p>Paragon termiczny ze składu budowlanego jest nieczytelny na długo przed upływem pięciu lat. Papier blaknie. <a href=\"/pl/mtd/do-i-have-to-photograph-receipts\">Pełne wyjaśnienie czego HMRC naprawdę wymaga — i dlaczego zdjęcia pomagają nawet jeśli nie są obowiązkowe — jest tutaj.</a></p>\n<p><strong>TidGo zbiera paragony, payslipy CIS i dowody przychodu na bieżąco — przez zdjęcie na WhatsAppie, przekazany mail lub w aplikacji. Działa obok Twojego arkusza, nie zamiast niego. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Wypróbuj za darmo, bez karty →</a></strong></p>\n<h2>Zasada o copy-paste — tu się wielu potyka</h2>\n<p>Po wysłaniu kwartalnego raportu nie możesz ręcznie przenosić rekordów do innego systemu. Ani przez przepisywanie. Ani przez copy-paste. Ani przez robienie screenshota i wpisywanie gdzie indziej.</p>\n<p>Jeśli używasz więcej niż jednego programu — powiedzmy Excel do zapisywania i coś innego do wysyłania — muszą być <strong>cyfrowo połączone</strong>. Dane płyną automatycznie, nie przez Twoje palce.</p>\n<p>Praktyczny przykład: masz arkusz, robisz kwartalne sumy, kopiujesz je do innego programu żeby wysłać. Właśnie to zabrania przepis. Arkusz musi zasilać program do wysyłki bezpośrednio — przez formułę, połączenie danych, eksport. Nie przez Ctrl+C, Ctrl+V.</p>\n<p><strong>Cyfrowe połączenie między rekordami a wysyłką — to jest część, którą większość ludzi robi źle. TidGo ogarnia stronę rekordów — czyste, datowane, skategoryzowane — żeby ten, kto robi Twoją wysyłkę, miał z czego pracować. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Zobacz jak to działa →</a></strong></p>\n<h2>Co jeśli mój obrót jest poniżej £90 000?</h2>\n<p>Dobra wiadomość. Poniżej £90 000 obrotu z działalności możesz używać <strong>uproszczonej kategoryzacji</strong> — wpisujesz tylko czy transakcja to przychód czy wydatek. Bez podkategorii, bez rozdzielania paliwa od materiałów od narzędzi.</p>\n<p>Dla wielu sole traderów to bardzo krótki arkusz. Co sprawia że rozmowa o bridging software staje się dużo prostsza.</p>\n<h2>Gdzie trzymać prawdziwe dokumenty</h2>\n<p>Chmura. Komputer. Zewnętrzny dysk. Pendrive. Gdziekolwiek gdzie je znajdziesz za pięć lat i będą nadal czytelne.</p>\n<p>Dyskietka 3,5 cala, jeśli masz jeszcze komputer który ją czyta — HMRC tego też oficjalnie nie zabroniło. CD-ROM technicznie też jest w porządku. Choć delikatnie sugerujemy plan awaryjny. I kopię zapasową kopii zapasowej. Na czymś wyprodukowanym po 2005 roku.</p>\n<h2>Szczerze — czy w ogóle warto bawić się Excelem?</h2>\n<p>Jeśli już dobrze czujesz się z arkuszami i Twoje rekordy są czyste — Excel z bridging software to całkowicie rozsądny wybór. Kosztuje mniej niż pełne oprogramowanie księgowe, rozumiesz to, i działa.</p>\n<p>Jeśli tak naprawdę nie używasz Excela porządnie — wrzucasz liczby byle gdzie i masz nadzieję że jakoś to będzie — może to jest moment żeby spróbować czegoś prostszego. Nie dlatego że prawo tego wymaga. Dlatego że bałagan w Excelu to nadal bałagan, tylko cyfrowy.</p>\n<p>W sprawach dotyczących Twojej sytuacji — zapytaj księgowego. Ta strona opisuje ogólne zasady. Nie jest poradą podatkową.</p>\n<p><strong>TidGo działa z Twoim księgowym, nie zamiast niego. Działa z Twoim arkuszem, nie zamiast niego. Działa zanim skarbówka zacznie pytać — nie zamiast odpowiadać.</strong> <strong>Nie zastępuje żadnego z nich. Jest tylko tą warstwą, której brakowało.</strong> <strong><a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Zacznij za darmo — bez karty →</a></strong></p>\n<h2>Źródła</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital — create digital records</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find compatible software</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a> — GOV.UK</li>\n</ul>"
  },
  "ro": {
    "title": "Trebuie să renunț la Excel? Foi de calcul, MTD și bridging software explicat",
    "html": "<h2>Am folosit Excel douăzeci de ani. A funcționat. De ce e brusc o problemă?</h2>\n<p>Nu este. Nu exact.</p>\n<p>Excel nu este interzis prin Making Tax Digital. HMRC nu a trimis nimănui o scrisoare care să spună &quot;șterge imediat foile de calcul sau ai de suferit.&quot; Dacă cineva ți-a spus asta — a greșit.</p>\n<p>Dar — și aceasta este partea pe care nimeni nu o explică clar — Excel singur nu mai este suficient. Nu pentru că foaia ta de calcul este greșită. Ci din cauza modului în care se conectează cu restul.</p>\n<p>Regula reală: evidențele tale digitale trebuie să ajungă la HMRC printr-o <strong>legătură digitală</strong>. Fără retastare manuală. Fără copy-paste între sisteme. Fără tipărire și retastare în altă parte. Datele trebuie să circule digital, de la un capăt la altul.</p>\n<p>Excel nu comunică direct cu HMRC. Deci dacă vrei să-ți păstrezi foaia de calcul, ai nevoie de ceva intermediar — un <strong>bridging software</strong> — care citește Excel-ul tău și trimite numerele la HMRC fără ca tu să le atingi.</p>\n<p>Atât. Excel plus bridging software înseamnă legal. Excel singur înseamnă neconform.</p>\n<h2>Deci ce este bridging software-ul?</h2>\n<p>Un traducător. Excel-ul tău vorbește &quot;foaie de calcul.&quot; HMRC vorbește &quot;API.&quot; Bridging software-ul stă între ele, citește numerele tale și le trimite în formatul corect.</p>\n<p>Există multe opțiuni — unele gratuite, unele ieftine. HMRC menține <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">o listă de software compatibil</a> și instrumentele bridging sunt acolo.</p>\n<h2>Partea cu care Excel nu te poate ajuta: bonurile reale</h2>\n<p>Chiar dacă foaia ta de calcul este perfect conectată, <strong>tot trebuie să păstrezi bonurile, facturile și payslipurile din spatele acelor numere timp de cinci ani.</strong></p>\n<p>Nu în Excel. Documentele reale.</p>\n<p>HMRC nu vrea foaia ta de calcul ca dovadă. Vrea bonul care dovedește că numărul din foaie este real. <a href=\"/ro/mtd/do-i-have-to-photograph-receipts\">Explicația completă a ce cere HMRC de fapt este aici.</a></p>\n<p><strong>TidGo colectează bonuri, payslipuri CIS și dovezi de venit pe măsură ce apar — prin fotografie pe WhatsApp, email transmis sau în aplicație. Funcționează alături de foaia ta de calcul, nu în locul ei. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Încearcă gratuit, fără card →</a></strong></p>\n<h2>Regula copy-paste — aceasta prinde pe mulți</h2>\n<p>După ce ai trimis o actualizare trimestrială, nu poți transfera manual acele înregistrări în alt sistem. Nici prin retastare. Nici prin copy-paste.</p>\n<p>Dacă folosești mai mult de un program — să zicem Excel pentru înregistrare și altceva pentru trimitere — acestea trebuie să fie <strong>legate digital</strong>. Datele circulă automat, nu prin degetele tale.</p>\n<p><strong>Legătura digitală dintre înregistrări și trimitere — aceasta este partea pe care cei mai mulți o fac greșit. TidGo se ocupă de partea înregistrărilor — curate, datate, categorisite. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Vezi cum funcționează →</a></strong></p>\n<h2>Dacă cifra de afaceri este sub £90.000?</h2>\n<p>Sub £90.000 poți folosi <strong>categorizarea simplificată</strong> — înregistrezi doar dacă fiecare tranzacție este venit sau cheltuială. Fără subcategorii.</p>\n<h2>Unde să păstrezi documentele reale</h2>\n<p>Stocare în cloud. Computerul tău. Un hard disk extern. Un stick USB. Un floppy disc dacă mai ai o mașină care îl citește — HMRC nu le-a interzis oficial nici pe acelea. CD-ROM este de asemenea tehnic acceptabil. Deși sugerăm un plan de rezervă. Pe ceva fabricat după 2005.</p>\n<h2>Sincer — merită să te deranjezi cu Excel?</h2>\n<p>Dacă ești deja confortabil cu foile de calcul și evidențele tale sunt curate — Excel cu un instrument bridging este o alegere perfect rezonabilă.</p>\n<p>Dacă nu folosești Excel corect oricum — arunci numere la întâmplare — poate e momentul să încerci ceva mai simplu. Nu pentru că legea o cere. Ci pentru că o mizerie în Excel rămâne o mizerie, doar digitală.</p>\n<p>Pentru situația ta specifică, întreabă contabilul. Nu este consultanță fiscală.</p>\n<p><strong>TidGo funcționează cu contabilul tău, nu în locul lui. Funcționează cu foaia ta de calcul, nu în locul ei. Funcționează înainte ca HMRC să pună întrebări — nu în locul răspunsurilor.</strong> <strong>Nu înlocuiește niciunul dintre ele. Este doar stratul care lipsea.</strong> <strong><a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Începe gratuit — fără card →</a></strong></p>\n<h2>Surse</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital — create digital records</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find compatible software</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a> — GOV.UK</li>\n</ul>"
  },
  "lt": {
    "title": "Ar turiu atsisakyti Excel? Skaičiuoklės, MTD ir tarpinė programinė įranga",
    "html": "<h2>Naudojau Excel dvidešimt metų. Veikė. Kodėl dabar staiga problema?</h2>\n<p>Nėra. Ne visai.</p>\n<p>Excel nėra uždraustas pagal Making Tax Digital. HMRC nesiuntė niekam laiško su užrašu &quot;ištrink skaičiuokles nedelsiant arba bus pasekmių.&quot; Jei kas nors tau taip sakė — klydo.</p>\n<p>Bet — ir čia yra ta dalis, kurios niekas nepaaiškina aiškiai — vien Excel nebepakanka. Ne todėl, kad tavo skaičiuoklė yra bloga. Dėl to, kaip ji jungiasi su visu kitu.</p>\n<p>Tikroji taisyklė: tavo skaitmeniniai įrašai turi pasiekti HMRC per <strong>skaitmeninę nuorodą</strong>. Jokio rankinio perkėlimo. Jokio copy-paste tarp sistemų. Duomenys turi tekėti skaitmeniškai nuo pradžios iki pabaigos.</p>\n<p>Excel tiesiogiai nekomunikuoja su HMRC. Taigi jei nori pasilikti skaičiuoklę, reikia ko nors viduryje — <strong>tarpinės programinės įrangos</strong> — kuri nuskaito tavo Excel ir siunčia skaičius į HMRC be tavo rankų tarpininkaujant.</p>\n<p>Tiek. Excel plius tarpinė programinė įranga lygus legaliai. Vien Excel lygus neatitikimui.</p>\n<h2>Tai kas yra tarpinė programinė įranga?</h2>\n<p>Vertėjas. Tavo Excel kalba &quot;skaičiuoklių&quot; kalba. HMRC kalba &quot;API&quot; kalba. Tarpinė programinė įranga sėdi tarp jų, nuskaito tavo skaičius ir siunčia juos tinkamu formatu.</p>\n<p>Yra daug variantų — kai kurie nemokami, kai kurie pigūs. HMRC tvarko <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">suderinamos programinės įrangos sąrašą</a>.</p>\n<h2>Dalis, su kuria Excel nepadės: tikri kvitai</h2>\n<p>Net jei tavo skaičiuoklė yra tobulai prijungta, <strong>vis tiek privalai saugoti kvitus, sąskaitas faktūras ir payslipus už tais skaičiais penkerius metus.</strong></p>\n<p>Ne Excel. Tikrus dokumentus. <a href=\"/lt/mtd/do-i-have-to-photograph-receipts\">Išsamus paaiškinimas, ko iš tikrųjų reikalauja HMRC, yra čia.</a></p>\n<p><strong>TidGo renka kvitus, CIS payslipus ir pajamų įrodymus iš karto — per WhatsApp nuotrauką, persiunčiamą el. laišką ar programėlėje. Veikia kartu su tavo skaičiuokle, o ne jos vietoje. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Išbandyk nemokamai, be kortelės →</a></strong></p>\n<h2>Copy-paste taisyklė — čia daugelis suklysta</h2>\n<p>Pateikus ketvirtinę ataskaitą, negali rankiniu būdu perkelti tų įrašų į kitą sistemą. Nei perkeldamas, nei copy-paste.</p>\n<p>Jei naudoji daugiau nei vieną programą — tarkime, Excel įrašymui ir kažką kitą pateikimui — jos turi būti <strong>skaitmeniškai susietos</strong>. Duomenys teka automatiškai, ne per tavo pirštus.</p>\n<p><strong>Skaitmeninė nuoroda tarp įrašų ir pateikimo — tai dalis, kurią dauguma daro neteisingai. TidGo rūpinasi įrašų puse — tvarkingai, su datomis, kategorizuotai. <a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Žiūrėk kaip veikia →</a></strong></p>\n<h2>Jei apyvarta mažesnė nei £90 000?</h2>\n<p>Žemiau £90 000 gali naudoti <strong>supaprastintą kategorizaciją</strong> — įrašai tik ar kiekviena operacija yra pajamos ar išlaidos. Be subkategorijų.</p>\n<h2>Kur laikyti tikrus dokumentus</h2>\n<p>Debesų saugykla. Kompiuteris. Išorinis diskas. USB lazdelė. Diskelis 3,5 colio, jei dar turi mašiną, kuri jį skaito — HMRC oficialiai jų neuždraudė. CD-ROM taip pat techniškai priimtinas. Nors švelniai siūlome atsarginį planą. Ant kažko pagaminto po 2005 metų.</p>\n<h2>Atvirai — ar verta vargtis su Excel?</h2>\n<p>Jei jau patogiai jauti skaičiuokles ir tavo įrašai yra tvarkingi — Excel su tarpine programine įranga yra visiškai pagrįstas pasirinkimas.</p>\n<p>Jei iš tikrųjų nenaudoji Excel tinkamai — meti skaičius bet kur — galbūt tai momentas išbandyti kažką paprastesnio. Ne todėl, kad įstatymas reikalauja. Todėl, kad netvarka Excel yra vis tiek netvarka, tik skaitmeninė.</p>\n<p>Dėl savo konkrečios situacijos — klausk buhalterio. Ne mokesčių konsultacija.</p>\n<p><strong>TidGo veikia su tavo buhalteriu, o ne jo vietoje. Veikia su tavo skaičiuokle, o ne jos vietoje. Veikia prieš HMRC pradedant klausti — ne atsakymų vietoje.</strong> <strong>Nepakeičia nė vieno iš jų. Yra tik tas sluoksnis, kurio trūko.</strong> <strong><a href=\"https://tidgo.co.uk\" target=\"_blank\" rel=\"noopener\">Pradėk nemokamai — be kortelės →</a></strong></p>\n<h2>Šaltiniai</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital — create digital records</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find compatible software</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a> — GOV.UK</li>\n</ul>"
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
    "html": "<h2>Right, what is this MTD thing?</h2>\n<p>You've probably seen the letters. Maybe binned a few. Making Tax Digital — MTD for short — is HMRC's way of updating how self-employed people and landlords report their income.</p>\n<p>Here's the bit most people get wrong: <strong>it's not four or even five tax returns a year.</strong></p>\n<p>It's more like sending a text to HMRC every three months. &quot;Here's what came in, here's what went out.&quot; That's it. No calculations, no payments, no panic. Just a running total from your records.</p>\n<p>And to be clear — <strong>you don't pay tax quarterly.</strong> Not now, anyway. The quarterly update is just information. What you owe is still calculated once a year, and you still pay it by 31 January. Nobody is taking money from you every three months.</p>\n<p>(There is talk of moving towards more regular tax payments for the self-employed from 2029 onwards — similar to how PAYE works for employees. But that's not here yet, and when it comes it will be a separate change with its own announcement.)</p>\n<p>The actual tax return — the one where your accountant earns their fee, claims your reliefs and works out what you owe HMRC. Or, on a good year, what HMRC owes you — that still happens once a year. MTD doesn't replace that. It just means HMRC gets a rough picture every quarter instead of being surprised every January.</p>\n<p>Put it this way: instead of letting the carrier bag fill up for a whole year, you're just giving HMRC a peek inside every three months. The bag stays manageable. You stay sane.</p>\n<h2>So does it actually apply to you?</h2>\n<p>It comes down to one number: your <strong>qualifying income</strong>.</p>\n<p>Not your profit. Not what's left after fuel, materials and the van insurance. Your <strong>gross income</strong> — everything that came in from self-employment and property, before you spent any of it.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr><th>From</th><th>Threshold</th><th>Who's in</th></tr></thead>\n<tbody>\n<tr><td>April 2026</td><td>£50,000</td><td>You're in. (Or you should be by now.)</td></tr>\n<tr><td>April 2027</td><td>£30,000</td><td>Next wave</td></tr>\n<tr><td>April 2028</td><td>£20,000</td><td>Most sole traders eventually</td></tr>\n</tbody>\n</table>\n</div>\n<p>If you're a builder who turned over £55,000 last year — even if half went on materials — you're in. If you drive a van and also rent out a flat, both incomes count together.</p>\n<p>On a PAYE job with your own invoices on the side? Only the self-employed bit counts for MTD. Your salary from the boss doesn't come into it.</p>\n<h2>What if I'm nowhere near those numbers?</h2>\n<p>Below £20,000 — you're automatically off the hook. Nothing to do.</p>\n<p>Between £20,000 and the current threshold — you're not in yet, but you will be. Worth building the habit of keeping digital records now, because habits take months to build — not a weekend before a deadline.</p>\n<h2>Who's actually off the hook?</h2>\n<p>A few groups can apply for an exemption:</p>\n<ul>\n<li>People who genuinely cannot use computers or software — age, disability or no internet where they live</li>\n<li>Some religious groups where digital recordkeeping conflicts with their beliefs</li>\n<li>Cases where HMRC accepts it's not reasonably practicable</li>\n</ul>\n<p>Think you might wriggle out of it? <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Check the exemptions guidance on GOV.UK</a> — don't just assume. HMRC needs to agree.</p>\n<h2>Honestly?</h2>\n<p>MTD is a real change. You can't leave everything to January anymore. But it's not as bad as it sounds — mostly because the quarterly bit is just a summary, not a reckoning.</p>\n<p>The hard part isn't the submission. It's keeping clean records through the year so the summary takes minutes, not a weekend.</p>\n<p>For your specific situation — mixed income, multiple jobs, anything complicated — talk to your accountant. This covers the general rules. Not tax advice.</p>\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use MTD</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if you can get an exemption</a> — GOV.UK</li>\n</ul>"
  },
  "pl": {
    "title": "Czy Making Tax Digital dotyczy Ciebie? I co to właściwie jest?",
    "html": "<h2>No dobra, o co chodzi z tym MTD?</h2>\n<p>Pewnie widziałeś te listy. Może kilka nawet odłożyłeś &quot;na później&quot; — czyli nigdy. Making Tax Digital — w skrócie MTD — to sposób, w jaki HMRC chce, żebyś teraz raportował swoje dochody jako samozatrudniony albo landlord.</p>\n<p>I tu jest rzecz, którą większość ludzi rozumie na odwrót: <strong>to nie są cztery, a nawet pięć zeznań podatkowych w roku.</strong></p>\n<p>To bardziej jak wysyłanie SMSa do HMRC co trzy miesiące. &quot;Tyle wpłynęło, tyle wydałem.&quot; Tyle. Bez obliczeń, bez płatności, bez paniki. Samo podsumowanie tego, co masz w rekordach.</p>\n<p>I żeby było jasne — <strong>co kwartał nie płacisz podatku.</strong> Przynajmniej nie teraz. Kwartalne podsumowanie to tylko informacja dla HMRC. To ile jesteś winien nadal liczy się raz w roku i nadal płacisz do 31 stycznia. Nikt nie ściąga Ci pieniędzy co trzy miesiące.</p>\n<p>(Są plany żeby od około 2029 roku wprowadzić bardziej regularne płatności podatku dla samozatrudnionych — podobnie jak na etacie, gdzie podatek schodzi co miesiąc. Ale to jeszcze nie teraz, i jak przyjdzie to będzie osobna zmiana z osobnym ogłoszeniem.)</p>\n<p>Prawdziwe rozliczenie — to gdzie Twój księgowy siedzi, liczy ulgi i wychodzi ile jesteś winien skarbówce. Albo, w lepszym scenariuszu, ile ona jest winna Tobie. To nadal jest raz w roku. MTD tego nie zastępuje. Sprawia tylko, że HMRC wie mniej więcej jak idzie co kwartał, zamiast dostawać niespodziankę co każdy styczeń.</p>\n<p>Prościej: zamiast czekać aż reklamówka z paragonami będzie pełna przez rok — co kwartał telefonem wysyłasz co w niej jest. Reklamówka zostaje pusta. Ty — spokojny.</p>\n<h2>No to czy Ciebie dotyczy?</h2>\n<p>Zależy od jednej liczby: Twojego <strong>qualifying income</strong>.</p>\n<p>Nie zysku. Nie tego co zostaje po paliwie, materiałach i ubezpieczeniu vana. <strong>Przychód brutto</strong> — wszystko co wpłynęło z działalności i z wynajmu, zanim cokolwiek wydałeś.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr><th>Od</th><th>Próg</th><th>Kogo łapie</th></tr></thead>\n<tbody>\n<tr><td>Kwiecień 2026</td><td>£50 000</td><td>Jesteś w systemie! (albo przynajmniej powinieneś już być)</td></tr>\n<tr><td>Kwiecień 2027</td><td>£30 000</td><td>Następna fala</td></tr>\n<tr><td>Kwiecień 2028</td><td>£20 000</td><td>Większość samozatrudnionych w końcu</td></tr>\n</tbody>\n</table>\n</div>\n<p>Jeśli jesteś budowlańcem z obrotem £55 000 w zeszłym roku — nawet jeśli połowa poszła na materiały — jesteś w systemie. Jeśli jeździsz vanem i przy okazji wynajmujesz mieszkanie, obie kwoty liczą się razem.</p>\n<p>Pracujesz na etacie i przy okazji wystawiasz faktury za coś swojego? Do MTD liczy się tylko ta własna działalność. Pensja od szefa — nie wchodzi do rachunku.</p>\n<h2>Co jeśli jestem daleko od tych kwot?</h2>\n<p>Poniżej £20 000 — automatycznie zwolniony. Nic nie musisz robić.</p>\n<p>Między £20 000 a aktualnym progiem — jeszcze nie jesteś w systemie, ale wkrótce będziesz. Warto zacząć zbierać cyfrowe rekordy teraz, bo nawyki buduje się miesiącami, a nie w weekend przed terminem.</p>\n<h2>Kto może się wymigać?</h2>\n<p>Kilka grup może ubiegać się o zwolnienie:</p>\n<ul>\n<li>Osoby które naprawdę nie mogą korzystać z komputera lub oprogramowania — ze względu na wiek, niepełnosprawność albo brak dostępu do internetu</li>\n<li>Niektóre grupy wyznaniowe gdzie cyfrowe rekordy kolidują z przekonaniami</li>\n<li>Przypadki gdzie HMRC zgodzi się że to niewykonalne</li>\n</ul>\n<p>Jeśli myślisz że możesz się wymigać — <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">sprawdź wytyczne o zwolnieniach na GOV.UK</a>. Nie zakładaj. HMRC musi się zgodzić.</p>\n<h2>Szczerze?</h2>\n<p>MTD to realna zmiana. Nie możesz już zostawić wszystkiego na styczeń. Ale nie jest tak straszna jak brzmi — głównie dlatego że kwartalne podsumowanie to tylko podsumowanie, a nie rozliczenie.</p>\n<p>Trudna część to nie wysyłanie. Trudna część to trzymanie czystych rekordów przez cały rok, żeby to podsumowanie zajęło minuty a nie weekend.</p>\n<p>W sprawach dotyczących Twojej sytuacji — mieszane dochody, kilka zajęć, cokolwiek skomplikowanego — zapytaj księgowego. Ta strona opisuje ogólne zasady. Nie jest poradą podatkową.</p>\n<h2>Źródła</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use MTD</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if you can get an exemption</a> — GOV.UK</li>\n</ul>"
  },
  "ro": {
    "title": "Se aplică Making Tax Digital în cazul tău? Și ce este, de fapt?",
    "html": "<h2>Bun, despre ce e vorba cu MTD ăsta?</h2>\n<p>Probabil ai văzut scrisorile. Poate ai aruncat câteva. Making Tax Digital — pe scurt MTD — este modul în care HMRC vrea să raportezi veniturile ca persoană self-employed sau landlord.</p>\n<p>Iată ce înțeleg greșit majoritatea oamenilor: <strong>nu sunt patru sau chiar cinci declarații fiscale pe an.</strong></p>\n<p>E mai degrabă ca și cum ai trimite un SMS la HMRC la fiecare trei luni. &quot;Atât a intrat, atât a ieșit.&quot; Atât. Fără calcule, fără plăți, fără panică. Doar un total cumulat din evidențele tale.</p>\n<p>Și ca să fie clar — <strong>nu plătești impozit trimestrial.</strong> Cel puțin nu acum. Actualizarea trimestrială este doar informație. Ce datorezi se calculează tot o dată pe an și plătești tot pe 31 ianuarie. Nimeni nu îți ia bani la fiecare trei luni.</p>\n<p>(Există discuții despre introducerea unor plăți de impozit mai regulate pentru persoanele self-employed din jurul anului 2029 — similar cu PAYE pentru angajați. Dar nu e încă acum, și când va veni va fi o schimbare separată cu propriul anunț.)</p>\n<p>Declarația fiscală reală — cea în care contabilul tău câștigă onorariul, revendică deducerile și calculează cât datorezi HMRC. Sau, într-un an bun, cât îți datorează HMRC ție — aceea tot o dată pe an se face. MTD nu o înlocuiește. Înseamnă doar că HMRC are o imagine aproximativă în fiecare trimestru în loc să fie surprins în fiecare ianuarie.</p>\n<p>Pune-o așa: în loc să lași punga cu bonuri să se umple un an întreg, dai HMRC o privire înăuntru la fiecare trei luni. Punga rămâne gestionabilă. Tu — liniștit.</p>\n<h2>Deci ți se aplică?</h2>\n<p>Depinde de un singur număr: <strong>qualifying income</strong>-ul tău.</p>\n<p>Nu profitul. Nu ce rămâne după combustibil, materiale și asigurarea mașinii. <strong>Venitul brut</strong> — tot ce a intrat din activitate independentă și proprietăți, înainte să cheltuiești ceva.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr><th>Din</th><th>Prag</th><th>Cine intră</th></tr></thead>\n<tbody>\n<tr><td>Aprilie 2026</td><td>£50.000</td><td>Ești în sistem! (sau ar trebui să fii deja)</td></tr>\n<tr><td>Aprilie 2027</td><td>£30.000</td><td>Următorul val</td></tr>\n<tr><td>Aprilie 2028</td><td>£20.000</td><td>Majoritatea self-employed în final</td></tr>\n</tbody>\n</table>\n</div>\n<p>Dacă ești un constructor cu o cifră de afaceri de £55.000 anul trecut — chiar dacă jumătate s-a dus pe materiale — ești în sistem. Dacă conduci o dubă și închiriezi și un apartament, ambele venituri se adună.</p>\n<p>Lucrezi cu contract și mai ai și facturi proprii pe lângă? Pentru MTD contează doar activitatea independentă. Salariul de la angajator nu intră în calcul.</p>\n<h2>Ce dacă sunt departe de acele cifre?</h2>\n<p>Sub £20.000 — ești automat scutit. Nimic de făcut.</p>\n<p>Între £20.000 și pragul actual — nu ești încă în sistem, dar vei fi. Merită să începi să ții evidențe digitale acum, pentru că obiceiurile se construiesc în luni, nu într-un weekend înainte de termen.</p>\n<h2>Cine scapă complet?</h2>\n<p>Câteva grupuri pot solicita o scutire:</p>\n<ul>\n<li>Persoane care nu pot folosi computerul sau software-ul — din cauza vârstei, dizabilității sau lipsei internetului</li>\n<li>Unele grupuri religioase unde evidențele digitale intră în conflict cu convingerile lor</li>\n<li>Cazuri în care HMRC acceptă că nu este rezonabil practicabil</li>\n</ul>\n<p>Crezi că poți scăpa? <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Verifică ghidul de scutiri pe GOV.UK</a> — nu presupune. HMRC trebuie să fie de acord.</p>\n<h2>Sincer?</h2>\n<p>MTD este o schimbare reală. Nu mai poți lăsa totul pe ianuarie. Dar nu e atât de rău pe cât sună — mai ales că partea trimestrială e doar un rezumat, nu o socoteală.</p>\n<p>Partea grea nu e trimiterea. Partea grea e să ții evidențe curate pe tot parcursul anului, ca rezumatul să dureze minute, nu un weekend.</p>\n<p>Pentru situația ta specifică — venituri mixte, mai multe joburi, orice complicat — întreabă contabilul. Aceasta acoperă regulile generale. Nu este consultanță fiscală.</p>\n<h2>Surse</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use MTD</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if you can get an exemption</a> — GOV.UK</li>\n</ul>"
  },
  "lt": {
    "title": "Ar Making Tax Digital taikomas tau? Ir kas tai iš tikrųjų yra?",
    "html": "<h2>Na gerai, kas tas MTD?</h2>\n<p>Tikriausiai matei laiškus. Galbūt kelis atidėjai &quot;vėliau&quot; — tai yra niekada. Making Tax Digital — trumpai MTD — tai HMRC būdas atnaujinti, kaip savarankiškai dirbantys asmenys ir nuomotojai praneša apie savo pajamas.</p>\n<p>Štai ką dauguma žmonių supranta klaidingai: <strong>tai ne keturios ar net penkios mokesčių deklaracijos per metus.</strong></p>\n<p>Tai labiau panašu į SMS siuntimą į HMRC kas tris mėnesius. &quot;Tiek atėjo, tiek išėjo.&quot; Tiek. Jokių skaičiavimų, jokių mokėjimų, jokios panikos. Tik einamasis sumai iš tavo įrašų.</p>\n<p>Ir kad būtų aišku — <strong>mokesčių kas ketvirtį nemoki.</strong> Bent jau ne dabar. Ketvirtinė ataskaita yra tik informacija. Kiek skolingas apskaičiuojama vis tiek kartą per metus ir vis tiek mokama iki sausio 31 d. Niekas neima iš tavęs pinigų kas tris mėnesius.</p>\n<p>(Yra planų nuo maždaug 2029 metų įvesti reguliaresnius mokesčių mokėjimus savarankiškai dirbantiems — panašiai kaip PAYE veikia darbuotojams. Bet tai dar ne dabar, ir kai ateis, tai bus atskiras pakeitimas su atskiru pranešimu.)</p>\n<p>Tikroji mokesčių deklaracija — ta, kurioje tavo buhalteris uždirba atlyginimą, reikalauja atskaitymų ir apskaičiuoja kiek skolingas HMRC. Arba, geru metais, kiek HMRC skolingas tau — ta vis tiek vyksta kartą per metus. MTD jos nepakeičia. Tai tiesiog reiškia, kad HMRC kas ketvirtį gauna apytikslį vaizdą, o ne nustemba kiekvieną sausį.</p>\n<p>Sakyk taip: vietoj to, kad leistum kvitų maišui pildytis ištisus metus, kas tris mėnesius telefonu parodai HMRC kas viduje. Maišas išlieka valdomas. Tu — ramus.</p>\n<h2>Tai ar tau taikoma?</h2>\n<p>Viskas priklauso nuo vieno skaičiaus: tavo <strong>qualifying income</strong>.</p>\n<p>Ne pelno. Ne to, kas lieka po kuro, medžiagų ir automobilio draudimo. <strong>Bendrosios pajamos</strong> — viskas, kas atėjo iš savarankiškos veiklos ir nuomos, prieš išleidžiant ką nors.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr><th>Nuo</th><th>Riba</th><th>Kas patenka</th></tr></thead>\n<tbody>\n<tr><td>2026 m. balandis</td><td>£50 000</td><td>Esi sistemoje! (arba bent jau turėtum jau būti)</td></tr>\n<tr><td>2027 m. balandis</td><td>£30 000</td><td>Kita banga</td></tr>\n<tr><td>2028 m. balandis</td><td>£20 000</td><td>Dauguma savarankiškai dirbančių galiausiai</td></tr>\n</tbody>\n</table>\n</div>\n<p>Jei esi statybininkas su £55 000 apyvarta praėjusiais metais — net jei pusė nuėjo medžiagoms — esi sistemoje. Jei vairuoji furgoną ir dar nuomoji butą, abi pajamos susumuojamos.</p>\n<p>Dirbi pagal darbo sutartį ir turi nuosavų sąskaitų faktūrų šalia? MTD tikslais skaičiuojama tik savarankiška veikla. Atlyginimas iš darbdavio neįeina į skaičiavimą.</p>\n<h2>O kas, jei esu toli nuo tų skaičių?</h2>\n<p>Žemiau £20 000 — automatiškai atleistas. Nieko daryti nereikia.</p>\n<p>Tarp £20 000 ir dabartinės ribos — dar nesi sistemoje, bet būsi. Verta pradėti tvarkyti skaitmeninius įrašus dabar, nes įpročiai formuojasi mėnesius, o ne savaitgalį prieš terminą.</p>\n<h2>Kas iš tikrųjų išsisuka?</h2>\n<p>Kelios grupės gali kreiptis dėl atleidimo:</p>\n<ul>\n<li>Asmenys, kurie tikrai negali naudotis kompiuteriu ar programine įranga — dėl amžiaus, negalios ar interneto nebuvimo</li>\n<li>Kai kurios religinės grupės, kur skaitmeninė apskaita prieštarauja įsitikinimams</li>\n<li>Atvejai, kai HMRC sutinka, kad tai nepagrįstai nepraktiška</li>\n</ul>\n<p>Manai, kad gali išsisukti? <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Patikrink atleidimų gaires GOV.UK</a> — nedaryk prielaidų. HMRC turi sutikti.</p>\n<h2>Atvirai?</h2>\n<p>MTD yra tikras pokytis. Nebegali visko palikti sausio mėnesiui. Bet tai nėra taip blogai, kaip skamba — daugiausia todėl, kad ketvirtinė dalis yra tik suvestinė, o ne atsiskaitymas.</p>\n<p>Sunkioji dalis nėra pateikimas. Sunkioji dalis — tvarkingų įrašų tvarkymas ištisus metus, kad suvestinė užimtų minutes, o ne savaitgalį.</p>\n<p>Dėl savo konkrečios situacijos — mišrios pajamos, keli darbai, kas nors sudėtingo — klausk buhalterio. Tai apima bendras taisykles. Ne mokesčių konsultacija.</p>\n<h2>Šaltiniai</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use MTD</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if you can get an exemption</a> — GOV.UK</li>\n</ul>"
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
  "en": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>MTD for CIS subcontractors: gross income, payslips and quarterly updates</h1>\n  <h2>Does MTD apply to CIS subcontractors?</h2>\n  <p>Yes — in the same way it applies to any sole trader. If your gross qualifying income exceeds the relevant threshold, Making Tax Digital for Income Tax applies to you from the relevant date.</p>\n  <p>The thresholds: above £50,000 from April 2026, above £30,000 from April 2027, above £20,000 from April 2028.</p>\n  <p>Your qualifying income is based on your gross CIS income and any property income, before expenses and CIS deductions. CIS deductions do not reduce your qualifying income.</p>\n  <p>This catches people out. If your contractor pays you £1,600 and deducts £400 CIS tax, your qualifying income for threshold purposes is £2,000 — not £1,600. The deduction is tax paid on account, not a reduction in income.</p>\n  <h2>What CIS deductions actually are</h2>\n  <p>CIS is not income tax in a separate system. It is income tax paid early — in instalments, throughout the year, collected by your contractor on HMRC's behalf. When your contractor deducts 20% or 30% from your payment, they send that money directly to HMRC and report it monthly.</p>\n  <p>By the time you submit your annual return, HMRC already knows how much has been paid on your behalf. The deduction offsets the tax you owe for the year. If more was deducted than you owe, you get a refund.</p>\n  <p>MTD does not change any of this. It changes how frequently you report your income and expenses — not how CIS deductions work.</p>\n  <h2>What goes into your quarterly updates: gross income</h2>\n  <p>This is the part that confuses subcontractors — and some accountants.</p>\n  <p>When the customer submits quarterly updates to HMRC through their software, they will not be required to provide a CIS deduction amount. HMRC already has the deduction figures from your contractor's monthly returns.</p>\n  <p>What you record in your quarterly updates is your <strong>gross income</strong> — the full amount before the CIS deduction. If your payslip shows £2,000 gross and £400 deducted, you record £2,000 as income. Not £1,600.</p>\n  <p>After a quarterly update is submitted, the software triggers a tax calculation. This calculation result will include the CIS deductions received by the contractor for that quarter. So the net tax position you see after each quarterly update already takes your CIS deductions into account — even though you didn't enter them yourself.</p>\n  <p>If the amount your contractor reported to HMRC doesn't match your payslips, you can flag the discrepancy. If the customer does not agree with the amount the contractor has submitted to HMRC for any of their quarterly updates, HMRC advises them to query any discrepancies with their contractor.</p>\n  <h2>Your payslip is your primary record</h2>\n  <p>Every month your contractor should give you a CIS statement showing:</p>\n  <ul>\n    <li>Your gross pay</li>\n    <li>The CIS deduction amount and rate (20% or 30%)</li>\n    <li>The net amount paid to you</li>\n  </ul>\n  <p>This payslip is the document that supports your income records. Keep every one. They are your proof of gross income and your evidence of the deductions already paid to HMRC.</p>\n  <p>You will need to maintain digital records that include all income from construction work, including your full gross invoice amounts, and CIS deductions.</p>\n  <p>The most practical approach: when a payslip arrives by email, forward it to your record-keeping system immediately. Don't wait until the quarterly deadline to find twelve payslips from different contractors across different email accounts.</p>\n  <h2>What goes into your final declaration</h2>\n  <p>The final declaration is where CIS deductions are formally reconciled.</p>\n  <p>A customer, at any time, can view a breakdown of all the CIS deductions that have been reported to HMRC by their contractors. Before submitting the final declaration, you check that figure matches your own records. At the end of the year, if the customer still does not agree with the CIS deductions amount the contractor has submitted to HMRC, they can submit what they believe to be the correct amount.</p>\n  <p>This is why the final declaration requires professional input — your accountant can check the CIS deductions figure against your payslips, claim any allowable expenses properly, and make sure the year-end tax calculation is right. This is not the kind of thing an app should be doing automatically.</p>\n  <h2>The records you need to keep</h2>\n  <p>For each job or contractor:</p>\n  <ul>\n    <li>CIS payslips showing gross pay and deduction</li>\n    <li>Remittance notices and statements</li>\n    <li>Invoices you issued (if applicable)</li>\n    <li>Expenses: fuel, tools, materials, PPE, equipment hire, subcontractor payments you made</li>\n  </ul>\n  <p>For expenses, keep the receipt or proof behind each one. That includes ordinary van driver receipts UK subcontractors collect every week: fuel, parking, tools and materials. CIS deductions are only reconciled in your final declaration — but expenses reduce your taxable profit, so recording them accurately throughout the year matters.</p>\n  <p>If your turnover from self-employment is under £90,000, you may be able to use simplified categorisation — recording just whether each transaction is income or an expense, without breaking it into subcategories. Ask your accountant whether this applies to your situation.</p>\n  <h2>MTD doesn't replace CIS</h2>\n  <p>CIS deductions continue to be reported by contractors to HMRC. Subcontractors maintain digital records of income and deductions. Quarterly submissions provide regular business updates. At year-end, everything is brought together so that subcontractors can confirm their total business income, allowable expenses, CIS deductions already paid, adjustments required and final taxable profit.</p>\n  <p>CIS and MTD run in parallel. MTD changes the reporting rhythm — quarterly instead of annual — but it doesn't touch the deduction mechanism.</p>\n  <h2>Summary: what to do</h2>\n  <p>1. <strong>Keep every payslip</strong> as it arrives — forward it somewhere digital immediately.</p>\n  <p>2. <strong>Record gross income</strong> in your quarterly updates, not net.</p>\n  <p>3. <strong>Record expenses</strong> as they happen — fuel, tools, materials, everything with a receipt.</p>\n  <p>4. <strong>Submit four quarterly updates</strong> by the deadlines (7 August, 7 November, 7 February, 7 May).</p>\n  <p>5. <strong>Before the final declaration</strong>, check your CIS deduction total against your payslips and let your accountant do the rest.</p>\n  <p>For your specific situation — especially if you work for multiple contractors, have cash jobs alongside CIS work, or operate through a limited company — talk to your accountant. This page covers the general rules. Individual circumstances vary.</p>\n  <h2>Where TidGo fits</h2>\n  <p><a href=\"/\">TidGo</a> is built for exactly this kind of paperwork. Forward your CIS payslips and remittance notices by email, send expense receipt photos on WhatsApp, and keep everything in one place through the year. TidGo records gross income from payslips and stores the deduction information separately — so your quarterly records show the right figures, and your accountant has clean records for the final declaration.</p>\n  <p>TidGo does not submit to HMRC and does not give tax advice. It collects and organises the records so that whoever does your submission has something to work from.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html\" target=\"_blank\" rel=\"noopener\">HMRC MTD end-to-end service guide — making updates at tax year end</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/what-is-the-construction-industry-scheme\" target=\"_blank\" rel=\"noopener\">Construction Industry Scheme — guidance</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Last checked: August 2026. Verify at GOV.UK if reading later.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "pl": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>MTD dla podwykonawców CIS: przychód brutto, payslipy i raporty kwartalne</h1>\n  <h2>Czy MTD dotyczy podwykonawców CIS?</h2>\n  <p>Tak — tak samo jak każdego sole tradera. Jeśli Twój przychód brutto przekracza odpowiedni próg, Making Tax Digital dla Income Tax dotyczy Cię od właściwej daty.</p>\n  <p>Progi: powyżej £50 000 od kwietnia 2026, powyżej £30 000 od kwietnia 2027, powyżej £20 000 od kwietnia 2028.</p>\n  <p>Qualifying income liczy się od przychodu brutto z CIS i ewentualnych przychodów z wynajmu, przed kosztami i przed potrąceniami CIS. Potrącenia CIS nie zmniejszają qualifying income.</p>\n  <p>To jest pułapka, w którą wiele osób wpada. Jeśli contractor płaci Ci £1 600 i potrąca £400 CIS, Twoje qualifying income do celów progowych wynosi £2 000 — nie £1 600. Potrącenie to podatek zapłacony z góry, a nie zmniejszenie przychodu.</p>\n  <h2>Czym są potrącenia CIS</h2>\n  <p>CIS to nie podatek w osobnym systemie. To podatek dochodowy płacony z wyprzedzeniem — w ratach, przez cały rok, pobierany przez contractora w imieniu HMRC. Kiedy contractor potrąca 20% lub 30% z Twojej wypłaty, wysyła tę kwotę bezpośrednio do HMRC i raportuje to co miesiąc.</p>\n  <p>Do czasu złożenia rocznej deklaracji HMRC już wie, ile zostało zapłacone w Twoim imieniu. Potrącenie kompensuje podatek, który jesteś winien za rok. Jeśli potrącono więcej, niż wynosi Twój podatek — dostajesz zwrot.</p>\n  <p>MTD tego nie zmienia. Zmienia częstotliwość raportowania przychodów i wydatków — nie sposób działania potrąceń CIS.</p>\n  <h2>Co wpisuje się w raporty kwartalne: przychód brutto</h2>\n  <p>Tu się gubi wielu podwykonawców — a nawet część księgowych.</p>\n  <p>Kiedy klient wysyła kwartalne aktualizacje do HMRC przez oprogramowanie, nie jest wymagane podawanie kwoty potrąceń CIS. HMRC ma już te dane z miesięcznych raportów contractora.</p>\n  <p>W raportach kwartalnych wpisujesz <strong>przychód brutto</strong> — pełną kwotę przed potrąceniem CIS. Jeśli payslip pokazuje £2 000 brutto i £400 potrącenia, wpisujesz £2 000 jako przychód. Nie £1 600.</p>\n  <p>Po wysłaniu kwartalnego raportu oprogramowanie uruchamia obliczenie podatkowe. Wynik tego obliczenia zawiera potrącenia CIS zgłoszone przez contractora za dany kwartał. Czyli pozycja podatkowa, którą widzisz po każdym kwartale, już uwzględnia Twoje potrącenia CIS — mimo że sam ich nie wpisywałeś.</p>\n  <p>Jeśli kwota zgłoszona przez contractora do HMRC nie zgadza się z Twoimi payslipami, możesz to zgłosić. Jeśli klient nie zgadza się z kwotą zgłoszoną przez contractora do HMRC za którykolwiek z kwartalnych raportów, HMRC radzi wyjaśnić rozbieżności z contractorem.</p>\n  <h2>Payslip to Twój główny dokument</h2>\n  <p>Co miesiąc contractor powinien dać Ci zestawienie CIS pokazujące:</p>\n  <ul>\n    <li>Twoje wynagrodzenie brutto</li>\n    <li>Kwotę i stawkę potrącenia CIS (20% lub 30%)</li>\n    <li>Kwotę netto wypłaconą Tobie</li>\n  </ul>\n  <p>Ten payslip to dokument potwierdzający Twój przychód. Zachowuj każdy. To Twój dowód przychodu brutto i dowód potrąceń już zapłaconych do HMRC.</p>\n  <p>Najbardziej praktyczne podejście: gdy payslip przychodzi mailem, od razu go przekaż do swojego systemu rekordów. Nie czekaj do terminu kwartalnego, żeby szukać dwunastu payslipów od różnych contractorów po różnych skrzynkach mailowych.</p>\n  <h2>Co wchodzi do final declaration</h2>\n  <p>Final declaration to moment, w którym potrącenia CIS są formalnie rozliczone.</p>\n  <p>Klient może w każdej chwili zobaczyć zestawienie wszystkich potrąceń CIS zgłoszonych do HMRC przez contractorów. Przed złożeniem final declaration sprawdzasz, czy ta kwota zgadza się z Twoimi payslipami. Jeśli nie — możesz podać właściwą kwotę.</p>\n  <p>To jest powód, dla którego final declaration wymaga udziału profesjonalisty — Twój księgowy sprawdza kwotę potrąceń CIS wobec payslipów, prawidłowo rozlicza koszty i pilnuje, żeby roczne obliczenie podatkowe było poprawne.</p>\n  <h2>Rekordy, które musisz prowadzić</h2>\n  <p>Dla każdej pracy / każdego contractora:</p>\n  <ul>\n    <li>Payslipy CIS z wynagrodzeniem brutto i potrąceniem</li>\n    <li>Remittance notices i zestawienia</li>\n    <li>Faktury, które wystawiłeś (jeśli dotyczy)</li>\n    <li>Wydatki: paliwo, narzędzia, materiały, BHP, wynajem sprzętu, płatności podwykonawcom</li>\n  </ul>\n  <p>Przy wydatkach zachowuj paragon lub inny dowód. Wydatki zmniejszają Twój dochód do opodatkowania — dlatego warto zapisywać je na bieżąco przez cały rok.</p>\n  <p>Jeśli Twój obrót z działalności jest poniżej £90 000, możesz korzystać z uproszczonej kategoryzacji — wpisujesz tylko, czy transakcja to przychód, czy wydatek, bez rozbijania na podkategorie. Zapytaj księgowego, czy to dotyczy Twojej sytuacji.</p>\n  <h2>MTD nie zastępuje CIS</h2>\n  <p>CIS i MTD działają równolegle. MTD zmienia rytm raportowania — kwartalnie zamiast raz w roku — ale nie dotyka mechanizmu potrąceń.</p>\n  <p>Contractorzy nadal potrącają podatek i raportują do HMRC co miesiąc. Ty prowadzisz cyfrowe rekordy i wysyłasz kwartalne aktualizacje. Na koniec roku wszystko się schodzi: przychód brutto, koszty, potrącenia CIS już zapłacone, ewentualne korekty i końcowy dochód do opodatkowania.</p>\n  <h2>Podsumowanie: co robić</h2>\n  <p>1. <strong>Zachowuj każdy payslip</strong> jak tylko go dostaniesz — od razu przekaż gdzieś cyfrowo.</p>\n  <p>2. <strong>Wpisuj przychód brutto</strong> w raportach kwartalnych, nie kwotę netto.</p>\n  <p>3. <strong>Zapisuj wydatki</strong> na bieżąco — paliwo, narzędzia, materiały, wszystko z paragonem.</p>\n  <p>4. <strong>Wysyłaj cztery raporty kwartalne</strong> w terminach (7 sierpnia, 7 listopada, 7 lutego, 7 maja).</p>\n  <p>5. <strong>Przed final declaration</strong> sprawdź sumę potrąceń CIS wobec payslipów i oddaj resztę księgowemu.</p>\n  <p>W sprawach dotyczących Twojej konkretnej sytuacji — zwłaszcza jeśli pracujesz dla kilku contractorów, masz gotówkowe zlecenia obok CIS albo działasz przez spółkę — zapytaj księgowego. My nie udzielamy porad podatkowych.</p>\n  <h2>Gdzie w tym wszystkim TidGo</h2>\n  <p><a href=\"/pl\">TidGo</a> jest zbudowane dokładnie dla tego rodzaju papierologii. Przekaż payslipy CIS i remittance notices mailem, wyślij zdjęcia paragonów za wydatki na WhatsAppie i miej wszystko w jednym miejscu przez cały rok. TidGo zapisuje przychód brutto z payslipów i przechowuje informację o potrąceniu osobno — żeby Twoje kwartalne rekordy pokazywały właściwe kwoty, a księgowy miał czyste dane do final declaration.</p>\n  <p>TidGo nie wysyła nic do HMRC i nie udziela porad podatkowych. Zbiera i porządkuje rekordy, żeby ten, kto robi Twoje rozliczenie, miał z czego pracować.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html\" target=\"_blank\" rel=\"noopener\">HMRC MTD end-to-end service guide — making updates at tax year end</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/what-is-the-construction-industry-scheme\" target=\"_blank\" rel=\"noopener\">Construction Industry Scheme — guidance</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Sprawdzone: sierpień 2026. Zweryfikuj na GOV.UK, jeśli czytasz to później.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "ro": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>MTD pentru subcontractorii CIS: venit brut, payslipuri și raportări trimestriale</h1>\n  <h2>MTD se aplică subcontractorilor CIS?</h2>\n  <p>Da — la fel ca oricărui sole trader. Dacă venitul tău brut depășește pragul relevant, Making Tax Digital pentru Income Tax ți se aplică de la data corespunzătoare.</p>\n  <p>Pragurile: peste £50.000 din aprilie 2026, peste £30.000 din aprilie 2027, peste £20.000 din aprilie 2028.</p>\n  <p>Qualifying income se bazează pe venitul brut CIS și pe orice venituri din proprietăți, înainte de cheltuieli și înainte de deducerile CIS. Deducerile CIS nu reduc qualifying income.</p>\n  <p>Aceasta este capcana în care cad mulți. Dacă antreprenorul îți plătește £1.600 și deduce £400 CIS, qualifying income-ul tău în scopul pragului este £2.000 — nu £1.600. Deducerea este impozit plătit în avans, nu o reducere a venitului.</p>\n  <h2>Ce sunt deducerile CIS</h2>\n  <p>CIS nu este impozit într-un sistem separat. Este impozit pe venit plătit anticipat — în rate, pe tot parcursul anului, colectat de antreprenor în numele HMRC. Când antreprenorul deduce 20% sau 30% din plata ta, trimite acea sumă direct la HMRC și o raportează lunar.</p>\n  <p>Până când depui declarația anuală, HMRC știe deja cât s-a plătit în numele tău. Deducerea compensează impozitul pe care îl datorezi pentru anul respectiv. Dacă s-a dedus mai mult decât datorezi — primești o rambursare.</p>\n  <p>MTD nu schimbă nimic din aceasta. Schimbă frecvența cu care raportezi veniturile și cheltuielile — nu modul în care funcționează deducerile CIS.</p>\n  <h2>Ce intră în raportările trimestriale: venitul brut</h2>\n  <p>Aceasta este partea care îi derutează pe subcontractori — și pe unii contabili.</p>\n  <p>Când clientul trimite actualizări trimestriale la HMRC prin software-ul său, nu i se va cere să furnizeze suma deducerilor CIS. HMRC are deja cifrele din raportările lunare ale antreprenorului.</p>\n  <p>Ce înregistrezi în raportările trimestriale este <strong>venitul brut</strong> — suma totală înainte de deducerea CIS. Dacă payslip-ul arată £2.000 brut și £400 dedus, înregistrezi £2.000 ca venit. Nu £1.600.</p>\n  <p>După trimiterea unei actualizări trimestriale, software-ul declanșează calculul fiscal. Rezultatul acestui calcul va include deducerile CIS primite de antreprenor pentru trimestrul respectiv. Deci poziția fiscală netă pe care o vezi după fiecare trimestru include deja deducerile tale CIS — chiar dacă tu nu le-ai introdus.</p>\n  <h2>Payslip-ul este documentul tău principal</h2>\n  <p>În fiecare lună antreprenorul tău ar trebui să îți dea o declarație CIS care să arate:</p>\n  <ul>\n    <li>Plata brută</li>\n    <li>Suma și rata deducerii CIS (20% sau 30%)</li>\n    <li>Suma netă plătită ție</li>\n  </ul>\n  <p>Acest payslip este documentul care susține înregistrările tale de venit. Păstrează-le pe toate. Sunt dovada ta de venit brut și dovada deducerilor deja plătite la HMRC.</p>\n  <p>Abordarea cea mai practică: când un payslip sosește pe email, transmite-l imediat în sistemul tău de evidențe. Nu aștepta până la termenul trimestrial să cauți douăsprezece payslipuri de la diferiți antreprenori din conturi de email diferite.</p>\n  <h2>Ce intră în final declaration</h2>\n  <p>Final declaration este momentul în care deducerile CIS sunt reconciliate formal.</p>\n  <p>Clientul poate oricând să vadă o defalcare a tuturor deducerilor CIS raportate la HMRC de antreprenorii săi. Înainte de a depune final declaration, verifici dacă acea sumă corespunde payslip-urilor tale. Dacă nu — poți trimite suma pe care o consideri corectă.</p>\n  <p>Acesta este motivul pentru care final declaration necesită implicarea unui profesionist — contabilul tău verifică suma deducerilor CIS față de payslipuri, revendică cheltuielile deductibile corect și se asigură că calculul fiscal anual este corect.</p>\n  <h2>Înregistrările pe care trebuie să le ții</h2>\n  <p>Pentru fiecare lucrare / antreprenor:</p>\n  <ul>\n    <li>Payslipuri CIS cu plata brută și deducerea</li>\n    <li>Remittance notices și declarații</li>\n    <li>Facturi emise (dacă este cazul)</li>\n    <li>Cheltuieli: combustibil, scule, materiale, echipamente de protecție, închiriere utilaje, plăți către subcontractori</li>\n  </ul>\n  <p>Pentru cheltuieli, păstrează bonul sau dovada. Cheltuielile reduc profitul tău impozabil — de aceea contează să le înregistrezi corect pe tot parcursul anului.</p>\n  <h2>MTD nu înlocuiește CIS</h2>\n  <p>CIS și MTD funcționează în paralel. MTD schimbă ritmul raportării — trimestrial în loc de anual — dar nu atinge mecanismul deducerilor.</p>\n  <p>Antreprenorii continuă să deducă impozit și să raporteze la HMRC lunar. Tu ții evidențe digitale și trimiți actualizări trimestriale. La sfârșitul anului totul se reunește: venit brut, cheltuieli, deduceri CIS deja plătite, ajustări necesare și profit impozabil final.</p>\n  <h2>Rezumat: ce să faci</h2>\n  <p>1. <strong>Păstrează fiecare payslip</strong> când îl primești — transmite-l imediat undeva digital.</p>\n  <p>2. <strong>Înregistrează venitul brut</strong> în raportările trimestriale, nu suma netă.</p>\n  <p>3. <strong>Înregistrează cheltuielile</strong> pe măsură ce apar — combustibil, scule, materiale, orice cu bon.</p>\n  <p>4. <strong>Trimite patru raportări trimestriale</strong> la termenele scadente (7 august, 7 noiembrie, 7 februarie, 7 mai).</p>\n  <p>5. <strong>Înainte de final declaration</strong>, verifică totalul deducerilor CIS față de payslipuri și lasă restul pe seama contabilului.</p>\n  <p>Pentru situația ta specifică — mai ales dacă lucrezi pentru mai mulți antreprenori, ai lucrări cash alături de CIS sau operezi printr-o societate — consultă contabilul. Această pagină acoperă regulile generale.</p>\n  <h2>Unde se încadrează TidGo</h2>\n  <p><a href=\"/ro\">TidGo</a> este construit exact pentru acest tip de evidențe. Transmite payslipurile CIS și remittance notices prin email, trimite poze la bonurile de cheltuieli pe WhatsApp și ține totul într-un singur loc pe tot parcursul anului. TidGo înregistrează venitul brut din payslipuri și stochează informația despre deducere separat — ca înregistrările tale trimestriale să arate cifrele corecte, iar contabilul să aibă date curate pentru final declaration.</p>\n  <p>TidGo nu trimite nimic la HMRC și nu oferă consultanță fiscală. Colectează și ordonează înregistrările ca cel care face raportarea ta să aibă ceva cu care să lucreze.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html\" target=\"_blank\" rel=\"noopener\">HMRC MTD end-to-end service guide</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/what-is-the-construction-industry-scheme\" target=\"_blank\" rel=\"noopener\">Construction Industry Scheme — guidance</a></li>\n    </ul>\n    <p>*Verificat: august 2026. Verifică pe GOV.UK dacă citești mai târziu.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "lt": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>MTD CIS subkontraktorjams: bendrosios pajamos, payslipai ir ketvirtinės ataskaitos</h1>\n  <h2>Ar MTD taikomas CIS subkontraktorjams?</h2>\n  <p>Taip — taip pat kaip bet kuriam sole trader. Jei tavo bendrosios pajamos viršija atitinkamą ribą, Making Tax Digital pajamų mokesčiui taikomas nuo atitinkamos datos.</p>\n  <p>Ribos: virš £50 000 nuo 2026 m. balandžio, virš £30 000 nuo 2027 m. balandžio, virš £20 000 nuo 2028 m. balandžio.</p>\n  <p>Qualifying income grindžiamas bendrosiomis CIS pajamomis ir bet kokiomis nuomos pajamomis, prieš išlaidas ir prieš CIS atskaitymus. CIS atskaitymai nemažina qualifying income.</p>\n  <p>Tai spąstai, į kuriuos pakliūna daug žmonių. Jei rangovas moka tau £1 600 ir išskaičiuoja £400 CIS, tavo qualifying income ribos tikslais yra £2 000, o ne £1 600. Atskaitymas yra iš anksto sumokėtas mokestis, o ne pajamų sumažinimas.</p>\n  <h2>Kas yra CIS atskaitymai</h2>\n  <p>CIS nėra mokestis atskiroje sistemoje. Tai iš anksto mokamas pajamų mokestis — dalimis, ištisus metus, kurį rangovas renka HMRC vardu. Kai rangovas išskaičiuoja 20% ar 30% iš tavo mokėjimo, tą sumą siunčia tiesiai į HMRC ir kas mėnesį tai praneša.</p>\n  <p>Kol pateiki metinę deklaraciją, HMRC jau žino, kiek buvo sumokėta tavo vardu. Atskaitymas kompensuoja mokestį, kurį esi skolingas už metus. Jei buvo išskaičiuota daugiau nei tu esi skolingas — gauni grąžinamąją išmoką.</p>\n  <p>MTD to nekeičia. Keičia pajamų ir išlaidų ataskaitų teikimo dažnumą — ne CIS atskaitymų veikimą.</p>\n  <h2>Kas įrašoma į ketvirtines ataskaitas: bendrosios pajamos</h2>\n  <p>Tai dalis, kuri glumina subkontraktoriuos — ir dalį buhalterių.</p>\n  <p>Kai klientas per savo programinę įrangą siunčia ketvirtines atnaujinimus į HMRC, jam nereikia nurodyti CIS atskaitymų sumos. HMRC jau turi tuos skaičius iš rangovo mėnesinių ataskaitų.</p>\n  <p>Į ketvirtines ataskaitas įrašai <strong>bendrąsias pajamas</strong> — visą sumą prieš CIS atskaitymą. Jei payslipe nurodyta £2 000 bruto ir £400 atskaitymo, įrašai £2 000 kaip pajamas. Ne £1 600.</p>\n  <p>Pateikus ketvirtinę ataskaitą, programinė įranga suaktyvina mokesčių skaičiavimą. Šio skaičiavimo rezultatas apims CIS atskaitymus, kuriuos rangovas pranešė už tą ketvirtį. Taigi grynoji mokestinė pozicija, kurią matai po kiekvieno ketvirčio, jau atsižvelgia į tavo CIS atskaitymus — net jei tu jų nepateikei.</p>\n  <h2>Payslipas yra pagrindinis tavo dokumentas</h2>\n  <p>Kiekvieną mėnesį rangovas turėtų duoti tau CIS išrašą, kuriame nurodyta:</p>\n  <ul>\n    <li>Tavo bruto užmokestis</li>\n    <li>CIS atskaitymo suma ir tarifas (20% ar 30%)</li>\n    <li>Tau išmokėta grynoji suma</li>\n  </ul>\n  <p>Šis payslipas yra dokumentas, patvirtinantis tavo pajamas. Saugok kiekvieną. Tai tavo bruto pajamų įrodymas ir įrodymų, kad atskaitymai jau sumokėti į HMRC.</p>\n  <p>Praktiškiausias požiūris: kai payslipas ateina el. paštu, nedelsiant persiųsk jį į savo įrašų sistemą. Nelaukk iki ketvirtinio termino ieškoti dvylikos payslipų iš skirtingų rangovų skirtingose el. pašto paskyrose.</p>\n  <h2>Kas įeina į final declaration</h2>\n  <p>Final declaration yra momentas, kai CIS atskaitymai yra formaliai suderinami.</p>\n  <p>Klientas bet kada gali peržiūrėti visų CIS atskaitymų, kuriuos HMRC pranešė rangovai, išklotinę. Prieš pateikiant final declaration, patikrink, ar ta suma atitinka tavo payslipus. Jei ne — gali pateikti, kiek manai esant teisinga.</p>\n  <p>Tai priežastis, kodėl final declaration reikalingas profesionalo dalyvavimas — tavo buhalteris patikrina CIS atskaitymų sumą pagal payslipus, tinkamai reikalauja leistinų išlaidų ir pasirūpina, kad metinis mokesčių skaičiavimas būtų teisingas.</p>\n  <h2>Įrašai, kuriuos privalai tvarkyti</h2>\n  <p>Kiekvienam darbui / rangovui:</p>\n  <ul>\n    <li>CIS payslipai su bruto mokėjimu ir atskaitymu</li>\n    <li>Remittance notices ir išrašai</li>\n    <li>Išrašytos sąskaitos faktūros (jei taikoma)</li>\n    <li>Išlaidos: kuras, įrankiai, medžiagos, apsauginės priemonės, įrangos nuoma, mokėjimai subkontraktorjams</li>\n  </ul>\n  <p>Išlaidoms saugok kvitą ar įrodymą. Išlaidos mažina tavo apmokestinamąjį pelną — todėl svarbu jas tiksliai registruoti ištisus metus.</p>\n  <h2>MTD nepakeičia CIS</h2>\n  <p>CIS ir MTD veikia lygiagrečiai. MTD keičia ataskaitų teikimo ritmą — kas ketvirtį vietoj kasmet — bet neliečia atskaitymų mechanizmo.</p>\n  <p>Rangovai toliau išskaičiuoja mokestį ir kas mėnesį praneša HMRC. Tu tvarkai skaitmeninius įrašus ir siunti ketvirtines atnaujinimus. Metų pabaigoje viskas susijungia: bendrosios pajamos, išlaidos, jau sumokėti CIS atskaitymai, reikalingi patikslinimai ir galutinis apmokestinamasis pelnas.</p>\n  <h2>Santrauka: ką daryti</h2>\n  <p>1. <strong>Saugok kiekvieną payslipą</strong> gavęs — iškart persiųsk kur nors skaitmeniniu formatu.</p>\n  <p>2. <strong>Įrašyk bendrąsias pajamas</strong> ketvirtinėse ataskaitose, o ne grynąją sumą.</p>\n  <p>3. <strong>Registruok išlaidas</strong> joms atsiradus — kuras, įrankiai, medžiagos, viskas su kvitu.</p>\n  <p>4. <strong>Siųsk keturias ketvirtines ataskaitas</strong> per terminus (rugpjūčio 7, lapkričio 7, vasario 7, gegužės 7).</p>\n  <p>5. <strong>Prieš final declaration</strong> patikrink bendrą CIS atskaitymų sumą pagal payslipus ir likusią dalį palik buhalteriui.</p>\n  <p>Dėl savo konkrečios situacijos — ypač jei dirbi keliems rangovams, turi grynųjų darbų šalia CIS arba veiki per ribotos atsakomybės bendrovę — pasitark su buhalteriu.</p>\n  <h2>Kur čia TidGo</h2>\n  <p><a href=\"/lt\">TidGo</a> sukurtas būtent šiam dokumentų tvarkymo tipui. Persiųsk CIS payslipus ir remittance notices el. paštu, siųsk išlaidų kvitų nuotraukas per WhatsApp ir laikyk viską vienoje vietoje ištisus metus. TidGo registruoja bendrąsias pajamas iš payslipų ir saugo atskaitymo informaciją atskirai — kad tavo ketvirtiniai įrašai rodytų teisingas sumas, o buhalteris turėtų švarius duomenis final declaration.</p>\n  <p>TidGo nieko nesiunčia į HMRC ir neteikia mokesčių konsultacijų. Renka ir tvarko įrašus, kad tas, kas teikia tavo ataskaitas, turėtų iš ko dirbti.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/documentation/make-updates-at-tax-year-end.html\" target=\"_blank\" rel=\"noopener\">HMRC MTD end-to-end service guide</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/what-is-the-construction-industry-scheme\" target=\"_blank\" rel=\"noopener\">Construction Industry Scheme — guidance</a></li>\n    </ul>\n    <p>*Patikrinta: 2026 m. rugpjūtis. Jei skaitai vėliau, pasitikrink GOV.UK.*</p>\n  </div>\n  ${pageCta()}\n</article>"
};

function mtdCisArticle() {
  return (MTD_CIS_ARTICLES[state.marketingLanguage] || MTD_CIS_ARTICLES.en)
    .replaceAll('${mk("navMtd")}', mk("navMtd"))
    .replaceAll('${pageCta()}', pageCta());
}

const MTD_WHAT_ARTICLES = {
  "en": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>What is Making Tax Digital? And does it apply to me?</h1>\n  <h2>The one-sentence version</h2>\n  <p>Making Tax Digital for Income Tax is HMRC's requirement for self-employed people and landlords to keep their income and expense records digitally and report them to HMRC four times a year, instead of once.</p>\n  <p>That's the whole thing. Everything else is detail.</p>\n  <h2>Why HMRC is doing this</h2>\n  <p>The current system — keep whatever records you like all year, then add it all up in January — produces errors, late returns and unpaid tax. HMRC believes that people who record income and expenses as they happen, rather than reconstructing the year from a bag of receipts, will end up with more accurate returns.</p>\n  <p>There is also a revenue motive. More frequent reporting means HMRC spots problems earlier. That is their business, not yours — but it explains why this is not optional.</p>\n  <h2>Who does it apply to?</h2>\n  <p>Making Tax Digital for Income Tax applies to <a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">sole traders and landlords</a> whose qualifying income exceeds the relevant threshold.</p>\n  <p>The thresholds are being introduced in stages:</p>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>From</th>\n        <th>Threshold</th>\n        <th>Who is affected</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>April 2026</td>\n          <td>£50,000</td>\n          <td>Sole traders and landlords already in scope</td>\n        </tr>\n        <tr>\n          <td>April 2027</td>\n          <td>£30,000</td>\n          <td>Additional sole traders and landlords</td>\n        </tr>\n        <tr>\n          <td>April 2028</td>\n          <td>£20,000</td>\n          <td>Further sole traders and landlords</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p><strong>Qualifying income</strong> is not your profit. It is your gross income from self-employment and property, before expenses and before any CIS deductions, added together. A full explanation with examples is in the <a href=\"/mtd/qualifying-income\">qualifying income article</a>.</p>\n  <p>MTD does not apply to you if your qualifying income is <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">£20,000 or less</a> — you are automatically exempt. Between £20,000 and the relevant threshold, you are not yet in scope but the rules will eventually reach you as thresholds fall.</p>\n  <p>Limited companies are not affected by these rules. MTD for Income Tax applies to individuals — sole traders and landlords — not to corporation tax.</p>\n  <h2>What changes</h2>\n  <p><strong>What you do now:</strong> keep records however you like, add them up once a year, submit a Self Assessment return by 31 January.</p>\n  <p><strong>What MTD requires:</strong></p>\n  <ol>\n    <li><strong>Digital records.</strong> Your income and expenses must be recorded digitally — in software that works with MTD — as they happen. Not in a notebook, not in a spreadsheet that isn't linked to anything, not in a carrier bag.</li>\n  \n    <li><strong>Four quarterly updates.</strong> Every three months, you send HMRC a summary of your income and expenses for that period. These are not full tax returns. They are running totals. <a href=\"/mtd/quarterly-updates\">More detail on quarterly updates is here</a>.</li>\n  \n    <li><strong>A final declaration.</strong> At the end of the tax year, you confirm your figures, add any other income (employment, savings, dividends) and submit your annual return. This replaces Self Assessment. It still happens once a year. This is where your accountant earns their fee — reliefs, allowances and the final tax calculation all happen here.</li>\n  </ol>\n  <h2>What does not change</h2>\n  <p>CIS deductions continue exactly as before — contractors deduct tax and report to HMRC monthly. MTD does not replace or change that.</p>\n  <p>You still need an accountant for the final declaration if your affairs are anything other than straightforward.</p>\n  <p>HMRC does not want your paper receipts or your photos. What has to be digital is the record of each transaction — the amount, the date and the category. <a href=\"/mtd/do-i-have-to-photograph-receipts\">What counts as a digital record is explained here</a>.</p>\n  <h2>What you need to get started</h2>\n  <p><strong>An account to sign in with.</strong> Government Gateway or GOV.UK One Login. If you already file Self Assessment online, you have one.</p>\n  <p><strong>A UTR.</strong> Your Unique Taxpayer Reference — the ten-digit number that identifies you to HMRC. If you've filed Self Assessment before, you have one. If not, you need to <a href=\"https://www.gov.uk/register-for-self-assessment\" target=\"_blank\" rel=\"noopener\">register for Self Assessment</a> first and wait for your UTR to arrive by post.</p>\n  <p><strong>MTD-compatible software.</strong> HMRC maintains <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">a list of software that works with MTD</a>. You need software that can send quarterly updates and final declarations to HMRC directly.</p>\n  <p><strong>Registration for MTD.</strong> Having a Government Gateway account is not enough. You <a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">sign up for MTD separately</a>. After sign-up, HMRC issues you a set of obligations — what to report and when. <a href=\"/mtd/government-gateway\">The full explanation of Government Gateway vs MTD sign-up is here</a>.</p>\n  <h2>The first year: no penalty points for late quarterly updates</h2>\n  <p>2026/27 is a transition year. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC has confirmed</a> that no penalty points will be issued for late quarterly updates during this first year. The full points-based penalty system starts from 2027/28: four points equals a £200 penalty, and each additional late submission after that triggers another £200.</p>\n  <p>Late payment of tax and late final declarations are penalised under existing rules, even in 2026/27.</p>\n  <h2>The plain version</h2>\n  <p>You need to record your income and expenses digitally throughout the year. Every three months, your software sends a summary to HMRC. At the end of the year, you or your accountant confirms the figures and submits the annual return.</p>\n  <p>If you already use accounting software and file your own Self Assessment, the change is manageable. If you currently hand a bag of receipts to your accountant in January, the change is bigger — but the underlying habit it requires (recording things as they happen, not twelve months later) is one that makes your accountant's job easier and your tax bill more accurate.</p>\n  <p>For your own situation — especially if you have multiple income sources, foreign income, or a business structure that isn't straightforward — speak to your accountant. This page covers the general rules. It is not tax advice.</p>\n  <h2>Where TidGo fits</h2>\n  <p><a href=\"/\">TidGo</a> handles the record-keeping layer: receipts and income proof captured as they happen, by WhatsApp, email or in the app, in eight languages. TidGo doesn't submit quarterly updates or final declarations to HMRC — that part goes through MTD-compatible software or your accountant. It makes sure the records exist and are tidy when they're needed.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Sign up for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Last checked: August 2026. Verify at GOV.UK if reading later.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "pl": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Co to jest Making Tax Digital? I czy mnie dotyczy?</h1>\n  <h2>Wersja w jednym zdaniu</h2>\n  <p>Making Tax Digital dla Income Tax to wymóg HMRC, żeby samozatrudnieni i landlordzi prowadzili ewidencję przychodów i wydatków cyfrowo i raportowali do HMRC cztery razy w roku — zamiast raz.</p>\n  <p>Tyle. Reszta to szczegóły.</p>\n  <h2>Dlaczego HMRC to robi</h2>\n  <p>Obecny system — prowadź jaką chcesz ewidencję przez cały rok, a potem zsumuj wszystko w styczniu — generuje błędy, spóźnione zeznania i niezapłacony podatek. HMRC uważa, że ludzie, którzy zapisują przychody i wydatki na bieżąco, zamiast rekonstruować rok z reklamówki paragonów, będą składać dokładniejsze zeznania.</p>\n  <p>Jest też motyw finansowy. Częstsze raportowanie oznacza, że HMRC szybciej wykrywa problemy. To ich sprawa, nie Twoja — ale wyjaśnia, dlaczego to nie jest dobrowolne.</p>\n  <h2>Kogo to dotyczy?</h2>\n  <p>Making Tax Digital dla Income Tax dotyczy <a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">samozatrudnionych i landlordów</a>, których qualifying income przekracza odpowiedni próg.</p>\n  <p>Progi wchodzą etapami:</p>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Od</th>\n        <th>Próg</th>\n        <th>Kogo dotyczy</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>Kwiecień 2026</td>\n          <td>£50 000</td>\n          <td>Samozatrudnieni i landlordzi już w systemie</td>\n        </tr>\n        <tr>\n          <td>Kwiecień 2027</td>\n          <td>£30 000</td>\n          <td>Kolejni samozatrudnieni i landlordzi</td>\n        </tr>\n        <tr>\n          <td>Kwiecień 2028</td>\n          <td>£20 000</td>\n          <td>Następni samozatrudnieni i landlordzi</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p><strong>Qualifying income</strong> to nie Twój zysk. To przychód brutto z działalności i z wynajmu, przed kosztami i przed potrąceniami CIS, zsumowany razem. Pełne wyjaśnienie z przykładami jest w <a href=\"/pl/mtd/qualifying-income\">artykule o qualifying income</a>.</p>\n  <p>MTD Cię nie dotyczy, jeśli Twoje qualifying income wynosi <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">£20 000 lub mniej</a> — jesteś automatycznie zwolniony. Między £20 000 a odpowiednim progiem nie jesteś jeszcze w systemie, ale przepisy Cię dosięgną, gdy progi będą spadać.</p>\n  <p>Spółki z o.o. (limited companies) te przepisy nie dotyczą. MTD dla Income Tax dotyczy osób fizycznych — samozatrudnionych i landlordów — nie corporation tax.</p>\n  <h2>Co się zmienia</h2>\n  <p><strong>Jak jest teraz:</strong> prowadzisz ewidencję jak chcesz, sumujesz raz w roku, składasz Self Assessment do 31 stycznia.</p>\n  <p><strong>Co wymaga MTD:</strong></p>\n  <ol>\n    <li><strong>Cyfrowa ewidencja.</strong> Przychody i wydatki muszą być zapisywane cyfrowo — w oprogramowaniu kompatybilnym z MTD — na bieżąco. Nie w zeszycie, nie w arkuszu niepodłączonym do niczego, nie w reklamówce.</li>\n  \n    <li><strong>Cztery kwartalne raporty.</strong> Co trzy miesiące wysyłasz HMRC podsumowanie przychodów i wydatków za ten okres. To nie są pełne zeznania podatkowe. To bieżące sumy. <a href=\"/pl/mtd/quarterly-updates\">Więcej o kwartalnych raportach tutaj</a>.</li>\n  \n    <li><strong>Final declaration.</strong> Na koniec roku podatkowego potwierdzasz swoje cyfry, dodajesz inne przychody (z etatu, oszczędności, dywidendy) i składasz roczne zeznanie. To zastępuje Self Assessment. Nadal zdarza się raz w roku. Tu Twój księgowy naprawdę się przydaje — ulgi, odliczenia i końcowe obliczenie podatku dzieją się właśnie tu.</li>\n  </ol>\n  <h2>Co się nie zmienia</h2>\n  <p>Potrącenia CIS działają dokładnie jak przed — contractorzy potrącają podatek i raportują do HMRC co miesiąc. MTD tego nie zastępuje ani nie zmienia.</p>\n  <p>Do final declaration nadal potrzebujesz księgowego, jeśli Twoja sytuacja jest choć trochę złożona.</p>\n  <p>HMRC nie chce Twoich papierowych paragonów ani zdjęć. Cyfrowy musi być zapis każdej transakcji — kwota, data i kategoria. <a href=\"/pl/mtd/do-i-have-to-photograph-receipts\">Co liczy się jako cyfrowy rekord wyjaśniamy tutaj</a>.</p>\n  <h2>Czego potrzebujesz, żeby zacząć</h2>\n  <p><strong>Konto do logowania.</strong> Government Gateway lub GOV.UK One Login. Jeśli już składasz Self Assessment online, masz je.</p>\n  <p><strong>UTR.</strong> Unique Taxpayer Reference — dziesięciocyfrowy numer, który identyfikuje Cię w HMRC. Jeśli składałeś Self Assessment wcześniej, masz go. Jeśli nie — najpierw musisz <a href=\"https://www.gov.uk/register-for-self-assessment\" target=\"_blank\" rel=\"noopener\">zarejestrować się do Self Assessment</a> i poczekać na UTR pocztą.</p>\n  <p><strong>Oprogramowanie kompatybilne z MTD.</strong> HMRC prowadzi <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">listę oprogramowania kompatybilnego z MTD</a>. Potrzebujesz softu, który może wysyłać kwartalne raporty i final declaration bezpośrednio do HMRC.</p>\n  <p><strong>Rejestracja do MTD.</strong> Posiadanie konta Government Gateway nie wystarczy. <a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Rejestrujesz się do MTD osobno</a>. Po rejestracji HMRC wyznacza Ci zestaw obowiązków — co i kiedy raportować. <a href=\"/pl/mtd/government-gateway\">Pełne wyjaśnienie Government Gateway vs rejestracja MTD jest tutaj</a>.</p>\n  <h2>Pierwszy rok: brak punktów karnych za spóźnione raporty kwartalne</h2>\n  <p>Rok 2026/27 to rok przejściowy. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC potwierdziło</a>, że w pierwszym roku nie będą przyznawane punkty karne za spóźnione kwartalne raporty. Pełny system punktowy startuje od 2027/28: cztery punkty to kara £200, a każde kolejne spóźnienie to kolejne £200.</p>\n  <p>Spóźniona płatność podatku i spóźniona final declaration podlegają karom według dotychczasowych zasad, nawet w 2026/27.</p>\n  <h2>Prosta wersja</h2>\n  <p>Musisz zapisywać przychody i wydatki cyfrowo przez cały rok. Co trzy miesiące Twoje oprogramowanie wysyła podsumowanie do HMRC. Na koniec roku Ty albo Twój księgowy potwierdza cyfry i składa roczne zeznanie.</p>\n  <p>Jeśli już używasz programu księgowego i sam składasz Self Assessment — zmiana jest do ogarnięcia. Jeśli teraz przynosisz reklamówkę paragonów do księgowego w styczniu — zmiana jest większa. Ale podstawowy nawyk, którego wymaga (zapisywanie rzeczy na bieżąco, a nie dwanaście miesięcy później), sprawia, że praca Twojego księgowego jest łatwiejsza, a rachunek podatkowy dokładniejszy.</p>\n  <p>W sprawach dotyczących Twojej konkretnej sytuacji — zwłaszcza jeśli masz wiele źródeł przychodu, dochody z zagranicy albo złożoną strukturę — zapytaj księgowego. Ta strona opisuje ogólne zasady. Nie jest poradą podatkową.</p>\n  <h2>Gdzie w tym wszystkim TidGo</h2>\n  <p><a href=\"/pl\">TidGo</a> zajmuje się warstwą zbierania rekordów: paragony i dowody przychodu zbierane na bieżąco, przez WhatsApp, mail albo w aplikacji, w ośmiu językach. TidGo nie wysyła kwartalnych raportów ani final declaration do HMRC — to robi kompatybilne oprogramowanie albo Twój księgowy. Sprawia tylko, że rekordy istnieją i są uporządkowane, gdy są potrzebne.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Sign up for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Sprawdzone: sierpień 2026. Zweryfikuj na GOV.UK, jeśli czytasz to później.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "ro": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Ce este Making Tax Digital? Și ți se aplică?</h1>\n  <h2>Versiunea într-o singură propoziție</h2>\n  <p>Making Tax Digital pentru Income Tax este cerința HMRC ca persoanele self-employed și landlords să țină evidența veniturilor și cheltuielilor digital și să raporteze la HMRC de patru ori pe an — în loc de o dată.</p>\n  <p>Atât. Restul sunt detalii.</p>\n  <h2>De ce face asta HMRC</h2>\n  <p>Sistemul actual — ții ce evidențe vrei pe tot parcursul anului, le aduni în ianuarie — produce erori, declarații întârziate și impozite neplătite. HMRC consideră că oamenii care înregistrează veniturile și cheltuielile pe măsură ce apar, în loc să reconstituie anul dintr-o pungă de bonuri, vor depune declarații mai exacte.</p>\n  <p>Există și un motiv financiar. Raportarea mai frecventă înseamnă că HMRC identifică problemele mai devreme. Aceasta este treaba lor, nu a ta — dar explică de ce nu este opțional.</p>\n  <h2>Cui i se aplică?</h2>\n  <p>Making Tax Digital pentru Income Tax se aplică <a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">persoanelor self-employed și landlords</a> al căror qualifying income depășește pragul relevant.</p>\n  <p>Pragurile sunt introduse în etape:</p>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Din</th>\n        <th>Prag</th>\n        <th>Cine este afectat</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>Aprilie 2026</td>\n          <td>£50.000</td>\n          <td>Persoane self-employed și landlords deja în sistem</td>\n        </tr>\n        <tr>\n          <td>Aprilie 2027</td>\n          <td>£30.000</td>\n          <td>Persoane self-employed și landlords suplimentare</td>\n        </tr>\n        <tr>\n          <td>Aprilie 2028</td>\n          <td>£20.000</td>\n          <td>Alte persoane self-employed și landlords</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p><strong>Qualifying income</strong> nu este profitul tău. Este venitul brut din activitate independentă și din proprietăți, înainte de cheltuieli și înainte de deducerile CIS, adunat împreună. O explicație completă cu exemple este în <a href=\"/ro/mtd/qualifying-income\">articolul despre qualifying income</a>.</p>\n  <p>MTD nu ți se aplică dacă qualifying income este de <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">£20.000 sau mai puțin</a> — ești scutit automat.</p>\n  <p>Societățile cu răspundere limitată nu sunt afectate de aceste reguli. MTD pentru Income Tax se aplică persoanelor fizice — self-employed și landlords — nu corporation tax.</p>\n  <h2>Ce se schimbă</h2>\n  <p><strong>Cum este acum:</strong> ții evidențe cum vrei, le aduni o dată pe an, depui o declarație Self Assessment până pe 31 ianuarie.</p>\n  <p><strong>Ce cere MTD:</strong></p>\n  <ol>\n    <li><strong>Evidențe digitale.</strong> Veniturile și cheltuielile trebuie înregistrate digital — în software compatibil cu MTD — pe măsură ce apar.</li>\n  \n    <li><strong>Patru actualizări trimestriale.</strong> La fiecare trei luni, trimiți HMRC un rezumat al veniturilor și cheltuielilor pentru acea perioadă. Nu sunt declarații fiscale complete. Sunt totaluri curente. <a href=\"/ro/mtd/quarterly-updates\">Mai multe detalii despre actualizările trimestriale aici</a>.</li>\n  \n    <li><strong>Final declaration.</strong> La sfârșitul anului fiscal, confirmi cifrele, adaugi orice alt venit și depui declarația anuală. Aceasta înlocuiește Self Assessment. Tot se întâmplă o dată pe an. Aici contabilul tău câștigă banii — scutiri, deduceri și calculul fiscal final se fac aici.</li>\n  </ol>\n  <h2>Ce nu se schimbă</h2>\n  <p>Deducerile CIS continuă exact ca înainte. MTD nu le înlocuiește și nu le modifică.</p>\n  <p>Ai în continuare nevoie de contabil pentru final declaration dacă situația ta nu este simplă.</p>\n  <p>HMRC nu vrea bonurile tale pe hârtie sau fotografiile lor. Ce trebuie să fie digital este înregistrarea fiecărei tranzacții — suma, data și categoria. <a href=\"/ro/mtd/do-i-have-to-photograph-receipts\">Ce contează ca evidență digitală explicăm aici</a>.</p>\n  <h2>De ce ai nevoie pentru a începe</h2>\n  <p><strong>Un cont de autentificare.</strong> Government Gateway sau GOV.UK One Login.</p>\n  <p><strong>UTR.</strong> Unique Taxpayer Reference — numărul din zece cifre care te identifică la HMRC.</p>\n  <p><strong>Software compatibil cu MTD.</strong> HMRC menține <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">o listă de software compatibil cu MTD</a>.</p>\n  <p><strong>Înregistrarea la MTD.</strong> A avea un cont Government Gateway nu este suficient. <a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Te înregistrezi la MTD separat</a>. <a href=\"/ro/mtd/government-gateway\">Explicația completă a diferenței dintre Government Gateway și înregistrarea MTD este aici</a>.</p>\n  <h2>Primul an: fără puncte de penalizare pentru raportări trimestriale întârziate</h2>\n  <p>2026/27 este un an de tranziție. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC a confirmat</a> că nu se vor acorda puncte de penalizare pentru actualizările trimestriale întârziate în acest prim an. Sistemul complet de puncte începe din 2027/28.</p>\n  <h2>Versiunea simplă</h2>\n  <p>Trebuie să înregistrezi veniturile și cheltuielile digital pe tot parcursul anului. La fiecare trei luni, software-ul tău trimite un rezumat la HMRC. La sfârșitul anului, tu sau contabilul tău confirmați cifrele și depuneți declarația anuală.</p>\n  <p>Pentru situația ta specifică — mai ales dacă ai mai multe surse de venit sau o structură complexă — consultă contabilul. Această pagină acoperă regulile generale. Nu este consultanță fiscală.</p>\n  <h2>Unde se încadrează TidGo</h2>\n  <p><a href=\"/ro\">TidGo</a> se ocupă de stratul de colectare a evidențelor: bonuri și dovezi de venit colectate pe măsură ce apar, prin WhatsApp, email sau în aplicație, în opt limbi. TidGo nu trimite actualizări trimestriale sau final declaration la HMRC — asta o face software-ul compatibil sau contabilul tău.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Sign up for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Verificat: august 2026. Verifică pe GOV.UK dacă citești mai târziu.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "lt": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Kas yra Making Tax Digital? Ar tai taikoma man?</h1>\n  <h2>Versija vienu sakiniu</h2>\n  <p>Making Tax Digital pajamų mokesčiui yra HMRC reikalavimas, kad savarankiškai dirbantys asmenys ir nuomotojai tvarkytų pajamų ir išlaidų apskaitas skaitmeniškai ir teiktų ataskaitas HMRC keturis kartus per metus — vietoj vieno.</p>\n  <p>Tiek. Visa kita — detalės.</p>\n  <h2>Kodėl HMRC tai daro</h2>\n  <p>Dabartinė sistema — tvarkyk kokias nori apskaitas ištisus metus, o paskui sausį susumuok viską — sukuria klaidų, pavėluotų deklaracijų ir nesumokėtų mokesčių. HMRC mano, kad žmonės, kurie registruoja pajamas ir išlaidas iš karto, o ne rekonstruoja metus iš kvitų maišo, teiks tikslesnes deklaracijas.</p>\n  <p>Yra ir finansinis motyvas. Dažnesnės ataskaitos reiškia, kad HMRC anksčiau pastebis problemas. Tai jų reikalas, ne tavo — bet tai paaiškina, kodėl tai nėra savanoriška.</p>\n  <h2>Kam tai taikoma?</h2>\n  <p>Making Tax Digital pajamų mokesčiui taikomas <a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">savarankiškai dirbantiems asmenims ir nuomotojams</a>, kurių qualifying income viršija atitinkamą ribą.</p>\n  <p>Ribos įvedamos etapais:</p>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Nuo</th>\n        <th>Riba</th>\n        <th>Kam taikoma</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>2026 m. balandis</td>\n          <td>£50 000</td>\n          <td>Savarankiškai dirbantys ir nuomotojai jau sistemoje</td>\n        </tr>\n        <tr>\n          <td>2027 m. balandis</td>\n          <td>£30 000</td>\n          <td>Papildomi savarankiškai dirbantys ir nuomotojai</td>\n        </tr>\n        <tr>\n          <td>2028 m. balandis</td>\n          <td>£20 000</td>\n          <td>Kiti savarankiškai dirbantys ir nuomotojai</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p><strong>Qualifying income</strong> yra ne tavo pelnas. Tai bendrosios pajamos iš savarankiškos veiklos ir nuomos, prieš išlaidas ir prieš CIS atskaitymus, sudėtos kartu. Išsamus paaiškinimas su pavyzdžiais yra <a href=\"/lt/mtd/qualifying-income\">qualifying income straipsnyje</a>.</p>\n  <p>MTD tau netaikomas, jei qualifying income yra <a href=\"https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">£20 000 ar mažiau</a> — esi automatiškai atleistas.</p>\n  <p>Ribotos atsakomybės bendrovių šios taisyklės neliečia. MTD pajamų mokesčiui taikomas fiziniams asmenims — savarankiškai dirbantiems ir nuomotojams — ne corporation tax.</p>\n  <h2>Kas keičiasi</h2>\n  <p><strong>Kaip yra dabar:</strong> tvarkyk kokias nori apskaitas, susumuok kartą per metus, pateik Self Assessment deklaraciją iki sausio 31 d.</p>\n  <p><strong>Ko reikalauja MTD:</strong></p>\n  <ol>\n    <li><strong>Skaitmeninės apskaitos.</strong> Pajamos ir išlaidos turi būti registruojamos skaitmeniškai — su MTD suderintoje programinėje įrangoje — iš karto.</li>\n  \n    <li><strong>Keturios ketvirtinės ataskaitos.</strong> Kas tris mėnesius siunti HMRC to laikotarpio pajamų ir išlaidų santrauką. Tai ne pilnos mokesčių deklaracijos. Tai einamieji sumai. <a href=\"/lt/mtd/quarterly-updates\">Daugiau apie ketvirtines ataskaitas čia</a>.</li>\n  \n    <li><strong>Final declaration.</strong> Mokestinių metų pabaigoje patvirtini skaičius, pridedi kitas pajamas ir pateiki metinę deklaraciją. Tai pakeičia Self Assessment. Vis tiek vyksta kartą per metus. Čia tavo buhalteris uždirba atlyginimą — lengvatos, atskaitymai ir galutinis mokesčių skaičiavimas vyksta būtent čia.</li>\n  </ol>\n  <h2>Kas nesikeičia</h2>\n  <p>CIS atskaitymai tęsiasi lygiai taip pat kaip anksčiau. MTD jų nepakeičia.</p>\n  <p>Final declaration vis tiek reikia buhalterio, jei tavo reikalai nėra paprasti.</p>\n  <p>HMRC nenori tavo popierinių kvitų ar jų nuotraukų. Skaitmeninis turi būti kiekvienos sandorio įrašas — suma, data ir kategorija. <a href=\"/lt/mtd/do-i-have-to-photograph-receipts\">Kas laikoma skaitmeniniu įrašu paaiškiname čia</a>.</p>\n  <h2>Ko reikia pradėti</h2>\n  <p><strong>Paskyra prisijungimui.</strong> Government Gateway arba GOV.UK One Login.</p>\n  <p><strong>UTR.</strong> Unique Taxpayer Reference — dešimties skaitmenų numeris, kuris identifikuoja tave HMRC sistemoje.</p>\n  <p><strong>Su MTD suderinama programinė įranga.</strong> HMRC tvarko <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">suderinamų programų sąrašą</a>.</p>\n  <p><strong>Registracija MTD.</strong> Government Gateway paskyros nepakanka. <a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Registruojiesi MTD atskirai</a>. <a href=\"/lt/mtd/government-gateway\">Išsamus paaiškinimas apie Government Gateway ir MTD registraciją čia</a>.</p>\n  <h2>Pirmieji metai: jokių baudos taškų už pavėluotas ketvirtines ataskaitas</h2>\n  <p>2026/27 yra pereinamasis laikotarpis. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC patvirtino</a>, kad pirmaisiais metais baudos taškai už pavėluotas ketvirtines ataskaitas neskaičiuojami. Pilna taškų sistema prasideda nuo 2027/28.</p>\n  <h2>Paprasta versija</h2>\n  <p>Privalai registruoti pajamas ir išlaidas skaitmeniškai ištisus metus. Kas tris mėnesius programinė įranga siunčia santrauką į HMRC. Metų pabaigoje tu arba tavo buhalteris patvirtina skaičius ir pateikia metinę deklaraciją.</p>\n  <p>Dėl savo konkrečios situacijos — ypač jei turi kelias pajamų šaltinius ar sudėtingą struktūrą — pasitark su buhalteriu. Ši puslapis apima bendras taisykles. Tai nėra mokesčių konsultacija.</p>\n  <h2>Kur čia TidGo</h2>\n  <p><a href=\"/lt\">TidGo</a> rūpinasi įrašų rinkimo sluoksniu: kvitai ir pajamų įrodymai renkami iš karto, per WhatsApp, el. paštą arba programėlėje, aštuoniomis kalbomis. TidGo nesiunčia ketvirtinių ataskaitų ar final declaration į HMRC — tai daro suderinama programinė įranga arba tavo buhalteris.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find out if and when you need to use Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Work out your qualifying income</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Sign up for Making Tax Digital for Income Tax</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Patikrinta: 2026 m. rugpjūtis. Jei skaitai vėliau, pasitikrink GOV.UK.*</p>\n  </div>\n  ${pageCta()}\n</article>"
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
      <p>If you turned over £62,000 last year and £20,000 of that went on expenses, your qualifying income is £62,000, not £42,000.</p>

      <h2>Self-employment and property income are added together</h2>
      <p>This is the second trap, and it catches people who look at each source separately and conclude that neither one reaches the threshold.</p>
      <p>HMRC adds them up. In <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">their own worked example</a>, £25,000 of rental income plus £27,000 of self-employment income gives total qualifying income of £52,000.</p>
      <p>Neither figure on its own is anywhere near £50,000. Together they are over it. If you drive a van during the week and let out a flat, you need to add both before deciding whether this applies to you.</p>

      <h2>What does not count towards qualifying income?</h2>
      <p>Plenty of income sits outside this calculation entirely. Employment income through PAYE, pensions, savings interest, dividends and capital gains do not form part of qualifying income.</p>
      <p>So someone earning £70,000 in a job with £15,000 of freelance work on the side has qualifying income of £15,000. The salary is irrelevant to this particular test, though it still gets reported in the usual way.</p>
      <p>A few specific exclusions are worth knowing about, and <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC lists them</a>: income from UK REITs or Property Authorised Investment Funds doesn't count, qualifying care relief doesn't count towards your qualifying income, and averaging relief doesn't affect it, relevant if you're a farmer or a creative artist.</p>
      <p>One thing that does count and surprises people: a self-employment or property source that has <strong>ceased</strong> since your last tax return is still included in your qualifying income, as long as you have another continuing source.</p>

      <h2>What are the thresholds?</h2>
      <p>If your qualifying income was over £50,000 for the 2024 to 2025 tax year, <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">you should have started using Making Tax Digital for Income Tax from 6 April 2026</a>, and you can still sign up. Lower thresholds follow in the years after, bringing in progressively more people.</p>
      <p>At the other end, <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">you are automatically exempt</a> and do not need to use Making Tax Digital for Income Tax if your qualifying income is £20,000 or less.</p>

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
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income for Making Tax Digital for Income Tax — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if you can get an exemption from Making Tax Digital for Income Tax — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax — GOV.UK</a>
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
      <h1>Qualifying income: co to właściwie jest? <span class="muted">(To nie jest Twój zysk)</span></h1>

      <h2>Czym jest qualifying income?</h2>
      <p>Qualifying income to kwota, na podstawie której HMRC decyduje, czy obejmie Cię Making Tax Digital. To Twój <strong>przychód brutto z działalności i z wynajmu, przed odliczeniem jakichkolwiek kosztów.</strong></p>
      <p>I właśnie na tym większość ludzi się przejeżdża. To nie jest zysk. To nie jest to, co zostaje na koncie po materiałach, paliwie, narzędziach i całej reszcie. To wszystko, co wpłynęło.</p>
      <p>Jeśli w zeszłym roku miałeś £62,000 obrotu, a £20,000 poszło na koszty, Twoje qualifying income wynosi £62,000, nie £42,000.</p>

      <h2>Działalność i wynajem sumują się razem</h2>
      <p>To druga pułapka i łapie ludzi, którzy patrzą na każde źródło osobno i stwierdzają, że żadne nie dobija do progu.</p>
      <p>HMRC je dodaje. W <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">przykładzie z oficjalnej strony</a> £25,000 z wynajmu plus £27,000 z działalności daje razem qualifying income £52,000.</p>
      <p>Żadna z tych kwot osobno nie zbliża się do £50,000. Razem próg przekraczają. Jeśli w tygodniu jeździsz vanem, a przy okazji wynajmujesz mieszkanie, musisz dodać jedno do drugiego, zanim uznasz, że Cię to nie dotyczy.</p>

      <h2>Co się NIE liczy do qualifying income?</h2>
      <p>Sporo dochodów jest poza tym wyliczeniem. Wynagrodzenie z etatu (PAYE), emerytura, odsetki z oszczędności, dywidendy i zyski kapitałowe nie wchodzą do qualifying income.</p>
      <p>Czyli ktoś, kto zarabia £70,000 na etacie i dorabia £15,000 na własnej działalności, ma qualifying income £15,000. Pensja nie ma tu żadnego znaczenia, choć oczywiście nadal rozlicza się ją normalnie.</p>
      <p>Warto znać też kilka konkretnych wyłączeń, <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">które HMRC wymienia</a>: dochód z brytyjskich REIT-ów i funduszy PAIF się nie liczy, qualifying care relief się nie liczy, a averaging relief nie ma wpływu na wynik. To akurat dotyczy rolników i twórców.</p>
      <p>Jedna rzecz, która się liczy i ludzi zaskakuje: źródło dochodu, które <strong>przestało istnieć</strong> od czasu Twojego ostatniego zeznania, i tak wchodzi do qualifying income, o ile masz jeszcze jakieś inne, trwające źródło.</p>

      <h2>Jakie są progi?</h2>
      <p>Jeśli Twoje qualifying income za rok podatkowy 2024/25 przekroczyło £50,000, <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">powinieneś zacząć korzystać z MTD od 6 kwietnia 2026</a>, i nadal możesz się zarejestrować. W kolejnych latach progi schodzą niżej i obejmą znacznie więcej osób.</p>
      <p>Z drugiej strony: <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">jesteś automatycznie zwolniony</a> i nie musisz korzystać z MTD, jeśli Twoje qualifying income wynosi £20,000 lub mniej.</p>

      <h2>Skąd HMRC bierze tę kwotę?</h2>
      <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC wylicza Twoje qualifying income</a> na podstawie zeznania Self Assessment złożonego w poprzednim roku podatkowym. Jeśli kwota przekracza próg, urząd wysyła list z informacją, że od początku kolejnego roku podatkowego musisz korzystać z MTD.</p>
      <p>I teraz najważniejsze. Nawet jeśli <strong>nie dostaniesz listu</strong>, i tak musisz sam sprawdzić swoje qualifying income i zarejestrować się, jeśli próg przekraczasz.</p>
      <p><strong>Brak listu to nie brak obowiązku.</strong> Listy giną, adresy się dezaktualizują, a odpowiedzialność i tak zostaje po Twojej stronie.</p>

      <h2>Jak sprawdzić swoją sytuację?</h2>
      <p>HMRC udostępnia <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">narzędzie, które przeprowadza przez pytania</a> i podaje wynik na podstawie Twoich odpowiedzi.</p>
      <p>Jeśli Twoja sytuacja jest bardziej złożona, na przykład dochód z zagranicy, kilka działalności albo źródło, które zniknęło w trakcie roku, to pytanie do księgowego, a nie do strony internetowej. Łącznie z tą. My nie udzielamy porad podatkowych.</p>

      <h2>Jedna rzecz, którą warto zrobić już dziś</h2>
      <p>Niezależnie od tego, czy próg łapie Cię w tym roku, w kolejnych latach obejmie znacznie więcej osób.</p>
      <p>Nawyk, który pomaga w obu przypadkach, jest nudny i prosty: zapisuj przychody i wydatki cyfrowo, na bieżąco, zamiast trzymać je w reklamówce. Jeśli okaże się, że jesteś w systemie, jesteś gotowy. Jeśli nie, i tak masz za sobą spokojniejszy rok i krótszą rozmowę z księgowym.</p>
      <p>I dokładnie do tego powstało <a href="/pl">TidGo</a>: paragony i dowody przychodu zbierane na bieżąco, w ośmiu językach, gotowe do przekazania. TidGo niczego nie wysyła do HMRC i nie jest poradą podatkową. Sprawia tylko, że rekordy istnieją, kiedy ktoś o nie zapyta.</p>

      <section class="article-sources">
        <strong>Źródła</strong>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income for Making Tax Digital for Income Tax — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if you can get an exemption from Making Tax Digital for Income Tax — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax — GOV.UK</a>
        <span>Sprawdzone: sierpień 2026. Wytyczne HMRC się zmieniają, więc jeśli czytasz to później, zweryfikuj kwoty pod powyższymi linkami.</span>
      </section>
      ${pageCta()}
    </article>
  `;
}

function mtdQualifyingIncomeArticleRO() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Qualifying income — ce &#238;nseamnă de fapt? (Nu este profitul tău)</h1>
      <h2>Ce este qualifying income?</h2>
      <p>Qualifying income este suma pe baza căreia HMRC decide dacă Making Tax Digital ți se aplică. Este <strong>venitul tău brut din activitate independentă și din chirii — &#238;nainte să scazi orice cheltuială.</strong></p>
      <p>Exact aici se &#238;ncurcă majoritatea oamenilor. Nu este profitul. Nu este ce răm&#226;ne &#238;n cont după materiale, combustibil, scule și tot restul. Este tot ce a intrat.</p>
      <p>Dacă anul trecut ai avut &#163;62.000 rulaj, iar &#163;20.000 s-au dus pe cheltuieli, qualifying income este &#163;62.000 — nu &#163;42.000.</p>
      <h2>Activitatea independentă și chiriile se adună</h2>
      <p>Aceasta este a doua capcană și &#238;i prinde pe cei care se uită la fiecare sursă separat și trag concluzia că niciuna nu atinge pragul.</p>
      <p>HMRC le adună. &#206;n <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">exemplul de pe pagina oficială</a>, &#163;25.000 din chirii plus &#163;27.000 din activitate independentă &#238;nseamnă un qualifying income total de &#163;52.000.</p>
      <p>Nicio sumă luată separat nu se apropie de &#163;50.000. &#206;mpreună trec pragul. Dacă &#238;n timpul săptăm&#226;nii conduci o furgonetă și &#238;n plus mai &#238;nchiriezi un apartament, trebuie să le aduni &#238;nainte să decizi că nu te privește.</p>
      <h2>Ce NU intră &#238;n qualifying income?</h2>
      <p>Multe venituri răm&#226;n &#238;n afara acestui calcul. Venitul din angajare (PAYE), pensia, dob&#226;nzile din economii, dividendele și c&#226;știgurile de capital nu intră &#238;n qualifying income.</p>
      <p>Așadar, cineva care c&#226;știgă &#163;70.000 dintr-un job și mai are &#163;15.000 din activitate pe cont propriu are qualifying income de &#163;15.000. Salariul nu contează pentru acest test — deși, evident, se declară &#238;n mod normal.</p>
      <p>Merită știute și c&#226;teva excluderi punctuale, <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">pe care HMRC le enumeră</a>: venitul din REIT-uri britanice și din fonduri PAIF nu se ia &#238;n calcul, qualifying care relief nu se ia &#238;n calcul, iar averaging relief nu &#238;l influențează (asta &#238;i privește pe fermieri și pe artiști).</p>
      <p>Un lucru care se ia &#238;n calcul și &#238;i surprinde pe oameni: o sursă de venit care <strong>a &#238;ncetat</strong> de la ultima ta declarație intră totuși &#238;n qualifying income — at&#226;ta timp c&#226;t mai ai o altă sursă activă.</p>
      <h2>Care sunt pragurile?</h2>
      <p>Dacă qualifying income pentru anul fiscal 2024/25 a depășit &#163;50.000, <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">ar fi trebuit să &#238;ncepi să folosești MTD de la 6 aprilie 2026</a> — și &#238;ncă te poți &#238;nscrie. &#206;n anii următori pragurile coboară și vor cuprinde mult mai mulți oameni.</p>
      <p>La celălalt capăt: <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">ești scutit automat</a> și nu trebuie să folosești MTD dacă qualifying income este &#163;20.000 sau mai puțin.</p>
      <h2>De unde ia HMRC această sumă?</h2>
      <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC calculează qualifying income</a> pe baza declarației Self Assessment depuse &#238;n anul fiscal anterior. Dacă suma depășește pragul, &#238;ți trimite o scrisoare prin care confirmă că trebuie să folosești MTD de la &#238;nceputul anului fiscal următor.</p>
      <p>Și acum partea importantă. Chiar dacă <strong>nu primești nicio scrisoare</strong>, tot trebuie să &#238;ți verifici singur qualifying income și să te &#238;nscrii dacă depășești pragul.</p>
      <p><strong>Lipsa scrisorii nu &#238;nseamnă lipsa obligației.</strong> Scrisorile se pierd, adresele răm&#226;n neactualizate, iar răspunderea răm&#226;ne oricum la tine.</p>
      <h2>Cum &#238;mi verific situația?</h2>
      <p>HMRC pune la dispoziție <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">un instrument care te trece prin &#238;ntrebări</a> și &#238;ți dă rezultatul pe baza răspunsurilor tale.</p>
      <p>Dacă situația ta este mai complicată — venituri din străinătate, mai multe activități, o sursă care a dispărut &#238;n cursul anului — asta este o &#238;ntrebare pentru contabilul tău, nu pentru un site. Inclusiv pentru acesta. Noi nu oferim consultanță fiscală.</p>
      <h2>Un singur lucru pe care merită să &#238;l faci azi</h2>
      <p>Indiferent dacă pragul te prinde anul acesta, &#238;n anii următori va cuprinde mult mai multă lume.</p>
      <p>Obiceiul care ajută &#238;n ambele cazuri este banal și simplu: notează-ți veniturile și cheltuielile digital, pe măsură ce apar, &#238;n loc să le ții &#238;ntr-o pungă. Dacă se dovedește că intri &#238;n sistem — ești pregătit. Dacă nu — tot ai &#238;n urmă un an mai ordonat și o discuție mai scurtă cu contabilul.</p>
      <p>Exact pentru asta a fost făcut <a href="/ro" target="_blank" rel="noopener">TidGo</a> — bonuri și dovezi de venit str&#226;nse pe parcurs, &#238;n opt limbi, gata de predat. TidGo nu trimite nimic la HMRC și nu este consultanță fiscală. Face doar ca &#238;nregistrările să existe atunci c&#226;nd cineva le cere.</p>
      <section class="article-sources">
        <strong>Surse</strong>
      <p>Toate cifrele de pe această pagină provin din ghidurile oficiale HMRC. Verifică-le singur:</p>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income for Making Tax Digital for Income Tax</a> — GOV.UK
        <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> — GOV.UK
        <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if you can get an exemption from Making Tax Digital for Income Tax</a> — GOV.UK
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> — GOV.UK
      <p><em>Verificat: august 2026. Ghidurile HMRC se schimbă — dacă citești asta mult mai t&#226;rziu, verifică sumele la linkurile de mai sus.</em></p>
      </section>
      ${pageCta()}
    </article>
  `;
}

function mtdQualifyingIncomeArticleLT() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Qualifying income — kas tai iš tikrųjų yra? (Tai ne tavo pelnas)</h1>
      <h2>Kas yra qualifying income?</h2>
      <p>Qualifying income — tai suma, pagal kurią HMRC sprendžia, ar tau taikomas Making Tax Digital. Tai tavo <strong>bendrosios pajamos iš savarankiškos veiklos ir iš nuomos — prieš atimant bet kokias išlaidas.</strong></p>
      <p>Būtent čia daugumai žmonių ir nutinka klaida. Tai ne pelnas. Tai ne tai, kas lieka sąskaitoje po medžiagų, kuro, įrankių ir viso kito. Tai viskas, kas įplaukė.</p>
      <p>Jei pernai apyvarta buvo &#163;62 000, o &#163;20 000 nuėjo išlaidoms, tavo qualifying income yra &#163;62 000 — ne &#163;42 000.</p>
      <h2>Veiklos ir nuomos pajamos sudedamos kartu</h2>
      <p>Tai antroji spąstų vieta, ir ji pagauna tuos, kurie žiūri į kiekvieną šaltinį atskirai ir nusprendžia, kad nė vienas nesiekia ribos.</p>
      <p>HMRC juos sudeda. <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Oficialiame pavyzdyje</a> &#163;25 000 iš nuomos plius &#163;27 000 iš savarankiškos veiklos duoda bendrą qualifying income &#163;52 000.</p>
      <p>Nė viena suma atskirai net nesiartina prie &#163;50 000. Kartu ribą peržengia. Jei savaitės dienomis vairuoji furgoną, o be to dar nuomoji butą, prieš nuspręsdamas, kad tavęs tai neliečia, turi juos sudėti.</p>
      <h2>Kas NEĮEINA į qualifying income?</h2>
      <p>Nemažai pajamų lieka už šio skaičiavimo ribų. Pajamos iš darbo santykių (PAYE), pensija, palūkanos už santaupas, dividendai ir kapitalo prieaugis į qualifying income neįeina.</p>
      <p>Taigi žmogus, uždirbantis &#163;70 000 darbe ir dar &#163;15 000 iš savarankiškos veiklos, turi qualifying income &#163;15 000. Alga šiam vertinimui neturi reikšmės — nors, žinoma, ji vis tiek deklaruojama įprasta tvarka.</p>
      <p>Verta žinoti ir kelias konkrečias išimtis, <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">kurias HMRC išvardija</a>: pajamos iš britų REIT ir PAIF fondų neskaičiuojamos, qualifying care relief neskaičiuojamas, o averaging relief rezultato nekeičia (tai aktualu ūkininkams ir kūrėjams).</p>
      <p>Vienas dalykas, kuris skaičiuojamas ir žmones nustebina: pajamų šaltinis, kuris <strong>nutrūko</strong> po paskutinės tavo deklaracijos, vis tiek įtraukiamas į qualifying income — jei turi kitą, tebeveikiantį šaltinį.</p>
      <h2>Kokios yra ribos?</h2>
      <p>Jei tavo qualifying income 2024/25 mokestiniais metais viršijo &#163;50 000, <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">MTD turėjai pradėti naudoti nuo 2026 m. balandžio 6 d.</a> — ir vis dar gali užsiregistruoti. Vėlesniais metais ribos leidžiasi žemyn ir apims kur kas daugiau žmonių.</p>
      <p>Kitame gale: <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">esi automatiškai atleistas</a> ir MTD naudoti neprivalai, jei tavo qualifying income yra &#163;20 000 arba mažiau.</p>
      <h2>Iš kur HMRC ima šią sumą?</h2>
      <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC apskaičiuoja tavo qualifying income</a> pagal Self Assessment deklaraciją, pateiktą praėjusiais mokestiniais metais. Jei suma viršija ribą, HMRC atsiunčia laišką, patvirtinantį, kad nuo kitų mokestinių metų pradžios turi naudoti MTD.</p>
      <p>Ir dabar svarbiausia. Net jei <strong>laiško negausi</strong>, vis tiek privalai pats pasitikrinti savo qualifying income ir užsiregistruoti, jei ribą viršiji.</p>
      <p><strong>Laiško nebuvimas nereiškia prievolės nebuvimo.</strong> Laiškai pasimeta, adresai pasensta, o atsakomybė vis tiek lieka tau.</p>
      <h2>Kaip pasitikrinti savo situaciją?</h2>
      <p>HMRC siūlo <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">įrankį, kuris perveda per klausimus</a> ir pateikia rezultatą pagal tavo atsakymus.</p>
      <p>Jei tavo situacija sudėtingesnė — pajamos iš užsienio, kelios veiklos, šaltinis, kuris dingo metų viduryje — tai klausimas buhalteriui, o ne interneto svetainei. Įskaitant šią. Mes mokesčių konsultacijų neteikiame.</p>
      <h2>Vienas dalykas, kurį verta padaryti šiandien</h2>
      <p>Nesvarbu, ar riba tave pagauna šiais metais — ateinančiais metais ji apims kur kas daugiau žmonių.</p>
      <p>Įprotis, kuris padeda abiem atvejais, yra nuobodus ir paprastas: fiksuok pajamas ir išlaidas skaitmeniniu būdu iš karto, o ne laikyk jas maišelyje. Jei paaiškės, kad esi sistemoje — esi pasiruošęs. Jei ne — vis tiek už nugaros turėsi tvarkingesnius metus ir trumpesnį pokalbį su buhalteriu.</p>
      <p>Būtent tam ir sukurta <a href="/lt" target="_blank" rel="noopener">TidGo</a> — kvitai ir pajamų įrodymai renkami eigoje, aštuoniomis kalbomis, paruošti perduoti. TidGo nieko nesiunčia į HMRC ir nėra mokesčių konsultacija. Ji tik pasirūpina, kad įrašai egzistuotų tada, kai kas nors jų paprašo.</p>
      <section class="article-sources">
        <strong>Šaltiniai</strong>
      <p>Visi šiame puslapyje pateikti skaičiai paimti iš oficialių HMRC gairių. Pasitikrink pats:</p>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income for Making Tax Digital for Income Tax</a> — GOV.UK
        <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> — GOV.UK
        <a href="https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if you can get an exemption from Making Tax Digital for Income Tax</a> — GOV.UK
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> — GOV.UK
      <p><em>Patikrinta: 2026 m. rugpjūtis. HMRC gairės keičiasi — jei skaitai tai gerokai vėliau, sumas pasitikrink pagal nuorodas aukščiau.</em></p>
      </section>
      ${pageCta()}
    </article>
  `;
}

const MTD_QUARTERLY_UPDATES_ARTICLES = {
  "en": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n<h1>MTD quarterly updates — what they are, when to send them, and what happens if you miss one</h1>\n<h2>What a quarterly update actually is</h2>\n<p>A quarterly update is a summary of your income and expenses for a period of the tax year, sent to HMRC through MTD-compatible software.</p>\n<p>It is not a tax return. It is not a payment. It is not a full accounting of everything you owe. It is a running total — HMRC uses it to build a picture of your likely tax position as the year progresses, not to calculate a final bill.</p>\n<p>Think of it like a progress report. You are telling HMRC where things stand at the end of each quarter. The actual tax calculation happens at the end of the year, in your final declaration.</p>\n<h2>How many updates and when</h2>\n<p>Four per tax year. The deadlines for the standard tax year quarters are:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Quarter</th>\n<th>Period covered</th>\n<th>Deadline</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Q1</td>\n<td>6 April – 5 July</td>\n<td>7 August</td>\n</tr>\n<tr>\n<td>Q2</td>\n<td>6 April – 5 October</td>\n<td>7 November</td>\n</tr>\n<tr>\n<td>Q3</td>\n<td>6 April – 5 January</td>\n<td>7 February</td>\n</tr>\n<tr>\n<td>Q4</td>\n<td>6 April – 5 April</td>\n<td>7 May</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>There is also a calendar quarter option — if you prefer to report January to March, April to June and so on instead of the tax year quarters — but you must elect for this, and not all software supports it. Check with your accountant before choosing.</p>\n<h2>The cumulative rule — and why it matters if you miss a deadline</h2>\n<p>This is the part most people do not know, and it changes how you should think about missed deadlines.</p>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Quarterly updates are cumulative</a>. Each update covers the period from the start of the tax year to the end of that quarter — not just the three months of that quarter.</p>\n<p>So Q1 covers 6 April to 5 July. Q2 covers 6 April to 5 October — it includes Q1's figures. Q3 covers 6 April to 5 January. Q4 covers the full year.</p>\n<p><strong>What this means if you miss Q1:</strong> your Q2 update will automatically include the figures from the Q1 period. You do not file Q1 separately. You catch up in Q2, and the total is complete.</p>\n<p>You should still send Q1 as soon as your records are ready — but the cumulative structure means a missed quarter does not create a gap in your annual figures. It creates a late submission, which in 2026/27 carries no penalty.</p>\n<h2>What goes into a quarterly update</h2>\n<p>The totals from your digital records for the period:</p>\n<ul>\n<li>Total income from each self-employment source</li>\n<li>Total expenses from each self-employment source</li>\n<li>Total income from property (if applicable)</li>\n<li>Total property expenses (if applicable)</li>\n</ul>\n<p>You do not enter individual receipts or transactions. You enter the totals. Your software reads the totals from your digital records and sends them. This is why keeping good records through the quarter matters — the update is only as accurate as the records behind it.</p>\n<p><strong>CIS subcontractors:</strong> you enter gross income — the full amount before the CIS deduction. <a href=\"/mtd/cis\">You do not enter the CIS deduction in your quarterly update</a>. HMRC already has that from your contractor's monthly returns and includes it automatically in the tax calculation.</p>\n<h2>What happens after you send a quarterly update</h2>\n<p>Your software triggers a tax calculation and shows you an indication of where your tax position stands for the year so far. This is not a bill — it is an estimate, based on the information submitted to date. The final bill comes with the final declaration.</p>\n<p>If you disagree with the CIS deduction figure HMRC is showing, query it with your contractor first. At the year end, you can correct it before submitting your final declaration.</p>\n<h2>What happens if you miss a deadline</h2>\n<p><strong>In 2026/27 — the transition year:</strong> <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC has confirmed a soft landing</a>. No penalty points are issued for late quarterly updates during this first year, regardless of how many you miss.</p>\n<p>You still need to send all four quarterly updates before you can submit your final declaration. Missing a deadline does not remove the obligation — it just means no penalty for being late in this first year.</p>\n<p><strong>From 2027/28 onwards:</strong> the points-based penalty system applies in full.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Points accumulated</th>\n<th>Consequence</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>1–3 points</td>\n<td>Points recorded, no financial penalty yet</td>\n</tr>\n<tr>\n<td>4 points</td>\n<td>Fixed £200 penalty</td>\n</tr>\n<tr>\n<td>5+ points</td>\n<td>Additional £200 per further late submission</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Points are reset to zero once you have submitted all outstanding updates and filed on time for a further period. <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Full details of the penalty system are on GOV.UK</a>.</p>\n<p><strong>Late payment of tax</strong> is penalised separately, under existing rules, even in 2026/27. The soft landing covers late submissions, not late payments.</p>\n<p><strong>The final declaration</strong> is also penalised under existing rules if submitted after 31 January. The soft landing does not cover this.</p>\n<h2>What you cannot do: copy-paste between systems</h2>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Once a digital record has been included in a quarterly update</a>, you cannot manually transfer it to another system — not by retyping, not by copy-paste. If you use more than one piece of software, they must be digitally linked. This is the \"digital link\" requirement.</p>\n<h2>The quarterly update is not the hard part</h2>\n<p>Most people worry about the quarterly deadline. The harder part is keeping records clean through the quarter, so that when the deadline arrives, the figures are ready.</p>\n<p>A quarterly update submitted from tidy records takes minutes. A quarterly update submitted from a bag of unfiled receipts and unrecorded income takes most of a weekend.</p>\n<h2>Where TidGo fits</h2>\n<p><a href=\"/\">TidGo</a> collects receipts, income proof and CIS payslips as they happen — through WhatsApp, email or the app — so that by the end of each quarter the records behind your quarterly update are already there. TidGo doesn't submit quarterly updates to HMRC. That goes through your MTD software or accountant. It just means the records are ready when the deadline arrives.</p>\n<p>For the specific situation after the 7 August 2026 deadline, see <a href=\"/mtd/missed-7-august-deadline\">the missed deadline guide</a>.</p>\n<div class=\"article-sources\">\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — send quarterly updates</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — create digital records</a> — GOV.UK</li>\n</ul>\n<p><em>Last checked: August 2026. Verify at GOV.UK if reading later.</em></p>\n</div>\n  ${pageCta()}\n</article>",
  "pl": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n<h1>Kwartalne raporty MTD — czym są, kiedy je wysyłać i co się stanie, jeśli przegapisz termin</h1>\n<h2>Czym właściwie jest kwartalny raport</h2>\n<p>Kwartalny raport to podsumowanie Twoich przychodów i wydatków za dany okres roku podatkowego, wysłane do HMRC przez oprogramowanie kompatybilne z MTD.</p>\n<p>To nie jest zeznanie podatkowe. To nie jest płatność. To nie jest pełne rozliczenie wszystkiego, co jesteś winien. To bieżąca suma — HMRC używa jej do budowania obrazu Twojej prawdopodobnej pozycji podatkowej w trakcie roku, a nie do obliczenia końcowego rachunku.</p>\n<p>Pomyśl o tym jak o raporcie postępu. Mówisz HMRC, jak wyglądają sprawy na koniec każdego kwartału. Właściwe obliczenie podatku następuje na koniec roku, w final declaration.</p>\n<h2>Ile raportów i kiedy</h2>\n<p>Cztery razy w roku podatkowym. Terminy dla standardowych kwartałów roku podatkowego:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Kwartał</th>\n<th>Objęty okres</th>\n<th>Termin</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>Q1</td>\n<td>6 kwietnia – 5 lipca</td>\n<td>7 sierpnia</td>\n</tr>\n<tr>\n<td>Q2</td>\n<td>6 kwietnia – 5 października</td>\n<td>7 listopada</td>\n</tr>\n<tr>\n<td>Q3</td>\n<td>6 kwietnia – 5 stycznia</td>\n<td>7 lutego</td>\n</tr>\n<tr>\n<td>Q4</td>\n<td>6 kwietnia – 5 kwietnia</td>\n<td>7 maja</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Istnieje też opcja kwartałów kalendarzowych — jeśli wolisz raportować styczeń–marzec, kwiecień–czerwiec itd. zamiast kwartałów roku podatkowego — ale musisz to wybrać, a nie wszystkie oprogramowania to obsługują. Sprawdź z księgowym przed wyborem.</p>\n<h2>Zasada kumulatywności — i dlaczego ma znaczenie przy przeoczonym terminie</h2>\n<p>To jest część, o której większość ludzi nie wie, a która zmienia sposób myślenia o przeoczonych terminach.</p>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Kwartalne raporty są kumulatywne</a>. Każdy raport obejmuje okres od początku roku podatkowego do końca danego kwartału — nie tylko te trzy miesiące.</p>\n<p>Q1 obejmuje 6 kwietnia – 5 lipca. Q2 obejmuje 6 kwietnia – 5 października — zawiera cyfry z Q1. Q3 obejmuje 6 kwietnia – 5 stycznia. Q4 obejmuje pełny rok.</p>\n<p><strong>Co to znaczy, jeśli przegapisz Q1:</strong> Twój raport Q2 automatycznie będzie zawierał cyfry z okresu Q1. Nie składasz Q1 osobno. Nadrabiasz przy Q2, a łączna suma jest kompletna.</p>\n<p>I tak powinieneś wysłać Q1 jak najszybciej — ale kumulatywna struktura oznacza, że przeoczony kwartał nie tworzy luki w rocznych cyfrach. Tworzy spóźnione złożenie, które w 2026/27 nie wiąże się z żadną karą.</p>\n<h2>Co wchodzi do kwartalnego raportu</h2>\n<p>Sumy z Twoich cyfrowych rekordów za dany okres:</p>\n<ul>\n<li>Łączny przychód z każdego źródła działalności</li>\n<li>Łączne wydatki z każdego źródła działalności</li>\n<li>Łączny przychód z wynajmu (jeśli dotyczy)</li>\n<li>Łączne wydatki na wynajem (jeśli dotyczy)</li>\n</ul>\n<p>Nie wpisujesz pojedynczych paragonów ani transakcji. Wpisujesz sumy. Twoje oprogramowanie czyta sumy z Twoich cyfrowych rekordów i wysyła je. Dlatego prowadzenie dobrej ewidencji przez cały kwartał ma znaczenie — raport jest tylko tak dokładny, jak rekordy za nim stojące.</p>\n<p><strong>Podwykonawcy CIS:</strong> wpisujesz przychód brutto — pełną kwotę przed potrąceniem CIS. <a href=\"/pl/mtd/cis\">Potrącenia CIS nie wpisujesz w kwartalnym raporcie</a>. HMRC ma je już od miesięcznych raportów Twojego contractora i uwzględnia je automatycznie w obliczeniu podatkowym.</p>\n<h2>Co się dzieje po wysłaniu kwartalnego raportu</h2>\n<p>Twoje oprogramowanie uruchamia obliczenie podatkowe i pokazuje Ci orientacyjną pozycję podatkową za rok do tej pory. To nie jest rachunek — to szacunek, oparty na dotychczas złożonych informacjach. Końcowy rachunek przychodzi z final declaration.</p>\n<h2>Co się dzieje, jeśli przegapisz termin</h2>\n<p><strong>W 2026/27 — rok przejściowy:</strong> <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC potwierdziło soft landing</a>. Za spóźnione kwartalne raporty w tym pierwszym roku nie są przyznawane żadne punkty karne, niezależnie od tego, ile ich przegapisz.</p>\n<p>Nadal musisz wysłać wszystkie cztery kwartalne raporty, zanim złożysz final declaration. Przeoczenie terminu nie usuwa obowiązku — oznacza tylko brak kary za spóźnienie w tym pierwszym roku.</p>\n<p><strong>Od 2027/28:</strong> system punktowy obowiązuje w pełni.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Zebrane punkty</th>\n<th>Konsekwencja</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>1–3 punkty</td>\n<td>Punkty zapisane, na razie bez kary finansowej</td>\n</tr>\n<tr>\n<td>4 punkty</td>\n<td>Stała kara £200</td>\n</tr>\n<tr>\n<td>5+ punktów</td>\n<td>Kolejne £200 za każde następne spóźnienie</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Punkty są zerowane po złożeniu wszystkich zaległych raportów i terminowym składaniu przez kolejny okres.</p>\n<p><strong>Spóźniona płatność podatku</strong> jest karana osobno, według dotychczasowych zasad, nawet w 2026/27. Soft landing obejmuje spóźnione złożenia, nie spóźnione płatności.</p>\n<p><strong>Final declaration</strong> też jest karana według dotychczasowych zasad, jeśli złożona po 31 stycznia. Soft landing tego nie obejmuje.</p>\n<h2>Kwartalny raport to nie jest ta trudna część</h2>\n<p>Większość ludzi martwi się terminem kwartalnym. Trudniejsza część to prowadzenie czystej ewidencji przez kwartał, żeby kiedy przyjdzie termin, cyfry były gotowe.</p>\n<p>Kwartalny raport złożony z uporządkowanych rekordów zajmuje kilka minut. Kwartalny raport złożony z worka nieskatalogowanych paragonów i niezapisanych przychodów zajmuje większość weekendu.</p>\n<h2>Gdzie w tym wszystkim TidGo</h2>\n<p><a href=\"/pl\">TidGo</a> zbiera paragony, dowody przychodu i payslipy CIS na bieżąco — przez WhatsApp, mail albo w aplikacji — żeby pod koniec każdego kwartału rekordy stojące za kwartalnym raportem już tam były. TidGo nie wysyła kwartalnych raportów do HMRC. To robi Twoje oprogramowanie MTD albo księgowy. Sprawia tylko, że rekordy są gotowe, gdy przyjdzie termin.</p>\n<p>Jeśli chodzi konkretnie o sytuację po terminie 7 sierpnia 2026, zobacz <a href=\"/pl/mtd/missed-7-august-deadline\">przewodnik o spóźnionym terminie</a>.</p>\n<div class=\"article-sources\">\n<h2>Źródła</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — send quarterly updates</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — create digital records</a> — GOV.UK</li>\n</ul>\n<p><em>Sprawdzone: sierpień 2026. Zweryfikuj na GOV.UK, jeśli czytasz to później.</em></p>\n</div>\n  ${pageCta()}\n</article>",
  "ro": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n<h1>Actualizări trimestriale MTD — ce sunt, când le trimiți și ce se întâmplă dacă ratezi termenul</h1>\n<h2>Ce este de fapt o actualizare trimestrială</h2>\n<p>O actualizare trimestrială este un rezumat al veniturilor și cheltuielilor tale pentru o perioadă a anului fiscal, trimis la HMRC prin software compatibil cu MTD.</p>\n<p>Nu este o declarație fiscală. Nu este o plată. Este un total curent — HMRC îl folosește pentru a construi o imagine a poziției tale fiscale probabile pe parcursul anului, nu pentru a calcula factura finală.</p>\n<p>Gândește-te la ea ca la un raport de progres. Îi spui HMRC unde stau lucrurile la sfârșitul fiecărui trimestru. Calculul fiscal real are loc la sfârșitul anului, în final declaration.</p>\n<h2>Câte actualizări și când</h2>\n<p>Patru pe an fiscal. Termenele pentru trimestrele standard ale anului fiscal:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Trimestru</th>\n<th>Perioadă acoperită</th>\n<th>Termen</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>T1</td>\n<td>6 aprilie – 5 iulie</td>\n<td>7 august</td>\n</tr>\n<tr>\n<td>T2</td>\n<td>6 aprilie – 5 octombrie</td>\n<td>7 noiembrie</td>\n</tr>\n<tr>\n<td>T3</td>\n<td>6 aprilie – 5 ianuarie</td>\n<td>7 februarie</td>\n</tr>\n<tr>\n<td>T4</td>\n<td>6 aprilie – 5 aprilie</td>\n<td>7 mai</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h2>Regula cumulativă — și de ce contează dacă ratezi un termen</h2>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Actualizările trimestriale sunt cumulative</a>. Fiecare actualizare acoperă perioada de la începutul anului fiscal până la sfârșitul acelui trimestru — nu doar cele trei luni ale acelui trimestru.</p>\n<p><strong>Ce înseamnă dacă ratezi T1:</strong> actualizarea T2 va include automat cifrele din perioada T1. Nu depui T1 separat. Recuperezi la T2, iar totalul este complet.</p>\n<h2>Ce intră într-o actualizare trimestrială</h2>\n<p>Totalurile din evidențele tale digitale pentru perioadă: total venituri din fiecare sursă de activitate, total cheltuieli, total venituri din proprietăți dacă este cazul.</p>\n<p>Nu introduci chitanțe sau tranzacții individuale. Introduci totalurile.</p>\n<p><strong>Subcontractorii CIS</strong> introduc venitul brut — suma completă înainte de deducerea CIS. <a href=\"/ro/mtd/cis\">Nu introduci deducerea CIS în actualizarea trimestrială</a>.</p>\n<h2>Ce se întâmplă dacă ratezi un termen</h2>\n<p><strong>În 2026/27 — anul de tranziție:</strong> <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC a confirmat un soft landing</a>. Nu se acordă puncte de penalizare pentru actualizări trimestriale întârziate în acest prim an.</p>\n<p>Trebuie totuși să trimiți toate cele patru actualizări trimestriale înainte de a putea depune final declaration.</p>\n<p><strong>Din 2027/28:</strong> sistemul de puncte se aplică complet. 4 puncte = amendă £200, fiecare întârziere ulterioară = încă £200.</p>\n<p>Plata întârziată a impozitului și final declaration întârziată sunt penalizate conform regulilor existente, chiar și în 2026/27.</p>\n<h2>Actualizarea trimestrială nu este partea dificilă</h2>\n<p>Actualizarea trimestrială depusă din evidențe ordonate durează minute. Din evidențe neordonate durează un weekend întreg.</p>\n<h2>Unde se încadrează TidGo</h2>\n<p><a href=\"/ro\">TidGo</a> colectează bonuri, dovezi de venit și payslipuri CIS pe măsură ce apar — prin WhatsApp, email sau în aplicație — ca la sfârșitul fiecărui trimestru evidențele să fie deja acolo. TidGo nu trimite actualizări trimestriale la HMRC. Asta o face software-ul tău MTD sau contabilul.</p>\n<p>Pentru situația specifică de după termenul de 7 august 2026, vezi <a href=\"/ro/mtd/missed-7-august-deadline\">ghidul despre termenul ratat</a>.</p>\n<div class=\"article-sources\">\n<h2>Surse</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — send quarterly updates</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>\n</ul>\n<p><em>Verificat: august 2026. Verifică pe GOV.UK dacă citești mai târziu.</em></p>\n</div>\n  ${pageCta()}\n</article>",
  "lt": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n<h1>MTD ketvirtinės ataskaitos — kas jos yra, kada siųsti ir kas nutinka praleidus terminą</h1>\n<h2>Kas iš tikrųjų yra ketvirtinė ataskaita</h2>\n<p>Ketvirtinė ataskaita yra tavo pajamų ir išlaidų už mokestinių metų laikotarpį suvestinė, siunčiama į HMRC per su MTD suderintą programinę įrangą.</p>\n<p>Tai nėra mokesčių deklaracija. Tai nėra mokėjimas. Tai einamasis sumai — HMRC jį naudoja, kad susidaro vaizdą apie tavo tikėtiną mokestinę poziciją metų eigoje, o ne galutinei sąskaitai apskaičiuoti.</p>\n<p>Galvok apie tai kaip apie pažangos ataskaitą. Kiekvieno ketvirčio pabaigoje pranešai HMRC, kaip viskas atrodo. Tikrasis mokesčių skaičiavimas vyksta metų pabaigoje, final declaration metu.</p>\n<h2>Kiek ataskaitų ir kada</h2>\n<p>Keturios per mokestinius metus. Standartinių mokestinių metų ketvirčių terminai:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n<thead><tr>\n<th>Ketvirtis</th>\n<th>Apimamas laikotarpis</th>\n<th>Terminas</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>K1</td>\n<td>Balandžio 6 – liepos 5</td>\n<td>Rugpjūčio 7</td>\n</tr>\n<tr>\n<td>K2</td>\n<td>Balandžio 6 – spalio 5</td>\n<td>Lapkričio 7</td>\n</tr>\n<tr>\n<td>K3</td>\n<td>Balandžio 6 – sausio 5</td>\n<td>Vasario 7</td>\n</tr>\n<tr>\n<td>K4</td>\n<td>Balandžio 6 – balandžio 5</td>\n<td>Gegužės 7</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h2>Kumuliacinis taisyklė — ir kodėl ji svarbi praleidus terminą</h2>\n<p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Ketvirtinės ataskaitos yra kumuliacinės</a>. Kiekviena ataskaita apima laikotarpį nuo mokestinių metų pradžios iki to ketvirčio pabaigos — ne tik tuos tris mėnesius.</p>\n<p><strong>Ką tai reiškia, jei praleidi K1:</strong> tavo K2 ataskaita automatiškai apims K1 laikotarpio skaičius. K1 neteiki atskirai. Pasiveji K2 metu, o bendra suma bus pilna.</p>\n<h2>Kas įeina į ketvirtinę ataskaitą</h2>\n<p>Bendrieji sumai iš tavo skaitmeninių įrašų už laikotarpį: bendrosios pajamos iš kiekvieno veiklos šaltinio, bendros išlaidos, bendros nuomos pajamos jei taikoma.</p>\n<p>Neįvedi atskirų kvitų ar operacijų. Įvedi bendrus sumus.</p>\n<p><strong>CIS subkontraktoriai</strong> įveda bendrąsias pajamas — visą sumą prieš CIS atskaitymą. <a href=\"/lt/mtd/cis\">CIS atskaitymo neįvedi ketvirtinėje ataskaitoje</a>.</p>\n<h2>Kas nutinka praleidus terminą</h2>\n<p><strong>2026/27 metais — pereinamasis laikotarpis:</strong> <a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">HMRC patvirtino soft landing</a>. Pirmaisiais metais baudos taškai už pavėluotas ketvirtines ataskaitas neskaičiuojami.</p>\n<p>Vis tiek privalai išsiųsti visas keturias ketvirtines ataskaitas prieš galėdamas pateikti final declaration.</p>\n<p><strong>Nuo 2027/28:</strong> taškų sistema galioja visa apimtimi. 4 taškai = £200 bauda, kiekvienas kitas pavėlavimas = dar £200.</p>\n<p>Pavėluotas mokesčių mokėjimas ir pavėluota final declaration baudžiami pagal esamas taisykles net 2026/27 metais.</p>\n<h2>Ketvirtinė ataskaita nėra sunkioji dalis</h2>\n<p>Ketvirtinė ataskaita, pateikta iš tvarkingų įrašų, užtrunka minutes. Iš netvarkingų įrašų — savaitgalį.</p>\n<h2>Kur čia TidGo</h2>\n<p><a href=\"/lt\">TidGo</a> renka kvitus, pajamų įrodymus ir CIS payslipus iš karto — per WhatsApp, el. paštą arba programėlėje — kad kiekvieno ketvirčio pabaigoje įrašai jau būtų ten. TidGo nesiunčia ketvirtinių ataskaitų į HMRC. Tai daro tavo MTD programinė įranga arba buhalteris.</p>\n<p>Dėl konkretios situacijos po 2026 m. rugpjūčio 7 d. termino žr. <a href=\"/lt/mtd/missed-7-august-deadline\">praleisto termino vadovą</a>.</p>\n<div class=\"article-sources\">\n<h2>Šaltiniai</h2>\n<ul>\n<li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — send quarterly updates</a> — GOV.UK</li>\n<li><a href=\"https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>\n</ul>\n<p><em>Patikrinta: 2026 m. rugpjūtis. Jei skaitai vėliau, pasitikrink GOV.UK.</em></p>\n</div>\n  ${pageCta()}\n</article>"
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
    pl: `Pełne wyjaśnienie, jak działają raporty kwartalne, co do nich trafia i jakie są terminy, znajdziesz w <a href="${href}">przewodniku po raportach kwartalnych</a>.`,
    ro: `Pentru explicația completă despre cum funcționează actualizările trimestriale, ce intră în ele și care este calendarul termenelor, vezi <a href="${href}">ghidul despre actualizările trimestriale</a>.`,
    lt: `Išsamų paaiškinimą, kaip veikia ketvirtinės ataskaitos, kas į jas įtraukiama ir kokie yra terminai, rasi <a href="${href}">ketvirtinių ataskaitų vadove</a>.`
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
<p>During the 2026/27 tax year, no penalty points will be issued for late quarterly updates. This means that even if you miss one — or all four — of your quarterly deadlines in this first year, you won't receive penalty points.</p>
<p>Miss one, miss two, miss all four — you enter 2027/28 with a clean slate.</p>
<p>This applies to the April 2026 cohort only — sole traders and landlords with qualifying income above £50,000. It applies only to the 2026-27 tax year, not to an individual's first year of MTD. Therefore, if you join MTD in 2027-28 because your qualifying income exceeds £30,000, penalty points will apply from your first quarterly update.</p>
<h2>What the soft landing does NOT cover</h2>
<p>Three things still apply in full, and mixing them up is how people get into trouble:</p>
<p><strong>1. The final declaration.</strong> The soft landing does not apply to your digital tax return. If you submit your 2026/27 digital tax return late — after 31 January 2028 — penalty points may apply under the standard rules.</p>
<p><strong>2. Late payment penalties.</strong> The soft landing also does not protect against late payment penalties, which operate on a separate regime. Your 2026/27 tax is still due by 31 January 2028 regardless of quarterly filing.</p>
<p><strong>3. Non-digital records.</strong> If you're not keeping digital records at all, that's a separate issue with its own penalty regime — up to £3,000 per quarter.</p>
<h2>The obligation hasn't disappeared — it's stacked</h2>
<p>The work doesn't disappear — it stacks. Updates are cumulative: the Q2 update due 7 November 2026 covers 6 April to 5 October.</p>
<p>This is actually good news if you missed Q1: the cumulative method means each update runs from the beginning of the tax year to the end of the relevant period. Your Q2 submission will include Q1's figures automatically. You don't file Q1 separately — you catch up in Q2, and the figures are complete.</p>
<p>Send Q1 as soon as you can anyway. The soft landing is a one-year grace period, not a permanent exemption, and HMRC expects genuine engagement with the system, not indefinite delay.</p>
<h2>The point-based system from 2027/28</h2>
<p>From the 2027/28 tax year onwards, the points-based penalty system kicks in fully. Each late quarterly update earns a penalty point. Hit four points, and HMRC issues a fixed £200 penalty. Every additional missed deadline after that triggers another £200 fine.</p>
<p>So the soft landing isn't just a free pass — it's a year to build the habit before the system bites.</p>
<h2>What to do if you haven't sent Q1 yet</h2>
<ol>
<li>Send it as soon as your records are ready. No penalty for being late in 2026/27, but you must send all four quarterly updates before you can submit your final declaration in January 2028.</li>
<li>If your software isn't set up, set it up now — not before Q2 in November.</li>
<li>If you're not sure whether you're even in scope, check <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">GOV.UK's qualifying income guidance</a> or ask your accountant.</li>
</ol>
<p>The 7 November deadline for Q2 is the one to focus on now. Use the time between now and then to get your records clean.</p>
<h2>Where TidGo fits</h2>
<p><a href="/">TidGo</a> collects receipts, income proof and CIS payslips as they happen, so your records are ready before the next quarterly deadline rather than scrambled together the night before. It doesn't submit to HMRC — that part goes through your accountant or MTD-compatible software. It just means the records exist when you need them.</p>
<section class="article-sources">
<strong>Sources</strong>
<ul>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/government/publications/changes-to-making-tax-digital-for-income-tax-penalty-points" target="_blank" rel="noopener">Penalty reform for MTD ITSA — soft landing</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax — send quarterly updates</a> — GOV.UK</li>
</ul>
<p><em>Last checked: 8 August 2026. Verify at GOV.UK if reading later.</em></p>
</section>`,
  pl: `<h1>Nie wysłałeś raportu MTD do 7 sierpnia? Co się naprawdę dzieje</h1>
<h2>Krótka odpowiedź</h2>
<p>Jeśli przegapiłeś wczorajszy termin 7 sierpnia 2026 — pierwszy raport kwartalny Making Tax Digital — <strong>żadne punkty karne nie idą w Twoją stronę</strong>. HMRC potwierdziło period przejściowy (soft landing) na cały rok podatkowy 2026/27: za spóźnione raporty kwartalne w tym pierwszym roku nie będą przyznawane żadne punkty karne, niezależnie od tego, ile ich przegapisz.</p>
<p>Żadnego listu z żądaniem zapłaty. Żadnej natychmiastowej kary. Czysty rekord na wejście do następnego roku.</p>
<p>To nie znaczy, że obowiązek zniknął. Nie zniknął. Ale konsekwencje są znacznie mniejsze, niż sugerują niektóre posty krążące dziś po internecie.</p>
<h2>Co soft landing faktycznie obejmuje</h2>
<p>W roku podatkowym 2026/27 nie będą przyznawane punkty karne za spóźnione raporty kwartalne. Nawet jeśli przegapisz jeden raport, dwa albo wszystkie cztery — do roku 2027/28 wchodzisz z czystym kontem.</p>
<p>Dotyczy to wyłącznie pierwszej grupy — czyli sole traderów i landlordów z qualifying income powyżej £50 000, którzy weszli do MTD w kwietniu 2026. Soft landing obejmuje tylko rok 2026/27, nie pierwszy rok każdego podatnika indywidualnie. Jeśli wejdziesz do MTD w 2027/28, bo Twój qualifying income przekroczy £30 000 — punkty karne obowiązują od pierwszego raportu.</p>
<h2>Czego soft landing NIE obejmuje</h2>
<p>Trzy rzeczy nadal obowiązują w pełni i ich mylenie może być kosztowne:</p>
<p><strong>1. Final declaration — roczne zeznanie MTD.</strong> Soft landing nie chroni Twojego rocznego rozliczenia. Jeśli złożysz je po terminie (po 31 stycznia 2028), mogą naliczyć się punkty karne według standardowych zasad.</p>
<p><strong>2. Kary za spóźnioną płatność.</strong> To osobny system i soft landing go nie obejmuje. Twój podatek za 2026/27 jest należny do 31 stycznia 2028 niezależnie od tego, czy wysyłasz raporty kwartalne na czas.</p>
<p><strong>3. Brak cyfrowych rekordów.</strong> Jeśli w ogóle nie prowadzisz rekordów cyfrowo, to jest osobna kwestia z własnym systemem kar — do £3 000 za kwartał.</p>
<h2>Obowiązek nie zniknął — nakłada się</h2>
<p>Raporty kwartalne MTD są kumulatywne. Raport Q2 (termin 7 listopada 2026) obejmuje dane od 6 kwietnia do 5 października. To znaczy, że jeśli nie wysłałeś Q1, Twój Q2 i tak będzie zawierał dane z tego okresu. Nie musisz składać Q1 osobno — nadrabiasz automatycznie przy Q2, a łączne liczby wychodzą kompletne.</p>
<p>Wyślij Q1 jak najszybciej mimo to. Soft landing to roczna ulga, a nie trwałe zwolnienie — HMRC oczekuje realnego zaangażowania, a nie odkładania w nieskończoność.</p>
<h2>System punktowy od 2027/28</h2>
<p>Od roku podatkowego 2027/28 system punktowy wchodzi w pełni. Każde spóźnienie z raportem kwartalnym to jeden punkt. Po czterech punktach kara £200, a każde kolejne spóźnienie powyżej progu to kolejne £200.</p>
<p>Soft landing to nie darmowy przejazd — to rok na zbudowanie nawyku, zanim system zacznie gryźć.</p>
<h2>Co zrobić, jeśli nie wysłałeś Q1</h2>
<ol>
<li>Wyślij go najszybciej, jak rekordy są gotowe. W 2026/27 nie ma kary za spóźnienie, ale musisz wysłać wszystkie cztery raporty kwartalne, zanim złożysz final declaration w styczniu 2028.</li>
<li>Jeśli oprogramowanie nie jest jeszcze skonfigurowane — skonfiguruj teraz, a nie przed Q2 w listopadzie.</li>
<li>Jeśli nie masz pewności, czy w ogóle jesteś objęty — sprawdź <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">wytyczne HMRC o qualifying income</a> albo zapytaj księgowego.</li>
</ol>
<p>Termin Q2 to 7 listopada. Czas między teraz a nim — na porządkowanie rekordów.</p>
<h2>Gdzie w tym wszystkim TidGo</h2>
<p><a href="/pl">TidGo</a> zbiera paragony, dowody przychodu i CIS payslipy na bieżąco, żeby rekordy były gotowe przed kolejnym terminem kwartalnym, a nie składane naprędce w ostatniej chwili. TidGo nie wysyła nic do HMRC — to robi Twój księgowy albo kompatybilne oprogramowanie. Pilnuje tylko, żeby rekordy istniały, gdy są potrzebne.</p>
<h3>Źródła</h3>
<ul>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/government/publications/changes-to-making-tax-digital-for-income-tax-penalty-points" target="_blank" rel="noopener">Penalty reform for MTD ITSA — soft landing</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax — send quarterly updates</a> — GOV.UK</li>
</ul>
<p><em>Sprawdzone: 8 sierpnia 2026. Zweryfikuj na GOV.UK, jeśli czytasz to później.</em></p>`,
  ro: `<h1>Nu ai trimis raportarea MTD până pe 7 august? Iată ce se întâmplă</h1>
<h2>Răspunsul scurt</h2>
<p>Dacă ai ratat termenul de ieri, 7 august 2026 — prima raportare trimestrială Making Tax Digital — <strong>niciun punct de penalizare nu vine spre tine</strong>. HMRC a confirmat o perioadă de tranziție (soft landing) pentru întregul an fiscal 2026/27: nu se vor acorda puncte de penalizare pentru raportările trimestriale întârziate în acest prim an, indiferent de câte ratezi.</p>
<p>Nicio scrisoare care să ceară bani. Nicio amendă imediată. Un slate curat la intrarea în anul următor.</p>
<p>Asta nu înseamnă că obligația a dispărut. Nu a dispărut. Dar consecințele sunt mult mai mici decât sugerează unele postări care circulă astăzi.</p>
<h2>Ce acoperă soft landing-ul</h2>
<p>În anul fiscal 2026/27, nu se acordă puncte de penalizare pentru raportările trimestriale întârziate. Chiar dacă ratezi una, două sau toate patru — intri în 2027/28 cu un dosar curat.</p>
<p>Aceasta se aplică doar primei cohorte — sole traderi și landlords cu qualifying income peste £50.000, care au intrat în MTD în aprilie 2026. Soft landing-ul se aplică doar anului 2026/27, nu primului an individual al fiecărui contribuabil. Dacă intri în MTD în 2027/28, pentru că qualifying income-ul tău depășește £30.000 — punctele de penalizare se aplică de la prima raportare.</p>
<h2>Ce NU acoperă soft landing-ul</h2>
<p>Trei lucruri se aplică în continuare în totalitate și confundarea lor poate fi costisitoare:</p>
<p><strong>1. Final declaration — declarația anuală MTD.</strong> Soft landing-ul nu protejează declarația ta anuală. Dacă o depui după termen (după 31 ianuarie 2028), punctele de penalizare se pot aplica conform regulilor standard.</p>
<p><strong>2. Penalitățile pentru plata întârziată.</strong> Acesta este un sistem separat și soft landing-ul nu îl acoperă. Taxa ta pentru 2026/27 este datorată până la 31 ianuarie 2028, indiferent dacă trimiți raportările trimestriale la timp.</p>
<p><strong>3. Lipsa înregistrărilor digitale.</strong> Dacă nu ții deloc evidențe digitale, aceasta este o problemă separată cu propriul sistem de penalități — până la £3.000 pe trimestru.</p>
<h2>Obligația nu a dispărut — se acumulează</h2>
<p>Raportările trimestriale MTD sunt cumulative. Raportarea Q2 (termen 7 noiembrie 2026) acoperă datele de la 6 aprilie la 5 octombrie. Asta înseamnă că dacă nu ai trimis Q1, raportarea Q2 va include oricum datele din acea perioadă. Nu trebuie să depui Q1 separat — recuperezi automat la Q2, iar totalurile cumulate vor fi complete.</p>
<p>Trimite Q1 cât mai curând oricum. Soft landing-ul este o facilitate de un an, nu o scutire permanentă — HMRC se așteaptă la o implicare reală în sistem, nu la amânare la nesfârșit.</p>
<h2>Sistemul de puncte din 2027/28</h2>
<p>Din anul fiscal 2027/28, sistemul de puncte intră în vigoare complet. Fiecare întârziere la o raportare trimestrială înseamnă un punct. La patru puncte, penalitate £200, iar fiecare întârziere ulterioară peste prag înseamnă încă £200.</p>
<p>Soft landing-ul nu este un abonament gratuit — este un an pentru a construi obiceiul înainte ca sistemul să înceapă să muște.</p>
<h2>Ce faci dacă nu ai trimis Q1</h2>
<ol>
<li>Trimite-l cât mai curând ce înregistrările sunt gata. În 2026/27 nu există penalitate pentru întârziere, dar trebuie să trimiți toate cele patru raportări trimestriale înainte de a putea depune final declaration în ianuarie 2028.</li>
<li>Dacă software-ul nu este configurat — configurează-l acum, nu înainte de Q2 în noiembrie.</li>
<li>Dacă nu ești sigur că ești în scope — verifică <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">ghidul HMRC despre qualifying income</a> sau întreabă contabilul.</li>
</ol>
<p>Termenul pentru Q2 este 7 noiembrie. Folosește timpul dintre acum și atunci pentru a-ți organiza înregistrările.</p>
<h2>Unde se încadrează TidGo</h2>
<p><a href="/ro">TidGo</a> strânge bonuri, dovezi de venit și payslipuri CIS pe parcurs, ca înregistrările să fie gata înaintea următorului termen trimestrial, nu asamblate în grabă în ultima clipă. TidGo nu trimite nimic la HMRC — asta o face contabilul tău sau software-ul compatibil. Se asigură doar că înregistrările există când ai nevoie de ele.</p>
<section class="article-sources">
<strong>Surse</strong>
<ul>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/government/publications/changes-to-making-tax-digital-for-income-tax-penalty-points" target="_blank" rel="noopener">Penalty reform for MTD ITSA — soft landing</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax — send quarterly updates</a> — GOV.UK</li>
</ul>
<p><em>Verificat: 8 august 2026. Verifică pe GOV.UK dacă citești mai târziu.</em></p>
</section>`,
  lt: `<h1>Praleidai MTD terminą rugpjūčio 7 d.? Štai kas iš tikrųjų vyksta</h1>
<h2>Trumpas atsakymas</h2>
<p>Jei praleidai vakarykštį 2026 m. rugpjūčio 7 d. terminą — pirmąją Making Tax Digital ketvirtinę ataskaitą — <strong>jokių baudos taškų nesulauksi</strong>. HMRC patvirtino pereinamąjį laikotarpį (soft landing) visam 2026/27 mokestinių metų laikotarpiui: pavėluotoms ketvirtinėms ataskaitoms šiais pirmaisiais metais baudos taškai neskaičiuojami, nesvarbu, kiek jų praleisi.</p>
<p>Jokio laiško su pinigų reikalavimu. Jokios skubios baudos. Švari pradžia kitais metais.</p>
<p>Tai nereiškia, kad prievolė dingo. Nedingo. Tačiau pasekmės yra daug mažesnės, nei siūlo kai kurie šiandien internete cirkuliuojantys įrašai.</p>
<h2>Ką iš tikrųjų apima soft landing</h2>
<p>2026/27 mokestiniais metais baudos taškai už pavėluotas ketvirtines ataskaitas neskaičiuojami. Net jei praleisi vieną, dvi ar visas keturias — į 2027/28 metus įeini švariai.</p>
<p>Tai taikoma tik pirmajai kohortai — sole trader ir landlord su qualifying income virš £50 000, kurie į MTD įstojo 2026 m. balandį. Soft landing taikomas tik 2026/27 metams, o ne pirmiesiems kiekvieno mokesčių mokėtojo MTD metams. Jei į MTD įstosi 2027/28, nes tavo qualifying income viršys £30 000 — baudos taškai skaičiuojami nuo pirmos ataskaitos.</p>
<h2>Ko soft landing NEAPIMA</h2>
<p>Trys dalykai vis dar galioja visa apimtimi ir jų painiojimas gali brangiai kainuoti:</p>
<p><strong>1. Final declaration — metinė MTD deklaracija.</strong> Soft landing neapsaugo tavo metinės deklaracijos. Jei ją pateiksi pavėluotai (po 2028 m. sausio 31 d.), baudos taškai gali būti taikomi pagal standartines taisykles.</p>
<p><strong>2. Baudos už pavėluotą mokėjimą.</strong> Tai atskira sistema, kurios soft landing neapima. Tavo 2026/27 mokestis vis tiek turi būti sumokėtas iki 2028 m. sausio 31 d., nepaisant to, ar siunti ketvirtines ataskaitas laiku.</p>
<p><strong>3. Skaitmeninių įrašų nebuvimas.</strong> Jei apskritai netvarkai skaitmeninių įrašų, tai atskiras klausimas su sava baudų sistema — iki £3 000 per ketvirtį.</p>
<h2>Prievolė nedingo — ji kaupiasi</h2>
<p>MTD ketvirtinės ataskaitos yra kumuliacinės. Q2 ataskaita (terminas 2026 m. lapkričio 7 d.) apima duomenis nuo balandžio 6 d. iki spalio 5 d. Tai reiškia, kad jei nesiuntei Q1, tavo Q2 vis tiek apims to laikotarpio duomenis. Nereikia pateikti Q1 atskirai — automatiškai pasivejami Q2, o bendros sumos bus pilnos.</p>
<p>Vis tiek išsiųsk Q1 kuo greičiau. Soft landing yra vienerių metų lengvata, o ne nuolatinė išimtis — HMRC tikisi realaus dalyvavimo sistemoje, o ne vilkinimo iki begalybės.</p>
<h2>Taškų sistema nuo 2027/28</h2>
<p>Nuo 2027/28 mokestinių metų taškų sistema įsigalioja visa apimtimi. Kiekvienas pavėluotas ketvirtinis pranešimas — vienas taškas. Surinkus keturis taškus — £200 bauda, o kiekvienas kitas praleidimas virš ribos — dar £200.</p>
<p>Soft landing nėra nemokamas bilietas — tai metai įpročiui suformuoti, kol sistema nepradėjo gelti.</p>
<h2>Ką daryti, jei Q1 nesiuntei</h2>
<ol>
<li>Išsiųsk jį kuo greičiau, kai įrašai bus paruošti. 2026/27 metais baudos už pavėlavimą nėra, tačiau privalai išsiųsti visas keturias ketvirtines ataskaitas, prieš galėdamas pateikti final declaration 2028 m. sausį.</li>
<li>Jei programinė įranga dar nesukonfigūruota — konfigūruok dabar, o ne prieš Q2 lapkritį.</li>
<li>Jei nesi tikras, ar apskritai esi scope — patikrink <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">HMRC qualifying income gaires</a> arba paklausk buhalterio.</li>
</ol>
<p>Q2 terminas — lapkričio 7 d. Laikas nuo dabar iki tada — įrašams sutvarkyti.</p>
<h2>Kur čia TidGo</h2>
<p><a href="/lt">TidGo</a> renka kvitus, pajamų įrodymus ir CIS payslipus eigoje, kad įrašai būtų paruošti prieš kitą ketvirtinį terminą, o ne surinkti skubotai paskutinę minutę. TidGo nieko nesiunčia į HMRC — tai daro tavo buhalteris arba suderinama programinė įranga. Tik pasirūpina, kad įrašai egzistuotų, kai jų reikia.</p>
<h3>Šaltiniai</h3>
<ul>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/government/publications/changes-to-making-tax-digital-for-income-tax-penalty-points" target="_blank" rel="noopener">Penalty reform for MTD ITSA — soft landing</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax — send quarterly updates</a> — GOV.UK</li>
</ul>
<p><em>Patikrinta: 2026 m. rugpjūčio 8 d. Jei skaitai vėliau, patikrink GOV.UK.</em></p>`
};

function mtdMissedDeadlineArticle() {
  const html = MTD_MISSED_DEADLINE_ARTICLES[state.marketingLanguage] || MTD_MISSED_DEADLINE_ARTICLES.en;
  const withQuarterlyLink = html.replace(/(<(?:section class="article-sources"|h3)[^>]*>)/, `${mtdMissedDeadlineQuarterlyLink()}$1`);
  return `<article class="marketing-page-card marketing-article"><span class="eyebrow">${mk("navMtd")}</span>${withQuarterlyLink}${pageCta()}</article>`;
}

const MTD_DIGITAL_RECORDS_ARTICLES = {
  "en": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>What digital records do I need to keep for MTD?</h1>\n  <h2>The minimum requirement</h2>\n  <p>For each transaction, <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC requires you to record</a>:</p>\n  <ul>\n    <li>The <strong>date</strong> of the transaction</li>\n    <li>The <strong>amount</strong></li>\n    <li>The <strong>category</strong> — whether it is income or an expense, and what type</li>\n  </ul>\n  <p>That is the digital record. Three pieces of information, created in software that works with Making Tax Digital, as close to the time of the transaction as practical.</p>\n  <p>Nothing else is required to be digital. Not photos of receipts. Not scanned invoices. Not bank statements uploaded to an app. The transaction record itself — those three fields — is what the law requires to be digital.</p>\n  <h2>Simplified categorisation if your turnover is under £90,000</h2>\n  <p>If your turnover from a self-employment source is <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">under £90,000</a>, you can use simplified categorisation. This means you only need to record whether each transaction is <strong>income or an expense</strong> — not which subcategory it falls into.</p>\n  <p>No splitting fuel from tools from materials. Just in or out.</p>\n  <p>Two exceptions to watch:</p>\n  <p><strong>Landlords with UK residential property:</strong> you must additionally record whether an expense is a <a href=\"https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change\" target=\"_blank\" rel=\"noopener\">restricted finance cost</a> — mortgage interest restrictions apply differently and HMRC needs to see this.</p>\n  <p><strong>If your turnover reaches £90,000:</strong> you must switch to full categorisation, including records from the start of that tax year, before you can submit a quarterly update. If you are close to the threshold, categorise in full from the start. Redoing a year of records is worse than doing it right once.</p>\n  <h2>What you must still keep — the supporting documents</h2>\n  <p>Here is the part the short answer leaves out.</p>\n  <p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC requires you to continue keeping records as you normally would for Self Assessment</a>. That means original documents or copies — receipts, invoices, bank statements, CIS payslips — that prove the figures in your digital records.</p>\n  <p>These must be kept for <a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">at least five years after the 31 January deadline</a> for the relevant tax year.</p>\n  <p>So the law does not say \"photograph every receipt\". It says \"keep the receipt for five years\". A thermal till receipt fades in two. That is the practical case for photos — not a legal requirement, but the only realistic way to meet one.</p>\n  <p><a href=\"/mtd/do-i-have-to-photograph-receipts\">A full explanation of the photography question is here</a>.</p>\n  <h2>What counts as a digital record in practice</h2>\n  <p>A row in a spreadsheet — date, amount, category — is a digital record, if that spreadsheet is linked to your MTD software. A note in a notebook is not. A photo of a receipt is not a digital record on its own — it is a supporting document. The digital record is what you enter into the software.</p>\n  <p>One rule that catches people: <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">you cannot manually transfer records between programs</a> after they have been submitted in a quarterly update. No retyping figures from one spreadsheet into another. No copy-paste into a different system. If you use more than one piece of software, they must be digitally linked. This is the \"digital link\" requirement and it is strict.</p>\n  <h2>What records to keep for different income types</h2>\n  <p><strong>Self-employment income:</strong></p>\n  <ul>\n    <li>Date and amount of each payment received</li>\n    <li>Who paid you (merchant or client name)</li>\n    <li>Invoices issued, if applicable</li>\n  </ul>\n  <p><strong>Self-employment expenses:</strong></p>\n  <ul>\n    <li>Date, amount and what it was for</li>\n    <li>Supporting document (receipt, invoice, bank statement)</li>\n    <li>Common categories: materials, fuel, tools, equipment, subcontractor payments, insurance, phone, work clothing where applicable</li>\n  </ul>\n  <p><strong>CIS income:</strong></p>\n  <ul>\n    <li>Your gross pay (not net after deduction) — the full amount before the CIS deduction</li>\n    <li>The CIS deduction amount — keep this separately, it is not an expense</li>\n    <li>The payslip or remittance notice that shows both figures</li>\n    <li><a href=\"/mtd/cis\">Full explanation of CIS records for MTD is here</a></li>\n  </ul>\n  <p><strong>Property income (landlords):</strong></p>\n  <ul>\n    <li>Rental income received — date and amount per property</li>\n    <li>Expenses — date, amount and whether each is a restricted finance cost</li>\n    <li>All UK properties are treated as one business — separate records per property are not required for reporting, but keeping them makes the final declaration easier</li>\n  </ul>\n  <h2>How long to keep records</h2>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Document type</th>\n        <th>Minimum period</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>Self-employment records</td>\n          <td>5 years after 31 January following the tax year</td>\n        </tr>\n        <tr>\n          <td>Property records</td>\n          <td>5 years after 31 January following the tax year</td>\n        </tr>\n        <tr>\n          <td>Business records if tax return filed late</td>\n          <td>Longer — until HMRC's enquiry window closes</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p>If HMRC opens an enquiry, you may need to produce records going back further. Keep everything.</p>\n  <h2>What software to use</h2>\n  <p>Your digital records must be created and stored in <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">software that is compatible with Making Tax Digital</a>. You can still prepare MTD without business bank account connections if your records are complete and digitally kept. HMRC maintains a list. The software must be able to send your quarterly updates directly to HMRC — not via you retyping the figures somewhere else.</p>\n  <p>Spreadsheets are allowed if they are connected to HMRC via recognised bridging software. Using a spreadsheet alone, without a digital link to HMRC, is not compliant.</p>\n  <h2>The practical summary</h2>\n  <p>Record each transaction — date, amount, category — in your MTD software as it happens. Keep the receipt or invoice behind it for five years. Make sure it will still be readable when someone asks for it.</p>\n  <p>For your specific situation, ask your accountant. This page covers the general rules and is not tax advice.</p>\n  <h2>Where TidGo fits</h2>\n  <p><a href=\"/\">TidGo</a> captures receipts, income proof and CIS payslips as they happen — by WhatsApp photo, forwarded email or in the app — and creates the digital record behind each one. You confirm the details before they are trusted. Your accountant gets clean, tidy records instead of a collection of photos across WhatsApp, email and a kitchen drawer.</p>\n  <p>TidGo does not submit to HMRC. It handles the collection and organisation layer, so that whatever software or accountant does your quarterly updates and final declaration has something accurate to work from.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — Create digital records</a></li>\n      <li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Last checked: August 2026. Verify at GOV.UK if reading later.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "pl": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Jaką cyfrową ewidencję trzeba prowadzić dla MTD?</h1>\n  <h2>Minimalny wymóg</h2>\n  <p>Dla każdej transakcji <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC wymaga zapisania</a>:</p>\n  <ul>\n    <li><strong>Daty</strong> transakcji</li>\n    <li><strong>Kwoty</strong></li>\n    <li><strong>Kategorii</strong> — czy to przychód czy wydatek i jakiego rodzaju</li>\n  </ul>\n  <p>To jest cyfrowy rekord. Trzy informacje, zapisane w oprogramowaniu kompatybilnym z Making Tax Digital, możliwie blisko daty transakcji.</p>\n  <p>Nic innego nie musi być cyfrowe. Nie zdjęcia paragonów. Nie zeskanowane faktury. Nie wyciągi bankowe wgrywane do aplikacji. Sam zapis transakcji — te trzy pola — to właśnie to, czego prawo wymaga w formie cyfrowej.</p>\n  <h2>Uproszczona kategoryzacja przy obrotach poniżej £90 000</h2>\n  <p>Jeśli Twój obrót z działalności wynosi <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">poniżej £90 000</a>, możesz korzystać z uproszczonej kategoryzacji. Oznacza to, że wystarczy zapisać, czy każda transakcja to <strong>przychód czy wydatek</strong> — bez rozbijania na podkategorie.</p>\n  <p>Bez dzielenia paliwa od narzędzi od materiałów. Po prostu do środka albo na zewnątrz.</p>\n  <p>Dwa wyjątki, o których warto wiedzieć:</p>\n  <p><strong>Landlordzi z UK residential property:</strong> musisz dodatkowo oznaczyć, czy wydatek to <a href=\"https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change\" target=\"_blank\" rel=\"noopener\">restricted finance cost</a> — ograniczenia odliczenia odsetek od kredytu działają inaczej i HMRC musi to widzieć.</p>\n  <p><strong>Jeśli obrót przekroczy £90 000:</strong> musisz przejść na pełną kategoryzację, włącznie z rekordami od początku danego roku podatkowego, zanim wyślesz raport kwartalny. Jeśli zbliżasz się do progu, kategoryzuj w pełni od początku. Poprawianie roku wstecz jest gorsze niż zrobienie tego porządnie za pierwszym razem.</p>\n  <h2>Co musisz nadal przechowywać — dokumenty źródłowe</h2>\n  <p>I tu jest ta część, którą krótka odpowiedź pomija.</p>\n  <p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC wymaga, żebyś nadal prowadził ewidencję tak jak dotąd na potrzeby Self Assessment</a>. Oznacza to oryginalne dokumenty lub kopie — paragony, faktury, wyciągi bankowe, payslipy CIS — które potwierdzają cyfry w Twoich cyfrowych rekordach.</p>\n  <p>Muszą być przechowywane przez <a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">co najmniej pięć lat po terminie 31 stycznia</a> za dany rok podatkowy.</p>\n  <p>Prawo nie mówi więc \"sfotografuj każdy paragon\". Mówi \"przechowuj paragon przez pięć lat\". Termiczny paragon z kasy blaknie po dwóch. To jest praktyczny argument za zdjęciami — nie wymóg prawny, ale jedyny realny sposób na spełnienie wymogu przechowywania.</p>\n  <p><a href=\"/pl/mtd/do-i-have-to-photograph-receipts\">Pełne wyjaśnienie kwestii fotografowania jest tutaj</a>.</p>\n  <h2>Jakie rekordy prowadzić dla różnych typów przychodów</h2>\n  <p><strong>Przychody z działalności:</strong></p>\n  <ul>\n    <li>Data i kwota każdej otrzymanej płatności</li>\n    <li>Od kogo (nazwa klienta lub kontrahenta)</li>\n    <li>Faktury, które wystawiłeś (jeśli dotyczy)</li>\n  </ul>\n  <p><strong>Wydatki z działalności:</strong></p>\n  <ul>\n    <li>Data, kwota i za co</li>\n    <li>Dokument źródłowy (paragon, faktura, wyciąg)</li>\n    <li>Typowe kategorie: materiały, paliwo, narzędzia, sprzęt, płatności podwykonawcom, ubezpieczenie, telefon, odzież robocza tam gdzie dotyczy</li>\n  </ul>\n  <p><strong>Przychody CIS:</strong></p>\n  <ul>\n    <li>Twoje wynagrodzenie brutto (nie kwota netto po potrąceniu) — pełna kwota przed potrąceniem CIS</li>\n    <li>Kwota potrącenia CIS — przechowuj osobno, to nie jest wydatek</li>\n    <li>Payslip lub remittance notice pokazujące obie kwoty</li>\n    <li><a href=\"/pl/mtd/cis\">Pełne wyjaśnienie rekordów CIS dla MTD jest tutaj</a></li>\n  </ul>\n  <p><strong>Przychody z wynajmu (landlordzi):</strong></p>\n  <ul>\n    <li>Otrzymany czynsz — data i kwota</li>\n    <li>Wydatki — data, kwota i czy to restricted finance cost</li>\n    <li>Wszystkie nieruchomości w UK traktowane są jako jeden biznes — osobnych rekordów per nieruchomość HMRC nie wymaga do raportowania, ale prowadzenie ich ułatwia final declaration</li>\n  </ul>\n  <h2>Jak długo przechowywać rekordy</h2>\n  <div class=\"article-table-wrap\">\n    <table class=\"article-table\">\n      <thead><tr>\n        <th>Typ dokumentu</th>\n        <th>Minimalny okres</th>\n      </tr></thead>\n      <tbody>\n        <tr>\n          <td>Rekordy z działalności</td>\n          <td>5 lat po 31 stycznia następującym po roku podatkowym</td>\n        </tr>\n        <tr>\n          <td>Rekordy z wynajmu</td>\n          <td>5 lat po 31 stycznia następującym po roku podatkowym</td>\n        </tr>\n        <tr>\n          <td>Rekordy gdy zeznanie złożone późno</td>\n          <td>Dłużej — do zamknięcia okna kontrolnego HMRC</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p>Jeśli HMRC otworzy postępowanie, możesz potrzebować dokumentów sprzed wielu lat. Zachowuj wszystko.</p>\n  <h2>Jakiego oprogramowania używać</h2>\n  <p>Twoje cyfrowe rekordy muszą być tworzone i przechowywane w <a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">oprogramowaniu kompatybilnym z Making Tax Digital</a>. HMRC prowadzi listę. Oprogramowanie musi umieć wysyłać kwartalne raporty bezpośrednio do HMRC — nie przez Ciebie przepisującego cyfry gdzieś indziej.</p>\n  <p>Arkusze kalkulacyjne są dozwolone, jeśli są podłączone do HMRC przez uznane oprogramowanie pomostowe (bridging software). Sam arkusz bez cyfrowego połączenia z HMRC nie jest zgodny z przepisami.</p>\n  <h2>Praktyczne podsumowanie</h2>\n  <p>Zapisuj każdą transakcję — datę, kwotę, kategorię — w swoim oprogramowaniu MTD na bieżąco. Zachowaj paragon lub fakturę przez pięć lat. Zadbaj, żeby po tych pięciu latach dało się je odczytać.</p>\n  <p>W sprawach dotyczących Twojej konkretnej sytuacji zapytaj księgowego. Ta strona opisuje ogólne zasady i nie jest poradą podatkową.</p>\n  <h2>Gdzie w tym wszystkim TidGo</h2>\n  <p><a href=\"/pl\">TidGo</a> zbiera paragony, dowody przychodu i payslipy CIS na bieżąco — przez zdjęcie na WhatsAppie, przekazany mail albo w aplikacji — i tworzy cyfrowy rekord za każdym z nich. Potwierdzasz szczegóły przed zaufaniem danym. Twój księgowy dostaje czyste, uporządkowane rekordy zamiast kolekcji zdjęć porozrzucanych po WhatsAppie, mailach i szufladzie w kuchni.</p>\n  <p>TidGo nie wysyła nic do HMRC. Zajmuje się warstwą zbierania i porządkowania, żeby jakiekolwiek oprogramowanie lub księgowy robiący Twoje kwartalne raporty i final declaration miał z czego pracować.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — Create digital records</a></li>\n      <li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Sprawdzone: sierpień 2026. Zweryfikuj na GOV.UK, jeśli czytasz to później.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "ro": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Ce evidențe digitale trebuie să păstrez pentru MTD?</h1>\n  <h2>Cerința minimă</h2>\n  <p>Pentru fiecare tranzacție, <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC cere să înregistrezi</a>:</p>\n  <ul>\n    <li><strong>Data</strong> tranzacției</li>\n    <li><strong>Suma</strong></li>\n    <li><strong>Categoria</strong> — dacă este venit sau cheltuială și de ce tip</li>\n  </ul>\n  <p>Aceasta este evidența digitală. Trei informații, create în software compatibil cu Making Tax Digital, cât mai aproape de momentul tranzacției.</p>\n  <p>Nimic altceva nu trebuie să fie digital. Nu fotografii ale bonurilor. Nu facturi scanate. Nu extrase bancare încărcate în aplicație. Înregistrarea tranzacției în sine — acele trei câmpuri — este ceea ce legea cere să fie digital.</p>\n  <h2>Categorisire simplificată dacă cifra de afaceri este sub £90.000</h2>\n  <p>Dacă cifra ta de afaceri dintr-o sursă de activitate este <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">sub £90.000</a>, poți folosi categorisirea simplificată. Aceasta înseamnă că trebuie să înregistrezi doar dacă fiecare tranzacție este <strong>venit sau cheltuială</strong> — fără subcategorii.</p>\n  <p>Fără separarea combustibilului de scule de materiale. Doar intrare sau ieșire.</p>\n  <p>Două excepții de urmărit: landlords cu proprietăți rezidențiale UK trebuie să marcheze dacă o cheltuială este restricted finance cost. Dacă cifra de afaceri atinge £90.000, trebuie să treci la categorisire completă.</p>\n  <h2>Ce trebuie să mai păstrezi — documentele justificative</h2>\n  <p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC cere să continui să ții evidențe cum faci în mod normal pentru Self Assessment</a>. Adică documente originale sau copii — bonuri, facturi, extrase bancare, payslipuri CIS.</p>\n  <p>Acestea trebuie păstrate <a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">cel puțin cinci ani după termenul de 31 ianuarie</a> al anului fiscal relevant.</p>\n  <p>Legea nu spune \"fotografiază fiecare bon\". Spune \"păstrează bonul cinci ani\". Un bon termic de casă se decolorează în doi. Acesta este argumentul practic pentru fotografii — nu o cerință legală, ci singurul mod realist de a respecta una.</p>\n  <p><a href=\"/ro/mtd/do-i-have-to-photograph-receipts\">Explicația completă a întrebării despre fotografiere este aici</a>.</p>\n  <h2>Ce evidențe să ții pentru diferite tipuri de venituri</h2>\n  <p><strong>Venituri din activitate independentă:</strong> data și suma fiecărei plăți primite, de la cine, facturi emise dacă este cazul.</p>\n  <p><strong>Cheltuieli din activitate:</strong> data, suma și pentru ce, document justificativ, categorii comune: materiale, combustibil, scule, echipamente, plăți către subcontractori, asigurare, telefon.</p>\n  <p><strong>Venituri CIS:</strong> venitul brut (nu net după deducere), suma deducerii CIS — separat, nu ca cheltuială, payslipul sau remittance notice. <a href=\"/ro/mtd/cis\">Explicația completă a evidențelor CIS pentru MTD este aici</a>.</p>\n  <p><strong>Venituri din proprietăți:</strong> chiria primită — dată și sumă, cheltuieli cu marcarea restricted finance cost, toate proprietățile UK tratate ca o singură afacere.</p>\n  <h2>Cât timp să păstrezi evidențele</h2>\n  <p>Minim 5 ani după 31 ianuarie următor anului fiscal, mai mult dacă HMRC deschide o anchetă. Păstrează tot.</p>\n  <h2>Rezumat practic</h2>\n  <p>Înregistrează fiecare tranzacție — dată, sumă, categorie — în software-ul tău MTD pe măsură ce apare. Păstrează bonul sau factura din spate timp de cinci ani. Asigură-te că peste cinci ani se mai poate citi.</p>\n  <p>Pentru situația ta specifică, consultă contabilul. Această pagină acoperă regulile generale și nu este consultanță fiscală.</p>\n  <h2>Unde se încadrează TidGo</h2>\n  <p><a href=\"/ro\">TidGo</a> colectează bonuri, dovezi de venit și payslipuri CIS pe măsură ce apar — prin fotografie pe WhatsApp, email transmis mai departe sau în aplicație — și creează înregistrarea digitală în spatele fiecăruia. Confirmi detaliile înainte ca acestea să fie de încredere. Contabilul tău primește evidențe curate și ordonate.</p>\n  <p>TidGo nu trimite nimic la HMRC. Se ocupă de stratul de colectare și organizare.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — Create digital records</a></li>\n      <li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Verificat: august 2026. Verifică pe GOV.UK dacă citești mai târziu.*</p>\n  </div>\n  ${pageCta()}\n</article>",
  "lt": "<article class=\"marketing-page-card marketing-article\">\n  <span class=\"eyebrow\">${mk(\"navMtd\")}</span>\n  <h1>Kokius skaitmeninius įrašus privalau saugoti MTD tikslais?</h1>\n  <h2>Minimalus reikalavimas</h2>\n  <p>Kiekvienai operacijai <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC reikalauja užregistruoti</a>:</p>\n  <ul>\n    <li>Operacijos <strong>datą</strong></li>\n    <li><strong>Sumą</strong></li>\n    <li><strong>Kategoriją</strong> — ar tai pajamos, ar išlaidos, ir kokio tipo</li>\n  </ul>\n  <p>Tai ir yra skaitmeninis įrašas. Trys informacijos vienetai, sukurti su MTD suderintoje programinėje įrangoje, kuo arčiau operacijos laiko.</p>\n  <p>Niekas kita neturi būti skaitmeninio formato. Ne kvitų nuotraukos. Ne nuskaitytos sąskaitos faktūros. Ne banko išrašai, įkelti į programėlę. Pats operacijos įrašas — tie trys laukai — tai ir yra tai, ko įstatymas reikalauja skaitmeninio formato.</p>\n  <h2>Supaprastinta kategorizacija, jei apyvarta mažesnė nei £90 000</h2>\n  <p>Jei tavo apyvarta iš savarankiškos veiklos šaltinio yra <a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">mažesnė nei £90 000</a>, gali naudoti supaprastintą kategorizaciją. Tai reiškia, kad tereikia užregistruoti, ar kiekviena operacija yra <strong>pajamos ar išlaidos</strong> — be subkategorijų.</p>\n  <p>Nereikia atskirti kuro nuo įrankių nuo medžiagų. Tiesiog įeina ar išeina.</p>\n  <p>Du išimtini atvejai: nuomotojai su UK gyvenamosios paskirties nekilnojamuoju turtu turi papildomai pažymėti, ar išlaidos yra restricted finance cost. Jei apyvarta pasieks £90 000 — reikės pereiti prie pilnos kategorizacijos.</p>\n  <h2>Ką vis dar privalai saugoti — pagrindžiantys dokumentai</h2>\n  <p><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">HMRC reikalauja toliau tvarkyti apskaitas taip, kaip įprastai darai Self Assessment tikslais</a>. Tai reiškia originalius dokumentus arba kopijas — kvitus, sąskaitas faktūras, banko išrašus, CIS payslipus.</p>\n  <p>Jie turi būti saugomi <a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">bent penkerius metus po sausio 31 d. termino</a> atitinkamais mokestiniais metais.</p>\n  <p>Įstatymas nesako \"nufotografuok kiekvieną kvitą\". Sako \"saugok kvitą penkerius metus\". Terminis kasos kvitas išblunka per dvejus. Tai praktinis argumentas fotografijai — ne teisinis reikalavimas, o vienintelis realus būdas jį įvykdyti.</p>\n  <p><a href=\"/lt/mtd/do-i-have-to-photograph-receipts\">Išsamus fotografavimo klausimo paaiškinimas čia</a>.</p>\n  <h2>Kokius įrašus tvarkyti skirtingų pajamų tipams</h2>\n  <p><strong>Pajamos iš savarankiškos veiklos:</strong> kiekvieno gauto mokėjimo data ir suma, iš ko (kliento ar rangovos pavadinimas), išrašytos sąskaitos faktūros, jei taikoma.</p>\n  <p><strong>Išlaidos iš veiklos:</strong> data, suma ir už ką, pagrindžiantis dokumentas, įprastos kategorijos: medžiagos, kuras, įrankiai, įranga, mokėjimai subkontraktorjams, draudimas, telefonas.</p>\n  <p><strong>CIS pajamos:</strong> bruto užmokestis (ne neto po atskaitymo), CIS atskaitymo suma — atskirai, ne kaip išlaida, payslipas arba remittance notice. <a href=\"/lt/mtd/cis\">Išsamas CIS įrašų MTD paaiškinimas čia</a>.</p>\n  <p><strong>Pajamos iš nuomos:</strong> gauta nuoma — data ir suma, išlaidos su restricted finance cost žymėjimu, visi UK objektai laikomi vienu verslu.</p>\n  <h2>Kiek laiko saugoti įrašus</h2>\n  <p>Mažiausiai 5 metus po sausio 31 d., einančio po mokestinių metų, ilgiau, jei HMRC pradeda tyrimus. Saugok viską.</p>\n  <h2>Praktinė santrauka</h2>\n  <p>Registruok kiekvieną operaciją — datą, sumą, kategoriją — savo MTD programinėje įrangoje iš karto. Saugok už jos esantį kvitą ar sąskaitą penkerius metus. Pasirūpink, kad po penkerių metų juos dar būtų galima perskaityti.</p>\n  <p>Dėl savo konkrečios situacijos pasitark su buhalteriu. Ši puslapis apima bendras taisykles ir nėra mokesčių konsultacija.</p>\n  <h2>Kur čia TidGo</h2>\n  <p><a href=\"/lt\">TidGo</a> renka kvitus, pajamų įrodymus ir CIS payslipus iš karto — WhatsApp nuotrauka, persiuntimu el. paštu arba programėlėje — ir kuria skaitmeninį įrašą už kiekvieną iš jų. Patvirtini duomenis prieš jiems tampant patikimais. Tavo buhalteris gauna tvarkingus, švarius įrašus.</p>\n  <p>TidGo nieko nesiunčia į HMRC. Rūpinasi rinkimo ir tvarkymo sluoksniu.</p>\n  <div class=\"article-sources\">\n    <h2>Sources</h2>\n    <ul>\n      <li><a href=\"https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records\" target=\"_blank\" rel=\"noopener\">Use Making Tax Digital for Income Tax — Create digital records</a></li>\n      <li><a href=\"https://www.gov.uk/keeping-your-pay-tax-records\" target=\"_blank\" rel=\"noopener\">Keeping your pay and tax records</a></li>\n      <li><a href=\"https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax\" target=\"_blank\" rel=\"noopener\">Find software that's compatible with Making Tax Digital for Income Tax</a></li>\n    </ul>\n    <p>*Patikrinta: 2026 m. rugpjūtis. Jei skaitai vėliau, pasitikrink GOV.UK.*</p>\n  </div>\n  ${pageCta()}\n</article>"
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
<p>If plenty of apps have told you otherwise, that's worth knowing about — the companies selling scanning have an interest in the myth.</p>
<h2>But you still have to keep the receipts</h2>
<p>Here's the part the short answer leaves out, and it matters more than the headline.</p>
<p>HMRC guidance is explicit: you must continue <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">keeping records the way you normally do for Self Assessment</a>. You still need the original records or supporting documents — bank statements, invoices, receipts — that you used to prepare your return.</p>
<p>And you need to keep them for <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">at least five years after the 31 January submission deadline</a> for that tax year.</p>
<p>So the obligation isn't <em>photograph everything</em>. The obligation is <em>still have it in five years if HMRC asks</em>.</p>
<h2>Which is where paper becomes the problem</h2>
<p>A thermal till receipt from a builders' merchant is unreadable long before five years are up. Anyone who has emptied a bag of receipts in January knows what a two-year-old fuel receipt looks like: a blank slip of shiny paper.</p>
<p>Photographing a receipt isn't a legal requirement. It's just the only realistic way of meeting a legal requirement that lasts five years, using paper that lasts about two.</p>
<p>You can keep the paper in a folder if you prefer, and HMRC is perfectly happy with that. It just has to still say something when someone reads it.</p>
<h2>Is any of this new?</h2>
<p>No — and this is worth being clear about, because a lot of the noise around MTD implies otherwise.</p>
<p>The requirement to keep supporting documents for five years existed long before Making Tax Digital. Nothing about that has changed.</p>
<p>What MTD added is narrower than most people think: <strong>the record itself — amount, date, category — now has to be digital, and created in compatible software.</strong> The supporting document behind it can stay on paper.</p>
<h2>Good news most people haven't heard: you may not need categories at all</h2>
<p>Buried in the same guidance is something that makes this far less work than people expect.</p>
<p>If your turnover from a source of self-employment is <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">under £90,000</a>, you can use simpler categorisation. For a sole trader that means you only need to record <strong>whether a transaction is income or an expense</strong>. Not fuel, not tools, not office costs — just in or out.</p>
<p>Two things to watch. If you receive UK residential property income, you have to go one step further and record whether an expense is a <a href="https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change" target="_blank" rel="noopener">restricted finance cost</a>. And if your turnover later reaches £90,000, you'll need to categorise that source in full — including records from the start of that tax year — before you can send a quarterly update.</p>
<p>If you're unsure whether you'll cross the threshold, categorise in full from the start. Redoing a year of records is worse than doing it properly once.</p>
<h2>Two more rules worth knowing</h2>
<p><strong>Several businesses means several sets of records.</strong> If you have more than one sole trader business, each one needs <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">its own digital records and its own quarterly updates</a>. An electrician who also does driving instruction keeps two sets, not one.</p>
<p>Property works differently: all your UK properties count as a single UK property business, so no separate records per property. Foreign properties are the exception — those need separate records for each one.</p>
<p><strong>No copying and pasting between programs.</strong> Once a digital record has been sent to HMRC in a quarterly update, you <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">must not manually move it</a> — no retyping it into another cell or another program, no cut and paste. If you use more than one piece of software, they have to be digitally linked.</p>
<p>This one catches people who keep records in a spreadsheet and then type the totals into something else. That's exactly what the rule prohibits.</p>
<h2>So what should you actually do?</h2>
<p>Keep it simple:</p>
<p>Record the amount, the date and (if your turnover requires it) the category, as close to the transaction as you can. Keep the receipt or invoice behind it — paper or digital, your choice — for five years. Make sure it'll still be readable when that five years is up.</p>
<p>For anything specific to your own situation, ask your accountant or check GOV.UK. We don't give tax advice, and a website can't see your books.</p>
<h2>Where TidGo fits</h2>
<p><a href="/">TidGo</a> exists for the second half of that: receipts and income proof captured as they happen, so the evidence is still there in five years and your accountant isn't working from a bag of blank paper.</p>
<p>We're telling you HMRC doesn't require photos even though photos are what we do, because the honest version of the argument is the better one. The paper fades. That's reason enough.</p>
<p>TidGo doesn't submit anything to HMRC and it isn't tax advice. It collects and tidies records so that whoever does your submission has something clean to work from.</p>
<section class="article-sources">
<strong>Sources</strong>
<ul>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax — Create digital records</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/keeping-your-pay-tax-records" target="_blank" rel="noopener">Keeping your pay and tax records</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>
</ul>
<p><em>Last checked: August 2026, against guidance updated 16 July 2026. HMRC guidance changes — verify at the links above if you're reading this later.</em></p>
</section>`,
  pl: `<h1>Zdjęcia paragonów i MTD: czego naprawdę wymaga HMRC</h1>
<h2>Krótka odpowiedź</h2>
<p>Nie. HMRC nie wymaga skanowania, fotografowania ani wgrywania pojedynczych paragonów i faktur na potrzeby Making Tax Digital.</p>
<p>Cyfrowy musi być <strong>zapis transakcji</strong>: <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">kwota, data i kategoria</a>. Tyle. Trzy informacje, utworzone i przechowywane w oprogramowaniu kompatybilnym z MTD.</p>
<p>Jeśli sporo aplikacji mówiło Ci co innego — warto wiedzieć, że firmy sprzedające skanowanie mają interes w podtrzymywaniu tego mitu.</p>
<h2>Ale paragony i tak musisz mieć</h2>
<p>I to jest ta część, którą krótka odpowiedź pomija, a która znaczy więcej niż sam nagłówek.</p>
<p>Wytyczne HMRC mówią wprost: musisz nadal <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">prowadzić dokumentację tak jak dotąd na potrzeby Self Assessment</a>. Nadal potrzebujesz oryginalnych dokumentów albo ich kopii — wyciągów bankowych, faktur, paragonów — na podstawie których przygotowałeś rozliczenie.</p>
<p>I musisz je przechowywać przez <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">co najmniej pięć lat od terminu 31 stycznia</a> dla danego roku podatkowego.</p>
<p>Czyli obowiązek nie brzmi <em>sfotografuj wszystko</em>. Brzmi <em>miej to za pięć lat, gdyby HMRC zapytało</em>.</p>
<h2>I tu papier staje się problemem</h2>
<p>Paragon z kasy termicznej ze składu budowlanego jest nieczytelny na długo przed upływem pięciu lat. Każdy, kto kiedyś wysypał reklamówkę paragonów w styczniu, wie, jak wygląda dwuletni paragon za paliwo: błyszcząca, pusta kartka.</p>
<p>Fotografowanie paragonu nie jest wymogiem prawnym. Jest po prostu jedynym realnym sposobem spełnienia wymogu, który trwa pięć lat, przy papierze, który wytrzymuje dwa.</p>
<p>Możesz trzymać papier w segregatorze, jeśli wolisz — HMRC nie ma z tym problemu. Musi tylko coś na nim być widać, kiedy ktoś sięgnie.</p>
<h2>Czy to coś nowego?</h2>
<p>Nie — i warto to powiedzieć jasno, bo szum wokół MTD sugeruje coś innego.</p>
<p>Obowiązek przechowywania dokumentów przez pięć lat istniał na długo przed Making Tax Digital. W tej kwestii nic się nie zmieniło.</p>
<p>MTD dodało coś węższego, niż większość ludzi sądzi: <strong>sam zapis — kwota, data, kategoria — musi być teraz cyfrowy i utworzony w kompatybilnym oprogramowaniu.</strong> Dokument źródłowy może zostać papierowy.</p>
<h2>Dobra wiadomość, o której mało kto słyszał: kategorie mogą nie być potrzebne</h2>
<p>W tych samych wytycznych jest coś, co czyni całą sprawę znacznie prostszą, niż ludzie się spodziewają.</p>
<p>Jeśli obrót z Twojej działalności nie przekracza <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">£90 000</a>, możesz korzystać z uproszczonej kategoryzacji. Dla sole tradera oznacza to, że wystarczy zapisać, <strong>czy transakcja to przychód, czy wydatek</strong>. Nie paliwo, nie narzędzia, nie koszty biura — po prostu do środka albo na zewnątrz.</p>
<p>Dwie rzeczy do pilnowania. Jeśli masz przychód z wynajmu nieruchomości mieszkalnej w UK, musisz dodatkowo oznaczyć, czy wydatek to <a href="https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change" target="_blank" rel="noopener">restricted finance cost</a>. A jeśli obrót później osiągnie £90 000, trzeba będzie skategoryzować to źródło w pełni — łącznie z rekordami od początku danego roku podatkowego — zanim wyślesz raport kwartalny.</p>
<p>Jeśli nie masz pewności, czy przekroczysz próg, kategoryzuj od początku. Poprawianie roku wstecz jest gorsze niż zrobienie tego porządnie za pierwszym razem.</p>
<h2>Dwie zasady, o których warto wiedzieć</h2>
<p><strong>Kilka działalności to kilka zestawów rekordów.</strong> Jeśli prowadzisz więcej niż jedną działalność jako sole trader, każda potrzebuje <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">własnych rekordów cyfrowych i własnych raportów kwartalnych</a>. Elektryk, który dodatkowo uczy jazdy, prowadzi dwa zestawy, nie jeden.</p>
<p>Z nieruchomościami jest inaczej: wszystkie Twoje nieruchomości w UK liczą się jako jeden „UK property business", więc nie ma osobnych rekordów per mieszkanie. Wyjątkiem są nieruchomości zagraniczne — dla każdej trzeba prowadzić osobne rekordy.</p>
<p><strong>Zakaz kopiuj-wklej między programami.</strong> Kiedy rekord cyfrowy został już wysłany do HMRC w raporcie kwartalnym, <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">nie wolno przenosić go ręcznie</a> — ani przepisując do innej komórki czy programu, ani przez kopiuj-wklej. Jeśli używasz więcej niż jednego programu, muszą być połączone cyfrowo.</p>
<p>Ta zasada łapie ludzi, którzy prowadzą rekordy w arkuszu, a potem przepisują sumy gdzie indziej. To jest dokładnie to, czego przepis zabrania.</p>
<h2>Co więc realnie robić?</h2>
<p>Prosto:</p>
<p>Zapisz kwotę, datę i — jeśli Twój obrót tego wymaga — kategorię, możliwie blisko daty transakcji. Zachowaj paragon albo fakturę, która za tym stoi — papierowo albo cyfrowo, Twój wybór — przez pięć lat. I zadbaj, żeby po tych pięciu latach dało się to jeszcze odczytać.</p>
<p>W sprawach dotyczących Twojej konkretnej sytuacji zapytaj księgowego albo sprawdź GOV.UK. My nie udzielamy porad podatkowych, a strona internetowa nie zajrzy Ci w papiery.</p>
<h2>Gdzie w tym wszystkim TidGo</h2>
<p><a href="/pl">TidGo</a> istnieje dla tej drugiej połowy: paragony i dowody przychodu zbierane na bieżąco, żeby dowód nadal istniał za pięć lat, a księgowy nie pracował na torbie pustych kartek.</p>
<p>Mówimy Ci, że HMRC nie wymaga zdjęć, mimo że zdjęcia to nasza robota — bo uczciwa wersja tego argumentu jest lepsza. Papier blaknie. To wystarczający powód.</p>
<p>TidGo niczego nie wysyła do HMRC i nie jest poradą podatkową. Zbiera i porządkuje rekordy, żeby ten, kto robi Twoje rozliczenie, miał z czego pracować.</p>
<h3>Źródła</h3>
<ul>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax — Create digital records</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/keeping-your-pay-tax-records" target="_blank" rel="noopener">Keeping your pay and tax records</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>
</ul>
<p><em>Sprawdzone: sierpień 2026, wobec wytycznych zaktualizowanych 16 lipca 2026. Wytyczne HMRC się zmieniają — jeśli czytasz to później, zweryfikuj pod powyższymi linkami.</em></p>`,
  ro: `<h1>Poze cu bonuri și MTD: ce cere de fapt HMRC</h1>
<h2>Răspunsul scurt</h2>
<p>Nu. HMRC nu cere să scanezi, să fotografiezi sau să încarci bonuri și facturi individuale pentru Making Tax Digital.</p>
<p>Ce trebuie să fie digital este <strong>înregistrarea tranzacției</strong>: <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">suma, data și categoria</a>. Atât. Trei informații, create și păstrate într-un software compatibil cu Making Tax Digital.</p>
<p>Dacă multe aplicații ți-au spus altceva, merită să știi: firmele care vând scanare au un interes în menținerea acestui mit.</p>
<h2>Dar bonurile tot trebuie păstrate</h2>
<p>Aici e partea pe care răspunsul scurt o omite și care contează mai mult decât titlul.</p>
<p>Ghidul HMRC este explicit: trebuie să continui <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">să ții evidența așa cum o faci în mod normal pentru Self Assessment</a>. Ai în continuare nevoie de documentele originale sau de copii ale lor — extrase bancare, facturi, bonuri — pe baza cărora ți-ai pregătit declarația.</p>
<p>Și trebuie să le păstrezi <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">cel puțin cinci ani de la termenul de 31 ianuarie</a> al anului fiscal respectiv.</p>
<p>Deci obligația nu este <em>fotografiază tot</em>. Obligația este <em>să le mai ai peste cinci ani, dacă HMRC întreabă</em>.</p>
<h2>Și aici hârtia devine problema</h2>
<p>Un bon de casă termic de la un depozit de materiale devine ilizibil cu mult înainte să treacă cinci ani. Oricine a răsturnat vreodată o pungă de bonuri în ianuarie știe cum arată un bon de combustibil de doi ani: o hârtie lucioasă, goală.</p>
<p>Fotografierea bonului nu este o cerință legală. Este pur și simplu singura metodă realistă de a respecta o cerință care ține cinci ani, cu o hârtie care rezistă vreo doi.</p>
<p>Poți ține hârtiile într-un dosar, dacă preferi — HMRC nu are nimic împotrivă. Trebuie doar să se mai vadă ceva pe ele când cineva le citește.</p>
<h2>Este ceva nou?</h2>
<p>Nu — și merită spus clar, pentru că zgomotul din jurul MTD sugerează altceva.</p>
<p>Obligația de a păstra documentele justificative cinci ani exista cu mult înainte de Making Tax Digital. Nimic nu s-a schimbat aici.</p>
<p>Ce a adăugat MTD este mai îngust decât cred majoritatea: <strong>înregistrarea în sine — sumă, dată, categorie — trebuie acum să fie digitală și creată într-un software compatibil.</strong> Documentul justificativ din spate poate rămâne pe hârtie.</p>
<h2>Vestea bună de care puțini au auzit: s-ar putea să nu ai nevoie de categorii</h2>
<p>În același ghid se află ceva ce face totul mult mai simplu decât se așteaptă lumea.</p>
<p>Dacă cifra de afaceri dintr-o sursă de activitate independentă este sub <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">£90.000</a>, poți folosi categorisirea simplificată. Pentru un sole trader asta înseamnă că trebuie doar să înregistrezi <strong>dacă o tranzacție este venit sau cheltuială</strong>. Nu combustibil, nu scule, nu costuri de birou — doar intrare sau ieșire.</p>
<p>Două lucruri de urmărit. Dacă ai venituri din închirierea unei locuințe în UK, trebuie să mergi un pas mai departe și să înregistrezi dacă o cheltuială este <a href="https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change" target="_blank" rel="noopener">restricted finance cost</a>. Iar dacă cifra de afaceri ajunge ulterior la £90.000, va trebui să categorisești complet acea sursă — inclusiv înregistrările de la începutul acelui an fiscal — înainte de a putea trimite o raportare trimestrială.</p>
<p>Dacă nu ești sigur că vei depăși pragul, categorisește complet de la început. Refacerea unui an întreg de înregistrări e mai rea decât să faci lucrurile ca lumea din prima.</p>
<h2>Încă două reguli de știut</h2>
<p><strong>Mai multe activități înseamnă mai multe seturi de înregistrări.</strong> Dacă ai mai mult de o activitate ca sole trader, fiecare are nevoie de <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">propriile înregistrări digitale și propriile raportări trimestriale</a>. Un electrician care predă și școala de șoferi ține două seturi, nu unul.</p>
<p>Cu proprietățile e altfel: toate proprietățile tale din UK contează ca o singură „UK property business", deci nu ai nevoie de înregistrări separate pentru fiecare. Excepția o fac proprietățile din străinătate — pentru fiecare sunt necesare înregistrări separate.</p>
<p><strong>Fără copy-paste între programe.</strong> După ce o înregistrare digitală a fost trimisă la HMRC într-o raportare trimestrială, <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">nu ai voie să o muți manual</a> — nici rescriind-o în altă celulă sau alt program, nici prin copy-paste. Dacă folosești mai multe programe, ele trebuie legate digital.</p>
<p>Regula asta îi prinde pe cei care țin evidența într-un spreadsheet și apoi tastează totalurile în altă parte. Exact asta interzice regula.</p>
<h2>Ce ai de făcut, concret?</h2>
<p>Simplu:</p>
<p>Înregistrează suma, data și — dacă cifra ta de afaceri o cere — categoria, cât mai aproape de data tranzacției. Păstrează bonul sau factura din spate — pe hârtie sau digital, cum vrei — timp de cinci ani. Și asigură-te că peste cinci ani se mai poate citi.</p>
<p>Pentru orice ține de situația ta concretă, întreabă-ți contabilul sau verifică GOV.UK. Noi nu oferim consultanță fiscală, iar un site nu îți poate vedea actele.</p>
<h2>Unde se încadrează TidGo</h2>
<p><a href="/ro">TidGo</a> există pentru a doua jumătate: bonuri și dovezi de venit strânse pe parcurs, ca dovada să existe și peste cinci ani, iar contabilul să nu lucreze cu o pungă de hârtii goale.</p>
<p>Îți spunem că HMRC nu cere fotografii, deși fotografiile sunt exact ce facem noi — pentru că versiunea onestă a argumentului este cea mai bună. Hârtia se decolorează. Atât e de ajuns.</p>
<p>TidGo nu trimite nimic la HMRC și nu este consultanță fiscală. Strânge și ordonează înregistrările, ca cel care face raportarea să aibă ceva curat de la care să pornească.</p>
<section class="article-sources">
<strong>Surse</strong>
<ul>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax — Create digital records</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/keeping-your-pay-tax-records" target="_blank" rel="noopener">Keeping your pay and tax records</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>
</ul>
<p><em>Verificat: august 2026, față de ghidul actualizat la 16 iulie 2026. Ghidurile HMRC se schimbă — dacă citești mai târziu, verifică la linkurile de mai sus.</em></p>
</section>`,
  lt: `<h1>Kvitų nuotraukos ir MTD: ko iš tikrųjų reikalauja HMRC</h1>
<h2>Trumpas atsakymas</h2>
<p>Ne. HMRC nereikalauja skenuoti, fotografuoti ar įkelti atskirų kvitų ir sąskaitų dėl Making Tax Digital.</p>
<p>Skaitmeninis turi būti <strong>sandorio įrašas</strong>: <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">suma, data ir kategorija</a>. Tiek. Trys duomenys, sukurti ir saugomi su MTD suderinamoje programinėje įrangoje.</p>
<p>Jei nemažai programėlių tau sakė kitaip — verta žinoti, kad skenavimą parduodančios įmonės yra suinteresuotos šiuo mitu.</p>
<h2>Bet kvitus vis tiek privalai turėti</h2>
<p>Štai dalis, kurią trumpas atsakymas praleidžia ir kuri svarbesnė už antraštę.</p>
<p>HMRC gairės aiškios: privalai toliau <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">tvarkyti apskaitą taip, kaip įprastai darai Self Assessment tikslais</a>. Tau vis tiek reikia originalių dokumentų arba jų kopijų — banko išrašų, sąskaitų, kvitų — pagal kuriuos parengei deklaraciją.</p>
<p>Ir privalai juos saugoti <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">bent penkerius metus po tų mokestinių metų sausio 31 d. termino</a>.</p>
<p>Taigi prievolė yra ne <em>nufotografuok viską</em>. Prievolė yra <em>turėk tai po penkerių metų, jei HMRC paklaus</em>.</p>
<h2>Ir čia popierius tampa problema</h2>
<p>Terminis kasos kvitas iš statybinių medžiagų sandėlio tampa neįskaitomas gerokai anksčiau nei praeina penkeri metai. Kiekvienas, kas kada nors sausį išvertė maišą kvitų, žino, kaip atrodo dvejų metų senumo kuro kvitas: blizgus, tuščias lapelis.</p>
<p>Kvito fotografavimas nėra teisinis reikalavimas. Tai tiesiog vienintelis realus būdas įvykdyti penkerius metus galiojantį reikalavimą naudojant popierių, kuris išsilaiko maždaug dvejus.</p>
<p>Popierių gali laikyti segtuve, jei taip patogiau — HMRC tam neprieštarauja. Tik ant jo dar turi kažkas matytis, kai kas nors į jį pažiūrės.</p>
<h2>Ar tai kas nors nauja?</h2>
<p>Ne — ir tai verta pasakyti aiškiai, nes triukšmas aplink MTD leidžia manyti kitaip.</p>
<p>Prievolė saugoti pagrindžiančius dokumentus penkerius metus egzistavo gerokai anksčiau nei Making Tax Digital. Šioje vietoje niekas nepasikeitė.</p>
<p>MTD pridėjo kai ką siauresnio, nei dauguma mano: <strong>pats įrašas — suma, data, kategorija — dabar turi būti skaitmeninis ir sukurtas suderinamoje programinėje įrangoje.</strong> Už jo esantis dokumentas gali likti popierinis.</p>
<h2>Gera žinia, apie kurią mažai kas girdėjo: kategorijų gali ir neprireikti</h2>
<p>Tose pačiose gairėse yra kai kas, kas visą reikalą padaro kur kas paprastesnį, nei žmonės tikisi.</p>
<p>Jei tavo savarankiškos veiklos šaltinio apyvarta mažesnė nei <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">£90 000</a>, gali naudoti supaprastintą kategorizavimą. Sole trader atveju tai reiškia, kad tereikia užfiksuoti, <strong>ar sandoris yra pajamos, ar išlaidos</strong>. Ne kuras, ne įrankiai, ne biuro išlaidos — tiesiog į vidų arba į išorę.</p>
<p>Du dalykai, kuriuos verta stebėti. Jei gauni pajamų iš gyvenamosios paskirties nuomos UK, turi žengti dar vieną žingsnį ir nurodyti, ar išlaida yra <a href="https://www.gov.uk/guidance/income-tax-when-you-rent-out-a-property-working-out-your-rental-income#tax-relief-change" target="_blank" rel="noopener">restricted finance cost</a>. O jei apyvarta vėliau pasieks £90 000, tą šaltinį reikės sukategorizuoti visa apimtimi — įskaitant įrašus nuo tų mokestinių metų pradžios — prieš siunčiant ketvirtinę ataskaitą.</p>
<p>Jei nesi tikras, ar peržengsi ribą, kategorizuok iš karto pilnai. Perdaryti metų įrašus blogiau, nei vieną kartą padaryti kaip reikia.</p>
<h2>Dar dvi taisyklės, kurias verta žinoti</h2>
<p><strong>Kelios veiklos — keli įrašų rinkiniai.</strong> Jei turi daugiau nei vieną sole trader veiklą, kiekvienai reikia <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">savų skaitmeninių įrašų ir savų ketvirtinių ataskaitų</a>. Elektrikas, kuris dar moko vairuoti, veda du rinkinius, ne vieną.</p>
<p>Su nekilnojamuoju turtu kitaip: visi tavo objektai UK laikomi viena „UK property business", tad atskirų įrašų kiekvienam nereikia. Išimtis — užsienyje esantis turtas: kiekvienam objektui reikia atskirų įrašų.</p>
<p><strong>Jokio kopijuoti-įklijuoti tarp programų.</strong> Kai skaitmeninis įrašas jau išsiųstas HMRC ketvirtinėje ataskaitoje, <a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">negalima jo perkelti rankiniu būdu</a> — nei perrašant į kitą langelį ar kitą programą, nei kopijuojant ir įklijuojant. Jei naudoji daugiau nei vieną programą, jos turi būti susietos skaitmeniškai.</p>
<p>Ši taisyklė pagauna tuos, kurie veda įrašus skaičiuoklėje, o paskui sumas surenka kitur. Būtent tai ir draudžiama.</p>
<h2>Tai ką realiai daryti?</h2>
<p>Paprastai:</p>
<p>Užfiksuok sumą, datą ir — jei to reikalauja tavo apyvarta — kategoriją kuo arčiau sandorio datos. Išsaugok už jo esantį kvitą ar sąskaitą — popieriuje ar skaitmeniškai, tavo pasirinkimas — penkerius metus. Ir pasirūpink, kad po tų penkerių metų dar būtų įmanoma perskaityti.</p>
<p>Dėl visko, kas susiję su tavo konkrečia situacija, pasitark su buhalteriu arba patikrink GOV.UK. Mes mokesčių konsultacijų neteikiame, o interneto svetainė į tavo dokumentus nepažiūrės.</p>
<h2>Kur čia TidGo</h2>
<p><a href="/lt">TidGo</a> egzistuoja dėl antrosios dalies: kvitai ir pajamų įrodymai renkami eigoje, kad įrodymas dar egzistuotų po penkerių metų, o buhalteris nedirbtų su maišu tuščių lapelių.</p>
<p>Sakome tau, kad HMRC nereikalauja nuotraukų, nors nuotraukos — būtent tai, ką mes darome. Nes sąžininga argumento versija yra geresnė. Popierius išblunka. To pakanka.</p>
<p>TidGo nieko nesiunčia į HMRC ir nėra mokesčių konsultacija. Ji surenka ir sutvarko įrašus, kad tas, kas teiks tavo ataskaitas, turėtų nuo ko pradėti.</p>
<h3>Šaltiniai</h3>
<ul>
<li><a href="https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records" target="_blank" rel="noopener">Use Making Tax Digital for Income Tax — Create digital records</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/keeping-your-pay-tax-records" target="_blank" rel="noopener">Keeping your pay and tax records</a> — GOV.UK</li>
<li><a href="https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Penalties for Making Tax Digital for Income Tax</a> — GOV.UK</li>
</ul>
<p><em>Patikrinta: 2026 m. rugpjūtis, pagal 2026 m. liepos 16 d. atnaujintas gaires. HMRC gairės keičiasi — jei skaitai vėliau, pasitikrink pagal nuorodas aukščiau.</em></p>`
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
      <p>CIS nie dziala tak samo jak zwykla mala firma wysylajaca faktury klientom. Jezeli aplikacja wymusza zly sposob zapisu, księgowy musi to pozniej odkrecać.</p>

      <h2>Mit 1: musisz wystawiac formalne faktury main contractorowi</h2>
      <p>W wielu przypadkach CIS subcontractor nie pracuje jak klasyczna firma B2B z pelnym procesem fakturowania. Main contractor wylicza zaplate, potraca CIS u zrodla i wystawia CIS payment and deduction statement albo remittance note.</p>
      <p>To ten dokument jest kluczowy. Pokazuje kwote brutto, potracenie CIS i kwote netto wyplacona Tobie. Dlatego praktycznie potrzebujesz prostego miejsca na payslipy, remittance slips, paragony za paliwo, narzedzia i materialy, a nie wielkiego systemu do fakturowania po kazdej zmianie.</p>

      <h2>Mit 2: do MTD wpisuje sie dochod netto po CIS</h2>
      <p>To najgrozniejsza pomylka. Do rekordow MTD przychodem jest kwota brutto przed potraceniem CIS. Jezeli dokument pokazuje &pound;2,000 brutto, &pound;400 potracenia CIS i &pound;1,600 wyplaty, rekord przychodu zaczyna sie od &pound;2,000, nie od &pound;1,600.</p>
      <p>Potracenie CIS to podatek zaplacony z gory. Nie jest zwyklym kosztem biznesowym i nie powinien po cichu zmniejszac obrotu w rekordach pod kwartalne aktualizacje.</p>
      <p>HMRC dostaje informacje o potraceniach CIS od contractorow. Księgowy moze to uzgodnic na koniec roku. TidGo pomaga trzymac dowod przychodu brutto i informacje o potraceniu razem, zeby dane byly czyste.</p>

      <h2>Mit 3: potrzebujesz drogiego kombajnu ksiegowego</h2>
      <p>MTD nie oznacza, ze kazdy tradesperson potrzebuje panelu ze stock tracking, customer portal i rozbudowanymi szablonami faktur. Pierwsza praktyczna warstwa jest prostsza: cyfrowe rekordy przychodow, wydatkow i dowodow.</p>
      <p>Dla wielu osob w CIS oznacza to paliwo, parking, narzedzia, materialy, telefon, CIS statements i dowody przychodu. Jezeli to jest uporzadkowane, księgowy albo software MTD ma z czego pracowac.</p>

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
      <p><strong>Software authorisation:</strong> you open your chosen software, choose “connect to HMRC”, sign in with your Government Gateway or GOV.UK One Login details, and give permission for that software to talk to HMRC.</p>
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
    title: "HMRC automatycznie zapisało Cię do MTD? Co to znaczy i co zrobić dalej",
    lead: "Od września 2026 HMRC może automatycznie zapisać część podatników do Making Tax Digital. To nie oznacza, że jakakolwiek aplikacja została podłączona za Ciebie.",
    checked: "Sprawdzone: sierpień 2026. Guidance HMRC nadal się zmienia, więc jeśli czytasz później, sprawdź aktualną wersję na GOV.UK.",
    html: `
      <h2>Krótka wersja</h2>
      <p>Jeśli HMRC wysłało Ci list, że zostałeś automatycznie zapisany do Making Tax Digital for Income Tax, oznacza to, że HMRC umieściło Cię w systemie MTD na podstawie ostatniego Self Assessment i qualifying income powyżej progu.</p>
      <p>To <strong>nie</strong> znaczy, że TidGo, Xero, FreeAgent albo jakakolwiek inna aplikacja została automatycznie podłączona.</p>
      <p>Nadal musisz wybrać compatible software, połączyć je z HMRC, prowadzić cyfrowe rekordy i wysłać zaległe albo bieżące quarterly updates.</p>

      <h2>Dlaczego HMRC może to zrobić</h2>
      <p>Dla roku 2026/27 MTD for Income Tax zaczyna się od osób z qualifying income powyżej &pound;50,000. HMRC informuje, że może automatycznie zapisać osoby, które powinny być w MTD, ale same się nie zapisały.</p>
      <p>To dotyczy Twojego statusu w HMRC. Nie dotyczy automatycznego wyboru programu.</p>

      <h2>HMRC enrolment to nie software authorisation</h2>
      <p>Są dwie osobne warstwy:</p>
      <p><strong>HMRC enrolment:</strong> HMRC decyduje, że jesteś w MTD i tworzy obowiązki kwartalne.</p>
      <p><strong>Software authorisation:</strong> otwierasz wybrane oprogramowanie, wybierasz “connect to HMRC”, logujesz się przez Government Gateway albo GOV.UK One Login i dajesz zgodę, żeby program komunikował się z HMRC.</p>
      <p>Bez tego drugiego kroku program nie odczyta obligations i nie wyśle updates.</p>

      <h2>Co zrobić po otrzymaniu listu</h2>
      <ol>
        <li>Przeczytaj list HMRC i sprawdź rok podatkowy oraz próg dochodu.</li>
        <li>Zaloguj się do HMRC online services i sprawdź Self Assessment oraz MTD details.</li>
        <li>Wybierz compatible software albo porozmawiaj z księgowym.</li>
        <li>Autoryzuj software przez HMRC w procesie connect.</li>
        <li>Sprawdź open obligations i nadrób zaległe quarterly updates.</li>
      </ol>

      <h2>Jeśli pierwszy termin już minął</h2>
      <p>Pierwszy termin quarterly update za 2026/27 minął 7 sierpnia 2026. HMRC mówi, że w 2026/27 nie będzie penalty points za spóźnione quarterly updates, ale zaległe updates nadal trzeba wysłać przed rocznym zeznaniem.</p>
      <p>O sytuacji po terminie 7 sierpnia piszemy osobno w <a href="__MISSED_HREF__">artykule o missed quarterly update</a>.</p>

      <h2>Gdzie w tym TidGo</h2>
      <p>TidGo pomaga trzymać cyfrowe rekordy: paragony, dowody przychodu, CIS payslips i uporządkowane summary. TidGo testuje połączenie MTD, czekając na production approval HMRC. Do czasu zatwierdzenia TidGo jest warstwą zbierania rekordów i przekazania księgowemu.</p>
      <p>Najważniejszy nawyk jest ten sam: zbieraj dowody na bieżąco, pilnuj dat i kwot, i daj księgowemu czyste rekordy zanim przyjdzie kwartalna presja.</p>

      <h2>Uwaga o GOV.UK</h2>
      <p>Niektóre starsze strony GOV.UK mogą nadal mówić, że HMRC nie będzie automatycznie zapisywać klientów. Nowsze guidance HMRC zawiera już wording o automatic sign-up i wzór listu. Zawsze sprawdzaj najnowsze guidance HMRC z linków poniżej.</p>
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
      <p><strong>Software authorisation:</strong> deschizi software-ul ales, alegi “connect to HMRC”, te autentifici cu Government Gateway sau GOV.UK One Login si dai permisiune software-ului sa comunice cu HMRC.</p>
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
    title: "HMRC automatiškai įtraukė jus į MTD? Ką tai reiškia ir ką daryti",
    lead: "Nuo 2026 m. rugsėjo HMRC gali automatiškai įtraukti kai kuriuos mokesčių mokėtojus į Making Tax Digital. Tai automatiškai neprijungia jokios programos.",
    checked: "Patikrinta: 2026 m. rugpjūtis. HMRC gairės dar keičiasi, todėl jei skaitote vėliau, pasitikrinkite GOV.UK.",
    html: `
      <h2>Trumpa versija</h2>
      <p>Jei HMRC atsiuntė laišką, kad jus automatiškai įtraukė į Making Tax Digital for Income Tax, tai reiškia, kad HMRC įtraukė jus į MTD sistemą pagal paskutinę Self Assessment deklaraciją ir qualifying income virš ribos.</p>
      <p>Tai <strong>nereiškia</strong>, kad TidGo, Xero, FreeAgent ar kita programa buvo automatiškai prijungta už jus.</p>
      <p>Vis tiek turite pasirinkti suderinamą programinę įrangą, prijungti ją prie HMRC, tvarkyti skaitmeninius įrašus ir pateikti einamus arba praleistus quarterly updates.</p>

      <h2>Kodėl HMRC gali tai padaryti</h2>
      <p>2026/27 metais MTD for Income Tax prasideda žmonėms, kurių qualifying income viršija &pound;50,000. HMRC nurodo, kad gali automatiškai įtraukti žmones, kurie turėtų būti MTD sistemoje, bet patys neužsiregistravo.</p>
      <p>Tai susiję su jūsų HMRC statusu, o ne su jūsų pasirinkta programa.</p>

      <h2>HMRC įtraukimas nėra programos autorizavimas</h2>
      <p>Yra du atskiri sluoksniai:</p>
      <p><strong>HMRC enrolment:</strong> HMRC nusprendžia, kad esate MTD sistemoje, ir sukuria ketvirtines obligations.</p>
      <p><strong>Software authorisation:</strong> atidarote pasirinktą programą, pasirenkate “connect to HMRC”, prisijungiate su Government Gateway arba GOV.UK One Login ir leidžiate programai bendrauti su HMRC.</p>
      <p>Be antro žingsnio programa negali perskaityti obligations ir pateikti updates.</p>

      <h2>Ką daryti gavus laišką</h2>
      <ol>
        <li>Perskaitykite HMRC laišką ir patikrinkite mokestinius metus bei pajamų ribą.</li>
        <li>Prisijunkite prie HMRC online services ir patikrinkite Self Assessment bei MTD details.</li>
        <li>Pasirinkite suderinamą programą arba pasikalbėkite su buhalteriu.</li>
        <li>Autorizuokite programą per HMRC connect procesą.</li>
        <li>Patikrinkite open obligations ir pateikite praleistus quarterly updates.</li>
      </ol>

      <h2>Jei pirmasis terminas jau praėjo</h2>
      <p>Pirmasis 2026/27 quarterly update terminas buvo 2026 m. rugpjūčio 7 d. HMRC sako, kad 2026/27 metais penalty points už pavėluotus quarterly updates netaikomi, bet praleisti updates vis tiek turi būti pateikti prieš metų pabaigos deklaraciją.</p>
      <p>Apie rugpjūčio 7 d. situaciją skaitykite <a href="__MISSED_HREF__">missed quarterly update gide</a>.</p>

      <h2>Kur čia TidGo</h2>
      <p>TidGo padeda tvarkyti skaitmeninius įrašus: kvitus, pajamų įrodymus, CIS payslipus ir tvarkingas suvestines. TidGo testuoja MTD jungtį ir laukia HMRC production approval. Kol jo nėra, TidGo yra įrašų rinkimo ir perdavimo buhalteriui sluoksnis.</p>

      <h2>Pastaba apie GOV.UK</h2>
      <p>Kai kurie senesni GOV.UK puslapiai dar gali sakyti, kad HMRC automatiškai neįtrauks klientų. Naujesnės HMRC gairės jau mini automatic sign-up ir laiško pavyzdį. Visada tikrinkite naujausias HMRC nuorodas žemiau.</p>
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

      
      <p>If you're reading this because you couldn't find where to log in for MTD — you're in the right place, just for the wrong reason.</p><h2>Does having a Government Gateway account mean I'm signed up for MTD?</h2>
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
        <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">HMRC online services: sign in or set up an account — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/accessing-hmrc-online-services-using-govuk-one-login" target="_blank" rel="noopener">Accessing HMRC online services using GOV.UK One Login — GOV.UK</a>
        <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">Check how to register for Self Assessment — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/use-software-to-send-income-tax-updates" target="_blank" rel="noopener">Use software to send Income Tax updates — GOV.UK</a>
        <a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income — GOV.UK</a>
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
            
      <p>Jeśli tu trafiłeś bo szukałeś gdzie się zalogować do MTD — jesteś we właściwym miejscu, tylko z niewłaściwego powodu.</p><h2>Czy jeśli mam Government Gateway, to jestem już zapisany do MTD?</h2>
            <p>Nie. To dwie zupełnie różne rzeczy, a mylenie ich to obecnie jeden z najczęstszych błędów.</p>
            <p>Konto Government Gateway to <strong>login</strong>. Nazwa użytkownika i hasło, które wpuszczają Cię do usług online HMRC — i tyle. Nie rejestruje Cię do niczego, nie mówi urzędowi, czym się zajmujesz, i nie umieszcza Cię w Making Tax Digital.</p>
            <p>Rejestracja do MTD to <strong>osobna czynność</strong>, wykonywana w osobnej usłudze, po której HMRC wyznacza Ci konkretne obowiązki. Dopóki jej nie zrobisz, nie ma Cię w systemie — niezależnie od tego, ile lat masz to konto.</p>
            <h2>Czym właściwie jest Government Gateway?</h2>
            <p>Najprościej: to klucz do drzwi wejściowych HMRC online. Jeśli kiedykolwiek składałeś Self Assessment przez internet, korzystałeś z aplikacji HMRC albo wnioskowałeś o tax-free childcare — już je masz.</p>
            <p>To po prostu dane logowania. Co jest za tymi drzwiami, zależy wyłącznie od tego, do czego osobno się zarejestrowałeś.</p>
            <p>Jedna rzecz warta uwagi: HMRC stopniowo przenosi nowych użytkowników na <strong>GOV.UK One Login</strong>, który zastępuje Government Gateway w usługach rządowych. Jeśli zakładasz konto teraz, możesz zobaczyć właśnie One Login. Zasada jest identyczna — to sposób logowania, nie rejestracja.</p>
            <h2>Trzy kroki, które ludzie mylą</h2>
            <p>Prawie wszyscy je ze sobą mieszają, więc rozpiszmy je osobno, po kolei:</p>
            <p><strong>Konto do logowania</strong> — Government Gateway albo GOV.UK One Login. Same dane dostępowe.</p>
            <p><strong>Rejestracja do Self Assessment</strong> — to informuje HMRC, że masz dochód do rozliczenia. Dostajesz UTR, dziesięciocyfrowy numer, który zostaje z Tobą na całe życie.</p>
            <p><strong>Rejestracja do Making Tax Digital</strong> — osobna usługa, po pierwszych dwóch krokach, która wprowadza Cię w raportowanie kwartalne.</p>
            <p>Możesz mieć krok 1 bez kroku 2. Możesz mieć kroki 1 i 2 bez kroku 3. Większość ludzi, którzy myślą, że „mają wszystko załatwione", zrobiła pierwszy i drugi, a zakłada, że trzeci zrobił się sam.</p>
            <h2>Jeśli masz już konto Government Gateway</h2>
            <p>Krok 1 masz za sobą. Zostaje:</p>
            <p><strong>Sprawdź, czy jesteś zarejestrowany do Self Assessment.</strong> Jeśli co roku składasz zeznanie — jesteś. Jeśli nigdy nie składałeś, najprawdopodobniej nie jesteś i trzeba zacząć od rejestracji.</p>
            <p><strong>Sprawdź, czy MTD w ogóle Cię dotyczy.</strong> To zależy od Twojego <a href="/pl/mtd/qualifying-income">qualifying income</a> — czyli przychodu brutto przed kosztami, przy czym działalność i wynajem sumują się razem. To nie jest Twój zysk.</p>
            <p><strong>Zarejestruj się do MTD, używając tego samego loginu.</strong> <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Usługa rejestracji jest na GOV.UK</a>. Używasz tej samej nazwy użytkownika i hasła, które dostałeś przy rejestracji do Self Assessment. HMRC sprawdza Twoje uprawnienia na podstawie podanych danych. Jeśli masz księgowego z agent services account, może zarejestrować Cię za Ciebie.</p>
            <h2>Jeśli nie masz konta Government Gateway</h2>
            <p>Sporo osób go nie ma i nie ma w tym nic dziwnego — jeśli zawsze pracowałeś na etacie, dopiero zaczynasz na swoim albo ktoś inny zawsze zajmował się Twoimi podatkami, nie było powodu, żeby je zakładać.</p>
            <p>Tutaj kolejność ma znaczenie:</p>
            <p><strong>Najpierw załóż konto.</strong> Wejdź na <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">stronę logowania HMRC</a> i wybierz utworzenie danych dostępowych. Potrzebujesz adresu e-mail, który faktycznie sprawdzasz — HMRC wyśle na niego kod potwierdzający. Jako sole trader wybierz konto typu indywidualnego/osobistego; formalnie Ty i Twoja działalność to ta sama osoba.</p>
            <p><strong>Potem zarejestruj się do Self Assessment.</strong> <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">Robi się to na GOV.UK</a> i zajmuje jakieś piętnaście minut. Przygotuj numer National Insurance, datę rozpoczęcia pracy na swoim i jednozdaniowy opis tego, czym się zajmujesz — „hydraulik" albo „kierowca vana" w zupełności wystarczy.</p>
            <p><strong>Potem czekaj na UTR, który przyjdzie pocztą.</strong> To jest ten moment, który ludzi zaskakuje: Unique Taxpayer Reference przychodzi na papierze, zwykle w ciągu około dziesięciu dni roboczych, dłużej jeśli mieszkasz za granicą. Bez niego nie zamkniesz całości, a odświeżanie strony nic nie przyspieszy.</p>
            <p><strong>Potem zarejestruj się do MTD</strong>, jeśli Twoje qualifying income oznacza, że Cię to dotyczy.</p>
            <p>Jeśli zaczynasz od zera, zaplanuj kilka tygodni — nie jedno popołudnie.</p>
            <h2>Co się dzieje po rejestracji do MTD?</h2>
            <p>To jest część, której prawie nikt nie tłumaczy, więc proszę bardzo.</p>
            <p>Po rejestracji HMRC wyznacza Ci <strong>obowiązki (obligations)</strong> — konkretną listę tego, co masz raportować i kiedy. I rzecz kluczowa: są one wyznaczane <strong>osobno dla każdego źródła dochodu</strong>. Dwie działalności i jedna nieruchomość to trzy osobne zestawy obowiązków raportowych, a nie jedno wspólne rozliczenie.</p>
            <p>Każdy z nich wymaga własnych kwot, uzupełnionych z Twoich rekordów i wysłanych przez oprogramowanie kompatybilne z MTD. Nie ma formularza na stronie HMRC, w który dałoby się je wpisać.</p>
            <p>Z czego wynika konsekwencja, którą ludzie kompletnie przeoczają: <strong>kiedy już jesteś w MTD, roczne rozliczenie też musi przejść przez kompatybilne oprogramowanie albo przez księgowego.</strong> Dawna droga „zrobię to sam na stronie HMRC" przestaje być dla Ciebie dostępna. Dotyczy to zarówno tych, których przepisy złapały automatycznie, jak i tych, którzy zgłosili się wcześniej dobrowolnie.</p>
            <p>To nie jest powód, żeby unikać rejestracji — dla większości ludzi i tak nie jest ona dobrowolna. Ale warto o tym wiedzieć wcześniej, zwłaszcza jeśli planujesz zgłosić się przed swoim terminem.</p>
            <h2>A jeśli coś przeoczyłem?</h2>
            <p>Jeśli nie masz pewności, na czym stoisz, uczciwa odpowiedź brzmi: strona internetowa Ci tego nie powie — łącznie z tą. Księgowy sprawdzi Twoją sytuację w kilka minut, a zasady znajdziesz w oficjalnych wytycznych HMRC.</p>
            <p>My nie udzielamy porad podatkowych. Możemy natomiast powiedzieć jedno: nic z tego nie robi się łatwiejsze przez odkładanie, a etap „list przychodzi pocztą" sprawia, że kalendarz nie jest w pełni pod Twoją kontrolą.</p>
            <h2>Co można zrobić w międzyczasie</h2>
            <p>Kiedy czekasz na UTR albo zastanawiasz się, czy próg Cię łapie, jest jedna rzecz, która pomaga w każdym scenariuszu: zacznij zapisywać przychody i wydatki cyfrowo już teraz, zamiast trzymać je w reklamówce pod siedzeniem.</p>
            <p>Do tego właśnie służy <a href="/pl">TidGo</a> — paragony, dowody przychodu i CIS payslipy zbierane na bieżąco, w ośmiu językach, gotowe do przekazania temu, kto ostatecznie będzie wysyłał raporty. TidGo niczego nie wysyła do HMRC i nie jest poradą podatkową. Sprawia tylko, że kiedy przyjdzie termin, rekordy istnieją.</p>
            <section class="article-sources">
              <strong>Źródła</strong>
                    <p><a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/use-software-to-send-income-tax-updates" target="_blank" rel="noopener">Use software to send Income Tax updates</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income</a> — GOV.UK</p>
                    <span><em>Sprawdzone: sierpień 2026. Wytyczne HMRC i systemy logowania się zmieniają — jeśli czytasz to później, zweryfikuj pod powyższymi linkami.</em></span>
                  </section>
      ${pageCta()}
    </article>
  `;
}

function mtdGovernmentGatewayArticleRO() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Government Gateway și MTD: să ai cont nu înseamnă că ești înscris</h1>
            
      <p>Dacă ai ajuns aici pentru că nu găseai unde să te loghezi pentru MTD — ești în locul potrivit, doar din motivul greșit.</p><h2>Dacă am cont Government Gateway, înseamnă că sunt înscris în MTD?</h2>
            <p>Nu. Sunt două lucruri complet diferite, iar confuzia dintre ele este acum una dintre cele mai frecvente greșeli.</p>
            <p>Contul Government Gateway este <strong>o autentificare</strong>. Numele de utilizator și parola care îți dau acces la serviciile online HMRC — atât. Nu te înregistrează la nimic, nu îi spune fiscului cu ce te ocupi și nu te introduce în Making Tax Digital.</p>
            <p>Înscrierea în MTD este <strong>o acțiune separată</strong>, făcută printr-un serviciu separat, după care HMRC îți stabilește obligații concrete. Până nu o faci, nu ești în sistem — indiferent de câți ani ai contul.</p>
            <h2>Ce este, pe scurt, Government Gateway?</h2>
            <p>Gândește-te la el ca la cheia de la ușa din față a HMRC online. Dacă ai depus vreodată o declarație Self Assessment online, ai folosit aplicația HMRC sau ai cerut tax-free childcare — deja ai unul.</p>
            <p>Sunt doar date de acces. Ce se află dincolo de ușă depinde exclusiv de ce ai înregistrat separat.</p>
            <p>Un lucru de știut: HMRC mută treptat utilizatorii noi pe <strong>GOV.UK One Login</strong>, care înlocuiește Government Gateway în serviciile guvernamentale. Dacă îți faci cont acum, s-ar putea să vezi One Login. Principiul e identic — este o metodă de autentificare, nu o înregistrare.</p>
            <h2>Cei trei pași pe care lumea îi confundă</h2>
            <p>Aproape toată lumea îi amestecă, așa că iată-i separat, în ordine:</p>
            <p><strong>Un cont de autentificare</strong> — Government Gateway sau GOV.UK One Login. Doar credențiale.</p>
            <p><strong>Înregistrarea la Self Assessment</strong> — îi spune HMRC că ai venituri de declarat. Primești un UTR, un număr din zece cifre care rămâne al tău pe viață.</p>
            <p><strong>Înscrierea în Making Tax Digital</strong> — serviciu separat, după primii doi pași, care te introduce în raportarea trimestrială.</p>
            <p>Poți avea pasul 1 fără pasul 2. Poți avea pașii 1 și 2 fără pasul 3. Majoritatea celor care cred că „au totul pus la punct" au făcut primii doi și presupun că al treilea s-a întâmplat de la sine.</p>
            <h2>Dacă ai deja cont Government Gateway</h2>
            <p>Pasul 1 este bifat. Mai rămâne:</p>
            <p><strong>Verifică dacă ești înregistrat la Self Assessment.</strong> Dacă depui declarație în fiecare an, ești. Dacă nu ai depus niciodată, cel mai probabil nu ești și trebuie să începi cu înregistrarea.</p>
            <p><strong>Verifică dacă MTD ți se aplică.</strong> Depinde de <a href="/ro/mtd/qualifying-income">qualifying income</a> — venitul brut înainte de cheltuieli, cu activitatea independentă și chiriile adunate. Nu este profitul tău.</p>
            <p><strong>Înscrie-te în MTD, folosind aceleași date de autentificare.</strong> <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Serviciul de înscriere este pe GOV.UK</a>. Folosești același user ID și aceeași parolă primite la înregistrarea pentru Self Assessment. HMRC verifică eligibilitatea pe baza datelor furnizate. Dacă ai contabil cu agent services account, te poate înscrie el.</p>
            <h2>Dacă nu ai cont Government Gateway</h2>
            <p>Mulți oameni nu au și nu e nimic neobișnuit — dacă ai lucrat mereu pe PAYE, dacă abia începi pe cont propriu sau dacă altcineva s-a ocupat mereu de impozitele tale, nu ai avut motiv să îți faci unul.</p>
            <p>Aici ordinea contează:</p>
            <p><strong>Întâi fă-ți cont.</strong> Intră pe <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">pagina de autentificare HMRC</a> și alege crearea datelor de acces. Îți trebuie o adresă de email pe care chiar o verifici — HMRC trimite acolo un cod de confirmare. Ca sole trader, alege tipul de cont individual/personal; legal, tu și activitatea ta sunteți aceeași persoană.</p>
            <p><strong>Apoi înregistrează-te la Self Assessment.</strong> <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">Se face pe GOV.UK</a> și durează cam cincisprezece minute. Pregătește numărul de National Insurance, data la care ai început pe cont propriu și o descriere de o frază a activității — „instalator" sau „șofer de furgonetă" este suficient.</p>
            <p><strong>Apoi așteaptă UTR-ul, care vine prin poștă.</strong> Aici se împiedică lumea: Unique Taxpayer Reference vine pe hârtie, de obicei în aproximativ zece zile lucrătoare, mai mult dacă locuiești în afara țării. Fără el nu poți închide procesul, iar reîmprospătarea paginii nu grăbește nimic.</p>
            <p><strong>Apoi înscrie-te în MTD</strong>, dacă qualifying income înseamnă că ți se aplică.</p>
            <p>Dacă pornești de la zero, planifică câteva săptămâni — nu o după-amiază.</p>
            <h2>Ce se întâmplă după înscrierea în MTD?</h2>
            <p>Aceasta este partea pe care aproape nimeni nu o explică.</p>
            <p>După înscriere, HMRC îți stabilește <strong>obligații (obligations)</strong> — o listă concretă cu ce trebuie să raportezi și când. Esențial: ele se stabilesc <strong>separat pentru fiecare sursă de venit</strong>. Două activități și o proprietate închiriată înseamnă trei seturi separate de obligații de raportare, nu o declarație comună.</p>
            <p>Fiecare cere propriile cifre, completate din înregistrările tale și trimise printr-un software compatibil cu MTD. Nu există niciun formular pe site-ul HMRC în care să le poți introduce.</p>
            <p>De aici rezultă consecința pe care lumea o ratează complet: <strong>odată intrat în MTD, și declarația anuală trebuie să treacă printr-un software compatibil sau prin contabil.</strong> Vechea variantă „o fac singur pe site-ul HMRC" nu îți mai este disponibilă. Asta este valabil atât dacă regulile te-au prins automat, cât și dacă te-ai înscris voluntar mai devreme.</p>
            <p>Nu e un motiv să eviți înscrierea — pentru majoritatea oamenilor oricum nu este opțională. Dar merită să știi înainte, mai ales dacă plănuiești să te înscrii înaintea termenului tău.</p>
            <h2>Dacă am ratat ceva?</h2>
            <p>Dacă nu ești sigur unde te afli, răspunsul onest este că un site nu îți poate spune — inclusiv acesta. Contabilul tău îți verifică situația în câteva minute, iar regulile sunt în ghidurile oficiale HMRC.</p>
            <p>Noi nu oferim consultanță fiscală. Putem spune însă un lucru: nimic din toate astea nu devine mai ușor dacă amâni, iar etapa „scrisoarea vine prin poștă" face ca termenele să nu fie complet sub controlul tău.</p>
            <h2>Ce poți face între timp</h2>
            <p>Cât aștepți UTR-ul sau te lămurești dacă pragul te prinde, există un lucru care ajută în orice scenariu: începe să îți notezi veniturile și cheltuielile digital chiar acum, în loc să le ții într-o pungă sub scaun.</p>
            <p>Exact pentru asta există <a href="/ro">TidGo</a> — bonuri, dovezi de venit și payslipuri CIS strânse pe parcurs, în opt limbi, gata de predat celui care va face raportarea. TidGo nu trimite nimic la HMRC și nu este consultanță fiscală. Face doar ca, atunci când vine termenul, înregistrările să existe.</p>
            <section class="article-sources">
              <strong>Surse</strong>
                    <p><a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/use-software-to-send-income-tax-updates" target="_blank" rel="noopener">Use software to send Income Tax updates</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income</a> — GOV.UK</p>
                    <span><em>Verificat: august 2026. Ghidurile HMRC și sistemele de autentificare se schimbă — dacă citești mai târziu, verifică la linkurile de mai sus.</em></span>
                  </section>
      ${pageCta()}
    </article>
  `;
}

function mtdGovernmentGatewayArticleLT() {
  return `
    <article class="marketing-page-card marketing-article">
      <span class="eyebrow">${mk("navMtd")}</span>
      <h1>Government Gateway ir MTD: turėti paskyrą nereiškia būti užsiregistravus</h1>
            
      <p>Jei čia patekote todėl, kad neradote kur prisijungti prie MTD — esate tinkamoje vietoje, tik dėl netinkamos priežasties.</p><h2>Jei turiu Government Gateway paskyrą, ar jau esu užsiregistravęs MTD?</h2>
            <p>Ne. Tai du visiškai skirtingi dalykai, o jų painiojimas šiuo metu yra viena dažniausių klaidų.</p>
            <p>Government Gateway paskyra — tai <strong>prisijungimas</strong>. Naudotojo vardas ir slaptažodis, kurie įleidžia tave į HMRC internetines paslaugas — ir tiek. Ji tavęs niekur neužregistruoja, nepasako mokesčių inspekcijai, kuo užsiimi, ir neįtraukia tavęs į Making Tax Digital.</p>
            <p>Registracija MTD — tai <strong>atskiras veiksmas</strong>, atliekamas atskiroje paslaugoje, po kurio HMRC nustato tau konkrečias prievoles. Kol jos neatliksi, sistemoje tavęs nėra — nesvarbu, kiek metų turi tą paskyrą.</p>
            <h2>Kas iš tikrųjų yra Government Gateway?</h2>
            <p>Paprasčiausiai — tai raktas nuo HMRC internetinių durų. Jei kada nors pildei Self Assessment deklaraciją internetu, naudojaisi HMRC programėle ar teikei prašymą dėl tax-free childcare — paskyrą jau turi.</p>
            <p>Tai tiesiog prisijungimo duomenys. Kas yra už tų durų, priklauso tik nuo to, kur atskirai užsiregistravai.</p>
            <p>Vienas dalykas, kurį verta žinoti: HMRC palaipsniui perkelia naujus naudotojus į <strong>GOV.UK One Login</strong>, kuris keičia Government Gateway visose valstybės paslaugose. Jei paskyrą kuri dabar, gali matyti būtent One Login. Principas tas pats — tai prisijungimo būdas, ne registracija.</p>
            <h2>Trys žingsniai, kuriuos žmonės painioja</h2>
            <p>Beveik visi juos sumaišo, tad štai jie atskirai, iš eilės:</p>
            <p><strong>Paskyra prisijungimui</strong> — Government Gateway arba GOV.UK One Login. Tik prisijungimo duomenys.</p>
            <p><strong>Registracija Self Assessment</strong> — ja praneši HMRC, kad turi deklaruotinų pajamų. Gauni UTR — dešimties skaitmenų numerį, kuris lieka tau visam gyvenimui.</p>
            <p><strong>Registracija Making Tax Digital</strong> — atskira paslauga po pirmų dviejų žingsnių, kuri įtraukia tave į ketvirtinį raportavimą.</p>
            <p>Gali turėti 1 žingsnį be 2. Gali turėti 1 ir 2 be 3. Dauguma tų, kurie mano, kad „viskas sutvarkyta", atliko pirmus du ir daro prielaidą, kad trečias įvyko savaime.</p>
            <h2>Jei jau turi Government Gateway paskyrą</h2>
            <p>Pirmas žingsnis atliktas. Lieka:</p>
            <p><strong>Patikrink, ar esi užsiregistravęs Self Assessment.</strong> Jei kasmet teiki deklaraciją — esi. Jei niekada neteikei, greičiausiai nesi ir reikia pradėti nuo registracijos.</p>
            <p><strong>Patikrink, ar MTD apskritai tau taikomas.</strong> Tai priklauso nuo tavo <a href="/lt/mtd/qualifying-income">qualifying income</a> — bendrųjų pajamų prieš išlaidas, sudedant veiklos ir nuomos pajamas kartu. Tai ne tavo pelnas.</p>
            <p><strong>Užsiregistruok MTD naudodamas tuos pačius prisijungimo duomenis.</strong> <a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Registracijos paslauga yra GOV.UK</a>. Naudoji tą patį user ID ir slaptažodį, kuriuos gavai registruodamasis Self Assessment. HMRC patikrina tinkamumą pagal pateiktus duomenis. Jei turi buhalterį su agent services account, jis gali užregistruoti tave.</p>
            <h2>Jei Government Gateway paskyros neturi</h2>
            <p>Daug kas jos neturi ir tai visiškai normalu — jei visada dirbai pagal PAYE, tik pradedi savarankiškai arba tavo mokesčiais visada rūpinosi kas nors kitas, priežasties ją kurti ir nebuvo.</p>
            <p>Čia eiliškumas svarbus:</p>
            <p><strong>Pirmiausia susikurk paskyrą.</strong> Eik į <a href="https://www.gov.uk/log-in-register-hmrc-online-services" target="_blank" rel="noopener">HMRC prisijungimo puslapį</a> ir pasirink prisijungimo duomenų kūrimą. Reikės el. pašto, kurį tikrai tikrini — HMRC atsiųs į jį patvirtinimo kodą. Kaip sole trader rinkis individualaus/asmeninio tipo paskyrą; teisiškai tu ir tavo veikla esate tas pats asmuo.</p>
            <p><strong>Tada užsiregistruok Self Assessment.</strong> <a href="https://www.gov.uk/register-for-self-assessment" target="_blank" rel="noopener">Tai daroma GOV.UK</a> ir užtrunka apie penkiolika minučių. Pasiruošk National Insurance numerį, savarankiškos veiklos pradžios datą ir vieno sakinio veiklos aprašymą — „santechnikas" arba „furgono vairuotojas" visiškai pakanka.</p>
            <p><strong>Tada lauk UTR, kuris ateis paštu.</strong> Būtent čia žmonės suklumpa: Unique Taxpayer Reference ateina popieriuje, paprastai per maždaug dešimt darbo dienų, ilgiau jei gyveni užsienyje. Be jo proceso neužbaigsi, o puslapio atnaujinimas nieko nepagreitins.</p>
            <p><strong>Tada registruokis MTD</strong>, jei qualifying income reiškia, kad jis tau taikomas.</p>
            <p>Jei pradedi nuo nulio, planuok kelias savaites — ne vieną popietę.</p>
            <h2>Kas vyksta po registracijos MTD?</h2>
            <p>Tai dalis, kurios beveik niekas nepaaiškina.</p>
            <p>Užsiregistravus HMRC nustato tau <strong>prievoles (obligations)</strong> — konkretų sąrašą, ką ir kada turi raportuoti. Ir svarbiausia: jos nustatomos <strong>atskirai kiekvienam pajamų šaltiniui</strong>. Dvi veiklos ir vienas nuomojamas būstas reiškia tris atskirus raportavimo prievolių rinkinius, o ne vieną bendrą deklaraciją.</p>
            <p>Kiekvienam reikia savų skaičių, užpildytų iš tavo įrašų ir pateiktų per su MTD suderinamą programinę įrangą. Jokios formos HMRC svetainėje, į kurią juos galėtum tiesiog įrašyti, nėra.</p>
            <p>Iš to kyla pasekmė, kurią žmonės visiškai praleidžia: <strong>patekus į MTD, ir metinė deklaracija turi eiti per suderinamą programinę įrangą arba per buhalterį.</strong> Senasis kelias „padarysiu pats HMRC svetainėje" tau nebeprieinamas. Tai galioja ir tiems, kuriuos taisyklės pagavo automatiškai, ir tiems, kurie užsiregistravo savanoriškai anksčiau.</p>
            <p>Tai nėra priežastis vengti registracijos — daugumai žmonių ji vis tiek nėra pasirinkimas. Bet verta žinoti iš anksto, ypač jei planuoji registruotis prieš savo terminą.</p>
            <h2>O jei ką nors praleidau?</h2>
            <p>Jei nesi tikras, kokia tavo padėtis, sąžiningas atsakymas toks: interneto svetainė tau to nepasakys — įskaitant šią. Buhalteris tavo situaciją patikrins per kelias minutes, o taisyklės yra oficialiose HMRC gairėse.</p>
            <p>Mes mokesčių konsultacijų neteikiame. Bet vieną dalyką pasakyti galime: niekas iš to nepalengvėja atidėliojant, o etapas „laiškas ateina paštu" reiškia, kad kalendorius nėra visiškai tavo rankose.</p>
            <h2>Ką galima padaryti tuo tarpu</h2>
            <p>Kol lauki UTR arba aiškiniesi, ar riba tave pagauna, yra vienas dalykas, kuris padeda bet kuriuo atveju: pradėk fiksuoti pajamas ir išlaidas skaitmeniniu būdu jau dabar, o ne laikyk jas maišelyje po sėdyne.</p>
            <p>Būtent tam ir yra <a href="/lt">TidGo</a> — kvitai, pajamų įrodymai ir CIS payslipai renkami eigoje, aštuoniomis kalbomis, paruošti perduoti tam, kas galiausiai teiks ataskaitas. TidGo nieko nesiunčia į HMRC ir nėra mokesčių konsultacija. Ji tik pasirūpina, kad atėjus terminui įrašai egzistuotų.</p>
            <section class="article-sources">
              <strong>Šaltiniai</strong>
                    <p><a href="https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Sign up for Making Tax Digital for Income Tax</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Find out if and when you need to use Making Tax Digital for Income Tax</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/use-software-to-send-income-tax-updates" target="_blank" rel="noopener">Use software to send Income Tax updates</a> — GOV.UK</p>
                    <p><a href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax" target="_blank" rel="noopener">Work out your qualifying income</a> — GOV.UK</p>
                    <span><em>Patikrinta: 2026 m. rugpjūtis. HMRC gairės ir prisijungimo sistemos keičiasi — jei skaitai vėliau, pasitikrink pagal nuorodas aukščiau.</em></span>
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
      <span>✓</span>
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
    title: "Zostań Founding Testerem TidGo",
    lead: "TidGo działa już w przeglądarce. Aplikacja Android jest w zamkniętych testach, a wersja na iPhone jest w przygotowaniu.",
    introOne: "Szukam 20 osób w UK: sole traders, CIS subcontractors, tradespeople oraz landlordów prowadzących proste rekordy, którzy użyją TidGo naprawdę i powiedzą uczciwie, co działa, co przeszkadza i co można uprościć.",
    introTwo: "Start zajmuje około dziesięciu minut. Chodzi tylko o to, żeby wysyłać paragony tak jak zwykle i dać szczery feedback kilka razy w trakcie testów.",
    termsTitle: "Warunki Founding Tester",
    termsText: "Aktywni Founding Testerzy dostają dostęp do planu TidGo Core bez miesięcznej opłaty tak długo, jak plan Core istnieje. Dostęp jest osobisty, nieprzenoszalny i objęty zasadą fair use.",
    activeTitle: "Co znaczy aktywny tester",
    activeText: "Używaj TidGo przez co najmniej kilka tygodni i wyślij feedback co najmniej dwa razy. Nie ma minimalnej liczby paragonów.",
    praiseTitle: "Bez sztucznego zachwalania",
    praiseText: "Nie wymagamy pozytywnej opinii, gwiazdek ani publicznej promocji. Liczy się uczciwy feedback.",
    fallback: "Jeśli formularz nie działa, napisz na",
    formEyebrow: "Formularz Founding Tester",
    name: "Imię i nazwisko",
    namePlaceholder: "Twoje imię i nazwisko",
    googleEmail: "Adres konta Google używany na telefonie z Androidem",
    googleHint: "To musi być konto Google używane na Twoim telefonie z Androidem, inaczej link testowy nie zadziała.",
    workType: "Czym się zajmujesz?",
    chooseOne: "Wybierz",
    contactEmail: "Kontaktowy email, jeśli inny",
    optional: "Opcjonalnie",
    whatsapp: "Numer WhatsApp",
    useApp: "Zgadzam się używać TidGo przez co najmniej kilka tygodni w trakcie testów.",
    feedback: "Zgadzam się wysłać krótki uczciwy feedback co najmniej dwa razy albo zgłosić znalezione problemy.",
    consentPrefix: "Akceptuję",
    privacy: "Privacy Policy",
    andText: "oraz",
    terms: "Terms",
    submit: "Zostań Founding Testerem",
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
    lead: "TidGo jau veikia naršyklėje. Android programėlė yra uždarame testavime, o iPhone versija kuriama.",
    introOne: "Ieškau 20 žmonių Jungtinėje Karalystėje: sole traders, CIS subcontractors, tradespeople ir landlordų, kurie tvarko paprastus įrašus, naudotų TidGo realiai ir pasakytų, kas veikia, kas trukdo ir ką galima supaprastinti.",
    introTwo: "Pradžia užtrunka apie dešimt minučių. Tereikia siųsti kvitus taip, kaip įprastai, ir kelis kartus testavimo metu duoti sąžiningą atsiliepimą.",
    termsTitle: "Founding Tester sąlygos",
    termsText: "Aktyvūs Founding Testeriai gauna prieigą prie TidGo Core plano be mėnesinio mokesčio tol, kol Core planas egzistuoja. Prieiga yra asmeninė, neperduodama ir taikomas fair use.",
    activeTitle: "Ką reiškia aktyvus testeris",
    activeText: "Naudok TidGo bent kelias savaites ir atsiųsk atsiliepimą bent du kartus. Minimalaus kvitų skaičiaus nėra.",
    praiseTitle: "Be netikrų pagyrimų",
    praiseText: "Nereikalaujame teigiamo atsiliepimo, žvaigždučių ar viešos reklamos. Tikslas yra sąžiningas feedbackas.",
    fallback: "Jei forma neveikia, parašyk el. paštu",
    formEyebrow: "Founding Tester forma",
    name: "Vardas",
    namePlaceholder: "Tavo vardas",
    googleEmail: "Google paskyros el. paštas, naudojamas Android telefone",
    googleHint: "Tai turi būti Google paskyra tavo Android telefone, kitaip testavimo nuoroda neveiks.",
    workType: "Kuo užsiimi?",
    chooseOne: "Pasirink",
    contactEmail: "Kontaktinis el. paštas, jei kitas",
    optional: "Nebūtina",
    whatsapp: "WhatsApp numeris",
    useApp: "Sutinku naudoti TidGo bent kelias savaites testavimo metu.",
    feedback: "Sutinku bent du kartus atsiųsti trumpą sąžiningą atsiliepimą arba pranešti apie rastas problemas.",
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
        <span><span class="summary-icon" aria-hidden="true"></span> ${t("summary")}</span><strong>›</strong>
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
      ${summaryBusinessScopeControls()}
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
    return `<button class="list-item" data-open-income="${item.id}">
      <span class="list-main">
        <span class="list-title">${escapeHtml(item.description || t("income"))}${reviewBadge(item)}</span>
        <span class="list-meta">${day(item.timestamp)}${businessLabel ? ` - ${escapeHtml(businessLabel)}` : ""}</span>
      </span>
      <span class="amount income">${money(item.amount, item.currency)}</span>
    </button>`;
  }
  const item = row.item;
  const businessLabel = businessLabelForRecord(item);
  return `<button class="list-item" data-open-receipt="${item.id}">
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
  return `<button class="list-item" type="button" data-open-income="${escapeAttr(item.id)}">
    <span class="list-main">
      <span class="list-title">${t("income")}${reviewBadge(item)}</span>
      <span class="list-meta">${day(item.timestamp)} · ${escapeHtml(item.description || "")}</span>
    </span>
    <span class="amount income">${money(item.amount, item.currency)}</span>
  </button>`;
}

function receiptSummaryRow(item) {
  return `<button class="list-item" type="button" data-open-receipt="${escapeAttr(item.id)}">
    <span class="list-main">
      <span class="list-title">${t("expenses")}${reviewBadge(item)}</span>
      <span class="list-meta">${day(item.timestamp)} · ${escapeHtml(item.merchant || t(item.category))}</span>
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
    <p>${escapeHtml(state.user?.first_name || "")} ${state.user?.trade ? " · " + escapeHtml(state.user.trade) : ""}</p>
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
