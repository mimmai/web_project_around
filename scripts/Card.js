export default class Card {
  constructor (name, link, cardSelector) {
  this._name = name;
  this._link = link;
  this._cardSelector = cardSelector;
  }

  _getTemplate() {
    //esto retorna una carta clonada
    return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);}

    _setEventListeners(){
    this._trashButton = this._element.querySelector(".card__trash-button")
    this._trashButton.addEventListeners("click", this._handleDeleteCard);
    }

    _handleDeleteCard() {
      //copiar y pegar codigo
      //
      this._element.remove();
    }

    getView() {
      //se encarga de retornar la carta lista
      this._element = this._getTemplate();

      this._imageCard = this._element.querySelector(".card__image");
      this._descriptionCard = this._element.querySelector(".card__title")

      this._imageCard.src = this._link
      this._descriptionCard.textContent = this._name

      //este return es para obtener la carta al llamar al getView
      return this._element;
    }

    //falta lo mismo para loslikes
    //que se abra la imagen en grande
    //
}

