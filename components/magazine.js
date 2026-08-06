import { Box } from '@chakra-ui/react';

import MagazinePage from './magazine-page';

import Cover from '../components/cover';
import Story from '../components/story';

export default function Magazine() {
  return (
    <Box
        scrollSnapType="y mandatory"
      sx={{
        '& > section': {
          scrollSnapAlign: 'start'
        }
      }}
    >
      <MagazinePage>
        <Cover />
      </MagazinePage>

      <MagazinePage>
        <Story />
      </MagazinePage>
    </Box>
  );
}