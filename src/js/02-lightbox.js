import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imgGallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
  })
  .join("");

imgGallery.insertAdjacentHTML("afterbegin", galleryMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
