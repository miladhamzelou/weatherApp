/**
 * Tests for SwipContainer sagas
 */
import { put } from 'redux-saga/effects';
import { forecastLoaded, forecastLoadingError } from 'containers/App/actions';
import { getForecastDataRequest } from '../sagas';

/* eslint-disable redux-saga/yield-effects */
describe('getForecastDataRequest Saga', () => {
  let getForecastsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getForecastsGenerator = getForecastDataRequest();

    const selectDescriptor = getForecastsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the forecastLoaded action if it requests the data successfully', () => {
    const response = {
      list: [{
        dt: 1490724000,
      }],
    };
    const putDescriptor = getForecastsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(forecastLoaded(response)));
  });

  it('should call the forecastLoadingError action if the response errors', () => {
    const response = new Error('An error');
    const putDescriptor = getForecastsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(forecastLoadingError(response)));
  });
});
