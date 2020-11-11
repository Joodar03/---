import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class CartItem extends Component {
    render() {
        return (
            <div className="Main ">
                     <img variant="top" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart_full.png" className="MAIN"/>
                <p className="Text">Мы продаем только фальшивые товары и мы хотим вас развести так что покупайте а мы вас ограбим!))</p>
                <div className="Function">
                    <button className="btn btn-outline-success" style={{padding:"2px", marginLeft:"10px"}}>Buy</button>
                    <button className="btn btn-outline-danger" style={{padding:"2px", marginLeft:"10px"}}>Add</button>
                    <span style={{padding:"2px", marginLeft:"10px"}}>Price:</span>
                    <span style={{padding:"2px", marginLeft:"10px"}}>100</span>
                    <span style={{padding:"2px", marginLeft:"10px"}}>RUB</span>
                </div>
            </div>
        );
    }
}

export default CartItem;