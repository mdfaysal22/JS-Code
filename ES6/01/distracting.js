const myObject = {Name: "Md Faysal", Class: "BBA Second Year", phone: 0109940341};
console.log(myObject);

const {phone} = myObject;
console.log(phone);

const myArray = [12,23,34,456,65];
const [first, second, third] = myArray;

// First - প্রথম Index এর মান নিবে,Second -  দ্বিতীয় উপাদানের মান নিবে, Third - তৃতীয় উপাদানের মান নিবে।  
console.log(first);
console.log(second);
console.log(third);


const myTest = (a, b) => console.log(a / b);
myTest(9,3);