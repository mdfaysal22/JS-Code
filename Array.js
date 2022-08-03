var friendName = ["Refat", "Sabbir", "Emon"];
var rollNumber = [30, 34, 24, 12];
var others = ["Refat", 34, "34", true];

console.log(typeof(others));
console.log(friendName);
console.log(rollNumber.length);
console.log(others[0]);
console.log(rollNumber[0]);


others = parseFloat(others[2]);
console.log(others);

// Array এর মধ্যে মান দেওয়া 
var myNewFriend = ['Emon', 'Refat', 'sabbir'];

myNewFriend[3] = 'Atif';
myNewFriend[4] = 'Jeehad';

console.log(myNewFriend);

// Array এর Indix Number খুজে বের করা :: 
var myNewFriend2 = ['Emon', 'Refat', 'Sabbir'];

console.log(myNewFriend2.indexOf('Refat'));


// Push and Pop

var newOne = ['a', 'e', 'i', 'o', 'u'];

console.log(newOne);

newOne.push('Jehad', 'Atif', 'Emon');
console.log(newOne)

var numberOne = [3, 4, 5, 6, 7];
numberOne.push(5);
console.log(numberOne);

newOne.pop();
console.log(newOne);

// New Array Decleare 
let myNewArray = [1, 2, 3, 4, 5];
myNewArray.push(6, 7);
console.log(myNewArray);
myNewArray.pop();
console.log(myNewArray);

// new Array Declear
let myNewArrayTwo = [1, 2, 3];
let mypopArray = myNewArrayTwo.pop();
console.log(mypopArray);
