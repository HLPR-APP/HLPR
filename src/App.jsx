import { Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs.jsx';
import Login from './views/Login/Login.jsx';
import OfferDetail from './views/OfferDetail/OfferDetail.jsx';
import Profile from './views/Profile/Profile.jsx';
import TaskDetail from './views/TaskDetail/TaskDetail.jsx';
import TaskList from './views/TaskList/TaskList.jsx';
//import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
//import { ProvideAuth } from './context/ProvideAuth';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/tasklist">
        <TaskList />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/taskdetail/:id">
        <TaskDetail />
      </Route>
      <Route exact path="/offerdetail/:id">
        <OfferDetail />
      </Route>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
    </Switch>
  );
}
