import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "sleepcode.jpg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// I Decided to not add a picture
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  console.log(fluid)
  return (
    <header className="hero">
      <article className="articles">
        <h2 className="name">I'm David</h2>
        <h4 className='role'> I'm a Web Developer out of Orlando Florida</h4>{" "}
        <Link to="/contact" className="btn center-btn">
          {" "}
          Contact Me
        </Link>
        <div className='links'>
        <SocialLinks/></div>
      </article>
    </header>
  )
}

export default Hero
