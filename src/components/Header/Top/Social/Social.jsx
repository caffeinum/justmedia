import React from 'react'
import './Social.css'


const navigation = [
  {links: '/', icon: 'fa-facebook'},
  {links: '/', icon: 'fa-twitter'},
  {links: '/', icon: 'fa-google-plus'},
  {links: '/', icon: 'fa-instagram'},
  {links: '/', icon: 'fa-youtube'}
]


const Social = () => (
  <div className="header-social">
    <ul>
      {
        navigation.map((item, index) => (
          <li key={index}>
            <a href={item.links}>
              <i className={`fa ${item.icon}`} />
            </a>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Social
