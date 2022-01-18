import { useState } from 'react';
import { signInUser } from '../../services/users.js';
import { useUser } from '../../context/UserContext.jsx';
import { useHistory } from 'react-router-dom';
import { getTasksByUser } from '../../services/services.js';
import { getTasksByEmail } from '../../services/services.js';
import { getTaskById } from '../../services/services.js';

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
    history.push('/tasklist');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            value={pw}
            onChange={(e) => setPW(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
