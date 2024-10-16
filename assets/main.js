let displayValue = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function appendTodisplay(value) {
    if (value === '=') {
        try {
            displayValue = eval(displayValue);
        } catch (error) {
            displayValue = 'Error';
        }
    }
    else if (value === 'C') {
        displayValue = '';
    }
    else if (value === 'x') {
        displayValue = displayValue.slice(0, -1);
    }
    else {
        displayValue += value;
    }
    updateDisplay();
}
