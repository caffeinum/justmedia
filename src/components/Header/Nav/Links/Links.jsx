import React from 'react'
import './Links.css'

import { NavLink } from 'react-router-dom'

import AltLogo from './AltLogo/AltLogo'

const navigation = [
  {links: '/', title: 'Home'},
  {links: '/news', title: 'News'},
  {links: '/about', title: 'About'},
]


const Links = () => (
  <nav  id="main-nav">
    <AltLogo />
    <ul className="main-nav nav navbar-nav">
      {
        navigation.map((item, index) => (
          <li key={index}>
            <NavLink to={item.links}>{item.title}</NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
)

export default Links
