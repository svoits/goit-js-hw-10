import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryInfo } from './js/renderCountryInfo';
import { renderCountriesList } from './js/renderCountriesList';

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);

function onSearchInput(e) {
  const searchBoxInput = e.target.value.trim();

  if (!searchBoxInput) {
    refs.countryInfo.innerHTML = '';
    refs.countriesList.innerHTML = '';
    return;
  }

  fetchCountries(searchBoxInput)
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length < 10 && data.length >= 2) {
        refs.countryInfo.innerHTML = '';
        refs.countriesList.innerHTML = renderCountriesList(data);
      } else {
        refs.countriesList.innerHTML = '';
        refs.countryInfo.innerHTML = renderCountryInfo(data);
      }
    })
    .catch(error => {
      return Notify.failure('Oops, there is no country with that name');
    });
}
