import React from "react"
import logo from "../assets/finallogo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className='nav-header'>
          <img src={logo} alt={logo} style={{width:250, marginTop: 3}}/>
          <button type='button' className='toggle-btn'>
                <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass='nav-links'></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar