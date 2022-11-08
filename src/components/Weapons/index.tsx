import {
  Flex, Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Image, 
} from '@chakra-ui/react';
import { useWeapons } from './useWeapons';

export function Weapons() {
  const {
    results,
  } = useWeapons();
  return (
    <Flex as='section' w={'100%'} h={1500} flexDirection={'column'} align={'center'}>
      <Heading
        fontWeight={'bold'}
        padding={88}
        fontSize={32}
        color='blue.800'
        textAlign={'start'}
      >
        WEAPONS
      </Heading>
      <Box w={1227} h={'984px'}>
        <Tabs variant={'enclosed-colored'} colorScheme={'red'}>
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
            {results.map((weapons) => (
              <Tab key={weapons.displayName}>
                <Image src={weapons.displayIcon} maxW={'300px'} h={'93px'}/>
              </Tab>
            ))}
            
          </TabList>

          <TabPanels>
          {/* {results.map((weapons) => (
              <TabPanel key={weapons.skins.displayName}>
                <Image src={weapons.skins.displayIcon} maxW={'300px'} h={'93px'}/>
              </TabPanel>
          ))} */}
            
          </TabPanels>
        </Tabs>
      </Box>
      
    </Flex>
  );
}
