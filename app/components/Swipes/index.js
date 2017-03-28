import React, { PropTypes } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import ReactSwipe from 'react-swipe';

function Swipes({ loading, error, chunks }) {
  if (loading) {
    return (<div><LoadingIndicator /></div>);
  }
  if (error !== false) {
    const ErrorComponent = () => (
      <div> {'Something went wrong, please try again!'} </div>
    );
    return (<div><ErrorComponent /></div>);
  }

  if (chunks.length) {
    return (
      <div>
        <span>London</span>
        <ReactSwipe className="carousel" swipeOptions={{ continuous: false }}>
          {chunks}
        </ReactSwipe>
      </div>
    );
  }
  return (<div> ...!? </div>);
}

Swipes.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  chunks: PropTypes.any,
};

export default Swipes;
