// const arr = [1, 2, 3, 4, 34, 354, 56, 657, 56];
// const sum = arr.reduce((a, b) => a + b, 0);
// console.log(sum);
// let n = arr.length;
// console.log(n);
// let avarage = sum / n;
// console.log(avarage);
// let decimelFixed = avarage.toFixed(3);
// console.log(decimelFixed);
// let floatNumber = parseFloat(decimelFixed);
// console.log(floatNumber);


let arr = [1, 2, 3, 4];
arr.push(34, 45, 56, 657, 67, 78, 34);
console.log(arr);


let sum = arr.reduce((a, b) => {
    return a + b ;
});
let n = arr.length;
let avarage = sum / n;
let decimelFixed = avarage.toFixed(3);
let fixedFloat = parseFloat(decimelFixed);

console.log(fixedFloat);

