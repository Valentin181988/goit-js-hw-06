const body = document.querySelector('body');
const colorName = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
