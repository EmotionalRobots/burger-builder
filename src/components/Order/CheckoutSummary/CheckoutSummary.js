import React from 'react';
import styles from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'

const CheckoutSummary = (props) => {


    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!!</h1>
            <div style={{widht: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
            btnType='Danger'
            clicked={props.checkoutCanceled}>CANCEL</Button>
            <Button 
            btnType='Success'
            clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
};

export default CheckoutSummary;