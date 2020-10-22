import React from 'react'

 const Search = (props) => {
	// console.log(props)
	return (
		<div>
		<input id="search" onChange={props.search} type="search" placeholder="Rechercher..." autoComplete="off" />
			<span>
				{props.qte > 1 ? 'Resultats' : 'Resultat' }<span> {props.qte} </span>
			</span>
		</div>
	)
}
export default Search