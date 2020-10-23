import React, { Fragment } from 'react'

const Panier = (props) => {
	return (

		<Fragment>

			{props.panier.length !== 0 ?

				<div id="shopping-cart" className="shopping-cart">
					<h2>Panier </h2>
					{
						props.panier.map((produit, index) => {
							return (
								<div key={index} className="item-group">
									<div className="item">
										<div className="img-container">
											<img src={produit.img} alt="" />
										</div>
										<div className="item-description">
											<h4>{produit.description}</h4> <p>{produit.price}€</p>
										</div>
										<div className="item-quantity">
											<h6>quantité : {produit.qteProduit}</h6>
											<div className="cart-icons">
												<button onClick={() => props.AddPlusQte(produit)} ><i className="fa fa-plus"></i></button>
												<button onClick={() => props.MoinQte(produit)}><i className="fa fa-minus"></i></button>
												<button onClick={() => props.DeleteProduitPanier(produit)}><i className="fa fa-trash"></i></button>
											</div>
										</div>
									</div>
								</div>
							)
						})}
					<div className="grand-total">
						<div className="total"><h2>Total</h2>
							<h2>{props.Total} €</h2>
						</div>
						<h6>Total articles : {props.panier.length}</h6>
					</div>
				</div> : <Fragment />
			}


		</Fragment>
	)
}

export default Panier