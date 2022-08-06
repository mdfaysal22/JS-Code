function totalAmount(principle, rate, time) {
    let rateTaka = rate / 100;
    let totalAmountTaka = principle *(1 + rateTaka * time);
    return totalAmountTaka;
}

console.log(totalAmount(500, 5, 3));