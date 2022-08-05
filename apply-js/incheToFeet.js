

// Make a Function for Inche to Feet Convert --- 
function inches(inche){
    const feet = inche / 12;
    const feetFixed = feet.toFixed(2);
    const feetNumber = parseFloat(feetFixed);
    return feetNumber;
}

const inputInches = 34;
console.log(inches(inputInches), 'Feet');


// Make a Function for KM to Miles Convert ----
function kmToMiles(km){
    const miles = km * .62137;

    const milesInt = parseInt(miles);
    return milesInt;
}

const dhakaToBarisal = 255;
console.log(kmToMiles(dhakaToBarisal), 'Miles');