import React from 'react';
import { LESSON_TITLES, FUTURE_LESSONS, doubleDigit } from './constants';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurLessonNum } from './actions';

class HomeView extends React.Component {

    componentDidMount() {
        this.props.setCurLessonNum(-1);
    }

    render() {
        return (
            <div className="md-wrapper">
                <h1>Introductory Programming in Python</h1>
                <p>By Enoch Poon</p>

                <p>Hello! This is my own website that includes introductory programming lessons in Python. This course is designed for students who are completely new to programming.</p>

                <p><u>Future updates to this site will include more lessons, modifications to older lesson content, and major changes to the user interface.</u></p>

                <h2>Table of Contents</h2>
                <ol start="0">
                    {LESSON_TITLES.map((title, index) => (
                        <li><Link to={`/${doubleDigit(index)}`}>{title}</Link></li>
                    ))}
                </ol>

                <h2>Future Lessons (May be subject to change)</h2>
                <ol start={LESSON_TITLES.length}>
                    {FUTURE_LESSONS.map((title) => <li>{title}</li>)}
                </ol>
            </div>
        );
    }
}

export default connect(state => ({
    curLesson: state.curLesson
}), { setCurLessonNum })(HomeView);
