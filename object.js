const my_boject = {
    name : 'Md Faysal',
    age : 12 ,
    class : 'BBA 2nd Year (In Accounting)',
    College: "Govt. B.M. College, Barisal"
}
console.log(my_boject);
console.log(my_boject.name);
console.log(my_boject.age);

// Alternative Way to show Object Property Value
let my_class = my_boject['class'];
console.log(my_class);

// Or -- 
let collegeName = 'College';
console.log(collegeName,  my_boject[collegeName]);

// Obejct property এর নামগুলো পেতে চাইলে 
console.log(Object.keys(my_boject));

// Obejct এর সকল Value গুলো পেতে চাইলে 
console.log(Object.values(my_boject));

// Property এর Value Change করতে চাইলে 
my_boject.age = 22;
console.log(Object.values(my_boject));

// Or --
my_boject['College'] = "Govt Abul Kalam College, Rakudia, Barisal";
// console.log(Object.values(my_boject));
console.log(my_boject['College']);

// Or --
let changeMyName = 'name';
my_boject[changeMyName] = "Md Faysal Hasan";
console.log(changeMyName, my_boject[changeMyName]);
