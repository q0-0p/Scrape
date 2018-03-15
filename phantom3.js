var fs = require('fs');
var page = require('webpage').create();
var system = require('system');

var args = system.args;

console.log(args);
//emulate settings
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };


page.onConsoleMessage = function (msg) {
    //console.log(msg);
}



var x = fs.read('linkss.txt');

var y = x.split('\n');
var z = y[0];


var link = y[0].toString() ;
var link2 = 'http://www.cra-arc.gc.ca/ebci/haip/srch/t3010form22quickview-eng.action?r=http%3A%2F%2Fwww.cra-arc.gc.ca%3A80%2Febci%2Fhaip%2Fsrch%2Fbasicsearchresult-eng.action%3Fk%3Dmoslem%26amp%3Bs%3Dregistered%26amp%3Bp%3D1%26amp%3Bb%3Dtrue&fpe=2016-12-31&b=890266067RR0001&n=PERSIANMOSLEMFOUNDATION';
page.open('http://www.cra-arc.gc.ca/ebci/haip/srch/t3010form22QuickView-eng.action?b=897762696RR0001&fpe=2015-12-31', function (status) {
    

        window.setTimeout(function () {
            var user = page.evaluate(function(){
                return document.querySelector(".legend-ul").outerHTML;
            })

            //page.render('example3.png');
            var path = 'testt.txt';
            var content = user;
            fs.write(path, '\n'+args[1]+'\n', 'a');
            fs.write(path, content, 'a');
            console.log("diddedd");
            phantom.exit();
        }, 1300)

    }

);
