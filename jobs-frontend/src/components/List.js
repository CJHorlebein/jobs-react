import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class List extends Component {
    constructor(props){
        super(props);
        let initialState = {
            ref: '',
            jobs: []
        }
        this.state = initialState;
    }
    updateJobs(){
        let ref = this.props.match.params.ref;
        if(!ref){ref = ""}
        Axios.get(`../api/list/${ref}`).then(response => {
            this.setState({
                ref,
                jobs: response.data
            })
        })
    }
    componentDidMount(){
        this.updateJobs()
    }
    render() {
        // console.log(this.state.jobs)
        if (this.state.ref !== this.props.match.params.ref){
            this.updateJobs();
        }
        return (
            <div>
                {this.state.jobs.map((job, i) => {
                    return <div key={i}>
                        <Link to={`../details/${job.id}`}> {job.company} </Link>
                    </div>
                })}
            </div>
        );
    }
}

export default withRouter(List);
