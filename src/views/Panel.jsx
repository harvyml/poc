import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Music from './Music';
function Panel() {
	const { path } = useRouteMatch()
	console.log('Path: ', path)
	return (
				<Switch>
					<Route exact path={`${path}/music`} >
						<Music/>
					</Route>
					<Route path={`${path}/profile`} component={() => <h1>Profile</h1>} />
				</Switch>
	);
}

export default Panel;
