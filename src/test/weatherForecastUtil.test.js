import mockData from './mockData';
import { processForecastData } from '../utils/weatherForecastUtil';

describe('processForecastData', () => {
  const {dailyForecast, city} = processForecastData(mockData, '2019-07-26T03:32:12+00:00');

  it('city info to be correct', () => {
    expect(city.name).toEqual('London');
    expect(city.timezone).toEqual(3600);
  })

  it('dailyForecast dailyInfo to be correct', () => {
    expect(dailyForecast[0].dailyInfo.minTemp).toBe(18.55);
    expect(dailyForecast[0].dailyInfo.maxTemp).toBe(19.11);
    expect(dailyForecast[0].dailyInfo.condition.description).toBe('overcast clouds');
    expect(dailyForecast[0].dailyInfo.wind).toBe(3.27);
  })

  it('dailyForecast details to be correct', () => {
    expect(dailyForecast[0].details.length).toBe(7);
    expect(dailyForecast[0].details[0].main.temp_min).toBe(19.29);
    expect(dailyForecast[0].details[0].main.temp_max).toBe(20.14);
    expect(dailyForecast[0].details[0].weather[0].description).toBe('light rain');
    expect(dailyForecast[0].details[0].wind.speed).toBe(1.68);
  })
})