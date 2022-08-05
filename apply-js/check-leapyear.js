/**
 * To determine whether a year is a leap year, follow these steps:

    If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
    If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
    If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
    The year is a leap year (it has 366 days).
    The year is not a leap year (it has 365 days).
 */

function leapYearCount(leapYear){
    const count1 = leapYear % 4;
    if (count1 == 0){
        const count2 = leapYear % 100;
        if(count2 == 0){
            const count3 = leapYear % 400 ;
            if (count3 == 0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false ;
    }
}

const myYear = 1900;
console.log('This Year is Leap Year?', leapYearCount(myYear));