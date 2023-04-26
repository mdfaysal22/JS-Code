const myArray01 = [1,2,3,4,5,6];
const index = 2;
console.log(myArray01.at(index));

const index1 = -2;
console.log(myArray01.at(index1));


// Array Concatenation -- 
const myArray02 =['a', 'b', 'c', 'd'];
const myArray3 = ['e', 'f', 'g', 'h'];
const getNewArray = myArray02.concat('faysal', [1,2,3,4,5,6]);
const getNewArray2 = myArray01.concat(myArray02, myArray3);
console.log(getNewArray);
console.log(getNewArray2);