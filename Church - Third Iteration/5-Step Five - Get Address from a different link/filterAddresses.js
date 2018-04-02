
//use phantomjs firstSte.js
var page = require('webpage').create();
var fs = require('fs');
var system = require('system')


var args = system.args;
//emulate settings for web browser
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };

//list of links to be used for getting the addresses on chimp.net
var htmlPages = [];
for (var x =0; x<4; x++){
    var test = fs.read('rawHTML'+(x+1)+'.txt').split('</html>')
    test.pop();
    for(var y = 0; y <test.length; y++)
    htmlPages.push(test[y])
}


//var counter = 0; used to check if the numbers match, commented it out after
for(var x =0; x<htmlPages.length; x++){
    if(htmlPages[x].indexOf('Sorry, we couldn')>0){
        fs.write('addresses.txt', '--no Address available on chimp ' +'\n','a' )
        fs.write('missingIndexes.txt',+(x+1)+'\n','a')
        
    }
    else if(htmlPages[x].indexOf('<img alt="map-point" src="https://d1sfxtpe5l0d0y.cloudfront.net/assets/ui/cpp-address-e6540df09db7d842899f859a025a8a3011fafdffb9f515a63b25629dfb93dec4.png">'>-1))
    {
        htmlPages[x] = htmlPages[x].substring(htmlPages[x].indexOf('<img alt="map-point" src="https://d1sfxtpe5l0d0y.cloudfront.net/assets/ui/cpp-address-e6540df09db7d842899f859a025a8a3011fafdffb9f515a63b25629dfb93dec4.png">'));
        htmlPages[x] = htmlPages[x].substring(htmlPages[x].indexOf('span'));
        htmlPages[x] = htmlPages[x].substring(htmlPages[x].indexOf('>')+1);
        htmlPages[x] = htmlPages[x].substring(0,htmlPages[x].indexOf('<'));
        console.log(htmlPages[x])
        fs.write('addresses.txt', htmlPages[x]+'\n', 'a')
    }
    else{
        console.log(' hehehehe.... HEHEHEHEHE... AHAHAHHAHAHAHAHHAHAHAH !!!! prob won\'t reach here')
    }
}
fs.write('testing.txt', htmlPages[0], 'w')
//console.log(htmlPages.length)
//console.log(counter);
phantom.exit();