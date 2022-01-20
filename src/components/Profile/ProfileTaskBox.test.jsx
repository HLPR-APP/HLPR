import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext.jsx';
import ProfileTaskBox from './ProfileTaskBox.jsx';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/users.js');
jest.mock('../../services/services.js');
jest.mock('../../context/UserContext.jsx');

const mockTask = {
  accepted_offer: false,
  created_at: '2022-01-19T23:04:43.524215',
  date: null,
  description: 'Funding ',
  id: 23,
  image_url:
    'https://images.unsplash.com/photo-1585435465945-bef5a93f8849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  name: 'Buy HLPR App',
  posted_by: 'stef45689@gmail.com',
};

it('should render profile task box', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <ProfileTaskBox task={mockTask} />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
