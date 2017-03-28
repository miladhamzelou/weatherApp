import { fromJS } from 'immutable';

import {
  LOAD_FORECAST_SUCCESS,
  LOAD_FORECAST,
  LOAD_FORECAST_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    forecasts: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FORECAST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'forecasts'], false);
    case LOAD_FORECAST_SUCCESS:
      return state
        .setIn(['userData', 'forecasts'], action.forecasts)
        .set('loading', false);
    case LOAD_FORECAST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
