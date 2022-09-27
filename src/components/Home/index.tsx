import { Box, Flex, Text } from '@chakra-ui/react';
import Header from '../Header';
import Video from '../../assets/video_home.mp4';

export function Home() {
  return (
    <Box>
      <Header />
      <Flex bg='gray.900'>
        <video autoPlay muted>
          <source src={Video} type="video/mp4" />
        </video>
        <Text color='red'>s</Text>
      </Flex>
     
    </Box>
  );
}
