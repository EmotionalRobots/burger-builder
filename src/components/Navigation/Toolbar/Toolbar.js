import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggle from '../Sidebar/MenuToggle/MenuToggle';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <MenuToggle clicked={props.menuToggleClicked} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>

)

export default toolbar;