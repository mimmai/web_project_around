const popUp = document.querySelector(".popup__container");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const formButton = document.querySelector(".form__button");
const inputName = document.querySelector(".input-name");
const inputDescription = document.querySelector(".input-description");
const nameTitle = document.querySelector(".profile__title");

const nameSubtitle = document.querySelector(".profile__Subtitle");


editButton.addEventListener("click", function() {
  popUp.showModal();
});

closeButton.addEventListener("click", function() {
  popUp.close();
});


formButton.addEventListener("click", function() {
  evt.preventDefault()

  const nameValue = inputName.value
  const descriptionValue = inputDescription.value

  nameTitle.textContent = nameValue
  nameSubtitle.textContent = descriptionValue

  popUp.close()
});





