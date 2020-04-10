import React, { Component } from 'react';
import './App.scss';
import MarkdownView from "./LessonView";
import { setCurPage } from './actions'
import { LESSON_TITLES, doubleDigit } from './constants';
import {
  Switch,
  Route
} from "react-router-dom";
import SideBar from './SideBar';
import { connect } from 'react-redux';
import HomeView from './HomeView';
import ContributeView from './ContributeView';
import TodoView from './TodoView';
import HeaderBar from './HeaderBar';


class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <HeaderBar /> */}
        <SideBar />
        <div className="right-container">
          <Switch>
            {
              [...Array(LESSON_TITLES.length).keys()].map(num => (
                <Route path={`/${doubleDigit(num)}`} key={num}>
                  <MarkdownView lessonNum={num} />
                </Route>
              ))
            }
            <Route exact path="/contribute">
              <ContributeView />
            </Route>
            <Route exact path="/todo">
              <TodoView />
            </Route>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/">
              <main>
                <h1>ERROR: bad URL</h1>
              </main>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default connect(state => ({
  curPage: state.curPage
}), { setCurPage })(App);
