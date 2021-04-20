//3rd party
import {Router, Route, Switch, Redirect} from 'react-router-dom';

//my imports
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import SplashPage from '../containers/SplashPage';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import history from '../history';

function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/welcome" component={SplashPage} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
