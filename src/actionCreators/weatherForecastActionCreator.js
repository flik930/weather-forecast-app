

const weatherForecast = {
  request: (location) => ({
    type: 'WEATHER_FORECAST_REQUEST',
    location
  }),
  succeed: (data) => ({
    type: 'WEATHER_FORECAST_SUCCEED',
    data
  }),
  failed: (data) => ({
    type: 'WEATHER_FORECAST_FAILED',
    data
  })
};

export default weatherForecast;