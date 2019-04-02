import axios from 'axios';
import gql from 'graphql-tag';
import {print} from 'graphql/language/printer';

const query = gql`
    query {
        users {
            name
            email
        }
    }
`

export default {
  fetchUsers: axios.post(
    'http://localhost:4000/graphql',
    {query: print(query)})
    .then((result) => {
    console.log(result.data);
  })
}
