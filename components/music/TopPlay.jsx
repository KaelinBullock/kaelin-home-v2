/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';

import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';


const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {

  const colorMode = useColorModeValue({backgroundColor:'#7c60ce'},{backgroundColor:'#4c426e'});

  return (
  <Box 
    w='full' 
    display='flex' 
    flexDir='row' 
    alignItems='center' 
    _hover={{
      background: '#4c426e',
      color: 'teal.500',
    }} 
    style={activeSong?.title === song?.title ? colorMode : {backgroundColor:'transparent'}}
    py={2}
    p={4}
    borderRadius='.5rem'
    cursor='pointer'
    mb={2}>
    <Heading as='h3' fontWeight='bold' fontSize='1rem' lineHeight='1.5rem' textColor={useColorModeValue('black', 'white')} mr={3}>{i + 1}.</Heading>
    <Box flex='1 1 0%' display='flex' flexDir='row' justifyContent='space-between' alignItems='center'>
      <Image w={20} h={20} borderRadius='.5rem' src={song?.images?.coverart} alt={song?.title} />
      <Box flex='1 1 0%' display='flex' flexDir='column' justifyContent='center' mx={3}>
          <Text fontSize='1.25rem' lineHeight='1.75rem' fontWeight='bold' textColor={useColorModeValue('black', 'white')}>
            {song?.title}
          </Text>
      </Box>
    </Box>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </Box>
  );
};

const validateSongData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useGetTopChartsQuery();
  let tempData = [];

  if(typeof data !== 'undefined') {
    for(let i = 0; i < data.length; i++) {
      if(typeof data[i]?.hub?.actions !== 'undefined') {
        tempData.push(data[i]);
      }
    }
  }
  return tempData;
};

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  let data  = validateSongData();
  const divRef = useRef(null);

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <Box ref={divRef} ml={0} mb={6} flex={1} maxW='full' display='flex' flexDir='column'>
      <Box w='full' display='flex' flexDir='column'>
        <Box w='full' display='flex' flexDir='row' justifyContent='space-between' alignItems='center'>
          <Heading as='h2' textColor={useColorModeValue('black', 'white')} fontWeight='bold' fontSize='1.5rem' lineHeight='1.5rem' mb={4}>Top Charts</Heading>
        </Box>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default TopPlay;
