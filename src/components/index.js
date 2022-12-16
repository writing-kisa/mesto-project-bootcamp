import "../../pages/index.css";

import { closePopup, openPopup, setupPopups } from "../components/modal.js";
import { addNewCard, createCard } from "../components/card.js";
import { enableValidation } from "../utils/validate";
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
  profileBio,
  profileName,
  config
} from "../utils/constants";

function handleProfileFormSubmit(evt) {
  // эта функция изменяет имя и био профиля
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;
  closePopup(editNameModalWindow);
}

editNameButton.addEventListener("click", () => openPopup(editNameModalWindow, config));
addCardButton.addEventListener("click", () => openPopup(addCardModalWindow, config));
cardCloseButton.addEventListener("click", () => closePopup(addCardModalWindow));
formNameChange.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", addNewCard);

//пишем код, который из массива карточек создает и добавляет
//карточки на страницу, используя функцию создания карточки
initialCards.forEach((card) => {
  cardContainer.append(createCard(card.name, card.link));
});

setupPopups();

enableValidation(config);
