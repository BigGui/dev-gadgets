import getProductsFromAPI from "./api.js";
import {
    getSomeRandomValues
} from "./array.js";


/**
 * Hide or show buttons on mobile carousel,
 * depends on which item is displayed.
 * @param {number} indexDisplayed - The Current displayed item index
 */
function updateCarouselHandlers(indexDisplayed) {
    document.querySelectorAll("#carousel button[data-dir]")
        .forEach(btn => btn.classList.remove("hidden"));

    if (indexDisplayed === 0) {
        document.getElementById("carousel-prev").classList.add("hidden");
    }

    if (indexDisplayed >= getNbItem() - 1) {
        document.getElementById("carousel-next").classList.add("hidden");
    }
}

/**
 * Get the number of items in the carousel.
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

    // Move carousel to the selected item
    document.querySelector(".js-carousel-content").style.left = `-${indexToDisplay * 100}vw`;
    
    // Update buttons
    updateCarouselHandlers(indexToDisplay);
}

/**
 * Format a given price to display it with € symbol.
 * @param {number} price - The price to display 
 * @returns {string} string to display the price with € symbol.
 */
function formatPrice(price) {
    return price.toFixed(2).replace(".", "€");
}

/**
 * Create a new carousel item from the template and the given data. 
 * @param {object} data - Item data in an object  
 * @returns {element} Item element create from template and given data.
 */
function getNewitem(data) {
    const element = document.importNode(document.querySelector("#carousel-item-template").content, true);

    element.querySelector(".js-img").src = "img/" + data.picture;
    element.querySelector(".js-img").setAttribute("alt", data.name);
    element.querySelector(".js-ttl").textContent = data.name;
    element.querySelector(".js-price").textContent = formatPrice(data.price);

    return element;
}

/**
 * Initialize carousel
 */
export default function initCarousel() {

    // Load products data from JSON file
    getProductsFromAPI()
        .then(products => {

            // Select 4 products randomly
            // Generate their elements from template
            // Add those elements to the carousel
            document.querySelector(".js-carousel-content")
                .append(
                    ...getSomeRandomValues(products.filter(p => p.id !== 1), 4)
                        .map(getNewitem)
                );

            // Initialize a global counter to manage carousel moves.
            let counter = 0;

            // Display or hide buttons
            updateCarouselHandlers(counter);

            // Initialize event handlers on carousel buttons
            document.querySelectorAll("#carousel button[data-dir]")
                .forEach(btn => {
                    btn.addEventListener("click", function () {
                        counter += this.dataset.dir === "prev" ? -1 : 1;
                        counter %= getNbItem();
                        moveCarouselTo(counter);
                    });

                    // Remove scroll on carousel when buttons are focused.
                    btn.addEventListener("focus", function() {
                        document.querySelector("#carousel").scrollIntoView();
                    })
                });
        });
}