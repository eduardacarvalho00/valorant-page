import {
  Pagination, Navigation, Mousewheel, Keyboard,
} from 'swiper';
import {
  Box, Flex, Image, Text, 
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {results.map((results) => (
                <>
                  <SwiperSlide>
                    <Image src={results.splash}/>  
                  </SwiperSlide>
                </>
              ))}
              
            </Swiper>
        </Box>
      </Flex>
      
    </Flex>
  );
}
