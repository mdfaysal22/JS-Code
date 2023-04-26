/**
 * সাধারনত endsWith(), and startsWith() Function Check করে Strings এর শুরু বা শেষে নির্দিষ্ট শব্দটা আছে কিনা। 
 * Output দেয় true or False ,
 */

const myFile = "main.js";
const check = myFile.endsWith(".js");
console.log(check);


const myName = "Md Faysal";
const checkMe = myName.startsWith("Md");
console.log(checkMe);

console.log(myFile.endsWith(".html"));