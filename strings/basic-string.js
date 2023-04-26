let firstName = "Md Faysal";
let lestName = "Hasan";
let fullName = firstName + " " + lestName;

console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[3]);
console.log(firstName[4]);
console.log(firstName[5]);
console.log(firstName[6]);
console.log(firstName[7]);
console.log(firstName[8]);

console.log(fullName);


// String এর Length বের করার জন্য ঃ 

console.log(firstName.length);


const myName = "Md Faysal Hasan";
const UserInput = "Md FaySaL HasaN";
// console.log(myName.toLocaleLowerCase());
// console.log(myName.toUpperCase());

if (myName.toLowerCase() === UserInput.toLowerCase()){
    console.log("This User Name is Valid");
}
else{
    console.log("This user Name is Not Valid");
}
















/**
 * কিছু কথাঃ 
 * String Array এর মতো কিন্তু Array না 
 * String এর মান ও Array এর Index এর মতো বের করা যায় কিন্তু Array এর মান যেমন পরিবর্তন করা যায় String এর বেলায় তা যায় না । 
 * toUpperCase();
 * toLowerCase();
 */