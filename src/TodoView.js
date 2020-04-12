import React, { Component } from 'react';
import { setCurPage } from './actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LESSON_TITLES, FUTURE_LESSONS } from './constants';

class TodoView extends Component {

    componentDidMount() {
        this.props.setCurPage("todo");
    }
    render() {
        return (
            <main>
                <h1>Future Updates</h1>

                <p>Here I list out my list of features that I plan to add to this site in the future. They are ordered approximately by highest priority first:</p>

                <p><b>Want to actually help me get these features done! Please consider <Link to="/contribute">contributing to this site!</Link></b></p>

                <h2>Upcoming Lessons (subject to change)</h2>
                <ol start={LESSON_TITLES.length}>
                    {FUTURE_LESSONS.map(title => <li key={title}>{title}</li>)}
                </ol>

                <h2>Other Features Under Consideration</h2>
                <ol>
                    <li>Hands-on Projects</li>
                    <li>Online Judging</li>
                    <li>User Accounts</li>
                </ol>
                
            </main>
        )
    }
    
}


export default connect(null, { setCurPage })(TodoView);