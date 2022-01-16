import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector('.gallery')


function createImagesFromGallery(array) {
    return array
        .map(({ preview, original, description }) => { 
            return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
            `
        }).join('')
    
}
const images = createImagesFromGallery(galleryItems)
galleryConteiner.insertAdjacentHTML('beforeend', images)
