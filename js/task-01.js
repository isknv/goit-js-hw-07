const list = document.getElementById('categories');
const quantityCategories = list.children;
console.log(`В списке ${quantityCategories.length} категории.`);

[...quantityCategories].forEach(element => {
    const title = element.querySelector('h2');
    console.log(`Категория: ${title.textContent}`);

    const quantityElemets = element.querySelectorAll('li');
    console.log(`Количество элементов: ${quantityElemets.length}`);
});
