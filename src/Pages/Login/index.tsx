import { Flex, Box, Image } from '@chakra-ui/react';
import Logo from '../../assets/riot_logo.png';

export function Login() {
  return (
    <Flex>
      <Box>
        <Image src={Logo}/>
      </Box>
      <Box>
        <Image />
      </Box>
    </Flex>
  );
}
