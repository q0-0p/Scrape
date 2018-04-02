//use node 3-finalBeforeLevel3iterateThroughMulti.js
//used core code from step 1, editted it to work for multi only and not single since we did the single, and step two got us all the links
//from all the pages of the 

const fs = require('fs');
const path = require('path');

var provinces = [
    'AB',
    'BC',
    'MB',
    'NB',
    'NL',
    'NS',
    //'NT',//these were the single pages
    //'NU',//these were the single pages
    //'ON',//ON already done
    'PE',
    'QC',
    'SK',
    //'YT'//these were the single pages
];


for (var x = 0; x < provinces.length; x++) {
    // console.log(provinces[x])
    var htmlString = fs.readFileSync(provinces[x] + '/' + provinces[x] + '.txt').toString();

    var seperatePages = htmlString.split('</html>');
    console.log(seperatePages.length);


    //get links and names, and store in finalRawNamesAndLinks/Links or finalRawNamesAndLinks/Names from each seperatePages[x]
    for (var w = 0; w < seperatePages.length; w++) {

        while (seperatePages[w].indexOf('<a href="/ebci/haip/srch/') > -1) {
            //same for both, splits to where we need
            seperatePages[w] = seperatePages[w].substring(seperatePages[w].indexOf('<!-- Glyphicon without link -->'))
            seperatePages[w] = seperatePages[w].substring(seperatePages[w].indexOf('</tr>') + 5)

            var seperatePagesLink = seperatePages[w];//use this to substring the link
            var seperatePagesName = seperatePages[w];//use this to substring the name


            // //for link
            seperatePagesLink = seperatePagesLink.substring(seperatePagesLink.indexOf('<a href="') + 9)
            seperatePagesLink = seperatePagesLink.substring(0, seperatePagesLink.indexOf('">'))

            //this is used to reset the seperatePages so it will keep going
            seperatePages[w] = seperatePages[w].substring(seperatePages[w].indexOf(seperatePagesLink));

            seperatePagesLink = seperatePagesLink.replace(/&amp;/g, '&');



            //for name
            seperatePagesName = seperatePagesName.substring(seperatePagesName.indexOf('">') + 2)
            seperatePagesName = seperatePagesName.substring(seperatePagesName.indexOf('">') + 2)
            seperatePagesName = seperatePagesName.substring(0, seperatePagesName.indexOf('</a>'))
            seperatePagesName = seperatePagesName.trim();









            if (seperatePagesLink.includes('charity-eng')) {

            }
            else {
                fs.writeFileSync('finalRawNamesAndLinks/Links/' + provinces[x] + 'Links.txt', seperatePagesLink + '\n', { flag: 'a' })
                fs.writeFileSync('finalRawNamesAndLinks/Names/' + provinces[x] + 'Names.txt', seperatePagesName + '\n', { flag: 'a' })
            }
        }
    }


    console.log('-');
}