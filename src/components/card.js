// функции для работы с карточками

//создаем функции обработчики лайка и удаления
import {addCardModalWindow, cardContainer, createCardButton, linkPhotoInput, namePhotoInput} from "../utils/constants";
import {closePopup, openFullPhotoPopup} from "./modal";

function onCardClick(event) {
  if (event.target.classList.contains("gallery__like-button")) {
    event.target.classList.toggle("gallery__like-button_able");
  }
  if (event.target.classList.contains("gallery__delete-button")) {
    event.currentTarget.remove();
  }
}

//функция создания карточки

export function createCard(cardName, cardLink) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".gallery__cell")
    .cloneNode(true);
  cardElement.querySelector(".gallery__name").textContent = cardName;
  cardElement.querySelector(".gallery__photo").src = cardLink;
  cardElement.querySelector(".gallery__photo").alt = cardName;
  cardElement.addEventListener("click", onCardClick);
  cardElement.addEventListener("click", openFullPhotoPopup);
  return cardElement;
}

export function addNewCard(evt) {
  if (!createCardButton.classList.contains("popup__save-button_type_inactive")) {
    evt.preventDefault();
    const newCard = createCard(namePhotoInput.value, linkPhotoInput.value);
    cardContainer.prepend(newCard);
    closePopup(addCardModalWindow);
    evt.target.reset();
  }
}
