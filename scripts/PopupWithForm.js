import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
constructor(element, handleSubmit){
  super(element);
  this._handleSubmit = handleSubmit;
}

getInputsValues(){
  let values = {};
  const form = this.popupElement.querySelector(".popup__form");
  for(let input of form.elements){
    if(input.name){
      values[input.name] = input.value;
    }
  }
  return values;
}

open(){
  super.open();
}

close(){
  super.close();
  const form = this.popupElement.querySelector(".popup__form");
  form.reset();
}

setEventListeners(){
  super.setEventListeners();
  const form = this.popupElement.querySelector(".popup__form");

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._handleSubmit(this.getInputsValues());
    this.close();
  })
}
}