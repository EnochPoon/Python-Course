import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import { connect } from 'react-redux';
import { setCurLessonNum } from './actions';

class MarkdownView extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        lessonNum: PropTypes.number.isRequired
    }

    constructor() {
        super();
        this.state = {
            md: ""
        };
    }

    render() {
        return (
            <div className="md-wrapper" id="md-wrapper">
                <ReactMarkdown source={this.state.md} escapeHtml={false} renderers={{ code: CodeBlock }} />
            </div>
        );
    }

    componentDidMount() {
        fetch(this.props.path, { mode: 'no-cors' })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            this.setState({ md: data }, () => {
                // Set the header id's
                const mdWrapper = document.getElementById('md-wrapper');
                const headers = mdWrapper.querySelectorAll('h1, h2, h3, h4, h5, h6');
                const ids = {};
                for(const header of headers) {
                    const text = header.textContent.toLowerCase();
                    const id = text.replace(/\s+/g, '-').replace(/[^a-z0-9\-_]+/gi, "");
                    if (id in ids) {
                        header.id = `${id}-${ids[id]++}`;
                    } else {
                        ids[id] = 1;
                        header.id = id;
                    }
                }

                // set up anchors to target=_blank
                const anchors = mdWrapper.querySelectorAll('a');
                for (const anchor of anchors) {
                    const url = new URL(anchor.href);
                    if (url.origin !== window.location.origin) {
                        anchor.target = "_blank"
                    }
                }
            });
        }).catch(e => {
            this.setState({ md: String(e) });
        });

        this.props.setCurLessonNum(this.props.lessonNum);        
    }
}

export default connect(null, { setCurLessonNum })(MarkdownView);
