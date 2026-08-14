import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  useBreakpointValue
} from '@chakra-ui/react';

export default function Story() {
  const isDesktop = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Box
      h="100vh"
      w="100vw"
      position="relative"
      bg="transparent"
      padding={0}
    >
      <Box
        position="relative"
        left="80px"
        top="110px"
        zIndex={2}

        w="100%"
        
      >
        <Text
          color="#2E5DBD"
          letterSpacing="3px"
          fontWeight="600"
          mb={5}
        >
          MY STORY
        </Text>

        <Grid 
          templateColumns={isDesktop? '1fr 1fr' : '1fr'} 
        >
          <GridItem>
            <Heading
              fontFamily="Didot, serif"
              fontWeight="300"
              fontSize={{xl:'5.8rem', md:'3rem',base:'2rem'}}
              lineHeight=".95"
              color="#16213E"
            >
              I&apos;m from
              <br />
              Little Rock, Arkansas
              <br/>
            </Heading>
          </GridItem>


          <GridItem display="flex" justifyContent="flex-start">
            <Image
              src="/images/Arkansas.webp"
              position="relative"
              alt="TreeImage"
              h={{xl:'20rem', md:'20rem', base:'12rem'}}
              objectFit="contain"
              zIndex={2}
            />
          </GridItem>
        </Grid>

        <Grid
          mt="1rem"
          templateColumns={{med:'1fr 1fr', base:'1fr'}}
        >
          <GridItem w={{md:'50%',base:'70%'}}>
            <Text
              color="gray.600"
              lineHeight="2"
              fontSize="md"
            >
              I&apos;m from the U.S.A. I was born in raised in Little Rock Arkansas. I went to The University of Arkansas to study
              computer science.  I worked at a large corporation for years, and quit to travel, and do freelance work.
            </Text>
          </GridItem>

          <GridItem w={{md:'50%',base:'70%'}}>
            <Text
              color="gray.600"
              lineHeight="2"
              fontSize="md"
            >
              While doing freelance work, I started making assignments for college students.
              I realized I liked making lesson plans and assignments, so I decided to try teaching.
            </Text>
          </GridItem>
        </Grid>
      </Box>
      {/* <Box
        display={{xl:'block', base:'none'}}
        position="absolute"
        left="80px"
        bottom="90px"
        w="180px"
        h="1px"
        bg="gray.300"
      /> */}
    </Box>
  );
}