import React, { Component } from 'react';

let footerStyles = {
    position: 'fixed',
    bottom: '0',
    height: '5vh',
    width: '100vw',
    backgroundColor: '#DEDDEA'
};

let boxStyles = {
    textAlign: 'center',
    paddingTop: '.8em'
};

let textStyles = {
    color: '#4A4A4E',
    textShadow: '1px 1px #4A4A4E11',
    fontSize: '20px'
};
class Footer extends Component {
    render() {
        return (
            <div style={footerStyles}>
                <div style={boxStyles}>
                    <p style={textStyles}>2019 Rights Reserved</p>
                </div>
            </div>
        );
    }
}

export default Footer;
