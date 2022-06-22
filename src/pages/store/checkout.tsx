import { useSession } from 'next-auth/react';
import { useAppSelector } from '../../app/hooks';
import NextLink from 'next/link';
import {
  Item,
  selectCartItems,
  selectCartPrice,
  selectCartQuantity,
} from '../../lib/cart/cartSlice';
import useSignIn from '../../lib/hooks/useSignIn';
import { Button, Flex, Heading } from '@chakra-ui/react';
import useSchool from '../../lib/hooks/useSchool';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useStripeCheckout from '../../lib/hooks/useStripeCheckout';
import CheckoutSpellCard from '../../components/store/checkout/checkout-spell-card';

const Checkout = () => {
  // Handle required Auth
  const { handleNotAuth } = useSignIn();
  useSession({
    required: true,
    onUnauthenticated() {
      handleNotAuth();
    },
  });

  // Get cart info
  const cartQuantity = useAppSelector(selectCartQuantity);
  const cartTotal = useAppSelector(selectCartPrice);
  const cartItems = useAppSelector(selectCartItems);

  // If cart empty redirect
  const router = useRouter();
  useEffect(() => {
    if (cartItems.length === 0) router.push('/');
  }, [cartItems]);

  // Get stripe hook
  const stripeSubmit = useStripeCheckout();

  // Map items
  const items = cartItems.map((item: Item) => {
    const school = useSchool(item.spell.school, 55);
    return (
      <CheckoutSpellCard key={item.spell._id} item={item} school={school} />
    );
  });

  return (
    <Flex
      justifyContent='center'
      fontFamily='normal'
      h='60rem'
      my='1rem'
      pt='1rem'
    >
      <Flex w='full' maxW='container.xl' justifyContent='center' gap='1rem'>
        <Flex
          direction='column'
          w='50%'
          alignItems='center'
          gap='2rem'
          boxShadow='md'
        >
          <Heading fontFamily='normal' color='dark'>
            Your Cart
          </Heading>
          <Flex
            direction='column'
            w='full'
            h='full'
            alignItems='center'
            justifyContent='space-between'
            pb='1rem'
          >
            <Flex direction='column' gap='.5rem'>
              {items}
            </Flex>
            <Flex gap='1rem'>
              <Button bgColor='dark' color='white'>
                <NextLink href='/'>Return</NextLink>
              </Button>
              <Button
                onClick={() => stripeSubmit(cartQuantity, cartTotal, cartItems)}
                bgColor='dark'
                color='white'
              >
                Purchase with Stipe
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Checkout;
