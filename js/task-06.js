const input = document.querySelector('#validation-input');
const length = Number.parseInt(input.dataset.length);

input.addEventListener('blur', (event) => {

    if (input.value.length === length) {
        input.classList.add('valid');

        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        }
    } else {
        input.classList.add('invalid');
        
        if (input.classList.contains('valid')) {
            input.classList.remove('valid');
        }
    }
});


input.addEventListener('blur', () => {
    input.classList.add('invalid')

    if (input.value.length === length) {
        return input.classList.replace('invalid', 'valid');
    }

    return input.classList.replace('valid', 'invalid');
});