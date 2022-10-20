import {
  Box, Flex, Heading, Image, Text, 
} from '@chakra-ui/react';
import {
  Keyboard, Mousewheel, Navigation, Pagination, 
} from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import mapsTitle from '../../assets/Maps/maps_title.png';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import { useMaps } from './useMaps';

export function Maps() {
  const {
    results,
  } = useMaps();
  return (
    <Flex
      id='maps'
      as='section'
      w={'100%'}
      mb={'115px'}
      h='800px'
      bg='blue.800'
      justifyContent={'center'}
      alignItems={'center'}
    >
      
      <Flex >
        <Box w={'400px'} mr={'190px'}>
          <Image src={mapsTitle} mb={'179px'}/>
          <Text textAlign={'justify'} color='gray.50' fontSize={20}>
            Each map serves as a stage to showcase your creativity. Maps are tailor-made for team strategies, spectacular plays and thrilling moments. Make the moves that everyone will try to emulate in the future!
          </Text>
        </Box>
       
        <Box maxW={'800px'}>
          <Swiper
              id='teste'
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
              {results.map((maps) => (
                <SwiperSlide key={maps.displayName}>
                  <Heading textAlign={'center'} color='gray.50'>
                    {maps.displayName}
                  </Heading>
                  <Image src={maps.splash}/>
                </SwiperSlide>
              ))}
              
          </Swiper> 
        </Box>
        
      </Flex>
      
    </Flex>
  );
}
