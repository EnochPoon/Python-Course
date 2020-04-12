import React, { Component } from 'react';
import { setCurPage } from './actions';
import { connect } from 'react-redux';

class ContributeView extends Component {

    componentDidMount() {
        this.props.setCurPage("contribute");
    }
    render() {
        return (
            <main className="contribute">
                <h1>Contribute</h1>
    
                <p>At the moment, I (Enoch Poon) am the sole developer and content creator of this entire website. However, that doesn't mean that you too can help me out!</p>
                
                <h2>Small Contributions</h2>
                <p>If you notice things like bugs, spelling errors, or simply tiny suggestions to improve my site, please let me know, and I will consider them!</p>
    
                <h2>More Committed People</h2>
                <p>Do you think you have the power and the skills to help me drastically improve this site? If you are interested, contact me for any of these positions (If you don't know how to contact me, then don't even try bc that means I don't know you)! I don't need like a resume or what not (since I'm not super formal); as long as I know you, and you can show me your skills by your projects or whatever, that's all I need.</p>
                
                <article>
                    <h3>Nerdy Software Developer</h3>
                    I can consider either front-end, back-end, or full-stack developers!
                    <ul>
                        <li><b>Front-End Developer:</b> Requires some good skills in React</li>
                        <li><b>Back-End Developer:</b> idk I'm not really a back-end guy. You must be really creative in thinking of how we could possibly use back-end to this site. And I hope you got the skills to do it.</li>
                        <li><b>Full-Stack Developer:</b> Basically all of the above. That's how full-stack developers work, right?</li>
                    </ul>
                </article>
                <article>
                    <h3>Awesome Designer</h3>
                    <p>Ok if you think you have a good idea on how to make my site look a lot more beautiful, you can let me know! However, I am very picky, and I am known to call people out for bad designs. The easiest way for me to impress me is to show me a design first about how I can make this look better. If I trust you, I can allow you to keep helping me.</p>
                </article>
                
                <article>
                    <h3>Amazing Content Writer</h3>
                    <p>Wanna actually write the lessons? You just gotta prove to me that you're actually really good at it. To make such proof, show me some notes or something of your own of a particular subject (preferably math or computer science). (This time, I am <b>extremely</b> picky, and I absolutely love calling many people out for poor teaching or lesson-writing skills). You also (obviously) have to be familiar with basic Python 3.</p>
                </article>
                
            </main>
        )
    }
    
}


export default connect(null, { setCurPage })(ContributeView);