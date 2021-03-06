import React from 'react';
import Aux from "../../hoc/Aux";
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key = {igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}
            </li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary} 
            </ul>
            <p><strong>Total price: ${(Math.round(props.price * 10) / 10).toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>

            
        </Aux>
    )
};
export default orderSummary;
