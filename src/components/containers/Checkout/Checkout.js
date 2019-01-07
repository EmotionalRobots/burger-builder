import React, { Component } from 'react';
import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: [],
        price: 0
    }


    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        for (let param of query.entries()) {

            if (param[0] === 'price') {
                this.state.price = +param[1]
            }
            else {
                ingredients[param[0]] = +param[1];
            }
        }

        this.setState({ ingredients: ingredients })
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contactData');
    }
    render() {

        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler} />
                <Route path={this.props.match.path + '/contactData'}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;