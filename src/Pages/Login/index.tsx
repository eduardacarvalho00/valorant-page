import {
  Flex, Box, Image, Heading, Stack, Checkbox, Button,
} from '@chakra-ui/react';
import {
  BsFacebook, BsApple, BsGoogle, BsFillPlayCircleFill, 
} from 'react-icons/bs';
import Logo from '../../assets/riot_logo_login.png';
import ImageLogin from '../../assets/login_image.png';
import { InputLogin } from '../../components/Form/InputLogin';
import { IconLogin } from '../../components/Form/IconLogin';

export function Login() {
  return (
    <Flex>
      <Flex>
        <Flex
          w={475}
          h='100vh'
          justify={'flex-start'}
          align={'center'}
          flexDirection={'column'}
          bg='gray.50'
        >
          <Image src={Logo} mt={16} />

          <Heading
            fontWeight={'medium'}
            fontSize={'32'}
            mt={74}
          >
            Sign in
          </Heading >

          <Stack spacing={25} mt={75}>
            <InputLogin title='username' type='text'/>
            <InputLogin title='password' type='password'/>
          </Stack>
          
          <Flex mt={5}>
            <IconLogin icon={<BsFacebook />} colorScheme='facebook' label='facebook' />
            <IconLogin icon={<BsGoogle />} bg='white' label='google' colorFont='red.400'/>
            <IconLogin icon={<BsApple />} bg='black' label='facebook' colorFont='white' />
          </Flex>

          <Checkbox mr={190} mt={2} size='sm' colorScheme='red' >
            Stay signed in
          </Checkbox>

          <Button
            leftIcon={<BsFillPlayCircleFill color='black'/> }
            w={150}
            h={'63px'}
            mt={60}
            borderRadius={15}
            fontSize={26}
            bgGradient='linear(to-r,red.700,red.300)'
            color={'white'}
            _hover={{
              bgGradient: 'linear(to-r,red.700,red.300)',
            }}
            _active={{
              bgGradient: 'linear(to-r,red.600,red.200)',
            }}
            css={{
              boxShadow: '1px 1px 27px 10px #ff4655',
              ':hover': { 
                boxShadow: '1px 1px 26px 13px #ff4655',
              },
            }}
          >
            Play
          </Button>
        </Flex>
      </Flex>

      <Box>
        <Image src={ImageLogin} objectFit='cover' h='100vh' w={'100%'}/>
      </Box>
    </Flex>
  );
}
