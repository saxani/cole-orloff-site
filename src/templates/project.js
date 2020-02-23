import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SideContent from '../components/sideContent';
import Gallery from '../components/gallery';


class Project extends Component {
    constructor(props) {
        super(props);
        this.data = props.data.strapiProject;

        this.galleryImages = [];
    
        this.state = { 
          imagesLoaded : false
        }
      }
    
    componentDidMount() {

        this.data.image.map(image => {
              if (image.localFile.extension === "jpg" || image.localFile.extension === "png" || image.localFile.extension === "jpeg") {
                  this.galleryImages.push(image);
              }
          });
      
        this.setState({
            imagesLoaded: true
        });

    }

    render() {

        return (
            <Layout>
                <SideContent title={this.data.title} content= {this.data.content}/>
            
                {this.state.imagesLoaded && <Gallery data={this.galleryImages} />}

            </Layout>
        )
    }
}

export default Project;

export const pageQuery = graphql`
  query($slug: String!) {
    strapiProject(fields: {slug: { eq: $slug }}) {
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
  }
`
