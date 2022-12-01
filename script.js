"use strict";

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
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
const cardTemplate = document.querySelector('#card-template').content;
const namePhotoInput = document.querySelector('#add-card-name');
const linkPhotoInput = document.querySelector('#add-card-link');

//создаем функции, которые открывают и закрывают попап
function openPopup(thisPopup) {
  thisPopup.classList.add('popup_opened');
};

function closePopup(thisPopup) {
  thisPopup.classList.remove('popup_opened');
};

function handleProfileFormSubmit (evt) {
  // эта функция изменяет имя и био профиля
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;
  closePopup(editNameModalWindow);
}

//меняем имя
editNameButton.addEventListener('click', () => openPopup(editNameModalWindow));
formNameChange.addEventListener('submit', handleProfileFormSubmit);
// nameCloseButton.addEventListener('click', () => closePopup(editNameModalWindow));
//--> вместо этого универсально навешиваю обработчики крестиков

//находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close-button');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


//добавляем карточку
addCardButton.addEventListener('click', () => openPopup(addCardModalWindow)); // open popup
cardCloseButton.addEventListener('click', () => closePopup(addCardModalWindow));// close popup

//submit card info

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

//создаем функции обработчики лайка и удаления

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
  const cardElement = cardTemplate.querySelector('.gallery__cell').cloneNode(true);
  cardElement.querySelector('.gallery__name').textContent = cardName;
  cardElement.querySelector('.gallery__photo').src = cardLink;
  cardElement.querySelector('.gallery__photo').alt = cardName;
  // console.log(cardElement.querySelector('.gallery__photo').alt);
  cardElement.addEventListener('click', onCardClick);
  cardElement.addEventListener('click', openFullPhotoPopup);
  // console.log(cardPhoto);
  return cardElement;
}

//функция создания карточки через форму отправки

function addNewCard(evt) {
  evt.preventDefault();
  cardContainer.prepend(
    createCard(namePhotoInput.value, linkPhotoInput.value)
  );
  closePopup(addCardModalWindow);
  // namePhotoInput.value = '';
  // linkPhotoInput.value = '';
  evt.target.reset();
}

// createCardButton <- кнопка создать карточку
formAddCard.addEventListener('submit', addNewCard);

//пишем код, который из массива карточек создает и добавляет
//карточки на страницу, используя функцию создания карточки

initialCards.forEach( card => {
  cardContainer.append(
    createCard(card.name, card.link)
  );
});

//функция открытия и закрытия попапа с фотографией в полный размер

const popupPhotoModalWindow = document.querySelector('.popup-photo');
const cardPhotoName = document.querySelector('.popup-photo__name');
// console.log(cardPhotoName);
const cardPhotoImage = document.querySelector('.popup-photo__full-size');
// console.log(cardPhotoImage.src);

function openFullPhotoPopup(event) {
  if (event.target.classList.contains('gallery__photo')) {
    const popupPhotoUrl = event.target.src;
    // console.log(popupPhotoUrl);
    cardPhotoImage.src = popupPhotoUrl;
    // console.log(cardPhotoImage.src);
    const popupPhotoName = event.currentTarget.querySelector('.gallery__name');
    cardPhotoName.textContent = popupPhotoName.textContent;
    // console.log(popupPhotoName.textContent);
    openPopup(popupPhotoModalWindow);
  }
}

function closeFullPhotoPopup(event) {
  event.classList.remove('popup-photo_opened');
}

const formElement = document.querySelector('#submit_name_form');
const formInput = formElement.querySelector('#text-name');
const formError = formElement.querySelector(`.${formInput.id}-error`);
console.log(formError);

const showInputError = (element) => {
  element.classList.add('popup__text_type_error');
  formError.classList.add('popup__text-error_type_active');
};

//функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__text_type_error');
  formError.classList.remove('popup__text-error_type_active');
};

//функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    //если поле не проходит валидацию, покажем ошибку
    showInputError(formInput);
  } else {
    //если проходит, скроем
    hideInputError(formInput);
  }
};

//вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);




