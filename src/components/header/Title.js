import React from 'react'

const  Title = (props) => {
	const {txt} = props ;
	return (
		<div>
			 <h1>{ props.txt }</h1>
		</div>
	)
}
export default Title