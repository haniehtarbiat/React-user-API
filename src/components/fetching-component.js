import React, { Component } from 'react';
import Fetch from '../Utilities/fetch';
import List from './render-list';
import WithLoading from './handle-loading.js';

const ListWithLoading = WithLoading(List);

class FetchinUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { info: null, isLoading: false, error: false };
  }

  componentDidMount() {
    Fetch()
      .then(data =>
        this.setState({ info: data, isLoading: false, error: false }),
      )
      .catch(error =>
        this.setState({ info: null, isLoading: true, error: error }),
      );
  }

  render() {
    return (
      <ListWithLoading
        isLoading={this.state.isLoading}
        info={this.state.info}
        error={this.state.error}
      />
    );
  }
}
export default FetchinUserInfo;
