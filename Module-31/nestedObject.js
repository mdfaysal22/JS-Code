const myObject = {
    user: [
        {id: 001, name: "Md Faysal", class: "BBA"},
        {id: 002, name: "Atif", class: "BBA"},
        {id: 003, name: "Rakib", class: "Degree"},
        {others:
            [
                {name: "Md Hasan", post: "Polic Offecer"},
                {name: "Rakin", post: "Army Offecer"},
                {name: "Sohel", post: "Army"}
            ]
        }
    ]
};
const finding = myObject.user[0].name;
// console.log(finding);

const myFinder = myObject.user.forEach(name => {
    const myName = name.name;
    console.log(myName);
});
console.log(myObject.user[3].others[0].name)