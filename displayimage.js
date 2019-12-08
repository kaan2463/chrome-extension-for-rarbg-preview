document.addEventListener('DOMContentLoaded', function() {

    
    

    
        chrome.tabs.executeScript(null, {
            file: "content.js"
        });

        chrome.runtime.onMessage.addListener(function(message) {
            // Call the callback function
            hello(message);
        });


},false)

function hello(srcArr){
    console.log(document);
    var imageDiv = document.getElementById('imageDiv');
    var divTag = document.createElement('div');
    imageDiv.appendChild(divTag);
    console.log(srcArr.lista);
    lista= srcArr.lista;
    for(i=0;i<lista.length;i++){
        var imgTag = document.createElement('img');
        imgTag.src=lista[i];
        divTag.appendChild(imgTag);
        console.log(lista[i]);
    }
}