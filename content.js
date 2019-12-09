// Send a message containing the page details back to the event page
chrome.runtime.sendMessage({
    'lista': getAllImageSrc()
});

function getAllImageSrc(){
    var links=document.getElementsByClassName('lista2');

    var array=[];

    for(index=0;index<links.length;index++){
        var aAttr= links[index].getElementsByTagName('td')[1]
        .getElementsByTagName('a')[0];
        var str=aAttr.getAttribute('onmouseover');
        var aHref=aAttr.getAttribute('href');

        var imgSrc = str.substring(27,str.length-14);
        array.push({imgSrc:imgSrc,aHref:'http://rarbg.to'+aHref});
    }
    return array;
}