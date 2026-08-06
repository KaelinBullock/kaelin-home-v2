import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <Box display={{base:'none', sm:'flex'}} alignItems='center' className="hidden sm:flex flex-row items-center">
      <Button type="button" onClick={() => setSeekTime(appTime - 5)} 
        display='block'
        mx={4}
        textColor='white'
        bgColor='#383635'
        className="hidden lg:mr-4 lg:block text-white">
        -
      </Button>
      <Box pr={2} color='white'>{value === 0 ? '0:00' : getTime(value)}</Box>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <Box pl={2} color='white'>{max === 0 ? '0:00' : getTime(max)}</Box>
      <Button type="button" onClick={() => setSeekTime(appTime + 5)} 
        display='block'
        ml={4}
        textColor='white'
        className="hidden lg:ml-4 lg:block text-white"
        bgColor='#383635'>
        +
      </Button>
    </Box>
  );
};

export default Seekbar;
