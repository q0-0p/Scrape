
//use phantomjs firstSte.js
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
//list of links to be used for getting the main search result page
var urls = [
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=AB&o=&z=&g=+&t=+&y=+&p=1',    
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=BC&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=MB&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=NB&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=NL&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=NS&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=NT&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=NU&o=&z=&g=+&t=+&y=+&p=1',
    //'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=ON&o=&z=&g=+&t=+&y=+&p=1', //ON already done
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=PE&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=QC&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=SK&o=&z=&g=+&t=+&y=+&p=1',
    'http://www.cra-arc.gc.ca/ebci/haip/srch/advancedsearchresult-eng.action?n=church&b=&q=&s=registered&d=&e=+&c=&v=YT&o=&z=&g=+&t=+&y=+&p=1'
];



var x = 0;
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
                
                 phantom.exit();
                
            }
           else{
            console.log("THERE")
            fs.write('badLinks.txt', urls[x] + ' index number: ' + x + ' Province: ' + provinces[x] + '\n', 'a');
            x++;
            window.setTimeout(function () {

                page.open(urls[x], genericCallback());
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
                fs.write('htmlPages/' + provinces[x] + '.txt', page.content, 'w');


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



