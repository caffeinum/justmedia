import React from 'react'
import './Social.css'


const navigation = [
  {links: 'https://www.instagram.com/neuralcat/', icon: 'fa-instagram'},
  {links: 'https://t.me/testnet_exchange', icon: 'fa-paper-plane'},
  {links: 'https://twitter.com/caffeinum', icon: 'fa-twitter'},
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
