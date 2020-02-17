import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img from 'gatsby-image';

import galleryStyles from '../styles/gallery.module.scss';
import layoutStyles from '../styles/layout.module.scss';

function RenderImage(props) {    
    return <Img fixed={props.localFile.childImageSharp.fixed} alt="" />
}

class Gallery extends Component {
    constructor(props) {
      super(props);
      this.data = props.data;
      this.children = [];

      this.state = {
          images : []
      }

    }

    componentDidMount(){
        this.data.allStrapiProject.edges.map(project => {

            let images = project.node.image;

            for (let i = 0; i < images.length; i++) {
                if (images[i].localFile.extension === "jpg" || images[i].localFile.extension === "png" || images[i].localFile.extension === "jpeg") {
                    this.children.push(React.createElement(RenderImage, images[i], null));
                    break;
                }
            }
        });

        this.setState({
            images: this.children
        })

        setTimeout(function(){
            console.log(this.state.images);
        }.bind(this), 3000);
 
    }
  
    render() {
       
        return (
            <div className={`${layoutStyles.width6} ${layoutStyles.height6} ${layoutStyles.borderBottom}`}>
    
                    {this.state.images}
          
                
            </div>
        )
    }
  }
  
  export default Gallery;