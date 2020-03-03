import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from 'gatsby-image';

import layoutStyles from '../styles/layout.module.scss';
import footerStyles from '../styles/footer.module.scss';

class IndexFooter extends Component {
  constructor(props) {
    super(props);

    this.arrowUp = props.data.arrowUp;
    this.arrowDown = props.data.arrowDown;

    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePreviousClick(e){
    this.props.onPrevious(e.target.value);
  }

  handleNextClick(e){
      this.props.onNext(e.target.value);
  }

  render() {

    return (
      <footer className={`${layoutStyles.height1} ${layoutStyles.width8} ${layoutStyles.flexRow}`}>
        <div className={`${layoutStyles.width2} ${footerStyles.buttonWrapper}`}>
          <a onClick={this.handlePreviousClick} className={`${footerStyles.button} ${layoutStyles.borderRight} ${layoutStyles.width1}`}>
            <Img fixed={this.arrowUp.childImageSharp.fixed} alt="Menu arrow up" />
          </a>
          <a onClick = {this.handleNextClick} className={`${footerStyles.button} ${layoutStyles.borderRight} ${layoutStyles.width1}`}>
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
  render={data => <IndexFooter data={data} {...props} />}
  />
);