const API_BASE = "https://donezo-api-53t9.onrender.com";
const FEEDBACK_EMAIL = "hello@tidgo.co.uk";
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


const MARKETING_LANGUAGES = {
  en: { country: "gb", label: "English" },
  pl: { country: "pl", label: "Polski" },
  ro: { country: "ro", label: "Romana" },
  lt: { country: "lt", label: "Lietuviu" }
};

const MARKETING_COPY = {
  en: {
    navHow: "How it works", navWho: "Who is it for?", navPricing: "Launch & pricing", navFaq: "FAQ", navMtd: "MTD explained", navContact: "Contact",
    heroEyebrow: "Receipts in. Tidy records out.", heroTitle: "One simple place for receipts.", heroText: "For self-employed people who need records tidy, and accountants who would rather not chase plastic bags full of receipts.",
    stepSnap: "Snap receipts", stepTidy: "Keep records tidy", stepPack: "Send a clean pack",
    earlyTitle: "Early access:", earlyText: "TidGo is live for a small group of early users. It is free while we collect feedback, improve the app and add clearer guides for self-employed people and accountants.",
    pricingTitle: "Launch & pricing:", pricingText: "Official launch date: to be announced after early-access testing. TidGo is free during early access. Paid plans are expected after launch, with clear notice before anything changes.",
    mtdTitle: "MTD explained:", mtdText: "This guide is being written. TidGo helps keep records tidy, but it does not file tax returns or replace an accountant.", faqTitle: "FAQ:", faqText: "More answers are coming soon. For now, try the app, open the accountant portal, or send a message below.",
    contactTitle: "Want to try it or ask a question?", contactText: "Send a quick message. No sales maze, just a human reply.", yourEmail: "Your email", roleSelf: "I work for myself", roleAccountant: "I am an accountant", roleCurious: "Just curious", message: "Message", sendMessage: "Send message", messageSent: "Message sent. Thank you.", messagePending: "Automatic contact is being connected. Please try again after the next API deploy.",
    selfLabel: "I work for myself", selfTitle: "Open TidGo App", selfText: "Take receipt photos, add income, keep monthly records ready for your accountant.", scanApp: "Scan app", openApp: "Open app",
    accountantLabel: "I'm an accountant", accountantTitle: "Open Accountant Portal", accountantText: "View connected client records, download CSV/PDF packs, and reduce deadline panic.", scanPortal: "Scan portal", openPortal: "Open portal", viewDemo: "View quick demo",
    footer: "TidGo helps organise records. It is not accounting, tax advice or payroll software.", home: "Home", appDemo: "App demo", accountantDemo: "Accountant demo", backHome: "Back to homepage", step: "Step",
    trySafe: "Try it safely: take a photo, check the result, download your summary, and delete your account/data any time from Settings.",
    appDemoKind: "For self-employed", appDemoTitle: "See the receipt flow before signing in.", appDemoText: "TidGo is built around one simple habit: take the photo now, send a cleaner pack later.",
    accountantDemoKind: "For accountants", accountantDemoTitle: "See the client handoff before signing in.", accountantDemoText: "The accountant portal is read-only. Clients keep records tidy; you get a cleaner pack when it is time to work.",
    demoHomeScreen: "Home", demoHomeTitle: "Start from a simple home screen", demoHomeText: "The main actions are right there: add an expense, add income, paid for client, or open the monthly summary.",
    demoReceiptScreen: "Receipt photo", demoReceiptTitle: "Snap the receipt", demoReceiptText: "Take or upload a photo. TidGo confirms it has received the receipt with a small friendly message.", demoReceiptCallout: "Friendly confirmation after the receipt is received.",
    demoDetailsScreen: "Check details", demoDetailsTitle: "Review before saving", demoDetailsText: "You can correct the amount, category, currency or shop before it goes into your records.",
    demoSummaryScreen: "Monthly summary", demoSummaryTitle: "Send the pack", demoSummaryText: "Income, expenses and paid-for-client records are grouped by currency, ready for your accountant.",
    demoAccessScreen: "Accountant access", demoAccessTitle: "Sign in with accountant email", demoAccessText: "The portal uses an email code, then shows the connected accountant account on this device.",
    demoClientsScreen: "Client list", demoClientsTitle: "See connected clients", demoClientsText: "Only clients who gave consent appear in your list. You can open each client from one simple view.",
    demoRecordsScreen: "Client records", demoRecordsTitle: "Download the client pack", demoRecordsText: "Open a client, check totals, request missing docs, then download CSV or PDF."
  },
  pl: {
    navHow: "Jak to dziala", navWho: "Dla kogo?", navPricing: "Start i ceny", navFaq: "FAQ", navMtd: "MTD prosto", navContact: "Kontakt",
    heroEyebrow: "Paragony wchodza. Porzadek wychodzi.", heroTitle: "Jedno proste miejsce na paragony.", heroText: "Dla self-employed, ktorzy chca miec rekordy w porzadku, i dla ksiegowych, ktorzy nie chca gonitwy za reklamowka paragonow.",
    stepSnap: "Zrob zdjecie", stepTidy: "Trzymaj porzadek", stepPack: "Wyslij czysta paczke",
    earlyTitle: "Early access:", earlyText: "TidGo dziala dla malej grupy pierwszych uzytkownikow. Teraz jest darmowe, zbieramy feedback, poprawiamy aplikacje i dopisujemy jasne instrukcje.",
    pricingTitle: "Start i ceny:", pricingText: "Oficjalna data startu bedzie ogloszona po testach early access. TidGo jest darmowe w trakcie early access. Po starcie planujemy platne plany, z jasna informacja przed zmianami.",
    mtdTitle: "MTD prosto:", mtdText: "Ten poradnik jest w przygotowaniu. TidGo pomaga utrzymac rekordy w porzadku, ale nie wysyla deklaracji podatkowych i nie zastapi ksiegowego.", faqTitle: "FAQ:", faqText: "Wiecej odpowiedzi wkrotce. Na razie zobacz aplikacje, portal ksiegowego albo wyslij wiadomosc ponizej.",
    contactTitle: "Chcesz przetestowac albo zapytac?", contactText: "Wyslij krotka wiadomosc. Bez lejka sprzedazowego, normalna odpowiedz od czlowieka.", yourEmail: "Twoj email", roleSelf: "Pracuje na siebie", roleAccountant: "Jestem ksiegowym", roleCurious: "Tylko sprawdzam", message: "Wiadomosc", sendMessage: "Wyslij wiadomosc", messageSent: "Wiadomosc wyslana. Dziekuje.", messagePending: "Automatyczny kontakt jest podpinany. Sprobuj po nastepnym deployu API.",
    selfLabel: "Pracuje na siebie", selfTitle: "Otworz aplikacje TidGo", selfText: "Rob zdjecia paragonow, dodawaj przychody i trzymaj miesieczne rekordy gotowe dla ksiegowego.", scanApp: "Skanuj app", openApp: "Otworz app",
    accountantLabel: "Jestem ksiegowym", accountantTitle: "Otworz portal ksiegowego", accountantText: "Zobacz rekordy klientow, pobierz CSV/PDF i ogranicz panike przed terminem.", scanPortal: "Skanuj portal", openPortal: "Otworz portal", viewDemo: "Zobacz szybkie demo",
    footer: "TidGo pomaga porzadkowac rekordy. To nie jest ksiegowosc, porada podatkowa ani payroll.", home: "Start", appDemo: "Demo app", accountantDemo: "Demo ksiegowego", backHome: "Wroc na strone glowna", step: "Krok",
    trySafe: "Sprawdz bez stresu: zrob zdjecie, zobacz wynik, pobierz summary i usun konto/dane w dowolnym momencie w ustawieniach.",
    appDemoKind: "Dla self-employed", appDemoTitle: "Zobacz flow paragonu bez logowania.", appDemoText: "TidGo opiera sie na jednym prostym nawyku: zrob zdjecie teraz, wyslij czystsza paczke pozniej.",
    accountantDemoKind: "Dla ksiegowych", accountantDemoTitle: "Zobacz przekazanie klienta bez logowania.", accountantDemoText: "Portal ksiegowego jest tylko do odczytu. Klient trzyma rekordy w porzadku, a ty dostajesz czystsza paczke do pracy.",
    demoHomeScreen: "Start", demoHomeTitle: "Prosty ekran glowny", demoHomeText: "Najwazniejsze akcje sa od razu widoczne: wydatek, przychod, koszt dla klienta i monthly summary.",
    demoReceiptScreen: "Zdjecie paragonu", demoReceiptTitle: "Zrob zdjecie paragonu", demoReceiptText: "Zrob albo wgraj zdjecie. TidGo potwierdza, ze paragon zostal odebrany.", demoReceiptCallout: "Przyjazne potwierdzenie po odebraniu paragonu.",
    demoDetailsScreen: "Sprawdz dane", demoDetailsTitle: "Sprawdz przed zapisem", demoDetailsText: "Mozesz poprawic kwote, kategorie, walute albo sklep przed zapisaniem.",
    demoSummaryScreen: "Podsumowanie", demoSummaryTitle: "Wyslij paczke", demoSummaryText: "Przychody, wydatki i koszty dla klienta sa pogrupowane wedlug waluty i gotowe dla ksiegowego.",
    demoAccessScreen: "Dostep ksiegowego", demoAccessTitle: "Logowanie emailem ksiegowego", demoAccessText: "Portal uzywa kodu email, a potem pokazuje polaczone konto ksiegowego na tym urzadzeniu.",
    demoClientsScreen: "Lista klientow", demoClientsTitle: "Zobacz polaczonych klientow", demoClientsText: "Na liscie sa tylko klienci, ktorzy dali zgode. Kazdego klienta otwierasz z prostego widoku.",
    demoRecordsScreen: "Rekordy klienta", demoRecordsTitle: "Pobierz paczke klienta", demoRecordsText: "Otworz klienta, sprawdz sumy, popros o brakujace dokumenty i pobierz CSV lub PDF."
  }
};
MARKETING_COPY.ro = { ...MARKETING_COPY.en,
  navHow: "Cum functioneaza", navWho: "Pentru cine?", navPricing: "Lansare si pret", navFaq: "FAQ", navMtd: "MTD pe scurt", navContact: "Contact",
  heroEyebrow: "Bonuri inauntru. Evidente ordonate afara.", heroTitle: "Un loc simplu pentru bonuri.", heroText: "Pentru persoane self-employed care vor evidente ordonate si contabili care nu vor sa alerge dupa pungi cu bonuri.",
  stepSnap: "Fotografiaza bonuri", stepTidy: "Tine evidenta ordonata", stepPack: "Trimite pachetul curat",
  earlyTitle: "Acces timpuriu:", earlyText: "TidGo este live pentru un grup mic de utilizatori. Este gratuit cat timp strangem feedback, imbunatatim aplicatia si adaugam ghiduri clare.",
  pricingTitle: "Lansare si pret:", pricingText: "Data lansarii oficiale va fi anuntata dupa testele early access. TidGo este gratuit in perioada de testare. Planurile platite vor fi anuntate clar inainte de orice schimbare.",
  mtdTitle: "MTD pe scurt:", mtdText: "Ghidul este in lucru. TidGo ajuta la pastrarea evidentelor ordonate, dar nu depune declaratii fiscale si nu inlocuieste contabilul.", faqTitle: "FAQ:", faqText: "Mai multe raspunsuri vin curand. Deocamdata poti incerca aplicatia, portalul contabilului sau trimite un mesaj.",
  contactTitle: "Vrei sa testezi sau sa intrebi ceva?", contactText: "Trimite un mesaj scurt. Fara labirint de vanzari, doar un raspuns uman.", yourEmail: "Emailul tau", roleSelf: "Lucrez pe cont propriu", roleAccountant: "Sunt contabil", roleCurious: "Doar verific", message: "Mesaj", sendMessage: "Trimite mesaj", messageSent: "Mesaj trimis. Multumesc.", messagePending: "Contactul automat este conectat. Incearca din nou dupa urmatorul deploy API.",
  selfLabel: "Lucrez pe cont propriu", selfTitle: "Deschide aplicatia TidGo", selfText: "Fotografiaza bonuri, adauga venituri si tine evidenta lunara pregatita pentru contabil.", scanApp: "Scaneaza app", openApp: "Deschide app",
  accountantLabel: "Sunt contabil", accountantTitle: "Deschide portalul contabilului", accountantText: "Vezi evidentele clientilor conectati, descarca pachete CSV/PDF si redu panica de termen limita.", scanPortal: "Scaneaza portal", openPortal: "Deschide portal", viewDemo: "Vezi demo rapid",
  footer: "TidGo ajuta la organizarea evidentelor. Nu este contabilitate, consultanta fiscala sau payroll.", home: "Acasa", appDemo: "Demo app", accountantDemo: "Demo contabil", backHome: "Inapoi la pagina principala", step: "Pas",
  trySafe: "Incearca in siguranta: fa o poza, verifica rezultatul, descarca sumarul si sterge contul/datele oricand din setari.",
  appDemoKind: "Pentru self-employed", appDemoTitle: "Vezi fluxul bonului inainte de autentificare.", appDemoText: "TidGo se bazeaza pe un obicei simplu: faci poza acum, trimiti un pachet mai curat mai tarziu.",
  accountantDemoKind: "Pentru contabili", accountantDemoTitle: "Vezi predarea clientului inainte de autentificare.", accountantDemoText: "Portalul contabilului este doar pentru citire. Clientii isi tin evidentele ordonate; tu primesti un pachet mai curat pentru lucru.",
  demoHomeScreen: "Start", demoHomeTitle: "Porneste de la un ecran simplu", demoHomeText: "Actiunile principale sunt la indemana: adauga cheltuiala, venit, platit pentru client sau deschide sumarul lunar.",
  demoReceiptScreen: "Poza bon", demoReceiptTitle: "Fotografiaza bonul", demoReceiptText: "Fa sau incarca o poza. TidGo confirma prietenos ca bonul a fost primit.", demoReceiptCallout: "Confirmare prietenoasa dupa primirea bonului.",
  demoDetailsScreen: "Verifica datele", demoDetailsTitle: "Revizuieste inainte de salvare", demoDetailsText: "Poti corecta suma, categoria, moneda sau magazinul inainte sa intre in evidente.",
  demoSummaryScreen: "Sumar lunar", demoSummaryTitle: "Trimite pachetul", demoSummaryText: "Veniturile, cheltuielile si platile pentru client sunt grupate pe moneda, gata pentru contabil.",
  demoAccessScreen: "Acces contabil", demoAccessTitle: "Autentificare cu emailul contabilului", demoAccessText: "Portalul foloseste un cod pe email, apoi arata contul conectat pe acest dispozitiv.",
  demoClientsScreen: "Lista clienti", demoClientsTitle: "Vezi clientii conectati", demoClientsText: "Apar doar clientii care au dat acordul. Fiecare client se deschide dintr-un ecran simplu.",
  demoRecordsScreen: "Evidente client", demoRecordsTitle: "Descarca pachetul clientului", demoRecordsText: "Deschide clientul, verifica totalurile, cere documente lipsa si descarca CSV sau PDF."
};
MARKETING_COPY.lt = { ...MARKETING_COPY.en,
  navHow: "Kaip veikia", navWho: "Kam skirta?", navPricing: "Startas ir kaina", navFaq: "DUK", navMtd: "MTD trumpai", navContact: "Kontaktai",
  heroEyebrow: "Kvitai vidun. Tvarkingi irasai lauk.", heroTitle: "Viena paprasta vieta kvitams.", heroText: "Dirbantiems sau, kuriems reikia tvarkingu irasu, ir buhalteriams, kurie nenori gaudyti maisu su kvitais.",
  stepSnap: "Nufotografuok kvita", stepTidy: "Laikyk irasus tvarkingai", stepPack: "Issiusk tvarkinga paketa",
  earlyTitle: "Ankstyva prieiga:", earlyText: "TidGo jau veikia mazai pirmuju vartotoju grupei. Dabar programa nemokama, kol renkame atsiliepimus, taisome detales ir rengiame paprastus paaiskinimus.",
  pricingTitle: "Startas ir kaina:", pricingText: "Oficiali starto data bus paskelbta po ankstyvos prieigos testu. TidGo dabar nemokama. Mokami planai bus pristatyti aiskiai, pries bet kokius pakeitimus.",
  mtdTitle: "MTD trumpai:", mtdText: "Sitas gidas dar rasomas. TidGo padeda laikyti irasus tvarkingai, bet neteikia mokesciu deklaraciju ir nepakeicia buhalterio.", faqTitle: "DUK:", faqText: "Daugiau atsakymu bus greitai. Kol kas galite isbandyti programa, buhalterio portala arba parasyti zinute.",
  contactTitle: "Norite pabandyti ar paklausti?", contactText: "Parasykite trumpa zinute. Be pardavimo labirinto, tiesiog zmogiskas atsakymas.", yourEmail: "Jusu el. pastas", roleSelf: "Dirbu sau", roleAccountant: "Esu buhalteris", roleCurious: "Tik domiuosi", message: "Zinute", sendMessage: "Siusti zinute", messageSent: "Zinute issiusta. Aciu.", messagePending: "Automatinis kontaktas prijungiamas. Pabandykite po kito API deploy.",
  selfLabel: "Dirbu sau", selfTitle: "Atidaryti TidGo app", selfText: "Fotografuok kvitus, pridek pajamas ir laikyk menesio irasus paruostus buhalteriui.", scanApp: "Skenuoti app", openApp: "Atidaryti app",
  accountantLabel: "Esu buhalteris", accountantTitle: "Atidaryti buhalterio portala", accountantText: "Matyk prijungtu klientu irasus, atsisiusk CSV/PDF paketus ir sumazink termino panika.", scanPortal: "Skenuoti portala", openPortal: "Atidaryti portala", viewDemo: "Greitas demo",
  footer: "TidGo padeda tvarkyti irasus. Tai nera buhalterija, mokesciu konsultacija ar payroll programa.", home: "Pradzia", appDemo: "App demo", accountantDemo: "Buhalterio demo", backHome: "Grizti i pagrindini puslapi", step: "Zingsnis",
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
  howTitle: "TidGo is the bridge between busy work and tidy records.",
  howText: "Self-employed people can take receipt photos through the month. Accountants can see a cleaner read-only handoff when the client gives permission.",
  whoTitle: "Two simple doors.",
  whoText: "Open the app if you work for yourself. Open the accountant portal if you help clients keep records ready without the plastic-bag panic.",
  mtdIntro: "MTD guides are being written as short, practical pages.",
  mtdWhat: "What is MTD?",
  mtdWho: "Who needs MTD?",
  mtdWhen: "When does MTD start?",
  mtdRecords: "What records do I need?",
  mtdPaper: "What if I still keep paper receipts?",
  mtdPhotos: "Can I use photos?",
  mtdSubmit: "Does TidGo submit to HMRC?",
  mtdAccountant: "Do I still need an accountant?",
  mtdWhatText: "Making Tax Digital is HMRC's move toward keeping tax records digitally and using approved software for parts of the tax process.",
  mtdWhoText: "It can affect self-employed people and landlords in the UK, depending on income level and start dates. Check HMRC or your accountant for your exact case.",
  mtdWhenText: "MTD rules are being introduced in stages. The important habit is simple: start keeping records digitally before the deadline panic arrives.",
  mtdRecordsText: "You should keep clear digital records of income, expenses and proof such as receipts or invoices. GOV.UK says self-employed records are normally kept for at least 5 years after the 31 January deadline for that tax year.",
  mtdPaperText: "Paper receipts may still exist, but once MTD applies to you, relying only on a bag of paper is not a good plan. Photos and digital records make handoff easier.",
  mtdPhotosText: "Photos can help create a digital record. TidGo stores receipt photos with the basic details so you can review them and share a cleaner pack.",
  mtdSubmitText: "No. TidGo does not submit returns to HMRC. It helps prepare and organise records before they go to you, your accountant or other software.",
  mtdAccountantText: "Usually yes. TidGo is not tax advice or accounting software. It helps you keep records ready so your accountant has less chaos to fix.",
  faqBuildTitle: "Real questions make a better FAQ.",
  faqBuildText: "Send us what feels unclear: setup, receipts, PDF, accountant access, MTD, anything. We are building this FAQ from real user questions, not corporate fog.",
  launchTabTitle: "Launch and pricing",
  launchTabText: "TidGo is in early access and free while we test with real users. Paid plans are expected later, with clear notice before anything changes.",
  launchPricingFullText: "TidGo is in early access for a small group of real users. It is free while we collect feedback, improve the app and prepare clearer guides. Paid plans are expected later, with clear notice before anything changes.",
  platformNow: "Use the web app now.",
  platformSoon: "Android and iOS versions are in development alongside TidGo.",
  socialTitle: "Follow us on",
  privacyNote: "No cookie maze: TidGo only uses essential app data and basic analytics to improve the product. We do not sell user data.",
  copyright: "© 2026 TidGo. All rights reserved."
});

