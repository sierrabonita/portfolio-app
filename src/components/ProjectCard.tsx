import type { FC } from 'react';
import { Box, Flex, HStack, Image, Link, Text } from '@chakra-ui/react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: readonly string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  tags,
}) => (
  <Box borderWidth="1px" rounded="lg" overflow="hidden">
    <Image src={imageUrl} alt={imageAlt} w="100%" />
    <Box p={4}>
      <Text fontWeight="bold" fontSize="sm" mb={1}>
        {title}
      </Text>
      <Text fontSize="xs" color="gray.600" mb={3}>
        {description}
      </Text>
      <Flex justify="space-between" align="center">
        <HStack gap={2}>
          {tags.map((tag) => (
            <Box
              key={tag}
              as="span"
              bg="gray.100"
              color="gray.700"
              px={2}
              py={0.5}
              rounded="md"
              fontSize="xs"
              fontWeight="medium"
            >
              {tag}
            </Box>
          ))}
        </HStack>
        <Link color="blue.600" fontSize="xs">
          Detail
        </Link>
      </Flex>
    </Box>
  </Box>
);
