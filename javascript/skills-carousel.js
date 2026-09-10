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
const track = document.querySelector(".card-list");
const cards = document.querySelectorAll(".card");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");


function getCardsPerView() {
    if (window.innerWidth <= 900) {   return 1;    }
    return 2;
}

// Global Variables:
let currentIndex = 0;               // index of card we're focused on
let maxIndex = cards.length - 1;    // Number of cards we have


function updateCarousel() {
    // Calculate movement:
    // how far = current card # * (card width + gap between cards)
    const cardWidth = cards[0].offsetWidth;
    const gap = 50; 
    const movement = currentIndex * (cardWidth + gap);

    // Conduct movement
    track.style.transform = `translateX(-${movement}px)`;

    //update buttons
    updateButtons();
}

function updateButtons() {
    // Previous Button Updater:
    if (currentIndex <= 0)       {  prevButton.disabled = true;  }
    else                         {  prevButton.disabled = false; }

    // Next Button Updater:
    if (currentIndex >= maxIndex) {  nextButton.disabled = true;  }
    else                          {  nextButton.disabled = false; }
}

/** */
nextButton.addEventListener("click", () => {
    currentIndex++;
    updateCarousel();
});


prevButton.addEventListener("click", () => {
    currentIndex--;
    updateCarousel();
});


window.addEventListener("resize", updateCarousel);
updateCarousel();