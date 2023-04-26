function pointCount(wins, draws, losses){
    let counter = (wins * 3) + (draws * 1) + (losses * 0);
    return counter;
}

console.log(pointCount(3,4,2));
console.log(pointCount(5,2,0));
console.log(pointCount(0,0,1));