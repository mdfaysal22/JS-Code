function check(numbers){
    const modulas = numbers % 2;
    if (modulas == 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = 1221223245;
console.log("This Number is Even,", check(myNumber));