export function renderCountriesList(data) {
  return data
    .map(
      ({ name, flags }) =>
        `<li class="country-item"><img src="${flags.svg}" alt="${name.official}" width="30" height="20">${name.official}</li>`
    )
    .join('');
}
