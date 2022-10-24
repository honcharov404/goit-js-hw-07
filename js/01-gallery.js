import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onZoomImage);

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

function onZoomImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  console.log(e.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

  instance.show();
}
