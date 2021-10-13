const input = document.querySelector('#name-input');
const message = document.querySelector('#name-output');

const handleClick = () => {    
    if (input.value.length === 0) {
        message.textContent = "Anonymous";
    } else {
        message.textContent = input.value;
    };
};

input.addEventListener("input", handleClick);