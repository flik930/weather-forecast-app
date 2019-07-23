import axios from 'axios';
import config from '../config';

export const getFiveDaysForecast = () => {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${config.weatherForecastAPIKey}`)
}
