function counter(selector) {
    const DOM = document.querySelector(selector);
    let number = parseInt(DOM.innerText);
    
    const timer = setInterval(function () {
        showMeNumber(number);
        number--;
        if (number === -1) {
            clearInterval(timer);
        }
    }, 1000);
}

function showMeNumber(num) {
    console.log(num);
}

export { counter }