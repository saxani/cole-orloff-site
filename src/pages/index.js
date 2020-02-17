import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Project from '../components/project';
import Menu from '../components/menu';
import Gallery from '../components/gallery';

class Index extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <Layout>
        <Menu data={this.data}/>
        <Gallery data={this.data}/>
      </Layout>
    )
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProject {
      edges {
        node {
          id
          image {
            id
            localFile {
              extension
              publicURL
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          title
          content
        }
      }
    }
  }
`
// {this.data.allStrapiProject.edges.map(document => (
//   <Project data= {document} key= {document.id}/>
// ))}