export default class Card {
  constructor (name, link, cardSelector, openImagePopup, popupWithConfirmation, api, cardId, isLiked) {
  this._name = name;
  this._link = link;
  this._cardSelector = cardSelector;
  this._openImagePopup = openImagePopup;
  this._popupWithConfirmation = popupWithConfirmation;
  this._api = api;
  this._cardId = cardId;
  this._isLiked = isLiked;

  this._handleDeleteCard = this._handleDeleteCard.bind(this);
  this._deleteCardFromDom = this._deleteCardFromDom.bind(this);
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
      console.log("Se hizo clic en la papelera");
      this._popupWithConfirmation.open();
      this._popupWithConfirmation.setSubmitAction(() => {
        this._api.deleteCard(this._cardId)
        .then(() => {
          this._deleteCardFromDom();
          this._popupWithConfirmation.close();
        })
        .catch(err => console.error(err))
      })
    }

    _handleLikeCard() {
      //this._likeButton.classList.toggle("card__like-button-active");
      const wasLiked = this._likeButton.classList.contains("card__like-button-active");

      const toggleLike = wasLiked ? this._api.dislikeCard : this._api.likeCard;

      toggleLike.call(this._api, this._cardId)
      .then((updatedCard) => {
        this._isLiked = updatedCard.isLiked;

      if (this._isLiked) {
        this._likeButton.classList.add("card__like-button-active");
      } else {
        this._likeButton.classList.remove("card__like-button-active");
      }
    })
      .catch((err) => console.error("Error al alternar like:", err));
    }

    _deleteCardFromDom() {
      this._element.remove();
      this._element = null;
    }

    getView() {
      // esto se encarga de retornar la carta lista
      this._element = this._getTemplate();

      this._imageCard = this._element.querySelector(".card__image");
      this._descriptionCard = this._element.querySelector(".card__title")
      this._trashButton = this._element.querySelector(".card__trash-button");
      this._likeButton = this._element.querySelector(".card__like-button");

      this._imageCard.src = this._link;
      this._descriptionCard.textContent = this._name;
      this._imageCard.alt = this._name;

      this._setEventListeners();
      if(this._isLiked) {
        this._likeButton.classList.add("card__like-button-active");
      }

      //este return es para obtener la carta al llamar al getView
      return this._element;
    }

}

