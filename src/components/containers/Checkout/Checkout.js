import React, { Component } from 'react';
import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux'

class Checkout extends Component {

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contactData');
    }
    render() {

        return (
            <div>
                <CheckoutSummary ingredients={this.props.ingredients}
                    checkoutCanceled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler} />
                <Route path={this.props.match.path + '/contactData'}
                    component={ContactData} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients    }
};

export default connect(mapStateToProps) (Checkout);