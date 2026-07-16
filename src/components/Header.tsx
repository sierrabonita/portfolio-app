import type { FC } from 'react';
import { Flex, Heading, HStack, Link } from '@chakra-ui/react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Outputs', href: '#outputs' },
  { label: 'Contact', href: '#contact' },
] as const;

export const Header: FC = () => (
  <Flex as="header" justify="space-between" align="center" mb={12}>
    <Heading as="h1" size="md" fontWeight="normal">
      Yamada Taro - Web Engineer
    </Heading>
    <HStack as="nav" gap={6} fontSize="sm">
      {NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </HStack>
  </Flex>
);
