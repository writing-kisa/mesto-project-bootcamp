// функции для работы с карточками

//создаем функции обработчики лайка и удаления
function onCardClick(event) {
  if (event.target.classList.contains("gallery__like-button")) {
    event.target.classList.add("gallery__like-button_able");
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
  // console.log(cardElement.querySelector('.gallery__photo').alt);
  cardElement.addEventListener("click", onCardClick);
  cardElement.addEventListener("click", openFullPhotoPopup);
  // console.log(cardPhoto);
  return cardElement;
}

const createCardButton = document.querySelector("#popup__create-button");

const namePhotoInput = document.querySelector("#add-card-name");
const linkPhotoInput = document.querySelector("#add-card-link");

export function addNewCard(evt) {
  if (
    !createCardButton.classList.contains("popup__save-button_type_inactive")
  ) {
    evt.preventDefault();
    cardContainer.prepend(
      createCard(namePhotoInput.value, linkPhotoInput.value)
    );
    closePopup(addCardModalWindow);
    evt.target.reset();
  }
}
