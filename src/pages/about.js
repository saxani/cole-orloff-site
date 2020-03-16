import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Profile from '../components/about/profile';
import BottomMenu from '../components/about/bottomMenu';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
          <Layout>
            <Profile />
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


