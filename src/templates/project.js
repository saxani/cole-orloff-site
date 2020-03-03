import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SideContent from '../components/sideContent';
import Gallery from '../components/gallery';
import ProjectFooter from '../components/projectFooter';


class Project extends Component {
    constructor(props) {
        super(props);
        this.data = props.data.project;
        this.allProjects = props.data.allProjects;
        this.galleryImages = [];
    
        this.state = { 
          loaded : false,
          next: null,
          previous: null,
          location: props.location
        }

        this.projectSorter = this.projectSorter.bind(this);
        this.sortImages = this.sortImages.bind(this);
        this.pushImages = this.pushImages.bind(this);
      }
    
    async componentDidMount() {


        await this.sortImages();
        await this.projectSorter();

        this.setState({
            loaded: true
        });
    }

    async sortImages(){
        Promise.all(this.data.image.map(image => this.pushImages(image)));
    }

    async pushImages(image){
        this.galleryImages.push(image);
        return Promise.resolve('ok');
    }

    async projectSorter(){
        const lastProject = this.allProjects.edges.length - 1;
        let i = 0;

        while (this.state.next === null) {
            if(this.allProjects.edges[i].node.fields.slug === this.data.fields.slug) {
                if(i === 0) {
                    this.setState({
                        next : this.allProjects.edges[i+1].node.fields.slug,
                        previous : this.allProjects.edges[lastProject].node.fields.slug
                    });
                } else if (i === lastProject) {
                    this.setState({
                        next : this.allProjects.edges[0].node.fields.slug,
                        previous : this.allProjects.edges[i-1].node.fields.slug
                    });
                } else {
                    this.setState({
                        next : this.allProjects.edges[i+1].node.fields.slug,
                        previous : this.allProjects.edges[i-1].node.fields.slug
                    });
                }
            } else {
                i++;
            }
        } 
        return Promise.resolve('ok');
        
    }

    render() {
        const galleryProps = {
            autoplay : '',
            touchDisabled : 'true',
          }

        return (
            <div>
            {this.state.loaded && <Layout state={this.state}>
                <SideContent title={this.data.title} content= {this.data.content}/>
            
                <Gallery data={this.galleryImages} galleryProps={galleryProps}/>
                <ProjectFooter next={this.state.next} previous={this.state.previous}/>

            </Layout>}
            </div>
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
