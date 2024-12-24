function add (num1, num2){
    let sum = num1 + num2;
    return sum;
}

function subtract(num1 , num2){
    let diff = num1 - num2;
    return diff;
}

function multiply(num1, num2){
    let product = num1 * num2;
    return product;
}

function divide(num1, num2){
    let quotient = num1/num2;
    return quotient;
}

let num1,num2,operator;

function operate(num1, num2, operator){
    let result;
    switch(operator){
        case '+':
            result = add(num1,num2);
        break;
        case '-':
            result = subtract(num1,num2);
        break;
        case '*':
            result = multiply(num1, num2);
        break;
        case '/':
            result = divide(num1, num2);
        break;
        default:
            result = 0;
    }
    return result;
}