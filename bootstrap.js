document.addEventListener('DOMContentLoaded', function() {
    // Select the script element by its tag name
    var scriptElement = document.querySelector('script');

    // Check if the script element is found
    if (scriptElement) {
        // Update the src attribute
        scriptElement.src = scriptElement.src.replace('https://dev-pitgurat.pantheonsite.io/sandbox/', 'https://mycdn.com/');
    }
});