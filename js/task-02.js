const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const addElem = document.getElementById('ingredients');
ingredients.forEach(element => {
    const addItem = document.createElement('li');
    addElem.appendChild(addItem);
    addItem.innerText += element;
    console.log(addItem);
});
