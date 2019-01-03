import React, { Component } from 'react';
import Aux from '../hoc/Aux'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

class Layout extends Component {
    state = {
        showSidebar: false
    }

    sidebarClosedHandler = () => {
        this.setState({ showSidebar: false });
    }
    sidebarToggleHandler = () => {
        this.setState((prevState) => { return { showSidebar: !prevState.showSidebar } });
    }

    render() {
        return (
            <Aux>
                <Toolbar menuToggleClicked={this.sidebarToggleHandler} />
                <Sidebar closed={this.sidebarClosedHandler} open={this.state.showSidebar} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;