var page = require('webpage').create();
var fs = require('fs');
var system = require('system')


var args = system.args;
//emulate settings
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };
var number =args[1];


page.open('http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=ON&o=&z=&g=+&t=+&y=+&p='+number+'#pageControl', function (status) {
    console.log(status);
        if(status !== 'success'){
            fs.write('test.txt', 2, 'a');
            phantom.exit();
        }
  
        window.setTimeout(function () {
            page.render('example2.png');
            var test = page.content.toString();
            var trim = test.substring(test.indexOf('"Charity name"'));
            trim = trim.substring(0,trim.indexOf("Showing"))
             trim = trim.substring(trim.indexOf('</tr>')+5)
            // trim = trim.substring(0, trim.indexOf('">'))
            fs.write('test.txt',  trim, 'a');
            phantom.exit();
        }, 2000)
    
});
