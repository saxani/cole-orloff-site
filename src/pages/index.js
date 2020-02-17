import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Project from '../components/project';
import Menu from '../components/menu';

class Index extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <Layout>
        <Menu data={this.data}/>
      </Layout>
    )
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProject {
      edges {
        node {
          id
          image {
            id
            localFile {
              extension
              publicURL
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          title
          content
        }
      }
    }
  }
`
// {this.data.allStrapiProject.edges.map(document => (
//   <Project data= {document} key= {document.id}/>
// ))}


// const IndexPage = ({ data }) => {
//   console.log(data);
//   return(
//   <Layout>
//     <ul>
//       {data.allStrapiProject.edges.map(document => (
//         <li key={document.node.id}>
//           <h2>
//             <Link to={`/${document.node.id}`}>{document.node.title}</Link>
//           </h2>
//           <Img fluid={document.node.image[1].localFile.childImageSharp.fluid} alt="" />
//           <p>{document.node.content}</p>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )}