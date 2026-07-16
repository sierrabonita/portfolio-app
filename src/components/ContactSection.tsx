import type { FC } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

export const ContactSection: FC = () => (
  <Box as="section" id="contact" bg="white" shadow="sm" rounded="2xl" p={8} mb={12}>
    <Heading as="h2" size="md" mb={4} display="none">
      Contact
    </Heading>
    <VStack gap={2}>
      <Text alignSelf="flex-start" fontWeight="bold" mb={2}>
        Contact
      </Text>
      <Box as={FaEnvelope} boxSize={8} color="gray.600" />
      <Text fontSize="sm">Contact Page</Text>
    </VStack>
  </Box>
);
