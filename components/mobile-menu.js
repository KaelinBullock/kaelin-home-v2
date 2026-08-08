import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function MobileMenu() {
  return (
   <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      bg="transparent"
      zIndex={100}
      px={5}
      pt={8}
      display="flex"
   >
   <Menu>
      <MenuButton
         as={IconButton}
         icon={<HamburgerIcon boxSize={10}/>}
         variant="ghost"
         aria-label="Navigation"
      />
      <MenuList>
         <MenuItem onClick={() =>
            document.getElementById('cover')?.scrollIntoView({
            behavior: 'smooth',
            })
         }>
            Cover
         </MenuItem>
         <MenuItem onClick={() =>
            document.getElementById('story')?.scrollIntoView({
            behavior: 'smooth',
            })
         }>
            Story
         </MenuItem>
         <MenuItem onClick={() =>
            document.getElementById('journey')?.scrollIntoView({
            behavior: 'smooth',
            })
         }>
            Journey
         </MenuItem>
         <MenuItem onClick={() =>
            document.getElementById('classroom')?.scrollIntoView({
            behavior: 'smooth',
            })
         }>
            Classroom
         </MenuItem>
         <MenuItem onClick={() =>
            document.getElementById('resume')?.scrollIntoView({
            behavior: 'smooth',
            })
         }>
            Resume
         </MenuItem>
         <MenuItem onClick={() =>
            document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
            })
         }>
            Contact
         </MenuItem>
      </MenuList>
   </Menu>
   </Box>
  );
}