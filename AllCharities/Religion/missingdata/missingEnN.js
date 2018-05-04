const fs = require('fs');

//var obj = JSON.parse(fs.read('allInfo.txt'));
var phonenos=[];
var emails=[];

    var splitt = fs.read('allPages1.txt').toString();
    var individual = splitt.split('</html>');
    // console.log(individual.length);
    // console.log(individual[individual.length-1]);
    individual.pop();
    // console.log(individual[individual.length-1]);
    for (var y = 0; y < individual.length; y++) {
        var phoneno;
        var email;
        
        if (individual[y].indexOf('Telephone number:') < 0) {
            phoneno = 'data not found';
            email = 'data not found';
            emails.push(email);
            phonenos.push(phoneno);
        }
        else {
            var leftOver = individual[y].substring(individual[y].indexOf('Telephone number:'));
            leftOver = leftOver.substring(leftOver.indexOf('<strong>') + 8);
            
            phoneno = leftOver.substring(0,leftOver.indexOf('</strong>')).trim();
            
            leftOver = leftOver.substring(leftOver.indexOf('E-mail address:'));
            leftOver = leftOver.substring(leftOver.indexOf('<strong>') + 8);
            
            email = leftOver.substring(0,leftOver.indexOf('</strong>')).trim();
            emails.push(email);
            phonenos.push(phoneno);
            
        }
      fs.write('emails.txt',email+'\n','a')
      fs.write('numbers.txt',phoneno+'\n','a')
      
        // console.log(phoneno);
        //console.log(email);
       
       
    }




// console.log(emails.length);
// console.log(phonenos.length);
// console.log(obj.length);
// for(var abc = 0; abc <emails.length; abc ++){
// obj[abc]['Phone number'] = phonenos[abc];
// obj[abc]['Email Address'] = emails[abc];
// }
// // console.log(emails.length);
// // console.log(phonenos.length);
// fs.write('allInfo2.json', JSON.stringify(obj),'w')
phantom.exit();