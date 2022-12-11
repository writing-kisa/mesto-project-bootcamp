// работа модальных окон

export function openPopup(thisPopup) {
  thisPopup.classList.add("popup_opened");
}
export function closePopup(thisPopup) {
  thisPopup.classList.remove("popup_opened");
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
const setupClosePopupsByEsc = () => {
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
const setupClosePopupsByClick = () => {
  const popupModalWindow = Array.from(document.querySelectorAll(".popup"));
  popupModalWindow.forEach((element) => {
    element.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(element);
      }
    });
  });
};

export function setupPopups() {
  setupClosePopupsByButton();
  setupClosePopupsByEsc();
  setupClosePopupsByClick();
}

export function openFullPhotoPopup(event) {
  const popupPhotoModalWindow = document.querySelector(".popup-photo");
  const cardPhotoName = document.querySelector(".popup-photo__name");
  const cardPhotoImage = document.querySelector(".popup-photo__full-size");

  if (event.target.classList.contains("gallery__photo")) {
    cardPhotoImage.src = event.target.src;
    const popupPhotoName = event.currentTarget.querySelector(".gallery__name");
    cardPhotoName.textContent = popupPhotoName.textContent;
    openPopup(popupPhotoModalWindow);
  }
}