Object.assign(MARKETING_COPY.pl, {
  howTitle: "TidGo jest mostem miedzy praca w biegu a porzadnymi rekordami.",
  howText: "Self-employed robi zdjecia paragonow przez miesiac. Ksiegowy dostaje czytelniejszy podglad tylko do odczytu, kiedy klient da zgode.",
  whoTitle: "Dwie proste drogi.",
  whoText: "Otworz aplikacje, jesli pracujesz na siebie. Otworz portal ksiegowego, jesli pomagasz klientom trzymac rekordy bez paniki z reklamowka.",
  mtdIntro: "Poradniki MTD beda krotkimi, praktycznymi stronami.",
  mtdWhat: "Co to jest MTD?",
  mtdWho: "Kogo dotyczy MTD?",
  mtdWhen: "Kiedy startuje MTD?",
  mtdRecords: "Jakie rekordy trzeba miec?",
  mtdPaper: "Co jesli dalej mam papierowe paragony?",
  mtdPhotos: "Czy moge uzywac zdjec?",
  mtdSubmit: "Czy TidGo wysyla do HMRC?",
  mtdAccountant: "Czy dalej potrzebuje ksiegowego?",
  mtdWhatText: "Making Tax Digital to przechodzenie HMRC na cyfrowe rekordy i uzywanie odpowiedniego oprogramowania w czesci procesu podatkowego.",
  mtdWhoText: "Moze dotyczyc self-employed i landlordow w UK, zależnie od poziomu przychodu i dat wejscia zasad. Dokladny przypadek sprawdz z HMRC albo ksiegowym.",
  mtdWhenText: "Zasady MTD wchodza etapami. Najwazniejszy nawyk jest prosty: zacznij trzymac rekordy cyfrowo zanim przyjdzie panika przed terminem.",
  mtdRecordsText: "Trzymaj jasne cyfrowe rekordy przychodow, wydatkow i dowody: paragony albo faktury. GOV.UK podaje, ze self-employed zwykle trzyma rekordy co najmniej 5 lat po terminie 31 stycznia dla danego roku podatkowego.",
  mtdPaperText: "Papierowe paragony moga dalej istniec, ale sama reklamowka papieru to slaby plan. Zdjecia i cyfrowe rekordy ulatwiaja przekazanie danych.",
  mtdPhotosText: "Zdjecia pomagaja stworzyc cyfrowy rekord. TidGo przechowuje zdjecia paragonow z podstawowymi danymi, zebys mogl je sprawdzic i wyslac czystsza paczke.",
  mtdSubmitText: "Nie. TidGo nie wysyla deklaracji do HMRC. Pomaga przygotowac i uporzadkowac rekordy przed przekazaniem ich Tobie, ksiegowemu albo innemu programowi.",
  mtdAccountantText: "Zwykle tak. TidGo nie jest porada podatkowa ani pelna ksiegowoscia. Pomaga trzymac rekordy gotowe, zeby ksiegowy mial mniej chaosu do ratowania.",
  faqBuildTitle: "Prawdziwe pytania robia lepsze FAQ.",
  faqBuildText: "Wyslij nam, co jest niejasne: start, paragony, PDF, dostep ksiegowego, MTD, cokolwiek. Budujemy FAQ z prawdziwych pytan, nie z firmowej mgly.",
  launchTabTitle: "Start i ceny",
  launchTabText: "TidGo jest w early access i jest darmowe podczas testow z prawdziwymi uzytkownikami. Platne plany sa spodziewane pozniej, z jasna informacja przed zmianami.",
  launchPricingFullText: "TidGo jest w early access dla malej grupy prawdziwych uzytkownikow. Jest darmowe, kiedy zbieramy feedback, poprawiamy aplikacje i przygotowujemy jasniejsze poradniki. Platne plany sa spodziewane pozniej, z jasna informacja przed zmianami.",
  platformNow: "Uzyj web app teraz.",
  platformSoon: "Wersje Android i iOS sa rozwijane rownolegle z TidGo.",
  socialTitle: "Obserwuj nas",
  privacyNote: "Bez cookie-labiryntu: TidGo uzywa tylko danych potrzebnych do dzialania aplikacji i podstawowej analityki do ulepszania produktu. Nie sprzedajemy danych uzytkownikow.",
  copyright: "© 2026 TidGo. Wszelkie prawa zastrzezone."
});

