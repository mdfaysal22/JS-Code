
function sumOfNumbers(number){
    let sum = 0;
    for(let i =1; i <= number; i++){
        sum = sum + i;
    }
    return sum;
}

const sumANumber = sumOfNumbers(10);
console.log(sumANumber);