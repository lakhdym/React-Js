import React from 'react'

const  Panier = (props) => {
	return (
		<div>
			<div id="shopping-cart" className="shopping-cart">
				<h2>Panier</h2>
				{
					props.panier.map((produit,index) => {
						return (
									<div  key={index} className="item-group">
									<div className="item">
										<div className="img-container">
											<img src={produit.img} />
										</div>
										<div className="item-description">
											<h4>{produit.description}</h4> <p>{produit.price}€</p>
										</div>
										<div className="item-quantity">
											<h6>quantité : 1</h6>
											<div className="cart-icons">
												<button><i className="fa fa-plus"></i></button>
												<button><i className="fa fa-minus"></i></button>
												<button><i className="fa fa-trash"></i></button>
											</div>
										</div>
									</div>
								</div>
					)
				})
				}

			</div>
		</div>
	)
}
export default Panier