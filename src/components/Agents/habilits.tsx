import {
  Flex, Image, TabList, TabPanels, Tabs,
} from '@chakra-ui/react';
import TitleHabilits from '../../assets/Agents/title_habilits.png';
import Icon from '../../assets/Agents/image 11.png';
import { ButtonHabilits, DescriptionHabilits } from './buttonHabilits';

export function Habilits() {
  return (
    <Flex
      mt={40}
      w={'860px'}
      h={'325px'}
      flexDir={'column'}
      align={'center'}
    >
      <Image src={TitleHabilits} textAlign={'center'} mb={10}/>
      
        <Flex m={'40px'}> 
        
          <Tabs colorScheme='none' flexDirection={'column'} align={'center'}>
            <TabList>
              <ButtonHabilits icon={Icon} />
              <ButtonHabilits icon={Icon} />
              <ButtonHabilits icon={Icon} />
              <ButtonHabilits icon={Icon} />
            </TabList>

            <TabPanels>
              <DescriptionHabilits 
                text='EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed'
              />
              <DescriptionHabilits 
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut a recusandae velit! Quibusdam ad fugit enim veniam delectus modi veritatis obcaecati error recusandae, doloribus reprehenderit voluptates libero voluptatibus maxime.'
              />
              
              <DescriptionHabilits 
                text='EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed'
              />
              <DescriptionHabilits 
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut a recusandae velit! Quibusdam ad fugit enim veniam delectus modi veritatis obcaecati error recusandae, doloribus reprehenderit voluptates libero voluptatibus maxime.'
              />
            </TabPanels>
            
          </Tabs>
        </Flex> 
      
    </Flex>
  );
}
