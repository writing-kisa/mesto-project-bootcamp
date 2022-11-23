// "use strict";

const editNameButton = document.querySelector('.profile__button-change-name');
const editNameModalWindow = document.querySelector('#edit_profile');
const nameCloseButton = document.querySelector('#name_close_button');
const nameSaveButton = document.querySelector('#name_save_button')
const formNameChange = document.querySelector('#submit_name_form');
const nameInput = document.querySelector('#text-name');
const bioInput = document.querySelector('#text-bio');
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const addCardButton = document.querySelector('.profile__button-add-photo');
const createCardButton = document.querySelector("#popup__create-button");
const cardCloseButton = document.querySelector('#card_close_button');
const formAddCard = document.querySelector('#submit_card_form');

//создаем функции, которые открывают и закрывают попап
function openPopup(thisPopup) {
  thisPopup.classList.add('popup_opened');
};

function closePopup(thisPopup) {
  thisPopup.classList.remove('popup_opened');
};

function nameChangeHandler (evt) {
  // эта функция изменяет имя и био профиля
  evt.preventDefault();
  const profileName = document.querySelector('.profile__name');
  const profileBio = document.querySelector('.profile__bio');
  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;
}

// Меняем имя
editNameButton.addEventListener('click', () => openPopup(editNameModalWindow));
nameSaveButton.addEventListener('click', () => closePopup(editNameModalWindow));
formNameChange.addEventListener('submit', nameChangeHandler);
nameCloseButton.addEventListener('click', () => closePopup(editNameModalWindow));


// Добавляем карточку
addCardButton.addEventListener('click', () => openPopup(addCardModalWindow)); // open popup
createCardButton.addEventListener('click', () => closePopup(addCardModalWindow)); // close popup

// formAddCard.addEventListener('submit', createCardHandler);
cardCloseButton.addEventListener('click', () => closePopup(addCardModalWindow));
// submit card info

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardContainer = document.querySelector('#card-container');

//создаем функции обработчики  лайка
//и дорабатываем функцию создания карточки, чтобы они
//вешались на нужные DOM элементы

function onCardClick(event) {
  if (event.target.classList.contains('gallery__like-button')) {
    event.target.classList.add('gallery__like-button_able');
  }
  if (event.target.classList.contains('gallery__delete-button')) {
    event.currentTarget.remove();
  }
};

//функция создания карточки

function createCard(cardName, cardLink) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.gallery__cell').cloneNode(true);
  cardElement.querySelector('.gallery__name').textContent = cardName;
  cardElement.querySelector('.gallery__photo').src = cardLink;
  cardElement.addEventListener('click', onCardClick);
  return cardElement;
}

//пишем код, который из массива карточек создает и добавляет
//карточки на страницу, используя функцию создания карточки

initialCards.forEach( card => {
  cardContainer.append(
    createCard(card.name, card.link)
  );
});





