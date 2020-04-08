import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurLessonNum } from './actions'
import classNames from 'classnames';
import { doubleDigit, LESSON_TITLES, FUTURE_LESSONS } from './constants';

class SideBar extends Component {

    render() {
        const { curLesson } = this.props;
        return (
            <div className="sidebar">
                <Link to="/"><h1>Python-Course</h1></Link>
                <p>By Enoch Poon</p>

                <h2>Published Lessons</h2>
                <div className="lesson-list">
                    { LESSON_TITLES.map((title, index) => 
                        <Link
                        to={`/${doubleDigit(index)}`}
                        key={title}
                        className={classNames('lesson-title', {active: index === curLesson})}>
                            {`${index}: ${title}`}
                        </Link>
                    )}
                </div>

                <h2>Future Lessons</h2>
                <div>(subject to change)</div>
                <div className="lesson-list">
                    { FUTURE_LESSONS.map((title, index) => 
                        <div className="lesson-title" key={title}>{`${index + LESSON_TITLES.length}: ${title}`}</div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        curLesson: state.curLesson
    }
}

export default connect(mapStateToProps, { setCurLessonNum })(SideBar);
