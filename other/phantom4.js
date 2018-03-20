const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');




var x =fs.read('rawHTML.txt').toString();

var y = [];

y = x.split('Quick view of the current FPE-');


for(var i = 0; i<y.length; i++){
y[i] = y[i].substring(y[i].indexOf('Full View'))
y[i] = y[i].substring(y[i].indexOf('<li>'))
y[i] = y[i].substring(y[i].indexOf('href="')+6,y[i].indexOf('">'))
fs.write('plain.txt',y[i]+'\n','a');
}
console.log(y[0])

