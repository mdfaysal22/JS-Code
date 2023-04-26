// নম্বর Array যোগ করার জন্য ব্যবহার করা হয়। 


const number = [1,2,3,4,5];
// const TotalSum = number.reduce( (num1, num2) => num1 + num2 , 0);


// AlterNative Way
const totalSum = number.reduce((previous, next) => {
    return previous + next;
}, 0)
console.log(totalSum);