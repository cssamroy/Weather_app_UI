class Forecast {
  constructor() {
    this.apiKey = "1uighF38zzH9wp281gXbzwXPCTykZfMu";
    this.weatherURI =
      "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
    this.cityURI =
      "https://dataservice.accuweather.com/locations/v1/postalcodes/search";
  }

  async getCity(zipcode) {
    const query = `?apikey=${this.apiKey}&q=${zipcode}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }

  async getWeather(key) {
    const query = `${key}?apikey=${this.apiKey}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data?.DailyForecasts;
  }
}

export default new Forecast();
