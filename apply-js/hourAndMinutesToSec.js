// Convert Hours and Minutes into Seconds

function hourAndMinutesToSec(hours, minutes){
    let hoursTosec = hours * 3600;
    let minutesToSec = minutes * 60;
    let hoursAndMinutesToSecCount = hoursTosec + minutesToSec;
    return hoursAndMinutesToSecCount;

}

console.log(hourAndMinutesToSec(2, 0), 'Seconds');