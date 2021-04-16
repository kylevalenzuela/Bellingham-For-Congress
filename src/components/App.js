//3rd party
import {Router, Route, Switch, Redirect} from 'react-router-dom';

//my imports
import Header from '../containers/Header';
import SplashPage from '../containers/SplashPage';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import history from '../history';

function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
