import {
  Box, Divider, Flex, Image, 
} from '@chakra-ui/react';
import Logo from '../../assets/riot_logo.png';
import { LinkHeader } from './Link';

export default function Header() {
  return (
    <Box>
      <Flex
        bg='gray.800'
        as='header' 
        h={107}
        justifyContent={'space-around'}
        w={'100%'}
        align={'center'}
      >
        <Box mr={300}>
          <Image src={Logo}/>
        </Box>
        <Flex >
          <LinkHeader title='AGENTS' href='#agents'/>
          <LinkHeader title='MAPS' href='#agents'/>
          <LinkHeader title='CARDS' href='#agents'/>
          <LinkHeader title='BUNDLES' href='#agents'/>
          <LinkHeader title='WEAPONS' href='#agents'/>
        </Flex>
      </Flex>
      <Divider bg={'gray.300'}/>
    </Box>
  );
}
