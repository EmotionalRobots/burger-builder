import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1,
    bacon: .7
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // }

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0)

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceSubtraction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceSubtraction;

            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            })
            this.updatePurchaseState(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCanceledHandler = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinueHandler = () => {
        alert('CONTINUE!');
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCanceledHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        continue={this.purchaseContinueHandler}
                        cancel={this.purchaseCanceledHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    };
}

export default BurgerBuilder;