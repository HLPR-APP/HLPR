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
<<<<<<< HEAD
    } catch (error) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
=======
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
>>>>>>> 40f0147 (fixed login/signup logout)
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
<<<<<<< HEAD
        </label>
        <label htmlFor="password">
          Password
          <input
=======
        </FormLabel>
        <FormLabel htmlFor="password">
          Password
          <Input
>>>>>>> 40f0147 (fixed login/signup logout)
            id="password"
            type="password"
            value={pw}
            onChange={(e) => setPW(e.target.value)}
          />
<<<<<<< HEAD
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
=======
        </FormLabel>
        <Button type="submit">Submit</Button>
        <p>
          Have an account?<a href="/">Sign in</a>
        </p>
      </FormControl>
    </form>
>>>>>>> 40f0147 (fixed login/signup logout)
  );
}
