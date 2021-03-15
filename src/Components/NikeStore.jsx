import React, { Component } from 'react';

import Footer from "./Footer.jsx";

import '../sass/app.scss';

class NikeStore extends Component {

    render() {
        return(
            <React.Fragment>
                <section className="flexContent nikeStoreContainer">
                    {
                        this.props.nikeStoreProp.map( (singleShoe, index) => {
                                return (
                                    <div key={index} className="flexContent shoeContainer">
                                        <div className="shoeImageContainer">
                                            <img src={singleShoe.image} alt={singleShoe.alt} />
                                        </div>
                                        <div className="flexContent shoeInfoContainer">
                                            <div className="shoeInfoText"><h4>{singleShoe.name}</h4></div>
                                            <div className="shoeInfoText"><p>{singleShoe.style}</p></div>
                                            <div className="shoeInfoText"><p>{singleShoe.price}</p></div>
                                            <div className="shoeInfoText"><h4>{singleShoe.color}</h4></div>
                                        </div>
                                    </div>
                                )
                            // }
                        })
                    } 
                </section>
                <Footer />                    
            </React.Fragment>
        );
    }
}

export default NikeStore;