import {
  ChakraProvider,
  defaultSystem,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Link,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { FaPython, FaAws, FaDocker, FaGitAlt, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiGo, SiFastapi, SiGin } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const App = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg="#F4F3F0" color="gray.800" minH="100vh" py={8}>
        <Container maxW="container.lg" px={4}>
          {/* Header */}
          <Flex as="header" justify="space-between" align="center" mb={12}>
            <Heading as="h1" size="md" fontWeight="normal">
              Yamada Taro - Web Engineer
            </Heading>
            <HStack as="nav" spacing={6} fontSize="sm">
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#works">Works</Link>
              <Link href="#outputs">Outputs</Link>
              <Link href="#contact">Contact</Link>
            </HStack>
          </Flex>

          {/* About Me Section */}
          <Box
            as="section"
            id="about"
            bgImage="linear-gradient(rgba(244, 243, 240, 0.85), rgba(244, 243, 240, 0.85)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200')"
            bgSize="cover"
            bgPosition="center"
            rounded="2xl"
            p={8}
            mb={8}
            position="relative"
            overflow="hidden"
            shadow="sm"
          >
            <Heading as="h2" size="md" mb={6}>
              About Me
            </Heading>
            <Flex gap={6} align="center" position="relative" zIndex={1}>
              <Image
                src="https://i.pravatar.cc/150?img=68"
                alt="Profile avatar"
                rounded="full"
                boxSize="100px"
                objectFit="cover"
              />
              <Text fontSize="sm" lineHeight="tall" maxW={{ base: '100%', md: '500px' }}>
                ダミーテキストです。
                <br />
                ダミーテキストです。ダミーテキストです。ダミーテキストです。
                <br />
                ダミーテキストです。ダミーテキストです。ダミーテキストです。
                <br />
                ダミーテキストです。ダミーテキストです。
              </Text>
            </Flex>
          </Box>

          {/* Skills Section */}
          <Box as="section" id="skills" bg="white" shadow="sm" rounded="2xl" p={8} mb={8}>
            <Heading as="h2" size="md" mb={8}>
              Skills
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacingY={8} spacingX={4} mb={8}>
              <HStack>
                <Box as={FaPython} boxSize={6} color="blue.500" />
                <Text fontSize="sm">python</Text>
              </HStack>
              <HStack>
                <Box as={SiGo} boxSize={6} color="blue.400" />
                <Text fontSize="sm">GO</Text>
              </HStack>
              <HStack>
                <Box as={SiFastapi} boxSize={6} color="teal.500" />
                <Text fontSize="sm">FastAPI</Text>
              </HStack>
              <HStack>
                <Box as={SiGin} boxSize={6} color="blue.300" />
                <Text fontSize="sm">Gin</Text>
              </HStack>
              <HStack>
                <Box as={FaPython} boxSize={6} color="blue.500" />
                <Text fontSize="sm">python</Text>
              </HStack>
              <HStack>
                <Box as={FaDocker} boxSize={6} color="blue.500" />
                <Text fontSize="sm">docker</Text>
              </HStack>
              <HStack>
                <Box as={FaDocker} boxSize={6} color="blue.500" />
                <Text fontSize="sm">docker</Text>
              </HStack>
              <HStack>
                <Box as={FaAws} boxSize={6} color="orange.400" />
                <Text fontSize="sm">AWS</Text>
              </HStack>
              <HStack>
                <Box as={FaDocker} boxSize={6} color="blue.500" />
                <Text fontSize="sm">docker</Text>
              </HStack>
              <HStack>
                <Box as={FaGitAlt} boxSize={6} color="red.500" />
                <Text fontSize="sm">git</Text>
              </HStack>
              <HStack>
                <Box as={VscVscode} boxSize={6} color="blue.500" />
                <Text fontSize="sm">VS Code</Text>
              </HStack>
            </SimpleGrid>
            <Flex justify="flex-end">
              <Link color="blue.600" fontWeight="bold" fontSize="sm">
                View Detailed Skills
              </Link>
            </Flex>
          </Box>

          {/* Works / Projects Section */}
          <Box as="section" id="works" bg="white" shadow="sm" rounded="2xl" p={8} mb={8}>
            <Heading as="h2" size="md" mb={6}>
              Works / Projects（Pick up）
            </Heading>

            <Box mb={8}>
              <Heading as="h3" size="sm" fontWeight="normal" mb={4}>
                Personal Projects
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {/* Project Card 1 */}
                <Box borderWidth="1px" rounded="lg" overflow="hidden">
                  <Image src="https://picsum.photos/seed/proj1/300/150" alt="UI Sketch" w="100%" />
                  <Box p={4}>
                    <Text fontWeight="bold" fontSize="sm" mb={1}>
                      個人開発1
                    </Text>
                    <Text fontSize="xs" color="gray.600" mb={3}>
                      成果物の説明が入ります...
                    </Text>
                    <Flex justify="space-between" align="center">
                      <HStack spacing={2}>
                        <Box
                          as="span"
                          bg="gray.100"
                          color="gray.700"
                          px={2}
                          py={0.5}
                          rounded="md"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          Python
                        </Box>
                        <Box
                          as="span"
                          bg="gray.100"
                          color="gray.700"
                          px={2}
                          py={0.5}
                          rounded="md"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          Gin
                        </Box>
                      </HStack>
                      <Link color="blue.600" fontSize="xs">
                        Detail
                      </Link>
                    </Flex>
                  </Box>
                </Box>
                {/* Project Card 2 */}
                <Box borderWidth="1px" rounded="lg" overflow="hidden">
                  <Image src="https://picsum.photos/seed/proj2/300/150" alt="Task App" w="100%" />
                  <Box p={4}>
                    <Text fontWeight="bold" fontSize="sm" mb={1}>
                      個人開発2
                    </Text>
                    <Text fontSize="xs" color="gray.600" mb={3}>
                      成果物の説明が入ります...
                    </Text>
                    <Flex justify="space-between" align="center">
                      <HStack spacing={2}>
                        <Box
                          as="span"
                          bg="gray.100"
                          color="gray.700"
                          px={2}
                          py={0.5}
                          rounded="md"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          Python
                        </Box>
                        <Box
                          as="span"
                          bg="gray.100"
                          color="gray.700"
                          px={2}
                          py={0.5}
                          rounded="md"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          Gin
                        </Box>
                        <Box
                          as="span"
                          bg="gray.100"
                          color="gray.700"
                          px={2}
                          py={0.5}
                          rounded="md"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          Docker
                        </Box>
                      </HStack>
                      <Link color="blue.600" fontSize="xs">
                        Detail
                      </Link>
                    </Flex>
                  </Box>
                </Box>
                {/* Project Card 3 */}
                <Box borderWidth="1px" rounded="lg" overflow="hidden">
                  <Image
                    src="https://picsum.photos/seed/proj3/300/150"
                    alt="Weather App"
                    w="100%"
                  />
                  <Box p={4}>
                    <Text fontWeight="bold" fontSize="sm" mb={1}>
                      個人開発3
                    </Text>
                    <Text fontSize="xs" color="gray.600" mb={3}>
                      成果物の説明が入ります...
                    </Text>
                    <Flex justify="space-between" align="center">
                      <HStack spacing={2}>
                        <Box
                          as="span"
                          bg="gray.100"
                          color="gray.700"
                          px={2}
                          py={0.5}
                          rounded="md"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          Python
                        </Box>
                        <Box
                          as="span"
                          bg="gray.100"
                          color="gray.700"
                          px={2}
                          py={0.5}
                          rounded="md"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          Gin
                        </Box>
                      </HStack>
                      <Link color="blue.600" fontSize="xs">
                        Detail
                      </Link>
                    </Flex>
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>

            <Box mb={6}>
              {/* Commercial Projects */}
              <Heading as="h3" size="md" fontWeight="normal" mb={4}>
                業務委託・受託開発
              </Heading>
              <Box as="ul" fontSize="sm" pl={6}>
                <Box as="li" display="list-item" mb={2}>
                  <Link color="gray.600">ECサイト開発: Go, React, AWS. Detail</Link>
                </Box>
                <Box as="li" display="list-item" mb={2}>
                  <Link color="gray.600">
                    EC Site Development:
                    リレーションファースト化して、開発環境に開発を組み込み、ファケーションとした応難理します。{' '}
                  </Link>
                </Box>
                <Box as="li" display="list-item" mb={2}>
                  <Link color="gray.600">EC Store Development: Go, React, AWS. Detail</Link>
                </Box>
                <Box as="li" display="list-item" mb={2}>
                  <Link color="gray.600">EC Site Development: Go, React, AWS. Detail</Link>
                </Box>
                <Box as="li" display="list-item">
                  <Link color="gray.600">EC Site Development: Go, React, AWS. Detail</Link>
                </Box>
              </Box>
            </Box>

            <Button
              w="100%"
              bg="#788C9C"
              color="white"
              _hover={{ bg: '#627685' }}
              fontWeight="normal"
            >
              View All Works
            </Button>
          </Box>

          {/* Outputs Section */}
          <Box as="section" id="outputs" bg="white" shadow="sm" rounded="2xl" p={8} mb={8}>
            <Heading as="h2" size="md" mb={4} display="none">
              Outputs
            </Heading>
            <VStack spacing={2}>
              <Text alignSelf="flex-start" fontWeight="bold" mb={2}>
                Outputs
              </Text>
              <Box as={FaGithub} boxSize={8} />
              <Text fontSize="sm">GitHub</Text>
            </VStack>
          </Box>

          {/* Contact Section */}
          <Box as="section" id="contact" bg="white" shadow="sm" rounded="2xl" p={8} mb={12}>
            <Heading as="h2" size="md" mb={4} display="none">
              Contact
            </Heading>
            <VStack spacing={2}>
              <Text alignSelf="flex-start" fontWeight="bold" mb={2}>
                Contact
              </Text>
              <Box as={FaEnvelope} boxSize={8} color="gray.600" />
              <Text fontSize="sm">Contact Page</Text>
            </VStack>
          </Box>

          {/* Footer */}
          <Box as="footer" textAlign="center" pb={8}>
            <Text fontSize="sm" color="gray.500">
              © 2024 Yamada Taro
            </Text>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};
