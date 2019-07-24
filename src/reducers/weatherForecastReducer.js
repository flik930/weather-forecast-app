import { processForecastData } from '../utils/weatherForecastUtil';

const weatherForecast = (state = {}, action) => {
  switch (action.type) {
    case 'WEATHER_FORECAST_SUCCEED':
      const dailyForecast = processForecastData(action.data);
      return {
        ...state,
        dailyForecast
      }
    default:
      return {
        ...state
      }
  }
}

export default weatherForecast;