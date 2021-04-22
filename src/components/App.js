//3rd party
import {Router, Route, Switch, Redirect} from 'react-router-dom';

//my imports
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import SplashPage from '../containers/SplashPage';
import About from '../containers/About'
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Volunteer from '../containers/Volunteer';
import Donate from '../containers/Donate';
import history from '../history';

function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/welcome" component={SplashPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/donate" component={Donate} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
