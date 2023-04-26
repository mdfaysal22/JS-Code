// Append / Add Somethings

// Where to Add
const appendList = document.getElementById('myList');

// What to be add...
const li = document.createElement('li');
li.innerText = "My New List Item";

// add The Child
appendList.appendChild(li);


const mainContainer = document.getElementById('my-main-section');

const newSection = document.createElement('section');


const newH1 = document.createElement('h1');
newH1.innerText = 'My New Header';

const newUl = document.createElement('ul');

const newLi1 = document.createElement('li');
newLi1.innerText = 'New List One';
newUl.appendChild(newLi1);
const newLi2 = document.createElement('li');
newLi2.innerText = 'New List One';
newUl.appendChild(newLi2);
const newLi3 = document.createElement('li');
newLi3.innerText = 'New List One';
newUl.appendChild(newLi3);
const newLi4 = document.createElement('li');
newLi4.innerText = 'New List One';
newUl.appendChild(newLi4);


newSection.appendChild(newH1);
newSection.appendChild(newUl);
mainContainer.appendChild(newSection);


// Using innerHTML

const myNewSectionTwo = document.createElement('section');
myNewSectionTwo.innerHTML = `
<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, velit?</h1>
   <ul>
    <li><a href="">Lorem, ipsum dolor.</a></li>
    <li><a href="">Praesentium, quia animi!</a></li>
    <li><a href="">Exercitationem, minus error?</a></li>
    <li><a href="">Nostrum, ab iure.</a></li>
    <li><a href="">Assumenda, ratione atque.</a></li>
   </ul>
`




mainContainer.appendChild(myNewSectionTwo);




const myHeaderOne = document.getElementById("headerOne");
myHeaderOne.style.fontSize = '3rem';
myHeaderOne.style.textTransform = 'uppercase';
myHeaderOne.style.backgroundColor = 'red';
myHeaderOne.style.textAlign = 'center';
myHeaderOne.style.padding = '20px 0';
myHeaderOne.style.color = 'white';
myHeaderOne.style.borderRadius = '10px';

const myListsOne = document.querySelectorAll('.myListOne a');
for(const mylistOne of myListsOne){
    mylistOne.style.color = 'red';
}

const myheader = document.querySelectorAll('section');
for(const myHerderlist of myheader){
    myHerderlist.classList.add('MyNewClass');
    myHerderlist.classList.remove('large-font');
    myHerderlist.style.border = "2px solid red";
    myHerderlist.style.margin = '10px 0';
    myHerderlist.style.backgroundColor = 'lightgray';
    myHerderlist.style.borderRadius = '10px';
    myHerderlist.style.paddingLeft = '10px';
}



