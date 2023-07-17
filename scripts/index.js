const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSubmitButton = popup.querySelector('.form__submit')
const formElement = popup.querySelector('#edit-form');
const nameInput = formElement.querySelector('#name-input');
const jobInput = formElement.querySelector('#job-input');

const popupOpen = function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const popupClose = function () {
  popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);

popupSubmitButton.addEventListener('click', popupClose);
