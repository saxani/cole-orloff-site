import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Menu from '../components/menu';
import Gallery from '../components/gallery';

class Index extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.galleryImages = [];


    this.state = { 
      imagesLoaded : false
    }
  }

  componentDidMount() {

    this.data.cms.edges.map(project => {
      let images = project.node.image;

      for (let i = 0; i < images.length; i++) {
        if (images[i].localFile.extension === "jpg" || images[i].localFile.extension === "png" || images[i].localFile.extension === "jpeg") {
            this.galleryImages.push(images[i]);
            break;
        }
      }
    });

    this.setState({
      imagesLoaded: true
    });

  }

  render() {
    return (
      <Layout>
        <Menu data={this.data.cms}/>
        {this.state.imagesLoaded && <Gallery data={this.galleryImages} arrowLeft={this.data.arrowLeft} arrowRight={this.data.arrowRight}/>}

      </Layout>
    )
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    cms: allStrapiProject {
      edges {
        node {
          id
          image {
            id
            localFile {
              extension
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
          content
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
        }
        next {
          fields {
            slug
          }
        }
      }
    }
    arrowLeft: file(relativePath: {eq: "arrow-gallery/Left-Arrow.png"}) {
      id
      relativePath
      childImageSharp {
        fixed(width: 35) {
          originalName
          ...GatsbyImageSharpFixed
        }
      }
    }
    arrowRight: file(relativePath: {eq: "arrow-gallery/Right-Arrow.png"}) {
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
`
