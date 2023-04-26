// Raguler Function 
/**
 * 01. using function keyword
 * 02. name of function 
 * 03. take function paramiter
 * 04. function body {}
 * 05. return Value
 * 06. Call the function 
 * 
 */

function myFunction(salary, tax, bunus){
    const taxConvert = tax / 100;
    const salaryWithoutTax = salary - (salary * taxConvert);
    const totalSalary = salaryWithoutTax + bunus;
    return totalSalary;
}

// console.log(myFunction(5000, 15, 3000));


/**
 * Call Back Function is a reguler Function 
 */
function display(value){
    console.log(value)
}


function add(num1, num2, displayValue){
    const total = num1 + num2;
    displayValue(total);
}

add(5, 6, display);
