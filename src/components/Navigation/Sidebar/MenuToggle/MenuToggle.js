import React from 'react';
import styles from './MenuToggle.module.css'

const MenuToggle = (props) => {
    return (
        <div className={styles.MenuToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default MenuToggle;