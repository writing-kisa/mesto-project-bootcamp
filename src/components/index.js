import "../../pages/index.css";

import { closePopup, openPopup, setupPopups } from "../components/modal.js";
import { createCard } from "../components/card.js";
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
  nameInput,
  profileBio,
  profileName,
  profilePhoto,
  config,
  namePhotoInput,
  linkPhotoInput
} from "../utils/constants";

import { getUser, getCards, patchUser, postNewCard } from "../utils/api.js";

getUser
.then((user) => {
  profileName.textContent = user.name;
  profileBio.textContent = user.about;
  profilePhoto.src = user.avatar;
});

getCards
.then((cards) => { cards.forEach((card) => {
  cardContainer.append(createCard(card.name, card.link));
})});

patchUser
.then((result) => {
  console.log(result);
})

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

function handleAddNewCardFromSubmit(evt) {
  evt.preventDefault();

  postNewCard(namePhotoInput.value, linkPhotoInput.value)
    .then(card => {
      const newCard = createCard(card.name, card.link);
      cardContainer.prepend(newCard);
      closePopup(addCardModalWindow);
      formAddCard.reset();
    });
}

formAddCard.addEventListener("submit", handleAddNewCardFromSubmit);

setupPopups();

enableValidation(config);
