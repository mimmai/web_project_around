export const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input-type-error",
  errorClass: "form__error_visible"
}


function hideInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.errorClass);
}

function showInputError(formElement, inputElement, settings) {
  const errorMessage = inputElement.validationMessage;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
}

function checkInputValidity(formElement, inputElement, settings) {
  if (!inputElement.validity.valid) {
showInputError(formElement, inputElement, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement, settings) {
if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.disabled = true;
} else {
  buttonElement.classList.remove(settings.inactiveButtonClass);
  buttonElement.disabled = false;
};
}

function setEventListeners(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
    checkInputValidity(formElement, inputElement, settings);
    toggleButtonState(inputList, buttonElement, settings);
  });
});
}

export function enableValidation(settings) {
const forms = Array.from(document.querySelectorAll(settings.formSelector))
forms.forEach((formElement) => {
formElement.addEventListener('submit', (evt) => {
evt.preventDefault();
});
setEventListeners(formElement, settings);
});
}

export function resetValidations(settings) {
  const forms = Array.from(document.querySelectorAll(settings.formSelector));
  forms.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, settings);
      inputElement.value = ""; // <<< Limpia manualmente los valores
    });

    if (buttonElement) {
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.disabled = true;
    }
  });
}

enableValidation(validationSettings);