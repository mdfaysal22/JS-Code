const listOfPhone = [
    {name: 'samsung', camera: '10MP', processor: 'media-talk', price: 22000 },
    {name: 'Iphone', camera: '10MP', processor: 'media-talk', price: 122000 },
    {name: 'Realme', camera: '10MP', processor: 'media-talk', price: 32000 },
    {name: 'Redmi', camera: '10MP', processor: 'media-talk', price: 42000 },
    {name: 'Oppo', camera: '10MP', processor: 'media-talk', price: 12000 },
    {name: 'Nokia', camera: '10MP', processor: 'media-talk', price: 10000 }
];

function findCheapSet(phones){
    let ceapestPhone = phones[0];
    for(let i =0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < ceapestPhone.price){
            ceapestPhone = phone;
        }
        
    }
    return ceapestPhone;
}

const myPhone = findCheapSet(listOfPhone);
console.log(myPhone);