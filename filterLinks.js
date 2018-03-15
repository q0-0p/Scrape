//use node filterLinks.js

var fs = require('fs');

//read code
var content = fs.readFileSync('test.txt').toString();
var linesCount = (content.match(/<li class=\"legend-li-aqua\">/g) || []).length;
console.log(linesCount);

var yellowContent = content;
var redContent = content;
var totalContent = content;
//START HERE NEXT TIME ////////

redContent  = redContent.substring(redContent.indexOf('red">')+11);
//console.log(restOfContent.substring(1,50));
console.log(redContent.indexOf(')'));
var savedRedText = redContent.substring(1,redContent.indexOf(')')+1);
console.log(savedRedText);

yellowContent  = yellowContent.substring(yellowContent.indexOf('low">')+11);
//console.log(restOfContent.substring(1,50));
console.log(yellowContent.indexOf(')'));
var savedYellowText = yellowContent.substring(1,yellowContent.indexOf(')')+1);
console.log(savedYellowText);

 totalContent  = totalContent.substring(totalContent.indexOf('ft-1">')+5);
 //console.log(restOfContent.substring(1,50));
 console.log(totalContent.indexOf('</strong'));
 var totalText = totalContent.substring(1,totalContent.indexOf('</strong'));
 console.log(totalText);





var textReplaced = content;
var bla;
// for (var x = 0; x < linesCount; x++) {

//     fs.writeFileSync('legend-li-yellow.txt', savedYellowText +'\n', {
//         flag: "a"
//     });
// //cut the new line again, set the new savedYellowText, repeat
// yellowContent  = yellowContent.substring(yellowContent.indexOf('low">')+11);
// savedYellowText = yellowContent.substring(1,yellowContent.indexOf(')')+1);
// }

// for (var x = 0; x < linesCount; x++) {
    
//     fs.writeFileSync('legend-li-red.txt', savedRedText +'\n', {
//         flag: "a"
//     });

//     redContent  = redContent.substring(redContent.indexOf('red">')+11);
//     savedRedText = redContent.substring(1,redContent.indexOf(')')+1);

// }
for (var x = 0; x < linesCount; x++) {

    fs.writeFileSync('legend-pd-lft-1.txt', totalText + '\n', {
        flag: "a"
    });

    totalContent  = totalContent.substring(totalContent.indexOf('ft-1">')+5);
    totalText = totalContent.substring(1,totalContent.indexOf('</strong'));

}
console.log(bla)