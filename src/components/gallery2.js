import React, { Component } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Img from 'gatsby-image';

import galleryStyles from '../styles/gallery.module.scss';
import layoutStyles from '../styles/layout.module.scss';
import '../styles/overrides.scss';


function MediaElement(props) {
    console.log(props.media);
    if(props.media.localFile.extension === "jpg" || props.media.localFile.extension === "png" || props.media.localFile.extension === "jpeg"){
        return (<Img key={props.media.id} fluid={props.media.localFile.childImageSharp.fluid} className={galleryStyles.galleryImage} alt=""/>);
    } else if (props.media.localFile.extension === "mp4") {
        return (
            <video controls className={galleryStyles.video}>
                <source src={props.media.localFile.publicURL} type="video/mp4"></source>
            </video>
        )
    } else if (props.media.localFile.extension === "gif") {
        return(
            <img src={props.media.localFile.publicURL} />
        )
    }   
    
}

function Carousel(props) {

    const content = props.data.map((media) =>
    <div className={galleryStyles.mediaElement}>
         <MediaElement media={media} />
    </div>
  );

    return (
    <Slider>
        {content}
    </Slider>
        
    );

}


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;

        this.galleryRef = React.createRef();
        
    }

    componentDidMount() {

        const node = this.galleryRef.current;

    }
  
    render() {

        return (
            <div className={`${layoutStyles.width6} ${layoutStyles.height6} ${layoutStyles.borderBottom} ${galleryStyles.outerGalleryWrapper}`}>
                <div className={galleryStyles.innerGalleryWrapper}>
                    <Carousel data={this.data}/>
                </div>
            </div>
        )
    }
}
  
export default Gallery;

{/* <Img key={image.id} fluid={image.localFile.childImageSharp.fluid} className={galleryStyles.galleryImage} alt=""/> */}

{/* <Slider autoplay='1000' touchDisabled='true' ref={this.galleryRef}>
{this.data.map(media =>  
    
    <MediaElement media={media} />
   

)}
</Slider> */}