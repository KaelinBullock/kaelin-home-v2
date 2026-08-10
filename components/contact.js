import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Divider,
  Image
} from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box
      h="100vh"
      bg="#FAF9F6"
      position="relative"
      overflow="hidden"
      px={{md:'2r80pxem', base:'3rem'}}
      alignContent="center"
    >
      <Box
        display="flex"
        flexDir="row"
        w="100%"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* Heading */}

        <Text
          color="#2E5DBD"
          letterSpacing={{md:'7px', base:'2px'}}
          fontWeight="400"
          mb={12}
          fontSize={{md:'60px', base:'30px'}}
        >
          CONTACT ME
        </Text>

        <Image
          src="/images/mystamp.webp"
          alt="stamp"
          position="relative"
          w={{md:'20rem', base:'10rem'}}
        />
      </Box>

      {/* Main Grid */}

      <Grid
        templateColumns={{md:'1fr 1fr 1fr', base:'1fr'}}
        gap={20}
        mt={8}
      >

        {/* Left Column */}

        <GridItem>

          <Text
            color="#2E5DBD"
            fontWeight="700"
            mb={6}
          >
            TO:
          </Text>

          <Heading
            fontFamily="Didot, serif"
            fontWeight="300"
            size={{md:'xl', base:'md'}}
          >
            Kaelin Bullock
          </Heading>

          <Text
            mt={3}
            color="gray.600"
            fontSize="lg"
          >
            Bangkok, Thailand
          </Text>         
        </GridItem>

        {/* Right Column */}
        
        <GridItem
          px={{md:10, base:'0'}}
          borderLeft="1px solid"
          borderColor="gray.200"
        >
           <Text
            color="#2E5DBD"
            fontWeight="700"
            mb={5}
            >
            EMAIL
         </Text>

            <Text
            fontSize={{md:'lg', base:'md'}}
            color="gray.700"
            >
               Kaelin.Bullock@gmail.com
            </Text>          
        </GridItem>

        <GridItem
          px={{md:10, base:'0'}}
          borderLeft="1px solid"
          borderColor="gray.200"
        >
           <Text
            color="#2E5DBD"
            fontWeight="700"
            mb={5}
            >
               CURRENTLY LOOKING FOR
            </Text>

            <VStack
            align="start"
            spacing={3}
            color="gray.700"
            >
            <Text>International Teaching Positions</Text>

        
            </VStack>   

        </GridItem>

      </Grid>

      <Divider
        borderColor="#2E5DBD"
        borderWidth='1px'
        my={10} 
      />

      <Text
        color="gray.500"
        fontStyle="italic"
        lineHeight="2"
      >
          Thank you for taking the time
          to explore my portfolio.
          I&apos;d love to connect and discuss
          opportunities in education.
      </Text>
    </Box>
  );
}