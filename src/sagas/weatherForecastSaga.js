import { call, put, takeLatest } from 'redux-saga/effects'
import { getWeatherForecast } from '../services/weatherForecastService'
import weatherForecast from '../actionCreators/weatherForecastActionCreator';

function* fetchWeatherForecast(action) {
  try {
     const response = yield call(getWeatherForecast, action.location);
     yield put(weatherForecast.succeed(response.data));
  } catch (e) {
    yield put(weatherForecast.failed(e.response.data));
  }
}

function* weatherForecastSaga() {
  yield takeLatest("WEATHER_FORECAST_REQUEST", fetchWeatherForecast);
}

export default weatherForecastSaga;