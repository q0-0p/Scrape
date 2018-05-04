//read in the files, (the allPages2, and allPages3, and store them in a different html array. cread the links file as well) 
//Compare everything after the = for links array, and compare with the 
const fs = require('fs');

//var obj = JSON.parse(fs.read('allInfo.txt'));



var oj = fs.read('oj.txt').toString().split('\n')
var neww = fs.read('new.txt').toString().split('\n');
var trueCount = 0;
var falseCount = 0;
//console.log(oj[oj.length-1])
oj.pop();
for (var x = 0; x < oj.length; x++) {
    if (neww.indexOf(oj[x]) > -1) {
        trueCount++;
    }
    else {
        falseCount++;
    }
}
console.log(trueCount);
console.log(falseCount);
console.log(trueCount+falseCount);

// var links = [];
// links = fs.read('links.txt').toString().split('\n');
// var id = [];
// for (var jake = 0; jake < links.length; jake++) {
//     id.push(links[jake].substring(links[jake].lastIndexOf('=') + 1));
// }
// console.log(id.length);

// id.pop();






// var splitt = fs.read('allPages2.txt').toString();
// var individual = splitt.split('</html>');
// var splitt2 = fs.read('allPages3.txt').toString();
// var individual2 = splitt2.split('</html>');
// individual.pop();
// var phonenos = [];
// var emails = [];
// for (var x = 0; x < oj.length; x++) {
//     //console.log('test')
//     if (neww.indexOf(oj[x]) > -1 && individual[neww.indexOf(oj[x])] !== undefined) {
//         // console.log('here')
//         if () {
//             var phoneno;
//             var email;
//             console.log(x);

//             //individual[neww.indexOf(oj[x])];
//             var leftOver = individual[neww.indexOf(oj[x])].substring(individual[neww.indexOf(oj[x])].indexOf('Telephone number:'));
//             leftOver = leftOver.substring(leftOver.indexOf('<strong>') + 8);

//             phoneno = leftOver.substring(0, leftOver.indexOf('</strong>')).trim();

//             leftOver = leftOver.substring(leftOver.indexOf('E-mail address:'));
//             leftOver = leftOver.substring(leftOver.indexOf('<strong>') + 8);

//             email = leftOver.substring(0, leftOver.indexOf('</strong>')).trim();
//             //console.log(email);
//             emails.push(email);
//             phonenos.push(phoneno);
//         } 
//         if(){

//         }
//     }

//     else {
//         //console.log('there')
//         phonenos.push('data not found');
//         emails.push('data not found');
//         //console.log(email);

//     }
// }





// console.log(phonenos.length)
// console.log(emails.length)








// // //individual.pop();
// // //continue here
// // //confusing code, don't bother trying to understand
// // for (var outer = 0; outer < links.length; outer++) {
// //     var flag = false;
// //     var phoneno;
// //     var email;
// //     for(var inner = 0; inner<individual.length; inner++){
// //         if(individual[inner].indexOf(id[outer])>0){
// //             flag = true;
// //             if (individual[inner].indexOf('Telephone number:') < 0) {
// //                 phoneno = 'data not found';
// //                 email = 'data not found';
// //                 emails.push(email);
// //                 phonenos.push(phoneno);
// //                 console.log(inner)
// //             }
// //             else {
// //                 var leftOver = individual[inner].substring(individual[inner].indexOf('Telephone number:'));
// //                 leftOver = leftOver.substring(leftOver.indexOf('<strong>') + 8);

// //                 phoneno = leftOver.substring(0, leftOver.indexOf('</strong>')).trim();

// //                 leftOver = leftOver.substring(leftOver.indexOf('E-mail address:'));
// //                 leftOver = leftOver.substring(leftOver.indexOf('<strong>') + 8);

// //                 email = leftOver.substring(0, leftOver.indexOf('</strong>')).trim();
// //                 emails.push(email);
// //                 phonenos.push(phoneno);
// //                 console.log(outer)
// //             }
// //         }
// //         else{

// //         }
// //     }
// //     if(!flag){
// //         phoneno = 'data not found';
// //             email = 'data not found';
// //             emails.push(email);
// //             phonenos.push(phoneno);
// //     }

// // }

// // for (var y = 0; y < links.length; y++) {
// //         fs.write('emails.txt', email + '\n', 'a')
// //         fs.write('numbers.txt', phoneno + '\n', 'a')
// // }




// // console.log(emails.length);
// // console.log(phonenos.length);
// // console.log(obj.length);
// // for(var abc = 0; abc <emails.length; abc ++){
// // obj[abc]['Phone number'] = phonenos[abc];
// // obj[abc]['Email Address'] = emails[abc];
// // }
// // console.log(emails.length);
// // console.log(phonenos.length);
// // fs.write('allInfo2.json', JSON.stringify(obj),'w')
phantom.exit();