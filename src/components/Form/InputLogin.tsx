import {
  Input,
} from '@chakra-ui/react';

interface InputProps {
  title: string;
  type: string;
}

export function InputLogin({ title, type }: InputProps) {
  return (
    <Input
      placeholder={title}
      type={type}
      h={53}
      w={305}
      bg={'rgba(217, 217, 217, 0.7)'}
      focusBorderColor='gray.900'
      _hover={{
        borderColor: 'gray.900',
      }}
      _placeholder={{ color: 'gray.600' }}
      borderRadius={4}
    />
  );
}
