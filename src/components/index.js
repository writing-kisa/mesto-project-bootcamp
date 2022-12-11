import "../../pages/index.css";

import {closePopup, openPopup, setupPopups} from "../components/modal.js";
import {addNewCard, createCard} from "../components/card.js";
import {enableValidation} from '../utils/validate';
import {
  addCardButton,
  addCardModalWindow,
  bioInput,
  cardCloseButton,
  cardContainer,
  editNameButton,
  editNameModalWindow,
  formAddCard,
  formNameChange,
  initialCards,
  nameInput,
  nameSaveButton,
  profileBio,
  profileName
} from "../utils/constants";

function handleProfileFormSubmit(evt) {
  // эта функция изменяет имя и био профиля
  evt.preventDefault();
  if (!nameSaveButton.classList.contains("popup__save-button_type_inactive")) {
    profileName.textContent = nameInput.value;
    profileBio.textContent = bioInput.value;
    closePopup(editNameModalWindow);
  }
}

editNameButton.addEventListener("click", () => openPopup(editNameModalWindow));
addCardButton.addEventListener("click", () => openPopup(addCardModalWindow));
cardCloseButton.addEventListener("click", () => closePopup(addCardModalWindow));
formNameChange.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", addNewCard);

//пишем код, который из массива карточек создает и добавляет
//карточки на страницу, используя функцию создания карточки

initialCards.forEach((card) => {
  cardContainer.append(createCard(card.name, card.link));
});

setupPopups();

enableValidation({
  formSelector: ".form",
  fieldsetSelector: ".form__set",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_inactive",
  inputErrorClass: "popup__text_type_error",
  errorClass: "popup__text-error_type_active",
});

