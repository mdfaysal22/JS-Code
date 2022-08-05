/**
 * Count SUM of ARRAY NUMBER -- 
 * Index Number 
 * Array Element
 * Element + Variable 0
 *
 */

// function sum(numbers){

//     let Number = 0;
//     for(let i = 0; numbers.length > i ; i++){
//         let index = i;
//         let element = numbers[index];
//         Number = element + Number;
//     }
//     return Number;
// }

// const my_array = [1, 2, 3, 4, 5,  6, 9];
// const sumOfArray = sum(my_array);
// console.log(sumOfArray);

function sum(numbers){
    let newSum = 0;
    for(let i = 0; numbers.length > i; i++){
        let element = numbers[i];
        newSum = element + newSum;
    }
    return newSum;
}


const myNewArray = [0, 1, 2, 34, 45, 56, 767, 78, 45];
console.log(sum(myNewArray));
// const x = sum(myNewArray);
// console.log(x);

