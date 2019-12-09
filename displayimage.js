document.addEventListener('DOMContentLoaded', function() {

    
    

    
        chrome.tabs.executeScript(null, {
            file: "content.js"
        });

        chrome.runtime.onMessage.addListener(function(message) {
            // Call the callback function
            createWindow(message);
        });


},false)

//imgSrc:imgSrc,aHref:aHref

function createWindow(srcArr){
    console.log(document);
    var imageDiv = document.getElementById('imageDiv');
    var divTag = document.createElement('div');
    imageDiv.appendChild(divTag);
    console.log(srcArr.lista);
    lista= srcArr.lista;
    for(i=0;i<lista.length;i++){
        var aTag=document.createElement('a');
        aTag.href=lista[i].aHref;
        var imgTag = document.createElement('img');
        imgTag.src=lista[i].imgSrc;
        aTag.appendChild(imgTag);
        divTag.appendChild(aTag);
        console.log(lista[i]);
    }
}