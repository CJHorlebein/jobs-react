import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Axios from 'axios';
import Summary from './Summary.js'

class List extends Component {
    constructor(props){
        super(props);
        let initialState = {
            ref: '',
            jobs: []
        }
        this.state = initialState;
    }
    loadPage(e) {
        e.preventDefault();
        let radios = Array.from(document.getElementsByName('ref'));
        let ref = radios.find( radio => radio.checked ).value;
        this.props.history.push(`/list/${ref}`);
        this.searchJobs(ref);
    }
    searchJobs(ref){
        if (!ref) { ref = this.state.ref }
        Axios.get(`../api/list/${ref}`).then(response => {
            this.setState({
                jobs: response.data
            });
        })
    }
    componentDidMount(){
        if (this.props.match.params.ref){
            this.searchJobs(this.props.match.params.ref);
        }
    }
    render() {
        return (
            <div>            
                <form onSubmit={(e) => this.loadPage(e)}>
                    <input type="radio" name="ref" value="javascript" />
                    <label htmlFor="javascript">Javascript</label>
                    <input type="radio" name="ref" value="python" />
                    <label htmlFor="python">Python</label>
                    <input type="radio" name="ref" value="ruby" />
                    <label htmlFor="ruby">Ruby</label>
                    <button type="submit">submit</button>
                </form>
                {this.state.jobs.map((job, i) => {
                    return (<div key={i}>
                        <Summary job={job} />
                    </div>)
                })}
            </div>
        );
    }
}

export default withRouter(List);
