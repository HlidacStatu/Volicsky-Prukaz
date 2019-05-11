const appConfig = {
    electionName: {
        'CZ': 'Volby do Evropského parlamentu 2019',
        'EN': 'European Parliament election 2019'},
    electionDays: [{
            startTime: "24.05.2019 14:00",  // in one election day start and end date (not time) must be same
            endTime: "24.05.2019 22:00"
        },{
            startTime: "25.05.2019 08:00",  // in one election day start and end date (not time) must be same
            endTime: "25.05.2019 14:00"}],
    voterCardRequestdeliveryLastTime:
    {
        personal: "22.05.2019 16:00",
        post: "17.05.2019 16:00"
    },
    minimumAge: 18,         // minimum age (year) for the latest election day
    minimumDaysForRegisterOnElectoralRollBeforeElection: 40,         //  apply to have your details transferred (or register) to the EP electoral roll no later than 40 days before the election
    applicationTemplate: "assets/files/Zadost-Volicsky-Prukaz-EU2019-CR.pdf",
    filenameForDownloadApplication: "Zadost-Volicsky-Prukaz-EU2019-CR.pdf",
    showFullValidationSummary: false        // true = show all error, false = show only important info
}
