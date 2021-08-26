import { takeEvery, put, call, select } from 'redux-saga/effects';
import api from '../services/api';

export default function* rootSaga() {
  yield takeEvery('ASYNC_GET_WEATHER', asyncGetWeather);
}

function* asyncGetWeather(action) {
  try {
    const apiKey = yield select(state => state.AppReducer.apiKey);
    const city = action.payload;

    const query = { q: city, appid: apiKey, units: 'metric' };

    const response = yield call(api.get, '/weather', { params: query });
    const cityData = response.data;
    const { lat, lon } = cityData.coord;

    const hourlyQuery = { lat, lon, appid: apiKey, exclude: 'current,minutely,daily,alerts', units: 'metric' };

    const hourlyResponse = yield call(api.get, '/onecall', { params: hourlyQuery });
    const hourly = hourlyResponse.data.hourly;

    cityData.timezone = hourlyResponse.data.timezone;
    cityData.hourly = hourly.slice(0, 24).sort((a, b) => {
      let hourA = new Date(a.dt * 1000).getHours();
      let hourB = new Date(b.dt * 1000).getHours();
      return hourA-hourB;
    });

    yield put({ type: 'SET_CITY_DATA', payload: cityData });
  } catch(err) {

    yield put({ type: 'SET_ERROR_CITY_DATA' });
  }
}