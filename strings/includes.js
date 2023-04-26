const mySelf = "I am FaySal. I am a Students of BBA in Accounting. And The otherHand I am a Teacher.";

const mySearch = "FaYsal";

// Simple Way 
const mySelfModify = mySelf.toLowerCase();

const mySearchModify = mySearch.toLowerCase();

const search = mySearchModify.includes(mySearchModify);
console.log(search);


// Alternative --- 
const searchOneLine = mySelf.toLowerCase().includes(mySearch.toLowerCase());
console.log(searchOneLine);

// Alternative Way Without Variable
console.log(mySelf.toLowerCase().includes(mySearch.toLowerCase()));



// Using indexOf();

const javaScript = "We concentrate on the language itself here, with the minimum of environment-specific notes.";

if(javaScript.indexOf("Itself") !== -1){
    console.log("We Have Find The Code Here");
}
else{
    console.log("We Have not Find The Code Here");
}


// Startswith() and EndsWith();
const about = "I am A Student";
console.log(about.startsWith("I"));
console.log(about.toLowerCase().endsWith("student"));