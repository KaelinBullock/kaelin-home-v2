import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

const Track = ({ activeSong }) => {
  return (
  <Box display='flex' alignItems='center' px={4}>
    <motion.div
      animate={{
      rotate: [0, 360],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: 'loop'
      }}
    >
      <Image h={16} w={16} display={{base:'none', sm:'block'}} borderRadius='full' src={activeSong?.images?.coverart} alt="cover art" className="rounded-full"          style={ {zIndex:'3'}}/>
    </motion.div>
    <Box display='flex' flexDir='column' px={4} maxW='90%'>
      <Text
        overflow='ellipsis'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
        fontWeight='bold'
        fontSize='1.25rem'
        lineHeight='1.75rem'
        color='white'
        zIndex={-20}
      >
          {activeSong?.title ? activeSong?.title : 'No active Song'}
      </Text>
      <Text
        overflow='hidden'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
        color='gray.300' className="truncate text-gray-300"
      >
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </Text>
    </Box>
  </Box>
  );
};

export default Track;
