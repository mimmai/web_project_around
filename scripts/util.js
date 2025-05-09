const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const formButton = document.querySelector(".form__button");
const inputName = document.querySelector(".form__input-name");
const inputDescription = document.querySelector(".form__input-description");
const nameTitle = document.querySelector(".profile__title");
const nameSubtitle = document.querySelector(".profile__Subtitle");
const form = document.querySelector(".form");

//variables popup new places

const addButton = document.querySelector(".profile__add-button");
const popupNewPlace = document.querySelector("#popup-places");
const closePlaceFormButton = document.querySelector("#popup-close-place-button");

//variables del Template

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

//VARIABLES DE POPUP IMAGEN COMPLETA
const popupViewImage = document.querySelector("#popup-view-image");
const fullSizeImage = document.querySelector(".popup__full-size-image");
const closeImageButton = document.querySelector("#close-image-button")
const titleFullSizeImage = document.querySelector(".popup__title-view-image")

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

//FUNCIONES DEL FORMULARIO-PERFIL

function handleOpenPopup() {
popup.classList.add("popup_opened");
}

function handleClosePopup() {
  popup.classList.remove("popup_opened");
  }


editButton.addEventListener("click", function() {
  handleOpenPopup()
});

closeButton.addEventListener("click", function() {
handleClosePopup();
const profileForm = document.querySelector("#form-profile");
profileForm.reset();
resetValidations(profileForm, validationSettings);
});

//FUNCION NEW PLACES

function handleOpenPopupPlaces() {
  popupNewPlace.classList.add("popup_opened");
  }

  function handleClosePopupPlaces() {
  popupNewPlace.classList.remove("popup_opened");
  }

addButton.addEventListener("click", function() {
  handleOpenPopupPlaces()
});

closePlaceFormButton.addEventListener("click", function() {
  handleClosePopupPlaces();
  const placeForm = document.querySelector("#form-place");
  placeForm.reset();
  resetValidations(placeForm, validationSettings);
});

//FUNCION DE CAMBIO DE DATOS EN POPUP PROFILE

form.addEventListener("submit", function (evt) {
  evt.preventDefault()

  const nameValue = inputName.value
  const descriptionValue = inputDescription.value

  nameTitle.textContent = nameValue
  nameSubtitle.textContent = descriptionValue

  //agregado para despues de enviar se resetee el formulario
  form.reset();
  resetValidations(form, validationSettings);
  popup.classList.remove("popup_opened");
});

//cierra la tecla escape
document.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {
    if (popup.classList.contains("popup_opened")) {
      popup.classList.remove("popup_opened");
      form.reset();
      resetValidations(form, validationSettings);
    }

    if (popupNewPlace.classList.contains("popup_opened")) {
      popupNewPlace.classList.remove("popup_opened");
      addNewCardForm.reset();
      resetValidations(addNewCardForm, validationSettings);
    }

    if (popupViewImage.classList.contains("popup_opened")) {
      popupViewImage.classList.remove("popup_opened");
    }
  }
});


export {
  popup,
  editButton,
  closeButton,
  formButton,
  inputName,
  inputDescription,
  nameTitle,
  nameSubtitle,
  form,
  addButton,
  popupNewPlace,
  closePlaceFormButton,
  cardTemplate,
  cardList,
  popupViewImage,
  fullSizeImage,
  closeImageButton,
  titleFullSizeImage,
  initialCards,
}