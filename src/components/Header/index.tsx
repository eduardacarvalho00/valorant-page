import {
  Box, Divider, Flex, Image, 
} from '@chakra-ui/react';
import Logo from '../../assets/Header/riot_logo.png';
import { LinkHeader } from './Link';

export default function Header() {
  return (
    <Box>
      <Flex
        bg='gray.800'
        as='header' 
        h={[170, 107]}
        justifyContent={'space-around'}
        w={'100%'}
        align={'center'}
        flexDir={['column', 'row']}
      >
        <Box mr={[0, 300]}>
          <Image src={Logo}/>
        </Box>
        <Flex flexWrap={['wrap', 'nowrap']} justify={'center'}>
          <LinkHeader title='AGENTS' href='#agents'/>
          <LinkHeader title='MAPS' href='#maps'/>
          <LinkHeader title='CARDS' href='#cards'/>
          <LinkHeader title='BUNDLES' href='#bundles'/>
        </Flex>
      </Flex>
      <Divider bg={'gray.300'}/>
    </Box>
  );
}
