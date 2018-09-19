import React from 'react'
import './ButtonRows.css'


const ButtonRows = ({ word, getNews }) => (
  <div className="button-select">
    {
      word.map((item, index) => (
        <button onClick={() => getNews(item)} key={index}>
          Get news about {item}
        </button>
      ))
    }
  </div>
)

export default ButtonRows
