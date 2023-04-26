function swap(a,b){
    var temp = a;
    a = b;
    b = temp;

    return [a,b];
}

console.log(swap(5,6));


// Alternative Way ----- Destructuring assignment

function swap2(a,b){
    [a,b] = [b,a];
    return [a,b];
}

console.log(swap2(5,7));


// Addition Assignement -----

function swapAdd(a,b){
    a = a + b ;
    b = a - b;
    a = a - b;
    return [a,b];
}

console.log(swapAdd(4,5));

// Using X-OR Gate 
function swapXOR(a, b){
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}

console.log(swapXOR(4,8));