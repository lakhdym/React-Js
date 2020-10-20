import React from 'react'
import PropTypes from 'prop-types'

const  Title = (props) => {
	const {txt} = props ;
	return (
		<div>
			 <h1>{ props.txt }</h1>
		</div>
	)
}
Title.defaultProps = {
	txt:' Salut les développeurs  (: '
}

Title.propTypes = {
	txt : PropTypes.string.isRequired
}

export default Title