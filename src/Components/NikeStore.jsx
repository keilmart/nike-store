import React, { Component } from 'react';
// import React, { Component, useState, useEffect } from 'react';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import Footer from "./Footer.jsx";

import '../sass/app.scss';

    // const Persons = (props) =>  {
    //     const [nameState , setNameState] = useState(props)

    // useEffect(() => {
    //     setNameState(props);
    // }, [props])

class NikeStore extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     nikeStoreDataArray: [],
    //     }
    //         this.setState({
    //         nikeShoeDataArray: this.props.nikeStoreProp.bind(this),
    //     })
    // }

    
    // constructor(props) {
    // super(props);

    // this.state = {
    //     checkedItems: new Map(),
    // }

    // this.handleChange = this.handleChange.bind(this);
    // }

    //     handleChange(e) {
    // const item = e.target.name;
    // const isChecked = e.target.checked;
    // this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    // }


    render() {
        console.log(this.props.nikeStoreProp)
        return(
            <React.Fragment>
                
                {/* <h1>Men's Trainers & Shoes(18)</h1> */}
                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem>Shoes</MenuItem>
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
                    </ProSidebar>;

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