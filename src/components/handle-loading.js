import React from 'react';

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, error, ...props }) {
    if (!isLoading && !error) return <Component {...props} />;
    return <p>there is a problem in fetching url</p>;
  };
}
export default WithLoading;
