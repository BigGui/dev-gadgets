
/**
 * Hide ou show buttons on mobile carousel
 * depends on which item is displayed
 * @param {number} indexDisplayed - The Current displayed item index
 */
function updateCarouselHandlers(indexDisplayed) {
    document.querySelectorAll("#carousel button[data-dir]")
        .forEach(btn => btn.classList.remove("hidden"));

    if (indexDisplayed === 0) {
        document.getElementById("carousel-prev").classList.add("hidden");
    }

    if (indexDisplayed === getNbItem() - 1) {
        document.getElementById("carousel-next").classList.add("hidden");
    }
}

/**
 * Get thte number of items in the carousel.
 * @returns {number} The number of items
 */
function getNbItem() {
    return document.querySelectorAll("#carousel .js-carousel-itm").length;
}

/**
 * Move the carousel to display the item for the given index. 
 * @param {number} indexToDisplay - The item index to display
 */
function moveCarouselTo(indexToDisplay) {
    document.querySelector(".js-carousel-content").style.left = `-${indexToDisplay * 100}vw`;
    updateCarouselHandlers(indexToDisplay);
}

/**
 * Initialize carousel
 */
export default function initCarousel() {
    let counter = 0;
    updateCarouselHandlers(counter);

    document.querySelectorAll("#carousel button[data-dir]")
        .forEach(btn => {
            btn.addEventListener("click", function () {
                counter += this.dataset.dir === "prev" ? -1 : 1;
                counter %= getNbItem();
                moveCarouselTo(counter);
            });
        });
}