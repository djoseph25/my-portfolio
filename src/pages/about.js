import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"



const About = ({data:{about:{nodes}}}) => {
  // console.log(nodes[0])
 const {title, info, stack} = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div>
          <article>
            <Title title={title} className="center" />
            <p className="infos">{info}</p>
            <div className="about-stack">
              {stack.map(language => {
                return <span key={language.id}>{language.title}</span>
              })}
            </div>
          </article>
        </div>
        <h1 style={{ fontSize: 21, paddingTop: 35 }}>
          <a href="https://resume.io/r/9XPrT1iEZ">View resume</a>
        </h1>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
   about: allStrapiAbout {
      nodes {
        id
        title
        info
        stack {
          id
          title
        }
      }
    }
  }
`
export default About
