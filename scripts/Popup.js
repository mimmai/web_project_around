export default class Popup {
  constructor(popupElement){
    this.popupElement = document.querySelector(popupElement);
    this.closeButton = this.popupElement.querySelector(".popup__close-button");
  }

  open(){
    this.popupElement.classList.add("popup_opened")

  }

  close(){
    this.popupElement.classList.remove("popup_opened")
  }

  setEventListeners(){
    this.closeButton.addEventListener("click", () => {
      this.close();
    })
  }
}