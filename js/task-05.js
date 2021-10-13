const refs = {
 input: document.querySelector('#name-input'),
 message: document.querySelector('#name-output')
}


const handleClick = () => {    
    if (refs.input.value.length === 0) {
        refs.message.textContent = "Anonymous";
    } else {
        refs.message.textContent = refs.input.value;
    };
};

refs.input.addEventListener("input", handleClick);