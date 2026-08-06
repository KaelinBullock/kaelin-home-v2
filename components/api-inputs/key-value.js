import { Box, Heading } from '@chakra-ui/react';


const KeyValue = () => {
   return (
      <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
         <Heading fontSize='1.375rem'  w='120px'>Key:</Heading> 
         <Heading fontSize='1.375rem'>Value:</Heading>
      </Box>
   );
};

export default KeyValue;