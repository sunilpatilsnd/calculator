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


function operate(num1, num2, operator){
    let result;
    num1 = parseInt(num1);    
    num2 = parseInt(num2);
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
            if( num2 == 0){
                result = 'too weird!'
            }
            else
            result = divide(num1, num2);
        break;
        default:
            result = 0;
    }
    return result;
}

let input1 = "";
let input2 = "";
let operator = "";
let stage = 0;
const oprations = ['+','-','/','*'];
const btns = document.querySelectorAll('button');
btns.forEach((target) => {
    target.addEventListener('click',() => {
        let isOperator = oprations.includes(target.value);
        let isEqualbtn = target.value == "=";
        let isClearbtn = target.value == "clear";
        debugger
        if(!isOperator && stage == 0 && !isEqualbtn && !isClearbtn){            
            input1 = input1+target.value;
            updateCalcScreen(input1);
        } 
        else if(isOperator && stage == 0 && !isClearbtn){
            operator = target.value;
            stage++;
        } 
        else if(!isOperator && stage == 1 && !isEqualbtn && !isClearbtn){
            input2 = input2+target.value;            
            updateCalcScreen(input2);           
        }
        else if(isEqualbtn && stage == 1 && !isClearbtn){
            let res = operate(input1, input2, operator); 
            stage = 0;
            updateCalcScreen(res);
            input1 = res;
            input2 = "";
        }
        else if( isClearbtn ){
            input1 = "";
            input2 = "";
            stage = "";
            res = ""; 
            updateCalcScreen(0);
        }

    });
});

function updateCalcScreen(str){
    const display = document.querySelector('.display p');
    display.textContent = str;   
}