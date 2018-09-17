import React from 'react'
import './Links.css'

import AltLogo from './AltLogo/AltLogo'

const navigation = [
  {links: '/', title: 'Home'},
  {links: '/', title: 'News'},
  {links: '/', title: 'Sport'},
  {links: '/', title: 'Lifestyle'},
  {links: '/', title: 'Fashion'},
  {links: '/', title: 'Music'},
  {links: '/', title: 'Business'},
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
