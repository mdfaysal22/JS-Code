const myAbout = "We concentrate on the language itself here, with the minimum of environment-specific notes.";

const wordDiv = myAbout.split(" ");
// console.log(wordDiv);


const letterDiv = myAbout.split('');
console.log(typeof(letterDiv));  //String থকে object এ রুপ নেয় 
console.log(letterDiv.length);
console.log(letterDiv);

console.log(myAbout.split(","));
