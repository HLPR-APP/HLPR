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
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === '';

  return (
    <>
      <Header />
      <FormControl m="10" isInvalid={isError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={input}
          onChange={handleInputChange}
        />
        <Button mt="2" colorScheme="teal" size="sm">
          Submit
        </Button>
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
}
