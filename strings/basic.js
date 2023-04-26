// 3 ways to write Strings 
/**
 * 1. Use '' - Single Quote
 * 2. Use "" - Doulbe Quote
 * 3. Use `` - Backtick - Name: Templete Strings
 */

const singleQuoteStrings = 'This is a Single Quote Strings. You Can Use';
const doulbeQuoteStrings = "This is a double Quote Strings";
const templeteStrings = `Most Powerfull Strings. You can use daynamicly. Highly Recommented.`;


// use dynamicly-----
const newStrings = new String(`This is a New Strings, ${templeteStrings}`);

const concatStrings = singleQuoteStrings + doulbeQuoteStrings + templeteStrings ;
// console.log(concatStrings);
// console.log(newStrings);


// Multiline Strings 

const multiStrings = "This is a multiline Strings \n" + 
'this is second Line Strings Here....'
// console.log(multiStrings);

// Multiline Strings to using backtick 
const backtickMultiStrings = `
This is a Multiline Strings Using Backtick, 
and This is highly Recommented to use, 
and This is most Powerfull Strings and Use Dynamicly.
if you can use html Element, I can do freely.
${multiStrings},
<h1>This is a BackTick Strings Features</h1>
`;
// console.log(backtickMultiStrings);
// console.log(backtickMultiStrings.length);
