import { useState } from 'react';
import { useUser } from '../../context/UserContext.jsx';
import { signUpUser } from '../../services/users.js';
import { Button, FormControl, Input, FormLabel } from '@chakra-ui/react';

export default function Signup() {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userIn = await signUpUser(email, pw);
      console.log(userIn);
      console.log('hello');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormLabel>
        <FormLabel htmlFor="password">
          Password
          <Input
            id="password"
            type="password"
            value={pw}
            onChange={(e) => setPW(e.target.value)}
          />
        </FormLabel>
        <Button type="submit">Submit</Button>
        <p>
          Have an account?<a href="/">Sign in</a>
        </p>
      </FormControl>
    </form>
  );
}
