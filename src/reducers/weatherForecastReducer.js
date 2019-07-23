const weatherForecast = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCEED':
      return {
        ...state,
        forecastData: action.payload.data
      }
  }
}

export default weatherForecast;