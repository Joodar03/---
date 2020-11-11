import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import CartItem from "./cart-item";
import "./cart.css"
class Cart extends Component {
    render() {
        return (
            <Container>
                <h1 className="Animation">Cart</h1>
                <CartItem/>
            </Container>
        );
    }
}

export default Cart;