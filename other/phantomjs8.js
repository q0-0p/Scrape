const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');




var x =fs.read('rawHTML.txt').toString();

var y = [];

y = x.split('<!-- Revenue ends -->');


for(var i = 0; i<y.length; i++){
y[i] = y[i].substring(y[i].indexOf('<!-- Revenue starts -->'))
if(y[i].indexOf('Total revenue:')>-1){
y[i] = y[i].substring(y[i].indexOf('Total revenue:')+15)
y[i] = y[i].substring(0,y[i].indexOf('</strong>'))
fs.write('revenueRevamped.txt',y[i]+'\n','a');
}
else{
fs.write('revenueRevamped.txt','LLL'+'\n','a');
}
}
console.log(y[0])

