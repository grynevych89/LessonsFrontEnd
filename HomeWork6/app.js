const action = getAction();
const operands = getOperands();
const result = calculate(operands, action);
alert(`
    Введены числа: ${operands}
    Введено действие: ${action}
    Результат действия ${action}: ${result}`
);


function getAction() {
    let val;

    do {
        val = prompt('Введите действие: +, -, * или /');
    } while (isActionInvalid(val));

    return val;
}

function isActionInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}


function getOperands() {
    let operands = [];

    do {
        operands = prompt('Введите числа через запятую: ' );
    } while (isOperandInvalid(operands));
    return operands.split(',').map(Number);
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '';
}

function calculate(values, operation) {
    const result = values.reduce(function (acc, item) {
        return calculateResult(acc, item, operation);
    });
    return result;
}

function calculateResult(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}
