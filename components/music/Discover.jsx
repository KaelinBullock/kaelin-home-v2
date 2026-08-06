import { useDispatch, useSelector } from 'react-redux';

import Error from '../music/Error';
import { selectGenreListId } from '../../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../../redux/services/shazamCore';
import { genres } from '../assets/constants';
import { Box, Heading, Select, useColorModeValue } from '@chakra-ui/react';

import SongCard from '../music/SongCard';
import Layout from '../layouts/animation-layout';

const Discover = () => {

  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
  const color = useColorModeValue('black', 'white');

  // eslint-disable-next-line no-console
  if (isFetching){ console.log('is fetching..');}

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <Layout>
    <Box display='flex' flexDir='column' px={4}>
      <Box w='full' display='flex' justifyContent={{base:'center', md:'space-between'}} alignItems='center' mb={10} pr={{base:'none', md:'1rem'}} flexDir={{base:'column', md:'row'}}>
        <Heading as='h2' fontWeight='bold' fontSize='1.875rem' lineHeight='2.25rem' color={color} textAlign={{base:'center', md:'left'}}  p={{base:'20px', sm:'none'}} pl={0}>Discover {genreTitle}</Heading>
        <Select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          backgroundColor='black'
          color='gray.300'
          fontSize='.875rem'
          lineHeight='1.25rem' 
          borderRadius='.5rem'
          w='150px'
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </Select>
      </Box>

      <Box display='flex' flexWrap='wrap' justifyContent='center' gap={8}>
        {data?.map((song, i) => (
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
    </Layout>
  );
};

export default Discover;