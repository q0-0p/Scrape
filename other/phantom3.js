const fs = require('fs');
const system = require('system');
var args = system.args;

var webPage = require('webpage');
var page = webPage.create();
window.setTimeout(function () {
    page.open(args[1], function (status) {
        console.log('Status: ' + status);
        // Do other things here...
        if (status === 'success') {
            fs.write('rawHTML.txt', page.content, 'a')
            phantom.exit();
        }
        else {
            fs.write('rawHTMLBAD.txt', args[1] + '\n', 'a')
            phantom.exit();
        }
    });
}, 2000);