var scriptElement = document.querySelector('script');
if (scriptElement) {
    scriptElement.src = scriptElement.src.replace('https://dev-pitgurat.pantheonsite.io/sandbox/', 'https://mycdn.com/');
}
