function compoundInterest(principle, rate, year, period){
    let rateTaka = rate / 100;
    let compoundInterestTaka = principle * (1 + (rateTaka / period)) ** (year * period);
    let compoundInterestTakaFixed = compoundInterestTaka.toFixed(3);
    let compoundInterestTakaFixedFloat = parseFloat(compoundInterestTakaFixed);
    return compoundInterestTakaFixedFloat;
}

console.log(compoundInterest(500, 5, 3, 2));