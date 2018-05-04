var fs = require('fs');
var links = [];

var htmlString = fs.read('allPages1.txt').toString();
var y = htmlString.split('</html>')
var count = (htmlString.match(/Full View/g) || []).length;
console.log(count);
for (var x = 0; x < y.length - 1; x++) {
    if (y[x].indexOf('Full View') > 0) {
        y[x] = y[x].substring(y[x].indexOf('Full View') + 9);
        // //for link
        y[x] = y[x].substring(y[x].indexOf('<a href="') + 9);
        links.push(y[x].substring(0, y[x].indexOf('">')).replace(/&amp;/g, '&'));
    }
    else if(y[x].indexOf('The search engine is unavailable between 02:00 a.m. and 06:00 a.m.') > 0){

    }
    else {
        links.push('n/a')
    }
}
console.log(links.length);

for(var w = 0 ; w<links.length; w++){
    fs.write('fullViewLinks.txt',links[w]+ '\n', 'a')
}