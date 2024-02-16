function changeScriptSrc(newBaseUrl) {
    
    var script = document.getElementById('myScript');
    var currentSrc = script.src;
    var pathAfterBaseUrl = currentSrc.replace(/^.*\/\/[^\/]+/, '');
    var newSrc = newBaseUrl + pathAfterBaseUrl;
    script.src = newSrc;
}
var urlx = 'https://dev-con03.pantheonsite.io';
changeScriptSrc(urlx);
