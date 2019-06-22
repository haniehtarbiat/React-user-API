const Fetch = (pageNumber) => {
  const pageSize= 12;
  return fetch(
    `https://5cbc116dfa84180014bdb224.mockapi.io/users?page=${pageNumber} &limit= ${pageSize}`,
  )
    .then(results => results.json())
    .then(data => data);
};
export default Fetch;
