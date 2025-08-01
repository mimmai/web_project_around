import { resetValidations, validationSettings } from "./validate.js";
import { createCard } from "./index.js";
import PopupWithImage from "./PopupwithImage.js";
import { api } from "./index.js";
import Card from "./Card.js";

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

//variables popup delete confirmation
//const popupDeleteConfirm = document.querySelector("#popup-delete-confirm");
//const popupCloseDeleteConfirmButton = document.querySelector(".popup__close-delete-confirm")  //boton de la equis
//const trashButton = document.querySelector(".card__trash-button");

//respaldo de las initial cards
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


closeButton.addEventListener("click", function() {
handleClosePopup();
const profileForm = document.querySelector("#form-profile");
profileForm.reset();
resetValidations(validationSettings);
});
//profileForm

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
  resetValidations(validationSettings);
});

// FUNCTION MODAL CONFIRMATION DELETE

/*function handleOpenPopupDeleteConfirm() {
  popupDeleteConfirm.classList.add("popup_opened");
  }

  function handleClosePopupDeleteConfirm() {
  popupDeleteConfirm.classList.remove("popup_opened");
  }
 //aqui va el boton de la papelera
 // trashButton.addEventListener("click", function() {
  //handleOpenPopupDeleteConfirm();
//});

  popupCloseDeleteConfirmButton.addEventListener("click", function() {
  handleClosePopupDeleteConfirm();
});*/


//cierra la tecla escape
document.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {
    if (popup.classList.contains("popup_opened")) {
      popup.classList.remove("popup_opened");
      form.reset();
      resetValidations(validationSettings);
    } //form

    if (popupNewPlace.classList.contains("popup_opened")) {
      popupNewPlace.classList.remove("popup_opened");
      addNewCardForm.reset();
      resetValidations(validationSettings);
    }  //addNewCardForm

    if (popupViewImage.classList.contains("popup_opened")) {
      popupViewImage.classList.remove("popup_opened");
    }
  }
});

// esta fx abre el modal de la imagen completa

export function openImagePopup(name, link) {
  PopupWithImage.open(name, link);
}

closeImageButton.addEventListener("click", function () {
  popupViewImage.classList.remove("popup_opened");
});

//FORMULARIO PARA AGREGAR TARJETAS

const addNewCardForm = document.getElementById("form-place");

addNewCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const cardName = document.querySelector("#input-title").value;
  const urlNewCard = document.querySelector("#input-image").value;
  console.log(urlNewCard);

  api.createCard({ name: cardName, link: urlNewCard })
  .then((cardFromApi) => {
  const cardElement = createCard(cardFromApi);
  cardList.prepend(cardElement);
  popupNewPlace.classList.remove("popup_opened");
  addNewCardForm.reset();
  resetValidations(validationSettings);
})
  .catch((err) => console.error(err))
});

//({ name: cardName, link: urlNewCard }); esto estaba en createcard const cardElement

popup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    popup.classList.remove("popup_opened");
    resetValidations(validationSettings);
  }
});

popupNewPlace.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    handleClosePopupPlaces();
    resetValidations(validationSettings);
  }
});



export {
  cardList,
  initialCards,
  nameTitle,
  nameSubtitle,
  editButton,
  inputName,
  inputDescription
}