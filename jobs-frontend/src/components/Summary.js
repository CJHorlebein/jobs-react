import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let cssBlock = {
    border: '1px solid grey',
    boxShadow: '2px 2px 2px grey',
    padding: '0.5rem',
    margin: '0.5rem'
}
let cssHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#222222',
}

let cssTitles = {
    marginRight: '3rem'
}

let cssSubHeader = {
    color: '#777777'
}

let cssLink = {
    textDecoration: 'none',
    color: '#444444',
    fontWeight: '800'
}

class Summary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let job = { ...this.props.job }
        let date = new Date(job.created_at);
        return (
            <div style={cssBlock}>
                <div style={cssHeader}>
                    <div>
                        <h3 style={cssTitles}>{job.title}</h3>
                        <h5 style={cssSubHeader}>{job.location}</h5>
                    </div>
                    <div>
                        <h3 align='right'>{job.company}</h3>
                        <h5 style={cssSubHeader} align='right'>{date.toLocaleDateString()}</h5>
                    </div>
                </div>
                <Link style={cssLink} to={`../details/${job.id}`}> Read More... </Link>
            </div>
        )
    }
}


export default Summary;