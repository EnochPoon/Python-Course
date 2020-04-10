import React from 'react';
import { Link } from 'react-router-dom';

class HeaderBar extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <header>
            <Link to="/" className="home-link">
                <div className="title">
                    Python-Course
                </div>
                <div className="subtitle">
                    By Enoch Poon
                </div>
            </Link>
            
        </header>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default HeaderBar;
