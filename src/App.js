import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Signin } from './views'
import { Panel } from './views';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/panel'>
            <Panel/>
          </Route>
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
