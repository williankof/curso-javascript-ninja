operation = {
    '+': function(n1, n2) {return n1 + n2;},
    '-': function(n1, n2) {return n1 - n2;},
    '*': function(n1, n2) {return n1 * n2;},
    '/': function(n1, n2) {return n1 / n2;},
    '%': function(n1, n2) {return n1 % n2;},
};


function isOperatorValid(param) {
    param === '+' || param === '-' || param === '*' || param === '/' || param === '%' ? param = true : param = false
    return param;
}

function calculator(operador) {
    if(isOperatorValid(operador) === false) {
        return false
    } else {
        return function(p1, p2) {
            if(typeof p1 !== 'number' || typeof p2 !== 'number'){
                return false;
            }
            return operation[operador](p1, p2);
        }
    }
}



function showOperationMessage(number1, operator, number2) {
    return 'A operação ' + number1 + ' ' + operator + ' ' + number2 + ' = ';
}

function showErrorMessage(param) {
    if(calculator(param) === 'false') {
        return 'Oparação ' + param + ' não permitida!';
    } 
}

let number1 = 0;
let number2 = 0;
let operationSignal;

operationSignal = 'oi';
let sum = calculator(operationSignal)


number1 = 5
number2 = 10
//console.log(sum(number1, number2))
console.log(showOperationMessage(number1, operationSignal, number2), sum(number1, number2))

console.log(isOperatorValid(operationSignal))
//console.log(calculator('b')(5, 10))

// if(isOperatorValid(operationSignal) === 'false') {
//     console.log('falso')
// }
