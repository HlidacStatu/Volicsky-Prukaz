const localisationTexts = {
    empty: { 'CZ': '', 'EN': '' },

    headerTitlePlural: {CZ: 'Volby se uskuteční ve dnech', EN: 'In the Czech Republic the elections will take place on days'},
    headerTitleSingular: {CZ: 'Volby se uskuteční ', EN: 'In the Czech Republic the elections will take place on'},

    electionCalculatorTest : {CZ: 'Nejste rozhodnuti koho volit? Můžete vyzkoušet <a href="' + appConfig.electionCalculatorLink['CZ'] + '" target="_blank">Volební kalkulačku</a>', EN: 'You can try <a href="' + appConfig.electionCalculatorLink['EN'] + '" target="_blank">Voting Advice Application</a>'},

    blockCaptionsPrivacy: { CZ: 'Soukromí', EN: 'Privacy' },
    blockCaptionsMyIdentity: { CZ: 'Moje identita', EN: 'My identity' },
    blockCaptionsMyAddress: { CZ: 'Moje adresa trvalého pobytu', EN: 'My permanent address' },
    blockCaptionsMunicipality: { CZ: 'Můj obecní úřad', EN: 'My municipal office' },
    blockCaptionsDeliveryAddress: { CZ: 'Doručení', EN: 'Delivery' },

    textsDeliveryMethodInPerson: { CZ: 'převezmu osobně', EN: 'collected by me personally' },
    textsDeliveryMethodRepresentative: { CZ: 'převezme osoba, která se prokáže plnou mocí s mým úředně ověřeným podpisem', EN: 'collected by another person with Power of Attorney with my officially authenticated signature' },
    textsDeliveryMethodMyAddress: { CZ: 'žádám zaslat na adresu mého trvalého pobytu', EN: 'sent to my permanent address' },
    textsDeliveryMethodOtherAddress: { CZ: 'žádám zaslat na jinou adresu', EN: 'sent to another address' },

    validatorDelivery: { 'CZ': 'Není zvolen způsob převzetí voličského průkazu', 'EN': 'Please select delivery method type' },
    validatorBirthday: { 'CZ': 'Minimální věk je ' + appConfig.minimumAge + ' let v poslední den voleb', 'EN': 'Minimum age is ' + appConfig.minimumAge + ' years on the last election day' },

    optional: { CZ: '(nepovinné)', EN: '(optional)' },
    optionalAddressLine: { CZ: '(nepovinné, např. firma nebo číslo bytu)', EN: '(optional, e.g. company name or flat number)' },

    postalCodeWarning: { CZ: 'Nelekněte se, PSČ adresy vašeho obecního úřadu se může lišit od PSČ adresy vašeho trvalého bydliště.', EN: 'Don’t worry, the office’s postcode may be different from yours.' },
    deliveryTimeWarning: {
         CZ: 'V případě, že chcete doručit průkaz mimo Českou republiku, raději se u vašeho úřadu ujistěte, zda vám průkaz dokážou včas doručit.',
         EN: 'In case you want to deliver a card outside of the Czech Republic, please make sure that the card is delivered in time to the appropriate authority.'
    },
    votingCardReceiveWarning: {
        CZ: '<strong>Důležité upozornění</strong>: Obecní úřad nebo zastupitelský úřad může voličský průkaz vydat <strong>nejdříve ' + appConfig.voterCardReceiveBeforeElection + ' dnů</strong> před prvním dnem konání voleb.',
        EN: '<strong>Important warning</strong>: the voter card can be issued (and therefore received) <strong> ' + appConfig.voterCardReceiveBeforeElection + ' days before</strong> the first election day at the earliest.'
    },

    formValidationWarning: {
        CZ: 'Formulář zřejmě není správně vyplněn, pokračovat?\n\n(u mezinárodních nebo speciálních adres může kontrola signalizovat falešné chyby)\n',
        EN: 'There is probably a mistake in the form. Continue to preview?\n(international and special addresses may trigger false errors)\n'
    },
    formResetConfirm: { CZ: 'Opravdu si přejete smazat obsah formuláře?', EN: 'Do you really want to reset form?' },

    formButtonCreateApplication: { CZ: 'Vytvořit žádost', EN: 'Create application' },
    formButtonReset: { CZ: 'Smazat údaje', EN: 'Reset form' },

    autocompleteMoreItems: { CZ: '(...upřesněte zadání...)', EN: '(...be more specific...)' },

    privacyInfo: {
        CZ: 'Vámi vyplněné osobní údaje nikomu neodesíláme, ani je dále nezpracováváme. Nemusíte se ničeho bát – celá žádost vzniká pouze na vašem počítači. Pokud chcete mít 100% jistotu, můžete se při vytváření žádosti odpojit od internetu nebo si stáhněte a vyplňte <a href="' + appConfig.applicationTemplate + '">šablonu žádosti</a> ručně sami.',
        EN: 'We will not send your details to anyone, nor do we process them. No need to worry - the whole application is made only on your own computer. If you want to be 100% sure, disconnect from the internet while you complete the application or <a href="' + appConfig.applicationTemplate + '">download the application</a> and complete it manually.'
    },

    applicationTemplateDownloadLink: { CZ: '(stažení šablony žádosti)', EN: '(application template download)' },

    deliveryInfo: { CZ: 'Pokud se můžete na váš obecní úřad dostavit osobně, nepotřebujete předem žádnou písemnou žádost vytvářet. Stačí, pokud se dostavíte na úřad s platným dokladem totožnosti.', EN: 'If you can come to your municipal office in person then you don\'t have to prepare application. You just need valid ID card with you.' },

    genericErrorMessage: { CZ: 'Položka [%CAPTION%] pravděpodobně není správně vyplněna', EN: 'Field [%CAPTION%] probably isn\'t filled correctly'},

    conjunctionAND: { CZ: 'a', EN: 'and'},
    conjunctionOR: { CZ: 'nebo', EN: 'or'},

    applicationDataOfficeName: { 'CZ': 'Název úřadu', 'EN': 'Office name' },
    applicationDataAddressLine0: { 'CZ': 'Upřesnění adresy', 'EN': 'Address details' },
    applicationDataAddressLine1: { 'CZ': 'Ulice a číslo popisné', 'EN': 'Street and house number' },
    applicationDataPostalCode: { 'CZ': 'PSČ', 'EN': 'Postcode' },
    applicationDataCity: { 'CZ': 'Obec', 'EN': 'City' },
    applicationDataDatabox: { 'CZ': 'Datová schránka', 'EN': 'Databox' },
    applicationCoordinateX: { 'CZ': 'Souřadnice X', 'EN': 'Coordinate X' },
    applicationCoordinateY: { 'CZ': 'Souřadnice Y', 'EN': 'Coordinate Y' },
    applicationDataFullName: { 'CZ': 'Jméno a příjmení', 'EN': 'Full name' },
    applicationDataBirthdate: { 'CZ': 'Datum narození', 'EN': 'Date of birth' },
    applicationDataPhone: { 'CZ': 'Telefon', 'EN': 'Telephone' },
    applicationDataDelivery: { 'CZ': 'Způsob převzetí voličský průkazu po jeho vyhotovení', 'EN': 'When completed, the voter card will be' },
    applicationDataCountry: { 'CZ': 'Stát', 'EN': 'Country' },

    previewStep1Header:  { 'CZ': '1. Zkontrolujte žádost', 'EN': '1. Review the application' },
    previewStep1Check:  {
        'CZ': 'Prosíme, zkontrolujte si údaje v náhledu vygenerované žádosti.\nV případě, že se vám náhled nezobrazuje, proveďte kontrolu po jejím stažení.',
        'EN': 'Please check the details generated by the application.\nIf you don’t see a preview of your application, don’t worry. You can review your application directly from your computer.'
    },
    previewStep1AfterCheck:  {
        'CZ': 'Pokud jsou všechny údaje v pořádku, žádost si stáhněte do vašeho zařízení a pročtěte si následující sekci s informacemi o možnostech jejího způsobu doručení.\nPokud není některá z vyplněných informací správná, nic se neděje. Údaje můžete snadno změnit.',
        'EN': 'If your details are correct, download the application to your computer or mobile device and continue to select the delivery of your voting card in the next section.\nIf some details are incorrect, nothing happens. You can easily change the details.'
    },
    previewStep1DownloadApplication:  { 'CZ': 'Stáhnout \nžádost', 'EN': 'Download \nApplication' },
    previewStep1ChangeDetails:  { 'CZ': 'Změnit \núdaje', 'EN': 'Change \ndetails' },

    previewStep2Header:  { 'CZ': '2. Doručte žádost na váš úřad', 'EN': '2. Deliver the application to your office' },
    previewStep2MunicipalityNotSelected:  { 'CZ': '(úřad nebyl při vyplňování žádosti vybrán)', 'EN': '(you didn\'t select municipality in previous step)' },
    previewStep2ViaDataboxHeader:  { 'CZ': 'Pomocí datové schránky', 'EN': 'Via data box' },
    previewStep2ViaDataboxInfo:  {
        'CZ': 'Pokud máte datovou schránku, stačí odeslat vytvořenou žádost jako přílohu ve formátu PDF do <a href="' + appConfig.databoxLink + '" target="_blank">datové schránky</a> vašeho obecního úřadu:',
        'EN': 'If you have a data box, it’s enough to send your completed application as a PDF attachment to the <a href="' + appConfig.databoxLink + '" target="_blank">data box</a> of the appropriate office:'
    },
    previewStep2ViaDataboxSignature:  {
        'CZ': 'Žádost nemusí být podepsaná (nebo opatřena elektronickým podpisem) a tím pádem nemusíte podpis ani ověřovat – vaše identita je ověřena přihlášením do datové schránky.',
        'EN': 'Your application does not need to be signed so you do not need to sign or verify your signature - your identity is verified by logging in to your data box.'
    },
    previewStep2ViaDataboxLatestDate:  { 'CZ': 'Žádost odešlete nejpozději do', 'EN': 'Send your application no later than' },

    previewStep2ViaPostHeader:  { 'CZ': 'Poštou', 'EN': 'Via post' },
    previewStep2ViaPostInfo:  {
        'CZ': 'Vytvořenou žádost vytiskněte, opatřete ji úředně ověřeným podpisem (na libovolném obecním úřadu, u notáře apod.) odešlete na adresu vašeho úřadu:',
        'EN': 'Print your completed application and send it with a verified signature to the address of your office:'
    },
    previewStep2ViaPostLatestDate:  { 'CZ': 'Žádost musí být doručena (doručena, nikoliv odeslána) do', 'EN': 'Your application must be delivered (received, not only sent) by' },

    previewStep2InPerson:  { 'CZ': 'Osobně', 'EN': 'In person' },
    previewStep2InPersonInfo:  {
        'CZ': 'Vytvořenou žádost vytiskněte a dostavte se <a href="' + appConfig.searchMapyCZLink + '" target="_blank">na váš obecní úřad</a> s platným dokladem totožnosti:',
        'EN': 'If you can go <a href="' + appConfig.searchMapyCZLink + '" target="_blank">to your office</a> personally, you don’t need to make an appointment. You only need to go to the appropriate office with your proof of identity (I.D. card or passport):'
    },
    previewStep2InPersonLatestDate:  { 'CZ': 'Na úřad můžete přijít podat žádost nejpozději', 'EN': 'You can go to the office no later than' },
    previewStep2InPersonWarning:  { 'CZ': 'Raději si ale předem zkontrolujte úřední hodiny!', 'EN': 'Check the office hours at your local office first!' },

    previewStep3Header:  { 'CZ': '3. Přejeme dobrou volbu!', 'EN': '3. We wish you good voting!' },
    previewStep3Info:  { 'CZ': 'Dostavte se s vaším voličským průkazem a platným průkazem totožnosti %TIME% do <u>kterékoliv volební místnosti v ČR</u>', 'EN': 'Come on %TIME% with your voting card and proof of identity to <u>any polling station in CZ</u>'},
    previewStep3Warning:  {
        'CZ': '<strong>Upozornění:</strong> pokud máte vystaven volební průkaz a chcete volit ve volební místnosti vašeho volebního okrsku, musíte mít volební průkaz také sebou. Bez něj vám volba nebude umožněna!',
        'EN': 'Meanwhile, you can spread the word of the possibility to apply for your voting card to your family, friends, colleagues etc.'
    }
};