Object.assign(MARKETING_COPY.ro, {
  howTitle: "TidGo este puntea dintre munca aglomerata si evidente ordonate.",
  howText: "Persoanele self-employed pot fotografia bonuri in timpul lunii. Contabilii primesc un handoff read-only mai curat, cand clientul isi da acordul.",
  whoTitle: "Doua intrari simple.",
  whoText: "Deschide aplicatia daca lucrezi pe cont propriu. Deschide portalul contabilului daca ajuti clienti sa tina evidentele fara panica pungii cu bonuri.",
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
  launchPricingFullText: "TidGo este in early access pentru un grup mic de utilizatori reali. Este gratuit cat timp strangem feedback, imbunatatim aplicatia si pregatim ghiduri mai clare. Planurile platite sunt asteptate mai tarziu, cu anunt clar inainte de schimbari.",
  platformNow: "Foloseste aplicatia web acum.",
  platformSoon: "Versiunile Android si iOS sunt dezvoltate in paralel cu TidGo.",
  socialTitle: "Urmareste-ne",
  privacyNote: "Fara labirint de cookies: TidGo foloseste doar date esentiale ale aplicatiei si analiza de baza pentru imbunatatire. Nu vindem datele utilizatorilor.",
  copyright: "© 2026 TidGo. Toate drepturile rezervate."
});

