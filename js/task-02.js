const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const addElem = document.getElementById('ingredients');

const addItem = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.innerHTML = ingredient;
  return item;
});

addElem.append(...addItem);
