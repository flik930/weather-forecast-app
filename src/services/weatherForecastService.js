import axios from 'axios';
import config from '../config';

export const getFiveDaysForecast = (location) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&APPID=${config.weatherForecastAPIKey}`)
}

export const getThreeHoursForecast = (location) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${config.weatherForecastAPIKey}`)
}
