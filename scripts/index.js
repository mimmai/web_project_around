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
//VARIABLES DE POPUP IMAGEN COMPLETA
const popupViewImage = document.querySelector("#popup-view-image");
const fullSizeImage = document.querySelector(".popup__full-size-image");
const closeImageButton = document.querySelector("#close-image-button")
const titleFullSizeImage = document.querySelector(".popup__title-view-image")

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
  const newCard = cardTemplate.content.querySelector(".card").cloneNode(true);
const imageCard = newCard.querySelector(".card__image")
const descriptionCard = newCard.querySelector(".card__title")
const likeButton = newCard.querySelector(".card__like-button");
const trashButton = newCard.querySelector(".card__trash-button");

imageCard.alt = card.name

imageCard.addEventListener("click", function() {
openImagePopup(card.name, card.link);
})

imageCard.src = card.link
descriptionCard.textContent = card.name

cardList.prepend(newCard)

likeButton.addEventListener("click", function (evt) {

  evt.target.classList.toggle("card__like-button-active");

});

trashButton.addEventListener("click", () => {
  newCard.remove();
});

}


initialCards.forEach((card) => {

createCard(card)

});


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
handleClosePopup()
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
  handleClosePopupPlaces()
});




//FUNCION DE CAMBIO DE DATOS EN POPUP PROFILE

form.addEventListener("submit", function (evt) {
  evt.preventDefault()

  const nameValue = inputName.value
  const descriptionValue = inputDescription.value

  nameTitle.textContent = nameValue
  nameSubtitle.textContent = descriptionValue

  popup.classList.remove("popup_opened");
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

});



