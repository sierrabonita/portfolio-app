import type { FC } from 'react';
import { Box, Button, Heading, Link, SimpleGrid } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: readonly string[];
}

const PERSONAL_PROJECTS: readonly Project[] = [
  {
    title: '個人開発1',
    description: '成果物の説明が入ります...',
    imageUrl: 'https://picsum.photos/seed/proj1/300/150',
    imageAlt: 'UI Sketch',
    tags: ['Python', 'Gin'],
  },
  {
    title: '個人開発2',
    description: '成果物の説明が入ります...',
    imageUrl: 'https://picsum.photos/seed/proj2/300/150',
    imageAlt: 'Task App',
    tags: ['Python', 'Gin', 'Docker'],
  },
  {
    title: '個人開発3',
    description: '成果物の説明が入ります...',
    imageUrl: 'https://picsum.photos/seed/proj3/300/150',
    imageAlt: 'Weather App',
    tags: ['Python', 'Gin'],
  },
] as const;

const COMMERCIAL_PROJECTS: readonly string[] = [
  'ECサイト開発: Go, React, AWS. Detail',
  'EC Site Development: リレーションファースト化して、開発環境に開発を組み込み、ファケーションとした応難理します。',
  'EC Store Development: Go, React, AWS. Detail',
  'EC Site Development: Go, React, AWS. Detail',
  'EC Site Development: Go, React, AWS. Detail',
] as const;

export const WorksSection: FC = () => (
  <Box as="section" id="works" bg="white" shadow="sm" rounded="2xl" p={8} mb={8}>
    <Heading as="h2" size="md" mb={6}>
      Works / Projects（Pick up）
    </Heading>

    <Box mb={8}>
      <Heading as="h3" size="sm" fontWeight="normal" mb={4}>
        Personal Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {PERSONAL_PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </SimpleGrid>
    </Box>

    <Box mb={6}>
      <Heading as="h3" size="md" fontWeight="normal" mb={4}>
        業務委託・受託開発
      </Heading>
      <Box as="ul" fontSize="sm" pl={6}>
        {COMMERCIAL_PROJECTS.map((text, index) => (
          <Box
            key={index}
            as="li"
            display="list-item"
            mb={index < COMMERCIAL_PROJECTS.length - 1 ? 2 : 0}
          >
            <Link color="gray.600">{text}</Link>
          </Box>
        ))}
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
);
