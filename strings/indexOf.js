// indexOf function ব্যবহার করে কোনো অংশের Index Number জানা যায়, তবে মনে রাখতে হবে যদি Strings এর অংশ খুজে পাওয়া না যায় তবে return করবে -1; IndexOf Function is Case-Sensitive.

const myStrings = "Md Faysal";
const myIndex = myStrings.indexOf("F");
console.log(myIndex);
// Return 3,


const myUnableStrings = "Md Faysal";
console.log(myUnableStrings.indexOf('f'));
// Return -1,
