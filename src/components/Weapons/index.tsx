import {
  Flex, Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, 
} from '@chakra-ui/react';

export function Weapons() {
  return (
    <Flex as='section' w={'100%'} h={1500} flexDirection={'column'} align={'center'}>
      <Heading
        fontWeight={'bold'}
        padding={88}
        fontSize={32}
        color='blue.800'
      >
        WEAPONS
      </Heading>
      <Box w={1227}>
        <Tabs variant='enclosed'>
          <TabList
            h={20}
            overflow={'auto'}
            overflow-y={'hidden'}
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
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      
    </Flex>
  );
}
