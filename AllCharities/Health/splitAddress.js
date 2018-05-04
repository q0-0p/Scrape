const fs = require('fs');


for(var x = 1; x<=8; x++){
    var html = fs.read('allAddresses'+x+'.txt').toString().split('</html>');
    html.pop();
var counter = 0;
    for(var y = 0; y<html.length;y++){
        if(html[y].indexOf('Sorry, we couldn\'t find this page')>0){
            //fs.write('addresses'+x+'.txt','--no address found'+'\n','a');
            fs.write('email'+x+'.txt','--no email found'+'\n','a');
            //fs.write('phonenums'+x+'.txt','--no phone number found'+'\n','a');
            
            counter++;
        }
        else{
            //html[y] = html[y].substring(html[y].indexOf('dec4.png">')+10)
            //for email
            html[y] = html[y].substring(html[y].indexOf('d5.png">')+8)
            //for phone number
            //html[y] = html[y].substring(html[y].indexOf('22.png">')+8)            
                        
            // html[y] = html[y].substring(html[y].indexOf('">')+2)
            html[y] = html[y].substring(html[y].indexOf('">')+2)
            address = html[y].substring(0,html[y].indexOf('<'))
            // fs.write('addresses'+x+'.txt', address+'\n', 'a');
            fs.write('email'+x+'.txt', address+'\n', 'a');
            //fs.write('phonenums'+x+'.txt', address+'\n', 'a');
            
            counter++;
            
        }




    }


console.log(counter);


}
phantom.exit();