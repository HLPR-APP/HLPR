import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : null
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const userCtx = useContext(UserContext);
  if (userCtx === undefined) {
    throw new Error('Must be wrapped in a UserProvider to use useUser');
  }
  return userCtx;
};

export { UserProvider, useUser };
