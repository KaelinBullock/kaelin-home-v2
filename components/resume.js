import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Icon
} from '@chakra-ui/react';

import {
  FaLightbulb,
  FaUsers,
  FaLaptop,
  FaGlobe
} from 'react-icons/fa';

export default function Resume() {
  return (
    <Box
      bg="transparent"
      h={{xl:'100vh', md:'150vh',sm:'260vh',base:'260vh'}}
      pl={{md:'80px', base:'3.5rem'}}
      py="40px"
      position="relative"
    >
      <HStack
        justify="space-between"
        align="start"
        mb={14}
      >

        <Box>

          <HStack spacing={5}>
            <Box>

              <Heading
                size="lg"
                color="#2E5DBD"
              >
                Resume
              </Heading>

              <Text color="gray.500">
                Experience
              </Text>

            </Box>

          </HStack>

        </Box>
      </HStack>

      {/* Main Grid */}

      <Grid
        templateColumns={{xl:'1fr 1.5fr 1.6fr 1fr', md:"1fr 1fr", base:'1fr'}}
        h="70vh"
      >
        <GridItem
          pr={10}
        >
          <Heading
            size="md"
            color="#2E5DBD"
            mb={10}
          >
            EDUCATION
          </Heading>

          <VStack
            align="start"
            spacing={5}
          >
            <Text
              color="gray.500"
              fontWeight="600"
            >
              2014 – 2018
            </Text>

            <Heading size="sm">
              Bachelor of Science
              <br />
              in Computer Science
            </Heading>

            <Text color="gray.600">
              University of Arkansas
            </Text>
          </VStack>

          <Divider display={{md:'block', base:'none'}} my={10} />

          <Heading
            size="md"
            color="#2E5DBD"
            mb={6}
          >
            CERTIFICATION
          </Heading>

          <VStack
            align="start"
            spacing={3}
          >
            <Heading size="sm">
              U.S. Teaching Certificate
            </Heading>

            <Text color="gray.600">
              Morland University
            </Text>

            <Text color="gray.500">
              (In Progress for Computer Science and ESL)
            </Text>
          </VStack>

          <Text
            mt={12}
            color="gray.600"
            lineHeight="2"
          >
            Strong technical foundation
            combined with modern
            teaching practices.
          </Text>

        </GridItem>
        <GridItem
          px={{md:10, base:'0'}}
          pt={{md: 0, base:'2rem'}}
          borderLeft="1px solid"
          borderColor={{md:'gray.200', base:'transparent'}}
        >

          {/* Experience goes here */}
          <Heading
            size="md"
            color="#2E5DBD"
            mb={10}
          >
            TEACHING EXPERIENCE
          </Heading>

          <Box mb={14}>

            <Text
              color="gray.500"
              fontWeight="600"
            >
              2024 – PRESENT
            </Text>

            <Heading
              size="sm"
              mt={2}
            >
              English & ICT Teacher
            </Heading>

            <Text
              fontWeight="600"
              mb={4}
            >
              International School
              Bangkok
            </Text>

            <Text
              color="gray.600"
              lineHeight="2"
            >
              Teach English and Computer
              Science to middle and
              high school students.
            </Text>

            <Text
              mt={4}
              color="gray.600"
              lineHeight="2"
            >
              Design project-based
              learning experiences
              that build creativity,
              problem solving,
              and digital literacy.
            </Text>
          </Box>

          <Heading
            size="sm"
            color="#2E5DBD"
            mb={5}
          >
            PREVIOUS EXPERIENCE
          </Heading>

          <Text
            color="gray.500"
            fontWeight="600"
          >
            2018 – 2022
          </Text>

          <Heading
            size="sm"
            mt={2}
          >
            Software Engineer
          </Heading>

          <Text
            mb={4}
          >
            J.B. Hunt
          </Text>

          <Text
            color="gray.600"
            lineHeight="2"
          >
            Built enterprise
            applications using
            Java, Spring Boot,
            and React.
          </Text>

        </GridItem>
        <GridItem
          px={{xl:10,md: 0, base: 0 }}
          pt={{md:0, base:'2rem'}}
          borderLeft={{xl: "1px solid", base: "none"}}
          borderColor={{md:'gray.200', base:'transparent'}}
        >
          <Heading
            size="md"
            color="#2E5DBD"
            mb={10}
          >
            WHAT I BRING TO THE CLASSROOM
          </Heading>

          <VStack
            align="stretch"
            spacing={12}
          >

            <HStack
              align="start"
              spacing={5}
            >
              <Icon
                as={FaLightbulb}
                boxSize={8}
                color="#2E5DBD"
                mt={1}
              />

              <Box>
                <Heading size="sm">
                  Project-Based Learning
                </Heading>

                <Text
                  color="gray.600"
                  mt={2}
                  lineHeight="1.8"
                >
                  Hands-on projects that connect
                  technology to real-world
                  problems.
                </Text>
              </Box>
            </HStack>

            <HStack
              align="start"
              spacing={5}
            >
              <Icon
                as={FaUsers}
                boxSize={8}
                color="#2E5DBD"
                mt={1}
              />

              <Box>
                <Heading size="sm">
                  Student-Centered
                </Heading>

                <Text
                  color="gray.600"
                  mt={2}
                  lineHeight="1.8"
                >
                  Lessons designed around
                  student interests and
                  growth.
                </Text>
              </Box>
            </HStack>

            <HStack
              align="start"
              spacing={5}
            >
              <Icon
                as={FaLaptop}
                boxSize={8}
                color="#2E5DBD"
                mt={1}
              />

              <Box>
                <Heading size="sm">
                  Technology Integration
                </Heading>

                <Text
                  color="gray.600"
                  mt={2}
                  lineHeight="1.8"
                >
                  Using the right tools to
                  enhance learning and
                  engagement.
                </Text>
              </Box>
            </HStack>

            <HStack
              align="start"
              spacing={5}
            >
              <Icon
                as={FaGlobe}
                boxSize={8}
                color="#2E5DBD"
                mt={1}
              />

              <Box>
                <Heading size="sm">
                  Global Mindset
                </Heading>

                <Text
                  color="gray.600"
                  mt={2}
                  lineHeight="1.8"
                >
                  Encouraging open-mindedness,
                  empathy, and cultural
                  awareness.
                </Text>
              </Box>
            </HStack>

          </VStack>

        </GridItem>
        <GridItem
          px={{md:10,base: 0 }}
          pt={{md:0,base:'2rem'}}          borderLeft="1px solid"
          borderColor={{md:'gray.200', base:'transparent'}}
        >
          <Heading
            size="md"
            color="#2E5DBD"
            mb={10}
          >
            CLASSROOM TOOLS
          </Heading>

          <VStack
            align="start"
            spacing={5}
            mb={16}
          >
            <Text>• Google Classroom</Text>
            <Text>• Canva</Text>
            <Text>• Code.org</Text>
            <Text>• App Lab</Text>
            <Text>• Scratch</Text>
            <Text>• Microsoft Office</Text>
            <Text>• Google Workspace</Text>
            <Text>• Figma</Text>
          </VStack>

          <Box
            mt={12}
          >
          </Box>

        </GridItem>

      </Grid>
    </Box>
  );
}