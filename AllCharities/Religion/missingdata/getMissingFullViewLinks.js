var fs = require('fs');




var links = [];


    var htmlString = fs.readFileSync('missingPages.txt').toString();
    var y = htmlString.split('</html>')
    var count = (htmlString.match(/Full View/g) || []).length;
    console.log(count);

    for (var x = 0; x < y.length - 1; x++) {

        if ((y[x].indexOf('Full View') > 0)) {
            y[x] = y[x].substring(y[x].indexOf('Full View') + 9);


            // //for link
            y[x] = y[x].substring(y[x].indexOf('<a href="') + 9);
            links.push(y[x].substring(0, y[x].indexOf('">')).replace(/&amp;/g, '&'));

        }
        else {
            links.push('n/a')
        }







    }
    // var obj = [];
    // for (var ggg = 0; ggg < names.length; ggg++) {
    //     obj.push({ 'name': names[ggg], 'links': 'http://www.cra-arc.gc.ca' + links[ggg], 'province': provinces[ggg] })
    //     if (links[ggg].indexOf('h/charity-eng.action') > 0) {

    //     }
    //     else {
    //         fs.writeFileSync('names.txt', names[ggg] + '\n', { flag: 'a' });
    //         fs.writeFileSync('links.txt', links[ggg] + '\n', { flag: 'a' });
    //         fs.writeFileSync('provinces.txt', provinces[ggg] + '\n', { flag: 'a' });
    //         fs.writeFileSync('obj.json', JSON.stringify(obj[ggg]) + '\n', { flag: 'a' })
    //     }
    // }
    // console.log(names[names.length - 1])
    // console.log(names.length);
    // console.log(links.length);
    // console.log(provinces.length);

console.log(links.length)
for (var xyz = 0; xyz < links.length; xyz++) {
    if (links[xyz]==='n/a'){
        fs.writeFileSync('missingPages2.txt', '--no link found'+ '\n', { flag: 'a' });
        
    }
    else {
        fs.writeFileSync('missingPages2.txt', 'http://www.cra-arc.gc.ca' + links[xyz] + '\n', { flag: 'a' });
    }
}