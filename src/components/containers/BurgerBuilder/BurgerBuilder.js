import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <div>Burger display</div>
                <Burger ingredients={this.state.ingredients} />
                <div>Build controls</div>
                <BuildControls />
            </Aux>
        );
    };
}

export default BurgerBuilder;