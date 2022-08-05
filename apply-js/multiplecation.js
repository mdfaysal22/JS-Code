function multiOfNumber(number){
    let multi = 1;
    for(let i =1; i <= number; i++){
        multi = multi * i;
    }
    return multi;
}

console.log(multiOfNumber(4));


// Square -- 

function square(number){
    let square = number ** 2;
    return square;
}
console.log(square(5));

// Bulid-In Function Math.sqrt();

console.log(Math.sqrt(9));