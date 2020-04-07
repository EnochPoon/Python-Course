import React, { Component } from 'react';
import './App.scss';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "./CodeBlock";
import MarkdownView from "./MarkdownView";
import { setCurLessonNum } from './actions'
import { LESSON_TITLES, doubleDigit } from './constants';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideBar from './SideBar';
import { connect } from 'react-redux';
import HomeView from './HomeView';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      md: "",
      curLessonNum: -1
    }
  }

  componentDidMount() {
    const path = window.location.pathname;
    if (path === "/") this.props.setCurLessonNum(-1);
    else this.props.setCurLessonNum(parseInt(path.split("/")[1]));
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="right-container">
          <div className="nav-header"></div>
          <Switch>
            {
              [...Array(LESSON_TITLES.length).keys()].map(num => (
                <Route path={`/${doubleDigit(num)}`} key={num}>
                  <MarkdownView path={`./lessons/lesson${doubleDigit(num)}.md`} lessonNum={parseInt(num)} />
                </Route>
              ))
            }
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default connect(state => ({
  curLesson: state.curLesson
}), { setCurLessonNum })(App);
