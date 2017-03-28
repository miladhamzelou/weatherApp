/**
 * Gets the forecast data from OpenWeather API
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_FORECAST } from 'containers/App/constants';
import { forecastLoaded, forecastLoadingError } from 'containers/App/actions';
import request from 'utils/request';
// import { API_KEY } from 'appConfig';

export function* getForecastDataRequest() {
  // direct connection with API does't work with ios/https's missing so we have a proxy
  // const requestURL = `http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=${API_KEY}&units=metric`;
  const requestURL = 'https://us3r.io:443/proxy';
  try {
    const forecasts = yield call(request, requestURL);
    yield put(forecastLoaded(forecasts));
  } catch (err) {
    yield put(forecastLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* startUpSaga() {
  const watcher = yield takeLatest(LOAD_FORECAST, getForecastDataRequest);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  startUpSaga,
];
