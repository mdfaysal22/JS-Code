// Using Temporary Variable -- 
function swap(a, b){
   let num1 = a;
   let num2 = b;
   let temp;
   temp = num1;
    num1=num2;
    num2=temp;

   return [num1 , num2];
}

console.log(swap(5, 6));







// let a = 5;
// let b = 6;

// console.log(a, b);
// let temp = a;
// a = b;
// b =temp;
// console.log(a, b);