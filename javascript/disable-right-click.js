/* 
 * Purpose: makes copying my work difficult for the average user
 * NOTE: need something else for web scrapers though...
 * Tutorial: https://www.w3docs.com/snippets/javascript/how-to-disable-text-selection-copy-cut-paste-and-right-click-on-a-web-page
 */
function disable_right_click() {

    document.addEventListener("contextmenu", event => {
        event.preventDefault();
        console.log("Right click was pressed by user");
        alert("Kindly, do not copy the contents of my page. Thanks!")
    });

}