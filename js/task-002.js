const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newArray = ingredients.map((ingrName) => {
    const item = document.createElement('li');
    item.textContent = ingrName;
    item.classList.add("item")
});

const elements = document.querySelector('#ingredients');

elements.append(...newArray);