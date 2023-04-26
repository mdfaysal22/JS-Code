const number = [12, 23, 345,45, 45,321, 12.1, 14, 21, 1234];
const bigNumber = number.filter(numbers => numbers > 100);
console.log(bigNumber);
/**
 * Filter কোনো Array থেকে সর্ত মতো সকল নম্বরকে খুজে আর find প্রথমটাকে খুজে 
 */


const findBigNumber = number.find(numbers => numbers > 100);
console.log(findBigNumber);