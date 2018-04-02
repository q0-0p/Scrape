//This class is used to retrieve some of the charities' previous years rather than most recent, as they haven't filed their taxes yet for this year
const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');
var page = require('webpage').create();

page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };


var big = fs.read('mixedJSON.txt');
var small = fs.read('revampedJSON.txt');

var bigSplit = big.split('\n');
var smallSplit = small.split('\n');

bigSplit.pop();
smallSplit.pop();
console.log(bigSplit[bigSplit.length-1]);
console.log(smallSplit[smallSplit.length-1]);
var counter = 0;

for(var x = 0; x<bigSplit.length;x++){
    bigSplit[x] = JSON.parse(bigSplit[x]);
    if(bigSplit[x].hasOwnProperty('url2')){
        smallSplit[counter] = JSON.parse(smallSplit[counter]);
        bigSplit[x].rDonations = smallSplit[counter].rDonations;
        bigSplit[x].nDonations = smallSplit[counter].nDonations;
        bigSplit[x].totalRev = smallSplit[counter].totalRev;
        counter++;
    }
}
for(var y =0;y<bigSplit.length; y++){
    fs.write('correctJSON.txt',JSON.stringify(bigSplit[y])+'\n','a')
}
phantom.exit();