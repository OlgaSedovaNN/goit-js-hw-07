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
        evt.preventDefault()

        evt.target.src = srcOriginal
        createModal(evt.target)   
    }  
}

// почему так не работает?
// function createModal(imgTeg) { 
// const modal = basicLightbox.create(`
//     ${imgTeg}`
// )
//     modal.show()
//     console.log(imgTeg)
// }

function createModal(imgTeg) { 
const modal = basicLightbox.create(`
    <img class="gallery__image" src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" data-source="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" alt="Hokkaido Flower">`
)
    modal.show()
    console.log(imgTeg)
}