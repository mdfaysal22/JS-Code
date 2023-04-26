function divi(takeAnArray){
    const getNewArray = new Array();
    for(let i= 0; i < takeAnArray.length; i++){
       let arrayElement = takeAnArray[i];
       if(arrayElement % 3 == 0  && arrayElement % 5 == 0){
            getNewArray.push("Both");
       }
       else{
        if(arrayElement % 5 == 0){
            getNewArray.push("Five");
        }else{
            if(arrayElement % 3 == 0){
                getNewArray.push("three");
            }else{
                getNewArray.push(arrayElement);
            }
        }
         }
    }
    return getNewArray;
}


const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25, 45, 30];
console.log(divi(myArray));