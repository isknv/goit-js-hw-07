const validationInput = document.querySelector('#validation-input');
const dataLength = validationInput.dataset.length;

validationInput.addEventListener('change', () => {
  if (validationInput.value.length <= dataLength) {
    validationInput.classList.add('invalid');
  } else {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  }
});
