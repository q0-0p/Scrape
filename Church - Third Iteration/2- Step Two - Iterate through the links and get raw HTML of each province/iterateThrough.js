const fs = require('fs');



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

var htmlString = fs.readFileSync('htmlPages/'+provinces[7]+'.txt').toString();

// console.log(htmlString.indexOf('pagination'));

if(htmlString.indexOf('pagination')<0){
    htmlString = htmlString.substring(htmlString.indexOf('Showing')+7);
    htmlString = htmlString.substring(0, htmlString.indexOf('Showing'));
    htmlString = htmlString.substring(htmlString.indexOf('<tr>'),htmlString.indexOf('</table>'));
    // console.log(htmlString);
    var x = htmlString.split('</tr>');
    console.log(x.length);
    htmlString= htmlString.substring(htmlString.indexOf('td headers'));

    //////////??START HERE NEXT TIME, FIX THE SPLITTING OF NAME/HTML

    while(htmlString.indexOf('href')>-1){
        var tempLink = htmlString.substring(htmlString.indexOf('href="')+6);
        htmlString = htmlString.substring(htmlString.indexOf('href="') +6);
        tempLink =htmlString.substring(0,htmlString.indexOf('">'));
        fs.writeFileSync(provinces[7]+'Links.txt', tempLink, {flag: 'a'});


        var tempName = htmlString.substring(htmlString.indexOf('">'), htmlString.indexOf("</a>"));
        htmlString = htmlString.substring(htmlString.indexOf('headername'));
        fs.writeFileSync(provinces[7]+'Names.txt', tempName, {flag: 'a'});
        
    }
    
}
//use 
else{

}

// for(var x = 0; x<provinces.length;x++){
// var htmlString = fs.readFileSync('htmlPages/'+provinces[x]+'.txt').toString();
// console.log(htmlString);




// }