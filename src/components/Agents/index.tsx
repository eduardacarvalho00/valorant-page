import {
  Image, Flex, Text, Box, Tooltip, Button,
} from '@chakra-ui/react';
import {
  Pagination, Navigation, Mousewheel, Keyboard,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AgentBg from '../../assets/Agents/agent-bg.mp4';
import TitleAgent from '../../assets/Agents/title_agents.png';
import { CircleDetail } from './detailsAgents';
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
      mt={'240px'}
      mb={'115px'}
      h={'1520px'}
      align={'center'}
      flexDirection={'column'}
    >
     
      <Image src={TitleAgent} mb={'100px'} fallbackSrc='true'/>

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
          
          <Flex position={'absolute'} w={1700}>
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
              style={{
                minWidth: '1200px',
              }}
            >
              {results.map((agent) => (
                 
                <Flex key={agent.displayName} align={'center'} flexDirection={'column'}>
                  
                  <SwiperSlide>
                    <Flex justifyContent={'space-evenly'} maxW={'1800px'}>

                      <Box>
                        <CircleDetail top='320px' left='500px' bg={agent.backgroundGradientColors[1]}/>
                        
                        <Image src={agent.fullPortrait} position={'relative'} h={'850px'} />
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
