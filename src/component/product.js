import React, { Component } from 'react';
import BuyButton from './BuyButton';

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
        
    }
}