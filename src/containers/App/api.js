import axios from 'axios';
import gql from 'graphql-tag';
import { print } from 'graphql/language/printer';

const query = gql`
    query {
        users {
            name
            email
        }
    }
`

export default {
  fetchUsers: async () => {
    try {
      const res = await axios.post(
        'http://localhost:4000/graphql',
        {query: print(query)});
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}
