const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');




var x = fs.read('aa.txt').toString();

var y = [];

y = x.split('\n');


console.log(y.length);




for (var i = 0; i < y.length; i++) {
    if (y[i].indexOf('n/a') >-1) {
        fs.write('filteredSingle2.txt', 'n/a' + '\n', 'a');

    }
    else if(y[i].indexOf('h4') >-1)
    {
        y[i] = y[i].replace('<span itemprop="streetAddress">','')
        y[i] = y[i].replace(',&nbsp;<wbr></span><!----><span itemprop="addressLocality">',' ')
        y[i] = y[i].replace(',&nbsp;</span><!----><span itemprop="addressRegion">',' ')
        y[i] = y[i].replace('&nbsp;&nbsp;&nbsp;<wbr></span><!----><span itemprop="postalCode">',' ')        
        //y[i] = y[i].substring(0, y[i].indexOf('</span>'))
        fs.write('filteredSingle2.txt', y[i] + '\n', 'a');        
    }
    else{
        y[i] = y[i].replace('<span itemprop="streetAddress">','')
        y[i] = y[i].replace(',&nbsp;<wbr></span><!----><span itemprop="addressLocality">',' ')
        y[i] = y[i].replace(',&nbsp;</span><!----><span itemprop="addressRegion">',' ')
        y[i] = y[i].replace('&nbsp;&nbsp;&nbsp;<wbr></span><!----><span itemprop="postalCode">',' ')        
        //y[i] = y[i].substring(0, y[i].indexOf('</span>'))
        fs.write('filteredSingle2.txt', y[i] + '\n', 'a');
    }
}
// console.log(y[0])

