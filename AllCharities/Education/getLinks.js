//use node 3-finalBeforeLevel3iterateThroughMulti.js
//used core code from step 1, editted it to work for multi only and not single since we did the single, and step two got us all the links
//from all the pages of the 

const fs = require('fs');
//const path = require('path');




var htmlString = fs.readFileSync('allPages1.txt').toString();


var y = htmlString.split('</html>')

var links = [];
var provinces = [];
var names = [];

for (var x = 0; x < y.length - 1; x++) {
    //same for both
    y[x] = y[x].substring(y[x].indexOf('<!-- Glyphicon without link -->'));
    y[x] = y[x].substring(y[x].indexOf('</tr>') + 5);
    while (y[x].indexOf('<td headers="header3" class="text-center">') > 0) {



        // //for link
        y[x] = y[x].substring(y[x].indexOf('<a href="') + 9);
        links.push(y[x].substring(0, y[x].indexOf('">')).replace(/&amp;/g, '&'));




        //for name
        // y[x] = y[x].substring(y[x].indexOf('">') + 2);
        y[x] = y[x].substring(y[x].indexOf('">') + 2);
        names.push(y[x].substring(0, y[x].indexOf('</a>')).trim());
        //for province
        y[x] = y[x].substring(y[x].indexOf('<td headers="header3" class="text-center">') + 42);
        provinces.push(y[x].substring(0, y[x].indexOf('</td>')).trim())



    }
}
var obj = [];
for (var ggg = 0; ggg < names.length; ggg++) {
    obj.push({'name':names[ggg], 'links':'http://www.cra-arc.gc.ca'+ links[ggg], 'province': provinces[ggg]})
    if (links[ggg].indexOf('h/charity-eng.action') > 0) {

    }
    else {
        fs.writeFileSync('names.txt', names[ggg] + '\n', { flag: 'a' });
        fs.writeFileSync('links.txt', links[ggg] + '\n', { flag: 'a' });
        fs.writeFileSync('provinces.txt', provinces[ggg] + '\n', { flag: 'a' });
        fs.writeFileSync('obj.json',JSON.stringify(obj[ggg])+'\n', {flag: 'a'})
    }
}
console.log(names[names.length - 1])
console.log(names.length);
console.log(links.length);
console.log(provinces.length);
