import { validationSettings } from "./validate.js";
import formValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openImagePopup } from "./util.js";
import { cardList, initialCards } from "./util.js";
import Section from "./section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupwithImage.js";
import PopupWithForm from "./PopupWithForm.js";


const profileForm = document.querySelector("#form-profile");
const placeForm = document.querySelector("#form-place");

const profileFormValidator = new formValidator(validationSettings, profileForm);
profileFormValidator.enableValidation();

const placeFormValidator = new formValidator(validationSettings, placeForm);
placeFormValidator.enableValidation();


export function createCard(card) {
  //instanciar una clase
  const newCard = new Card(card.name, card.link, "#card-template", openImagePopup);
  const cardElement = newCard.getView();
  cardList.prepend(cardElement);

}

initialCards.forEach((card) => {
  createCard(card);
});

//INSTANCIA DE SECTION PARA RENDERIZAR LAS CARDS
const section = new Section({ items: initialCards, renderer: createCard }, ".card__list");

section.renderer();

//instancia de PopupWithImage
const PopupWithImage = new PopupWithImage(popupViewImage);
PopupWithImage.setEventListeners();

//instancia de PopupWithForm
const PopupWithForm = new PopupWithForm("#form-profile", )//aqui falta un valor
PopupWithForm.setEventListeners();