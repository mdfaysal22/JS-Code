// Function Declare 
function add(num1, num2){
    return num1 + num2;
}
console.log(add(10, 20));

// Function Expression: 
const myFunction = function sum(num1, num2){
    const total = num1 + num2;
    return total;
};

const resutlOne = myFunction(10, 25);
console.log(resutlOne);

// Function Expression without Name (Annonimus): 
const myFunctionwithoutName = function (num1, num2){
    const total = num1 + num2;
    return total;
};

console.log(myFunctionwithoutName => (num1, num2));
const resultTwo = myFunctionwithoutName(40, 50);
console.log(resultTwo);

// Arrow Function 

const myArrowFunction = (num1, num2) => num1 + num2 ;
console.log(myArrowFunction => (20, 30));
console.log(myArrowFunction);
const retult = myArrowFunction(6, 4);
console.log(retult);



// Arrow Function and No Paramiter.....
const pi = () => 3.1416;
const piValue = pi();
console.log(piValue);



const doubleIt = (number) => number * 2;
const resultDouble = doubleIt(5);
console.log(resultDouble);


// Alternative WithOut Brackets 

const tripulValue = number => number * 3;
const myTripleValue = tripulValue(9);
console.log(myTripleValue);


// Math Pi Value....
const myPiValue = parseFloat(Math.PI.toFixed(4));
console.log(myPiValue);

// const myLogValue = Math.LOG10E;
// console.log(myLogValue);

const myLogValue = (a) => a * Math.LOG10E;
const myLobValueResult = myLogValue(5);
console.log(myLobValueResult);

