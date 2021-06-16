const validationInput = document.querySelector('#validation-input');
const dataLength = +validationInput.dataset.length;

validationInput.addEventListener('change', () => {
  if (validationInput.value.length === dataLength) {
    updateClass('valid', 'invalid');
  } else {
    updateClass('invalid', 'valid');
  }
});

function updateClass(addClass, removeClass) {
  validationInput.classList.remove(removeClass);
  validationInput.classList.add(addClass);
}
