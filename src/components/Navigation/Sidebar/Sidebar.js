import React from 'react';
import styles from './Sidebar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';

const Sidebar = (props) => {
    return (
        <Aux>
        <Backdrop />
        <div className={styles.Sidebar}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <NavigationItems />
        </div>
        </Aux>
    );
};

export default Sidebar;