import { validationSettings } from "./validate.js";
import formValidator from "./FormValidator.js";
import Card from "./Card.js";
//import { openImagePopup } from "./util.js";
import { cardList, initialCards, nameTitle, nameSubtitle, editButton, inputName, inputDescription } from "./util.js";
import Section from "./section.js";
//import Popup from "./Popup.js";
import PopupWithImage from "./PopupwithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";

const profileForm = document.querySelector("#form-profile");
const placeForm = document.querySelector("#form-place");

const profileFormValidator = new formValidator(validationSettings, profileForm);
profileFormValidator.enableValidation();

const placeFormValidator = new formValidator(validationSettings, placeForm);
placeFormValidator.enableValidation();


export function createCard(card) {
  //instanciar una clase
  const newCard = new Card(card.name, card.link, "#card-template", (name, link) => {
    popupWithImage.open(name, link);
  });
  return newCard.getView();

}


//instancia de la api

const api = new Api({
    baseURL: "https://around-api.es.tripleten-services.com/v1",
    headers: {
      authorization: "b406e982-fedd-40fe-9dc3-70e4f6a9d489",
      "Content-Type": "application/json"
    }
  });

//INSTANCIA DE SECTION PARA RENDERIZAR LAS CARDS
const section = new Section(
  { items: initialCards, renderer: createCard }, ".cards__list");

section.renderer();

//instancia de PopupWithImage
const popupWithImage = new PopupWithImage("#popup-view-image");
popupWithImage.setEventListeners();


//Instancia de UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__Subtitle",
});

//instancia de PopupWithForm
const popupWithForm = new PopupWithForm("#popup-profile", (formData) => {
  userInfo.setUserInfo({
  name: formData.name,
  job: formData.description
  });
});

popupWithForm.setEventListeners();

//bloque maneja apertura del form.perfil y cambio de datos

editButton.addEventListener("click",() => {
  profileForm.reset();
  popupWithForm.open();
  profileFormValidator.resetValidation();

});

