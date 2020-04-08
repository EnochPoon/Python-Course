import React from 'react';
import { connect } from 'react-redux';
import { setCurPage } from './actions';

class HomeView extends React.Component {

    componentDidMount() {
        this.props.setCurPage(-1);
    }

    render() {
        return (
            <main className="home-view">
                <h1>Introductory Programming in Python</h1>
                <p>By Enoch Poon</p>

                <p>Hello! This is my own website that includes introductory programming lessons in Python. This course is designed for students who are completely new to programming.</p>

                <p><u>Future updates to this site will include more lessons, modifications to published lesson content, and major changes to the user interface.</u></p>

                <h3><b>Start by selecting one of the published lessons on the sidebar!</b></h3>
                
            </main>
        );
    }
}

export default connect(state => ({
    curPage: state.curPage
}), { setCurPage })(HomeView);
