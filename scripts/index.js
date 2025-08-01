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
import PopupWithConfirmation from "./PopupWithConfirmation.js";

const profileForm = document.querySelector("#form-profile");
const placeForm = document.querySelector("#form-place");


const profileFormValidator = new formValidator(validationSettings, profileForm);
profileFormValidator.enableValidation();

const placeFormValidator = new formValidator(validationSettings, placeForm);
placeFormValidator.enableValidation();


//instancia de la api

export const api = new Api({
    baseURL: "https://around-api.es.tripleten-services.com/v1/",
    headers: {
      authorization: "b7ca8585-8917-4aa6-8098-84ae835405ca",
      "Content-Type": "application/json"
    }
  });



  //section._items = cards;
 // section.renderer() estas dos lineas van en carList.renderItems por que hace la funcion de los dos

//instancia de PopupWithImage
const popupWithImage = new PopupWithImage("#popup-view-image");
popupWithImage.setEventListeners();


//Instancia de UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__Subtitle",
  avatarSelector: ".profile__avatar"
});

//instancia de PopupWithForm
const popupWithForm = new PopupWithForm("#popup-profile", (formData) => {
  api.editUser({
    name: formData.name,
    about: formData.description
  })
  .then((updateData) => {
    userInfo.setUserInfo ({
    name: updateData.name,
    job: updateData.about,
    avatar: updateData.avatar
    })
  })
  .catch(console.error)
});

popupWithForm.setEventListeners();

//bloque maneja apertura del form.perfil y cambio de datos

editButton.addEventListener("click",() => {
  profileForm.reset();
  popupWithForm.open();
  profileFormValidator.resetValidation();

});

//instancia de PopupWithConfirmation

const popupWithConfirmation = new PopupWithConfirmation("#popup-delete-confirm");
popupWithConfirmation.setEventListeners();


export function createCard(card) {
  const newCard = new Card(
    card.name,
    card.link,
    "#card-template",
    (name, link) => popupWithImage.open(name, link),
    popupWithConfirmation,
    api,
    card._id
  );
    //card._id );
  return newCard.getView();
}

//INSTANCIA DE SECTION PARA RENDERIZAR LAS CARDS
const section = new Section(
  { items: [],
    renderer: (cardData) => {
    return createCard(cardData);
  }
  },
  ".cards__list");

 //esto se supone que es para cargar los datos
Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, cards]) => {
  userInfo.setUserInfo({
    name: userData.name,
    job: userData.about,
    avatar: userData.avatar
  })
  section._items = cards.reverse();
  section.renderer();
  })
  .catch((err) => console.error("Error al cargar datos:", err));


