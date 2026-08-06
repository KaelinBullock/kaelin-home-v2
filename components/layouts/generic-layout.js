import { motion } from 'framer-motion';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
};

const Layout = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
    <Box as="main">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kaelin&#39;s Homepage</title>
        </Head>
        <Container maxW="full">
          {children}
        </Container>

    </Box>
    </motion.article>
  );
};

export default Layout;