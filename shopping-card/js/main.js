// For iPhone :

function totalPhonePrice(totalPhone){
    const phonePrice = document.getElementById('phone-price');
    const totalPhoneCost = totalPhone * 1219;
    phonePrice.innerText = totalPhoneCost;
}
function totalCasePrice(TotalCaseNumber){
    const getCasePrice = document.getElementById('casePrice');
    const totalCasePrice =  TotalCaseNumber * 59;
    getCasePrice.innerText= totalCasePrice;
}
function getInnerValueConverNumber(idName){
    const totalProductPrice = document.getElementById(idName);
    const getTotalProductPriceString = totalProductPrice.innerText;
    const totalPriceNumber = parseInt(getTotalProductPriceString);
    return totalPriceNumber;
}
    

document.getElementById('phone-increase').addEventListener('click', function(){
    const totalPhoneIncrease = updateNumber(true, "phone-input");

    totalPhonePrice(totalPhoneIncrease);


    const gettotalPhonePriceNumber = getInnerValueConverNumber('phone-price');
    const getTotalCasePriceNumber = getInnerValueConverNumber('caseInputField');
    const subTotalCost = getTotalCasePriceNumber + gettotalPhonePriceNumber;
    console.log(getTotalCasePriceNumber);
    const getSubTotalId = document.getElementById('sub-total');
    getSubTotalId.innerText = subTotalCost;
    
    


    
})

document.getElementById('phone-decrease').addEventListener('click', function(){
    const totalPhoneDecrease = updateNumber(false, "phone-input");
    totalPhonePrice(totalPhoneDecrease);
})

// For Iphone Case: 



document.getElementById('caseIncrease').addEventListener('click', function(){
    const TotalCaseNumber = updateNumber(true, "caseInputField");
    totalCasePrice(TotalCaseNumber);
})


document.getElementById('decrease').addEventListener('click', function(){
    const TotalCaseNumber = updateNumber(false, "caseInputField");
    totalCasePrice(TotalCaseNumber);
})


// ==========================:=================:)

