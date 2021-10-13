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
  console.log(item);
  ingredientsArray.push(item);
})

const elements = document.querySelector('#ingredients');

elements.append(...ingredientsArray);







