const myNumbers = Math.max(99, 33, 2, 10, 12, 13);
console.log(myNumbers);

const myArrayNumber = [99, 13, 145, 131, 12, 13, 13];
const myNewArray = new Array();
for(let number of myArrayNumber){
    number = number + 1;
    myNewArray.push(number);
}

console.log(myNewArray);


const myArrayTwo = [12, 12,233,44, 465];
console.log(...myArrayTwo);

console.log(Math.max(...myArrayTwo));

// Push and Same Rafference .......
const NewArrayThree = [12, 14, 156, 36, 35, 34, 342];


const myNewArrayTwo = [...NewArrayThree];
myNewArrayTwo.push(12);
console.log(myNewArrayTwo);