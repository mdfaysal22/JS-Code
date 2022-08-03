let names = new Array(50);
names[0] = 'Md Faysal';
names[1] = 'Md Emon';
console.log(names);

//Or

let arr_2 = [12, 23, 34, 545, 56, 567, 67, 56];
console.log(arr_2);

// Array এর মধ্যে কত গুলো উপাদান আছে বা Array এর দৈর্ঘ্য কত ? 
let arr_3 = [12, 34, 45, 56, 34, 546, 34, 45];
console.log(arr_3.length);

// Array এর কোনো একটি নির্দিষ্ট উপাদান পরিবর্তন করতে চাইলে 
let arr_4 = ['Rofiq', 'Sofiq', 'Salam', 'jobbar', 'borkot'];
arr_4[2] = 1971;
console.log(arr_4);

// Array এর কোনো একটি নির্দিষ্ট উপাদান দেখাতে চাইলে। 
let arr_5 = [12, 3, 45, 56, 67, 456, 56, 67, 78, 789, 56];
console.log(arr_5[3]);

// Array এর মধ্যে নতুন মান দেয়ার জন্য  - push
let arr_6 = [12,23,34,45,56];
arr_6.push(12,34,45,56,56);
console.log(arr_6);

// Array এর মধ্যে থেকে শেষের মান বের করে দিলে  - pop
let arr_7 = [12,2343,45,56,0, 0];
arr_7.pop();
arr_7.pop();
arr_7.pop();
console.log(arr_7);

// Array এর প্রথম মান বের করে দিতে হলে  - shift

let arr_8 = [12,23,34,45,56,67,56];
arr_8.shift();
arr_8.shift();
arr_8.shift();
console.log(arr_8);

// Array এর মধ্যে প্রথমে কোনো মান ADD করতে হবে - Unshift
let arr_9 =[];
arr_9.unshift(1200, 2300, 23);
console.log(arr_9);

// Array এর কোনো element এর Index Number খুজে বের করার জন্য -indexOf
let arr_10 = [12,34,45,546];
console.log(arr_10.indexOf(45));

// একটি Array এর সাথে আর একটি Array concatenating বা যোগ করা -- concat
let myBook = ['Bangla', 'English', 'Math'];
let myGroupBook = ["Accounting", "Management", "Marketing"];
let myAllBook = myBook.concat(myGroupBook);
console.log(myAllBook.length);
console.log(myAllBook);



