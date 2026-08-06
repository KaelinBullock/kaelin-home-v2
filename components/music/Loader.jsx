import { Box, Image } from '@chakra-ui/react';

const Loader = ({ title }) => (
    <Box h='50vh' w='100vw' maxW='full' display='flex' justifyContent='center' alignItems='center' flexDir='column'>
      <Image src='/images/loader.svg' alt="loader" w={32} h={32} objectFit='contain' />
      <h1 className="font-bold text-2xl text-white mt-2">{title || 'Loading'}</h1>
    </Box>
);

export default Loader;