export default class Popup {
  constructor(popupElement){
    this.popupElement = document.querySelector(popupElement);
    this.closeButton = this.popupElement.querySelector(".popup__close-button");
  }

  open(){
    if (this.popupElement.tagName === "DIALOG") {
      this.popupElement.showModal();
    } else {
      this.popupElement.classList.add("popup_opened");
    }

  }

  close(){
    if (this.popupElement.tagName === "DIALOG") {
      this.popupElement.close();
    } else {
      this.popupElement.classList.remove("popup_opened");
    }
  }

  setEventListeners(){
    this.closeButton.addEventListener("click", () => {
      this.close();
    })
  }
}