import React, { Component } from 'react';

import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
    query exchangeRates($currency: String!){
        rates(currency: $currency) {
            currency
            rate
        }
    }
`

class ExchangeRates extends Component {
  render() {
    return (
      <Query query={QUERY} variables={{currency: this.props.currency}}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>{currency}: {rate}</p>
            </div>
          ));
        }}
      </Query>
    );
  }
}

class ExchangeRatesApollo extends Component {
  render() {
    return (
      <ExchangeRates currency="USD"/>
    );
  }
}

export default ExchangeRatesApollo;
