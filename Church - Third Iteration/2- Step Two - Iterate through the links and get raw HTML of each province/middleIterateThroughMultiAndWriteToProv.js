//use phantomjs iterateThroughMultiAndWriteToProv.js

var page = require('webpage').create();
var fs = require('fs');
var system = require('system')


var args = system.args;
//emulate settings for web browser
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };

//urls to find from: - replace -HERE- with 2 letter province
//'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=-HERE-&o=&z=&g=+&t=+&y=+&p=1',
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
////////list of links to be used for getting the main search result ////////
//first read the files inidividually, and save all the links inside of them

var path = "Links/";
var obj = [];
var list = fs.list(path);
// console.log(list.length);
for (var x = 0; x < list.length; x++) {
    // Note: If you didn't end path with a slash, you need to do so here.
    var file = path + list[x];
    
    if (fs.isFile(file)) {
        // Do something
        var fileText = fs.read(file).toString().split('\n');

        for (var y = 0; y < fileText.length-1; y++) {
            var objToPushToObj = { "prov": file.substring(file.indexOf('s/')+2,file.indexOf('s/')+4), "url": fileText[y] };
            obj.push(objToPushToObj);
        }
    }
}


// console.log(obj)
var urls = [];

console.log(obj[1].prov)
console.log(obj[89].prov)
for(x = 0; x<90; x++){
    fs.write('aa.txt',obj[x].prov+ ', '+obj[x].url+'\n','a');
}


console.log(urls.length);

    var x = 0;
    //recursive function that goes into each page and gets the HTML and saves it in htmlPages folder based on province
    var genericCallback = function () {
        return function (status) {
            console.log("URL: " + obj[x].url);
            console.log("Status: " + status);

            // exit if there was a problem with the navigation
            if (x>=obj.length) {
                page.open(obj[x].url, function () {
                    phantom.exit();
                })
            }
            if (status === 'fail') {
                if (obj.length<=x) {
                     console.log("HERE");

                     phantom.exit();

                }
               else{
                console.log("THERE")
                fs.write('badLinks.txt', obj[x].url + ' index number: ' + x + ' Province: ' + obj[x].prov + '\n', 'a');
                x++;
                window.setTimeout(function () {

                    page.open(obj[x].url, genericCallback());
                }, 2000);
               }

            }



            if (status === "success") {
                //this means its past all the links and reached the end of the links array
                if (provinces[x] === 'undefined') {
                    console.log('end')
                }
                else {
                    //-- YOUR STUFF HERE ---------------------- 
                    // putting the html content into the correct folder
                    fs.write(obj[x].prov +'/' + obj[x].prov + '.txt', page.content, 'a');


                    //-----------------------------------------
                }
                if (x < obj.length) {
                    // navigate to the next url and the callback is this function (recursion)
                    x++;

                    window.setTimeout(function () {

                        page.open(obj[x].url, genericCallback());
                    }, 2000);
                } else {
                    // try navigate to the next url (it is undefined because it is the last element) so the callback is exit
                    window.setTimeout(function () {

                        page.open(obj[x].url, function () {
                            phantom.exit();
                        });
                    }, 2000);

                }
            }
        };
    };
    //calling the recursive function here
    page.open(obj[x].url, genericCallback());



