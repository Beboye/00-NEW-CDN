function changeScriptSrc(newBaseUrl) {

    var script = document.getElementById('myScript');
    var currentSrc = script.src;
    var pathAfterBaseUrl = currentSrc.replace(/^.*\/\/[^\/]+/, '');
    var newSrc = newBaseUrl + pathAfterBaseUrl;
    script.src = newSrc;
    
}
changeScriptSrc('https://dev-con3.pantheonsite.io');