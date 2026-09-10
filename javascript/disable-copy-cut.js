/* 
 * Purpose: makes copying my work difficult for the average user
 * NOTE: need something else for web scrapers though...
 * Tutorial: https://www.w3docs.com/snippets/javascript/how-to-disable-text-selection-copy-cut-paste-and-right-click-on-a-web-page
 */
function disable_right_click() {
    //1. disable copy function
    document.addEventListener("copy", function(event) {

        event.preventDefault();
    });

    //2. Disable cut function
    document.addEventListener("cut", function(event) {
        event.preventDefault();
    });
}