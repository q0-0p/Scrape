var fs = require('fs');

var afterTwoHTMLIndexesToRedo = fs.read('allPages1.txt').toString().split('</html>')

for(var x = 0; x<afterTwoHTMLIndexesToRedo.length; x++){
    if(afterTwoHTMLIndexesToRedo[x].indexOf('The search engine is unavailable between 02:00 a.m. and 06:00 a.m.')>-1)
    {
        console.log(x);
        break
    }
}