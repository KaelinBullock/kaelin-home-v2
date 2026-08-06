import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  // padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    (<Link 
    href="/" 
    scroll={false}>
      <LogoBox>
        <Text
          fontFamily="'Space Grotesk'"
          fontSize={{xl:'60px',lg:'30px'}}
          fontWeight="bold"
          color='#8E8E8E'
        >
          Kaelin B.
        </Text>
      </LogoBox>
    </Link>)
  );
};

export default Logo;
