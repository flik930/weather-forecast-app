import { call, put, takeLatest } from 'redux-saga/effects'
import { getWeatherForecast } from '../services/weatherForecastService'
import weatherForecast from '../actionCreators/weatherForecastActionCreator';

function* fetchWeatherForecast(action) {
  try {
     const response = yield call(getWeatherForecast, action.location);
     yield put(weatherForecast.succeed(response.data));
  } catch (e) {
    console.log(e);
    yield put(weatherForecast.failed(e));
  }
}

function* weatherForecastSaga() {
  yield takeLatest("WEATHER_FORECAST_REQUEST", fetchWeatherForecast);
}

export default weatherForecastSaga;