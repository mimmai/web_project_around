//ESTA CLASE REEMPLAZA LA FX DE LAS CARTAS
export default class Section {
  constructor(items, render, containerSelector){
    this._items = items;
    this._renderer = render;
    this._container = document.querySelector(containerSelector);
  }


renderer(){
this._items.forEach(item => {
  this.addItem(item);
});
}

addItem(item) {
  const element = this._renderer(item);
  this._container.append(element);
};
}