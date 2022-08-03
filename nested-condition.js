// let myMoney = 20;
// let bookPrice = 50;
// let StoryBookPrice = 60;
// let NoteKhataPrice = 100;
// let penPrice = 5;

// Simple Multiple Condition 
// if (myMoney > bookPrice){
//     console.log("Buy A Book Now");
// }

// else if(myMoney > StoryBookPrice){
//     console.log("Buy Story Book Now");
// }
// else if(myMoney > NoteKhataPrice){
//     console.log("Buy A NoteKhata Now");
// }
// else if(myMoney > penPrice){
//     console.log("Buy A Pen Now.");
// }
// else{
//  console.log("I cann't Buy Anythings");
// }

// Nested Condition

let myMoney = 20;
let bookPrice = 50;
let StoryBookPrice = 60;
let NoteKhataPrice = 100;
let penPrice = 5;

// First condition....
// If Condition One Is True then Executed "Buy A BOOK Now";
// If COnditon one is not true then the program Read 2nd condition, and If 2nd Condition is true then Executed "Buy a storyBook Now";
// 2nd Condition....
// If 2nd condition is not true, then the program read 3rd condition and if 3rd condition is ture then Executed "buy a notekhata now";
// Third Condition .....
// If 3rd Condition is not true, then the Programm read 4th Condition and executed "Buy a Pen Now"
// Fourth Condition

if (myMoney > bookPrice){
    console.log("Buy a Book Now");
}
else{
    if(myMoney > StoryBookPrice){
        console.log("Buy a StoryBook Now");
    }
    else{
        if(myMoney > NoteKhataPrice){
            console.log("Buy a NoteKhata Now");
        }
        else{
            if (myMoney > penPrice){
                console.log("Buy A pen Now");
            }
            else{
                console.log("I cann't Buy Anythings");
            }
        }
    }
}