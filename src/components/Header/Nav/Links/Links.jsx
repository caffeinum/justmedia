import React from 'react'
import './Links.css'

import AltLogo from './AltLogo/AltLogo'

const navigation = [
  {links: '/home', title: 'Home'},
  {links: '/', title: 'Trends'},
  {links: '/about', title: 'About'},
]


const Links = () => (
  <nav  id="main-nav">
    <AltLogo />
    <ul className="main-nav nav navbar-nav">
      {
        navigation.map((item, index) => (
          <li key={index}>
            <a href={item.links}>{item.title}</a>
          </li>
        ))
      }
    </ul>
  </nav>
)

export default Links
