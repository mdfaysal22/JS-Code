

function findMyLeapYear(years){
    const myLeapYear = new Array();
    for(let i = 0; i < years.length; i++){
        let myArrayIndex = years[i];
        if(myArrayIndex % 4 === 0){
            const count1 = myArrayIndex % 100;
            if(count1 === 0){
                const count2 = myArrayIndex % 400;
                if(count2 === 0){
                    myLeapYear.push(myArrayIndex);
                }
            }
            else{
                myLeapYear.push(myArrayIndex);
            }
        }
    }
    return myLeapYear;
}


let myYear = [2023,1900, 2022, 2024,2025,2028,2030];
console.log(findMyLeapYear(myYear));