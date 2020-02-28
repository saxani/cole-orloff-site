import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SideContent from '../components/sideContent';
import Gallery from '../components/gallery2';


class Project extends Component {
    constructor(props) {
        super(props);

        this.data = props.data.project;
        this.allProjects = props.data.allProjects;

        this.next = null;
        this.previous = null;

        this.galleryImages = [];
    
        this.state = { 
          imagesLoaded : false
        }

        this.projectSorter = this.projectSorter.bind(this);
      }
    
    componentDidMount() {

        this.data.image.map(image => {
            this.galleryImages.push(image);
        });
      
        this.setState({
            imagesLoaded: true
        });

        this.projectSorter();
    }

    projectSorter(){
        const lastProject = this.allProjects.edges.length - 1;
        let i = 0;

        while (this.next === null) {
            if(this.allProjects.edges[i].node.fields.slug === this.data.fields.slug) {
                if(i === 0) {
                    this.next = this.allProjects.edges[i+1].node.fields.slug;
                    this.previous = this.allProjects.edges[lastProject].node.fields.slug;
                } else if (i === lastProject) {
                    this.next = this.allProjects.edges[0].node.fields.slug;
                    this.previous = this.allProjects.edges[i-1].node.fields.slug;
                } else {
                    this.next = this.allProjects.edges[i+1].node.fields.slug;
                    this.previous = this.allProjects.edges[i-1].node.fields.slug;
                }
            } else {
                i++;
            }
        }

        
    }

    render() {
        console.log(this.next, this.previous);
        return (
            <Layout next={this.next} previous={this.previous}>
                <SideContent title={this.data.title} content= {this.data.content}/>
            
                {this.state.imagesLoaded && <Gallery data={this.galleryImages} />}

            </Layout>
        )
    }
}

export default Project;

export const pageQuery = graphql`
  query($slug: String!) {
    project: strapiProject(fields: {slug: { eq: $slug }}) {
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
    allProjects: allStrapiProject {
        edges {
          node {
            id
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
  }
`
