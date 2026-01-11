const display = document.getElementById('result');
const buttons = document.querySelector('.buttons');

const state = {
    expression: ''
};

buttons.addEventListener('click', (event) => {
    const button = event.target;

    if (button.dataset.value) {
        appendValue(button.dataset.value);
    }

    if (button.dataset.operator) {
        appendOperator(button.dataset.operator);
    }

    if (button.dataset.action === 'clear') {
        clearDisplay();
    }

    if (button.dataset.action === 'calculate') {
        calculate();
    }
});

function appendValue(value) {
    state.expression += value;
    updateDisplay();
}

function appendOperator(operator) {
    state.expression += ` ${operator} `;
    updateDisplay();
}

function clearDisplay() {
    state.expression = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = Function(
            `"use strict"; return (${sanitize(state.expression)})`
        )();

        state.expression = result.toString();
        updateDisplay();
    } catch {
        state.expression = '';
        display.value = 'Error';
    }
}

function sanitize(expression) {
    return expression
        .replace(/÷/g, '/')
        .replace(/×/g, '*');
}

function updateDisplay() {
    display.value = state.expression;
}
