import React, { Component } from 'react';
import Button from '../../../UI/Button/Button';
import styles from './ContactData.module.css'
import Axios from '../../../../axios-orders';
import Aux from '../../../hoc/Aux';
import Spinner from '../../../UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zip: ''
        },
        loading: false,
        price: 0
    }

    orderHandler = (event) => {
        this.setState({ loading: true });
        event.preventDefault();
        // alert('CONTINUE!');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Chris Anderson',
                phone: '6786026067',
                address: {
                    street: '308 Harbor Pointe Parkway',
                    zip: '30127',
                    country: 'USA'
                },
                email: 'chrisanderson@myself.com',
            },
            deliveryMethods: 'fastest'

        }
        Axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false, purchasing: false });
            this.props.history.push('/');
        }).catch(error => {
            console.log('ERROR: ' + error);
            this.setState({ loading: false, purchasing: false });
        })
    }


    render() {
        let form = {};
        if (this.state.loading) {
            form = <Spinner />
        }
        else {
            form = (
                <Aux>
                    <h1>Enter your contact information:</h1>
                    <input className={styles.Input} type='text' name='name' placeholder='Your name' />
                    <input className={styles.Input} type='email' name='email' placeholder='Your email' />
                    <input className={styles.Input} type='text' name='street' placeholder='Your street address' />
                    <input className={styles.Input} type='number' name='zip' placeholder='Your zip' />

                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </Aux>
            )
        }
        return (
            <div className={styles.ContactData}>
                {form}
            </div>
        );
    }
}

export default ContactData;