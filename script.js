'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = country => {
  const html = `
    <article class="country">
      <img class="country__img" src="${country.flag}" />
      <div class="country__data">
        <h3 class="country__name">${country.name}</h3>
        <h4 class="country__region">${country.region}</h4>
        <p class="country__row">
          <span>👫</span>${(country.population / 1000000).toFixed(1)} M people
        </p>
        <p class="country__row">
          <span>🗣️</span>${country.languages[0].name}
        </p>
        <p class="country__row">
          <span>💰</span>${country.currencies[0].name}
        </p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

const whereAmI = async function () {
  const response = await fetch('https://api.ipregistry.co/?key=tryout');
  const countryData = await response.json();
  const country = countryData.location.country.name;

  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();
  renderCountry(data[0]);
};

whereAmI();
