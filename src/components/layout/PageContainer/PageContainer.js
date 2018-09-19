import React from 'react'
import './PageContainer.css'


const PageContainer = ({ children }) => (
  <div className="section">
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  </div>
)

export default PageContainer
