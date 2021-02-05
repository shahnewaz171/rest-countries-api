//another way//
// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => {
//     // console.log(data);
//     displayCountries(data);
// });

// const displayCountries = countries =>{
//     const countriesName = document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         // console.log(country.name);
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';   //It creates a Class

//         const countryInfo = `
//             <h3 class="country-name">${country.name}</h3>
//             <p>${country.capital}</p>
//         `;
//         countryDiv.innerHTML = countryInfo;
//         countriesName.appendChild(countryDiv);
//     }
// };

//Another way using forEach method
fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
    // console.log(data);
    displayCountries(data);
});

const displayCountries = countries =>{
    const countriesName = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';   //It creates a Class

        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')" >Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesName.appendChild(countryDiv);
    });
};

const displayCountryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data[0].name));
    .then(data => renderCountryInfo(data[0]));
    document.getElementById('countries').style.display = 'none';
};

const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>${country.population}</p>
        <p>${country.region}</p>
        <p>${country.nativeName}</p>
        <p>${country.timezones}</p>
        <p>${country.area}</p>
        <p>${country.subregion}</p>
        <img src="${country.flag}">
    `;
};

//First way//
// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => {
//     // console.log(data);
//     displayCountries(data);
// });

// const displayCountries = countries =>{
//     const countriesName = document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         // console.log(country.name);
//         const countryDiv = document.createElement('div');
    
//         const name = document.createElement('h3');
//         name.innerText = country.name;
//         const capital = document.createElement('p');
//         capital.innerText = country.capital;
//         countryDiv.appendChild(name);
//         countryDiv.appendChild(capital);
//         countriesName.appendChild(countryDiv);
//     }
// };