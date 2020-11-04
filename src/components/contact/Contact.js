import React, { Component , Fragment } from 'react'
//import PropTypes from 'prop-types'
import NavBar from '../header/NavBar';
import FormContact from './FormContact';

 class Contact extends Component {
	
	render() {
		//const {titre,name , tel} = this.props;
		return (
			<Fragment>
				<NavBar/>
				<FormContact/>
				
			</Fragment>
		)
	}
}
/*
Contact.defaultProps = {
	titre : "Bonjour ! a tous ",
	name : "my name ",
	tel : `06457801`
}

Contact.propTypes = {
	titre : PropTypes.string.isRequired,
	name : PropTypes.string,
	tel : PropTypes.string,
}*/

export default Contact