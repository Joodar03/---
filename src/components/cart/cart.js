import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import CartItem from "./cart-item";
import "./cart.css"
class Cart extends Component {
    render() {
        return (
            <Container>
                <h1 className="Animation">Cart</h1>
                {this.props.data.map((item)=><CartItem key={item.id} {...item}/>)}
            </Container>
        );
    }
}

export default Cart;