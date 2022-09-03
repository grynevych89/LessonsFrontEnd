const action = getAction();
const counts = getCounts();

function getAction() {
    let val;

    do {
        val = prompt('Введите действие: +, -, * или /');
    } while (isActionInvalid(val));

    return val;
}

function getCounts() {
    let count;

    do {
        count = prompt('Введите кол-во чисел: ');
    } while (isCountsInvalid(count));

    return Number(count);
}

function getNumber(i) {
    let operand;

    do {
        operand = prompt(`Введите число #${i}: `);
    } while (isOperandInvalid(operand));
    return Number(operand);
}

let arr = [];
function calculateNumbers(action, counts, arr) {
    let result;
    for (let i = 1; i <= counts; i++) {
       arr.push(getNumber(i)); 
    }

    // Вариант №1
    // switch (action) {
    //     case '+' : result = arr.reduce(
    //         (previousValue, currentValue) => previousValue + currentValue); break;
    //     case '-' : result = arr.reduce(
    //         (previousValue, currentValue) => previousValue - currentValue); break;
    //     case '*' : result = arr.reduce(
    //         (previousValue, currentValue) => previousValue * currentValue); break;
    //     case '/' : result = arr.reduce(
    //         (previousValue, currentValue) => previousValue / currentValue); break;
    // }
    // return result;

    // Вариант №2
    // result = arr.reduce(function(previousValue, currentValue) { 
    //     return previousValue + action + currentValue;
    //  });
    //  return eval(result);

    result = arr.reduce((previousValue, currentValue) => previousValue + action + currentValue);
    return eval(result);
}

function isActionInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}

function isCountsInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val < 2;
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}

let buff = calculateNumbers(action, counts, arr);
alert(arr.join(` ${action} `) + ' = ' + buff);
