const fs = require('fs');
const spawn = require('child_process');
const phantomjs = require('phantomjs');


var x = fs.readFileSync('linkss.txt').toString();
var y = x.split("\n");



var linksArray = [];
for (var i = 0; i < y.length; i++) {
    linksArray.push(y[i]); //this doesn't strip '\n'
}

spawn.execFile('/home/yousif/Desktop/loco/Aaron/phantom3.js', [linksArray[200]], (error, out, err) =>{

    if(error){
        throw error;

    }
    else{
        console.log("success");
    }

})