const loadCuntries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCuntries();

const displayCountries = (countries) => {
  console.log(countries);
  const countriesContainer = document.getElementById("countries");
  countries.forEach((country) => {
    console.log(country);
    const div = document.createElement("div");

    div.classList.add(
      "country",
      "col-xl-3",
      "col-lg-4",
      "col-md-5",
      "col-10",
      "mx-auto"
    );
    div.innerHTML = `
        <h3> ${country.name} </h3>
        <p> ${country.capital} </p>
        <button onclick="loadCountryByName('${country.name}')"  class="btn btn-info">Details</button>
    `;
    countriesContainer.appendChild(div);
  });
};

const loadCountryByName = (countryName) => {
  console.log(countryName);
  const url = `https://restcountries.com/v2/name/${countryName}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  console.log(country);
  const countryDetailContainer = document.getElementById("country-detail");

  const countryDiv = document.createElement("div");
  countryDetailContainer.innerHTML = `
    <h4>Name: ${country.name} </h4>
    <p>Population: ${country.population} </p>
    <img width="200" src=" ${country.flag} ">
    `;
};
