
import React from 'react';
import Label from './Label.js';
import { Link } from 'react-router-dom';
import { css } from 'emotion'
import {
  Text,
  Card,
} from 'rebass'

const SinglePullRequest = ({item}) => {
  const {title, created_at, id, url, labels = []} = item;
  console.log('SingleRullRequest: ', url);
  return (
    <Card 
      mb={4}
      className={css`
        background-color: #D3D3D3;
    `}
    >
      <Link to={{
        pathname: `/pr/${id}`,
        state: {item}
      }}
      >
        {title}
      </Link>
    
      <Text mt={2} mb={2}>{created_at}</Text>
      
      {labels.map(label => (
        <Label label={label} key={label.id} />
      ))}
      
    </Card>
  )
}

export default SinglePullRequest;