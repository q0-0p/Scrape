const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');



var provinces = [
    'AB',
    'BC',
    'MB',
    'NB',
    'NL',
    'NS',
    'NT',
    'NU',
    //'ON',//ON already done
    'PE',
    'QC',
    'SK',
    'YT'
];

//CONTINUE HERE NEXT TIME, ALLOW FOR OBJECT ARRAY TO TAKE IN ALL LINKS, ALL NAMES, ALL PROVINCES IN THE OBJECTS
var provinceObjects =[];
var provinceLinks='';
var provinceNames='';
for(var w = 0; w<provinces.length; w++){
    provinceLink = fs.read('finalRawNamesAndLinks/Links/'+provinces[w]+'Links.txt').toString();
    provinceNames = fs.read('finalRawNamesAndLinks/Names/'+provinces[w]+'Names.txt').toString();

var y = [];
var x = [];
x = provinceLink.split('\n');
y = provinceNames.split('\n');
for(var v = 0; v<x.length;v++){
    provinceObjects.push({"province": provinces[w], "link":"http://www.cra-arc.gc.ca"+x[v].replace(/&amp;/g, '&'), "charityName":y[v]})
}

}

console.log(provinceObjects.length)

for(var z = 0; z <provinceObjects.length; z++){
    fs.write('allJSON.txt',JSON.stringify(provinceObjects[z])+'\n','a')
}

phantom.exit();