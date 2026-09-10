/***************************************************************************
 * Functions for Skills Carousel 
 * -------------------------------------------------------------------------
 * Provides functions for carousel found in skills section. 
 * 
 * 
 * recieves an array of cards
 *  - this is important for how many times the buttons can move
 * 
 * 
 * TODO: figure out why we need to go minus one from cards.length bit...
 * 
 ***************************************************************************/
const edu_track = document.querySelector(".edu-card-list");
const edu_cards = document.querySelectorAll(".edu-card");

const upButton = document.querySelector(".edu-prev");
const downButton = document.querySelector(".edu-next");


// Global Variables:
let edu_currentIndex = 0;               // index of card we're focused on
let edu_maxIndex = cards.length - 1;    // Number of cards we have


function updateEduCarousel() {
    // Calculate movement:
    // how far = current card # * (card Height + gap between cards)
    const cardHeight = edu_cards[0].offsetHeight;
    const gap = 50; 
    const movement = edu_currentIndex * (cardHeight + gap);

    // Conduct movement
    edu_track.style.transform = `translateY(-${movement}px)`;
    edu_track.style.transform = `translateY(-450px)`;

    //update buttons
    updateButtons();
}

function updateEduButtons() {
    // Previous Button Updater:
    if (edu_currentIndex <= 0)    {  upButton.disabled = true;  }
    else                         {  upButton.disabled = false; }

    // Next Button Updater:
    if (edu_currentIndex > edu_maxIndex) {  downButton.disabled = true;  }
    else                                 {  downButton.disabled = false; }
}

/** */
downButton.addEventListener("click", () => {
    edu_currentIndex++;
    updateEduCarousel();
});


upButton.addEventListener("click", () => {
    edu_currentIndex--;
    updateEduCarousel();
});

updateEduCarousel();