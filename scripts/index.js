import { validationSettings } from "./validate.js";
import formValidator from "./FormValidator.js";
import Card from "./Card.js";
//import { openImagePopup } from "./util.js";
import { cardList, initialCards, nameTitle, nameSubtitle, editButton } from "./util.js";
import Section from "./section.js";
//import Popup from "./Popup.js";
import PopupWithImage from "./PopupwithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

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

  //al lado del template estaba openimagepopup
  //const cardElement = newCard.getView();
  //cardList.prepend(cardElement); ELIMINAR ESTO LUEGO
}

/*initialCards.forEach((card) => {
  createCard(card);
}); eliminar este bloque por que la clase section ya renderiza las cards*/

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
  JobSelector: ".profile__Subtitle",
});

//instancia de PopupWithForm
const popupWithForm = new PopupWithForm("#popup-profile", (formData) => {
  userInfo.setUserInfo({
  name: formData.name,
  job: formData.description
  });
});

//nameTitle.textContent = formData.name;
 // nameSubtitle.textContent = formData.description;

popupWithForm.setEventListeners();



editButton.addEventListener("click",() => {
  const user = userInfo.getUserInfo();
  inputName.value = user.name;
  inputDescription.value = user.job;
  profilePopup.open();

});

