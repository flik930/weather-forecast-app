import { createStore, applyMiddleware, compose } from 'redux';
import weatherForecast from './reducers/weatherForecastReducer';
import createSagaMiddleware from 'redux-saga';
import weatherForecastSaga from './sagas/weatherForecastSaga';


const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  weatherForecast,
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(weatherForecastSaga);

export default store;