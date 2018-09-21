import React, { Fragment } from 'react'
import './Links.css'


const navigation = [
  {links: '/', title: 'About Us'},
  {links: '/', title: 'Login'},
]


const Links = () => (
  <div className="header-links">
    <ul>
      {
        navigation.map((item, index) => (
          <li key={index}>
            <a href={item.links}>
              {
                item.title === 'Login' ? (
                  <Fragment>
                    {item.title}
                    <i className="fa fa-sign-in" />
                  </Fragment>
                ) : (
                  item.title
                )
              }
              </a>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Links
