import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

class Details extends Component {
    constructor(props){
        super(props);
        let initialState = {
            id: this.props.match.params.id,
            job: {}
        }
        this.state = initialState;
    }
    componentDidMount(){
        Axios.get(`../api/details/${this.state.id}`).then(response => {
            this.setState({
                id: this.state.id,
                job: response.data
            });
        });
    }
    render() {
        console.log(this.state.job);
        return (
            <div>
                <a href={this.state.job.url}>Visit the job application!</a>
            </div>
        );
    }
}

export default withRouter(Details);
