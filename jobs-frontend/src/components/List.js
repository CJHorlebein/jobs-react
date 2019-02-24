import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class List extends Component {
    constructor(props){
        super(props);
        let initialState = {
            ref: '',
            selected: '',
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
    setRedirect(e) {
        this.setState({
            selected: e.target.value
        })
    }
    loadPage(e) {
        e.preventDefault();
        this.props.history.push(`/list/${this.state.selected}`);
    }
    render() {
        if (this.state.ref !== this.props.match.params.ref){
            this.updateJobs();
        }
        return (
            <div>            
                <form onSubmit={(e) => this.loadPage(e)}>
                    <input onChange={(e) => this.setRedirect(e)} type="radio" name="ref" value="javascript" />
                    <label htmlFor="javascript">Javascript</label>
                    <input onChange={(e) => this.setRedirect(e)} type="radio" name="ref" value="python" />
                    <label htmlFor="python">Python</label>
                    <input onChange={(e) => this.setRedirect(e)} type="radio" name="ref" value="ruby" />
                    <label htmlFor="ruby">Ruby</label>
                    <button type="submit">submit</button>
                </form>
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
