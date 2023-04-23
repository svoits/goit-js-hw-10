export function renderCountryInfo(data) {
  return data
    .map(
      ({ name, population, flags, languages, capital }) =>
        `<h2 class="country-name">
        <img src="${flags.svg}" alt="${name.official}" width="50" height="30">
        ${name.official}
        </h2>
        <ul class="country-info-list">
            <li class="country-info-item">
                <span class="country-info-type">Capital:</span>
                ${capital}
            </li>
            <li class="country-info-item">
                <span class="country-info-type">Population:</span>
                ${population}
            </li>
            <li class="country-info-item">
                <span class="country-info-type">Languages:</span>
                ${Object.values(languages)}
            </li>
        </ul>`
    )
    .join('');
}
