import {
  Flex, Box, Image, Heading, Stack, Checkbox, Button, useToast, useBreakpointValue,
} from '@chakra-ui/react';
import {
  BsFacebook, BsApple, BsGoogle, BsFillPlayCircleFill, 
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Logo from '../../assets/Login/riot_logo_login.png';
import ImageLogin from '../../assets/Login/login_image.png';
import { InputLogin } from '../../components/Form/InputLogin';
import { IconLogin } from '../../components/Form/IconLogin';

interface Inputs {
  text: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();
  
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit : SubmitHandler<Inputs> = () => {
    navigate('/home');
  };
  const toast = useToast();

  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });
  
  return (
    <Flex as='section'>
        <Flex
          as='form'
          w={['100%', 475, 700]}
          h='100vh'
          justify={'flex-start'}
          align={'center'}
          flexDirection={'column'}
          bg='gray.50'
          onSubmit={handleSubmit(onSubmit)}
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
            <InputLogin title='username' type='text' {...register('text')}/>
            <InputLogin title='password' type='password' {...register('text')}/>
          </Stack>
          
          <Flex mt={5}>
            <IconLogin icon={<BsFacebook />} colorScheme='facebook' label='facebook' />
            <IconLogin icon={<BsGoogle />} bg='white' label='google' colorFont='red.400'/>
            <IconLogin icon={<BsApple />} bg='black' label='facebook' colorFont='white' />
          </Flex>

          <Checkbox mr={190} mt={2} size='sm' colorScheme='red' isInvalid >
            Stay signed in
          </Checkbox>

          <Button
            type='submit'
            leftIcon={<BsFillPlayCircleFill color='black'/> }
            w={150}
            h={'63px'}
            mt={[20, 60]}
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
            onClick={() =>
              toast({
                description: 'Login feito com sucesso',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Play
          </Button>
        </Flex>

      {isWideVersion && (
        <Box w={'100%'}>
          <Image src={ImageLogin} h='100vh' w={'100%'} backgroundSize='cover'/>
        </Box>
      )}
    </Flex>
  );
}
