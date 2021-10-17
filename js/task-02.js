const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = [];

ingredients.forEach((ingredientName) => {
  const item = document.createElement('li');
  item.textContent = ingredientName;
  item.classList.add("item");
  ingredientsArray.push(item);
})

const elements = document.querySelector('#ingredients');

elements.append(...ingredientsArray);

/* const newArray = ingredients.map((ingrName) => {
  const item = document.createElement('li');
  item.textContent = ingrName;
  item.classList.add("item")
});

console.log(newArray)

const elements = document.querySelector('#ingredients');

elements.append(...newArray); */







