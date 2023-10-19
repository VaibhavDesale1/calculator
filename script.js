let currentValue = '';
let currentExpression = '';

function appendValue(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    currentExpression = '';
    document.getElementById('display').value = '';
}

function removeLastChar() {
    currentValue = currentValue.slice(0, -1);
    document.getElementById('display').value = currentValue;
}

function calculate() {
    try {
        const result = eval(currentValue);
        document.getElementById('display').value = result;
        currentExpression = currentValue;
        currentValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
