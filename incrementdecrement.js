
let contentValue = document.getElementById('counter');

const increment = () => {
    let value = parseInt(contentValue.innerText);
    value = value + 1 ;

    contentValue.innerText = value;
}

const decrement = () => {
    let value = parseInt(contentValue.innerText);
    value = value - 1 ;

    contentValue.innerText = value;
}