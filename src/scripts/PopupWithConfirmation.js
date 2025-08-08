import Popup from "./Popup.js"

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
super(popupSelector);
this._form = this.popupElement.querySelector("form");
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._handleSubmit) {
        this._handleSubmit();
      }
    });
  }

  open() {
    super.open();
  }

  close() {
    super.close();
  }
}