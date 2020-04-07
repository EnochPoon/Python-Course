import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurLessonNum } from './actions'
import cx from 'classnames';
import { doubleDigit, LESSON_TITLES } from './constants';

class SideBar extends Component {

    handleLessonNavClick = (lessonNum) => {
        this.props.setCurLessonNum(lessonNum)
    }

    render() {
        const { curLesson } = this.props;
        return (
            <div className="sidebar">
                <Link to="/"><h1>Python-Course</h1></Link>
                <p>By Enoch Poon</p>
                {curLesson >= 0 && <div className="adjacent-links">
                    <button className="adjacent-link-button" disabled={curLesson <= 0}>
                        {curLesson > 0 ? (
                            <Link to={`/${doubleDigit(curLesson - 1)}`}><div><b>Previous Lesson:</b></div>{LESSON_TITLES[curLesson - 1]}</Link>
                        ) : ""}
                    </button>
                    <button className="adjacent-link-button" disabled={curLesson < 0 || curLesson >= LESSON_TITLES.length - 1}>
                        {curLesson >= 0 && curLesson < LESSON_TITLES.length - 1 ? (
                            <Link to={`/${doubleDigit(curLesson + 1)}`}><div><b>Next Lesson:</b></div>{LESSON_TITLES[curLesson + 1]}</Link>
                        ) : ""}
                    </button>
                    
                </div>}
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
