import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaPaste,
} from "react-icons/fa"

const data = [
 
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/david-joseph-373b31aa/",
  },
  
  {
    id: 2,
    icon: <FaPaste className="social-icon"></FaPaste>,
    url: "https://resume.io/r/9XPrT1iEZ",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/djoseph25",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/david.joseph.391420/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a rel="new page" href={link.url} className="social-link" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

