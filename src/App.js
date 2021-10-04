import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route path="/about">
                  <About></About>
              </Route>
              <Route path="/services">
                  <Services></Services>
              </Route>
              <Route path="/contact">
                  <Contact></Contact>
              </Route>

              <Route path="*">
                  <NotFound></NotFound>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
