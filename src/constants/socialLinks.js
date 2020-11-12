import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaCopy,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/david.joseph.391420",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/david-joseph-373b31aa/",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/david.joseph.391420/",
  },
  {
    id: 4,
    icon: <FaCopy className="social-icon"></FaCopy>,
    url: "https://resume.io/",
  },
  {
    id: 5,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/djoseph25",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        <img src={link.src}/>
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

// import React from "react"
// import {
//   FaFacebookSquare,
//   FaLinkedin,
//   FaInstagramSquare,
//   MdEmail,
// } from "react-icons/fa"

// const data = [
//   {
//     id: 1,
//     icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
//     url: "https://www.facebook.com/david.joseph.391420",
//   },
//   {
//     id: 2,
//     icon: <FaLinkedin className="social-icon"></FaLinkedin>,
//     url: "https://www.linkedin.com/in/david-joseph-373b31aa/",
//   },
//   {
//     id: 3,
//     icon: <MdEmail className="social-icon"></MdEmail>,
//     url: "https://mail.google.com/mail/u/0/#inbox",
//   },
//   {
//     id: 4,
//     icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
//     url: "https://www.instagram.com/david.joseph.391420/",
//   },
// ]
// const links = data.map(link => {
//   return (
//     <li key={link.id}>
//       <a href={link.url} className="social-link">
//         {link.icon}
//       </a>
//     </li>
//   )
// })

// export default ({ styleClass }) => {
//   return (
//     <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
//   )
// }
