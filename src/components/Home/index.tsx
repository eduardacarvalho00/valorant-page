import {
  Box, Flex, Text, Image, Button, Link, useBreakpointValue,
} from '@chakra-ui/react';
import Header from '../Header';
import Video from '../../assets/Header/video_home.mp4';
import LogoValorant from '../../assets/Header/svg_valorant.png';

export function Home() {
  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });
  return (
    <Box as='section'>
      <Header />
      <Flex
        bg='gray.900'
        flexDirection={'column'}
        justify={'center'}
        align={'center'}
      >

        <video 
          autoPlay 
          muted 
          loop 
        >
          <source src={Video} type="video/mp4" />
        </video>

        <Flex
          position={'absolute'}
          align={'center'}
          flexDirection={'column'}
          mt={35}
        >
          {isWideVersion && (
            <Text
            color='gray.50'
            fontWeight={'bold'}
            fontSize={[18, 20]}
            textAlign={'center'}
            >
            A 5v5 tactical shooter with original characters
          </Text>
          )}

          <Image src={LogoValorant} mt={[0, 10]} w={['120px', '100%']}/>

          <Link href='https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=y-rAyGPbZ3GMaB5rK4BNpc0fw6Xi7j1Tsg1U71zKGv4&code_challenge_method=S256&prompt=signup&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&show_region=true&state=b26ea6d38b0f47a51909941332&uri=https%3A%2F%2Fplayvalorant.com%2Fpt-br%2Fdownload' isExternal _hover={{ textDecor: 'none' }} >
            <Button
              w={[100, 196]}
              h={[50, 69]}
              bg='red.700'
              color='gray.50'
              mt={[4, '68px']}
              fontWeight={'bold'} 
              fontSize={[16, 20]}
              _hover={{
                bg: 'red.600',
              }}
            >
              PLAY FREE
            </Button>
          </Link>
          
        </Flex>

      </Flex>
    </Box>
  );
}
