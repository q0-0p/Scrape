const fs= require('fs');



for(var x = 0; x <300; x ++){
    fs.write('numbers.txt', 'phantomjs phantom5.js '+x+'\n', 'a')
}