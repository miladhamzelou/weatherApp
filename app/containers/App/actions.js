import {
  LOAD_FORECAST,
  LOAD_FORECAST_SUCCESS,
  LOAD_FORECAST_ERROR,
} from './constants';

/**
 * Load the forecasts, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_FORECAST
 */
export function loadForecast() {
  return {
    type: LOAD_FORECAST,
  };
}

/**
 * Dispatched when the forecasts are loaded by the request saga
 *
 * @param  {object} forecast The repository data
 *
 * @return {object}      An action object with a type of LOAD_FORECAST_SUCCESS passing the forecasts
 */
export function forecastLoaded(forecasts) {
  return {
    type: LOAD_FORECAST_SUCCESS,
    forecasts,
  };
}

/**
 * Dispatched when loading the forecasts fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of  passing the error
 */
export function forecastLoadingError(error) {
  return {
    type: LOAD_FORECAST_ERROR,
    error,
  };
}
