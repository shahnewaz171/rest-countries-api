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
            <button>Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesName.appendChild(countryDiv);
    });

    // for (let i = 0; i < countries.length; i++) {  //skip this part
        
    // }
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