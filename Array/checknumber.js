const myArray = [1,2,4,5,6,78,9, 5, 5, 4, 3, 2, 4, 5, 6, 799, 8,8 ,9,6];

function getGreaterNumber(numbers){
    let firstValue = 0;
    for(let i = 0; i <= firstValue; i++ ){
        
        const myElement = numbers[i];
        if(firstValue < myElement){
            firstValue = myElement;
        }
    }
    return firstValue;
}

const myResult = getGreaterNumber(myArray);
console.log(myResult);





// Code Source Stack OverFlow .....
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
  
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }




// console.log(largest);