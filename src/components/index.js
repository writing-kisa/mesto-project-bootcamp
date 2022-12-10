import "../../pages/index.css";

const editNameButton = document.querySelector(".profile__button-change-name");
const editNameModalWindow = document.querySelector("#edit_profile");
const nameSaveButton = document.querySelector("#name_save_button");
const formNameChange = document.querySelector("#submit_name_form");
const nameInput = document.querySelector("#text-name");
const bioInput = document.querySelector("#text-bio");
const addCardModalWindow = document.querySelector(".popup_type_add-card");
const addCardButton = document.querySelector(".profile__button-add-photo");
const cardCloseButton = document.querySelector("#card_close_button");
const formAddCard = document.querySelector("#submit_card_form");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const cardContainer = document.querySelector("#card-container");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

import { openPopup, closePopup } from "./utils.js";
import { closeEscPopup, closePopupOverlay, closeFullPhotoPopup, openFullPhotoPopup} from "./modal.js";
closeEscPopup();
closePopupOverlay();

editNameButton.addEventListener("click", () => openPopup(editNameModalWindow));
addCardButton.addEventListener("click", () => openPopup(addCardModalWindow));
cardCloseButton.addEventListener("click", () => closePopup(addCardModalWindow));
formNameChange.addEventListener("submit", handleProfileFormSubmit);

import { addNewCard, createCard } from "./card.js";
formAddCard.addEventListener("submit", addNewCard);

//пишем код, который из массива карточек создает и добавляет
//карточки на страницу, используя функцию создания карточки
initialCards.forEach((card) => {
  cardContainer.append(createCard(card.name, card.link));
});

function handleProfileFormSubmit(evt) {
  // эта функция изменяет имя и био профиля
  evt.preventDefault();
  if (!nameSaveButton.classList.contains("popup__save-button_type_inactive")) {
    profileName.textContent = nameInput.value;
    profileBio.textContent = bioInput.value;
    closePopup(editNameModalWindow);
  }
}

import { enableValidation} from './validate';
enableValidation();


