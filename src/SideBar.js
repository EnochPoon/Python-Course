import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurPage } from './actions'
import { doubleDigit, LESSON_TITLES, FUTURE_LESSONS } from './constants';
import {
    List, ListItem, Divider
} from "@material-ui/core";
class SideBar extends Component {

    render() {
        const { curPage } = this.props;
        return (
            <aside className="sidebar">
                <Link to="/" className="sidebar-header">
                    <h1>Python-Course</h1>
                    <div>By Enoch Poon</div>
                </Link>
                    <div className="sidebar-content">
                        <List component="nav" className="sidebar-list">
                            <h2>Published Lessons</h2>
                            { LESSON_TITLES.map((title, index) => 
                                <ListItem
                                button
                                selected={index === curPage}
                                className="sidebar-list-item"
                                >
                                    <Link
                                    to={`/${doubleDigit(index)}`}
                                    key={title}
                                    >
                                        {`${index}: ${title}`}
                                    </Link>
                                </ListItem>
                                
                            )}

                            
                        </List>
                        
                        <List component="nav" className="sidebar-list">
                            <h2>Other Links</h2>
                            <ListItem
                            button
                            selected={curPage === "contribute"}
                            className="sidebar-list-item"
                            >
                                <Link to={"/contribute"}>Contribute</Link>
                            </ListItem>
                            <ListItem
                            button
                            selected={curPage === "todo"}
                            className="sidebar-list-item"
                            >
                                <Link to="/todo">Future Updates</Link>
                            </ListItem>
                        </List>
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
