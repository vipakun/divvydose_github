
import React from 'react';
import Label from './Label.js';
import { Link } from 'react-router-dom';

const SinglePullRequest = ({item}) => {
  // console.log(item);
  const {title, created_at, id, url, labels = []} = item;
  console.log('SingleRullRequest: ', url);
  return (
    <section>
      <Link to={{
        pathname: `/pr/${id}`,
        state: {item}
      }}
      >
        {title}
      </Link>
      <div>{created_at}</div>
      
      {labels.map(label => (
        <Label label={label} key={label.id}/>
      ))}
      
    </section>
  )
}

export default SinglePullRequest;