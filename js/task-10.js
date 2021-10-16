const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
input.focus()



create.addEventListener('click', () => {
  createBoxes(input.value)
});

function createBoxes(amount) {
    let width = 30;
    let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.append(div);

    width += 10;
    height += 10;
  }
}

destroy.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
    boxes.innerHTML = "";
}

 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}









