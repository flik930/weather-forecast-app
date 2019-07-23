import { createStore, applyMiddleware, compose } from 'redux';
import weatherForecast from './reducers/weatherForecastReducer';
import createSagaMiddleware from 'redux-saga';
import weatherForecastSaga from './sagas/weatherForecastSaga';


const initialState = {}
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  weatherForecast,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(weatherForecastSaga);

export default store;