import {
  Container,
  Heading,
  Box,
  Flex,
  Link,
  Text,
  Icon,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import logo from '../../public/images/Logo.png';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';
import { useAppSelector } from '../app/hooks';
import { selectCartQuantity } from '../lib/cart/cartSlice';
import CartDrawer from './store/cart/cart-drawer';
const Header = () => {
  const cartQuantity = useAppSelector(selectCartQuantity);

  return (
    <Flex
      as='header'
      position='sticky'
      top='0'
      w='full'
      py={3}
      justifyContent='center'
      alignItems='center'
      fontFamily='stone'
      bgColor='white'
      fontSize='lg'
      color='dark'
      letterSpacing={1}
      zIndex='banner'
    >
      <Flex
        alignItems='center'
        w='full'
        justifyContent='space-between'
        maxW='container.xl'
      >
        <NextLink href='/'>
          <Flex
            w='15rem'
            p='3'
            _hover={{ boxShadow: 'md', borderRadius: '1rem' }}
            cursor='pointer'
          >
            <Image src={logo} alt='Missile Logo' />
          </Flex>
        </NextLink>
        <Flex gap={10}>
          <NextLink href='/store/spells/all' passHref>
            <Link>STORE</Link>
          </NextLink>
          <NextLink href='/store/schools/abjuration' passHref>
            <Link>SCHOOLS</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>ABOUT</Link>
          </NextLink>
        </Flex>
        <Flex alignItems='center' gap={16}>
          <Flex alignItems='center' gap={2}>
            <Text>SEARCH</Text>
            <Icon as={FiSearch} w={5} h={5} />
          </Flex>
          <Flex alignItems='center' gap={2}>
            <Text>ACCOUNT</Text>
            <Icon as={FiUser} w={5} h={5} />
          </Flex>
          <CartDrawer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
