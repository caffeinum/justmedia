import React from 'react'
import './AltLogo.css'

import logo from './images/logo-alt.png'

const AltLogo = () => (
  <div className="nav-logo">
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  </div>
)

export default AltLogo
