// CallBack Function :
// const fourArray = function(){
//     return x * 4;
// }
const myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const myNewArray = myNumbers.map(x => x * 2);
const arrayTriple = myNumbers.map(x => myFunction(x));
// const arrayFour = myNumbers.map(fourArray());
console.log(myNewArray);
console.log(arrayTriple);


// Use Regular Function
function myFunction(x){
    return x*3;
}


// Arrow function
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })

// Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// Inline callback function
// map(function(element) { /* … */ })
// map(function(element, index) { /* … */ })
// map(function(element, index, array){ /* … */ })
// map(function(element, index, array) { /* … */ }, thisArg)

