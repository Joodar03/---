import React, {Component} from 'react';
import NavbarMenu from "../navbar/navbar";
import Products from "../products/products";
import Cart from "../cart/cart";
import {Route, BrowserRouter, Switch} from "react-router-dom";


class App extends Component {
    state = {
        data: [
            {
                id: 12,
                title: "Card Title1",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            },
            {
                id: 24,
                title: "Card Title2",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            },
            {
                id: 45,
                title: "Card Title3",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            },
            {
                id: 56,
                title: "Card Title4",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:121000
            },
            {
                id: 67,
                title: "Card Title5",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:111000000000000
            },
            {
                id: 78,
                title: "Card Title6",
                image: "/product.webp",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price:120
            }
        ],
        cart:[

        ]
    }
    addToCart = (id) => () =>{
        this.setState(({cart, data})=>{
            const item ={...data.find((item)=> item.id===id)}
            return {cart:[...cart,item]}
        })
    }
    render() {
        const cartCount = this.state.cart.length
        return (
            <BrowserRouter>
                <div>
                    <NavbarMenu cartCount={cartCount}/>
                    <Switch>
                        <Route exact path="/products">
                            <Products addToCart={this.addToCart} data={this.state.data}/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart data={this.state.cart}/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;