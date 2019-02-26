import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

let cssBlock = {
    width: '60vw',
    margin: '2em auto 5em'
};

let cssHeader = {
    display: 'flex'
};

let cssTitles = {
    margin: '2.5em'
};

let cssJob = {
    color: '#333333'
};

let cssCompany = {
    color: '#555555'
};

let cssPlace = {
    color: '#777777',
    marginTop: '.5em'
};

let cssLogo = {
    width: '10em',
    height: '10em'
};

let cssLink = {
    margin: '0 auto 1em',
    paddingTop: '.8rem',
    backgroundColor: '#006644',
    textAlign: 'center',
    color: 'white',
    width: '5em',
    height: '2em',
    borderRadius: '5%'
};

let cssLinkText = {
    textDecoration: 'none',
    fontWeight: '700',
    color: '#DDEBE6'
};

let cssDate = {
    marginTop: '1em',
    color: '#444444'
};
class Details extends Component {
    constructor(props) {
        super(props);
        let initialState = {
            id: this.props.match.params.id,
            job: {}
        };
        this.state = initialState;
    }
    componentDidMount() {
        Axios.get(`../api/details/${this.state.id}`).then(response => {
            this.setState({
                job: response.data
            });
        });
    }
    render() {
        let job = { ...this.state.job };
        let date = new Date(job.created_at);
        return (
            <div style={cssBlock}>
                <div style={cssHeader}>
                    <div>
                        <img style={cssLogo} src={job.company_logo} />
                    </div>
                    <div style={cssTitles}>
                        <h1 style={cssJob}>{job.title}</h1>
                        <h2 style={cssCompany}>{job.company}</h2>
                        <h4 style={cssPlace}>{job.location}</h4>
                    </div>
                </div>
                <div style={cssLink}>
                    <a style={cssLinkText} href={job.url}>
                        Apply!
                    </a>
                </div>
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
                <br />
                <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
                <h5 style={cssDate}>Job posted on {date.toLocaleDateString()}!!!</h5>
            </div>
        );
    }
}

export default withRouter(Details);
