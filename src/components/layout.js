import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import "../styles/layout.css"
import layoutStyles from '../styles/layout.module.scss';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.title = props.data.siteDetails.siteMetadata.title;
    this.contact = props.data.siteDetails.siteMetadata.contact;
    this.children = props.children;
    // this.next = props.state ? props.state.next : null;
    // this.previous = props.state ? props.state.previous : null;
    // this.location = props.state ? props.state.location : null;
    // this.page = null;

    // this.state = {
    //   pageRef: null
    // }
  }

  componentDidMount() {
    // this.page = React.createRef();
    // this.setState({pageRef : this.page });
  }

  render() {

    return (
      <div className={layoutStyles.container} ref={this.page}>
        <Header siteTitle={this.title} siteContact={this.contact}/>
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

// {this.state.pageRef && <Footer next={this.next} previous={this.previous} location={this.location} pageRef={this.page}/>}