// Problem - 01

let fruit = ["Apple", "Banana", "orange"];
let findFruit = fruit.indexOf("Banana"); //Findout Index Number of Banana....
console.log(findFruit);
console.log(fruit);
fruit[1] = "Mango"; //Replace Banana to Mango......
console.log(fruit);

fruit.pop();
console.log(fruit);

fruit.push("WaterMelon");
console.log(fruit);


// Problem - 02
let myScore = 67;
let tomScore = 66;
let jhenScore = 95;
let pitterScore = 56;
let jhonScore = 40;

if(100 >= myScore && myScore >= 80){
    console.log("Your Score is A+");

}
else{
    if(80 > myScore && myScore >= 70){
        console.log("Your Score is A");
    }
    else{
        if(70 > myScore && myScore >= 60){
            console.log("Your Score Is A-");
        }
        else{
            if(60 > myScore && myScore >= 50){
                console.log("Your Score is B");
            }
            else{
                if(50 > myScore && myScore >= 40){
                    console.log("Your Score is C");
                }
                else{
                    if(40 > myScore && myScore >= 33){
                        console.log("Your Score is D");
                    }
                    else{
                        if(33 > myScore && myScore >= 0){
                            console.log("You Cann't Pass This Subject.");
                        }
                    }
                }
            }
        }
    }
}

// Practices 03: 
let num1 = 40;
let num2 = 8;
let num3 = 7;

if(num1 > num2 && num1 > num3){
    console.log(num1);
}
else{
    if(num2 > num1 && num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

let x = 9;
let y = 8;
let z = 10;
if(x == y){
    console.log("The triangle is isosceles");
}
else{
    if(x == z){
        console.log("The triangle is isosceles");
    }
    else{
        if(y == z){
            console.log("The triangle is isosceles");
        }
        else{
            console.log("The triangle is not isosceles");
        }
    }
}