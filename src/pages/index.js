import React, { Component } from "react";
import { graphql } from "gatsby";
import debounce from "lodash.debounce";

import Layout from "../components/layout";
import Menu from '../components/menu';
import Gallery from '../components/gallery';
import IndexFooter from '../components/indexFooter';

class Index extends Component {
  constructor(props) {
    super(props);

    this.data = props.data;
    this.galleryImages = [];
    this.indexRef = React.createRef();

    this.state = { 
      loaded : false
    }

    this.menu = null;
    this.menuTop = null;
    this.menuBottom = null; 
    this.menuItemHeight = null;

    this.sortImages = this.sortImages.bind(this);
    this.pushImages = this.pushImages.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  async componentDidMount() {
    await this.sortImages();

    this.setState({
      loaded: true
     });

     this.menu = this.indexRef.current.querySelector('.menu-wrapper');
     this.menuTop = this.menu.offsetTop;
     this.menuBottom = this.menu.offsetHeight + this.menu.offsetTop;
     this.menuItemHeight = this.menu.querySelector('li').offsetHeight;
     this.marginOffset = 0;

     window.addEventListener('resize', debounce(this.onResize, 200));
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

  handlePrevious(){
    const lastMenuItem = this.menu.querySelector('.menu').lastChild;
    const posBottom = lastMenuItem.offsetTop + this.menuItemHeight;

    if(posBottom > this.menuBottom) {
      this.marginOffset -= this.menuItemHeight;
      this.menu.querySelector('.menu').style.marginTop = this.marginOffset + 'px';
    }
  }

  handleNext(){
    const firstMenuItem = this.menu.querySelector('.menu').firstChild;
    const posTop = firstMenuItem.offsetTop;

    if(posTop < this.menuTop) {
      this.marginOffset += this.menuItemHeight;
      this.menu.querySelector('.menu').style.marginTop = this.marginOffset + 'px';
    }
  }

  onResize() {
    let marginOffsetTimes = this.marginOffset / this.menuItemHeight;
    this.menuTop = this.menu.offsetTop;
    this.menuBottom = this.menu.offsetHeight + this.menu.offsetTop;
    this.menuItemHeight = this.menu.querySelector('li').offsetHeight;
    this.marginOffset = marginOffsetTimes * this.menuItemHeight;
    this.menu.querySelector('.menu').style.marginTop = this.marginOffset + 'px';
  }

  render() {
    const galleryProps = {
      autoplay : '1000',
      touchDisabled : 'true',
    }

    return (
      <div ref={this.indexRef}>
        {this.state.loaded && <Layout>
          <Menu data={this.data.cms}/>
          <Gallery data={this.galleryImages} arrowLeft={this.data.arrowLeft} arrowRight={this.data.arrowRight} galleryProps={galleryProps}/>
          <IndexFooter onPrevious = {this.handlePrevious} onNext  = {this.handleNext} />
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


