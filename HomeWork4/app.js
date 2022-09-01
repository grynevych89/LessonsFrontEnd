const number = getOperand('Введите число');

function isOperandInvalid(val) {
    return val === null || val <= 0 || val.trim() === '' || isNaN(val);
}

function getOperand(label) {
    let operand;
    do {
        operand = prompt(label);
    } while (isOperandInvalid(operand));
    return Number(operand);
}

let even = 0;
let odd = 0;

for (let k = 1; k <= number; k++) {
    // k % 2==0 ? even += k : odd += k;
    if (k % 2 == 0) {
        even +=k;
    } else {
        odd +=k;
    }
}

alert(`
Введенное Вами число: ${number}
Сумма четных чисел: ${even}
Сумма не четных чисел: ${odd}
`);
