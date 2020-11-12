import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = () => {
  return <aside className={`sidebar show-sidebar`}>
    <button className='close-btn'>
      <FaTimes/>
    </button>
    <div className='side-container'>
      <Links styleClass='sidebar-links'/>
      <SocialLinks styleClass='sidebar-icons'/>
    </div>
  </aside>
}

export default Sidebar
