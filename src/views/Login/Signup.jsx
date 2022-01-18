import Header from '../../components/Header/Header.jsx';
import { useState } from 'react';
import { useUser } from '../../context/UserContext.jsx';
import { signUpUser } from '../../services/users.js';

export default function Signup() {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('')
  const [input, setInput] = useState('');


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
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email
            <input 
        
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <label htmlFor='password'>Password
            <input 
          id="password"
          type="password"
          value={pw}
          onChange={(e) => setPW(e.target.value)}
        />
        </label>
        <button type='submit'>Submit</button>
        </form>

    </>
  );
}