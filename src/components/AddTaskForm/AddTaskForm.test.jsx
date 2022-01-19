import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext.jsx';
import AddTaskForm from './AddTaskForm.jsx';

it('should render form', () => {
  const { container } = render(
    <UserProvider>
      <AddTaskForm />
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
