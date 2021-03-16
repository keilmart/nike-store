import React, { Component } from 'react';

import './sass/app.scss';

import shoeFirebaseCollection from "./firebase.js";

import Homepage from "./Components/Homepage.jsx";
import NikeStore from "./Components/NikeStore.jsx";
// import Footer from "./Components/Footer.jsx";

import logo from "./assets/nikeLogo.svg"

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayHomepage: true,
      displayNikeStore: false,
      nikeShoes: [],
    }
  }

  displayHomepageComponent = () => {
    this.setState({
      displayNikeStore: false,
      displayHomepage: true,
    });
  }

  displayNikeStoreComponent = () => {
    this.setState({
      displayNikeStore: true,
      displayHomepage: false,
    }); 
  }

  componentDidMount() {
   // The following event listener listens to my database for any change and pushes each object from my database into my plants array in the state, which allows me to utilize said data and loop through it.

    const shoeDataFromArray = [];
    const nikeShoesFireStoreData = [];

    shoeFirebaseCollection.on("value", (response) => {
        const nikeShoeItem = response.val();

        for (let singleNikeShoe in nikeShoeItem) {
          shoeDataFromArray.push(nikeShoeItem[singleNikeShoe]);
        }

        const multipleNikeShoeObject = shoeDataFromArray[0];

        Object.entries(multipleNikeShoeObject).map(([key, value]) => {
          const innerShoeObject = [key, value];
          const shoe = innerShoeObject[1];

          nikeShoesFireStoreData.push({alt: shoe.alt, color: shoe.color, image: shoe.image, name: shoe.name, price: shoe.price, style: shoe.style, });

          this.setState({
            nikeShoes: nikeShoesFireStoreData
          })
        })
      })
    }

  render() {
    return (
      <React.Fragment>
        <header className="flexContent wrapper">
          <div className="logoContainer">
            <img src={logo} alt="" onClick={this.displayHomepageComponent}></img>
          </div>
          <div className="categoryMenu">
              <ul>
                <li onClick={this.displayHomepageComponent}>Clothes</li>
                <li onClick={this.displayNikeStoreComponent}>Shoes</li>
            </ul>
          </div>
          <nav className="topNav">
            <ul>
              <li onClick={this.displayNikeStoreComponent}>Cart</li>
            </ul>
          </nav>
        </header>
        <main>
          <div>
            {this.state.displayHomepage ? <Homepage nikeStoreProp={this.state.nikeShoes} /> : null}
          </div>
          <div>
            {this.state.displayNikeStore ? <NikeStore nikeStoreProp={this.state.nikeShoes} /> : null}
          </div>
        </main>
        {/* {this.state.displayHomepage ? null : <Footer />} */}
      </React.Fragment>
    );
  }
}

export default App;