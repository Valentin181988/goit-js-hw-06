let counterValue = 0;

const refs = {
 counter: document.querySelector('#counter'),
 value: counter.querySelector('#value'),
 firstBtn: counter.querySelector('[data-action="decrement"]'),
 secondBtn: counter.querySelector('[data-action="increment"]')
}

const handleClickDecrement = () => {
    refs.value.textContent = counterValue -= 1;
};

const handleClickIncrement = () => {
    refs.value.textContent = counterValue += 1;
};

refs.firstBtn.addEventListener("click", handleClickDecrement);
refs.secondBtn.addEventListener("click", handleClickIncrement);

