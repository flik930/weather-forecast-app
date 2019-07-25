import { processForecastData } from '../utils/weatherForecastUtil';

const weatherForecast = (state = {}, action) => {
  switch (action.type) {
    case 'WEATHER_FORECAST_SUCCEED':
      const {dailyForecast, city} = processForecastData(action.data);
      return {
        ...state,
        dailyForecast,
        city,
        error: null
      }
    case 'WEATHER_FORECAST_FAILED':
        return {
          ...state,
          dailyForecast: null,
          error: action.data.message
        }
    default:
      return {
        ...state
      }
  }
}

export default weatherForecast;