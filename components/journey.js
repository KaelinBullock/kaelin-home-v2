import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function Journey() {
  const [mouse, setMouse] = React.useState({
    x: 0,
    y: 0
  });

  const yearFontSize = useBreakpointValue({
    base: '2.5rem',
    md: '4rem'
  });

  const isDesktop = useBreakpointValue({
      base: false,
      md: true,
    });

  return (
    <Box
      h={{xl:'100vh', md:"100vh", base:'120vh'}}
      bg="white"
      position="relative"
      overflow="hidden"
      onMouseMove={(e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        setMouse({ x, y });
      }}
    >
      {/* Background */}

      <MotionBox
        
        position="absolute"
        left="-10%"
        top="20%"
        w="30rem"
        h="30rem"
        borderRadius="50%"
        bg="#5A8DFF"
        opacity={0.15}
        filter="blur(120px)"
        animate={{
          x: mouse.x * 70,
          y: mouse.y * 70
        }}
        transition={{
          type: 'spring',
          stiffness: 20,
          damping: 20
        }}
      />

      {/* Heading */}

      <Box
        position="relative"
        top="100px"
      >
        <Text
          color="#2E5DBD"
          letterSpacing="3px"
          fontWeight="600"
          pl={{md:'80px', base:'3.5rem'}}
        >
          MY JOURNEY
        </Text>
      </Box>

      {/* Timeline */}

      <Box
        _before={{
            content: '""',
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            w: "2px",
            bg: "gray.200",
            transform: "translateX(-50%)",
        }}
      />

      {/* 2013 */}

      <Flex
        position="absolute"
        top="10rem"
        left="15%"
        w="70%"
        justify="space-between"
      >
        <Box w="40%">
          <Heading
            fontFamily="Didot"
            fontSize={yearFontSize}
            fontWeight="300"
            color="#2E5DBD"
          >
            2013
          </Heading>

          <Heading
            mt={3}
            fontSize="2xl"
            fontWeight="600"
          >
            Attended College
          </Heading>

          <Text
            mt={3}
            color="gray.600"
            lineHeight="1.9"
          >
            Discovered programming and quickly became fascinated by
            problem solving and creating things from scratch.
          </Text>
        </Box>

        <Box
          w="18px"
          h="18px"
          bg="#2E5DBD"
          borderRadius="50%"
          mt={{md: '2rem',base:'1rem'}}
          display={{md:"block", base:"none"}}

        />

        <Box w="40%" />
      </Flex>

      {/* 2018 */}

      <Flex
        position="absolute"
        top={{xl:"15rem", md:"13rem", base:"10rem"}}
        left="15%"
        w="70%"
        justify="space-between"
      >
        <Box w="40%" />

        <Box
          display={{md:"block", base:"none"}}
          w="18px"
          h="18px"
          bg="#2E5DBD"
          borderRadius="50%"
          mt={{md: '2rem',base:'1rem'}}
        />

        <Box w="40%">
          <Heading
            fontFamily="Didot"
            fontSize={yearFontSize}
            fontWeight="300"
            color="#2E5DBD"
          >
            2018
          </Heading>

          {isDesktop ? 
            <Heading
              mt={3}
              fontSize="2xl"
              fontWeight="600"
            >
              Working for a Logistics Company
            </Heading> :
            <Heading
              mt={3}
              fontSize="2xl"
              fontWeight="600"
            >
              Logistics
            </Heading>
          }

          <Text
            mt={3}
            color="gray.600"
            lineHeight="1.9"
          >
            Graduated with a Computer Science degree and began working
            as a software engineer at a large company.
          </Text>
        </Box>
      </Flex>

      {/* 2022 */}

      <Flex
        position="relative"
        top={{xl:"23rem", md:"30rem",base:"39rem"}}
        left="15%"
        w="70%"
        justify="space-between"
      >
        <Box w="40%">
          <Heading
            fontFamily="Didot"
            fontSize={yearFontSize}
            fontWeight="300"
            color="#2E5DBD"
          >
            2022
          </Heading>

          <Heading
            mt={3}
            fontSize="2xl"
            fontWeight="600"
          >
            Teaching Abroad
          </Heading>

          <Text
            mt={3}
            color="gray.600"
            lineHeight="1.9"
          >
            Moved to Thailand and discovered
            a passion for education.
          </Text>
        </Box>

        <Box
          display={{md:"block", base:"none"}}

          w="18px"
          h="18px"
          bg="#2E5DBD"
          borderRadius="50%"
          mt={{md: '2rem',base:'1rem'}}
        />

        <Box w="40%" />
      </Flex>

      {/* Today */}

      <Flex
        position="absolute"
        top={{xl:"32rem", base:"38rem"}}
        left="15%"
        w="70%"
        justify="space-between"
      >
        <Box w="40%" />

        <Box
          display={{md:"block", base:"none"}}
          w="18px"
          h="18px"
          bg="#2E5DBD"
          borderRadius="50%"
          mt={{md: '2rem',base:'1rem'}}
        />

        <Box w="40%">
          <Heading
            fontFamily="Didot"
            fontSize={{md:'3rem', base:'2rem'}}
            fontWeight="300"
            color="#2E5DBD"
          >
            TODAY
          </Heading>

          <Heading
            mt={3}
            fontSize="2xl"
            fontWeight="600"
          >
            Educator
          </Heading>

          <Text
            mt={3}
            color="gray.600"
            lineHeight="1.9"
          >
            Combining software engineering, education, and design to
            create meaningful learning experiences.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}