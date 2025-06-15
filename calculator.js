calculator.js
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b === 0 ? "Cannot divide by zero" : a / b;
}

function getInputValues() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    return [number1, number2];
}

function updateResult(value) {
    document.getElementById("calculation-result").textContent = value;
}

document.getElementById("add").addEventListener("click", function () {
    const [a, b] = getInputValues();
    updateResult(add(a, b));
});

document.getElementById("subtract").addEventListener("click", function () {
    const [a, b] = getInputValues();
    updateResult(subtract(a, b));
});

document.getElementById("multiply").addEventListener("click", function () {
    const [a, b] = getInputValues();
    updateResult(multiply(a, b));
});

document.getElementById("divide").addEventListener("click", function () {
    const [a, b] = getInputValues();
    updateResult(divide(a, b));
});