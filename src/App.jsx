import { Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs.jsx';
import Login from './views/Login/Login.jsx';
import Profile from './views/Profile/Profile.jsx';
import TaskDetail from './views/TaskDetail/TaskDetail.jsx';
import TaskList from './views/TaskList/TaskList.jsx';
import Signup from './views/Login/Signup.jsx';
import Header from './components/Header/Header.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/tasklist">
          <TaskList />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/taskdetail/:id">
          <TaskDetail />
        </PrivateRoute>
      </Switch>
    </ChakraProvider>
  );
}
