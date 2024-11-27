let display = document.getElementById('result');

function calculate(){
    try{
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function toggleSign() {
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}
function toggleParentheses() {
    const currentExpression = display.value;
    const openParenthesisCount = (currentExpression.match(/\(/g) || []).length;
    const closeParenthesisCount = (currentExpression.match(/\)/g) || []).length;

    if (openParenthesisCount === closeParenthesisCount) {
        display.value += '(';
    } else {
        display.value += ')';
    }
}
function calculatePercentage() {
    try {
        let value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = (value / 100).toString();
        }
    } catch (error) {
        display.value = 'Error';
    }
}

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', (e) => {
        
        let value = button.value;
        if(value==='C'){
            clearDisplay();
        }else if(value==='='){
            calculate();
        }else if(value==='x'){
            backspace();
        }else if(value==='+/-'){
            toggleSign();
        }else if(value==='()'){
            toggleParentheses()
        }else if(value==='%'){
            calculatePercentage();
        }else {
            update(valve);
        }
       
    });
});
