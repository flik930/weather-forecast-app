const findMajorityConditions = (array) => {
  if(array.length == 0)
    return null;
  var modeMap = {};
  var maxEl = array[0], maxCount = 1;
  for(var i = 0; i < array.length; i++)
  {
      var el = array[i];
      if(modeMap[el.weather[0].main] == null)
          modeMap[el.weather[0].main] = 1;
      else
          modeMap[el.weather[0].main]++;  
      if(modeMap[el.weather[0].main] > maxCount)
      {
          maxEl = el.weather;
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
  return total / array.length;
}

export const getDailyForecast = (items) => {
  let minTemp = null;
  let maxTemp = null;
  let condition = null;
  let wind = null;
  items.forEach(item => {
    if (!maxTemp || item.main.temp_max > maxTemp) {
      maxTemp = item.main.temp_max;
    }
    if (!minTemp || item.main.temp_min < minTemp) {
      minTemp = item.main.temp_min;
    }
  })
  condition = findMajorityConditions(items);
  wind = findMeanOfWindSpeed(items);
  return {minTemp, maxTemp, condition, wind}
}