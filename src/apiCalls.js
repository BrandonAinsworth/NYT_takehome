const apiKey = process.env.REACT_APP_API_KEY

export const getStories = (param) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${param}.json?api-key=${apiKey}`)
  .then(res => {
    if (!res.ok) {
      throw new Error();
  }
  return res.json();
})
.catch((error) => {
  console.log('ERROR!')
});
};
