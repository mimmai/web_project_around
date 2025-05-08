import {resetValidations, validationSettings} from "./validate.js";
import Card from "./Card.js"
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
} from "./util.js"


function openImagePopup(name, link) {
  popupViewImage.classList.add("popup_opened");
  fullSizeImage.src = link
  fullSizeImage.name = name
  titleFullSizeImage.textContent = name
}

closeImageButton.addEventListener("click", function() {
  popupViewImage.classList.remove("popup_opened")
  });

function createCard(card) {
  //instanciar una clase
  const newCard = new Card(card.name, card.link, "#card-template").getView();

  // const newCard = cardTemplate.content.querySelector(".card").cloneNode(true);
//const imageCard = newCard.querySelector(".card__image")
//const descriptionCard = newCard.querySelector(".card__title")
const likeButton = newCard.querySelector(".card__like-button");
const trashButton = newCard.querySelector(".card__trash-button");

//imageCard.alt = card.name

imageCard.addEventListener("click", function() {
openImagePopup(card.name, card.link);
})

//imageCard.src = card.link
//descriptionCard.textContent = card.name

cardList.prepend(newCard)

likeButton.addEventListener("click", function (evt) {

  evt.target.classList.toggle("card__like-button-active");

});

trashButton.addEventListener("click", () => {
  newCard.remove();
});

}


initialCards.forEach((card) => {
const newCard = new Card(card.name, card.link, "#card-template").getView();
createCard(card)
});


//FORMULARIO PARA AGREGAR TARJETAS

const addNewCardForm = document.getElementById("form-place")

addNewCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const cardName = document.querySelector("#input-title").value
  const urlNewCard = document.querySelector("#input-image").value
  console.log(urlNewCard);

  createCard({name: cardName, link: urlNewCard})

  popupNewPlace.classList.remove("popup_opened");

  addNewCardForm.reset();
  resetValidations(addNewCardForm, validationSettings);
});

popup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    popup.classList.remove('popup_opened');
    resetValidations(validationSettings);
  }
});

popupNewPlace.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    handleClosePopupPlaces();
    resetValidations(validationSettings);
  }
});





