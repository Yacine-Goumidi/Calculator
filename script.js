let currentExpression = '';
const resultInput = document.getElementById('result');

function appendNumber(value) {
    currentExpression += value;
    resultInput.value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += ` ${operator} `;
    resultInput.value = currentExpression;
}

function calculateResult() {
    try {
        const sanitizedExpression = currentExpression
            .replace(/÷/g, '/')
            .replace(/×/g, '*');

        currentExpression = eval(sanitizedExpression);
        resultInput.value = currentExpression;
    } catch (error) {
        resultInput.value = 'Error';
        currentExpression = '';
    }
}

function clearResult() {
    currentExpression = '';
    resultInput.value = '';
}
