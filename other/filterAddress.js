const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');




var x = fs.read('addresses.txt').toString();

var y = [];

y = x.split('<!DOCTYPE html>');


console.log(y.length);




for (var i = 0; i < y.length; i++) {
    if (y[i].indexOf('<span itemprop="') <0) {
        fs.write('aa.txt', 'NUMBER NOT FOUND ADDRESS' + '\n', 'a');

    }
    else {
        y[i] = y[i].replace(y[i].indexOf('<span itemprop="'))
        y[i] = y[i].substring(0, y[i].indexOf('<p>'))
        fs.write('aa.txt', y[i] + '\n', 'a');
    }
}
console.log(y[0])

