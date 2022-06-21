import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import useSignIn from '../../lib/hooks/useSignIn';

// Auth dropdown
const AuthMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { session, authBtn, showAvtr } = useSignIn();

  const name = session ? <Text>{session.user.name}</Text> : '';

  const msg = session ? 'You are signed in' : 'Not Signed In';
  return (
    <Menu isOpen={isOpen}>
      <MenuButton as='a' onMouseEnter={onOpen} onMouseLeave={onClose}>
        <Button variant='outline' borderColor='dark'>
          <Flex alignItems='center' gap='1rem'>
            <Icon as={FiUser} w={5} h={5} />
            <Text>ACCOUNT</Text>
          </Flex>
        </Button>
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem _hover={{ backgroundColor: 'white', cursor: 'default' }}>
          <Flex direction='column' alignItems='center'>
            <Text>{msg}</Text>
          </Flex>
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: 'white', cursor: 'default' }}>
          <Flex alignItems='center' gap='.5rem'>
            <Flex
              display={session ? 'flex' : 'none'}
              h='3rem'
              w='3rem'
              position='relative'
            >
              {/* Render user avatar */}
              {showAvtr()}
            </Flex>
            {name}
          </Flex>
        </MenuItem>
        <MenuDivider />
        <MenuItem _hover={{ backgroundColor: 'white', cursor: 'default' }}>
          {authBtn}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AuthMenu;
