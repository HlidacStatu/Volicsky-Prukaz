const appConfig = {
    electionName: {
        CZ: 'Volby do Evropského parlamentu 2019',
        EN: 'European Parliament election 2019'},
    electionDays: [{
            startTime: "24.05.2019 14:00",  // in one election day start and end date (not time) must be same
            endTime: "24.05.2019 22:00"
        },{
            startTime: "25.05.2019 08:00",  // in one election day start and end date (not time) must be same
            endTime: "25.05.2019 14:00"}],
    voterCardRequestdeliveryLastTime: {
        personal: "22.05.2019 16:00",
        post: "17.05.2019 16:00"
    },
    showENVersion: true,                    // true = button for EN version application is showed
    europeanParliamentElection: true,       // true = election is European Parliament election (display some texts in form like 'I want to vote for candidates from another EU country')
    voterCardReceiveBeforeElection: 15,     // the voter card can be issued (and therefore received) X days before the first election day at the earliest
    minimumAge: 18,                         // minimum age (year) for the latest election day
    minimumDaysForRegisterOnElectoralRollBeforeElection: 40,         //  apply to have your details transferred (or register) to the EP electoral roll no later than 40 days before the election
    applicationTemplate: "assets/files/Zadost-Volicsky-Prukaz-EU2019-CR.pdf",
    filenameForDownloadApplication: "Zadost-Volicsky-Prukaz-EU2019-CR.pdf",
    electionCalculatorLink: {
        CZ: 'https://volebnikalkulacka.cz/',
        EN: 'https://euandi2019.eu'
    },
    databoxLink: "https://www.mojedatovaschranka.cz",
    searchMapyCZ: "https://mapy.cz/zakladni?q=jtsk:%Y%,%X%",    // https://mapy.cz/zakladni?q=jtsk:801310.09,1077249.26
    showFullValidationSummary: true        // true = show all error, false = show only important info
}
