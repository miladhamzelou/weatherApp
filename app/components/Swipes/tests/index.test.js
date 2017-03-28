import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import LoadingIndicator from 'components/LoadingIndicator';
import Swipes from '../index';

describe('<Swipes />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <Swipes loading />
    );
    expect(renderedComponent.contains(<div><LoadingIndicator /></div>)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <Swipes
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });
});
