export const editNameButton = document.querySelector(
  ".profile__button-change-name"
);
export const editNameModalWindow = document.querySelector("#edit_profile");
export const nameSaveButton = document.querySelector("#name_save_button");
export const formNameChange = document.querySelector("#submit_name_form");
export const nameInput = document.querySelector("#text-name");
export const bioInput = document.querySelector("#text-bio");
export const addCardModalWindow = document.querySelector(
  ".popup_type_add-card"
);
export const addCardButton = document.querySelector(
  ".profile__button-add-photo"
);
export const cardCloseButton = document.querySelector("#card_close_button");
export const formAddCard = document.querySelector("#submit_card_form");
export const profileName = document.querySelector(".profile__name");
export const profileBio = document.querySelector(".profile__bio");
export const profilePhoto = document.querySelector(".profile__avatar");
export const cardContainer = document.querySelector("#card-container");
export const createCardButton = document.querySelector("#popup__create-button");
export const namePhotoInput = document.querySelector("#add-card-name");
export const linkPhotoInput = document.querySelector("#add-card-link");

export const initialCards = [
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

export const config = {
  formSelector: ".form",
  fieldsetSelector: ".form__set",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_inactive",
  inputErrorClass: "popup__text_type_error",
  errorClass: "popup__text-error_type_active",
};
