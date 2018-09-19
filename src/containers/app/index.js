import React, { Fragment } from 'react'

import Header from '../../components/Header/Header'

const App = ({ children }) => (
  <Fragment>
    <Header />

    <main>
      {children}
    </main>
  </Fragment>
)

export default App
