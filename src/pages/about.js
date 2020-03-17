import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Profile from '../components/about/profile';
import AboutGallery from '../components/about/aboutGallery';
import BottomMenu from '../components/about/bottomMenu';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
          <Layout about = 'About'>
            <Profile />
            <AboutGallery />
            <BottomMenu />
          </Layout>

        
      </div>
    )
  }
}

export default About;

// export const pageQuery = graphql`
//   query {
//   }
// `


