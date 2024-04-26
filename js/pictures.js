/**
 * Initialize pictures gallery handler.
 */
export default function initPictures() {
    let imgCount = 0;
    const thumbs = Array.from(document.querySelectorAll("#thumbs img[data-src-large]"));
    const picturesUrl = thumbs.map(img => img.dataset.srcLarge);

    // Manage mouse hovering for desktop
    thumbs.forEach((img, i) => {
        img.addEventListener("mouseover", function () {
            imgCount = i;
            displayImageUrl(this.dataset.srcLarge);
        })
    })

    // Manage button for mobile
    document.querySelectorAll("#pictures button[data-dir]")
        .forEach(btn => {
            btn.addEventListener("click", function () {
                imgCount += this.dataset.dir === "prev" ? -1 : 1;
                if (imgCount < 0) imgCount = picturesUrl.length - 1;
                displayImageUrl(picturesUrl[imgCount % picturesUrl.length]);
            })
        });
}

/**
 * Change main product image displayed.
 * @param {string} url - Image URL to display 
 */
function displayImageUrl(url) {
    document.getElementById("pictures-img").src = url;
}