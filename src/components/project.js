import React, { Component } from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image';

function RenderImage(props) {    
    return <Img fixed={props.localFile.childImageSharp.fixed} alt="" />
}

function RenderVideo(props) {
    return (
        <video controls>
            <source src={props.localFile.publicURL} type="video/mp4" />
        </video>
    );
}

function RenderGif (props) {
    return <img src={props.localFile.publicURL} alt= "GIF of project" />
}

class Project extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {}

    console.log(this.data);
  }

  render() {
    let children = [];

    this.data.node.image.map(media => {
        if (media.localFile.extension === "jpg" || media.localFile.extension === "png" || media.localFile.extension === "jpeg") {
            children.push(React.createElement(RenderImage, media, null));
        } else if (media.localFile.extension === "mp4") {
            children.push(React.createElement(RenderVideo, media, null));
        } else if (media.localFile.extension === "gif") {
            children.push(React.createElement(RenderGif, media, null));
        }
    })

    return (
        <li key={this.data.node.id}>
            <h2>
                <Link to={`/${this.data.node.id}`}>{this.data.node.title}</Link>
            </h2>
            {children}
            <p>{this.data.node.content}</p>
        </li>
    )
  }
}

export default Project;