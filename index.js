const popUp = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = popUp.querySelector(".popup__close-button");
const formButton = document.getElementById(".form__button");
const inputName = document.getElementById(".input-name");
const inputDescription = document.getElementById(".input-description");
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





