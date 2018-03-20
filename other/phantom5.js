const fs = require('fs');
const system = require('system');
var args = system.args;

var webPage = require('webpage');
var page = webPage.create();


var links = fs.read('plain.txt').toString().split('\n');



window.setTimeout(function () {
    page.open(links[args[1]], function (status) {
        console.log('Status: ' + status);
        // Do other things here...
        if (status === 'success') {
            fs.write('rawHTMLforemail.txt', page.content, 'a')
            phantom.exit();
        }
        else {
            fs.write('rawHTMLBADforemail.txt', args[1] + '\n', 'a')
            phantom.exit();
        }
    });
}, 2000);