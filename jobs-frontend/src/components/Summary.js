import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Summary extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>{this.props.job.company}</div>
            // <Link to={`../details/${}`}> {} </Link>
        )
    }
}


export default Summary;