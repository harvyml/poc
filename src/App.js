import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { Signin } from './views'
import { Panel } from './views';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/signin' />
          </Route>
          <Route path='/panel'>
            <Panel />
          </Route>
          <Route path='/signin'>
            <Signin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
