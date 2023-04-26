// function for get old taka 
function totalAmount(totalTaka){
    
    return totalAmountGet;
}


document.getElementById('deposit').addEventListener('click', function(){
    const privious = document.getElementById('privious');
    const priviousValueString = privious.innerText;
    const priviousValue = parseFloat(priviousValueString);

    const getInput = document.getElementById('inputDeposit');
    const getInputValue = getInput.value;
    const getInputValueNum = parseFloat(getInputValue);
    getInput.value = '';
    const additionDeposit = priviousValue + getInputValueNum;

    privious.innerText = additionDeposit;

    // For Total Amount: 
    const totalAmountTaka = document.getElementById('totalTaka');
    const totalTakaGetString = totalAmountTaka.innerText;
    const totalAmountGet = parseFloat(totalTakaGetString);
    
    
    const newTotalBalance = totalAmountGet + getInputValueNum ;

    totalAmountTaka.innerText = newTotalBalance;


})