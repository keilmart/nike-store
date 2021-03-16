import React, { Component } from 'react';

import Loader from "react-loader-spinner";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import '../sass/app.scss';

import logo from "../assets/nikeLogo.svg"
import Footer from "./Footer.jsx";
class NikeStore extends Component {
    constructor() {
        super();
        this.state = {
        allShoeInfoArray: [],
        loading: true,
        }
    }
    
    componentDidMount(){
        this.filterNikeStoreProp();
    }

    filterNikeStoreProp() {  
        let ShoeInfoArray = this.props.nikeStoreProp.map((singleShoe) => {
            const returnedShoesInfo = {
                Name: singleShoe.name,
                Style: singleShoe.style,
                Price: singleShoe.price,
                Color: singleShoe.color,
                Image: singleShoe.image,
                Alt: singleShoe.alt
                };
            return returnedShoesInfo
        });
        this.setState({
            allShoeInfoArray: ShoeInfoArray,
            loading: false,
        });
    };

    render() {

        if (this.state.loading) {
            return <div className="loadScreen"><Loader
                type="Puff"
                color="purple"
                height={100}
                width={100}
            /></div>;
        }

        return(
            <React.Fragment>
                <section className="nikeStoreContainer flexContent">
                <h1>Men's Trainers & Shoes ({(Object.keys(this.state.allShoeInfoArray).length)})</h1>

                {/* Make this element sticky? */}
                <ProSidebar>
                    <Menu className="wrapper">
                            {/* <MenuItem icon={<FaGem />}>Dashboard</MenuItem> */}
                            <SubMenu title="Type">
                                {/* <SubMenu title="Components" icon={<FaHeart />}> */}
                                <MenuItem>LifeStyle <input type="checkbox"/></MenuItem>
                                <MenuItem>Jordan <input type="checkbox"/></MenuItem>
                                <MenuItem>BasketBall <input type="checkbox"/></MenuItem>
                            </SubMenu>
                            <SubMenu title="Price">
                                {/* <SubMenu title="Components" icon={<FaHeart />}> */}
                                <MenuItem>$0 - $99 <input type="checkbox"/></MenuItem>
                                <MenuItem>$100 - $199 <input type="checkbox"/></MenuItem>
                                <MenuItem>$200 - $299 <input type="checkbox"/></MenuItem>
                                <MenuItem>$300 - $399 <input type="checkbox"/></MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>

                    {/* <h1>Men's Trainers & Shoes ({(Object.keys(this.state.allShoeInfoArray).length)})</h1> */}

                    {
                        this.state.allShoeInfoArray.map( (singleShoeObject, index) => {
                                return (
                                    <ul key={index}>
                                        <li className="flexContent shoeContainer">
                                            <div className="shoeImageContainer">
                                                <img src={singleShoeObject.Image} alt={singleShoeObject.Alt} />
                                            </div>
                                            <div className="flexContent shoeInfoContainer">
                                                <div className="shoeInfoText"><h4>{singleShoeObject.Name}</h4></div>
                                                <div className="shoeInfoText"><p>{singleShoeObject.Style}</p></div>
                                                <div className="shoeInfoText"><p>{singleShoeObject.Price}</p></div>
                                                <div className="shoeInfoText"><h4>{singleShoeObject.Color}</h4></div>
                                            </div>
                                        </li>
                                    </ul>
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