import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class CartItem extends Component {
    render() {
        const {text, image, price, id} = this.props
        return (
            <div className="Main ">
                <Card.Img variant="top" src={image} className="MAIN"/>
                <p className="Text">{text}</p>
                <div className="Function">
                    <button className="btn btn-outline-success"
                            style={{padding: "2px", marginLeft: "10px"}}>Buy</button>
                    <button className="btn btn-outline-danger"
                            style={{padding: "2px", marginLeft: "10px"}}>Add</button>
                    <span style={{padding: "2px", marginLeft: "10px"}}>{price}</span>
                </div>
            </div>
        );
    }
}

export default CartItem;