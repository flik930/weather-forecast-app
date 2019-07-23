import { call, put, takeLatest } from 'redux-saga/effects'
import { getFiveDaysForecast } from '../services/weatherForecastService'
import fiveDaysWeatherForecast from '../actionCreators/weatherForecastActionCreator';

function* fetchFiveDaysWeatherForecast(action) {
  try {
     const response = yield call(getFiveDaysForecast, action.location);
     yield put(fiveDaysWeatherForecast.succeed(response.data));
  } catch (e) {
    console.log(e);
    yield put(fiveDaysWeatherForecast.failed(e));
  }
}

function* weatherForecastSaga() {
  yield takeLatest("FIVE_DAYS_WEATHER_FORECAST_REQUEST", fetchFiveDaysWeatherForecast);
}

export default weatherForecastSaga;