import moment from 'moment'

const findMajorityConditions = (array) => {
  if(array.length === 0)
    return null;
  var modeMap = {};
  var maxEl = array[0].weather[0], maxCount = 1;
  for(var i = 0; i < array.length; i++)
  {
      var el = array[i];
      if(modeMap[el.weather[0].main] == null)
          modeMap[el.weather[0].main] = 1;
      else
          modeMap[el.weather[0].main]++;  
      if(modeMap[el.weather[0].main] > maxCount)
      {
          maxEl = el.weather[0];
          maxCount = modeMap[el.weather[0].main];
      }
  }
  return maxEl;
}

const findMeanOfWindSpeed = (array) => {
  var total = 0, i;
  for (i = 0; i < array.length; i += 1) {
      total += array[i].wind.speed;
  }
  return parseFloat((total / array.length).toFixed(2));
}

const findMinTemp = (array) => {
  let minTemp;
  array.forEach(item => {
    if (!minTemp || item.main.temp_min < minTemp) {
      minTemp = item.main.temp_min;
    }
  })
  return minTemp;
}

const findMaxTemp = (array) => {
  let maxTemp;
  array.forEach(item => {
    if (!maxTemp || item.main.temp_max < maxTemp) {
      maxTemp = item.main.temp_max;
    }
  })
  return maxTemp;
}

const getDailyForecast = (items) => {
  let minTemp = findMinTemp(items);
  let maxTemp = findMaxTemp(items);
  let condition = findMajorityConditions(items);
  let wind = findMeanOfWindSpeed(items);
  return {minTemp, maxTemp, condition, wind}
}

export const processForecastData = (data, timenow) => {
  const tzOffset = data.city.timezone / 60;
  const dailyForecast = []
  //re-structure forcast data by day
  for(let i = 0; i <= 5; i++) {
    let start = moment(timenow).utcOffset(tzOffset).startOf('day').add(i, 'days').valueOf() / 1000
    let end = moment(timenow).utcOffset(tzOffset).startOf('day').add(i + 1, 'days').valueOf() / 1000
    dailyForecast[i] = {
      dt: start,
      displayDate: moment(start * 1000).utcOffset(tzOffset).format('dddd D/M'),
      details: [],
      dailyInfo: {}
    };
    data.list.forEach((item) => {
      if (item.dt > start && item.dt < end){
        dailyForecast[i]['details'].push(item)
      }
    })
  }

  dailyForecast.forEach(day => {
    day.dailyInfo = getDailyForecast(day.details);
  });

  if (dailyForecast.length > 5) {
    dailyForecast.pop();
  }

  return {dailyForecast, city: data.city};
}