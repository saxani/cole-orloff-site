import React, { Component } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Img from 'gatsby-image';

import galleryStyles from '../styles/gallery.module.scss';
import layoutStyles from '../styles/layout.module.scss';
import '../styles/overrides.scss';


class Gallery extends Component {
    constructor(props) {
        super(props);

        this.data = props.data;
        this.arrowLeft = props.arrowLeft;
        this.arrowRight = props.arrowRight;
        this.galleryRef = React.createRef();
    }

    componentDidMount() {

        const node = this.galleryRef.current;

    }
  
    render() {

        return (
            <div className={`${layoutStyles.width6} ${layoutStyles.height6} ${layoutStyles.borderBottom} ${galleryStyles.outerGalleryWrapper}`}>
                <div className={galleryStyles.innerGalleryWrapper}>
                    <Slider touchDisabled='true' ref={this.galleryRef}>
                        {this.data.map(image =>  

                            <Img key={image.id} fluid={image.localFile.childImageSharp.fluid} className={galleryStyles.galleryImage} alt=""/>

                        )}
                    </Slider>
                </div>
            </div>
        )
    }
}
  
export default Gallery;
