// My Array
const myArray = [1,2,3,4,5,6,7,8,9];

// CalBack Function
const doubleIt = number => number * 2;

// Double and Result New Array 
/**
 * How to do working it
 * 01. array থেকে উপাদান কে আলাদা করে 
 * 02. আলাদা করার উপাদানের উপরে function চালায়
 * 03. প্রত্যেক উপাদানের উপরে function চালানোর পরে নতুন মান গুলোকে একটি নতুন Array এর মধ্যে রেখে output দিবে। 
 * Structure: const giveName = (যে array এর উপাদান গুলো পরিবর্তন করতে চাই তার নাম).map(Calback Function Name);
 */
const doubleAndGetNewArray = myArray.map(doubleIt);

/**
 * Arternative 
 * Arrao / calback Function declear না করেই সারাসরিঃ 
 */

const gettriple = myArray.map(x => x*3);

console.log(gettriple);

console.log(doubleAndGetNewArray);


// ===================================|||||||||||||||++++++++++++++++++++++++++++++++++//
