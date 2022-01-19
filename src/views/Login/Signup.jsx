import { useState } from 'react';
import { useUser } from '../../context/UserContext.jsx';
import { signUpUser } from '../../services/users.js';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  // const [input, setInput] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userIn = await signUpUser(email, pw);
      alert('Please check your email for a confirmation email');
      console.log(userIn);
    } catch (error) {
      console.log(error);
    }
  };

  // function PasswordInput() {
  //   const handleClick = () => setShow(!show);
  // }

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
    //     <Button type="submit" onClick={emailNotice}>
    //       Submit
    //     </Button>
    //     <p>
    //       Have an account?
    //       <Button>
    //         <a href="/">Sign in</a>
    //       </Button>
    //     </p>
    //   </FormControl>
    // </form>
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign up for an account</Heading>
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
                    required={true}
                    placeholder="Enter Email Address"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      // type={show ? 'text' : 'password'}
                      placeholder="Enter 6 characters"
                      required={true}
                      id="password"
                      value={pw}
                      onChange={(e) => setPW(e.target.value)}
                    />
                    {/* <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement> */}
                  </InputGroup>
                  {/* <Input
        pr='4.5rem'
        
      /> */}
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
                    type="submit"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Sign up
                  </Button>
                  <Stack pt={1}>
                    <Text align={'center'}>
                      Already Have an account?{' '}
                      <Button color={'blue.400'}>
                        <Link to="/">Sign In</Link>
                      </Button>
                    </Text>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
