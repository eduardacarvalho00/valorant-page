import {
  Flex, Image, TabList, TabPanels, Tabs,
} from '@chakra-ui/react';
import TitleHabilits from '../../assets/Agents/title_habilits.png';
import { ButtonHabilits } from './buttonHabilits';
import { DescriptionHabilits } from './descriptionHabilits';

interface Props{
  abilities:[{
    displayName: string
    description: string,
    displayIcon: string,
  }]
}

export function Habilits(props : Props) {
  const { abilities } = props;

  return (
    <Flex
      mt={30}
      mb={10}
      h={'325px'}
      flexDir={'column'}
      align={'center'}
    >
      <Image src={TitleHabilits} textAlign={'center'} mb={10}/>
      
        <Flex m={'40px'}>
          <Tabs colorScheme='none' flexDirection={'column'} align={'center'}>
            <TabList>
            {abilities.map((ability) => (
              <ButtonHabilits key={ability.displayIcon} icon={ability.displayIcon} />
            ))}
            </TabList>

            <TabPanels>
              {abilities.map((ability) => (
                <DescriptionHabilits key={ability.displayName} displayName={ability.displayName} description={ability.description}/>
              ))}
             
            </TabPanels>
            
          </Tabs>
        </Flex> 
      
    </Flex>
  );
}
