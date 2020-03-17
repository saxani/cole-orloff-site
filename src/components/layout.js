import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import "../styles/layout.css"
import layoutStyles from '../styles/layout.module.scss';

class Layout extends Component {
  constructor(props) {
    super(props);

    if(props.about) {
      this.title = props.about;
      this.hover = props.data.siteDetails.siteMetadata.title;
      this.link = '/';

    } else {
      this.title = props.data.siteDetails.siteMetadata.title;
      this.hover = 'About';
      this.link = '/about';
    }

    
    this.contact = props.data.siteDetails.siteMetadata.contact;
    this.children = props.children;
  }

  render() {

    return (
      <div className={layoutStyles.container} ref={this.page}>
        <Header title={this.title} siteContact={this.contact} hover={this.hover} link={this.link}/>
          {this.children}
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      siteDetails: site {
        siteMetadata {
          title
          contact
        }
      }
    }
  `}
  render={data => <Layout data={data} {...props} />}
  />
);
