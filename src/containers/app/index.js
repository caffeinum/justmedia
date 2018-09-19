import React, { Fragment } from 'react'

import Header from '../../components/Header/Header'
import { PageContainer } from "../../components/layout"


const App = ({ children }) => (
  <Fragment>
    <Header />

    <PageContainer>
      <main>
        {children}
      </main>
    </PageContainer>
  </Fragment>
)

export default App
