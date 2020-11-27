import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number"> 0{index + 1}</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(language => {
            return (
              <span key={language.id} id="stack">
                {language.title}
              </span>
            )
          })}
        </div>
        <div className="project-links">
          <a rel="new page" href={github} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a rel="new page" href={url} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}



export default Project
