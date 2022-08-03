var accountingPrice = 2400;
var englishPrice = 3400;

var totalPrice = accountingPrice + englishPrice;
var priceDifference = englishPrice - accountingPrice ;
var pricedivition = englishPrice / accountingPrice ;
var priceMulti = englishPrice * accountingPrice ;
var priceModulas = englishPrice % accountingPrice ;

console.log(totalPrice);
console.log(priceDifference);
console.log(pricedivition);
console.log(priceMulti);
console.log(priceModulas);

var x = 10;
x += 5;
console.log(x);

x +=10;
console.log(x);

x -=4;
console.log(x);

var y = 45;
y -=5;
y *=2;
y /=8;

console.log(y);

y ++;
console.log(y);


// Strings Concatenation :: 
var firstName = "Md Faysal";
var lestName = "Hasan";
var fullName = firstName + " " + lestName ;
console.log (fullName);


// ParseInt , parseFloat

var myStrings = "120";
console.log(typeof myStrings);
var myNumber = parseInt(myStrings);
console.log(typeof myNumber);


// parseFloat ::: Int - Float Convert 

var gpa = "3.50";
var gpaConvert = parseFloat(gpa);
console.log(gpaConvert);

// parseInt ::: float to intigir Conversion
var myFloat = 23.34 ;
var myInt = parseInt(myFloat);
console.log(myInt);

var mynumber1 = 0.01;
var myNumber2 = 0.03;
var total = mynumber1 + myNumber2 ;
console.log(total);


/*
var x =.1;
var y = .2;
var sum = x + y ;
var toSumFix = sum.toFixed(1);
var toSumFixInt= parseFloat(toSumFix);
console.log(toSumFixInt);
*/

var x = 5;
var y = 3;
var division = x/y;

division = division.toFixed(4);
division = parseFloat(division);
console.log(division);