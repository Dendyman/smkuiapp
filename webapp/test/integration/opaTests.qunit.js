sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'app1/myfioriapp/test/integration/FirstJourney',
		'app1/myfioriapp/test/integration/pages/RequestList',
		'app1/myfioriapp/test/integration/pages/RequestObjectPage'
    ],
    function(JourneyRunner, opaJourney, RequestList, RequestObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('app1/myfioriapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRequestList: RequestList,
					onTheRequestObjectPage: RequestObjectPage
                }
            },
            opaJourney.run
        );
    }
);