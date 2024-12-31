let input1 = "";
let input2 = "";
let operator = "";
let stage = 0;
let prevKey = "";

const oprations = ['+','-','/','*'];
const btns = document.querySelectorAll('button');   

btns.forEach((target) => {
    target.addEventListener('click', () => {
        let keyPressed = target.value;
        readInput(keyPressed);
        
    });
});

function checkOverflow(res){
    let str = res.toString();
    return str.length > 8 ? true :false ;
}

function readInput(keyPressed){
    let isOperator = oprations.includes(keyPressed);
    let isEqualbtn = keyPressed == "=";
    let isClearbtn = keyPressed == "clear";
    
    

    if(isOperator == false &&  isEqualbtn == false && isClearbtn == false && stage == 0 ){            
        input1 = input1+keyPressed;
        if(checkOverflow(input1) == true){
            updateCalcScreen('Overflow');
            input1 = "";    
        }
        else{
            updateCalcScreen(input1);
        }        
    } 
    else if(isOperator == true &&  isClearbtn == false && stage == 0 ){
        operator = keyPressed;
        stage= 1;
    } 
    else if(isOperator == false && isEqualbtn  == false && isClearbtn == false && stage == 1){
        input2 = "";        
        input2 = input2+keyPressed;       
                  // reading 2nd input
        if(checkOverflow(input2) == true){
            updateCalcScreen('Overflow');
            input2 = "";    
        }
        else{
            updateCalcScreen(input2);
        } 
    }

    else if(isEqualbtn == true && stage == 1 && isClearbtn == false){
        let res = operate(input1, input2, operator);
        if(checkOverflow(res) == true){
            updateCalcScreen('Overflow');
            input1 = "";
            input2 = "";
            res = ""; 
        } 
        else{
            stage = 0;            
            input1 = res;
            input2 = "";
            updateCalcScreen(res);
        }        
    }
    else if( isClearbtn == true){
        input1 = "";
        input2 = "";
        stage = "";
        res = ""; 
        updateCalcScreen(0);
    }
    else if( isOperator == true && stage == 1){
        debugger;
        let res = operate(input1, input2, operator);
        if(checkOverflow(res) == true){
            updateCalcScreen('Overflow');
            input1 = 0;
            input2 = 0;
            res = 0; 
        } 
        else{
            input1 = res;         
            updateCalcScreen(res);   
            input2 = "";
            operator = keyPressed;
            stage = 1;           
            
        } 
    }
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

function updateCalcScreen(str){
    const display = document.querySelector('.display p');
    display.textContent = str;   
}

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
    return quotient.toFixed(2);
}
