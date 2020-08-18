// Checking to see if a token is passed in.
// If it is, set it to global header.
// If it isn't, delete it from the global header.

import axios from 'axios';
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
