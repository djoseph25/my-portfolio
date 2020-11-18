import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <article className="articles">
        <h2 className="name">I'm David</h2>
        <p className="role">
          {" "}
          I'm a Full Stack Web Developer out of Orlando Florida
        </p>{" "}
        <Link to="/contact" className="btn center-btn">
          {" "}
          Contact Me
        </Link>
        <div className="links">
          <SocialLinks /> 
        </div>
        {/* <a href="https://resume.io/r/9XPrT1iEZ">Resume</a>
        <img src={CV} /> */}
       
      </article>
    </header>
  )
}

export default Hero
