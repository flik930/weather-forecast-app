import moment from 'moment'
import { getDailyForecast } from '../utils/weatherForecastUtil';

const weatherForecast = (state = {}, action) => {
  switch (action.type) {
    case 'WEATHER_FORECAST_SUCCEED':
      const tzOffset = action.data.city.timezone / 60;
      const dailyForecast = []
      //re-structure forcast data by day
      for(let i = 0; i <= 5; i++) {
        let start = moment().utcOffset(tzOffset).startOf('day').add(i, 'days').valueOf() / 1000
        let end = moment().utcOffset(tzOffset).startOf('day').add(i + 1, 'days').valueOf() / 1000
        dailyForecast[i] = {
          dt: start,
          details: [],
          dailyInfo: {}
        };
        action.data.list.forEach((item) => {
          if (item.dt > start && item.dt < end){
            dailyForecast[i]['details'].push(item)
          }
        })
      }

      dailyForecast.forEach(day => {
        day.dailyInfo = getDailyForecast(day.details);
      });

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