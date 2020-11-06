import React from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Flex,
  Text,
  Link as StyledLink,
  Image,
} from 'rebass'

const SinglePRDetails = ({ location }) => {
  console.log('LOCATION: ', location)
  const prData = location.state.item;
  const {  body, created_at, state, user: {login, avatar_url, url} } = prData;  

  return (
    <Box>
      <Flex
        px={2}
        color='#D3D3D3'
        bg='black'
        alignItems='center'
        >
        <Text p={2} fontWeight='bold'>{login}</Text>
        <Box mx='auto' />
        <Link to='/' style={{color: '#D3D3D3'}}>
          Back
        </Link>
      </Flex>  
      <Box 
        sx={{px: 3, pt:3, fontSize: 20, py: 3}}
      >
      <Image 
        src={avatar_url}
        sx={{
          width: 50,
          height: 50,
          borderRadius: 9999,
        }}
      />
      <Text
        sx={{
          fontSize: 20,
          py: 3,
        }}
      >
        {body}
      </Text>
      <Text
        sx={{
          fontSize: 20,
          py: 3,
        }}
      >
        PR Created Date/Time: {created_at}
      </Text>
      <Text
        sx={{
          fontSize: 20,
          py: 3,
        }}
      >
        PR State: {state}
      </Text>
      <Flex>
        <StyledLink variant='nav' href={url} sx={{color: 'peru'}}>
            Know More about author?
        </StyledLink>
      </Flex>
      </Box>
    </Box>
    
  )
};

export default SinglePRDetails;