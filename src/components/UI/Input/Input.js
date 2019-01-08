import React from 'react';
import styles from './Input.module.css'

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('textarea'): inputElement = <textarea
            className={styles.inputElement}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed} />
            break;
        case ('input'): inputElement = <input
            className={styles.inputElement}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed} />
            break;
        case ("select"): inputElement = (
            <select
                className={styles.inputElement}
                value={props.value}
                onChange={props.changed} >
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}
                    >{option.displayedValue}</option>
                ))}
            </select>
        );
            break;
        default: inputElement = <input
            className={styles.inputElement}
            {...props.elementConfig}
            value={props.value} />
            break;
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;