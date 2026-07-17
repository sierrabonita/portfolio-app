import type { ComponentType, FC } from 'react';
import type { IconBaseProps } from 'react-icons';
import { Box, Flex, Heading, HStack, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { FaDocker } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiNuxt } from "react-icons/si";
import awsS3Logo from '@/assets/aws-s3.svg';
import awsLambdaLogo from '@/assets/aws-lambda.svg';
import firebaseLogo from '@/assets/firebase.svg';
import honoLogo from '@/assets/hono.svg';
import rubyLogo from '@/assets/ruby.svg';
import rubyOnRailsLogo from '@/assets/ruby-on-rails.svg';
import vueLogo from '@/assets/vuejs.svg';



interface Skill {
  icon: ComponentType<IconBaseProps> | string;
  label: string;
  color?: string;
}

const SKILLS: readonly Skill[] = [
  { icon: BiLogoTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: BiLogoReact, label: 'React', color: '#61DAFB' },
  { icon: RiNextjsFill, label: 'Next.js', color: 'black' },
  { icon: BiLogoReact, label: 'React Native', color: '#087ea4' },
  { icon: vueLogo, label: 'Vue.js' },
  { icon: SiNuxt, label: 'Nuxt', color: 'green.500' },
  { icon: honoLogo, label: 'Hono' },
  { icon: rubyLogo, label: 'Ruby' },
  { icon: rubyOnRailsLogo, label: 'Ruby on Rails' },
  { icon: FaDocker, label: 'docker', color: 'blue.500' },
  { icon: awsS3Logo, label: 'Amazon S3' },
  { icon: awsLambdaLogo, label: 'AWS Lambda' },
  { icon: firebaseLogo, label: 'Firebase' },
] as const;

export const SkillsSection: FC = () => (
  <Box as="section" id="skills" bg="white" shadow="sm" rounded="2xl" p={8} mb={8}>
    <Heading as="h2" size="md" mb={8}>
      Skills
    </Heading>
    <SimpleGrid columns={{ base: 2, md: 4 }} rowGap={8} columnGap={4} mb={8}>
      {SKILLS.map((skill, index) => (
        <HStack key={`${skill.label}-${index}`}>
          {typeof skill.icon === 'string' ? (
            <Image src={skill.icon} alt={skill.label} boxSize={12} objectFit="contain" />
          ) : (
            <Box as={skill.icon} boxSize={12} color={skill.color} />
          )}
          <Text fontSize="md">{skill.label}</Text>
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
