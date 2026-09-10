import {
  Box,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const timelineItems = [
  {
    year: '2013',
    title: 'Attended College',
    description:
      'Discovered programming and quickly became fascinated by problem solving and creating things from scratch.',
  },
  {
    year: '2018',
    title: 'Working for a Logistics Company',
    description:
      'Graduated with a Computer Science degree and began working as a software engineer at a large company.',
  },
  {
    year: '2022',
    title: 'Teaching Abroad',
    description:
      'Moved to Thailand and discovered a passion for education.',
  },
  {
    year: 'TODAY',
    title: 'Educator',
    description:
      'Combining software engineering, education, and design to create meaningful learning experiences.',
  },
];

export default function MobileJourney() {
  return (
    <Box
      position="relative"
      w="100%"
      minH="100vh"
      px={{
        base: '1.25rem',
        sm: '2rem',
        md: '4rem',
        lg: '6rem',
      }}
      py={{
        base: '4rem',
        md: '6rem',
      }}
      overflow="hidden"
    >
      {/* Header */}
      <Box
        maxW="1200px"
        mx="auto"
        mb={{
          base: '3rem',
          md: '5rem',
        }}
      >
        <Text
          color="#2E5DBD"
          fontWeight="700"
          letterSpacing="5px"
          fontSize={{
            base: 'sm',
            md: 'md',
          }}
        >
          MY JOURNEY
        </Text>
      </Box>

      {/* Timeline */}
      <Box
        position="relative"
        maxW="900px"
        mx="auto"
      >

        {/* Vertical timeline line */}
        <Box
          position="absolute"
          left={{
            base: '9px',
            md: '50%',
          }}
          top="0"
          bottom="0"
          w="2px"
          bg="gray.200"
          transform={{
            base: 'none',
            md: 'translateX(-50%)',
          }}
        />

        <VStack
          position="relative"
          align="stretch"
          spacing={{
            base: '3rem',
            sm: '4rem',
            md: '6rem',
          }}
        >

          {timelineItems.map((item, index) => (
            <Box
              key={item.year}
              position="relative"
              pl={{
                base: '3rem',
                md: 0,
              }}
            >

              {/* Timeline dot */}
              <Box
                position="absolute"
                left={{
                  base: '0px',
                  md: '50%',
                }}
                top={{
                  base: '0.4rem',
                  md: '1.5rem',
                }}
                w={{
                  base: '20px',
                  md: '28px',
                }}
                h={{
                  base: '20px',
                  md: '28px',
                }}
                borderRadius="full"
                bg="#2E5DBD"
                border="4px solid"
                borderColor="white"
                transform={{
                  base: 'none',
                  md: 'translateX(-50%)',
                }}
                zIndex={2}
              />

              {/* Content */}
              <Box
                w={{
                  base: '100%',
                  md: 'calc(50% - 4rem)',
                }}
                ml={{
                  base: 0,
                  md: index % 2 === 0 ? 0 : 'calc(50% + 4rem)',
                }}
                pr={{
                  base: 0,
                  md: index % 2 === 0 ? '2rem' : 0,
                }}
                pl={{
                  base: 0,
                  md: index % 2 === 0 ? 0 : '2rem',
                }}
              >

                {/* Year */}
                <Heading
                  fontFamily="Didot, Bodoni MT, serif"
                  fontWeight="400"
                  color="#2E5DBD"
                  fontSize={{
                    base: '3.5rem',
                    sm: '4rem',
                    md: '5rem',
                  }}
                  lineHeight="1"
                  mb={{
                    base: '0.75rem',
                    md: '1rem',
                  }}
                >
                  {item.year}
                </Heading>

                {/* Title */}
                <Heading
                  fontSize={{
                    base: 'xl',
                    sm: '2xl',
                    md: '2xl',
                  }}
                  lineHeight="1.25"
                  mb="0.75rem"
                  color="#111"
                >
                  {item.title}
                </Heading>

                {/* Description */}
                <Text
                  color="gray.500"
                  fontSize={{
                    base: 'md',
                    sm: 'lg',
                  }}
                  lineHeight={{
                    base: '1.8',
                    md: '1.9',
                  }}
                  maxW="480px"
                >
                  {item.description}
                </Text>

              </Box>
            </Box>
          ))}

        </VStack>
      </Box>
    </Box>
  );
}