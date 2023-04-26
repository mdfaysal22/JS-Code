function farmAnimals(chickens, cow, got){
    let chickenLeg = chickens * 2;
    let cowLeg = cow * 4;
    let gotLeg= got * 4;
    let AnimalsLeg = chickenLeg + cowLeg + gotLeg;
    return AnimalsLeg;
}

console.log(farmAnimals(5, 10, 5));