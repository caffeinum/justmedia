import React from 'react'
import './Logo.css'

import logo from './images/logo.png'


const Logo = () => (
  <div className="header-logo">
    <a href="" className="logo">
      <img src={logo} alt="Logo" />
    </a>
    <div className="header-text">
      ore
      <br />
      just
      <br />
      edia
    </div>
  </div>
)

export default Logo
