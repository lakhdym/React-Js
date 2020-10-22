import React from 'react'

const Produit = (props) => {
	return (

				<div className="card-container">
					{props.products.map((produit) => {
						return (
							<div key={produit.id} className="card">
								<div className="img-container">
									<img src={produit.img}  alt=""/>
								</div>
								<div className="card-text">
									<h3>{produit.description}</h3>
									<span>{produit.price} $</span>
								</div>
								<div className="card-icons">
									<div className="like-container">
										<input type="checkbox" name="checkbox" />
										<label >
											<i className="fas fa-heart"></i>
										</label>
									</div>
									<div className="add-to-cart">
										<button onClick={() => props.AddPanier(produit)}>
											<i className="fas fa-shopping-cart"></i>
										</button>
									</div>
								</div>
							</div>

						)
					}
					)
					}
				</div>


	)
}


export default Produit