import React, { Component } from 'react';

import Loader from "react-loader-spinner";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import Footer from "./Footer.jsx";

import '../sass/app.scss';

import logo from "../assets/nikeLogo.svg"


class NikeStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
        // allShoeInfoArray: this.props.nikeStoreProp,
        filterList: this.props.nikeStoreProp,
        loading: true,
        filterLists: 
            [
                {
                    name: "LifeStyle",
                    style: "Lifestyle",
                    alt: "12345"
                },
                {
                    name: "Jordan",
                    style: "Jordan",
                    alt: "123"
                },
                {
                    name: "BasketBall",
                    style: "BasketBall",
                    alt: "456"
                },
            ],
            activeFilter: []
        };
    }
    
    componentDidMount(){
        this.filteringShoeCategoryFunction();
    }

    // filterNikeStoreProp() {  
    //     let ShoeInfoArray = this.props.nikeStoreProp.map((singleShoe) => {
    //         const returnedShoesInfo = {
    //             Name: singleShoe.name,
    //             Style: singleShoe.style,
    //             Price: singleShoe.price,
    //             Color: singleShoe.color,
    //             Image: singleShoe.image,
    //             Alt: singleShoe.alt
    //             };
    //         return returnedShoesInfo
    //     });
    //     this.setState({
    //         allShoeInfoArray: ShoeInfoArray,
    //         loading: false,
    //     });
    //     this.filteringShoeCategoryFunction();
    // };


    // // --- TEST --- //
    //     onBarClick = (obj) => {
    // console.log(obj) 
    // let province = obj.activePayload[0].payload;
    // console.log(province)
    // const provinceCount = province.Cases
    // console.log(provinceCount)
    // };
    // // --- TEST OVER --- //

      onFilterChange(filter) {
    const { filterList, activeFilter } = this.state;
    if (filter === "ALL") {
      if (activeFilter.length === filterList.length) {
        this.setState({ activeFilter: [] });
      } else {
        this.setState({ activeFilter: filterList.map(filter => filter.value) });
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeFilter: newFilter });
      } else {
        this.setState({ activeFilter: [...activeFilter, filter] });
      }
    }
  }

    filteringShoeCategoryFunction() {
        let allShoeCategories = this.state.filterList.filter(
            (shoeCategorySelected) => {
                if (shoeCategorySelected.style === 'Lifestyle') {
                // if (shoeCategorySelected.style.includes('Lifestyle')) {
                    return true;
                } else {
                    return false;
                }
            }
        )
        this.setState({
            selectedStyleCategory: allShoeCategories,
            loading: false,
        });
    }
    

    render() {
        console.log(this.state.filterList)
        console.log(this.state.selectedStyleCategory)

        if (this.state.loading) {
            return <div className="loadScreen">
            <Loader
                type="Puff"
                color="purple"
                height={100}
                width={100}
            /></div>;
        }

        return(
            <React.Fragment>
                <section className="nikeStoreContainer flexContent">
                <h1>Men's Trainers & Shoes ({(Object.keys(this.state.filterList).length)})</h1>

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
                        this.state.filterList.map( (singleShoeObject, index) => {
                                return (
                                    <ul key={index}>
                                        <li className="flexContent shoeContainer">
                                            <div className="shoeImageContainer">
                                                <img src={singleShoeObject.image} alt={singleShoeObject.Alt} />
                                            </div>
                                            <div className="flexContent shoeInfoContainer">
                                                <div className="shoeInfoText"><h4>{singleShoeObject.name}</h4></div>
                                                <div className="shoeInfoText"><p>{singleShoeObject.style}</p></div>
                                                <div className="shoeInfoText"><p>{singleShoeObject.price}</p></div>
                                                <div className="shoeInfoText"><h4>{singleShoeObject.color}</h4></div>
                                            </div>
                                        </li>
                                    </ul>
                                )
                            // }
                        })
                    } 

                    {
                        this.state.selectedStyleCategory.map( (singleShoeObject, index) => {
                                return (
                                    <ul key={index}>
                                        <li className="flexContent shoeContainer">
                                            <div className="shoeImageContainer">
                                                <img src={singleShoeObject.image} alt={singleShoeObject.Alt} />
                                            </div>
                                            <div className="flexContent shoeInfoContainer">
                                                <div className="shoeInfoText"><h4>{singleShoeObject.name}</h4></div>
                                                <div className="shoeInfoText"><p>{singleShoeObject.style}</p></div>
                                                <div className="shoeInfoText"><p>{singleShoeObject.price}</p></div>
                                                <div className="shoeInfoText"><h4>{singleShoeObject.color}</h4></div>
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