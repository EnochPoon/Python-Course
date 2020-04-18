import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import { connect } from 'react-redux';
import { setCurPage } from './actions';
import { doubleDigit } from './constants';
import { CircularProgress } from '@material-ui/core';
import classNames from 'classnames';

class LessonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            md: ""
        }
    }

    render() {
        const { md } = this.state;
        return (
            <main id="md-wrapper" className={classNames({ loading: md === ""})}>
                {md === "" && <CircularProgress disableShrink style={{margin: 'auto'}} />}
                <ReactMarkdown source={md} escapeHtml={false} renderers={{ code: CodeBlock }} />
            </main>
        );
    }

    componentDidMount() {
        const mdPath = `./lesson${doubleDigit(this.props.lessonNum)}.md`;
        fetch(mdPath, { mode: 'no-cors' })
        .then(response => response.text())
        .then(data => {
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

                // Set up appropriate text content for special text
                const importantNotes = mdWrapper.querySelectorAll('.important-note');
                for (const node of importantNotes) {
                    node.textContent = "Important Note:";
                }
                const selfStudies = mdWrapper.querySelectorAll('.self-study');
                for (const node of selfStudies) {
                    node.textContent = "Self-Study:"
                }
            });
        }).catch(e => {
            this.setState({ md: "# ERROR! Invalid Lesson" });
        });

        this.props.setCurPage(parseInt(this.props.lessonNum));
    }
}

export default connect(null, { setCurPage })(LessonView);
