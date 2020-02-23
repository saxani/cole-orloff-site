import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout';


export default function Template({ data }) {
    console.log(data)
  const { title, content } = data.strapiProject
  return (
    <Layout>
      <h1>{title}</h1>
      <h2></h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    strapiProject(fields: {slug: { eq: $slug }}) {
      title
      content
    }
  }
`