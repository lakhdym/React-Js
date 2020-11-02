import React from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'

const NavBar = (props) => {
	//	const {txt} = props ;
	return (
		<nav>
			<div className="nav-container">

				<div id="logo">
					<Link to='/'>
						<img src="./img/wish-logo-800.png" alt="logo" />
					</Link>
				</div>
				<ul id="icons">
					<li>
						<Link to='/user'>
							<i className="fas fa-user"></i>
						</Link>
					</li>
					<li>
						<Link to="/heart">
							<i className="fas fa-heart"></i>
							<span id="nav-not"></span>
						</Link>
					</li>
					<li>
						<Link to='/contact'>
							<i className="fas fa-shopping-cart"></i>
						</Link>
					</li>

				</ul>
			</div>
		</nav>
	)
}


export default NavBar