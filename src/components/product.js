import React, { Component } from 'react';
import BuyButton from './buyButton'

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true, product: {} }
    }

    async componentDidMount() {
        let response = await fetch(`https:localhost:1337/products/${this.props.match.params.id}`)
        let data = await response.json()
        this.setState({
            loading: false,
            product: data
        })
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className="product">
                    <div className="product__information">
                        <h2 className="Product-title">{this.state.product.name}</h2>
                        <img src={`https://localhost:1337/${this.state.product.image.url}`} />
                        <BuyButton {...this.state} />
                    </div>
                    <div className="product__description">
                        {this.state.product.description}
                    </div>
                </div>
            );
        }

        return (<h2>Waiting for API...</h2>);
    }
}

export default Product;