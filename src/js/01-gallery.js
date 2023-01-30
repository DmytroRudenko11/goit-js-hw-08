import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';

export const gallery = document.querySelector('.gallery');

export const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
