// const myArray = [
//     {name: 'Shirts', Price: 2000},
//     {name: 'Pants', Price: 2490},
//     {name: 'T-Shirts', Price: 2000},
//     {name: 'Bags', Price: 1890}
// ]

// function getObjectElementSum(elements){
//     let sum = 0;
//     for(let i = 0; i < elements.length; i++){
//         const myElement = elements[i];
//         sum = sum + myElement.Price;
//     }
//     return sum;
// }

// const myResult = getObjectElementSum(myArray);
// console.log(myResult);


// Single Object Element Add

// const myObject = {rohim: 45, korim: 55, Jobbar: 13, Akash: 34, Rohima: 12};

// function getSumOfObjectValue(numbers){
//     const objectValue = Object.values(numbers);
//     let sum = 0;
//     for(let i = 0; i < objectValue.length; i++){
//         let arrayValues = objectValue[i];
//         sum = sum + arrayValues;
//     }
//     return sum;
// }

// const myReault2 = getSumOfObjectValue(myObject);
// console.log(myReault2);


let sum  = 0;
for(let i = 0; i <= 3; i++){
    sum = sum + i;
}
console.log(sum);