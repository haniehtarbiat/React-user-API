import React from 'react';
import { Route} from 'react-router-dom';
import FetchinUserInfo from './components/fetching-component';

class App extends React.Component {
  render() {
    return (
      <div>
          <Route path="/" component={FetchinUserInfo} />
      </div>
    );
  }
}

export default App;
