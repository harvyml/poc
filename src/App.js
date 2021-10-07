import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import {Home} from './views'
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/home' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
