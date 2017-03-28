/**
 * Test the SwipContainer
 */

import React from 'react';
import { shallow } from 'enzyme';

import Swipes from 'components/Swipes';
import { SwipContainer } from '../index';
// import { loadForecast } from '../../App/actions';

describe('<SwipContainer />', () => {
  it('should render the forecast list', () => {
    const renderedComponent = shallow(
      <SwipContainer loading error={false} forecasts={[]} />
    );
    const chunksMock = (<div></div>);
    expect(renderedComponent.contains(<Swipes loading error={false} chunks={chunksMock} />)).toEqual(true);
  });
});
