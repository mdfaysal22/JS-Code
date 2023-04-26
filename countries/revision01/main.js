const loadCountries = async(showSome) => {
    const urlAll = "https://restcountries.com/v3.1/all";
    const loadCountriesData = await fetch(urlAll);
    const response = await loadCountriesData.json();
    displayAllCountriesData(response, showSome);
};

const displayAllCountriesData = (countriesData, showSome) => {
    console.log(countriesData[0]);
    const country = countriesData.slice(1, showSome).map(country => showDown(country));
    // console.log(country);
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = country.join(" ");
}

const showDown = (country) => {
    return `
    <div class="col-12 col-md-6 col-lg-4"> 
        <div class="card">
            <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${country.name.common}</h5>
            <h6>Population: ${country.population}</h6>
            <p class="card-text">TimeZone: ${country.timezones}</p>
            <a href="#" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">See Maps</a>
            </div>
        </div>
    </div>
    `
}





// Load All Cuntries Data Here... 
loadCountries(13);