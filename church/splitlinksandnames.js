
var fs = require('fs');

//read code
var content = fs.readFileSync('test.txt').toString();
var linesCount = (content.match(/\<a href\=\"\/ebci\//g) || []).length;


var linksContent = content;
var namesContent = content;

var links;
var names;


linksContent  = linksContent.substring(linksContent.indexOf('<a href="/ebci/')+9);

namesContent = namesContent.substring(namesContent.indexOf('<a href="/ebci/')+9);
namesContent = namesContent.substring(namesContent.indexOf('">')+13);


links = linksContent.substring(1,linksContent.indexOf('">'));
names = namesContent.substring(1,namesContent.indexOf('</a>'));
//console.log(links);
//console.log(names);
console.log(linesCount)

for (var x = 0; x < linesCount; x++) {

    fs.writeFileSync('names.txt', names +'\n', {
        flag: "a"
    });
//cut the new line again, set the new savedYellowText, repeat
namesContent = namesContent.substring(namesContent.indexOf('<a href="/ebci/')+9);
namesContent = namesContent.substring(namesContent.indexOf('">')+13);

names = namesContent.substring(1,namesContent.indexOf('</a>'));

// yellowContent  = yellowContent.substring(yellowContent.indexOf('low">')+11);
// savedYellowText = yellowContent.substring(1,yellowContent.indexOf(')')+1);
}
for (var x = 0; x < linesCount; x++) {

    fs.writeFileSync('links.txt', links +'\n', {
        flag: "a"
    });
//cut the new line again, set the new savedYellowText, repeat
linksContent  = linksContent.substring(linksContent.indexOf('<a href="/ebci/')+9);
links = linksContent.substring(1,linksContent.indexOf('">'));

// yellowContent  = yellowContent.substring(yellowContent.indexOf('low">')+11);
// savedYellowText = yellowContent.substring(1,yellowContent.indexOf(')')+1);
}