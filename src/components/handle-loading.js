import React from 'react';
import PropTypes from 'prop-types';

function WithLoading(Component) {
  function WihLoadingComponent({ isLoading, error, ...props }) {
    if (!isLoading && !error) return <Component {...props} />;
    return <p>there is a problem in fetching url</p>;
  }
  WihLoadingComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  };
  return WihLoadingComponent;
}
export default WithLoading;
