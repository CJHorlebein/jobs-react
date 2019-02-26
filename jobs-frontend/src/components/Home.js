import React, { Component } from 'react';

let blockStyles = {
    marginTop: '20vh',
    textAlign: 'center'
}

let textStyles ={
    color: '#1E1959'
}

let coloumnStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '8em auto 0',
    width: '50em'
}

class Home extends Component {
    render() {
        return (
            <div>
                <div style={blockStyles}>
                        <p style={{ ...textStyles, fontSize: '4rem' }}>Atlanta Jobs</p>
                        <p style={{ ...textStyles, fontSize: '2rem' }}>Apply Today!</p>
                </div>
                <div style={coloumnStyles}>
                    <div>
                        <h1>Innovation</h1>
                    </div>
                    <div>
                        <h1>Technology</h1>
                    </div>
                    <div>
                        <h1>Revolution</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
