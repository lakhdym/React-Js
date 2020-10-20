import React, { Component } from 'react'

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
export default Contact