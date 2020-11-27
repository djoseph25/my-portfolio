import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <article className="articles">
        <h2 className="name">I'm David Joseph.</h2>
        <p className="role">
          I'm a Web Developer based in Orlando, Florida. I make web applications and
          sites using modern development tools.
        </p>{" "}
        <Link to="/contact" className="btn center-btn">
          {" "}
          Contact Me
        </Link>
        <div class="links links-center">
          <SocialLinks />
        </div>
      </article>
    </header>
  )
}

export default Hero
