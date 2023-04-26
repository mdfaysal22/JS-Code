// সাধারণত ব্যাক্টিক  `` এর ব্যবহার করার হয় মাল্টিলাইন String ব্যবহারের জন্য আর ${} দিয়ে ভারিয়াবল বা js এর যেকোনো কিছু লেখা হয়। 

// 3 Way to write String : 
const a = 'My Name IS Faysal';
const b = "My Name is Faysal";
const c = `My Name is Faysal`;


// Multiline Strings: 
const d = 'My Name is Faysal \n'+
'I am student.';
console.log(a, b, c, d);
const college = "Govt Bm College";
const location = 'Barisal';

const info = `
    Hello I am Faysal.
    I am Student and I read in Accounting Subject at ${college}, ${location}.
`
console.log(info);