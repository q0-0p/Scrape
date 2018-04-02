//This class is used to retrieve some of the charities' previous years rather than most recent, as they haven't filed their taxes yet for this year
const fs = require('fs');
const system = require('system');
var args = system.args;
var webPage = require('webpage');
var page = require('webpage').create();

page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };



var obj = fs.read('correctJSON.txt');
var JSONarr = obj.split('\n');


JSONarr.pop();
//console.log(JSONarr[JSONarr.length-1]);


for(var x = 0; x<JSONarr.length; x++){
    JSONarr[x] = JSON.parse(JSONarr[x]);
}
//console.log(JSONarr[2].url);




var urls = [];
for(var x = 0; x<JSONarr.length; x++){
   
        urls.push(JSONarr[x].url);
   
}


 //console.log(urls[500])
// console.log(urls[urls.length-1])
//emulate settings for web browser

//console.log(obj)



//console.log(urls.length);

    var x = 0;
    //recursive function that goes into each page and gets the HTML and saves it in revamped.txt
    var genericCallback = function () {
        return function (status) {
            console.log("URL: " + urls[x]);
            console.log("Status: " + status);

            // exit if there was a problem with the navigation
            if (x>=urls.length) {
                page.open(urls[x], function () {
                    phantom.exit();
                })
            }
            if (status === 'fail') {
                if (urls.length<=x) {
                     console.log("HERE");

                     phantom.exit();

                }
               else{
                console.log("THERE")
                fs.write('phonenemailBAD.txt', urls[x] + ' index number: ' + x + ' Province: ' +  + '\n', 'a');
                x++;
                window.setTimeout(function () {

                    page.open(urls[x], genericCallback());
                }, 2000);
               }

            }



            if (status === "success") {
                //this means its past all the links and reached the end of the links array
                if (urls[x] === 'undefined') {
                    console.log('end')
                }
                else {
                    //-- YOUR STUFF HERE ---------------------- 
                    // putting the html content into the correct folder
                    fs.write( 'phonenemailHTML.txt', page.content, 'a');


                    //-----------------------------------------
                }
                if (x < urls.length) {
                    // navigate to the next url and the callback is this function (recursion)
                    x++;

                    window.setTimeout(function () {

                        page.open(urls[x], genericCallback());
                    }, 2000);
                } else {
                    // try navigate to the next url (it is undefined because it is the last element) so the callback is exit
                    window.setTimeout(function () {

                        page.open(urls[x], function () {
                            phantom.exit();
                        });
                    }, 2000);

                }
            }
        };
    };
    //calling the recursive function here
    page.open(urls[x], genericCallback());


