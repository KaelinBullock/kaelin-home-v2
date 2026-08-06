import React from 'react';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import MyImage from './my-image';

export default function Cover() {
  return (
    <Box
      h="100vh"
      bg="transparent"
      position="relative"
      alignItems="center"
      display="flex"
      flexDir={{md:'row', base:'column'}}
    >
      <Box
        display="flex"
        h={{md:'100%',base:'0'}}
        flexDir="column"
        alignContent="center"
        pl={{xl: '80px', base: '3rem'}}
      >
        <Box
          position="relative"
          flex="10"
          alignContent={{xl:'flex-start', base:'center'}}
          // bg=
        >
          <Box
            position="relative"
            zIndex={3}
            pt={{xl:'13rem', base:'7rem'}}
          >
            <Box display="flex">
              <Heading
                fontFamily="Didot, Bodoni MT, serif"
                fontWeight="300"
                lineHeight=".82"
                color="#16213E"
                fontSize={{xl:'10rem',md:'6rem', base:'4rem'}}
              >
                KAELIN<br/>BULLOCK
              </Heading>
            </Box>
            
            <Box display="flex" h="100%" alignItems="center" flexDir={{xl:'row', md:'row', base:'column'}}>
              <Box display="flex" flexDirection="column" h="100%">
                <Text
                  mt={8}
                  fontSize="4xl"
                  fontFamily="Didot, serif"
                  lineHeight="1.25"
                >
                  Educator.
                  <br />

                  <Text
                    as="span"
                    color="#3979E9"
                  >
                    Developer.
                  </Text>

                  <br />

                  Problem Solver.
                </Text>

                <Text
                  mt={8}
                  fontSize="lg"
                  color="gray.600"
                  maxW="330px"
                  lineHeight="1.8"
                >
                  I teach students to think logically,
                  build creatively, and solve real-world
                  problems through computer science.
                </Text>
              </Box>
            </Box>

          </Box>      
          
        </Box>
        <Box
          alignItems="center"
          display={{md:'flex',base:'none'}}
          flex="1"
          alignSelf="flex"
        >
          <Box
            w="54px"
            h="54px"
            borderRadius="full"
            border="2px solid"
            borderColor="blue.600"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mr={5}
          >
            ↓
          </Box>

          <Text
            fontWeight="600"
            letterSpacing="4px"
            display={{md:'block',base:'none'}}

          >
            SCROLL TO EXPLORE
          </Text>
        </Box> 
      </Box>
      <Box 
        display="flex" 
          h="100%"
        justifyContent="center"
        flex="1"
      >
        <MyImage/>
      </Box>
    </Box>
  );
}