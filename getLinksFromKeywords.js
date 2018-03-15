//use phantomjs getLinksFromKeywords.js


var fs = require('fs');
var page = require('webpage').create();
var system = require('system');
var args = 
//emulate settings
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };


page.onConsoleMessage = function (msg) {
    //console.log(msg);
}

page.open('http://www.cra-arc.gc.ca/ebci/haip/srch/basicsearchresult-eng.action?k=moslem&s=registered&p=1&b=true', function (status) {
    //console.log(status);
    if (status !== 'success') {
        console.log('poop, sorry');
        phantom.exit();
    }
    else {

        window.setTimeout(function () {
            var user = page.evaluate(function(){
                return document.querySelector("tbody").outerHTML;
            })

            page.render('links.png');
            var path = 'links.xml';
            var content = user;
            fs.write(path,content, 'a');
            phantom.exit();
        }, 40)

    }

});





// page.open('links.xml', function (status) {
//     //console.log(status);
//     if (status !== 'success') {
//         console.log('poop, sorry');
//         phantom.exit();
//     }
//     else {

//         window.setTimeout(function () {
//             var user = page.evaluate(function(){
//                 return document.querySelector("tbody").outerHTML;
//             })

//             page.render('links.png');
//             var path = 'links.xml';
//             var content = user;
//             fs.write(path,content, 'a');
//             phantom.exit();
//         }, 40)

//     }

// });