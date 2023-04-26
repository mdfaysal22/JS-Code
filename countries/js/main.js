const countriesLoad = async() => {
    const url = "https://restcountries.com/v3.1/all";
    const load = await fetch(url);
    const res = await load.json();
    showData(res);
};

const showData = (loadData) => {
    // console.log(loadData[0]);
    const country = loadData.map(country => showHTML(country));
    const countryContainer = document.getElementById('countries-container');
    countryContainer.innerHTML = country.join(' ');

}

// প্রারামিটারে মধ্যেই object Destructing করে দেওয়া  
const showHTML = ({name, flags}) => {
    
    return `
    <div class="country">
        <h1>${name.common}</h1>
        <img src="${flags.png}">
    </div>
    `
}

// Way 01 : Destracturing Object
// const showHTML = (dataShow) => {
//     const {name, flags} = dataShow;
//     return `
//     <div class="country">
//         <h1>${name.common}</h1>
//         <img src="${flags.png}">
//     </div>
//     `
// }

// Orginal 
// const showHTML = (dataShow) => {
//     return `
//     <div class="country">
//         <h1>${dataShow.name.common}</h1>
//         <img src="${dataShow.flags.png}">
//     </div>
//     `
// }



countriesLoad();