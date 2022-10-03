import {
  Button, Image, Tab, TabPanel,
} from '@chakra-ui/react';

interface ButtonProps {
  icon: string;
}

export function ButtonHabilits({ icon }: ButtonProps) {
  return (
    <Tab>
      <Button 
        bg='blue.800'
        w={'86px'} 
        h={'78px'} 
        borderRadius={4} 
        boxShadow={ '6px 6px 10px rgba(0, 0, 0, 0.25)'} 
        _hover={{ bg: 'rgba(24, 52, 76, 0.8)' }}
        _active={{ bg: 'red.700' }}
      >
        <Image src={icon} />
      </Button>
    </Tab>
  );
}

interface DescriptionProps{
  text: string;
}

export function DescriptionHabilits({ text }: DescriptionProps) {
  return (
    <TabPanel textAlign={'justify'}>
      <p>
        {text}
      </p>
   </TabPanel>
  );
}
