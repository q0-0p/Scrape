//phantomjs filterDataForSpecificNeeds.js (could've coded for node filterDataForSpecificNeeds.js, but its not a huge difference)
//also phantomjs fs.read reads longer strings than node fs.readFileSync, so less likely to give me the "string too large" error
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
//get the link , the name, the receited/non receited - will store url2 for all of them but null if the other values are not null
var dataNeeded = [];

for(var x = 0; x<provinces.length; x++){

    //collectively splits the pages into individual pages that end in</html>
    var readFile = fs.read('rawPages/'+provinces[x]+'.txt');
    var split= readFile.split('</html>');
    split.pop();

    //now try to strip the data needed from each </html> and put it in an object, and push that object in the dataNeeded array
    //var count = 0;
    for(var y = 0; y<split.length; y++){
        //if the charity hasn't filed for taxes for most recent year
        if(split[y].indexOf('See the T3010 for financial information')>-1){
            //we want the link for the quick view, and the link for full view, and the province
            var objToPutInDataNeeded = {"province":provinces[x]};
            //objToPutInDataNeeded.url = "http://hello";
            // objToPutInDataNeeded.url2 = "http://hello";
            // console.log(JSON.stringify(objToPutInDataNeeded));
            //now we find link1 and link2 for the province
            split[y]=split[y].substring(split[y].indexOf('Quick View'));
            split[y]=split[y].substring(split[y].indexOf('<ul class="list-unstyled mrgn-lft-md">'));
            split[y]=split[y].substring(split[y].indexOf('href="')+6);
            //url2 is used for finding a previous year for the values
            var url2 = 'http://www.cra-arc.gc.ca'+(split[y].substring(0,split[y].indexOf('">'))).replace(/&amp;/g, '&');

            split[y]=split[y].substring(split[y].indexOf('Full View'));
            split[y]=split[y].substring(split[y].indexOf('<ul class="list-unstyled mrgn-lft-md">'));
            split[y]=split[y].substring(split[y].indexOf('href="')+6);

            var url = 'http://www.cra-arc.gc.ca'+(split[y].substring(0,split[y].indexOf('">'))).replace(/&amp;/g, '&');
            
            objToPutInDataNeeded.url = url;
            objToPutInDataNeeded.url2 = url2;
            dataNeeded.push(objToPutInDataNeeded);
            // console.log(JSON.stringify(objToPutInDataNeeded));
            
            // console.log(url);
            
        }
        //otherwise charity did file for most recent tax year
        //use hasOwnProperty for json object to see if url2 exists
        else{
            var objToPutInDataNeeded = {"province":provinces[x]};
            split[y]=split[y].substring(split[y].indexOf('Full View'));
            split[y]=split[y].substring(split[y].indexOf('<ul class="list-unstyled mrgn-lft-md">'));
            split[y]=split[y].substring(split[y].indexOf('href="')+6);
            var url = 'http://www.cra-arc.gc.ca'+(split[y].substring(0,split[y].indexOf('">'))).replace(/&amp;/g, '&');
            split[y]=split[y].substring(split[y].indexOf('Receipted donations')+19);
            var rDonations = (split[y].substring(0,split[y].indexOf('('))).trim();
            if (rDonations.indexOf('$')<0){
                rDonations = '$0';
            }            
            split[y]=split[y].substring(split[y].indexOf('receipted donations')+19);
            var nDonations = (split[y].substring(0,split[y].indexOf('('))).trim();
            if (nDonations.indexOf('$')<0){
                nDonations = '$0';
            }
            objToPutInDataNeeded.url=url;
            objToPutInDataNeeded.rDonations = rDonations;
            objToPutInDataNeeded.nDonations = nDonations;
            split[y] = split[y].substring(split[y].indexOf('Total revenue:')+14);
            var totalRev = (split[y].substring(0,split[y].indexOf('<'))).trim();        
            // console.log(JSON.stringify(objToPutInDataNeeded));
            objToPutInDataNeeded.totalRev = totalRev;
            dataNeeded.push(objToPutInDataNeeded);
            

        }

    }
    //console.log(count);

}


// console.log(dataNeeded[1]);
// console.log(dataNeeded.length);

for(var x = 0; x <dataNeeded.length; x++){
    fs.write('mixedJSON.txt',JSON.stringify(dataNeeded[x])+'\n','a')
}

phantom.exit();
