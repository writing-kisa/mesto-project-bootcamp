import { checkFormValidity } from "../utils/validate";

const popupPhotoModalWindow = document.querySelector(".popup-photo");
const cardPhotoImage = document.querySelector(".popup-photo__full-size");
const popupPhotoName = document.querySelector(".popup-photo__name");

export function openPopup(thisPopup, config) {
  thisPopup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape);

  const form = thisPopup.querySelector('form');

  checkFormValidity(form, config);
}

export function closePopup(thisPopup) {
  thisPopup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
}

//находим все крестики проекта по универсальному селектору
function setupClosePopupsByButton() {
  const closeButtons = document.querySelectorAll(".popup__close-button");
  closeButtons.forEach((button) => {
    const popupClosest = button.closest(".popup");
    button.addEventListener("click", () => closePopup(popupClosest));
  });
}

//функция закрывает попапы с помощью нажатия на esc
const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

//закрывает попапы с помощью нажатия на overlay
const setupClosePopupsByClick = () => {
  const popupModalWindows = Array.from(document.querySelectorAll(".popup"));
  popupModalWindows.forEach((element) => {
    element.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(element);
      }
    });
  });
};

export function setupPopups() {
  setupClosePopupsByButton();
  setupClosePopupsByClick();
}

export function openFullPhotoPopup(event) {
  const galleryCardName = event.currentTarget;
  cardPhotoImage.src = event.target.src;
  cardPhotoImage.alt = event.target.name;
  popupPhotoName.textContent = galleryCardName.textContent;
  openPopup(popupPhotoModalWindow);
}
