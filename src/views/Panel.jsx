import { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { getUserData } from '../utils/services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Track from './Track';
import Favorites from './Favorites';
function Panel() {
	const { path } = useRouteMatch()
	let [user, setUser] = useState({})

    useEffect(() => {
        setUser(getUserData())
    }, [])

	useEffect(() => {
		if(user.code === 3001) {
			window.location.href = '/signin'
		}
	}, [user])
	return (
		<Switch>
			<Route exact path={`${path}/home`} >
				<Home />
			</Route>
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
