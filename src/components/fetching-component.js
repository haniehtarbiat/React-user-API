import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import Fetch from '../Utilities/fetch';
import List from './render-list';
import WithLoading from './handle-loading';

require("bootstrap-less/bootstrap/bootstrap.less");

const ListWithLoading = WithLoading(List);

class FetchinUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:null,
      isLoading: false,
      error: false,
      activePage: this.getPage(),
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getData = this.getData.bind(this);
    this.getPage = this.getPage.bind(this);
  }

  componentDidMount() {
    const {activePage}=this.state;
    if (activePage===undefined)
    this.getData(1);
    else
    this.getData(activePage);
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
    this.setState({activePage: page});
      this.getData(page);
      this.props.location.search=`?page=${page}`;
      this.props.history.push(`?page=${page}`);
  }

  render() {
    const {
      isLoading,
      error,
      info,
      activePage,
    } = this.state;
    return (
      <div>
        <ListWithLoading isLoading={isLoading} info={info} error={error} />
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={50}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}
FetchinUserInfo.propTypes= {
  search: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.string),
}
FetchinUserInfo.defaultProps = {
  search: '1',
  location:'',
};

export default FetchinUserInfo;
