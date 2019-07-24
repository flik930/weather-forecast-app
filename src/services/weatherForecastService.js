import axios from 'axios';
import config from '../config';

export const getWeatherForecast = (location) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${config.weatherForecastAPIKey}`)
}
