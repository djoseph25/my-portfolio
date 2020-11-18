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
          <div class="links links-center">
            <SocialLinks />
          </div>
       
      </article>
    </header>
  )
}

export default Hero
