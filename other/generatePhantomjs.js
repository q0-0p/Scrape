const fs = require('fs');


for(var x = 0 ; x<300; x++)
fs.write('generated.txt','phantomjs 411Addresses.js '+x+'\n','a')