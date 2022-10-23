import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// gallery.addEventListener('click');

const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryEl);

// const gallery = document.querySelector('.gallery');
// gallery.addEventListener('click', zoomImage);

// const galleryEl = galleryItems
//   .map(
//     ({ description, original, preview }) =>
//       `<li class = "gallery__item"><a class="gallery__link" href="${original}"><img class = "gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`
//   )
//   .join('');

// gallery.insertAdjacentHTML('beforeend', galleryEl);

// function zoomImage(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   console.log(event.target.dataset.source);

//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}">`);
//   instance.show();
// }
