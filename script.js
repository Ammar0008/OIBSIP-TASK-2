let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function appendValue(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText) || '0';
    } catch (error) {
        display.innerText = 'Error';
        setTimeout(() => display.innerText = '0', 2000);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.') {
        appendValue(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendValue(key);
    }
});

function deleteLastCharacter() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}
