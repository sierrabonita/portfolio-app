import type { FC } from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const AboutSection: FC = () => (
  <Box
    as="section"
    id="about"
    bgImage="linear-gradient(rgba(244, 243, 240, 0.85), rgba(244, 243, 240, 0.85)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200')"
    bgSize="cover"
    backgroundPosition="center"
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
);
