import React, { Component } from 'react'
//import Contact from './components/contact/Contact';
import NavBar from './components/header/NavBar';
import './App.css';
import Produit from './components/produits/Produit';
import Search from './components/header/Search'
import Panier from './components/produits/Panier';

const products = [
  { id: 1, description: "Quarz Luxe", price: 12, img: '/img/quarz-luxe.JPG' },
  { id: 2, description: 'Curren Business', price: 20, img: '/img/curren-business.JPG' },
  { id: 3, description: 'Curren Sport', price: 5, img: '/img/curren-sport.JPG' },
  { id: 4, description: 'Jaragar Racing', price: 8, img: '/img/jaragar-racing.JPG' },
  { id: 5, description: 'Liges Hommes', price: 3, img: '/img/liges-hommes.JPG' },
  { id: 6, description: 'Maserati Mechanical', price: 65, img: '/img/maserati-mechanical.JPG' },
  { id: 7, description: 'Montre Mecanique', price: 25, img: '/img/montre-mecanique.JPG' },
  { id: 8, description: 'Brand Designer', price: 28, img: '/img/brand-designer.JPG' },
  { id: 9, description: 'Relogio Masculino', price: 4, img: '/img/relogio-masculino.JPG' },
  { id: 10, description: 'Tissot Multifunction', price: 29, img: '/img/tissot-multifunction.JPG' },
  { id: 11, description: 'Hip Hop Gold', price: 87, img: '/img/hiphop-gold.JPG' },
  { id: 12, description: 'Mesh Genova', price: 6, img: '/img/mesh-genova.JPG' },
];




class App extends Component {
  state = {
    products,
    qte: products.length,
    prodactsFiltter:[],
    startFillter : false,
    panier:[],
    qtePanier : false
  }
  onChangeFilter = (event) => {
    const  prodactsFiltters = this.state.products.filter((item) => {
     //return item.description.toUpperCase().includes(event.target.value.toUpperCase())
     return item.description.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1
    });
    
    this.setState({
      prodactsFiltter : prodactsFiltters,
      qte : prodactsFiltters.length,
      startFillter : true,

    })
    

  }
  AddPanier = (produit) => {
    this.state.panier.push([
      'id' = produit.id,
      'description' = produit.description,
    ])
  //  console.log(produit)
  
  this.setState({
    qtePanier : true,

  })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="home-container">
          <h1>Articles</h1>
          <Search search={this.onChangeFilter} qte={this.state.qte} />
          <div className="card-cart-container">      				
                <Produit AddPanier={this.AddPanier} products={ this.state.startFillter === false ?  this.state.products : this.state.prodactsFiltter }  />
              {this.state.qtePanier === true ? <Panier  panier={this.state.panier}/> : ''}
                
          </div>
        </div>
      </div> 
    )
  }
}
export default App;