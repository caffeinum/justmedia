import React from 'react'
import './ButtonRows.css'


const ButtonRows = ({ word, getNews }) => (
  <div className="button-select">
    {
      word.map((item) => (
        <button onClick={() => getNews(item)}>
          Get news about {item}
        </button>
      ))
    }
  </div>
)

export default ButtonRows
