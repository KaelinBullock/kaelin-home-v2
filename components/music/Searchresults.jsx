import React from 'react';
import { useSelector } from 'react-redux';

import { useGetSongsBySearchQuery } from '../../redux/services/shazamCore';
import Error from './Error';
import Loader from './Loader';
import SongCard from './SongCard';
import { Box, Heading } from '@chakra-ui/react';

const Search = ({term}) => {

  const { activeSong, isPlaying, searchTerm } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const songs = data?.tracks?.hits.map((song) => song.track);
  
  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <Box display='flex' flexDirection='column' className="flex flex-col">
      <Heading as='h2' fontWeight='bold' fontSize='1.875rem' lineHeight='2.25rem' textAlign='left' mt={4} mb={10} className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing Results: {term}
        </Heading>

      <Box display='flex' flexWrap='wrap' justifyContent='center' gap={8} className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Search;
