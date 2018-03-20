const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');




var x =fs.read('linksFiltered.txt').toString();

var y = [];

y = x.split('</a>');


for(var i = 0; i<y.length; i++){
y[i] = y[i].substring(y[i].indexOf('">'))
y[i] = y[i].substring(y[i].indexOf(0,'</a>'))
// y[i] = y[i].substring(y[i].indexOf('<strong>')+8,y[i].indexOf('</strong>'))
fs.write('namesRedone.txt',y[i]+'\n','a');
}
console.log(y[0])

