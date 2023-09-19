// Photo Gallery
let indexDuckImage = '';
let imageCounter = 0;

// array with Duck Large image
const duckImages = [
    'img/canard-jaune-1-l.png',
    'img/canard-jaune-2-l.png',
    'img/canard-jaune-3-l.png',
    'img/canard-jaune-4-l.png',
    'img/canard-jaune-5-l.png'
]

// Listener on gallery buttons
document.getElementById('button-left').addEventListener('click', () => {
     imageCounter --;
    if (imageCounter < 0) {
        imageCounter = duckImages.length - 1;
    }
    indexDuckImage = duckImages[imageCounter];
        document.getElementById('picture-img').setAttribute('src', indexDuckImage);
});


document.getElementById('button-right').addEventListener('click', () => {
    imageCounter ++;
    if (imageCounter > duckImages.length - 1) {
        imageCounter = 0;
    }
    indexDuckImage = duckImages[imageCounter];
        document.getElementById('picture-img').setAttribute('src', indexDuckImage);
});


// Listener on thumb images
document.getElementById('thumbs').addEventListener('mouseover', (event) => {
    const srcAttribute = event.target.getAttribute('data-large');
    document.getElementById('picture-img').setAttribute('src', srcAttribute);
})



