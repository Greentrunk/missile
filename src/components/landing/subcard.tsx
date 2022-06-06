import { Button, Flex, Heading, Text } from '@chakra-ui/react';

const Subcard = () => {
  return (
    <Flex
      direction='column'
      gap='1rem'
      w='full'
      maxW='container.xl'
      pb='5rem'
      color='white'
      fontFamily='stone'
    >
      <Heading as='h2' fontFamily='stone' fontSize='5rem'>
        More casting, less sassing
      </Heading>
      <Text fontSize='2rem'>Pre-prepared spell tomes for every need</Text>
      <Flex gap='2rem' color='dark'>
        <Button py='2rem' boxShadow='lg' fontSize='1.5rem'>
          SHOP SPELLS
        </Button>
        <Button py='2rem' boxShadow='lg' fontSize='1.5rem'>
          EXPLORE SCHOOLS
        </Button>
      </Flex>
    </Flex>
  );
};

export default Subcard;