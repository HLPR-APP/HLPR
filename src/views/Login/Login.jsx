import Header from '../../components/Header/Header.jsx';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Login() {
 

  const isError = false;


  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('')
  


  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
    const userIn = await signUpUser(email, pw);
    console.log(userIn);
    console.log('hello')
    
    } catch (error){

  }
}
  return (
    <>
      <Header />
      <form>
      <FormControl m="10" >
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={pw}
          onChange={(e) => setPW(e.target.value)}
        />
        <Button mt="2" colorScheme="teal" size="sm" type='submit'>
          Submit
        </Button>
        
      </FormControl>
      </form>
    </>
  );
}