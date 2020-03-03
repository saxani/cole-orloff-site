import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import layoutStyles from '../styles/layout.module.scss';
import footerStyles from '../styles/footer.module.scss';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.pageRef = props.pageRef
    this.arrowUp = props.data.arrowUp;
    this.arrowDown = props.data.arrowDown;
    this.next = props.next;
    this.previous = props.previous;
    this.location = props.location;

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {

  }

  handlePrevious(){
    if(this.previous) {
      window.location.href = this.location.origin + "/" + this.previous; 
    } else {
      console.log('menu move up');
    }
  }

  handleNext(){
    if(this.next) {
      window.location.href = this.location.origin + "/" + this.next; 
    } else {
      console.log('menu move down');
    }
  }

  render() {

    return (
      <footer className={`${layoutStyles.height1} ${layoutStyles.width8} ${layoutStyles.flexRow}`}>
        <div className={`${layoutStyles.width2} ${footerStyles.buttonWrapper}`}>
          <a onClick={this.handlePrevious} className={`${footerStyles.button} ${layoutStyles.borderRight} ${layoutStyles.width1}`}>
            <Img fixed={this.arrowUp.childImageSharp.fixed} alt="Menu arrow up" />
          </a>
          <a onClick = {this.handleNext} className={`${footerStyles.button} ${layoutStyles.borderRight} ${layoutStyles.width1}`}>
            <Img fixed={this.arrowDown.childImageSharp.fixed} alt="Menu arrow down" />
          </a>
        </div>
        <div className={`${layoutStyles.width6}`}></div>
      </footer>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      arrowUp: file(relativePath: {eq: "arrows-menu/Up-Arrow.png"}) {
        id
        relativePath
        childImageSharp {
          fixed(width: 35) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
      arrowDown: file(relativePath: {eq: "arrows-menu/Down-Arrow.png"}) {
        id
        relativePath
        childImageSharp {
          fixed(width: 35) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `}
  render={data => <Footer data={data} {...props} />}
  />
);