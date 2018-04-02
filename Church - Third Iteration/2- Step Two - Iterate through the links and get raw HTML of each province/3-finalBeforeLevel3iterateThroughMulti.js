//use node 3-finalBeforeLevel3iterateThroughMulti.js
//used core code from step 1, editted it to work for multi only and not single since we did the single, and step two got us all the links
//from all the pages of the 

const fs = require('fs');
const path = require('path');




for (var x = 0; x < province; x++) {
    console.log(provinces[x])
    var htmlString = fs.readFileSync('htmlPages/' + provinces[x] + '.txt').toString();

    // console.log(htmlString.indexOf('pagination'));
    //if pagination exists, it means there are more than 1 page for the province search results (was able to find this by looking at the actual html page, could be different for different websites)
    //this will get the links and names of the churches within the provinces that dont have more than one search result page
    if (htmlString.indexOf('pagination') < 0) {
        console.log('THERE~~')
        htmlString = htmlString.substring(htmlString.indexOf('Showing') + 7);
        htmlString = htmlString.substring(0, htmlString.indexOf('Showing'));
        htmlString = htmlString.substring(htmlString.indexOf('<tr>'), htmlString.indexOf('</table>'));
        // console.log(htmlString);
        var xx = htmlString.split('</tr>');
        console.log(xx.length);
        htmlString = htmlString.substring(htmlString.indexOf('td headers'));

        //issue was simple, didn't add enter between links so it looked like one link. added the '\n' to the link. name doesn't need becasue it comes with it
        //////////??START HERE NEXT TIME, FIX THE SPLITTING OF NAME/HTML

        while (htmlString.indexOf('href') > -1) {
            var tempLink;
            htmlString = htmlString.substring(htmlString.indexOf('href="') + 6);
            tempLink = htmlString.substring(0, htmlString.indexOf('">'));
            //console.log(provinces[x]);
            
            
            fs.writeFileSync(provinces[x] + '/' + provinces[x] + 'Links.txt', tempLink + '\n', { flag: 'a' });
            
            // if (fs.readFileSync('.gitignore').toString().indexOf(provinces[x]) < 0)
            //     fs.writeFileSync('.gitignore', provinces[x] + '/' + '\n', { flag: 'a' });


            var tempName = htmlString.substring(htmlString.indexOf('">') + 2, htmlString.indexOf("</a>"));
            htmlString = htmlString.substring(htmlString.indexOf('headername'));
            fs.writeFileSync(provinces[x] + '/' + provinces[x] + 'Names.txt', tempName, { flag: 'a' });

        }

    }
   

}