import { Link } from '@chakra-ui/react';

interface LinkProps {
  title: string,
  href: string,
}

export function LinkHeader({ title, href }: LinkProps) {
  return (
    <Link
      href={href}
      color='gray.50'
      px={[1, 3]}
      fontSize={[16, 20]}
      fontWeight={'medium'}
      _hover={{
        color: 'red.700',
      }}
      _activeLink={{
        color: 'red.700',
      }}
    >
      {title}
    </Link>
  );
}
