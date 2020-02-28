import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from 'gatsby-image';

import layoutStyles from '../styles/layout.module.scss';
import footerStyles from '../styles/footer.module.scss';

const Footer = (props) => (
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
  render={data => {
    return(
      <footer className={`${layoutStyles.height1} ${layoutStyles.width8} ${layoutStyles.flexRow}`}>
        <div className={`${layoutStyles.width2} ${footerStyles.buttonWrapper}`}>
          <Link to={props.previous} className={`${footerStyles.button} ${layoutStyles.borderRight} ${layoutStyles.width1}`}>
            <Img fixed={data.arrowUp.childImageSharp.fixed} alt="Menu arrow up" />
          </Link>
          <Link to={props.next} className={`${footerStyles.button} ${layoutStyles.borderRight} ${layoutStyles.width1}`}>
            <Img fixed={data.arrowDown.childImageSharp.fixed} alt="Menu arrow down" />
          </Link>
        </div>
        <div className={`${layoutStyles.width6}`}>
        </div>
      </footer>
    )
  }}
  />
)

export default Footer;
