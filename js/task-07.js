const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.oninput = function () {
  text.style.fontSize = `${this.value}.px`;
};
