
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
    const cta = document.getElementById("add-to-cart");
    cta.classList.add("disabled");
    if (cta.dataset.diabledText) cta.innerText = cta.dataset.diabledText;
}

/**
 * Initialize evant handler on add to cart CTA
 */
export default function initCart() {
    document.getElementById("add-to-cart").addEventListener("click", function (event) {
        if (this.classList.contains("disabled")) return;
        const qty = getQuantity();
        if (qty > 0) {
            updateCart(qty);
            disableCta();
        }
    })
}