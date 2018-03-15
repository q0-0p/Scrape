//use node test.js in cmd

const fs = require('fs');


var x = fs.readFileSync('linksFiltered.txt').toString();
//console.log(x.toString());
var y = x.split('\n');

var namesRaw=[] ;
var linksRaw=[] ; 

for (var i = 0; i < y.length ; i = i + 2) {
    linksRaw.push(y[i]); //this doesn't strip '\n'
    namesRaw.push(y[i+1]); //this doesn't strip '\n'
}
var linesCount = (x.match(/\n/g) || []).length;

// console.log(namesRaw);
// console.log(linksRaw);


var names = namesRaw.toString().replace(/<\/a>,/g, "\n");
names = names.toString().replace(/<\/a>/g, " ");

var links = linksRaw.toString().replace(/<a href="/g,"");
links  = links.toString().replace(/">,/g, "\n");

//<a href="




// fs.writeFileSync('names.txt', names);
// fs.writeFileSync('linkss.txt', links);
