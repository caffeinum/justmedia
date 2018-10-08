import React from 'react'

import alex from './images/1.jpg'
import dan from './images/2.jpg'
import nik from './images/3.jpg'

const nav = [
  { link: 'https://github.com/ohld', img: dan, title: 'Daniil Okhlopkov', description: 'Product Architect, Data Scientist and Python Developer.' },
  { link: 'https://github.com/caffeinum', img: alex, title: 'Alexey', description: 'Have fun hacking blockchain using JS at swap.online' },
  { link: 'https://github.com/nikdementev', img: nik, title: 'Nikita', description: 'Dreamer, traveler, altruist and JS developer' },
]

const About = () => {
  return (
    <div style={{ textAlign: 'left', width: '800px' }}>
      <h1>About us</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {
          nav.map((item, index) =>
              <div key={index}>
                <img src={item.img} alt={`avatar ${item.img}`} width="200px" />
                <br/>
                <span style={{ width: '400px' }}>
            <a href={item.link} style={{ color: 'blue' }} target="_blank" rel="noreferrer noopener">{item.title}</a>
              <br/>
              <p style={{ width: '200px' }}>
                {item.description}
              </p>
          </span>
                <br/>
              </div>
          )
        }
      </div>
      <h3>Location Moscow Russia</h3>
    </div>
  )
}

export default About
