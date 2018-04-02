//we will use a phantomjs and processes here
//this file will use node filterData.js
//this class will use "phantomjs script" using the phantomjs-prebuilt npm module
var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path
const queue = require('queue')



var q = queue();
q.concurrency = 1;



for (var x = 0; x < 8425; x++) {
    (function (cntr) {
        var childArgs = [
            path.join(__dirname, 'filterDataPhantom.js'), cntr
        ]
        var stdResult = "";
        
        q.push((done) => {
            childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
                // handle results

                console.log('done ' +  cntr + ' ' +stdout + ' '+ q.length)
                //console.log(stdout);
                stdResult = stdout;
                done();
            })
        }


        )
       

    })(x);
}

q.start();


// var add = function (x, y) {
//     return x + y;
// }

// function doMath(cb) {
//     console.log(cb(1, 2));
// }

// doMath(add);
