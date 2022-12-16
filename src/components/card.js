//создаем функции обработчики лайка и удаления
import {addCardModalWindow, cardContainer, linkPhotoInput, namePhotoInput} from "../utils/constants";
import {closePopup, openFullPhotoPopup} from "./modal";

//функция создания карточки

export function createCard(cardName, cardLink) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".gallery__cell")
    .cloneNode(true);
  const cardPhoto = cardElement.querySelector(".gallery__photo");
  const likeButton = cardElement.querySelector(".gallery__like-button");
  const deleteButton = cardElement.querySelector(".gallery__delete-button");
  const cardPhotoName = cardElement.querySelector(".gallery__name");

  cardPhotoName.textContent = cardName;
  cardPhoto.src = cardLink;
  cardPhoto.alt = cardName;

  likeButton.addEventListener('click', () => likeButton.classList.toggle('gallery__like-button_able'));
  deleteButton.addEventListener('click', () => cardElement.remove());
  cardPhoto.addEventListener('click', openFullPhotoPopup);
  return cardElement;
}

export function addNewCard(evt) {
    evt.preventDefault();
    //console.log(namePhotoInput.value, linkPhotoInput.value);
    const newCard = createCard(namePhotoInput.value, linkPhotoInput.value);
    cardContainer.prepend(newCard);
    closePopup(addCardModalWindow);
    evt.target.reset();
}
