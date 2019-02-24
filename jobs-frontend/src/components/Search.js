import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        let initialState = {
            selected: ''
        }
        this.state = initialState;
    }
    setRedirect(e){
        this.setState({
            selected: e.target.value
        })
    }
    loadPage(e){
        e.preventDefault();
        this.props.history.push(`/list/${this.state.selected}`);
    }

    render() {
        return (
            <form onSubmit={(e) => this.loadPage(e)}>
                <input onChange={(e) => this.setRedirect(e)} type="radio" name="ref" value="javascript" />
                <label htmlFor="javascript">Javascript</label>
                <input onChange={(e) => this.setRedirect(e)} type="radio" name="ref" value="python" />
                <label htmlFor="python">Python</label>
                <input onChange={(e) => this.setRedirect(e)} type="radio" name="ref" value="ruby" />
                <label htmlFor="ruby">Ruby</label>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default Search;
