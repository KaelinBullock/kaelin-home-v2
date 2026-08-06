import { motion } from 'framer-motion';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nextSong, prevSong, playPause } from '../../../redux/features/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';
import { Box } from '@chakra-ui/react';

const MusicPlayer = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  };
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length){ dispatch(playPause(true)); 
      
      if(typeof state !== 'undefined')
        // eslint-disable-next-line no-console
        console.log(state);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ display: 'flex', flexDirection:'row', width:'100vw', maxWidth:'100vw'}}
    >
      <Box position='relative'  w='full' display='flex' justifyContent='space-between' alignContent='center' alignItems='center' opacity='1'>
        <Box display='flex' alignItems='center' justifyContent='flex-start' overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap' w={{base:'50%', md:'35%', lg:'fit-content'}} minWidth='15%'>
          <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong}/>
        </Box>
        <Box display='flex' flexDir='column' alignSelf='center' alignItems='center' w={{base:'50%', md:'35%'}} ml={{base:'-35rem', sm:'0', md:'-4rem', lg:'-20rem'}}>
          <Controls
            isPlaying={isPlaying}
            isActive={isActive}
            repeat={repeat}
            setRepeat={setRepeat}
            shuffle={shuffle}
            setShuffle={setShuffle}
            currentSongs={currentSongs}
            handlePlayPause={handlePlayPause}
            handlePrevSong={handlePrevSong}
            handleNextSong={handleNextSong}
          />
          <Seekbar
            value={appTime}
            min="0"
            max={duration}
            onInput={(event) => setSeekTime(event.target.value)}
            setSeekTime={setSeekTime}
            appTime={appTime}
          />
          <Player
            activeSong={activeSong}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            currentIndex={currentIndex}
            onEnded={handleNextSong}
            onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
            onLoadedData={(event) => setDuration(event.target.duration)}
          /> 
      </Box>
        <Box display={{base: 'none', md: 'flex'}} mr={8} alignSelf=''>
          <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
        </Box>
      </Box>
   </motion.article>
  );
};

export default MusicPlayer;