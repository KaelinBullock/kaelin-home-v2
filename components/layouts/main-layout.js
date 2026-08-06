import Head from 'next/head';
import Navbar from '../navbar.js';
import { Box, Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import NoSsr from '../no-ssr.js';
import MobileMenu from '../mobile-menu.js';

const Layout = ({ children, router }) => {
  const isDesktop = useBreakpointValue({
    base: false,
    xl: true,
  });
  return (
    <Box as="main">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kaelin&#39;s Homepage</title>
        </Head>

        {isDesktop ?
        <Flex>
          <Navbar maxW="full" w="100%" path={router.asPath} />
        </Flex> :
        <MobileMenu/>
        }

        <Container maxW="100%" maxH="100%" p={0} overflow="hidden">
          <NoSsr>
              {/* <VoxelDog /> */}
          </NoSsr>
          {children}
        </Container>

    </Box>
  );
};

export default Layout;