import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext.jsx';
import AcceptOfferBox from './AcceptOfferBox.jsx';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/users.js');
jest.mock('../../services/services.js');
jest.mock('../../context/UserContext.jsx');

const mockOffer = {
  Tasks2: {
    accepted_offer: null,
    created_at: '2022-01-19T04:24:08.238781',
    date: '2022-01-18',
    description: 'Somebody please do my laundry ASAP',
    id: 5,
    image_url:
      'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    name: 'Folding Laundry',
    posted_by: 'stef45689@gmail.com',
  },
  accepted: false,
  date: null,
  duration: null,
  id: 37,
  offered_by: 'marvin_lambert@hotmail.com',
  price: 40,
  task_email: 'stef45689@gmail.com',
  task_id: 5,
  task_name: null,
};

it('should render offer box', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <AcceptOfferBox offer={mockOffer} />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
