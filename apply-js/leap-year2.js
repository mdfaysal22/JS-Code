function leapYearFinder(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 === 0)){
        return ("This Year Is Leap Year");
    }
    else{
        return ("This year is Not A Leap Year.")
    }
}

console.log(leapYearFinder(1900));