const btnIncrement = document.querySelector('#counter button[data-action="increment"]');
const btnDecrement = document.querySelector('#counter button[data-action="decrement"]');
const scoreValue = document.querySelector('#value');
let counterValue = 0;

function increment() {
    counterValue++;
}

function decrement() {
    counterValue--;
}

btnIncrement.addEventListener('click', () => {
    increment();
    scoreValue.textContent = counterValue;
});

btnDecrement.addEventListener('click', () => {
    decrement();
    scoreValue.textContent = counterValue;
});
