/*
var iPhone = 50000 ;
var myBudget = 40000;

if (iPhone < myBudget){
    console.log("I can Buy iPhone Now");

} else{
    console.log("I cann't Buy iphone Now");
};



*/

/**
 * if(Condition){
 *  if condition is true, then Executed this code.
 * } else{
 *  condition is false, then executed this code.
 * }
 */
var barger = 150;
var pissa = 250;
var myBudgetForEating = 400;
var total = barger + pissa;

if(barger < pissa ){
    console.log("We Can Buy 2 barger");
} else{
    console.log("We can Buy Two Picca");
};

if(barger + pissa <= myBudgetForEating){
    console.log("we can buy one Barger and one piccs" + "=" + "Total Taka" + " = " + total);
} else{
    console.log("we Can Buy One Picca or One Barger");
};

// 0 means --- False

if (0){
    console.log("No");
} else{
    console.log("0 Means False");
};

// 1 means True

if(1){
    console.log("1 Means False");
} else{
    console.log("No");
};

// Multiple Condition and Use && - And Oparetor.

// let x = 4;
// let y = 3;
// let a = 2;
// let b = 5;

// if(x > y && a < b){
//     console.log("All condition are true, so Execute the Restule of If");

// } else{
//     console.log("If all condition are not true, Execute the else condition Result.");
// }

// if(x > y && a > b){
//     console.log("All condition are true, so Execute the Restule of If");

// } else{
//     console.log("If all condition are not true, Execute the else condition Result.");
// };


// // Multiple Condition and Or || Oparetor.....

// if (x > y || a > b){
//     console.log("Execute Of If Result");
// }else{
//     console.log("Execute Else Result");
// };
let x = 4;
let y = 3;
let a = 2;
let b = 5;

if (x < y || a > b){
    console.log("Execute Of If Result");
}else{
    console.log("Execute Else Result");
};



