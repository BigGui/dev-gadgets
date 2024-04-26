import initPictures from "./pictures.js";
import initAccordions from "./accordions.js";
import initCart from "./cart.js";



// RELATED PRODUCTS

let carouselCount = 0;
const carouselTotal = document.querySelectorAll("#carousel .carousel-itm").length;
const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");
updateCarouselHandlers();

carouselPrev.addEventListener("click", function () {
    carouselCount--;
    carouselCount %= carouselTotal;
    updateCarousel();
})
carouselNext.addEventListener("click", function () {
    carouselCount++;
    carouselCount %= carouselTotal;
    updateCarousel();
})

function updateCarouselHandlers() {
    carouselPrev.classList.remove("hidden");
    carouselNext.classList.remove("hidden");
    if (carouselCount === 0) carouselPrev.classList.add("hidden");
    if (carouselCount === carouselTotal - 1) carouselNext.classList.add("hidden");
}

function updateCarousel() {
    updateCarouselHandlers();
    document.querySelector(".carousel-content").style.left = `-${carouselCount % carouselTotal * 100}vw`;
}


// Initialize pictures gallery
initPictures();

// Initialize all accordions
initAccordions();

// Initialize Add to cart functionnality
initCart();