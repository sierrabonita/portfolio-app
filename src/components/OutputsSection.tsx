import type { FC } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const OutputsSection: FC = () => (
  <Box as="section" id="outputs" bg="white" shadow="sm" rounded="2xl" p={8} mb={8}>
    <Heading as="h2" size="md" mb={4} display="none">
      Outputs
    </Heading>
    <VStack gap={2}>
      <Text alignSelf="flex-start" fontWeight="bold" mb={2}>
        Outputs
      </Text>
      <Box as={FaGithub} boxSize={8} />
      <Text fontSize="sm">GitHub</Text>
    </VStack>
  </Box>
);
