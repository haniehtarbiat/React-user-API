import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
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
      currentPage: this.getPage()
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getData = this.getData.bind(this);
    this.getPage = this.getPage.bind(this);
  }

  componentDidMount() {
    const {currentPage}=this.state;
      this.getData(currentPage);
  }

  getPage(){
    const {search} =this.props.location;
    const queryParams = queryString.parse(search);
    return(queryParams.page);
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
      this.props.location.search=`?page=${page}`;
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
FetchinUserInfo.propTypes= {
  search: PropTypes.string,
  location: PropTypes.string,
}
FetchinUserInfo.defaultProps = {
  search: '1',
  location:'',
};

export default FetchinUserInfo;
