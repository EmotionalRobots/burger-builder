import React, { Component } from 'react';
import Button from '../../../UI/Button/Button';
import styles from './ContactData.module.css'
import Axios from '../../../../axios-orders';
import Aux from '../../../hoc/Aux';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Input/Input';
import { connect } from 'react-redux'

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                }, value: '',
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your phone number'
                }, value: '',
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street address'
                }, value: '',
            },
            zip: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your zip'
                }, value: '',
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your country'
                },
                value: '',
            },

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                }, value: '',
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'fastest', displayedValue: 'Fastest' },
                    { value: 'cheapest', displayedValue: 'Cheapest' },
                    ]
                }, value: '',
            }
        },
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
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        };
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }

        Axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false, purchasing: false });
            this.props.history.push('/');
        }).catch(error => {
            console.log('ERROR: ' + error);
            this.setState({ loading: false, purchasing: false });
        })
    }

    onInputChangeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;

        updatedOrderForm[inputIdentifier] = updatedFormElement;

        this.setState({ orderForm: updatedOrderForm });

        // console.log(event.target.value)
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = {};
        if (this.state.loading) {
            form = <Spinner />
        }
        else {
            form = (
                <Aux>
                    <h1>Enter your contact information:</h1>
                    <form onSubmit={this.orderHandler}>
                        {formElementsArray.map(myFormElement => (
                            <Input
                                key={myFormElement.id}
                                elementType={myFormElement.config.elementType}
                                elementConfig={myFormElement.config.elementConfig}
                                value={myFormElement.config.value}
                                changed={(event) => this.onInputChangeHandler(event, myFormElement.id)} />
                        ))}
                        <Button btnType="Success">ORDER</Button>
                    </form>
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

const mapStateToProps = state => {
   return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}


export default connect(mapStateToProps)(ContactData);