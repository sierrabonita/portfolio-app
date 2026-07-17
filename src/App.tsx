import type { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Provider } from '@/components/ui/provider';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { WorksSection } from './components/WorksSection';
import { OutputsSection } from './components/OutputsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: FC = () => (
  <Provider>
    <Box bg="#F4F3F0" color="gray.800" minH="100vh" py={8}>
      <Container maxW="container.lg" px={4}>
        <Header />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <OutputsSection />
        <ContactSection />
        <Footer />
      </Container>
    </Box>
  </Provider>
);
