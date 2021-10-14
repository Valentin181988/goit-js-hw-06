
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value.length === 0 || password.value.length === 0) {
        alert("Все поля должны быть заполнены!");
    } else {
        const valueOfInputs = {};

        valueOfInputs[email.name] = email.value;
        valueOfInputs[password.name] = password.value;

        console.log(valueOfInputs);

        form.reset();
    }  
});
