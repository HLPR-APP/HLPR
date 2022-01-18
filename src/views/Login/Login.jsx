import { useState } from 'react';
import { signInUser } from '../../services/users.js';
import { useUser } from '../../context/UserContext.jsx';
import { useHistory } from 'react-router-dom';
// import { getTasksByUser } from '../../services/services.js';
// import { getTasksByEmail } from '../../services/services.js';
// import { getTaskById } from '../../services/services.js';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

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
          Don't have an account?
          <Button>
            <a href="/signup">Create Account </a>
          </Button>
        </p>
      </FormControl>
    </form>
  );
}
