// যদি ++ পরে ব্যবহার করি তাহলে Execute করে তারপরে মান বারাবে । 
// let x = 0;
// const runInterval = setInterval(() => {
//     console.log(x++);

//     if(x === 10){
//         clearInterval(runInterval);
//     }
// }, 500);


// যদি ++ আগে ব্যবহার করলে মান আগে বারাবে তারপরে Execute করবে । 

let y = 0;
const runIntervalTwo = setInterval(() => {
    console.log(++y);

    if(y === 10){
        clearInterval(runIntervalTwo);
    }
}, 500);