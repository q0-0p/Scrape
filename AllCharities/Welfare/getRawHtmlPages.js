//phantomjs g -tab-


//use phantomjs firstSte.js
var page = require('webpage').create();
var fs = require('fs');
var system = require('system')


var args = system.args;
//emulate settings for web browser
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };



var links = fs.read('links.txt').toString().split('\n');
// console.log(links.length);
links.pop();
// console.log(links[links.length-1]);
var urls=[];
for(var y=0;y<links.length;y++){
    urls.push(links[y]);
}
// console.log(links.length);
// console.log(urls.length);
// console.log(links[links.length-1])
// console.log(urls[urls.length-1])

var x = 13662;
//recursive function that goes into each page and gets the HTML and saves it in htmlPages folder based on province
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
                 //fs.write('allPages1.txt','--nopagefound</html>', 'a');                 
                 x++;
                 phantom.exit();
                
            }
           else{
            console.log("THERE")
            //fs.write('allPages1.txt','--nopagefound</html>', 'a');                 
            // fs.write('badLinks.txt', urls[x] + ' index number: ' + x  + '\n', 'a');
            //remove this so that if it resets, it will stay on the same url 
            //x++;
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
                fs.write('allPages1.txt', page.content, 'a');
                console.log(x);
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



