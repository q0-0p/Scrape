
var page = require('webpage').create();
var fs = require('fs');
var system = require('system')


var args = system.args;
//emulate settings
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };
var number =args[1];

var urls = [
    'http://phantomjs.org/',
    'https://twitter.com/sidanmor',
    'https://github.com/sidanmor'
];

var i = 0;

// the recursion function
var genericCallback = function () {
    return function (status) {
        console.log("URL: " + urls[i]);
        console.log("Status: " + status);

        i++;
        
        if (!status || status === 'fail'){

            //-- YOUR STUFF HERE IF YOUR STATUS FAILS---------------------- 
            // do your stuff here... I'm taking a picture of the page
            page.render('example' + i + '.png');
            //-----------------------------------------

            if (i < urls.length) {
                // navigate to the next url and the callback is this function (recursion)
                page.open(urls[i], genericCallback());
            } else {
                // try navigate to the next url (it is undefined because it is the last element) so the callback is exit
                page.open(urls[i], function () {
                    phantom.exit();
                });
            }
        }

        if (status === "success") {

            //-- YOUR STUFF HERE IF YOUR STATUS PASSES---------------------- 
            // do your stuff here... I'm taking a picture of the page
            page.render('example' + i + '.png');
            //-----------------------------------------

            if (i < urls.length) {
                // navigate to the next url and the callback is this function (recursion)
                page.open(urls[i], genericCallback());
            } else {
                // try navigate to the next url (it is undefined because it is the last element) so the callback is exit
                page.open(urls[i], function () {
                    phantom.exit();
                });
            }
        }
    };
};

// start from the first url
page.open(urls[i], genericCallback());