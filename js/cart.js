
/**
 * Get quantity user has write in the input field 
 * @returns {number} Return input field value has an integer
 */
function getQuantity() {
    return parseInt(document.getElementById("quantity").value) || 1;
}

/**
 * Update the quantity display int he header 
 * @param {number} quantity - The quantity to display 
 * @returns the quantity
 */
function updateCart(quantity) {
    if (quantity > 99) quantity = "99+";
    return document.getElementById("cart-nb").innerText = quantity;
}

/**
 * Disable add to cart CTA and change the text
 */
function disableCta() {

    // Get the button
    const cta = document.querySelector("#add-to-cart");

    // Change button status to disabled
    cta.disabled = true;

    // Change text for disabled text if available
    if (cta.dataset.diabledText) cta.innerText = cta.dataset.diabledText;
}

/**
 * Get a boolean to know if the add to cart CTA has already been disbled ?
 * @returns {boolean} Is the CTA diabled ?
 */
function isCtaDisabled() {
    return document.querySelector("#add-to-cart").disabled;
}

/**
 * Initialize evant handler on add to cart CTA
 */
export default function initCart() {
    document.querySelector("#cart-form")
        .addEventListener("submit", function (e) {
            // Don't send the form, stay on page
            e.preventDefault();

            // If the CTA has already been disabled, don't move !
            if (isCtaDisabled()) return;

            // Get quantity from input field
            const qty = getQuantity();

            // Update cart and disable CTA
            if (qty > 0) {
                updateCart(qty);
                disableCta();
            }
        });
}