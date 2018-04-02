//This class is used to retrieve some of the charities' previous years rather than most recent, as they haven't filed their taxes yet for this year
const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');
var page = require('webpage').create();

page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };



var obj = fs.read('phonenemailHTML.txt');
var split = obj.split('</html>');
split.pop();

console.log((obj.match(/Telephone number:/g) || []).length);
console.log((obj.match(/E-mail address:/g) || []).length);
var numbers = [];
var emails = [];
//substring to Telephone number: then subtstring to <strong> then get up until </strong> and trim() result for each item, store it in 
for(var x =0; x<split.length; x++){
    split[x] = split[x].substring(split[x].indexOf('Telephone number:'));
    split[x] = split[x].substring(split[x].indexOf('<strong>'));
    numbers[x] = split[x].substring(8,split[x].indexOf('</strong>'))
    split[x] = split[x].substring(split[x].indexOf('E-mail address:'));
    split[x] = split[x].substring(split[x].indexOf('<strong>'));
    emails[x] = split[x].substring(8,split[x].indexOf('</strong>'))
}

var obj2 = fs.read('correctJSON.txt');
var split2 = obj2.split('\n');
split2.pop();
//unfortinately the name was lost in the way somewhere, need to re-add it
//must take name from url i guess
console.log(split2.length)
for(var x =0; x<split2.length; x++){
    split2[x]= JSON.parse(split2[x])
    split2[x].telephone = numbers[x];
    split2[x].email = emails[x];

    var getName = split2[x].url.substring(split2[x].url.lastIndexOf('=')+1);
    // console.log(typeof getName)
     //getName = getName.subtstring(getName.lastIndexOf('='));
     getName = getName.replace(/\+/g, '%20'); // '1%20%2B%201%20%3D%202'
    getName = decodeURIComponent(getName);
     //console.log(getName);
     split2[x].name = getName;




     fs.write('correctJSON2.txt',JSON.stringify(split2[x])+'\n','a')
}


phantom.exit();