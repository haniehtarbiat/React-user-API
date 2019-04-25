const Fetch = () => {
  return fetch(
    'http://5cbc116dfa84180014bdb224.mockapi.io/users?page=1&limit=12',
  )
    .then(results => results.json())
    .then(data => data);
};
export default Fetch;
