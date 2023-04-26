/**
 * 01. Var / Let / Const
 * 02. Default Value of Function
 * 03. Template Strings 
 * 06. 
 */

function Calcu(salary, tax = 0, bonnus){
    if(salary >= 10000){
        const taxP = tax / 100;
        const calcuTax = salary * taxP;
        const sumTax = salary - calcuTax ;
        const total = sumTax + bonnus;
        return total;
    }
    else{
        const sumSalary = salary + bonnus;
        return sumSalary;
    }
}

const CalTotalSalary = Calcu(2000, 15, 5000 );
console.log(CalTotalSalary);