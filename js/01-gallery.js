import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryConteiner = document.querySelector('.gallery')


function createImagesFromGallery(array) {
    return array
        .map(({ preview, original, description }) => { 
            return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
            `
        }).join('')
    
}
const images = createImagesFromGallery(galleryItems)
galleryConteiner.insertAdjacentHTML('beforeend', images)

galleryConteiner.addEventListener('click', onImgClick)

function onImgClick(evt) {
    const isImgClick = evt.target.classList.contains('gallery__image')
    if (!isImgClick) {
        return
    } else {
        const srcOriginal = evt.target.dataset.source
        const altDescription = evt.target.alt
        evt.preventDefault()
        createModal(srcOriginal,altDescription)  
        
    }  
}

function createModal(srcBig, alt) { 
const modal = basicLightbox.create(`
    <img class="gallery__image" src="${srcBig}" alt="${alt}">`
)
    modal.show()
}