export const asyncGetWeather = city => {
  return {
    type: 'ASYNC_GET_WEATHER',
    payload: city
  }
}

export const clearCityData = () => {
  return { type: 'CLEAR_CITY_DATA' }
}