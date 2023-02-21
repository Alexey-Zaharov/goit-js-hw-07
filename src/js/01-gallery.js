import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgGallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class = "gallery__item"> <a class = "gallery__link" href = "${original}"> <img class ="gallery__image" src="${preview}" alt="${description}"></img> </a> </div>`;
  })
  .join("");

imgGallery.insertAdjacentHTML("afterbegin", galleryMarkup);

imgGallery.addEventListener("click", (evt) => {
  evt.preventDefault();
  const fullSizeToShow = basicLightbox.create(
    `<img src="${evt.target.parentNode.href}">`
  );
  fullSizeToShow.show();

  document.addEventListener("keydown", (evt) => {
    if (fullSizeToShow.visible() && evt.code === "Escape") {
      fullSizeToShow.close();
    }
  });
});
