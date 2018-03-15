const fs = require('fs');

for(x = 1; x< 68; x++){
fs.write('a',  "phantomjs getlinks.js "+ x + "\n", 'a');
}