const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');
var page = webPage.create();


var obj = fs.read('allJSON.txt');

var objArrString = obj.split('\n');
var objArr = [];
for(var x = 0; x <objArrString.length; x++){
    objArr.push(JSON.parse(objArrString[x]));
}


window.setTimeout(function () {
    page.open(objArr[args[1]].link, function (status) {
        console.log('Status: ' + status);
        // Do other things here...
        if (status === 'success') {
            fs.write('rawPages/' + objArr[args[1]].province + '.txt', page.content, 'a')
            phantom.exit();
        }
        else {
            fs.write('rawPages/' + objArr[args[1]].province + 'BAD.txt', objArr[args[1]].link + '\n', 'a')
            console.log('Charity:' + objArr[args[1]].charityName)
            phantom.exit();
        }
    })
}, 2000);