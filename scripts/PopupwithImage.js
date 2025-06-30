import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
constructor(popupElement) {
super(popupElement);
this.imageElement = this.popupElement.querySelector(".popup__full-size-image");
this.titleElement = this.popupElement.querySelector(".popup__title-view-image");
}

open(name, link){
super.open();
this.imageElement.src = link;
this.imageElement.alt = name;
this.titleElement.textContent = this.name;
}

setEventListeners(){
super.setEventListeners();
}

}