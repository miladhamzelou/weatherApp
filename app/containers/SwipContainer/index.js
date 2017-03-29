/*
 *
 * SwipContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import Swipes from 'components/Swipes';
import { makeSelectForecasts, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadForecast } from '../App/actions';

const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const Degrees = styled.div`
  margin: 0 auto;
  margin-top: 50%;
  text-align: center;
  font-size: 4rem;
`;

export class SwipContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // change this lifecycle hook
    this.props.loadWeatherAPI();
  }

  getDay = (date) => {
    const d = date.replace(/\s/, 'T');
    const day = new Date(d).getDay();
    return days[day];
  };

  checkForNoon = (chunk, index) => {
    if (index === 0) return true;
    // i only render forecast for 1pm every day other than current day
    return new Date(chunk.dt * 1000).getHours() === 13;
  };

  renderChunk = (item, index) => {
    if (index === 0) {
      return (
        <div key={`chunk-${index}`}>
          <span>{this.getDay(item.dt_txt)}</span>
          <Degrees>{Math.round(item.main.temp)}&deg;C</Degrees>
        </div>
      );
    }

    if (this.checkForNoon(item)) {
      return (
        <div key={`chunk-${index}`} >
          <span>{this.getDay(item.dt_txt)}</span>
          <Degrees>{Math.round(item.main.temp)}&deg;C</Degrees>
        </div>
      );
    }
    return false;
  }
  // this render method is unable to conduct quick & simple test suits
  render() {
    const { loading, error, forecasts } = this.props;
    let chunks = (<div></div>);
    const initForecastSwipesProps = {
      loading,
      error,
      chunks,
    };
    if (forecasts.list) {
      chunks = forecasts.list.filter((item, index) => this.checkForNoon(item, index))
      .map((item, index) => (this.renderChunk(item, index)));
      const forecastSwipesProps = {
        loading,
        error,
        chunks,
      };
      return (<Swipes {...forecastSwipesProps} />);
    }
    return (<Swipes {...initForecastSwipesProps} />);
  }
}

SwipContainer.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  forecasts: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.object,
    React.PropTypes.node,
  ]),
  loadWeatherAPI: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  forecasts: makeSelectForecasts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadWeatherAPI: () => {
      dispatch(loadForecast());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipContainer);

