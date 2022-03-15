// console.log("yo boi");
const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  //   console.log(countries);
  console.log(countries[25]);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  //   console.log(countriesHTML);
  //   console.log(countriesHTML[0]);
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

// original
/* const getCountryHTML = (country) => {
  return `
        <div class="country">
            <h3>${country.name.common}</h3>
            <img src="${country.flags.svg}" alt="${country.name.common}">
            <p>Continent: ${country.continents} </p>
            <p>Area: ${country.area} </p>

        </div>
    `;
}; */

// option 1
/* const getCountryHTML = (country) => {
    
    const {name, flags, area, continents} = country;
  return `
        <div class="country">
            <h3>${name.common}</h3>
            <img src="${flags.svg}" alt="${name.common}">
            <p>Continent: ${continents} </p>
            <p>Area: ${area} </p>
        </div>
    `;
}; */
// option 2
const getCountryHTML = ({ name, flags, area, continents }) => {
  return `
        <div class="country">
            <h3>${name.common}</h3>
            <img src="${flags.svg}" alt="${name.common}">
            
            <p>Continent: ${continents} </p>
            <p>Area: ${area} </p>

        </div>
    `;
};
loadCountries();
