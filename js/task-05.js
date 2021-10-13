const input = document.querySelector('#name-input');
const message = document.querySelector('#name-output');
console.log(message)
const handleClick = () => {
    console.log(input.value)
    console.log(input.value.length)
    
    if (input.value.length === 0) {
        console.log("nothing")
        message.texContent = "Anonymous";
    } else
    {   console.log("some")
        message.texContent = input.value;
    };
};


input.addEventListener("input", handleClick);