const APP_ID = "31e1029b7abd0202aef26ba57a43e00d";
const UNITS = "metric";
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
class WeatherAPI {

  constructor() {
    this.apiURL = new URL(WEATHER_API_BASE_URL);
  }

  constructURL(locationName) {
    this.apiURL.searchParams.append("q", locationName);
    this.apiURL.searchParams.append("appid", APP_ID);
    this.apiURL.searchParams.append("units", UNITS);
    console.log(this.apiURL.toString());
  }

  async invokeURL() {
    const responseObj = await fetch(this.apiURL.toString());
    const responseJson = await responseObj.json();
    return responseJson;
  }
  
  invokeURL2() {
    const responseObj = fetch(this.apiURL.toString())
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return responseObj;
  }
}

export { WeatherAPI }