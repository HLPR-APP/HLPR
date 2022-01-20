import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useUser } from '../../context/UserContext.jsx';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../services/users.js';
import { useHistory } from 'react-router-dom';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}
//   >
//     {children}
//   </Link>
// );

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // export default function HeaderLogin({ loggedin }) {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleLogOut = async () => {
    await signOutUser();
    setUser(null);
    history.push('/');
  };

  const loggedin = user ? true : false;

  const loggedInDiv = (
    <Box>
      {user?.email} <Button onClick={handleLogOut}>sign out</Button>
    </Box>
  );

  const notLoggedInDiv = (
    <Box>
      {/* <p>Not Signed in</p> */}
      <Link to="/">Sign In</Link>
    </Box>
  );

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Button>
              <Link to="/tasklist">HLPR</Link>
            </Button>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80'
                    }
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={
                        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80'
                      }
                    />
                  </Center>
                  <br />
                  <Center>{user?.email && <p>{user.email}</p>}</Center>
                  <br />
                  <MenuDivider />
                  {user?.email && (
                    <MenuItem onClick={handleLogOut}>Sign Out</MenuItem>
                  )}
                  {!loggedin && notLoggedInDiv}
                  {/* <MenuItem>{loggedin ? loggedInDiv : notLoggedInDiv}</MenuItem> */}
                  {/* <MenuItem>Your Servers</MenuItem> */}
                  {user?.email && (
                    <MenuItem>
                      <Link to="/profile">Profile</Link>
                    </MenuItem>
                  )}
                  <MenuItem>
                      <Link to="/tasklist">Task List</Link>
                    </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link to="/aboutus">About Us</Link>
                  </MenuItem>
                  {/* <MenuItem>Logout</MenuItem> */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
