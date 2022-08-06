function calTOFahr(calsius){
    let calculation = calsius * 1.8;
    calculation = calculation + 32;
    return calculation;
}

console.log(calTOFahr(30));