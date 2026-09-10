/***************************************************************************
 * Functions for Day/Night mode
 * -------------------------------------------------------------------------
 * This script will change colors of our page upon user request
 * 
 * Modes:   - fun/rainbow (default)
 *          - light
 *          - dark
 *          - high contrast
 *          - stars
 *          - top-house (clowns)
 *          - pink/cherry blossum
 *          - under the sea
 *          - cats
 * 
 * 
 * Ideas:   - change welcome photo
 *          - change cursor
 *          - change fonts
 *          - add cute animations to signify theme change
 *          - ease the theme change in
 *          
 * 
 * @author Audrey Brooks 
 ***************************************************************************/

function activateLightMode() {
    //const sidebar = document.querySelector(".navbar-sidebar");
    //sidebar.style.display = 'none';

}

function activateDarkMode() {
    
}


//key press
document.addEventListener("keypress", function(event) {
    // the event will tell us what key was pressed
    console.log("key pressed: " + event.key);

} );