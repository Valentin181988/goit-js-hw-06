let counterValue = 0;

const refs = {
 counter: document.querySelector('#counter'),
 value: counter.querySelector('#value'),
 firstBtn: counter.firstElementChild,
 secondBtn: counter.lastElementChild
}

const handleClickDecrement = () => {
    refs.value.textContent = counterValue -= 1;
};

const handleClickIncrement = () => {
    refs.value.textContent = counterValue += 1;
};

refs.firstBtn.addEventListener("click", handleClickDecrement);
refs.secondBtn.addEventListener("click", handleClickIncrement);