// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = null;
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.num || button.dataset.operator;

        if (button.id === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.innerText = '0';
        } else if (button.id === 'equals') {
            if (currentInput && previousInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.innerText = currentInput;
                previousInput = '';
                operator = null;
            }
        } else if (button.dataset.operator) {
            if (currentInput) {
                if (previousInput) {
                    previousInput = eval(`${previousInput} ${operator} ${currentInput}`);
                } else {
                    previousInput = currentInput;
                }
                currentInput = '';
            }
            operator = value;
        } else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});
