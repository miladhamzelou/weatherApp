
import { fromJS } from 'immutable';
import swipContainerReducer from '../reducer';

describe('swipContainerReducer', () => {
  it('returns the initial state', () => {
    expect(swipContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
