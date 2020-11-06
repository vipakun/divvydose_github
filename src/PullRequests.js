import React from 'react';
import preset from '@rebass/preset'
import { ThemeProvider } from 'emotion-theming'
import SinglePullRequest from './SinglePullRequest.js'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import {
  Box,
  Flex,
  Heading,
} from 'rebass';
import { Input } from '@rebass/forms';

const theme = {
  ...preset,
  colors: {
    primary: 'blue'
  }
}

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
    return (
      <ThemeProvider theme={theme}>
      <Box variant='styles.root'  
        sx={{
          mx: 'auto',
          mt: 3,
          px: 3,
      }}>
        <Heading as='h1' mb={4} sx={{color: 'peru'}}>
          Divvydose Rull Requests:
        </Heading>
        <Loader 
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
        />
      </Box>
    </ThemeProvider>
    )
  }

  if (error !=='') {
    return <p>Error: {error}</p>
  }

  return (
    <ThemeProvider theme={theme}>
      <Box variant='styles.root'  
        sx={{
          mx: 'auto',
          mt: 3,
          px: 3,
      }}>
        <Heading as='h1' mb={4} sx={{color: 'peru'}}>
          Divvydose Rull Requests:
        </Heading>
        <Input type='text' placeholder='Search'/>
        <Flex flexDirection='column'>
          {data.map(item => (         
            <SinglePullRequest item={item} key={item.id}/>
          ))}
        </Flex>
      </Box>
    </ThemeProvider>
  )
}

export default PullRequests;