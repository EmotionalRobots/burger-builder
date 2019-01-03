import React from 'react';
import styles from './Sidebar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';

const Sidebar = (props) => {
    let myClasses = [styles.Sidebar, styles.Close];
    if(props.open) {
        myClasses = [styles.Sidebar, styles.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={myClasses.join(' ')}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <NavigationItems />
        </div>
        </Aux>
    );
};

export default Sidebar;