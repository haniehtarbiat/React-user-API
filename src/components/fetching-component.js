import React, { Component } from 'react';
import Fetch from '../Utilities/fetch';
import List from './render-list';
import WithLoading from './handle-loading';

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
      .catch(error => this.setState({ info: null, isLoading: true, error }));
  }

  render() {
    const { isLoading, info, error } = this.state;
    return <ListWithLoading isLoading={isLoading} info={info} error={error} />;
  }
}

export default FetchinUserInfo;
