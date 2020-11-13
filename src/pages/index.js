import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"


import Projects from "../components/Projects"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
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
