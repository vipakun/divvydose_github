import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';

const SinglePRDetails = ({ match, location }) => {
  const { params: {prId}} = match;
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState('');
  // const [data, setData] = React.useState([]);
  
  const singlePRUrl = location.state.item.url;
  console.log('data in SinglePRDetails: ',  location.state.item.url);
  // console.log('match: ', match);
  
  return <div>Details </div>
};

export default SinglePRDetails;