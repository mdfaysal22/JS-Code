function display(value){
    console.log(value);
}


function sum(num1, num2, displayValue){
    const total = num1 + num2;
    displayValue(total);
}

sum(5, 6, display);