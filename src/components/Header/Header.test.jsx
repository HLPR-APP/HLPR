import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext.jsx';
import Header from './Header.jsx';
import { MemoryRouter } from 'react-router-dom';

it('should render header', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
