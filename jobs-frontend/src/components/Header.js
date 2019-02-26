import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

let navStyle = {
    display: 'inline-block',
    margin: '.8em 1em',
    fontSize: '18px',
    color: "#E1E0E9",
    textDecoration: 'none'
}

let headerStylers = {
    backgroundColor: "#1E1959",
    height: '6vh'
}

class Header extends Component {
    render() {
        return (
            <div style={headerStylers}>
                <NavLink style={navStyle} to="/">Home</NavLink>
                <NavLink style={navStyle} to="/list">Search</NavLink>
            </div>
        );
    }
}

export default Header;
