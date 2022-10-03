import {
  Image, Flex, Text, Box, Tooltip, Button,
} from '@chakra-ui/react';
import AgentBg from '../../assets/Agents/agent-bg.mp4';
import TitleAgent from '../../assets/Agents/title_agents.png';
import ImageAgent from '../../assets/Agents/Rectangle8.png';
import BgAgent from '../../assets/Agents/image 4.png';
import Icon from '../../assets/Agents/image 11.png';
import { CircleDetail } from './detailsAgents';
import { Habilits } from './habilits';

export function Agents() {
  return (
    <Flex
      as='section'
      w={'100vw'}
      mt={'240px'}
      h={'1520px'}
      align={'center'}
      flexDirection={'column'}
    >
     
      <Image src={TitleAgent} mb={'100px'} />

      <Flex justify={'center'} w={'100%'} >

          <video 
            autoPlay 
            muted 
            loop 
            style={{
              
              width: '100%', 
            }}
          >
            <source src={AgentBg} type="video/mp4"/>
          </video>

        <Flex position={'absolute'} w={1226} justify={'center'} >
          <Box>
            <CircleDetail top='320px' left='300px' bg='rgba(24, 52, 76, 0.5)'/>
            <CircleDetail top='100px' bg='rgba(102, 55, 108, 0.5)'/>
            <CircleDetail top='500px' left='220px' bg='rgba(177, 65, 76, 0.5)'/>
            
            <Image src={ImageAgent} position={'relative'}/>
          </Box>
         
          <Flex
            w={'434px'}
            color='gray.50'
            flexDirection={'column'}
            align={'center'}
          >
            <Image src={BgAgent} position={'absolute'}/>
           
            <Text
              fontWeight={'bold'}
              fontSize={32}
              textAlign={'center'}
              mt={'150px'}
            >
              FADE
            </Text> 
            
            <Tooltip
              label='Initiators challenge angles by setting up their team to enter contested ground and push defenders away.'
              aria-label='A tooltip'
              hasArrow
              p={2}
            >
              <Button bg='transparent' _hover={{ bg: 'transparent' }} >
                <Image src={Icon} mt={10}/>
              </Button>
            </Tooltip>

            <Text fontWeight={'regular'} fontSize={20} mt={144}>
              Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.
            </Text>
            
          </Flex>
        </Flex>
      </Flex>
      <Habilits />
    </Flex>
  );
}
