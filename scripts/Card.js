export default class Card {
  constructor (name, link, cardSelector, openImagePopup) {
  this._name = name;
  this._link = link;
  this._cardSelector = cardSelector;
  this._openImagePopup = openImagePopup
  }

  _getTemplate() {
    //esto retorna una carta clonada
    return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
  }

    _setEventListeners(){
    this._trashButton.addEventListener("click", () => this._handleDeleteCard());
    this._likeButton.addEventListener("click", () => this._handleLikeCard());
    this._imageCard.addEventListener("click", () => {
      this._openImagePopup(this._name, this._link);
    });
    }

    _handleDeleteCard() {
      this._trashButton = this._element.querySelector(".card__trash-button")
      this._element.remove();
    }

    _handleLikeCard() {
      this._likeButton.classList.toggle("card__like-button-active");
    }

    getView() {
      // esto se encarga de retornar la carta lista
      this._element = this._getTemplate();

      this._imageCard = this._element.querySelector(".card__image");
      this._descriptionCard = this._element.querySelector(".card__title")
      this._trashButton = this._element.querySelector(".card__trash-button");
      this._likeButton = this._element.querySelector(".card__like-button");

      this._imageCard.src = this._link
      this._descriptionCard.textContent = this._name


      this._setEventListeners();

      //este return es para obtener la carta al llamar al getView
      return this._element;
    }

}

