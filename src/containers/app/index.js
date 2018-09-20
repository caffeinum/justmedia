import React, { Fragment } from 'react'

import Header from '../../components/Header/Header'
import { PageContainer } from "../../components/layout"


const App = ({ children }) => (
  <Fragment>
    <Header />

    <PageContainer>
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </main>
    </PageContainer>
  </Fragment>
)

export default App
