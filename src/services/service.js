import axios from 'axios';

// const baseDomain = 'http://dev4.todosgamers.com/';
const baseURL = `api/v1/`;

export default axios.create({
   baseURL,
   // In case that you need a token:
   headers: {
      Accept: "application/json"
   },
});