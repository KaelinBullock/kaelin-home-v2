import { Box } from '@chakra-ui/react';
import React from 'react';

const Error = () => (
  <Box display='flex' alignItems='center' justifyContent='center' maxW='full' w='75vw' h='75vh'>
    <h1 className="font-bold text-2xl text-white">Something went wrong. Please try again</h1>
  </Box>
);

export default Error;
