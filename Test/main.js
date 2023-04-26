function getElement(nameOfId){
    const idGet = document.getElementById(nameOfId);
    const idElement = idGet.innerText;
    return idElement;
}
function setElement(place, element){
    const idOfPlace = document.getElementById(place);
    const list = document.createElement('li');
    list.innerText = element;
    list.classList.add('text');
    idOfPlace.appendChild(list);
}




document.getElementById('btn-1').addEventListener('click', function(){
    const getheading = getElement("text-1");
    setElement('place-set', getheading);
})
document.getElementById('btn-2').addEventListener('click', function(){
    const getheading = getElement("text-2");
    setElement('place-set', getheading);
})
document.getElementById('btn-3').addEventListener('click', function(){
    const getheading = getElement("text-3");
    setElement('place-set', getheading);
})
document.getElementById('btn-4').addEventListener('click', function(){
    const getheading = getElement("text-4");
    setElement('place-set', getheading);
})
document.getElementById('btn-5').addEventListener('click', function(){
    const getheading = getElement("text-5");
    setElement('place-set', getheading);
})
document.getElementById('btn-6').addEventListener('click', function(){
    const getheading = getElement("text-6");
    setElement('place-set', getheading);
})
document.getElementById('btn-7').addEventListener('click', function(){
    const getheading = getElement("text-7");
    setElement('place-set', getheading);
})
document.getElementById('btn-8').addEventListener('click', function(){
    const getheading = getElement("text-8");
    setElement('place-set', getheading);
})
document.getElementById('btn-9').addEventListener('click', function(){
    const getheading = getElement("text-9");
    setElement('place-set', getheading);
})




