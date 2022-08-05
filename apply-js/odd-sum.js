function oddSum(numbers){
    const myOddArray = new Array();
    for(let i =0; i < numbers.length; i++){
        let arrayValues = numbers[i];
        if(arrayValues % 2 == 1){
            myOddArray.push(arrayValues);
        }
    }
    let sum = 0;
    for (let i =0; i < myOddArray.length; i++){
        let NewArrayElement = myOddArray[i];
        sum = NewArrayElement + sum;
    }
    return sum;
}

const myArray = [2, 3, 4, 5, 6];
console.log(oddSum(myArray));