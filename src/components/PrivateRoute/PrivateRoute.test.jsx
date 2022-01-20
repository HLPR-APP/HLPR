import React from 'react';
import dotenv from 'dotenv';
dotenv.config();
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PrivateRoute from './PrivateRoute.jsx';
import { UserProvider } from '../../context/UserContext.jsx';

jest.mock('../../services/users.js');
jest.mock('../../context/UserContext.jsx');

//need to define location because it is being used in render.
it('should render Private Route', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <PrivateRoute location="/profile" />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
