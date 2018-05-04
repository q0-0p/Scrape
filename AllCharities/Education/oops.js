var fs = require('fs');

var afterTwoHTMLIndexesToRedo = fs.readFileSync('allPages1.txt').toString().split('</html>')

for(var x = 0; x<afterTwoHTMLIndexesToRedo.length; x++){
    if(afterTwoHTMLIndexesToRedo[x].indexOf('Full View')<0)
    {
        console.log(x);
        break
    }
}
