import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";


class ProductItem extends Component {
    render() {
        const {text, title, image, price, id,addToCart} = this.props
        return (
            <Card style={{minWidth: '18rem', marginTop: '20px'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="btn btn-outline-primary" onClick={addToCart}>Buy</Button>
                    <button className="btn btn-outline-danger"
                            style={{padding: "2px", marginLeft: "10px"}}>Add</button>
                    <p>{price}</p>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductItem;