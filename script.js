const editButton = document.querySelector('.profile__button-change-name');
const modalWindow = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

const formElement = document.querySelector('#submit_form');
const nameInput = document.querySelector('#text-name');
const bioInput = document.querySelector('#text-bio');

let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');

editButton.addEventListener('click', openPopup);
function openPopup() {
  modalWindow.setAttribute('class', 'popup popup_opened');
};

closeButton.addEventListener('click', closePopup);
function closePopup() {
  modalWindow.setAttribute('class', 'popup');
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);
