import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor( props ) {
    super( props );
    this.submitForm = this.submitForm.bind( this );
    this.changeSearch = this.changeSearch.bind( this );
  }
  state = {
    search: '',
  };
  submitForm ( e ) {
    e.preventDefault();
    this.props.onSearch( this.state.search );
  }
  changeSearch ( ele ) {
    this.setState( {
      search: ele.target.value,
    } );
  }
  render () {
    return (
      <div className="container">
        <div className="jumbotron">
          <h3 className="text-center">
            <FormattedMessage id="search.heading" />
          </h3>
          <form id="searchForm" onSubmit={this.submitForm}>
            <input
              type="text"
              onInput={this.changeSearch}
              className="form-control"
              id="searchText"
              placeholder={this.props.intl.formatMessage( { id: 'search.placeholder' } )}
            />
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func,
  intl: PropTypes.shape( {
    formatMessage: PropTypes.func
  } )
};

export default injectIntl( Search );
