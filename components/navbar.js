import { forwardRef } from 'react';
import NextLink from 'next/link';
import Logo from './logo';

import {
  Box,
  Flex,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

MenuLink.displayName = 'MenuLink';

const NavItem = ({ number, title, subtitle, active = false, sectionId }) => (
    <Box 
      minW="115px"
      cursor="pointer"
      onClick={() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
        });
      }}
    >
      <Text
        color="#2E5DBD"
        fontWeight="700"
        fontSize="18px"
      >
        {number}
      </Text>

      <Text
        mt={1}
        fontWeight="600"
        fontSize="20px"
        letterSpacing="1px"
        textTransform="uppercase"
      >
        {title}
      </Text>

      <Text
        mt={1}
        color="gray.500"
        fontSize="15px"
      >
        {active ? '●' : subtitle}
      </Text>
    </Box>
);

const Navbar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      bg="transparent"
      zIndex={100}
      px={0}
      pt={8}
      display="flex"
    >
      <Flex display="flex" align="flex-start" width="100%" justifyContent="space-evenly">

        {/* Logo */}

        <Box display="flex" h="100%" alignItems="center">
          <Logo />
        </Box>

        <Divider
          orientation="vertical"
          h="78px"
          mr={10}
          borderColor="gray.300"
        />

        <NavItem
          number="01"
          title="Cover"
          subtitle=""
          href="/"
          active
          sectionId="cover"
        />

        <Divider
          orientation="vertical"
          h="78px"
          mx={0}
          borderColor="gray.300"
        />

        <NavItem
          number="02"
          title="Story"
          subtitle="My background"
          href="/about"
          sectionId="story"
        />

        <Divider
          orientation="vertical"
          h="78px"
          mx={0}
          borderColor="gray.300"
        />

        <NavItem
          number="03"
          title="Journey"
          subtitle="My path"
          href="/journey"
          sectionId="journey"
        />

        <Divider
          orientation="vertical"
          h="78px"
          mx={0}
          borderColor="gray.300"
        />

        <NavItem
          number="04"
          title="Classroom"
          subtitle="Teaching philosophy"
          href="/classroom"
          sectionId="classroom"
        />

        <Divider
          orientation="vertical"
          h="78px"
          mx={0}
          borderColor="gray.300"
        />

        <NavItem
          number="05"
          title="Resume"
          subtitle="Experience"
          href="/resume"
          sectionId="resume"
        />

         <Divider
          orientation="vertical"
          h="78px"
          mx={0}
          borderColor="gray.300"
        /> 

        <NavItem
          number="06"
          title="Contact"
          subtitle="How to reach me"
          href="/works"
          cursor="pointer"
          bg="red"
          sectionId="contact"
          // onClick={() =>
          //   document.getElementById("contact")?.scrollIntoView({
          //     behavior: "smooth",
          //   })
          // }
        />

        <Box  />

        {/* <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            borderRadius="full"
            w="60px"
            h="60px"
            bg="white"
            borderColor="gray.400"
            _hover={{ bg: "gray.50" }}
          />

          <MenuList>
            <MenuItem as={MenuLink} href="/">
              Cover
            </MenuItem>

            <MenuItem as={MenuLink} href="/about">
              Story
            </MenuItem>

            <MenuItem as={MenuLink} href="/journey">
              Journey
            </MenuItem>

            <MenuItem as={MenuLink} href="/classroom">
              Classroom
            </MenuItem>

            <MenuItem as={MenuLink} href="/works">
              Projects
            </MenuItem>

            <MenuItem as={MenuLink} href="/resume">
              Resume
            </MenuItem>
          </MenuList>
        </Menu> */}

      </Flex>
    </Box>
  );
};

export default Navbar;