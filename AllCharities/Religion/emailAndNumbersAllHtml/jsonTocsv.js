var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('allInfo2.json'));

console.log(obj.length);
console.log(obj[0]);
for(var x = 0; x<obj.length;x++){
    console.log()
    fs.writeFileSync('info.csv',obj[x]['name']+'*'+obj[x]['link']+'*'+obj[x]['province']+'*'+obj[x]['Receipted Donations']+'*'+obj[x]['Non-Receipted Donations']+'*'+obj[x]['Total Revenue']+'*'+obj[x]['Phone number']+'*'+obj[x]['Email Address']+'\n',{flag:'a'})
}