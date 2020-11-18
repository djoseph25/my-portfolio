import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from '../components/SEO'

import Projects from "../components/Projects"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title='Home' description='this is our Home Page'/>
      <Hero />
    <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
