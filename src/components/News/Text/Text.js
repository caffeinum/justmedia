import React from 'react'


const Text = ({ text }) => (
  <div>
     {
       text.split('\n').map(item => <p>{item}</p>)
     }
  </div>
)

export default Text
