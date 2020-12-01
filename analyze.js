const cheerio = require('cheerio');

function findImg(dom,call) {
    let $ = cheerio.load(dom);
    $('img').each(function(i,elem) {
        let imgSrc = $(this).attr('src');
        if(!/http/.test(imgSrc)) {
            imgSrc = 'http:' + imgSrc;
        }
        
        //console.log($(this))
        console.log(666666,imgSrc)
        call(imgSrc,i)
    })

}

module.exports.findImg = findImg

