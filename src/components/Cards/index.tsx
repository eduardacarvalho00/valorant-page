/* eslint-disable no-unused-vars */
import {
  Box, Button, Flex, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, SimpleGrid, Text, useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import cardsTitle from '../../assets/Cards/cards_title.png';
import bg from '../../assets/background.png';
import { useCards } from './useCards';

export function Cards() {
  const {
    results,
  } = useCards();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior]: any = React.useState('inside');

  return (
    <Box
      as='section'
      mt={60}
      w={'100%'}
      h={1000}
      backgroundImage={bg}
      backgroundRepeat={'no-repeat'}
    >
      <Flex flexDirection={'column'} align={'center'} >
        <Img src={cardsTitle}/>
       
        <Flex mt={20}>
          {results.slice(0, 4).map((cards) => (
            <Flex
              key={cards.displayName}
              flexDirection={'column'}
              align={'center'}
              m={5}
            >
              <Img src={cards.largeArt} />
              <Text fontWeight={'normal'} color={'red.700'}>{cards.displayName}</Text>
            </Flex>
          ))}
          
        </Flex>
        
        <Button
          onClick={onOpen}
          colorScheme='red'
          color={'gray.50'}
          mt={'15px'}
          size={'lg'}
        >
          Ver mais
        </Button>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset='slideInBottom'
            scrollBehavior={scrollBehavior}
            size='full'
            
          >
            <ModalOverlay />
            <ModalContent >
              
              <ModalCloseButton size={'lg'} />
              <ModalBody 
              css={{
                '&::-webkit-scrollbar': {
                  background: ' rgba(187, 187, 187, 0.8)',
                  width: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#0F1923',
                  borderRadius: '3px',
                },
              }}
              >
                <Flex mt={20} flexWrap={'wrap'}>
                    {results.map((cards) => (
                      
                      <Flex
                        key={cards.displayName}
                        flexDirection={'column'}
                        align={'center'}
                        m={5}
                      >
                        <Img src={cards.largeArt} w={'268px'} h={'640px'} />
                        <Text fontWeight={'normal'} color={'red.700'}>{cards.displayName}</Text>
                      </Flex>
                      
                    ))}
                </Flex>
              </ModalBody>
              
            </ModalContent>
          </Modal>

      </Flex>
    </Box>
  );
}
