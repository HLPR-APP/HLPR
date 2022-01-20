import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ mockUser, children }) => {
  const [user, setUser] = useState(
    mockUser ? { id: mockUser.id, email: mockUser.email } : null
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
