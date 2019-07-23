

const fiveDaysWeatherForecast = {
  request: (location) => ({
    type: 'FIVE_DAYS_WEATHER_FORECAST_REQUEST',
    location
  }),
  succeed: (data) => ({
    type: 'FIVE_DAYS_WEATHER_FORECAST_SUCCEED',
    data
  }),
  failed: (data) => ({
    type: 'FIVE_DAYS_WEATHER_FORECAST_FAILED',
    data
  })
};

export default fiveDaysWeatherForecast;