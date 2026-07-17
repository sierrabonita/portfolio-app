import type { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Footer: FC = () => (
  <Box as="footer" textAlign="center" pb={8}>
    <Text fontSize="sm" color="gray.500">
      &copy; {new Date().getFullYear()} {import.meta.env.VITE_USER_NAME || 'Your Name'}
    </Text>
  </Box>
);
