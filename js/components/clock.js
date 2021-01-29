function clock(selector) {
    const DOM = document.querySelector(selector);
    let number = parseInt(DOM.innerText);

    const timer = setInterval(function () {
        DOM.innerText = number--;
        if (number < 0) {
            DOM.innerText = 'FINITO';
            clearInterval(timer);
        }
    }, 10);
}

export { clock }