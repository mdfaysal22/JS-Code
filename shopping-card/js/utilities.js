function updateNumber(isIncrease, getId){
    const inputValue = document.getElementById(getId);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseInt(inputValueString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = inputValueNumber + 1;
        
    }
    else{
        newCaseNumber = inputValueNumber - 1;
        if(newCaseNumber <= 0){
            const decreaseButton = document.getElementById('decrease');
        decreaseButton.setAttribute('disabled');
        }
    }
    inputValue.value = newCaseNumber;
    return newCaseNumber;
}

