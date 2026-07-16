import type { ComponentType, FC } from 'react';
import type { IconBaseProps } from 'react-icons';
import { Box, Flex, Heading, HStack, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiGo, SiFastapi, SiGin } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

interface Skill {
  icon: ComponentType<IconBaseProps>;
  label: string;
  color: string;
}

const SKILLS: readonly Skill[] = [
  { icon: FaPython, label: 'python', color: 'blue.500' },
  { icon: SiGo, label: 'GO', color: 'blue.400' },
  { icon: SiFastapi, label: 'FastAPI', color: 'teal.500' },
  { icon: SiGin, label: 'Gin', color: 'blue.300' },
  { icon: FaPython, label: 'python', color: 'blue.500' },
  { icon: FaDocker, label: 'docker', color: 'blue.500' },
  { icon: FaDocker, label: 'docker', color: 'blue.500' },
  { icon: FaAws, label: 'AWS', color: 'orange.400' },
  { icon: FaDocker, label: 'docker', color: 'blue.500' },
  { icon: FaGitAlt, label: 'git', color: 'red.500' },
  { icon: VscVscode, label: 'VS Code', color: 'blue.500' },
] as const;

export const SkillsSection: FC = () => (
  <Box as="section" id="skills" bg="white" shadow="sm" rounded="2xl" p={8} mb={8}>
    <Heading as="h2" size="md" mb={8}>
      Skills
    </Heading>
    <SimpleGrid columns={{ base: 2, md: 4 }} rowGap={8} columnGap={4} mb={8}>
      {SKILLS.map((skill, index) => (
        <HStack key={`${skill.label}-${index}`}>
          <Box as={skill.icon} boxSize={6} color={skill.color} />
          <Text fontSize="sm">{skill.label}</Text>
        </HStack>
      ))}
    </SimpleGrid>
    <Flex justify="flex-end">
      <Link color="blue.600" fontWeight="bold" fontSize="sm">
        View Detailed Skills
      </Link>
    </Flex>
  </Box>
);
