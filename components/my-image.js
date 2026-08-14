import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Image,
} from '@chakra-ui/react';

const MotionImage = motion.create(Image);
const MotionBox = motion.create(Box);

export default function MyImage() {
  const [mouse, setMouse] = React.useState({
    x: 0,
    y: 0
  });
  return (
    <Box 
      w="100%"
      display="flex"
      justifyContent="center"
        onMouseMove={(e) => {
          const x = e.clientX / window.innerWidth - 0.5;
          const y = e.clientY / window.innerHeight - 0.5;
        setMouse({ x, y });
      }}
    >
      <MotionImage
        src="/images/heart.webp"
        alt="Portrait"
        position="absolute"
        bottom={{base:'-.5rem', md:'-.4rem', xl:'0rem'}}
        h={{xl:'40rem', md:'40rem', base:'26rem'}}
        objectFit="contain"
        zIndex={2}
        clipPath={{md:'inset(0 0 0 0)', xl:'inset(0 0 0 0)', base:'inset(0 0 0 0)'}}

         animate={{
            y:[0,-10,0]
         }}
         transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
         }}
      />

          <MotionBox
            display={{md:'block',base:'none'}}
            position="absolute"
            top="10%"
            left="65%"
            transform="translateX(-50%)"
            w="22rem"
            h="22rem"
            bg="red"
            borderRadius="50%"
            opacity={0.45}
            filter="blur(120px)"
            zIndex={1}
            animate={{
              x: mouse.x * 500,
              y: mouse.y * 500
            }}
            transition={{
              type: 'spring',
              stiffness: 30,
              damping: 20
            }}
          />

          <MotionBox
            display={{md:'block',base:'none'}}
            position="relative"
            top="55%"
            right="30%"
            w="30rem"
            h="22rem"
            borderRadius="50%"
            bg="blue"
            opacity={0.5}
            filter="blur(110px)"
            transform="rotate(-25deg)"
            zIndex={1}
            animate={{
              x: mouse.x * 80,
              y: mouse.y * 80
            }}
            transition={{
              type: 'spring',
              stiffness: 25,
              damping: 20
            }}
          />

          {/* Blob 3 purple */}
          <MotionBox
            display={{md:'block',base:'none'}}

            position="absolute"
            right="10%"
            top="55%"
            w="22rem"
            h="22rem"
            borderRadius="50%"
            bg="purple"
            opacity={0.55}
            filter="blur(100px)"
            transform="rotate(35deg)"
            zIndex={1}
            animate={{
              x: mouse.x * 120,
              y: mouse.y * 120
            }}
            transition={{
              type: 'spring',
              stiffness: 20,
              damping: 18
            }}
          />
          
        </Box>
  );
}

