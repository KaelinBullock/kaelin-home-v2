import React from 'react';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
import { Box, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <Box padding={4} display='flex' flexDir='column'  w='250px' text={4} backgroundColor={useColorModeValue('#ffffff40','whiteAlpha.100')} borderRadius='.5rem' cursor='pointer'>
      <Box position='relative' w='full' h='14rem' _groupActive={true} className="relative w-full h-56 group">
        <Box position='absolute' inset={0} justifyContent='center' alignItems='center' backgroundColor={useColorModeValue('white','black')} opacity='.75' rounded='.5rem' display='none' sx={activeSong?.title === song?.title ? {display:'flex'} : {display: 'none', _groupHover:{display:'flex'}}} _groupHover={{display:'flex'}} >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </Box>
        <Image alt="song_img" src={song.images?.coverart} w='full' h='full' rounded='.5rem' className="w-full h-full rounded-lg" />
      </Box>

      <Box mt={4} display='flex' flexDirection='column' className="mt-4 flex flex-col">
        <Text fontWeight='semibold' fontSize='1.25rem' lineHeight='1.75rem' color='white' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`} color={useColorModeValue('black', 'white')} _hover={{textDecoration:'none'}}>
            {song.title}
          </Link>
        </Text>
        <Text fontSize='.875rem' color={useColorModeValue('black', 'white')} textColor={useColorModeValue('black', 'white')} lineHeight='1.25rem' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' mt={1} className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[1]?.adamid}` : '/top-artists'} color={useColorModeValue('black', 'white')} _hover={{textDecoration:'none'}}>
            {song.subtitle}
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SongCard;
