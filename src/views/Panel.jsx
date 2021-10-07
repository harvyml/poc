import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Track from './Track';
function Panel() {
	const { path } = useRouteMatch()
	console.log('Path: ', path)
	return (
		<Switch>
			<Route exact path={`${path}/home`} >
				<Home />
			</Route>
			<Route path={`${path}/profile`} component={() => <h1>Profile</h1>} />
			<Route path={`${path}/track/:id`}>
				<Track />
			</Route>
		</Switch>
	);
}

export default Panel;
