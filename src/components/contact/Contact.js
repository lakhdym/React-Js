import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Contact extends Component {
	
	render() {
		const {titre,name , tel} = this.props;
		return (
			<div>
				<h1>{titre}</h1>
				<ul>
					<li>Nom : {name}</li>
					<li>tel : {tel}</li>
				</ul>
			</div>
		)
	}
}

Contact.defaultProps = {
	titre : "Bonjour ! a tous ",
	name : "my name ",
	tel : `06457801`
}
Contact.propTypes = {
	titre : PropTypes.string.isRequired,
	name : PropTypes.string,
	tel : PropTypes.string,
}
export default Contact