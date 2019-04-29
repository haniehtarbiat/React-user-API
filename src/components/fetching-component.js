import React, { Component } from 'react';
import Fetch from '../Utilities/fetch';
import List from './render-list';
import WithLoading from './handle-loading';
import Pagination from "../common/pagination";

const ListWithLoading = WithLoading(List);

class FetchinUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      isLoading: false,
      error: false,
      itemsCount: 50,
      pageSize: 10,
      currentPage: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const {currentPage}=this.state;
      this.getData(currentPage);
  }

  getData(page){
    Fetch(page)
      .then(data =>
        this.setState({ info: data, isLoading: false, error: false }),
      )
      .catch(error => this.setState({ info: null, isLoading: true, error }));
  }

  handlePageChange(page) {
      this.getData(page);
  }

  render() {
    const {
      isLoading,
      error,
      info,
      itemsCount,
      pageSize,
      currentPage,
    } = this.state;
    return (
      <div>
        <ListWithLoading isLoading={isLoading} info={info} error={error} />
        <Pagination
          itemsCount={itemsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default FetchinUserInfo;
