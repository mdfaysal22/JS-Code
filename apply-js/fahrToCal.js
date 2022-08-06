function fahrTocal(fahr){
    let divition = 5 /9;
    let substraction = fahr - 32;
    let calculation = substraction * divition;
    return calculation;
}
console.log(fahrTocal(50));
