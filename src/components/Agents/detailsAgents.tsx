import { Box } from '@chakra-ui/react';

interface DetailsProps {
  top: string;
  left?: string;
  bg: string;
}

export function CircleDetail({ top, left, bg }: DetailsProps) {
  return (
    <Box
      position={'absolute'} 
      w={'251px'}
      h={'251px'}
      left={left}
      top={top}
      borderRadius={'1000px'}
      bg={bg}
    />
  );
}
