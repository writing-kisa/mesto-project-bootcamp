// работа модальных окон

import { openPopup, closePopup } from "./utils";

//находим все крестики проекта по универсальному селектору
export const closeButtons = document.querySelectorAll(".popup__close-button");
closeButtons.forEach((button) => {
  const popupClosest = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popupClosest));
});

//функция закрывает попапы с помощью нажатия на esc
export const closeEscPopup = () => {
  const popupModalWindow = Array.from(document.querySelectorAll(".popup"));
  popupModalWindow.forEach((element) => {
    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        closePopup(element);
      }
    });
  });
};

//закрывает попапы с помощью нажатия на overlay
export const closePopupOverlay = () => {
  const popupModalWindow = Array.from(document.querySelectorAll(".popup"));
  popupModalWindow.forEach((element) => {
    element.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(element);
      }
    });
  });
};

export function openFullPhotoPopup(event) {
  const popupPhotoModalWindow = document.querySelector(".popup-photo");
  const cardPhotoName = document.querySelector(".popup-photo__name");
  const cardPhotoImage = document.querySelector(".popup-photo__full-size");

  if (event.target.classList.contains("gallery__photo")) {
    const popupPhotoUrl = event.target.src;
    // console.log(popupPhotoUrl);
    cardPhotoImage.src = popupPhotoUrl;
    // console.log(cardPhotoImage.src);
    const popupPhotoName = event.currentTarget.querySelector(".gallery__name");
    cardPhotoName.textContent = popupPhotoName.textContent;
    // console.log(popupPhotoName.textContent);
    openPopup(popupPhotoModalWindow);
  }
}

export function closeFullPhotoPopup(event) {
  event.classList.remove("popup-photo_opened");
}
