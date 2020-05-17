const URL = 'https://restcountries.eu/';

class API {
  async getDataCountries () {
    const result = await window.fetch(`${URL}rest/v2/all`);
    const data = await result.json();
    return data;
  }

  async getCountriesRegion (region) {
    const result = await window.fetch(`${URL}rest/v2/region/${region}`);
    const data = result.json();
    return data;
  }

  async getCountriesByName (name) {
    const result = await window.fetch(`${URL}/rest/v2/name/${name}`);
    const data = result.json();
    return data;
  }

  async getDataCountrieByCode (code) {
    const result = await window.fetch(`${URL}rest/v2/alpha/${code}`);
    const data = result.json();
    return data;
  }

  async getCountriesByCodes (codes) {
    const result = await window.fetch(`${URL}rest/v2/alpha?codes=${codes}&fields=name;alpha3Code`);
    const data = result.json();
    return data;
  }
}

export default API;
