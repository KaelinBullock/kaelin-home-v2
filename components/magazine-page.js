import { Box } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion.create(Box);

export default function MagazinePage({ children, startScroll=0, ...props }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const rotateX = useTransform(
    scrollYProgress,
    [startScroll, 1],
    [0, -35]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.9]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -220]
  );

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [
      '0px 0px 0px rgba(0,0,0,0)',
      '0px 120px 220px rgba(0,0,0,.35)'
    ]
  );

  return (
    <Box
      ref={ref}
      {...props}
      w="100%"
      maxW="100vw"
      position="relative"
      style={{ perspective: 2500 }}
            padding={0}

    >
      <MotionBox
        h="100%"
        transformOrigin="top center"
        style={{
          rotateX,
          scale,
          y,
          boxShadow
        }}
      >
        {children}
      </MotionBox>
    </Box>
  );
}