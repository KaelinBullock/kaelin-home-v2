import React from 'react';

import { Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Test = () => {

  return (
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      >
        Im Dizzy!
      </motion.div>
    </Container>
  );
};

export default Test;
