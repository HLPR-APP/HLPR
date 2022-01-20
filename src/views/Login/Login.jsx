import { useState } from 'react';
import { signInUser } from '../../services/users.js';
import { useUser } from '../../context/UserContext.jsx';
import { useHistory, Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Login() {
  const auth = useUser();
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
    const userIn = await signInUser(email, pw);
    auth.setUser({ id: userIn.id, email: userIn.email });
    history.push('/TaskList');
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Please Enter 6 Characters"
                  id="password"
                  type="password"
                  value={pw}
                  onChange={(e) => setPW(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
                <Stack pt={1}>
                  <Text align={'center'}>
                    Need an account?{' '}
                    <Button color={'blue.400'}>
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
