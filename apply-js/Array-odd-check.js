// function arrayOddChack(numbers){
//     let NewEvenArray = new Array();
//     let NewOddArray = new Array();
//     for (let i =0; numbers.length > i; i++){
//         let arrayElement = numbers[i];
//         if (arrayElement % 2 === 0){
//           NewEvenArray.push(arrayElement);
//         }
//         else{
//             NewOddArray.push(arrayElement);
//         }
//     }
//     return NewOddArray;
// }
// let myArray = [0,2,12,234,345,456,56,67,34,23,34,45,5465,65,7,687,6,87,89,6765,67,456,45,34,53,423,42,3232,31,2,1];
// let myNewArray = arrayOddChack(myArray);
// console.log(myNewArray);


// Alternative Way

function arrayOddChack(numbers){
    let NewOddArray = new Array();
    for (let i =0; numbers.length > i; i++){
        let arrayElement = numbers[i];
        if (arrayElement % 2 === 1){
          NewOddArray.push(arrayElement);
        }
    }
    return NewOddArray;
}


let myArray = [0,2,1,3,8,9,0,5];
let myNewArrayForOddNumber = arrayOddChack(myArray);
// Get Odd Number---
console.log(myNewArrayForOddNumber);





