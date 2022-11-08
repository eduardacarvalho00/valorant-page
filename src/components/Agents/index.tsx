import {
  Image, Flex, Text, Box, Tooltip, Button,
} from '@chakra-ui/react';
import {
  Pagination, Navigation, Mousewheel, Keyboard,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AgentBg from '../../assets/Agents/agent-bg.mp4';
import TitleAgent from '../../assets/Agents/title_agents.png';
import { Habilits } from './Habilits/habilits';
import { useAgents } from './useAgents';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';

export function Agents() {
  const {
    results,
  } = useAgents();
 
  return (
    <Flex
      id='agents'
      as='section'
      w={'100%'}
      mt={['100px', '240px']}
      mb={'115px'}
      h={'1520px'}
      align={'center'}
      flexDirection={'column'}
    >
     
      <Image src={TitleAgent} mb={'100px'} fallbackSrc='true' p={3}/>

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
          
          <Flex position={'absolute'} w={['200px', 1700]}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
              {results.map((agent) => (
                 
                <Flex key={agent.displayName} align={'center'} flexDirection={'column'}>
                  
                  <SwiperSlide>
                    <Flex justifyContent={'space-evenly'} maxW={['400px', '1800px']}>

                      <Box>
                        <Image src={agent.fullPortrait} position={'relative'} h={['300px', '850px']} />
                      </Box>
                
                      <Flex
                        color='gray.50'
                        flexDirection={'column'}
                        align={'center'}
                      >
                        <Image src={agent.background} h={880} fill={''} css={{ filter: 'opacity(10%)' }}/>
                        
                        <Tooltip
                          label={agent.role.description}
                          aria-label='A tooltip'
                          hasArrow
                          p={2}
                        >
                          <Button bg='transparent' _hover={{ bg: 'transparent' }} mt={10} position={'absolute'}>
                            <Image src={agent.role.displayIcon} mt={10} w={'70px'}/>
                          </Button>
                        </Tooltip>

                        <Text
                          fontWeight={'bold'}
                          fontSize={32}
                          textAlign={'center'}
                          mt={'150px'}
                          position={'absolute'}
                        >
                          {agent.displayName}
                        </Text> 
            
                        <Text fontWeight={'regular'} fontSize={20} position={'absolute'} mt={390} textAlign={'justify'} w={350}>
                          {agent.description}
                        </Text>
                        
                         {/* <video controls>
                          <source src={agent.voiceline.mediaList[0]}/>
                        </video>  */}
                      
                      </Flex>
                    </Flex>
                    
                    <Habilits abilities={agent.abilities}/>
                    
                  </SwiperSlide>
                </Flex>
                
              ))}
              
            </Swiper>

          </Flex>
          
      </Flex>
      
    </Flex>
  );
}
