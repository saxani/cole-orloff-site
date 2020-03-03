import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react";

import layoutStyles from '../styles/layout.module.scss';
import headerStyles from '../styles/header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {text: props.siteTitle};
    this.link = "/about";
    this.about = "About";

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(){
    this.setState({
      text: this.about
    });
  }

  mouseLeave(){
    this.setState({
      text: this.props.siteTitle
    });
  }

  render() {
    return (
      <header className={`${layoutStyles.height1} ${layoutStyles.width8} ${layoutStyles.flexRow} ${layoutStyles.borderBottom}`}>
        <div className={`${layoutStyles.width4} ${layoutStyles.borderRight} ${headerStyles.headlineBox}`}>
          <div className={layoutStyles.contentBox}>
            <Link to={this.link} className={headerStyles.link}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}>
              <h1 className= {headerStyles.title}>
                {this.state.text}   
              </h1>
            </Link>
          </div>
        </div>
        <div className={`${layoutStyles.width4} ${layoutStyles.contentBox}`}>
          <span className={headerStyles.contact}>{this.props.siteContact}</span>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteContact: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteContact: ``
}

export default Header;
