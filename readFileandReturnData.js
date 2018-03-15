var fs = require('fs');



//console.log(len);
var x = fs.read('linkss.txt');
var y = x.split('\n');


var len = x.match((/\n/g) || []).length;
var countFinished = 0;
var maxFinished = len;
function checkFinish() {
    countFinished++;
    console.log(countFinished);
    if (countFinished === 5) {
        console.log(countFinished);
        console.log(linksArray[0]);
        phantom.exit();
    }
}
var linksArray = [];
for (var i = 0; i < y.length; i++) {
    linksArray.push(y[i]); //this doesn't strip '\n'
}
//console.log(linksArray[0]);
// for (var i = 0; i < y.length; i++) {
//     console.log(linksArray); //this doesn't strip '\n'
// }
for (i = 0; i < 5; i++) {
    //var webPage = require('webpage');
    //var page = webPage.create();
    //page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
    //page.viewportSize = { width: 1280, height: 1024 };
    var page = require('webpage').create();
    //emulate settings
    page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
    //set size of page?
    page.viewportSize = { width: 1280, height: 1024 };
    page.open(linksArray[i], function (status) {

        window.setTimeout(function () {
            var user = page.evaluate(function () {
                return document.querySelector(".legend-ul").outerHTML;
            })

            //page.render('links.png');
            var content = user;
            //console.log(linksArray[i]);
            fs.write('test.txt', content, 'a')

            checkFinish();
        }, 2000)


    });
}



//test;
// phantom.exit();  