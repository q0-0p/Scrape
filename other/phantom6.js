const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');




var x =fs.read('rawHTMLforemail.txt').toString();

var y = [];

y = x.split('Website address');


for(var i = 0; i<y.length; i++){
y[i] = y[i].substring(y[i].indexOf('E-mail address:'))
y[i] = y[i].substring(y[i].indexOf('<strong>'))
y[i] = y[i].substring(y[i].indexOf('<strong>')+8,y[i].indexOf('</strong>'))
fs.write('plainEmail.txt',y[i]+'\n','a');
}
console.log(y[0])

