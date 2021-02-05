import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import logo from '../assets/img/logo.png';

const Header = () => (
    <AppBar position='sticky'>
        <Toolbar>
            <img src={logo} alt="logo" width="32" height="32"></img>
            &nbsp;&nbsp;
            <h1>Nutritional App</h1>
        </Toolbar>
    </AppBar>
);

Header.displayName = 'Header';

export default Header;