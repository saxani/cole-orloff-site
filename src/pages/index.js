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
      loaded : false
    }

    this.sortImages = this.sortImages.bind(this);
    this.pushImages = this.pushImages.bind(this);
  }

  async componentDidMount() {

    await this.sortImages();

    this.setState({
      loaded: true
     });
  }

  async sortImages(){
      Promise.all(this.data.cms.edges.map(project => this.pushImages(project.node.image)));
  }

  async pushImages(images){
    for (let i = 0; i < images.length; i++) {
      if (images[i].localFile.extension === "jpg" || images[i].localFile.extension === "png" || images[i].localFile.extension === "jpeg") {
          this.galleryImages.push(images[i]);
          break;
      }
    }
    return Promise.resolve('ok');
  }

  render() {
    const galleryProps = {
      autoplay : '1000',
      touchDisabled : 'true',
    }

    return (
      <div>
        {this.state.loaded && <Layout>
          <Menu data={this.data.cms}/>
          <Gallery data={this.galleryImages} arrowLeft={this.data.arrowLeft} arrowRight={this.data.arrowRight} galleryProps={galleryProps}/>

        </Layout>}
      </div>
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
