import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FiSearch } from 'react-icons/fi';
import { Box, Input } from '@chakra-ui/react';
import { setSearchTerm } from '../../redux/features/playerSlice';


const Searchbar = () => {
  const dispatch = useDispatch();

  const [searchTermTemp, setSearchTermTemp] = useState('');

  const handleSubmit = () => {
    if(searchTermTemp) {
      dispatch(setSearchTerm(searchTermTemp));
      window.history.replaceState(null, 'music', `/works/music?search=${searchTermTemp}`);
    } else {
      dispatch(setSearchTerm(''));
    }
  };

  return (
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
      }}>
      <Box display='flex' flexDir='row' justifyContent='flex-start' alignItems='center' className="flex flex-row justify-start items-center">
        <Box w={5} h={5} ml={4}>
          <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        </Box>
        <Input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          value={searchTermTemp}
          onChange={(e) => setSearchTermTemp(e.target.value)}
          // onClick={handleSubmit}
          outline='none'
          flex='1'
          border='none'
          color='gray.500'
          fontSize='1rem'
          lineHeight='1.5rem'
          variant='unstyled'
          p={4}
        />
      </Box>
      </form>
  );
};

export default Searchbar;
