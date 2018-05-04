var fs = require('fs');

//var obj = JSON.parse(fs.readFileSync('obj.json'));

// console.log(obj[obj.length - 50].name);

var abc = "Receipted Donations";
//this how is to access an ID from json with space in between
// obj[0]["Receipted Donations"]= abc;
// console.log(obj[0]);
var test = [];
var test1 = [];
var test2 = [];
var test3= [];

    var splitt = fs.readFileSync('missingPages2.txt').toString();
    var individual = splitt.split('</html>');
    // console.log(individual.length);
    // console.log(individual[individual.length-1]);
    individual.pop();
    // console.log(individual[individual.length-1]);
    for (var y = 0; y < individual.length; y++) {
        var rDonations;
        var nDonations;
        var tDonations;
        var link;
        var linkLink = individual[y].substring(individual[y].indexOf('Full View') + 9);

        link = linkLink.substring(linkLink.indexOf('href'),linkLink.indexOf('</li>'));
        if (individual[y].indexOf('li-red">') < 0) {
            rDonations = 'data not found';
            nDonations = 'data not found';
            tDonations = 'data not found';
        }
        else {
            var leftOver = individual[y].substring(individual[y].indexOf('li-red">') + 8);
            rDonations = leftOver.substring(leftOver.indexOf('$') , leftOver.indexOf('(')).trim();
            if(rDonations.indexOf('(0%)')>-1){
                rDonations = 0;
            }
            leftOver=individual[y].substring(individual[y].indexOf('li-yellow">') + 11);
            nDonations = leftOver.substring(leftOver.indexOf('$') , leftOver.indexOf('(')).trim();
            if(nDonations.indexOf('(0%)')>-1){
                nDonations = 0;
            }

            leftOver=individual[y].substring(individual[y].indexOf('Total revenue:') + 14);
            tDonations = leftOver.substring(leftOver.indexOf('$') , leftOver.indexOf('</strong>')).trim();

            

            //console.log(tDonations);

        }
        test.push(rDonations);
        test1.push(nDonations);
        test2.push(tDonations);
        test3.push(link);
        //to remove the duplicates,
        // var
    }






var tDarray =[test,test1,test2, test3];
// console.log(tDarray[0]);

for(var z = 0; z<test.length-2; z++){
    if((tDarray[0][z]===tDarray[0][z+1])&& (tDarray[1][z]===tDarray[1][z+1])&& (tDarray[2][z]===tDarray[2][z+1])&&(tDarray[3][z]===tDarray[3][z+1])&&tDarray[2][z]!=='data not found'){
      
        test.splice(z,1);
        test1.splice(z,1);
        test2.splice(z,1);
        test3.splice(z,1);
        

    }
}
test.splice(16001,1);
test1.splice(16001,1);
test2.splice(16001,1);
test3.splice(16001,1);


// console.log(obj.length);
// console.log(obj[0]);
// console.log(test.length);
// for(var zzz=0; zzz<test.length; zzz++){
//     obj[zzz]["Receipted Donations"]= test2[zzz];
//     obj[zzz]["Non-Receipted Donations"]= test1[zzz];
//     obj[zzz]["Total Revenue"]= test[zzz];
//     //console.log(test[zzz]);
    
// }
// console.log(test[0]);
// console.log(test1[0]);
// console.log(test2[0]);

// console.log(obj);
for(var b =0; b<test.length; b++){
    fs.writeFileSync('allMissingInfoR.txt', test[b] +'\n',{flag:'a'});
    fs.writeFileSync('allMissingInfoN.txt', test1[b] +'\n',{flag:'a'});
    fs.writeFileSync('allMissingInfoT.txt', test2[b] +'\n',{flag:'a'});
}