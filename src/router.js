import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/contact/Contact';
class Router extends Component {

	render() {

		return (
			<div>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/contact'  exact component={Contact} />
				</Switch>
			</div>
		)
	}
}

export default Router;