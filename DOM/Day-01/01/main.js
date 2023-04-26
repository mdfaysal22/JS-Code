// option 01: getElementsByTagName('h1');


// Option 02
const myId =document.getElementById('demo');
myId.innerText = 'The Changed Text';

// const myHeadOne = document.getElementsByClassName('headingOne');
// myHeadOne[0].innerText = "My Changed Heading One Text";

// Option 03

const myPra = document.getElementsByClassName('myPara');
myPra[0].innerText = "My Paragraph";

const firstHeadingTwo = document.getElementsByClassName('firstH2');
firstHeadingTwo[0].innerText = "Change First H2";

const myLISTS = document.getElementsByClassName('myList');
for(const myLists of myLISTS){
    myLists.innerText = "The Change Items";
}

const myhead = document.getElementsByClassName('mySecond');
myhead[0].innerText = "My Heading";


const myListItems = document.getElementsByClassName('myLis');
for(const list of myListItems){
    list.innerText = "My List Items Two";
}
// Option 04
const myFooterList = document.querySelector('.footer-list');
myFooterList.innerText = 'Change Item';

// Option 05
const myFooterListTwo = document.querySelectorAll('.footer-two-list');
// myFooterListTwo[0].innerText = 'Change Item List';
for(const mylist of myFooterListTwo){
    // console.log(mylist);
    mylist.innerText = "Home";
}