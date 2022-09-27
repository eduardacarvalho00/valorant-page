import { IconButton } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface IconProps {
  icon: ReactElement;
  label: string;
  colorScheme?: string;
  colorFont?: string
  bg?: string;
}

export function IconLogin({
  icon, label, colorScheme, colorFont, bg,
}: IconProps) {
  return (
    <IconButton
      h={'30px'}
      w={'100px'}
      borderRadius={4}
      fontSize={20}
      colorScheme={colorScheme}
      color={colorFont}
      bg={bg}
      aria-label={label}
      icon={icon}
    />
  );
} 
