import {
  Flex, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, 
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import bg from '../../assets/background.png';
import { useBundles } from './useBundles';

export function Bundles() {
  const {
    results,
  } = useBundles();

  return (
    <Flex
      h={'800px'}
      as='section'
      justify={'center'}
      backgroundImage={bg}
      backgroundRepeat={'no-repeat'}
    >
     <Tabs
        isLazy
        colorScheme={'orange'}
        bg='gray.700'
        h={'750px'}
        w={1196}
        borderRadius={'10px'}
        color='gray.50'
        variant={'soft-rounded'}
      >
        <Heading textAlign={'center'} fontSize={32} pt={5}>BUNDLES</Heading>

        <TabList 
          p={2} 
          overflow={'auto'} 
          css={{
            '&::-webkit-scrollbar': {
              background: 'rgba(187, 187, 187, 0.6)',
              height: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#0F1923',
              borderRadius: '10px',
              width: '1px',
            },
          }}
        >
          {results.map((bundles, index) => (
            <Tab key={index}>
              <Text w={'max-content'}>{bundles.displayName}</Text>
            </Tab>
          ))}
          
        </TabList>

        <TabPanels>

          {results.map((bundles) => (
            <TabPanel key={bundles.displayIcon}>
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key={bundles.displayIcon}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={bundles.displayIcon} w={'1164px'} h={'568px'}/>
                </motion.div>
              </AnimatePresence>
              
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