Object.assign(MARKETING_COPY.lt, {
  howTitle: "TidGo yra tiltas tarp uzimto darbo ir tvarkingu irasu.",
  howText: "Dirbantys sau gali fotografuoti kvitus visa menesi. Buhalteriai gauna tvarkingesni tik skaitymui skirta perdavima, kai klientas duoda leidima.",
  whoTitle: "Dvi paprastos durys.",
  whoText: "Atidaryk programele, jei dirbi sau. Atidaryk buhalterio portala, jei padedi klientams laikyti irasus be kvitu maiselio panikos.",
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
  launchPricingFullText: "TidGo yra early access mazai tikru vartotoju grupei. Programa nemokama, kol renkame atsiliepimus, geriname ja ir ruosiame aiskesnius gidus. Mokami planai numatomi veliau, su aiskia zinute pries pokycius.",
  platformNow: "Naudok web app dabar.",
  platformSoon: "Android ir iOS versijos kuriamos kartu su TidGo.",
  socialTitle: "Sekite mus",
  privacyNote: "Be cookies labirinto: TidGo naudoja tik butinus programeles duomenis ir paprasta analitika produkto gerinimui. Vartotoju duomenu neparduodame.",
  copyright: "© 2026 TidGo. Visos teises saugomos."
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
    signOut: "Sign out",
    sendLoginCode: "Send login code",
    loginCode: "Login code",
    verifyCode: "Verify code",
    handoffTitle: "Built for accountant handoff",
    handoffText: "Clients keep receipts, income proof and paid-for-client costs tidy through the month. You get a read-only view and a clean pack when it is time to work.",
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
    requestDocsInfo: "Copies a short message you can paste into email or WhatsApp when proof is missing."
  },
  pl: {
    forAccountants: "TidGo dla ksiegowych",
    heroTitle: "Paragony wchodza. Porzadek wychodzi.",
    heroSubtitle: "Prosty podglad tylko do odczytu dla sole traders, ktorzy sa swietni w pracy, ale nie zawsze w pilnowaniu paragonow.",
    accessTitle: "Dostep ksiegowego",
    signedInHint: "To urzadzenie jest zalogowane dla ponizszego emaila ksiegowego.",
    signedOutHint: "Wpisz email ksiegowego. Wyslemy krotki kod logowania przed pokazaniem polaczonych klientow.",
    connectedAccount: "Polaczone konto",
    email: "Email",
    nameOrPractice: "Imie lub nazwa biura",
    accountantEmail: "Email ksiegowego",
    showConnectedClients: "Pokaz polaczonych klientow",
    signOut: "Wyloguj",
    sendLoginCode: "Wyslij kod logowania",
    loginCode: "Kod logowania",
    verifyCode: "Sprawdz kod",
    handoffTitle: "Zrobione pod przekazanie ksiegowemu",
    handoffText: "Klienci trzymaja paragony, dowody przychodu i koszty do odzyskania w porzadku przez miesiac. Ty dostajesz podglad tylko do odczytu i czysta paczke do pracy.",
    clientAccess: "Dostep klienta",
    readOnly: "Tylko odczyt",
    clientPermission: "Zgoda klienta",
    required: "Wymagana",
    connectedClients: "Polaczeni klienci",
    clientList: "Lista klientow",
    noClients: "Zaden klient nie polaczyl jeszcze tego emaila.",
    signInFirst: "Najpierw zaloguj sie kodem na email ksiegowego.",
    noTrade: "Brak zawodu",
    noEmail: "Brak emaila",
    records: "wpisow",
    howAccessWorks: "Jak dziala dostep",
    clientAddsEmail: "1. Klient dodaje twoj email",
    consentFirst: "Najpierw zgoda",
    youSeeRecords: "2. Widzisz rekordy",
    youDownloadPack: "3. Pobierasz paczke",
    csvPdf: "CSV + PDF",
    clientRecords: "Rekordy klienta",
    showClientsFirst: "Najpierw pokaz polaczonych klientow.",
    trade: "Zawod",
    connected: "Polaczono",
    income: "Przychody",
    expenses: "Wydatki",
    paidForClient: "Do odzyskania",
    downloadCsv: "Pobierz CSV",
    downloadPdf: "Pobierz PDF",
    requestDocs: "Popros o dokumenty",
    noRecords: "Brak rekordow.",
    expense: "Wydatek",
    proofAttached: "Dowod dodany",
    proofMissing: "Brak dowodu",
    receiptPhotoAttached: "Zdjecie paragonu dodane",
    noReceiptPhoto: "Brak zdjecia paragonu",
    record: "Rekord",
    removeClient: "Usun klienta",
    removeClientConfirm: "Usunac tego klienta z listy ksiegowego?",
    clientRemoved: "Klient usuniety.",
    removeNeedsBackend: "Tego polaczenia nie da sie jeszcze usunac od strony ksiegowego. Klient moze cofnac dostep w ustawieniach TidGo.",
    accountantEmailInfo: "Uzyj adresu email, ktory klienci podlaczaja w swoich ustawieniach TidGo.",
    connectedClientsInfo: "Tutaj widac tylko klientow, ktorzy pozwolili temu emailowi ksiegowego na dostep.",
    requestDocsInfo: "Kopiuje krotka wiadomosc, ktora mozna wkleic do emaila albo WhatsAppa, gdy brakuje dokumentu."
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

const DOWNLOAD_COPY = {
  en: {
    title: "Quick check before download",
    userText: "TidGo helps prepare your records, but it does not verify every item on a receipt. Please check that amounts, categories and documents are accurate for your situation.",
    accountantText: "TidGo gives you a read-only pack from the client. It does not verify every item on a receipt. Please check the records before using them for accounting or submission work.",
    pdfLine: "TidGo helps organise records, but it does not verify every receipt item. Please check amounts, categories and documents before using this pack.",
    ok: "I understand, continue",
    cancel: "Cancel"
  },
  pl: {
    title: "Szybkie sprawdzenie przed pobraniem",
    userText: "TidGo pomaga przygotowac rekordy, ale nie sprawdza kazdej pozycji na paragonie. Sprawdz, czy kwoty, kategorie i dokumenty sa poprawne dla Twojej sytuacji.",
    accountantText: "TidGo daje paczke klienta tylko do odczytu. Nie sprawdza kazdej pozycji na paragonie. Sprawdz rekordy przed uzyciem ich do ksiegowosci albo wysylki dalej.",
    pdfLine: "TidGo pomaga uporzadkowac rekordy, ale nie sprawdza kazdej pozycji na paragonie. Sprawdz kwoty, kategorie i dokumenty przed uzyciem tej paczki.",
    ok: "Rozumiem, kontynuuj",
    cancel: "Anuluj"
  },
  ro: {
    title: "Verificare rapida inainte de descarcare",
    userText: "TidGo ajuta la pregatirea evidentelor, dar nu verifica fiecare articol de pe bon. Verifica sumele, categoriile si documentele pentru situatia ta.",
    accountantText: "TidGo iti ofera o paccheta doar pentru citire de la client. Nu verifica fiecare articol de pe bon. Verifica evidenta inainte de folosire.",
    pdfLine: "TidGo ajuta la organizarea evidentelor, dar nu verifica fiecare articol de pe bon. Verifica sumele, categoriile si documentele inainte de folosire.",
    ok: "Inteleg, continua",
    cancel: "Anuleaza"
  },
  uk: {
    title: "Shvydka perevirka pered zavantazhenniam",
    userText: "TidGo dopomahaie pidhotuvaty zapysy, ale ne pereviriaie kozhen punkt u cheku. Perevirte sumy, katehorii ta dokumenty dlia svoiei sytuatsii.",
    accountantText: "TidGo nadaie read-only paket vid kliienta. Vin ne pereviriaie kozhen punkt u cheku. Perevirte zapysy pered vykorystanniam.",
    pdfLine: "TidGo dopomahaie vporiadkuvaty zapysy, ale ne pereviriaie kozhen punkt u cheku. Perevirte sumy, katehorii ta dokumenty pered vykorystanniam.",
    ok: "Rozumiiu, prodovzhyty",
    cancel: "Skasuvaty"
  },
  lt: {
    title: "Greitas patikrinimas pries atsisiuntima",
    userText: "TidGo padeda paruosti irasus, bet netikrina kiekvienos kvito eilutes. Patikrinkite sumas, kategorijas ir dokumentus pagal savo situacija.",
    accountantText: "TidGo pateikia tik skaitymo kliento paketa. Jis netikrina kiekvienos kvito eilutes. Patikrinkite irasus pries naudojima.",
    pdfLine: "TidGo padeda tvarkyti irasus, bet netikrina kiekvienos kvito eilutes. Patikrinkite sumas, kategorijas ir dokumentus pries naudojima.",
    ok: "Suprantu, testi",
    cancel: "Atsaukti"
  },
  lv: {
    title: "Atra parbaude pirms lejupielades",
    userText: "TidGo palidz sagatavot ierakstus, bet neparbauda katru ceka poziciju. Parbaudi summas, kategorijas un dokumentus savai situacijai.",
    accountantText: "TidGo dod tikai lasisanas klienta paku. Tas neparbauda katru ceka poziciju. Parbaudi ierakstus pirms lietosanas.",
    pdfLine: "TidGo palidz sakartot ierakstus, bet neparbauda katru ceka poziciju. Parbaudi summas, kategorijas un dokumentus pirms lietosanas.",
    ok: "Saprotu, turpinat",
    cancel: "Atcelt"
  },
  es: {
    title: "Revision rapida antes de descargar",
    userText: "TidGo ayuda a preparar tus registros, pero no verifica cada articulo de un recibo. Revisa importes, categorias y documentos para tu situacion.",
    accountantText: "TidGo ofrece un paquete de solo lectura del cliente. No verifica cada articulo de un recibo. Revisa los registros antes de usarlos.",
    pdfLine: "TidGo ayuda a organizar registros, pero no verifica cada articulo de un recibo. Revisa importes, categorias y documentos antes de usar este paquete.",
    ok: "Entiendo, continuar",
    cancel: "Cancelar"
  },
  bg: {
    title: "Barza proverka predi svalyane",
    userText: "TidGo pomaga da podgotvite zapisite, no ne proveriava vsichki pozitsii v belezhkata. Proverete sumite, kategoriite i dokumentite za vashata situatsia.",
    accountantText: "TidGo dava paket samo za chetene ot klienta. Ne proveriava vsichki pozitsii v belezhkata. Proverete zapisite predi upotreba.",
    pdfLine: "TidGo pomaga da podredite zapisite, no ne proveriava vsichki pozitsii v belezhkata. Proverete sumite, kategoriite i dokumentite predi upotreba.",
    ok: "Razbiram, prodalzhi",
    cancel: "Otkaz"
  }
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
    verifyEmail: "Verify your email",
    verifyEmailHint: "We sent a 6-digit code to your email. Enter it to finish setting up TidGo on this device.",
    verifyAndStart: "Verify and start",
    sendCodeAgain: "Send code again",
    codeSent: "Code sent. Check your email.",
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
    verifyEmail: "Potwierdz email",
    verifyEmailHint: "Wyslalismy 6-cyfrowy kod na twoj email. Wpisz go, zeby dokonczyc start TidGo na tym urzadzeniu.",
    verifyAndStart: "Potwierdz i start",
    sendCodeAgain: "Wyslij kod ponownie",
    codeSent: "Kod wyslany. Sprawdz email.",
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
    feedbackHint: "Cos wyglada dziwnie? Wyslij nam szybka wiadomosc.",
    feedbackPlaceholder: "Napisz, co sie stalo, co bylo niejasne albo co powinno dzialac lepiej.",
    sendMessage: "Wyslij wiadomosc",
    feedbackSent: "Wiadomosc wyslana. Dziekuje.",
    feedbackFailed: "Nie udalo sie wyslac wiadomosci. Sprobuj pozniej.",
    deleteConfirmText: "Rozumiem, ze to trwale usunie moj profil, paragony, zdjecia i przychody.",
    deleteConfirmRequired: "Najpierw zaznacz potwierdzenie.",
    copyEmail: "Kopiuj email",
    emailCopied: "Email skopiowany.",
    openEmailApp: "Otworz email",
    feedbackSubject: "TidGo feedback",
    feedbackBody: "Czesc, testowalem TidGo i zauwazylem:",
    recordsTitle: "Sprawdz moje rekordy",
    recordsHint: "Zobacz, co wyglada gotowe dla ksiegowego, a gdzie moze brakowac dowodu albo drugiego spojrzenia.",
    connectAccountant: "Polacz ksiegowego",
    connectAccountantHint: "Dodaj email ksiegowego. Udostepnianie rekordow bedzie wymagalo Twojej zgody.",
    accountantEmail: "Email ksiegowego",
    createInvite: "Zapisz ksiegowego",
    connectionStatus: "Status polaczenia",
    pendingAccountant: "Zapisane do polaczenia",
    pendingClient: "Czeka na zgode klienta",
    activeConnection: "Polaczone",
    allowAccess: "Zezwol na dostep",
    declineAccess: "Odmow",
    revokeAccess: "Cofnij dostep",
    noConnection: "Na tym urzadzeniu nie ma jeszcze polaczonego ksiegowego.",
    inviteCreated: "Ksiegowy zapisany.",
    accessAllowed: "Dostep zatwierdzony.",
    accessDeclined: "Dostep odrzucony.",
    accessRevoked: "Dostep cofniety.",
    signOutDevice: "Wyloguj na tym urzadzeniu",
    signOutHint: "Uzyj tylko, gdy chcesz przetestowac odzyskiwanie albo przejsc na inne konto. To nie usuwa paragonow.",
    signOutConfirm: "To wyloguje Cie na tym urzadzeniu i pokaze ekran odzyskiwania emailem. Paragony nie zostana usuniete.",
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
  accountantConsents: [],
  accountantPortalEmail: read("rb_accountant_portal_email", ""),
  accountantPendingEmail: read("rb_accountant_pending_email", ""),
  accountantDisplayName: read("rb_accountant_display_name", ""),
  accountantCodeSent: false,
  accountantClients: [],
  accountantClientRecords: null,
  accountantSelectedClientId: null,
  pendingSignupEmail: read("rb_pending_signup_email", ""),
  marketingLanguage: MARKETING_LANGUAGES[read("tg_marketing_language", "en")] ? read("tg_marketing_language", "en") : "en",
  marketingSection: read("tg_marketing_section", "how"),
  incomeProofs: read("rb_income_proofs", {}),
  screen: initialScreen(),
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

function isLandingRoute() {
  return !isAccountantRoute() && !isAppRoute() && !isAppDemoRoute() && !isAccountantDemoRoute();
}

function initialScreen() {
  if (isAccountantRoute()) return "accountantLanding";
  if (isAppDemoRoute()) return "appDemo";
  if (isAccountantDemoRoute()) return "accountantDemo";
  if (isLandingRoute()) return "landing";
  return "boot";
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

function marketingInfoPanel() {
  const section = ["how", "who", "pricing", "faq", "mtd"].includes(state.marketingSection) ? state.marketingSection : "how";
  if (section === "mtd") {
    return `
      <section class="landing-placeholder landing-mtd" id="info">
        <strong>${mk("mtdTitle")}</strong>
        <div class="mtd-topic-grid">
          ${[
            ["mtdWhat", "mtdWhatText"],
            ["mtdWho", "mtdWhoText"],
            ["mtdWhen", "mtdWhenText"],
            ["mtdRecords", "mtdRecordsText"],
            ["mtdPaper", "mtdPaperText"],
            ["mtdPhotos", "mtdPhotosText"],
            ["mtdSubmit", "mtdSubmitText"],
            ["mtdAccountant", "mtdAccountantText"]
          ].map(([titleKey, textKey]) => `<article><strong>${mk(titleKey)}</strong><span>${mk(textKey)}</span></article>`).join("")}
        </div>
      </section>
    `;
  }
  const panels = {
    how: ["howTitle", "howText"],
    who: ["whoTitle", "whoText"],
    pricing: ["launchTabTitle", "launchPricingFullText"],
    faq: ["faqBuildTitle", "faqBuildText"]
  };
  const [titleKey, textKey] = panels[section] || panels.how;
  return `
    <section class="landing-placeholder landing-focus" id="info">
      <strong>${mk(titleKey)}</strong>
      <span>${mk(textKey)}</span>
    </section>
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

function dateInputValue(value) {
  const date = new Date(value || Date.now());
  return Number.isNaN(date.getTime()) ? new Date().toISOString().slice(0, 10) : date.toISOString().slice(0, 10);
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
  const accountantMode = state.screen === "accountantLanding" || state.screen === "accountantDemoClient";
  const landingMode = ["landing", "appDemo", "accountantDemo"].includes(state.screen);
  app.innerHTML = `<main class="shell ${accountantMode ? "accountant-shell" : ""} ${landingMode ? "landing-shell" : ""}">${content}</main><section id="printRoot" class="print-root"></section>`;
}

function topbar(title, back = false) {
  const accountantMode = state.screen === "accountantLanding" || state.screen === "accountantDemoClient";
  return `
    <div class="topbar">
      ${back ? `<button class="icon-btn" data-action="back" aria-label="Back">←</button>` : `<div class="brand"><img src="/icon-192.png" alt=""><span>TidGo</span></div>`}
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

function accountantClientConsentId(client) {
  return client?.consent_id || client?.consentId || client?.accountant_consent_id || client?.connection_id || client?.access_id || (client?.id && client.id !== client.user_id ? client.id : "");
}

async function refresh() {
  if (!state.user?.id) return;
  try {
    const [receipts, income, consents] = await Promise.all([
      api(`/api/receipts/${state.user.id}`),
      api(`/api/income/${state.user.id}`),
      api(`/api/accountant/consents/client/${state.user.id}`).catch(() => [])
    ]);
    state.receipts = receipts || [];
    state.income = attachIncomeProofs(income);
    state.accountantConsents = consents || [];
  } catch (error) {
    toast(error.message || t("backendDown"));
  }
}

function render() {
  const publicScreens = ["landing", "appDemo", "accountantDemo", "accountantLanding", "accountantDemoClient"];
  if (!publicScreens.includes(state.screen) && !state.user) {
    state.screen = state.screen === "recover" || state.screen === "verifySignup" ? state.screen : "onboarding";
  }
  if (state.screen === "boot") state.screen = "home";
  const routes = {
    landing,
    appDemo,
    accountantDemo,
    accountantLanding,
    accountantDemoClient,
    onboarding,
    verifySignup,
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

function qrCodeUrl(target) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(target)}`;
}

function landing() {
  const origin = location.origin;
  const appUrl = `${origin}/app/`;
  const accountantUrl = `${origin}/accountant/`;
  shell(`
    <section class="landing-screen">
      <header class="landing-head">
        <div class="brand landing-brand"><img src="/icon-192.png" alt=""><span>TidGo</span></div>
        <div class="landing-head-actions">
          <nav class="landing-nav" aria-label="TidGo navigation">
            <a class="${state.marketingSection === "how" ? "active" : ""}" href="#info" data-marketing-section="how">${mk("navHow")}</a>
            <a class="${state.marketingSection === "who" ? "active" : ""}" href="#info" data-marketing-section="who">${mk("navWho")}</a>
            <a class="${state.marketingSection === "pricing" ? "active" : ""}" href="#info" data-marketing-section="pricing">${mk("navPricing")}</a>
            <a class="${state.marketingSection === "faq" ? "active" : ""}" href="#info" data-marketing-section="faq">${mk("navFaq")}</a>
            <a class="${state.marketingSection === "mtd" ? "active" : ""}" href="#info" data-marketing-section="mtd">${mk("navMtd")}</a>
            <a href="#contact" data-scroll-target="contact">${mk("navContact")}</a>
          </nav>
          ${marketingLanguagePicker()}
        </div>
      </header>
      <div class="landing-layout">
        <div class="landing-main">
          <div class="landing-hero">
            <span class="eyebrow">${mk("heroEyebrow")}</span>
            <h1>${mk("heroTitle")}</h1>
            <p>${mk("heroText")}</p>
          </div>
          <section class="landing-strip">
            <span>${mk("stepSnap")}</span>
            <span>${mk("stepTidy")}</span>
            <span>${mk("stepPack")}</span>
          </section>
          ${marketingInfoPanel()}
          <section class="landing-contact" id="contact">
            <div>
              <strong>${mk("contactTitle")}</strong>
              <span>${mk("contactText")}</span>
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
                <div class="social-links contact-social" aria-label="${escapeAttr(mk("socialTitle"))}">
                  <a class="social-icon social-x" href="https://x.com/TidGoApp" target="_blank" rel="noopener noreferrer" aria-label="TidGo on X">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h4.7l4.1 5.9L18 4h2.1l-6.3 7.2L21 20h-4.7l-4.6-6.6L6 20H3.9l6.8-7.8L4 4Zm3.7 1.6 9.4 12.8h1.7L9.4 5.6H7.7Z"/></svg>
                  </a>
                  <a class="social-icon social-facebook" href="https://www.facebook.com/TidGo" target="_blank" rel="noopener noreferrer" aria-label="TidGo on Facebook">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.4V6.8c0-.8.3-1.2 1.3-1.2H17V2.8c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.2v1.6H7.7v3.2h2.7V21H14v-9.4h2.7l.5-3.2H14Z"/></svg>
                  </a>
                  <a class="social-icon social-instagram" href="https://www.instagram.com/tidgouk/" target="_blank" rel="noopener noreferrer" aria-label="TidGo on Instagram">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9a4.7 4.7 0 0 1-4.7 4.7h-9a4.7 4.7 0 0 1-4.7-4.7v-9a4.7 4.7 0 0 1 4.7-4.7Zm0 3A1.7 1.7 0 0 0 5.8 7.5v9a1.7 1.7 0 0 0 1.7 1.7h9a1.7 1.7 0 0 0 1.7-1.7v-9a1.7 1.7 0 0 0-1.7-1.7h-9Zm4.5 2.8a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8Zm0 2.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm4.1-3.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"/></svg>
                  </a>
                </div>
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
      <footer class="landing-foot">
        <div class="landing-foot-copy">
          <span>${mk("footer")} <strong>${mk("copyright")}</strong></span>
          <span class="landing-privacy-note">${mk("privacyNote")}</span>
        </div>
      </footer>
    </section>
  `);
}

function demoShell(kind, title, subtitle, steps, ctaHref, ctaLabel, mode = "web") {
  shell(`
    <section class="landing-screen demo-screen ${mode === "app" ? "app-demo-screen" : "accountant-demo-screen"}">
      <header class="landing-head">
        <a class="brand landing-brand demo-brand" href="/"><img src="/icon-192.png" alt=""><span>TidGo</span></a>
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
        <label class="field"><span>${t("email")}</span><input class="input" name="email" type="email" autocomplete="email" required></label>
        <p class="hint">${t("emailHint")}</p>
        <button class="primary" type="submit">${t("start")}</button>
      </form>
      <button class="link-btn" data-action="recover">${t("haveAccount")}</button>
      <p class="hint">${t("installHint")}</p>
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

function clientConnectionCard() {
  const consents = state.accountantConsents || [];
  return `
    <form class="card stack" id="clientConnectionForm" style="margin-top:18px">
      <strong>${t("connectAccountant")}</strong>
      <span class="hint">${t("connectAccountantHint")}</span>
      ${consents.length ? consents.map((consent) => `
        <div class="connection-row">
          <span>
            <strong>${escapeHtml(consent.accountant_name || consent.accountant_email || "-")}</strong>
            <small>${escapeHtml(consent.accountant_email || "")}</small>
          </span>
          <button class="danger mini-btn" type="button" data-revoke-consent="${escapeAttr(consent.id)}">${t("revokeAccess")}</button>
        </div>
      `).join("") : `<span class="hint">${t("noConnection")}</span>`}
      <label class="field"><span>${t("accountantEmail")}</span><input class="input" name="accountant_email" type="email"></label>
      <button class="secondary" type="submit">${t("createInvite")}</button>
    </form>
  `;
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
        <button class="secondary" type="button" data-action="accountantPortal">${t("recordsTitle")}</button>
      </div>
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
            <button class="primary" type="submit" name="step" value="load">${at("showConnectedClients")}</button>
            <button class="secondary" type="button" data-action="signOutAccountant">${at("signOut")}</button>
          </div>
        ` : `
          <button class="primary" type="submit" name="step" value="request">${at("sendLoginCode")}</button>
          ${state.accountantCodeSent || state.accountantPendingEmail ? `
            <label class="field"><span>${at("loginCode")}</span><input class="input" name="code" inputmode="numeric" maxlength="6" autocomplete="one-time-code"></label>
            <button class="secondary" type="submit" name="step" value="verify">${at("verifyCode")}</button>
          ` : ""}
        `}
      </form>
      <div class="card stack">
        <strong>${at("handoffTitle")}</strong>
        <span class="hint">${at("handoffText")}</span>
        <div class="total-row"><span>${at("clientAccess")}</span><strong>${at("readOnly")}</strong></div>
        <div class="total-row"><span>${at("clientPermission")}</span><strong>${at("required")}</strong></div>
      </div>
      <div class="card stack">
        <div class="total-row"><span>${at("connectedClients")} ${infoTip(at("connectedClientsInfo"))}</span><strong>${clients.length}</strong></div>
      </div>
      <div class="card stack">
        <strong>${at("clientList")}</strong>
        ${clients.length ? clients.map((client, index) => `
          <button class="list-item" type="button" data-open-accountant-client="${escapeAttr(client.user_id)}">
            <span class="list-main">
              <span class="list-title">${index + 1}. ${escapeHtml(client.first_name || "Client")}</span>
              <span class="list-meta">${escapeHtml(client.trade || at("noTrade"))} | ${escapeHtml(client.email || at("noEmail"))}</span>
            </span>
            <span class="pill">${Number(client.receipt_count || 0) + Number(client.income_count || 0)} ${at("records")}</span>
          </button>
        `).join("") : `<div class="empty">${state.accountantPortalEmail ? at("noClients") : at("signInFirst")}</div>`}
      </div>
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
  const receipts = records.receipts || [];
  const income = attachIncomeProofs(records.income || []);
  const expenses = receipts.filter((item) => !item.is_client_expense);
  const paidForClient = receipts.filter((item) => item.is_client_expense);
  const rows = [
    ...income.map((item) => ({ ...item, type: "income", timestamp: item.timestamp || item.created_at })),
    ...receipts.map((item) => ({ ...item, type: item.is_client_expense ? "paid_for_client" : "expense", timestamp: item.timestamp || item.created_at }))
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
      <div class="insight-grid">
        <div class="insight-card"><span>${at("income")}</span><strong>${formatTotals(income)}</strong></div>
        <div class="insight-card"><span>${at("expenses")}</span><strong>${formatTotals(expenses)}</strong></div>
        <div class="insight-card"><span>${at("paidForClient")}</span><strong>${formatTotals(paidForClient)}</strong></div>
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
        <div class="total-row"><span>${at("expenses")}</span><strong>${formatTotals(expenses)}</strong></div>
        <div class="total-row"><span>${at("paidForClient")}</span><strong>${formatTotals(paidForClient)}</strong></div>
      </div>
      <div class="list">
        ${rows.length ? rows.map(accountantRecordRow).join("") : `<div class="empty">${at("noRecords")}</div>`}
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

function infoTip(text) {
  return `<span class="info-tip" tabindex="0" role="note" aria-label="${escapeAttr(text)}" title="${escapeAttr(text)}">i<span>${escapeHtml(text)}</span></span>`;
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

function accountantRecordRow(item) {
  const label = item.type === "paid_for_client" ? at("paidForClient") : item.type === "income" ? at("income") : at("expense");
  const detail = item.description || item.merchant || item.category || at("record");
  const proof = item.type === "income"
    ? (item.image_base64 || item.proof_base64 || item.proof_name ? at("proofAttached") : at("proofMissing"))
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
  const rows = [
    ["client", "type", "date", "amount", "currency", "description", "paid_for_client", "proof_available", "accountant_notes"],
    ...(records.income || []).map((item) => [
      client?.first_name || "Client",
      "income",
      new Date(item.timestamp || item.created_at).toISOString().slice(0, 10),
      Number(item.amount || 0).toFixed(2),
      item.currency || "GBP",
      item.description || "",
      "",
      item.image_base64 ? "yes" : "no",
      ""
    ]),
    ...(records.receipts || []).map((item) => [
      client?.first_name || "Client",
      item.is_client_expense ? "paid_for_client" : "expense",
      new Date(item.timestamp || item.created_at).toISOString().slice(0, 10),
      Number(item.amount || 0).toFixed(2),
      item.currency || "GBP",
      item.merchant || item.category || "",
      item.is_client_expense ? "yes" : "no",
      item.image_base64 ? "yes" : "no",
      ""
    ])
  ];
  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

function createAccountantClientPdfFile() {
  const jsPdf = window.jspdf?.jsPDF;
  if (!jsPdf) {
    throw new Error("PDF tool is still loading. Try again in a few seconds.");
  }

  const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
  const records = state.accountantClientRecords || { receipts: [], income: [] };
  const receipts = records.receipts || [];
  const income = records.income || [];
  const expenses = receipts.filter((item) => !item.is_client_expense);
  const paidForClient = receipts.filter((item) => item.is_client_expense);
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
  line("TidGo accountant pack", 22, "bold");
  line([client?.first_name || "Client", client?.trade || "", client?.email || ""].filter(Boolean).join(" | "), 11);
  y += 8;
  line("Income: " + formatTotals(income), 12, "bold");
  line("Expenses: " + formatTotals(expenses), 12, "bold");
  line("Paid for client: " + formatTotals(paidForClient), 12, "bold");
  y += 10;
  line(dt("pdfLine"), 9);
  y += 14;

  const rows = [
    ...income.map((item) => [day(item.timestamp || item.created_at), "Income", item.description || "Income", money(item.amount, item.currency)]),
    ...expenses.map((item) => [day(item.timestamp || item.created_at), "Expense", item.merchant || item.category || "Expense", money(item.amount, item.currency)]),
    ...paidForClient.map((item) => [day(item.timestamp || item.created_at), "Paid for client", item.merchant || item.category || "Paid for client", money(item.amount, item.currency)])
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
    const proofImage = item.image_base64 || item.proof_base64;
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
  return doc.output("blob", { filename: `TidGo-${safeName}-accountant-pack.pdf` });
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
    <p>${escapeHtml(dt("pdfLine"))}</p>
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
  y += 6;
  line(dt("pdfLine"), 9);
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
  const marketingLanguageButton = event.target.closest("[data-marketing-language]");
  if (marketingLanguageButton) {
    state.marketingLanguage = marketingLanguageButton.dataset.marketingLanguage;
    write("tg_marketing_language", state.marketingLanguage);
    render();
    return;
  }

  const marketingSectionLink = event.target.closest("[data-marketing-section]");
  if (marketingSectionLink) {
    event.preventDefault();
    state.marketingSection = marketingSectionLink.dataset.marketingSection;
    write("tg_marketing_section", state.marketingSection);
    render();
    setTimeout(() => document.getElementById("info")?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
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
  if (action === "recover") return go("recover");
  if (action === "settings") return go("settings");
  if (action === "accountantLanding") return go("accountantLanding");
  if (action === "accountantDemoClient") return go("accountantDemoClient");
  if (action === "signOutAccountant") {
    state.accountantPortalEmail = "";
    state.accountantPendingEmail = "";
    state.accountantDisplayName = "";
    state.accountantCodeSent = false;
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
  if (action === "downloadAccountantClientCsv") {
    if (!(await confirmDownload("accountant"))) return;
    const client = (state.accountantClients || []).find((item) => item.user_id === state.accountantSelectedClientId);
    const safeName = (client?.first_name || "client").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "client";
    downloadFile(`TidGo-${safeName}-records.csv`, accountantClientCsv(), "text/csv");
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
      link.download = `TidGo-${safeName}-accountant-pack.pdf`;
      link.click();
      URL.revokeObjectURL(url);
      toast("Client PDF downloaded.");
    } catch (error) {
      toast(error.message || "Could not create PDF.");
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
    try {
      await navigator.clipboard.writeText("Hi, could you add the missing income proof in TidGo when you can? It helps me prepare your records without the deadline panic.");
      toast("Request message copied.");
    } catch {
      toast("Request: please add the missing income proof in TidGo.");
    }
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
    if (!(await confirmDownload("user"))) return;
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
      if (!(await confirmDownload("user"))) return;
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
    state.pendingSignupEmail = "";
    state.user = null;
    return go("onboarding");
  }
  if (action === "signOutDevice") {
    if (!confirm(t("signOutConfirm"))) return;
    await deviceForget("rb_user");
    forget("rb_pending_signup_email");
    state.pendingSignupEmail = "";
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
  if (event.target.name === "delete_confirm") {
    const button = document.querySelector("[data-delete-account-button]");
    if (button) button.disabled = !event.target.checked;
  }
});

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form).entries());
  setBusy(true);
  try {
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
      await api("/api/users", {
        method: "POST",
        body: JSON.stringify({
          first_name: data.first_name,
          trade: data.trade || null,
          email,
          language: state.language
        })
      });
      await api("/api/auth/recovery/request", { method: "POST", body: JSON.stringify({ email }) });
      state.pendingSignupEmail = email;
      write("rb_pending_signup_email", email);
      write("rb_language", state.language);
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
      state.language = user.language || state.language;
      state.pendingSignupEmail = "";
      forget("rb_pending_signup_email");
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
        body: JSON.stringify({
          amount,
          merchant: data.merchant || null,
          category,
          date: data.date ? new Date(`${data.date}T12:00:00`).toISOString() : null
        })
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
        toast("Signed in.");
      } else {
        await loadAccountantClients(accountantEmail);
        toast("Clients loaded.");
      }
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
  history.replaceState(routeState(), "", location.pathname + location.search);
  setTimeout(render, 450);
})();

