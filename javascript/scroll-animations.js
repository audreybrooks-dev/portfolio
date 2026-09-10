/***************************************************************************
 * Functions for Scrolling Animations
 * -------------------------------------------------------------------------
 * The observer:
 * will run every time an observed element enters or leaves the viewport
 * recieves an array of entries
 *  - each entry tells us what happened
 ***************************************************************************/

const navbar        = document.querySelector(".navbar");
const navbarLinks   = document.querySelectorAll(".navbar-link");
const navbarTitle   = document.querySelector(".navbar-title");
const navbarBurger  = document.querySelector(".menu-button");



const observer = new IntersectionObserver(  (entries) => {
    entries.forEach((entry) => {
        

        if (entry.isIntersecting) {  
            switch (entry.target) {


                /****************************************************/
                /* SECTION: WELCOME                                 */
                /****************************************************/
                case document.querySelector(".welcome"):
                    //navigation bar changes: 
                    navbar.style.setProperty("background-color", "transparent");
                    
                    //title
                    navbarTitle.style.color = "rgb(41, 5, 74)";
                    navbarTitle.style.setProperty("background-color", "transparent");

                    //box shadow
                    navbar.style.boxShadow = "none";

                    //links in navbar
                    navbarLinks.forEach((link) => { 
                        link.style.setProperty("background-color", "transparent");   
                        link.style.color = "rgb(41, 5, 74)";    
                    });

                    // menu burger
                    navbarBurger.style.fill = "rgb(41, 5, 74)";

                    break;



                /****************************************************/
                /* SECTION: ABOUT                                   */
                /****************************************************/
                case document.querySelector(".about"):
                    console.log("About section reached");

                    //-------------------------------------
                    //NAVBAR-CHANGES: 
                    // -> Change text styling
                    navbarTitle.style.color = "";
                    navbarBurger.style.fill = "";

                    // -> change background styling
                    navbar.style.backgroundColor = "";
                    navbar.style.boxShadow = "";
                    //-------------------------------------
                  
                    //basic reset:
                    resetNavLinkColors();

                    //tab Changes:
                    setNavLinksColors( 0, "rgb(10, 6, 9)", "rgb(205, 105, 172)" );
                    break;


                /****************************************************/
                /* SECTION: EDUCATION                               */
                /****************************************************/
                case document.querySelector(".education"):
                    console.log("Education section reached");
                    
                    //basic reset:
                    resetNavLinkColors();

                    //tab Changes:
                    setNavLinksColors( 1, "rgb(10, 6, 9)", "rgb(205, 105, 172)" );
                    break;



                /****************************************************/
                /* SECTION: SKILLS                                  */
                /****************************************************/
                case document.querySelector(".skills"):
                    console.log("Skills section reached");
                    
                    //basic reset:
                    resetNavLinkColors();

                    //tab Changes:
                    setNavLinksColors( 2, "rgb(10, 6, 9)", "rgb(205, 105, 172)" );
                    break;



                /****************************************************/
                /* SECTION: PROJECTS                                */
                /****************************************************/
                case document.querySelector(".projects"):
                    console.log("Projects section reached");

                    //basic reset:
                    resetNavLinkColors();

                    //tab Changes:
                    setNavLinksColors( 3, "rgb(10, 6, 9)", "rgb(205, 105, 172)" );

                    break;


                    
                /****************************************************/
                /* SECTION: CONTACT                                */
                /****************************************************/
                case document.querySelector(".contact"):
                    console.log("Contact section reached");

                    //basic reset:
                    resetNavLinkColors();

                    //tab Changes:
                    setNavLinksColors( 4, "rgb(10, 6, 9)", "rgb(205, 105, 172)" );

                    break;


                    
                /****************************************************/
                /* SECTION: FOOTER                                  */
                /****************************************************/
                // case document.querySelector(".footer"):
                //     console.log("Footer reached");
                    // navbarLinks.forEach((link) => {  
                    //     link.style.color = "";   
                    //     link.style.backgroundColor = ""; 
                    // });
                //     break;
            }
        }
        else {
            entry.d
        }
    });},
    { root: null, threshold: 0.4, }
);



document.querySelectorAll(".section").forEach((el) => {
    observer.observe(el);
});





function resetNavLinkColors() {
    navbarLinks.forEach((link) => {  
        link.style.color = "";   
        link.style.backgroundColor = ""; 
    });
}



/**
 * 
 * @param {0} numInArr -> number in navbarLinks's array that we're changing
 * @param {1} txtColor -> what color we want the tab's text to be
 * @param {2} bgColor  -> what color we want the tab's background color to be
 */
function setNavLinksColors(numInArr, txtColor, bgColor) {
    navbarLinks[numInArr].style.color = txtColor;
    navbarLinks[numInArr].style.setProperty("background-color", bgColor);
}