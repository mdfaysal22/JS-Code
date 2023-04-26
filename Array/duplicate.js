
// function dulpicate(parseOldArray){
//     getNewArray = new Array();

//     for(let i = 0; i <parseOldArray.length; i++){
//         let getOldArrayElement = parseOldArray[i];
//         if(getNewArray.includes(getOldArrayElement) === false){
//             getNewArray.push(getOldArrayElement);
//         }
//     }
//     return getNewArray;
// }


// const myOldArray = [2, 3, 5, 6, 7, 8, 8, 4, 3, 2, 21, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 35, 4, 3, 3, 4, 5, 6, 6];
// console.log(dulpicate(myOldArray));

// Same Dobule Practices --- 
const myArray = [1,2,3,45,6,6,7,8,8,8,9,9,9,9];

function dulpicateRemover(myOldArray){
    // Declare a New Array --- 
    const getNewArray = new Array();

    for(let i = 0; i < myOldArray.length; i++){
        const getOldArrayELement = myOldArray[i];

        if(getNewArray.includes(getOldArrayELement) === false){
            getNewArray.push(getOldArrayELement);
        }
    }
    return getNewArray;
}

console.log(dulpicateRemover(myArray));


