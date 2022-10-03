import {
  Flex, Image, Button, Grid, GridItem, ScaleFade, useDisclosure, 
} from '@chakra-ui/react';
import TitleHabilits from '../../assets/Agents/title_habilits.png';
import Icon from '../../assets/Agents/image 11.png';

export function Habilits() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex mt={36} w={'860px'} h={'325px'} flexDir={'column'} align={'center'}>
        <Image src={TitleHabilits} textAlign={'center'} mb={20}/>
        
        <Grid templateColumns='repeat(4, 1fr)' gap={20}>
          <GridItem>
            <Button 
              bg='blue.800'
              w={'86px'} 
              h={'78px'} 
              borderRadius={4} 
              boxShadow={ '6px 6px 10px rgba(0, 0, 0, 0.25)'} 
              _hover={{ bg: 'rgba(24, 52, 76, 0.8)' }}
              onClick={onToggle}
            >
              <Image src={Icon} />
            </Button>
          </GridItem>

          <GridItem>
            <Button onClick={onToggle} bg='blue.800'w={'86px'} h={'78px'} borderRadius={4} boxShadow={ '6px 6px 10px rgba(0, 0, 0, 0.25)'} >
              <Image src={Icon} />
            </Button>
          </GridItem>

          <GridItem>
            <Button bg='blue.800' w={'86px'} h={'78px'} borderRadius={4} boxShadow={ '6px 6px 10px rgba(0, 0, 0, 0.25)'} >
              <Image src={Icon} />
            </Button>
          </GridItem>

          <GridItem>
            <Button bg='blue.800' w={'86px'} h={'78px'} borderRadius={4} boxShadow={ '6px 6px 10px rgba(0, 0, 0, 0.25)'} >
              <Image src={Icon} />
            </Button>
          </GridItem>

        </Grid>
        <ScaleFade initialScale={0.9} in={isOpen}>
            EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed
            </ScaleFade>
            <ScaleFade initialScale={0.9} in={isOpen}>
           TESTE
            </ScaleFade>
        
      </Flex>
  );
}
