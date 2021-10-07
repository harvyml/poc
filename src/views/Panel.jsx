import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Track from './Track';
import Favorites from './Favorites';
function Panel() {
	const { path } = useRouteMatch()
	return (
		<Switch>
			<Route exact path={`${path}/home`} >
				<Home />
			</Route>
			<Route path={`${path}/profile`} component={() => <h1>Profile</h1>} />
			<Route path={`${path}/track/:id`}>
				<Track />
			</Route>
			<Route path={`${path}/favorites`}>
				<Favorites />
			</Route>
		</Switch>
	);
}

export default Panel;
