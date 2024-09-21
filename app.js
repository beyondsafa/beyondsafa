const collectionId = 'f6_E7czkVjk';
const backgroundContainer = document.querySelector('.background-container');

function fetchBackgroundImage() {
    const imageUrl = `https://source.unsplash.com/collection/${collectionId}/1600x900`;

    backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
}

fetchBackgroundImage();
