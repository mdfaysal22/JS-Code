// Continue 

// let result = [45, 56, 67, 12, 34, 23, 34, 32, 34, 67, 78, 12, 1, 2, 3,];  //Array

// for (let i = 0; i <= result.length; i++){
//     let results = result[i];
//     if(results > 50){
//         continue;
//     }
//     console.log(results);
// }



let x = [34, 45, 34, 23, 56, 67, 234, 567,99, 98, 7867, 678, 56, 67, 78, 354, 23, 21, 45, 56567, 687, 56, 56];
// console.log(x[3]);
for (let i =0; i < x.length; i++){
    // let y = x[i];
    if (x[i] > 100){
        continue;
    }
    console.log(x[i]);
}