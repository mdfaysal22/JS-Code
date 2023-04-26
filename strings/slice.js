// Strings এর কোনো একটি অংশ বের করে আনতে চাইলে ---- আমরা slice function ব্যবহার করি। 

const myStrings = "Md Faysal Hasan";
// const partOfStrings = myStrings.slice(3, 9);
const partOfStrings = myStrings.slice(3, -6);
console.log(partOfStrings);