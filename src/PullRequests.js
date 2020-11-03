import React from 'react';
import SinglePullRequest from './SinglePullRequest.js'

const PullRequests = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/repos/divvydose/fe-coding-challenge/pulls')
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setData(data);
        console.log(data);
      })
      .catch(e=> {
        setLoading(false);
        setError('fetch failed');
      });
  }, []);

  if (loading) {
    return <p>Loading ...</p>
  }

  if (error !=='') {
    return <p>Error: {error}</p>
  }

  return (
    <>
      <h1>Rull Requests:</h1>
      <div>
        {data.map(item => (         
          <SinglePullRequest item={item} key={item.id}/>
        ))}
      </div>
    </>
  )
}

export default PullRequests;