import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function Classroom() {
  const [mouse, setMouse] = React.useState({
    x: 0,
    y: 0
  });

  return (
    <Box
      h={{xl:'100vh', lg:'120vh', base:'160vh'}}
      position="relative"
      pl={{md:'80px', base:'3.5rem'}}
      pt="120px"
      flexDir={{md:'row', base:'column'}}
      onMouseMove={(e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        setMouse({ x, y });
      }}
    >

      <MotionBox
        display={{md:'block', base:'none'}}
        position="absolute"
        right="-10%"
        top="-10%"
        w="34rem"
        h="34rem"
        borderRadius="50%"
        bg="#4F88FF"
        opacity={0.12}
        filter="blur(120px)"
        animate={{
          x: mouse.x * 80,
          y: mouse.y * 80
        }}
        transition={{
          type: 'spring',
          stiffness: 20,
          damping: 20
        }}
      />

      <Box
        position="relative"
      >
        <Text
          color="#2E5DBD"
          letterSpacing="3px"
          fontWeight="600"
        >
          THE CLASSROOM
        </Text>
      </Box>

      <Grid
        position="relative"
        templateColumns={{lg:'2fr 3fr', base:'1fr'}}
        gap={12}
      >
        <GridItem>
          <Image
          src="/images/classroom.jpg"
            w={{md:'40rem',base:'20rem'}}
            h={{md:'30rem', base:'20rem'}}
            mt="2rem"
            bg="blue"
            objectFit="cover"
            objectPosition="center 30%"
            borderRadius="20px"
            justifySelf="left"
            alt="classroomImage"
          />
          <Text
            position="relative"
            color="gray.400"
            fontStyle="italic"
          >
        &quot;The goal isn&apos;t to teach programming.
        It&apos;s to teach students how to think.&quot;
      </Text>
      <Heading
          mt={3}
          fontFamily="Didot, serif"
          fontWeight="300"
          fontSize={{md:'3rem', base:'2rem'}}
          lineHeight=".95"
          color="#16213E"
          w={{md:'40rem', base:'100%'}}
        >
          Learning should feel like exploration.
        </Heading>
        </GridItem>
        <GridItem>
          <Text
            color="gray.500"
            letterSpacing="3px"
            mb={6}
          >
            TEACHING PHILOSOPHY
          </Text>

          <Heading
            fontFamily="Didot"
            fontWeight="300"
          fontSize={{md:'3rem', base:'2rem'}}
            mb={8}
          >
            Students learn
            best by creating.
          </Heading>

          <Text
            color="gray.600"
            lineHeight="2"
            mb={10}
          >
            I believe students remember what they build.
            Every lesson is designed around creativity,
            curiosity, and solving real-world problems.
          </Text>

          <Box mb={8}>
            <Heading
              fontSize="lg"
              color="#2E5DBD"
            >
              PROJECTS
            </Heading>

            <Text color="gray.600">
              Real software.
              <br />
              Real challenges.
              <br />
              Websites
              <br />
              Code.org
              <br />
              Python
              <br />
              Java
              <br />
              Apps
            </Text>
          </Box>

          <Box>
            <Heading
              fontSize="lg"
              color="#2E5DBD"
              mb={2}
            >
              Students Learn
            </Heading>

            <Text color="gray.600">
              Problems solving
              <br />
              Critical Thiking
              <br />
              Collaboration
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}