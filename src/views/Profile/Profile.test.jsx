import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../App.jsx';
import { UserProvider } from '../../context/UserContext.jsx';

jest.mock('react-slick');
jest.mock('../../context/UserContext.jsx');

const server = setupServer(
  rest.get(
    'https://tfwkyxubtlbepztwphpn.supabase.co/rest/v1/Tasks2',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            accepted_offer: false,
            created_at: '2022-01-19T22:45:45.82316',
            date: null,
            description: 'Clean my closets',
            id: 22,
            image_url:
              'https://images.unsplash.com/photo-1611048268330-53de574cae3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            name: 'Clean my closets',
            posted_by: 'marvinlambert@gmail.com',
          },
        ])
      );
    }
  )
);

describe('Task', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  it('should render a task', async () => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <UserProvider mockUser={{ id: 1, email: 's@s.com' }}>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    screen.getByText('HLPR');
    await screen.findByText('Create A Task');
    await screen.findByText('Task Name');
  });
});
