// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup (gallery) {
    return gallery.map(photo => `
    <a class="gallery__item" href="${photo.original}">
    <img class="gallery__image" src="${photo.preview}" alt="${photo.description}" />
    </a>
`)
.join('')
}

galleryEl.innerHTML = createGalleryMarkup(galleryItems)

new SimpleLightbox('.gallery a', {
    alertError: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 300,
    animationSpeed: 150,
    fadeSpeed: 150,
  });

  
// const markup = galleryItems
//   .map(image => `<div class="gallery__item">
//                     <a class="gallery__link" href="${image.original}">
//                       <img
//                         class="gallery__image"
//                         src="${image.preview}"
//                         data-source="${image.original}"
//                         alt="${image.description}"
//                       />
//                     </a>
//                   </div>
//                `)
//   .join('')

// galleryEl.insertAdjacentHTML('afterbegin', markup)

// galleryEl.addEventListener('click', onImageClick)

// function onImageClick(event) {

//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
//   instance.show();

//   window.addEventListener('keydown', (event) => {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   }, { once: true });
// }
