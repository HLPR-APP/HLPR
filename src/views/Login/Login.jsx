import { useState } from 'react';
import { signInUser } from '../../services/users.js';
import { useUser } from '../../context/UserContext.jsx';
import { useHistory, Link } from 'react-router-dom';
// import { getTasksByUser } from '../../services/services.js';
// import { getTasksByEmail } from '../../services/services.js';
// import { getTaskById } from '../../services/services.js';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  //   Link,
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
    e.preventDefault();
    const userIn = await signInUser(email, pw);
    console.log(userIn);
    auth.setUser({ id: userIn.id, email: userIn.email });
    console.log(auth.user);

    console.log('hello');
    history.push('/TaskList');
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <FormControl>
    //     <FormLabel htmlFor="email">
    //       Email
    //       <Input
    //         id="email"
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </FormLabel>
    //     <FormLabel htmlFor="password">
    //       Password
    //       <Input
    //         id="password"
    //         type="password"
    //         value={pw}
    //         onChange={(e) => setPW(e.target.value)}
    //       />
    //     </FormLabel>
    //     <Button type="submit">Submit</Button>
    //     <p>
    //       Don't have an account?
    //       <Button>
    //         <a href="/signup">Create Account </a>
    //       </Button>
    //     </p>
    //   </FormControl>
    // </form>

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text> */}
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
                  {/* <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link> */}
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
