import React from 'react'
import PropTypes from 'prop-types'

const  NavBar = (props) => {
//	const {txt} = props ;
	return (
			<nav>
			        <div className="nav-container">
			          <div id="logo">
			           
			              <img src="./img/wish-logo-800.png" alt="logo" />

			          </div>

			          <ul id="icons">
			            <li>
			            
			                <i className="fas fa-user"></i>
			          
			            </li>
			            <li>
			           
			                <i className="fas fa-heart"></i>
			                <span id="nav-not"></span>
			    
			            </li>
			            <li>
			  
			                <i className="fas fa-shopping-cart"></i>
			            
			            </li>
			          </ul>
			        </div>
			      </nav>
	)
}


export default NavBar