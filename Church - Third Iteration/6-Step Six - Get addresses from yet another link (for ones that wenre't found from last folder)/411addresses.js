
var page = require('webpage').create();
var fs = require('fs');
var system = require('system')


var args = system.args;
//emulate settings
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36"
//set size of page?
page.viewportSize = { width: 1280, height: 1024 };




var nums = fs.read('numberList.txt').toString().split('\n');


    if (nums[args[1]].indexOf('n/a') > -1) {
        fs.write('addresses.txt', '---no number available--- \n', 'a')
        phantom.exit();
    } else {
        window.setTimeout(function () {
            page.open('https://411.ca/reverse/search?q=' + nums[args[1]], function (status) {
                console.log('Status: ' + status);
                if (status === 'success') {
                    //page.render('test.jpg');
                    fs.write('addresses.txt', page.content, 'a');
                    // Do other things here...
                    phantom.exit();
                }
                else {
                    fs.write('badNumbers.txt', args[1]+' \n', 'a');
                    // Do other things here...
                    phantom.exit();
                }
            });
        }, 2000);
    }




// window.setTimeout(function () {
//     page.open('https://411.ca/reverse/search?q='+, function (status) {
//         console.log('Status: ' + status);
//         page.render('test.jpg');
//         fs.write('test.txt', page.content,'a');
//         // Do other things here...
//         phantom.exit();
//     });
// }, 2000);