var page = require('webpage').create();

//emulate settings
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };


page.open('https://www.canada.ca/en/revenue-agency/services/charities-giving/charities-listings.html', function (status) {
    console.log(status);

  
        window.setTimeout(function () {
            page.render('example2.png');
            phantom.exit();
        }, 500)
    
});
