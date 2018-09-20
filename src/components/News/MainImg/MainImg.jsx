import React from 'react'

import './MainImg.css'


const MainImg = ({ img }) => {

  if (!img) {
    return <div className="blockImages" />
  }

  return (
    <div className="article-main-img">
      <img src={img} alt=""  />
    </div>
  )
}

export default MainImg
