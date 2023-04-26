const myObject = {
    name: "Md Faysal",
    class: "BBA In Accounting",
    roll: 12037,
    phone: 01600000
}

for(const keys in myObject){
    const value = myObject[keys];
    const outPut = keys + " : " + value;
    // console.log(outPut);
}


// Advance System: 
for(const [keys, value] of Object.entries(myObject)){
    console.log(keys, value);
}