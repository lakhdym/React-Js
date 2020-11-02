import React, { Component } from 'react'
//import Contact from './contact/Contact';
import NavBar from './header/NavBar';

import Produit from './produits/Produit';
import Search from './header/Search'
import Panier from './produits/Panier';
import Axios from 'axios';


// const products = [
//   { id: 1, description: "Quarz Luxe", price: 12, img: '/img/quarz-luxe.JPG' },
//   { id: 2, description: 'Curren Business', price: 20, img: '/img/curren-business.JPG' },
//   { id: 3, description: 'Curren Sport', price: 5, img: '/img/curren-sport.JPG' },
//   { id: 4, description: 'Jaragar Racing', price: 8, img: '/img/jaragar-racing.JPG' },
//   { id: 5, description: 'Liges Hommes', price: 3, img: '/img/liges-hommes.JPG' },
//   { id: 6, description: 'Maserati Mechanical', price: 65, img: '/img/maserati-mechanical.JPG' },
//   { id: 7, description: 'Montre Mecanique', price: 25, img: '/img/montre-mecanique.JPG' },
//   { id: 8, description: 'Brand Designer', price: 28, img: '/img/brand-designer.JPG' },
//   { id: 9, description: 'Relogio Masculino', price: 4, img: '/img/relogio-masculino.JPG' },
//   { id: 10, description: 'Tissot Multifunction', price: 29, img: '/img/tissot-multifunction.JPG' },
//   { id: 11, description: 'Hip Hop Gold', price: 87, img: '/img/hiphop-gold.JPG' },
//   { id: 12, description: 'Mesh Genova', price: 6, img: '/img/mesh-genova.JPG' },
// ];

class Home extends Component {
  state = {
    products: [],
    qte: 0,
    prodactsFiltter: [],
    startFillter: false,
    panier: [],
    qtePanier: false,
    total: 0
  }

  componentDidMount() {
    Axios.post('http://localhost/axios/php/action.php', {
      action: 'fetchall',
    })
      .then(response => {
        this.setState( () => {
          return {
            products: response.data,
            qte : response.data.length
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeFilter = (event) => {
    const prodactsFiltters = this.state.products.filter((item) => {
      //return item.description.toUpperCase().includes(event.target.value.toUpperCase())
      return item.description.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1
    });

    this.setState({
      prodactsFiltter: prodactsFiltters,
      qte: prodactsFiltters.length,
      startFillter: true,

    })
  }

  DeleteProduitPanier = (produit) => {

    this.setState({ total: this.state.total - (produit.qteProduit * parseInt(produit.price)) })

    this.setState({
      panier: this.state.panier.filter(function (p) {
        return p !== produit
      })
    });
  }
  // 2éme méthode de supprission par index et splice :( ca marche pas 
  /* DelProduit = (produit , index) => {
     
          this.setState( { total : this.state.total - (produit.qteProduit * produit.price )})
          this.setState(function (previousState) {
 
            let newDatapanier = this.state.panier.splice(index,1)
 
           return {  
             panier : newDatapanier
           }
           
           });
   }
 */
  filterIndexProduit = (produit, action) => {
    for (let i = 0; i < this.state.panier.length; i++) {
      if (this.state.panier[i].id === produit.id) {
        if (action === '+') {

          this.setState(function (previousState) {
            previousState.panier[i].qteProduit++
            console.log(parseInt(this.state.panier[i].price))
            previousState.total = parseInt(previousState.total) + parseInt(this.state.panier[i].price)
            return {
              panier: previousState.panier,
              total: parseInt(previousState.total)
            }
          });


        } else if (action === '-') {

          if (this.state.panier[i].qteProduit === 1) {
            this.setState({
              panier: this.state.panier.filter(function (p) {
                return p !== produit
              })
            });

          } else {
            this.setState(function (previousState) {
              previousState.panier[i].qteProduit--
              return {
                panier: previousState.panier,

              }
            });

          }
          // mise a jour total
          this.setState(function (previousState) {
            previousState.total -= parseInt(this.state.panier[i].price)
            return {
              total: previousState.total,

            }
          });
        }

        return 1
      }
    }
    return 0
  }
  // add qte produit for panier
  AddPlusQte = (produit) => {
    this.filterIndexProduit(produit, '+')
  }

  // supprimer qte produit for panier
  MoinQte = (produit) => {
    if (this.filterIndexProduit(produit, '-') === 1) {
      if (this.state.panier.length === 0) {
        this.setState({
          qtePanier: false,
        })
      }
      return true
    }
  }

  // add produit in panier if no exist or Add qte++
  AddPanier = (produit) => {

    if (this.filterIndexProduit(produit, '+') === 1) {
      return true
    }

    this.state.panier.push({
      id: produit.id,
      description: produit.description,
      img: produit.img,
      price: parseInt(produit.price),
      qteProduit: 1
    })
    // mise a jour total

    this.setState(function (stateOld) {
      stateOld.total += parseInt(produit.price)
      return {
        total: stateOld.total,

      }
    });
    this.setState({
      qtePanier: true,

    })
  }
  render() {
    return (
      <div className="App">
 
        <NavBar />
        <div className="home-container">
          <h1>Articles </h1>
          <Search search={this.onChangeFilter} qte={this.state.qte} />
          <div className="card-cart-container">
            <Produit AddPanier={this.AddPanier} products={this.state.startFillter === false ? this.state.products : this.state.prodactsFiltter} />

            <Panier
              panier={this.state.panier}
              AddPlusQte={this.AddPlusQte}
              MoinQte={this.MoinQte}
              DeleteProduitPanier={this.DeleteProduitPanier}
              DelProduit={this.DelProduit}
              Total={this.state.total} />

          </div>
        </div>
      </div>
    )
  }
}
export default Home;