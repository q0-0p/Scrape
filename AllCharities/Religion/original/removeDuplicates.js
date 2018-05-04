var fs = require('fs');

var x = fs.readFileSync('numemLinks.txt').toString();

var input = x.split('\n');



var duplicates = input.reduce(function(acc, el, i, arr) {
    if ((arr.indexOf(el)!=='--no link found')&&(arr.indexOf(el) !== i && acc.indexOf(el) < 0)) acc.push(el); return acc;
  }, []);

console.log(input.length);
console.log(duplicates);