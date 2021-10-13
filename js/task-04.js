let counterValue = 0;

const counter = document.querySelector('#counter');
const value = counter.querySelector('#value');
const firstBtn = counter.firstElementChild;
const secondBtn = counter.lastElementChild;

const handleClickDecrement = () => {
    value.textContent = counterValue -= 1;
};

const handleClickIncrement = () => {
    value.textContent = counterValue += 1;
};

firstBtn.addEventListener("click", handleClickDecrement);
secondBtn.addEventListener("click", handleClickIncrement);