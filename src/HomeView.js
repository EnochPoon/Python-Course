import React from 'react';
import { connect } from 'react-redux';
import { setCurLessonNum } from './actions';

class HomeView extends React.Component {

    componentDidMount() {
        this.props.setCurLessonNum(-1);
    }

    render() {
        return (
            <div className="md-wrapper home-view">
                <h1>Introductory Programming in Python</h1>
                <p>By Enoch Poon</p>

                <p>Hello! This is my own website that includes introductory programming lessons in Python. This course is designed for students who are completely new to programming.</p>

                <p><u>Future updates to this site will include more lessons, modifications to published lesson content, and major changes to the user interface.</u></p>

                <h3><b>Start by selecting one of the published lessons on the sidebar!</b></h3>

                <h2>Contributing</h2>
                <p>Do you think you have the power and the skills to help me improve this site? If you are interested, contact me for any of these positions (If you don't know how to contact me, then don't even try bc that means I don't know you)! I don't need like a resume or what not (since I'm not super formal); as long as I know you, and you can show me your skills by your projects or whatever, that's all I need.</p>
                
                <article>
                    <h3>Software Developer</h3>
                    I can consider either front-end, back-end, or full-stack developers!
                    <ul>
                        <li><b>Front-End Developer:</b> Requires some good skills in React</li>
                        <li><b>Back-End Developer:</b> idk I'm not really a back-end guy. You must be really creative in thinking of how we could possibly use back-end to this site. And I hope you got the skills to do it.</li>
                        <li><b>Full-Stack Developer:</b> Basically all of the above. That's how full-stack developers work, right?</li>
                    </ul>
                </article>
                <article>
                    <h3>Designer</h3>
                    <p>Ok if you think you have a good idea on how to make my site look a lot more beautiful, you can let me know! However, I am very picky, and I am known to call people out for bad designs. The easiest way for me to impress me is to show me a design first about how I can make this look better. If I trust you, I can allow you to keep helping me.</p>
                </article>
                
                <article>
                    <h3>Content Writer</h3>
                    <p>Wanna actually write the lessons? You just gotta prove to me that you're actually really good at it. Show me some notes or something of your own of a particular subject (preferably math or computer science). (This time, I am extremely picky, and I absolutely love calling out many people for poor teaching or lesson-writing skills). You also (obviously) have to be familiar with basic Python 3.</p>
                </article>
                
            </div>
        );
    }
}

export default connect(state => ({
    curLesson: state.curLesson
}), { setCurLessonNum })(HomeView);
