import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurPage } from './actions'
import classNames from 'classnames';
import { doubleDigit, LESSON_TITLES, FUTURE_LESSONS } from './constants';

class SideBar extends Component {

    render() {
        const { curPage } = this.props;
        return (
            <aside className="sidebar">
                <Link to="/" className="sidebar-header">
                    <h1>Python-Course</h1>
                    <div>By Enoch Poon</div>
                </Link>
                <div className="sidebar-links">
                    <h2>Published Lessons</h2>
                    <div className="lesson-list">
                        { LESSON_TITLES.map((title, index) => 
                            <Link
                            to={`/${doubleDigit(index)}`}
                            key={title}
                            className={classNames('lesson-title', {active: index === curPage})}>
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

                    <h2>Other Links</h2>
                    <div className="lesson-list">
                        <Link to={"/contribute"} className={classNames('lesson-title', {active: curPage === "contribute"})}>Contribute</Link>
                        <Link to="/todo" className={classNames('lesson-title', {active: curPage === "todo"})}>TODO</Link>
                    </div>
                </div>
                
            </aside>
        )
    }
}

const mapStateToProps = state => {
    return {
        curPage: state.curPage
    }
}

export default connect(mapStateToProps, { setCurPage })(SideBar);
