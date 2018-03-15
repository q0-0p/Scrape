var page = require('webpage').create();

//emulate settings
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = {width: 1280, height: 1024};
var system = require('system');

var args = system.args;
console.log(
args.length    
);
var x = 
page.open('http://www.cra-arc.gc.ca/ebci/haip/srch/basicsearchresult-eng.action?k=masjid&s=registered&p=1&b=true', function(status){
    console.log("Status: " + status);

if(status ==="success"){
    page.render('example.png');
    console.log(page.plainText);
}

phantom.exit();
});
