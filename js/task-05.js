const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.oninput = function () {
  nameOutput.innerHTML = nameInput.value;
  if (nameInput.value === '') {
    nameOutput.textContent = 'незнакомец';
  }
};
