import { resetValidations, validationSettings } from "./validate.js";
import formValidator from "./FormValidator.js"
import Card from "./Card.js";
import { openImagePopup } from "./util.js"

import {
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
} from "./util.js";


export function createCard(card) {
  //instanciar una clase
  const newCard = new Card(card.name, card.link, "#card-template", openImagePopup);
  const cardElement = newCard.getView();
  cardList.prepend(cardElement);

}

initialCards.forEach((card) => {
  const newCard = new Card(card.name, card.link, "#card-template", openImagePopup).getView();
  createCard(card);
});

