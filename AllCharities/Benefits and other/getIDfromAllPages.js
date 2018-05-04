var fs = require('fs');


var phonenos = [];
var a = [];
var links = [];
links = fs.read('links.txt').toString().split('\n');
var id = [];
for (var jake = 0; jake < links.length; jake++) {
    id.push(links[jake].substring(links[jake].lastIndexOf('=') + 1));
}
console.log(id.length);

id.pop();
for (var x = 0; x < id.length; x++) {
    //fs.write('oj.txt',id[x]+'\n','a');
}
var splitt = fs.read('allPages2.txt').toString();
var individual = splitt.split('</html>');

var splitt2 = fs.read('allPages3.txt').toString();
var individual2 = splitt2.split('</html>');


for (var x = 0; x < individual.length; x++) {
    //The page you are looking for cannot be found
    if (individual[x].indexOf('The page you are looking for cannot be found') > -1) {
        a.push('n/a')
    }
    else {
        var leftOver = individual[x].substring(individual[x].indexOf('Business/ registration number:'));
        leftOver = leftOver.substring(leftOver.indexOf('<strong>') + 8);
        leftOver = leftOver.substring(0, leftOver.indexOf('</strong>'));

        a.push(leftOver);
    }
}
for (var x = 0; x < individual2.length; x++) {
    if (individual2[x].indexOf('The page you are looking for cannot be found') > -1) {
        a.push('n/a')
    }
    else {
        var leftOver = individual2[x].substring(individual2[x].indexOf('Business/ registration number:'));
        leftOver = leftOver.substring(leftOver.indexOf('<strong>') + 8);
        leftOver = leftOver.substring(0, leftOver.indexOf('</strong>'));
        a.push(leftOver);
    }
}
for (var x = 0; x < a.length; x++) {
    fs.write('new.txt', a[x] + '\n', 'a');
}