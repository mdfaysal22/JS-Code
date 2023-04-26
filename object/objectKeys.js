const myObject = {
    name: "Md Faysal",
    class: "BBA in Accounting",
    id: 12008
}
// get Object Property or Keys:
const myObjectkeys = Object.keys(myObject);
console.log(myObjectkeys);

// Get Property Value
console.log(Object.values(myObject));

// Get Property / key and value ---- 
const pair = Object.entries(myObject);
console.log(pair);

// const sealObject = Object.seal(myObject);
const freezeObject = Object.freeze(myObject);
const remove = delete myObject.name;
myObject.name = "Md Faysal hasan";
console.log(myObject);
