import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
