import React, { Component } from 'react';
import { setCurPage } from './actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TodoView extends Component {

    componentDidMount() {
        this.props.setCurPage("todo");
    }
    render() {
        return (
            <main>
                <h1>TODO List</h1>

                <p>Here I list out my list of features that I plan to add to this site in the future. They are ordered approximately by highest priority first:</p>
                <ol>
                    <li>More Lessons</li>
                    <li>Updated sidebar UI and potentially add a header bar
                        <ul>
                            <li>Considering using some React component library out there that looks super beautiful</li>
                        </ul>
                    </li>
                    <li>Consider more hands-on projects</li>
                </ol>
                <p><b>Want to actually help me get these features done! Please consider <Link to="/contribute">contributing to this site!</Link></b></p>
            </main>
        )
    }
    
}


export default connect(null, { setCurPage })(TodoView);