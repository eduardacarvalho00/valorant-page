import { TabPanel } from '@chakra-ui/react';

interface DescriptionProps{
  displayName: string;
  description: string;
}

export function DescriptionHabilits({ displayName, description }: DescriptionProps) {
  return (
    <TabPanel textAlign={'justify'} w={900} fontSize={18}>
      <p>
        {displayName} : {description}
      </p>
   </TabPanel>
  );
}
